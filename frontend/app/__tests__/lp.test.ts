import { LPProblem, solveLP } from '../lib/lp';

const bounded: LPProblem = {
  direction: 'max',
  objective: { x: 6, y: 5 },
  constraints: [
    { id: 'c1', a: 2, b: 1, relation: '<=', rhs: 40 },
    { id: 'c2', a: 1, b: 2, relation: '<=', rhs: 50 },
    { id: 'c3', a: 1, b: 0, relation: '<=', rhs: 16 },
  ],
};

test('finds the optimum for the sample problem', () => {
  const result = solveLP(bounded);
  expect(result.status).toBe('optimal');
  expect(result.optimum?.x).toBeCloseTo(10);
  expect(result.optimum?.y).toBeCloseTo(20);
  expect(result.objectiveValue).toBeCloseTo(160);
});

test('detects infeasible constraints', () => {
  const result = solveLP({
    direction: 'max',
    objective: { x: 1, y: 1 },
    constraints: [
      { id: 'a', a: 1, b: 0, relation: '<=', rhs: 1 },
      { id: 'b', a: 1, b: 0, relation: '>=', rhs: 2 },
    ],
  });
  expect(result.status).toBe('infeasible');
});

test('detects an unbounded objective', () => {
  const result = solveLP({
    direction: 'max',
    objective: { x: 1, y: 1 },
    constraints: [{ id: 'a', a: 1, b: -1, relation: '>=', rhs: 0 }],
  });
  expect(result.status).toBe('unbounded');
});

test('supports an optimum in the negative domain', () => {
  const result = solveLP({
    direction: 'max',
    objective: { x: 1, y: 1 },
    constraints: [
      { id: 'x-upper', a: 1, b: 0, relation: '<=', rhs: -2 },
      { id: 'x-lower', a: 1, b: 0, relation: '>=', rhs: -4 },
      { id: 'y-upper', a: 0, b: 1, relation: '<=', rhs: 3 },
      { id: 'y-lower', a: 0, b: 1, relation: '>=', rhs: 1 },
    ],
  });
  expect(result.status).toBe('optimal');
  expect(result.optimum?.x).toBeCloseTo(-2);
  expect(result.optimum?.y).toBeCloseTo(3);
  expect(result.objectiveValue).toBeCloseTo(1);
});
