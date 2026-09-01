import React, { useMemo, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import LPGraph from '../components/LPGraph';
import NumberField from '../components/NumberField';
import { Constraint, Direction, LPProblem, Relation, solveLP } from '../lib/lp';

const SAMPLE: LPProblem = {
  direction: 'max',
  objective: { x: 6, y: 5 },
  constraints: [
    { id: 'c1', a: 2, b: 1, relation: '<=', rhs: 40 },
    { id: 'c2', a: 1, b: 2, relation: '<=', rhs: 50 },
    { id: 'c3', a: 1, b: 0, relation: '<=', rhs: 16 },
  ],
};

let nextId = 4;

function fmt(n: number) {
  return Number.isInteger(n) ? String(n) : n.toFixed(3).replace(/0+$/, '').replace(/\.$/, '');
}

function Segmented<T extends string>({ value, values, onChange }: { value: T; values: { value: T; label: string }[]; onChange: (value: T) => void }) {
  return (
    <View style={styles.segmented}>
      {values.map((item) => (
        <Pressable
          key={item.value}
          onPress={() => onChange(item.value)}
          style={({ pressed }) => [styles.segment, value === item.value && styles.segmentActive, pressed && { opacity: 0.8 }]}
        >
          <Text style={[styles.segmentText, value === item.value && styles.segmentTextActive]}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const compact = width < 900;
  const [problem, setProblem] = useState<LPProblem>(SAMPLE);
  const solution = useMemo(() => solveLP(problem), [problem]);

  const updateObjective = (key: 'x' | 'y', value: number) =>
    setProblem((p) => ({ ...p, objective: { ...p.objective, [key]: value } }));

  const updateConstraint = (id: string, patch: Partial<Constraint>) =>
    setProblem((p) => ({ ...p, constraints: p.constraints.map((c) => (c.id === id ? { ...c, ...patch } : c)) }));

  const addConstraint = () => {
    const id = `c${nextId++}`;
    setProblem((p) => ({ ...p, constraints: [...p.constraints, { id, a: 1, b: 1, relation: '<=', rhs: 20 }] }));
  };

  const removeConstraint = (id: string) =>
    setProblem((p) => ({ ...p, constraints: p.constraints.filter((c) => c.id !== id) }));

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.pageContent} keyboardShouldPersistTaps="handled">
      <View style={styles.intro}>
        <Text style={styles.heading}>Solve a two-variable LP graphically</Text>
        <Text style={styles.lead}>
          Edit the objective and linear constraints. The browser computes all boundary intersections, clips the feasible region, and identifies the optimum without a server.
        </Text>
      </View>

      <View style={[styles.layout, compact && styles.layoutCompact]}>
        <View style={[styles.panel, styles.formPanel, compact && styles.fullWidth]}>
          <Text style={styles.sectionTitle}>1. Objective</Text>
          <View style={styles.rowWrap}>
            <Segmented<Direction>
              value={problem.direction}
              values={[{ value: 'max', label: 'Maximize' }, { value: 'min', label: 'Minimize' }]}
              onChange={(direction) => setProblem((p) => ({ ...p, direction }))}
            />
            <View style={styles.formulaRow}>
              <Text style={styles.formulaText}>z =</Text>
              <NumberField value={problem.objective.x} onChange={(v) => updateObjective('x', v)} accessibilityLabel="Objective x coefficient" />
              <Text style={styles.formulaText}>x +</Text>
              <NumberField value={problem.objective.y} onChange={(v) => updateObjective('y', v)} accessibilityLabel="Objective y coefficient" />
              <Text style={styles.formulaText}>y</Text>
            </View>
          </View>

          <View style={styles.divider} />
          <Text style={styles.sectionTitle}>2. Constraints</Text>
          <Text style={styles.helper}>x and y are unrestricted in sign unless you add bounds explicitly.</Text>

          <View style={styles.constraints}>
            {problem.constraints.map((c, index) => (
              <View key={c.id} style={styles.constraintRow}>
                <Text style={styles.constraintLabel}>C{index + 1}</Text>
                <NumberField value={c.a} onChange={(v) => updateConstraint(c.id, { a: v })} accessibilityLabel={`Constraint ${index + 1} x coefficient`} />
                <Text style={styles.formulaText}>x +</Text>
                <NumberField value={c.b} onChange={(v) => updateConstraint(c.id, { b: v })} accessibilityLabel={`Constraint ${index + 1} y coefficient`} />
                <Text style={styles.formulaText}>y</Text>
                <Segmented<Relation>
                  value={c.relation}
                  values={[{ value: '<=', label: '≤' }, { value: '>=', label: '≥' }]}
                  onChange={(relation) => updateConstraint(c.id, { relation })}
                />
                <NumberField value={c.rhs} onChange={(v) => updateConstraint(c.id, { rhs: v })} width={76} accessibilityLabel={`Constraint ${index + 1} right hand side`} />
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={`Remove constraint ${index + 1}`}
                  onPress={() => removeConstraint(c.id)}
                  disabled={problem.constraints.length <= 1}
                  style={({ pressed }) => [styles.removeButton, problem.constraints.length <= 1 && styles.disabled, pressed && { opacity: 0.7 }]}
                >
                  <Text style={styles.removeText}>×</Text>
                </Pressable>
              </View>
            ))}
          </View>

          <View style={styles.actionRow}>
            <Pressable onPress={addConstraint} style={({ pressed }) => [styles.secondaryButton, pressed && { opacity: 0.8 }]}>
              <Text style={styles.secondaryButtonText}>+ Add constraint</Text>
            </Pressable>
            <Pressable onPress={() => setProblem(SAMPLE)} style={({ pressed }) => [styles.secondaryButton, pressed && { opacity: 0.8 }]}>
              <Text style={styles.secondaryButtonText}>Reset example</Text>
            </Pressable>
          </View>

          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>Result</Text>
            {solution.status === 'optimal' && solution.optimum ? (
              <>
                <Text style={styles.resultStatus}>Optimal solution found</Text>
                <Text style={styles.resultMain}>x = {fmt(solution.optimum.x)}, y = {fmt(solution.optimum.y)}</Text>
                <Text style={styles.resultValue}>z = {fmt(solution.objectiveValue ?? 0)}</Text>
              </>
            ) : solution.status === 'unbounded' ? (
              <>
                <Text style={[styles.resultStatus, { color: '#b45309' }]}>Unbounded objective</Text>
                <Text style={styles.helper}>The feasible region allows continued improvement in the objective direction.</Text>
              </>
            ) : (
              <>
                <Text style={[styles.resultStatus, { color: '#b91c1c' }]}>No feasible solution</Text>
                <Text style={styles.helper}>The constraints have no common feasible point.</Text>
              </>
            )}
          </View>
        </View>

        <View style={[styles.panel, styles.graphPanel, compact && styles.fullWidth]}>
          <Text style={styles.sectionTitle}>3. Graphical solution</Text>
          <LPGraph problem={problem} solution={solution} />
          <View style={styles.vertexBox}>
            <Text style={styles.vertexTitle}>Feasible vertices</Text>
            {solution.vertices.length ? (
              <View style={styles.vertexList}>
                {solution.vertices.map((p, i) => (
                  <Text key={`${p.x}-${p.y}-${i}`} style={styles.vertexChip}>({fmt(p.x)}, {fmt(p.y)})</Text>
                ))}
              </View>
            ) : (
              <Text style={styles.helper}>None</Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f8fafc' },
  pageContent: { paddingHorizontal: 16, paddingVertical: 24, paddingBottom: 48 },
  intro: { width: '100%', maxWidth: 1180, alignSelf: 'center', marginBottom: 18 },
  heading: { color: '#0f172a', fontSize: 30, fontWeight: '900', letterSpacing: -0.5 },
  lead: { color: '#475569', fontSize: 15, lineHeight: 23, marginTop: 6, maxWidth: 800 },
  layout: { width: '100%', maxWidth: 1180, alignSelf: 'center', flexDirection: 'row', gap: 16, alignItems: 'flex-start' },
  layoutCompact: { flexDirection: 'column' },
  panel: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#e2e8f0', borderRadius: 14, padding: 18 },
  formPanel: { flex: 0.92, minWidth: 0 },
  graphPanel: { flex: 1.25, minWidth: 0 },
  fullWidth: { width: '100%', flex: 0 },
  sectionTitle: { color: '#0f172a', fontSize: 17, fontWeight: '800', marginBottom: 12 },
  helper: { color: '#64748b', fontSize: 13, lineHeight: 19 },
  rowWrap: { gap: 12 },
  formulaRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 8 },
  formulaText: { color: '#334155', fontSize: 16, fontWeight: '600' },
  divider: { height: 1, backgroundColor: '#e2e8f0', marginVertical: 18 },
  segmented: { flexDirection: 'row', borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 8, overflow: 'hidden', alignSelf: 'flex-start' },
  segment: { minHeight: 40, minWidth: 46, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  segmentActive: { backgroundColor: '#e0e7ff' },
  segmentText: { color: '#475569', fontWeight: '700', fontSize: 13 },
  segmentTextActive: { color: '#3730a3' },
  constraints: { marginTop: 10, gap: 10 },
  constraintRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 7 },
  constraintLabel: { width: 28, color: '#64748b', fontSize: 12, fontWeight: '800' },
  removeButton: { width: 40, height: 40, borderRadius: 8, borderWidth: 1, borderColor: '#fecaca', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff7f7' },
  removeText: { color: '#b91c1c', fontSize: 22, lineHeight: 24 },
  disabled: { opacity: 0.35 },
  actionRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 14 },
  secondaryButton: { minHeight: 42, justifyContent: 'center', borderRadius: 8, borderWidth: 1, borderColor: '#94a3b8', paddingHorizontal: 13, backgroundColor: '#fff' },
  secondaryButtonText: { color: '#334155', fontWeight: '700' },
  resultBox: { marginTop: 18, padding: 14, borderRadius: 10, backgroundColor: '#f1f5f9' },
  resultTitle: { color: '#475569', fontWeight: '800', fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.8 },
  resultStatus: { color: '#15803d', fontSize: 14, fontWeight: '800', marginTop: 7 },
  resultMain: { color: '#0f172a', fontSize: 19, fontWeight: '900', marginTop: 5 },
  resultValue: { color: '#0f172a', fontSize: 16, fontWeight: '700', marginTop: 2 },
  vertexBox: { borderTopWidth: 1, borderTopColor: '#e2e8f0', marginTop: 12, paddingTop: 12 },
  vertexTitle: { color: '#334155', fontWeight: '800', fontSize: 13, marginBottom: 8 },
  vertexList: { flexDirection: 'row', flexWrap: 'wrap', gap: 7 },
  vertexChip: { backgroundColor: '#f1f5f9', color: '#334155', paddingHorizontal: 8, paddingVertical: 5, borderRadius: 7, fontSize: 12, overflow: 'hidden' },
});
