export type Relation = '<=' | '>=';
export type Direction = 'max' | 'min';

export type Constraint = {
  id: string;
  a: number;
  b: number;
  relation: Relation;
  rhs: number;
};

export type Point = { x: number; y: number };

export type LPProblem = {
  direction: Direction;
  objective: { x: number; y: number };
  constraints: Constraint[];
};

export type LPSolution = {
  status: 'optimal' | 'infeasible' | 'unbounded';
  vertices: Point[];
  optimum?: Point;
  objectiveValue?: number;
};

export type GraphBounds = {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
};

const EPS = 1e-8;

export function normalizedConstraints(problem: LPProblem) {
  return problem.constraints.map((c) =>
    c.relation === '<='
      ? { a: c.a, b: c.b, rhs: c.rhs, id: c.id }
      : { a: -c.a, b: -c.b, rhs: -c.rhs, id: c.id },
  );
}

export function isFeasible(problem: LPProblem, p: Point): boolean {
  return normalizedConstraints(problem).every((c) => c.a * p.x + c.b * p.y <= c.rhs + EPS);
}

function intersect(
  a1: number,
  b1: number,
  c1: number,
  a2: number,
  b2: number,
  c2: number,
): Point | null {
  const det = a1 * b2 - a2 * b1;
  if (Math.abs(det) < EPS) return null;
  return {
    x: (c1 * b2 - c2 * b1) / det,
    y: (a1 * c2 - a2 * c1) / det,
  };
}

function uniquePoints(points: Point[]): Point[] {
  const out: Point[] = [];
  for (const p of points) {
    if (!Number.isFinite(p.x) || !Number.isFinite(p.y)) continue;
    if (!out.some((q) => Math.hypot(p.x - q.x, p.y - q.y) < 1e-6)) out.push(p);
  }
  return out;
}

function feasibilityCandidates(problem: LPProblem): Point[] {
  const rows = normalizedConstraints(problem);
  const candidates: Point[] = [{ x: 0, y: 0 }];

  for (const row of rows) {
    const norm2 = row.a * row.a + row.b * row.b;
    if (norm2 > EPS) {
      candidates.push({
        x: (row.a * row.rhs) / norm2,
        y: (row.b * row.rhs) / norm2,
      });
    }
  }

  for (let i = 0; i < rows.length; i += 1) {
    for (let j = i + 1; j < rows.length; j += 1) {
      const p = intersect(rows[i].a, rows[i].b, rows[i].rhs, rows[j].a, rows[j].b, rows[j].rhs);
      if (p) candidates.push(p);
    }
  }

  return uniquePoints(candidates).filter((p) => isFeasible(problem, p));
}

export function feasibleVertices(problem: LPProblem): Point[] {
  const rows = normalizedConstraints(problem);
  const candidates: Point[] = [];
  for (let i = 0; i < rows.length; i += 1) {
    for (let j = i + 1; j < rows.length; j += 1) {
      const p = intersect(rows[i].a, rows[i].b, rows[i].rhs, rows[j].a, rows[j].b, rows[j].rhs);
      if (p && isFeasible(problem, p)) candidates.push(p);
    }
  }

  const vertices = uniquePoints(candidates);
  if (vertices.length <= 2) return vertices;
  const center = vertices.reduce(
    (acc, p) => ({ x: acc.x + p.x / vertices.length, y: acc.y + p.y / vertices.length }),
    { x: 0, y: 0 },
  );
  return vertices.sort(
    (p, q) => Math.atan2(p.y - center.y, p.x - center.x) - Math.atan2(q.y - center.y, q.x - center.x),
  );
}

function objective(problem: LPProblem, p: Point) {
  return problem.objective.x * p.x + problem.objective.y * p.y;
}

function hasImprovingRecessionDirection(problem: LPProblem): boolean {
  const rows = normalizedConstraints(problem);
  const objectiveSign = problem.direction === 'max' ? 1 : -1;
  const cx = objectiveSign * problem.objective.x;
  const cy = objectiveSign * problem.objective.y;
  if (Math.hypot(cx, cy) < EPS) return false;

  const angles: number[] = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];
  for (const row of rows) {
    if (Math.hypot(row.a, row.b) < EPS) continue;
    const base = Math.atan2(-row.a, row.b);
    angles.push((base + Math.PI * 2) % (Math.PI * 2));
    angles.push((base + Math.PI + Math.PI * 2) % (Math.PI * 2));
  }
  angles.sort((a, b) => a - b);
  const probes = [...angles];
  for (let i = 0; i < angles.length; i += 1) {
    const a = angles[i];
    const b = i === angles.length - 1 ? angles[0] + Math.PI * 2 : angles[i + 1];
    probes.push(((a + b) / 2) % (Math.PI * 2));
  }

  return probes.some((angle) => {
    const d = { x: Math.cos(angle), y: Math.sin(angle) };
    const recessionFeasible = rows.every((row) => row.a * d.x + row.b * d.y <= 1e-7);
    return recessionFeasible && cx * d.x + cy * d.y > 1e-7;
  });
}

