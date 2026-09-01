import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Line, Polygon, Text as SvgText } from 'react-native-svg';
import { clipFeasibleRegion, graphBounds, lineSegmentInBox, LPProblem, LPSolution, Point } from '../lib/lp';

const W = 620;
const H = 520;
const PAD_L = 58;
const PAD_R = 22;
const PAD_T = 24;
const PAD_B = 54;
const COLORS = ['#2563eb', '#ea580c', '#7c3aed', '#0891b2', '#be123c', '#4d7c0f'];

function fmt(n: number) {
  if (Math.abs(n) < 1e-9) return '0';
  if (Math.abs(n) >= 1000) return n.toExponential(1);
  return Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
}

export default function LPGraph({ problem, solution }: { problem: LPProblem; solution: LPSolution }) {
  const bounds = useMemo(() => graphBounds(problem, solution), [problem, solution]);
  const feasible = useMemo(() => clipFeasibleRegion(problem, bounds), [problem, bounds]);
  const plotW = W - PAD_L - PAD_R;
  const plotH = H - PAD_T - PAD_B;
  const xSpan = bounds.maxX - bounds.minX;
  const ySpan = bounds.maxY - bounds.minY;
  const sx = (x: number) => PAD_L + ((x - bounds.minX) / xSpan) * plotW;
  const sy = (y: number) => PAD_T + plotH - ((y - bounds.minY) / ySpan) * plotH;
  const toPoints = (pts: Point[]) => pts.map((p) => `${sx(p.x)},${sy(p.y)}`).join(' ');

  // Major grid only: four intervals on either side of zero.
  const majorDivisions = 8;
  const ticks = Array.from({ length: majorDivisions + 1 }, (_, i) => ({
    x: bounds.minX + (i / majorDivisions) * xSpan,
    y: bounds.minY + (i / majorDivisions) * ySpan,
  }));

  const objectiveSegment = (() => {
    if (solution.status !== 'optimal' || solution.objectiveValue === undefined) return [];
    return lineSegmentInBox(problem.objective.x, problem.objective.y, solution.objectiveValue, bounds);
  })();

  const xAxisY = sy(0);
  const yAxisX = sx(0);

  return (
    <View style={styles.wrapper}>
      <Svg width="100%" height="auto" viewBox={`0 0 ${W} ${H}`} accessibilityLabel="Linear programming graph">
        {ticks.map((tick, i) => (
          <React.Fragment key={`major-grid-${i}`}>
            <Line x1={sx(tick.x)} y1={PAD_T} x2={sx(tick.x)} y2={PAD_T + plotH} stroke="#e2e8f0" strokeWidth="1" />
            <Line x1={PAD_L} y1={sy(tick.y)} x2={PAD_L + plotW} y2={sy(tick.y)} stroke="#e2e8f0" strokeWidth="1" />
            <SvgText x={sx(tick.x)} y={PAD_T + plotH + 22} fontSize="12" fill="#64748b" textAnchor="middle">
              {fmt(tick.x)}
            </SvgText>
            <SvgText x={PAD_L - 10} y={sy(tick.y) + 4} fontSize="12" fill="#64748b" textAnchor="end">
              {fmt(tick.y)}
            </SvgText>
          </React.Fragment>
        ))}

        {feasible.length >= 3 && (
          <Polygon points={toPoints(feasible)} fill="#bbf7d0" fillOpacity={0.58} stroke="#16a34a" strokeWidth="2" />
        )}

        {problem.constraints.map((c, index) => {
          const seg = lineSegmentInBox(c.a, c.b, c.rhs, bounds);
          if (seg.length !== 2) return null;
          return (
            <Line
              key={c.id}
              x1={sx(seg[0].x)}
              y1={sy(seg[0].y)}
              x2={sx(seg[1].x)}
              y2={sy(seg[1].y)}
              stroke={COLORS[index % COLORS.length]}
              strokeWidth="2.5"
            />
          );
        })}

        {objectiveSegment.length === 2 && (
          <Line
            x1={sx(objectiveSegment[0].x)}
            y1={sy(objectiveSegment[0].y)}
            x2={sx(objectiveSegment[1].x)}
            y2={sy(objectiveSegment[1].y)}
            stroke="#111827"
            strokeWidth="2.5"
            strokeDasharray="8 6"
          />
        )}

        {solution.vertices.map((p, i) => (
          <Circle key={`v-${i}`} cx={sx(p.x)} cy={sy(p.y)} r="4" fill="#334155" />
        ))}

        {solution.optimum && (
          <>
            <Circle cx={sx(solution.optimum.x)} cy={sy(solution.optimum.y)} r="8" fill="#dc2626" stroke="#fff" strokeWidth="2" />
            <SvgText x={sx(solution.optimum.x) + 10} y={sy(solution.optimum.y) - 10} fontSize="13" fill="#991b1b" fontWeight="700">
              optimum
            </SvgText>
          </>
        )}

        <Line x1={PAD_L} y1={xAxisY} x2={PAD_L + plotW} y2={xAxisY} stroke="#0f172a" strokeWidth="2" />
        <Line x1={yAxisX} y1={PAD_T} x2={yAxisX} y2={PAD_T + plotH} stroke="#0f172a" strokeWidth="2" />
        <SvgText x={PAD_L + plotW + 8} y={xAxisY + 4} fontSize="15" fill="#0f172a" fontWeight="700">x</SvgText>
        <SvgText x={yAxisX - 4} y={PAD_T - 8} fontSize="15" fill="#0f172a" fontWeight="700">y</SvgText>
      </Svg>

      <View style={styles.legend}>
        <View style={styles.legendItem}><View style={[styles.swatch, { backgroundColor: '#bbf7d0' }]} /><Text style={styles.legendText}>Feasible region</Text></View>
        <View style={styles.legendItem}><View style={[styles.dot, { backgroundColor: '#dc2626' }]} /><Text style={styles.legendText}>Optimal point</Text></View>
        <View style={styles.legendItem}><View style={styles.dash} /><Text style={styles.legendText}>Objective at optimum</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: '100%' },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: 14, paddingTop: 8, justifyContent: 'center' },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendText: { color: '#475569', fontSize: 12 },
  swatch: { width: 18, height: 12, borderWidth: 1, borderColor: '#16a34a' },
  dot: { width: 10, height: 10, borderRadius: 5 },
  dash: { width: 22, height: 2, backgroundColor: '#111827' },
});