export function solveLP(problem: LPProblem): LPSolution {
  const feasiblePoints = feasibilityCandidates(problem);
  if (feasiblePoints.length === 0) return { status: 'infeasible', vertices: [] };

  const vertices = feasibleVertices(problem);
  if (hasImprovingRecessionDirection(problem)) return { status: 'unbounded', vertices };

  const candidates = vertices.length > 0 ? vertices : feasiblePoints;
  const directionFactor = problem.direction === 'max' ? 1 : -1;
  let optimum = candidates[0];
  let best = directionFactor * objective(problem, optimum);
  for (const p of candidates.slice(1)) {
    const value = directionFactor * objective(problem, p);
    if (value > best + EPS) {
      best = value;
      optimum = p;
    }
  }
  return {
    status: 'optimal',
    vertices,
    optimum,
    objectiveValue: objective(problem, optimum),
  };
}

export function clipFeasibleRegion(problem: LPProblem, bounds: GraphBounds): Point[] {
  let polygon: Point[] = [
    { x: bounds.minX, y: bounds.minY },
    { x: bounds.maxX, y: bounds.minY },
    { x: bounds.maxX, y: bounds.maxY },
    { x: bounds.minX, y: bounds.maxY },
  ];

  const clipBy = (input: Point[], a: number, b: number, rhs: number) => {
    if (input.length === 0) return input;
    const output: Point[] = [];
    const inside = (p: Point) => a * p.x + b * p.y <= rhs + EPS;
    const crossing = (p1: Point, p2: Point) => {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const denom = a * dx + b * dy;
      if (Math.abs(denom) < EPS) return p2;
      const t = (rhs - a * p1.x - b * p1.y) / denom;
      return { x: p1.x + t * dx, y: p1.y + t * dy };
    };
    for (let i = 0; i < input.length; i += 1) {
      const current = input[i];
      const previous = input[(i + input.length - 1) % input.length];
      const currentInside = inside(current);
      const previousInside = inside(previous);
      if (currentInside) {
        if (!previousInside) output.push(crossing(previous, current));
        output.push(current);
      } else if (previousInside) {
        output.push(crossing(previous, current));
      }
    }
    return output;
  };

  for (const row of normalizedConstraints(problem)) {
    polygon = clipBy(polygon, row.a, row.b, row.rhs);
  }
  return uniquePoints(polygon);
}

export function lineSegmentInBox(a: number, b: number, rhs: number, bounds: GraphBounds): Point[] {
  const points: Point[] = [];
  if (Math.abs(b) > EPS) {
    points.push({ x: bounds.minX, y: (rhs - a * bounds.minX) / b });
    points.push({ x: bounds.maxX, y: (rhs - a * bounds.maxX) / b });
  }
  if (Math.abs(a) > EPS) {
    points.push({ x: (rhs - b * bounds.minY) / a, y: bounds.minY });
    points.push({ x: (rhs - b * bounds.maxY) / a, y: bounds.maxY });
  }
  return uniquePoints(points)
    .filter(
      (p) =>
        p.x >= bounds.minX - EPS &&
        p.x <= bounds.maxX + EPS &&
        p.y >= bounds.minY - EPS &&
        p.y <= bounds.maxY + EPS,
    )
    .slice(0, 2);
}

function niceExtent(v: number) {
  const raw = Math.max(1, v * 1.2);
  const power = 10 ** Math.floor(Math.log10(raw));
  const scaled = raw / power;
  const n = scaled <= 1 ? 1 : scaled <= 2 ? 2 : scaled <= 5 ? 5 : 10;
  return n * power;
}

export function graphBounds(problem: LPProblem, solution: LPSolution): GraphBounds {
  const magnitudes = [10];
  for (const p of solution.vertices) magnitudes.push(Math.abs(p.x), Math.abs(p.y));
  if (solution.optimum) magnitudes.push(Math.abs(solution.optimum.x), Math.abs(solution.optimum.y));

  for (const c of problem.constraints) {
    if (Math.abs(c.a) > EPS) {
      const x = c.rhs / c.a;
      if (Number.isFinite(x)) magnitudes.push(Math.abs(x));
    }
    if (Math.abs(c.b) > EPS) {
      const y = c.rhs / c.b;
      if (Number.isFinite(y)) magnitudes.push(Math.abs(y));
    }
  }

  const extent = niceExtent(Math.max(...magnitudes));
  return { minX: -extent, maxX: extent, minY: -extent, maxY: extent };
}
