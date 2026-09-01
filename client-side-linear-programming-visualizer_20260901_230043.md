<!-- P2M_REPORT -->
<!-- GENERATED at 2026-09-01 23:00:43 -->
# Project Export: client-side-linear-programming-visualizer

## Overview

- Root: `/home/skinner/client-side-linear-programming-visualizer`
- Files: **28**
- Total size: **49010 bytes**
- Project ignore files: `.gitignore` (24 patterns), `.dockerignore` (7 patterns)
- Total LOC: 1285 | SLOC: 1140 | TODOs: 0

### Language mix
- markdown: 6
- tsx: 5
- plain: 4
- yaml: 4
- typescript: 4
- json: 2
- javascript: 2
- dockerfile: 1

### Top 12 largest files (bytes)
- `frontend/app/screens/HomeScreen.tsx` — 11483 bytes
- `LICENSE` — 11357 bytes
- `frontend/app/lib/lp.ts` — 8271 bytes
- `frontend/app/components/LPGraph.tsx` — 5708 bytes
- `frontend/app/__tests__/lp.test.ts` — 1763 bytes
- `frontend/app/components/SettingsBar.tsx` — 1655 bytes
- `frontend/app/components/NumberField.tsx` — 1346 bytes
- `README.md` — 1148 bytes
- `.github/workflows/deploy-pages.yml` — 893 bytes
- `frontend/Dockerfile` — 837 bytes
- `.github/workflows/ci.yml` — 795 bytes
- `frontend/app/app.json` — 470 bytes

### Top 12 longest files (LOC)
- `frontend/app/lib/lp.ts` — 265 LOC
- `frontend/app/screens/HomeScreen.tsx` — 217 LOC
- `LICENSE` — 201 LOC
- `frontend/app/components/LPGraph.tsx` — 130 LOC
- `frontend/app/__tests__/lp.test.ts` — 57 LOC
- `frontend/app/components/NumberField.tsx` — 53 LOC
- `frontend/app/components/SettingsBar.tsx` — 52 LOC
- `README.md` — 50 LOC
- `.github/workflows/deploy-pages.yml` — 39 LOC
- `frontend/Dockerfile` — 36 LOC
- `.github/workflows/ci.yml` — 33 LOC
- `.github/ISSUE_TEMPLATE/bug_report.md` — 23 LOC

### Project tree (included subset)
```
client-side-linear-programming-visualizer/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── bug_report.md
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy-pages.yml
│   └── pull_request_template.md
├── frontend/
│   ├── app/
│   │   ├── __tests__/
│   │   │   └── lp.test.ts
│   │   ├── components/
│   │   │   ├── LPGraph.tsx
│   │   │   ├── NumberField.tsx
│   │   │   └── SettingsBar.tsx
│   │   ├── lib/
│   │   │   └── lp.ts
│   │   ├── screens/
│   │   │   ├── HomeScreen.tsx
│   │   │   └── HomeScreenUtil.ts
│   │   ├── app.json
│   │   ├── App.tsx
│   │   ├── index.ts
│   │   ├── jest.config.js
│   │   ├── metro.config.js
│   │   └── tsconfig.json
│   ├── Dockerfile
│   └── Dockerfile.test
├── .dockerignore
├── .gitignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── docker-compose.test.yml
├── docker-compose.yml
├── LICENSE
├── README.md
└── SECURITY.md
```

## Table of contents (files)

- 1. [.dockerignore](#.dockerignore)
- 2. [.github/ISSUE_TEMPLATE/bug_report.md](#.github-ISSUE_TEMPLATE-bug_report.md)
- 3. [.github/pull_request_template.md](#.github-pull_request_template.md)
- 4. [.github/workflows/ci.yml](#.github-workflows-ci.yml)
- 5. [.github/workflows/deploy-pages.yml](#.github-workflows-deploy-pages.yml)
- 6. [.gitignore](#.gitignore)
- 7. [CODE_OF_CONDUCT.md](#CODE_OF_CONDUCT.md)
- 8. [CONTRIBUTING.md](#CONTRIBUTING.md)
- 9. [docker-compose.test.yml](#docker-compose.test.yml)
- 10. [docker-compose.yml](#docker-compose.yml)
- 11. [frontend/app/__tests__/lp.test.ts](#frontend-app-__tests__-lp.test.ts)
- 12. [frontend/app/app.json](#frontend-app-app.json)
- 13. [frontend/app/App.tsx](#frontend-app-App.tsx)
- 14. [frontend/app/components/LPGraph.tsx](#frontend-app-components-LPGraph.tsx)
- 15. [frontend/app/components/NumberField.tsx](#frontend-app-components-NumberField.tsx)
- 16. [frontend/app/components/SettingsBar.tsx](#frontend-app-components-SettingsBar.tsx)
- 17. [frontend/app/index.ts](#frontend-app-index.ts)
- 18. [frontend/app/jest.config.js](#frontend-app-jest.config.js)
- 19. [frontend/app/lib/lp.ts](#frontend-app-lib-lp.ts)
- 20. [frontend/app/metro.config.js](#frontend-app-metro.config.js)
- 21. [frontend/app/screens/HomeScreen.tsx](#frontend-app-screens-HomeScreen.tsx)
- 22. [frontend/app/screens/HomeScreenUtil.ts](#frontend-app-screens-HomeScreenUtil.ts)
- 23. [frontend/app/tsconfig.json](#frontend-app-tsconfig.json)
- 24. [frontend/Dockerfile](#frontend-Dockerfile)
- 25. [frontend/Dockerfile.test](#frontend-Dockerfile.test)
- 26. [LICENSE](#LICENSE)
- 27. [README.md](#README.md)
- 28. [SECURITY.md](#SECURITY.md)

---

## Files

<a id=".dockerignore"></a>
### 1. `.dockerignore`
- Size: 60 bytes | LOC: 7 | SLOC: 7 | TODOs: 0 | Modified: 2026-09-01 13:53:46 | SHA1: 5218c381bb83

#### Brief
.git
node_modules

#### Auto Summary
.git

#### Content

```
.git
node_modules
**/node_modules
.expo
dist
coverage
*.log
```

<a id=".github-ISSUE_TEMPLATE-bug_report.md"></a>
### 2. `.github/ISSUE_TEMPLATE/bug_report.md`
- Size: 261 bytes | LOC: 23 | SLOC: 18 | TODOs: 0 | Modified: 2026-09-01 13:55:26 | SHA1: 89fc9f70cfb7

#### Brief
---
name: Bug Report

#### Auto Summary
Description

#### Content (verbatim)

```markdown
---
name: Bug Report
about: Report a reproducible problem
title: "[Bug] "
labels: bug
assignees: ''
---

## Description

## Steps to Reproduce
1.
2.
3.

## Expected Behavior

## Environment
- OS:
- Browser / Expo version:
- Node version:

## Additional Context
```

<a id=".github-pull_request_template.md"></a>
### 3. `.github/pull_request_template.md`
- Size: 169 bytes | LOC: 14 | SLOC: 10 | TODOs: 0 | Modified: 2026-09-01 13:55:26 | SHA1: 2fa3bc06359c

#### Brief
# Pull Request

#### Auto Summary
Pull Request

#### Content (verbatim)

```markdown
# Pull Request

## Overview

## Changes
-

## Testing
- [ ] `npm run typecheck`
- [ ] `npm test -- --runInBand`
- [ ] `npm run export:web`

## Related Issues
- Closes #
```

<a id=".github-workflows-ci.yml"></a>
### 4. `.github/workflows/ci.yml`
- Size: 795 bytes | LOC: 33 | SLOC: 33 | TODOs: 0 | Modified: 2026-09-01 13:54:57 | SHA1: dbfbb1c24a5b

#### Brief
name: CI
on:

#### Auto Summary
name: CI

#### Content

```yaml
name: CI
on:
  push:
  pull_request:
concurrency:
  group: frontend-ci-${{ github.ref }}
  cancel-in-progress: true
permissions:
  contents: read
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        node: [22]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
      - name: Install dependencies
        working-directory: frontend/app
        run: npm install
      - name: Type check
        working-directory: frontend/app
        run: npm run typecheck
      - name: Tests
        working-directory: frontend/app
        run: npm test -- --ci --runInBand
      - name: Expo web export
        working-directory: frontend/app
        run: npm run export:web
```

<a id=".github-workflows-deploy-pages.yml"></a>
### 5. `.github/workflows/deploy-pages.yml`
- Size: 893 bytes | LOC: 39 | SLOC: 39 | TODOs: 0 | Modified: 2026-09-01 13:54:57 | SHA1: 912ed6067b36

#### Brief
name: GitHub Pages
on:

#### Auto Summary
name: GitHub Pages

#### Content

```yaml
name: GitHub Pages
on:
  push:
    branches: ["main"]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install dependencies
        working-directory: frontend/app
        run: npm install
      - name: Build web app
        working-directory: frontend/app
        run: npm run export:web
      - uses: actions/upload-pages-artifact@v3
        with:
          path: frontend/app/dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

<a id=".gitignore"></a>
### 6. `.gitignore`
- Size: 85 bytes | LOC: 10 | SLOC: 10 | TODOs: 0 | Modified: 2026-09-01 13:53:46 | SHA1: 09b46343df4e

#### Brief
node_modules/
.expo/

#### Auto Summary
node_modules/

#### Content

```
node_modules/
.expo/
dist/
web-build/
coverage/
*.log
.DS_Store
.vscode/
.idea/
.env
```

<a id="CODE_OF_CONDUCT.md"></a>
### 7. `CODE_OF_CONDUCT.md`
- Size: 205 bytes | LOC: 3 | SLOC: 2 | TODOs: 0 | Modified: 2026-09-01 13:55:26 | SHA1: 6a308c7b0474

#### Brief
# Code of Conduct

#### Auto Summary
Code of Conduct

#### Content (verbatim)

```markdown
# Code of Conduct

Be respectful, constructive, and professional. Harassment, threats, discriminatory conduct, and publication of another person's private information are not acceptable in project spaces.
```

<a id="CONTRIBUTING.md"></a>
### 8. `CONTRIBUTING.md`
- Size: 312 bytes | LOC: 8 | SLOC: 6 | TODOs: 0 | Modified: 2026-09-01 13:55:26 | SHA1: 9211e55a4608

#### Brief
# Contributing

#### Auto Summary
Contributing

#### Content (verbatim)

```markdown
# Contributing

Bug reports and pull requests are welcome.

1. Fork the repository and create a focused branch.
2. Keep the LP solver logic in `frontend/app/lib/lp.ts` independent from UI code.
3. Add or update tests for solver behavior.
4. Run type checking, tests, and the Expo web export before opening a PR.
```

<a id="docker-compose.test.yml"></a>
### 9. `docker-compose.test.yml`
- Size: 263 bytes | LOC: 10 | SLOC: 10 | TODOs: 0 | Modified: 2026-09-01 13:53:46 | SHA1: dd23a362440d

#### Brief
services:
  frontend_test:

#### Auto Summary
services:

#### Content

```yaml
services:
  frontend_test:
    build:
      context: ./frontend
      dockerfile: Dockerfile.test
    working_dir: /app
    volumes:
      - ./frontend/app:/app
      - /app/node_modules
    command: sh -lc "npm install && npm test -- --ci --runInBand --verbose"
```

<a id="docker-compose.yml"></a>
### 10. `docker-compose.yml`
- Size: 409 bytes | LOC: 18 | SLOC: 18 | TODOs: 0 | Modified: 2026-09-01 13:53:46 | SHA1: 5933ff633500

#### Brief
services:
  frontend:

#### Auto Summary
services:

#### Content

```yaml
services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: linear_programming_frontend
    working_dir: /app
    stdin_open: true
    tty: true
    volumes:
      - ./frontend/app:/app
      - /app/node_modules
    ports:
      - "19000:19000"
      - "19001:19001"
      - "19002:19002"
      - "8081:8081"
    command: sh -lc "npm install && npx expo start"
```

<a id="frontend-app-__tests__-lp.test.ts"></a>
### 11. `frontend/app/__tests__/lp.test.ts`
- Size: 1763 bytes | LOC: 57 | SLOC: 52 | TODOs: 0 | Modified: 2026-09-01 22:39:08 | SHA1: 6f61cade44d9

#### Brief
import { LPProblem, solveLP } from '../lib/lp';

#### Auto Summary
import { LPProblem, solveLP } from '../lib/lp';

#### Content

```typescript
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
```

<a id="frontend-app-app.json"></a>
### 12. `frontend/app/app.json`
- Size: 470 bytes | LOC: 14 | SLOC: 14 | TODOs: 0 | Modified: 2026-09-01 22:54:16 | SHA1: 6b37c7bce0ae

#### Brief
{
  "expo": {

#### Auto Summary
{

#### Content

```json
{
  "expo": {
    "name": "Linear Programming Visualizer",
    "slug": "client-side-linear-programming-visualizer",
    "version": "1.0.0",
    "orientation": "default",
    "userInterfaceStyle": "light",
    "newArchEnabled": true,
    "ios": { "supportsTablet": true },
    "android": { "predictiveBackGestureEnabled": false },
    "experiments": { "baseUrl": "/client-side-linear-programming-visualizer" },
    "web": { "output": "single", "bundler": "metro" }
  }
}
```

<a id="frontend-app-App.tsx"></a>
### 13. `frontend/app/App.tsx`
- Size: 413 bytes | LOC: 15 | SLOC: 14 | TODOs: 0 | Modified: 2026-09-01 13:53:46 | SHA1: 91f568884948

#### Brief
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

#### Auto Summary
import React from 'react';

#### Content

```tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import SettingsBar from './components/SettingsBar';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SettingsBar />
      <HomeScreen />
    </SafeAreaProvider>
  );
}
```

<a id="frontend-app-components-LPGraph.tsx"></a>
### 14. `frontend/app/components/LPGraph.tsx`
- Size: 5708 bytes | LOC: 130 | SLOC: 114 | TODOs: 0 | Modified: 2026-09-01 22:39:08 | SHA1: c48287dcf36e

#### Brief
import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

#### Auto Summary
import React, { useMemo } from 'react';

#### Content

```tsx
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
```

<a id="frontend-app-components-NumberField.tsx"></a>
### 15. `frontend/app/components/NumberField.tsx`
- Size: 1346 bytes | LOC: 53 | SLOC: 47 | TODOs: 0 | Modified: 2026-09-01 13:53:46 | SHA1: e2879a05174e

#### Brief
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, ViewStyle } from 'react-native';

#### Auto Summary
import React, { useEffect, useState } from 'react';

#### Content

```tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, ViewStyle } from 'react-native';

type Props = {
  value: number;
  onChange: (value: number) => void;
  width?: number;
  accessibilityLabel?: string;
  style?: ViewStyle;
};

export default function NumberField({ value, onChange, width = 64, accessibilityLabel, style }: Props) {
  const [text, setText] = useState(String(value));
  useEffect(() => setText(String(value)), [value]);

  const update = (next: string) => {
    setText(next);
    const parsed = Number(next);
    if (next.trim() !== '' && Number.isFinite(parsed)) onChange(parsed);
  };

  const normalize = () => {
    const parsed = Number(text);
    if (!Number.isFinite(parsed) || text.trim() === '') setText(String(value));
  };

  return (
    <TextInput
      accessibilityLabel={accessibilityLabel}
      value={text}
      onChangeText={update}
      onBlur={normalize}
      keyboardType="numbers-and-punctuation"
      selectTextOnFocus
      style={[styles.input, { width }, style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    minHeight: 42,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 7,
    backgroundColor: '#fff',
    color: '#0f172a',
    fontSize: 16,
    textAlign: 'right',
  },
});
```

<a id="frontend-app-components-SettingsBar.tsx"></a>
### 16. `frontend/app/components/SettingsBar.tsx`
- Size: 1655 bytes | LOC: 52 | SLOC: 50 | TODOs: 0 | Modified: 2026-09-01 13:53:46 | SHA1: 63c47ac23844

#### Brief
import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

#### Auto Summary
import React from 'react';

#### Content

```tsx
import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { REPO_URL } from '../screens/HomeScreenUtil';

export default function SettingsBar() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.bar}>
        <View style={styles.brandRow}>
          <View>
            <Text style={styles.title}>2D Linear Programming</Text>
            <Text style={styles.subtitle}>Graphical solver · client-side only</Text>
          </View>
          <Pressable
            accessibilityRole="link"
            onPress={() => Linking.openURL(REPO_URL)}
            style={({ pressed }) => [styles.linkButton, pressed && styles.pressed]}
          >
            <Text style={styles.linkText}>GitHub</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { backgroundColor: '#111827' },
  bar: { backgroundColor: '#111827', paddingHorizontal: 18, paddingVertical: 13 },
  brandRow: {
    width: '100%',
    maxWidth: 1180,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  title: { color: '#fff', fontSize: 20, fontWeight: '800' },
  subtitle: { color: '#cbd5e1', fontSize: 12, marginTop: 2 },
  linkButton: {
    minHeight: 40,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#475569',
    justifyContent: 'center',
  },
  linkText: { color: '#fff', fontWeight: '700' },
  pressed: { opacity: 0.75 },
});
```

<a id="frontend-app-index.ts"></a>
### 17. `frontend/app/index.ts`
- Size: 99 bytes | LOC: 3 | SLOC: 3 | TODOs: 0 | Modified: 2026-09-01 13:53:46 | SHA1: a49264c36ca0

#### Brief
import { registerRootComponent } from 'expo';
import App from './App';

#### Auto Summary
import { registerRootComponent } from 'expo';

#### Content

```typescript
import { registerRootComponent } from 'expo';
import App from './App';
registerRootComponent(App);
```

<a id="frontend-app-jest.config.js"></a>
### 18. `frontend/app/jest.config.js`
- Size: 95 bytes | LOC: 4 | SLOC: 4 | TODOs: 0 | Modified: 2026-09-01 13:53:46 | SHA1: e6a798e8d9b8

#### Brief
module.exports = {
  preset: 'jest-expo',

#### Auto Summary
module.exports = {

#### Content

```javascript
module.exports = {
  preset: 'jest-expo',
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
};
```

<a id="frontend-app-lib-lp.ts"></a>
### 19. `frontend/app/lib/lp.ts`
- Size: 8271 bytes | LOC: 265 | SLOC: 234 | TODOs: 0 | Modified: 2026-09-01 22:39:07 | SHA1: 02f1420559e2

#### Brief
export type Relation = '<=' | '>=';
export type Direction = 'max' | 'min';

#### Auto Summary
export type Relation = '<=' | '>=';

#### Content

```typescript
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
```

<a id="frontend-app-metro.config.js"></a>
### 20. `frontend/app/metro.config.js`
- Size: 105 bytes | LOC: 2 | SLOC: 2 | TODOs: 0 | Modified: 2026-09-01 13:53:46 | SHA1: 0af4720420c0

#### Brief
const { getDefaultConfig } = require('expo/metro-config');
module.exports = getDefaultConfig(__dirname);

#### Auto Summary
const { getDefaultConfig } = require('expo/metro-config');

#### Content

```javascript
const { getDefaultConfig } = require('expo/metro-config');
module.exports = getDefaultConfig(__dirname);
```

<a id="frontend-app-screens-HomeScreen.tsx"></a>
### 21. `frontend/app/screens/HomeScreen.tsx`
- Size: 11483 bytes | LOC: 217 | SLOC: 200 | TODOs: 0 | Modified: 2026-09-01 22:39:08 | SHA1: feb4976ca979

#### Brief
import React, { useMemo, useState } from 'react';
import {

#### Auto Summary
import React, { useMemo, useState } from 'react';

#### Content

```tsx
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
```

<a id="frontend-app-screens-HomeScreenUtil.ts"></a>
### 22. `frontend/app/screens/HomeScreenUtil.ts`
- Size: 203 bytes | LOC: 2 | SLOC: 2 | TODOs: 0 | Modified: 2026-09-01 22:54:16 | SHA1: 83e94d941ead

#### Brief
export const REPO_URL = 'https://github.com/europanite/client-side-linear-programming-visualizer';
export const REPO_URL_PAGE = 'https://europanite.github.io/client-side-linear-programming-visualizer/';

#### Auto Summary
export const REPO_URL = 'https://github.com/europanite/client-side-linear-programming-visualizer';

#### Content

```typescript
export const REPO_URL = 'https://github.com/europanite/client-side-linear-programming-visualizer';
export const REPO_URL_PAGE = 'https://europanite.github.io/client-side-linear-programming-visualizer/';
```

<a id="frontend-app-tsconfig.json"></a>
### 23. `frontend/app/tsconfig.json`
- Size: 180 bytes | LOC: 9 | SLOC: 9 | TODOs: 0 | Modified: 2026-09-01 22:58:09 | SHA1: 5036173d698c

#### Brief
{
  "extends": "expo/tsconfig.base",

#### Auto Summary
{

#### Content

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "bundler",
    "lib": ["esnext", "dom"],
    "types": ["jest", "node"]
  }
}
```

<a id="frontend-Dockerfile"></a>
### 24. `frontend/Dockerfile`
- Size: 837 bytes | LOC: 36 | SLOC: 29 | TODOs: 0 | Modified: 2026-09-01 22:32:46 | SHA1: 53794d2681d3

#### Brief
FROM node:22-bullseye

#### Auto Summary
FROM node:22-bullseye

#### Content

```dockerfile
FROM node:22-bullseye

WORKDIR /app

# React Native DevTools bundles a Chromium-based shell. Even for an Expo Web
# development container, Expo may install/probe it at startup, so the runtime
# libraries below must exist in the image.
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
      ca-certificates \
      libasound2 \
      libatk-bridge2.0-0 \
      libatk1.0-0 \
      libcups2 \
      libdbus-1-3 \
      libdrm2 \
      libgbm1 \
      libglib2.0-0 \
      libgtk-3-0 \
      libnspr4 \
      libnss3 \
      libpango-1.0-0 \
      libx11-6 \
      libxcb1 \
      libxcomposite1 \
      libxdamage1 \
      libxext6 \
      libxfixes3 \
      libxkbcommon0 \
      libxrandr2 \
    && rm -rf /var/lib/apt/lists/*

COPY app/package*.json ./
RUN npm install --no-audit --no-fund

CMD ["npm", "start"]
```

<a id="frontend-Dockerfile.test"></a>
### 25. `frontend/Dockerfile.test`
- Size: 139 bytes | LOC: 5 | SLOC: 5 | TODOs: 0 | Modified: 2026-09-01 13:53:46 | SHA1: 2eb81d84d31a

#### Brief
FROM node:22-bullseye
WORKDIR /app

#### Auto Summary
FROM node:22-bullseye

#### Content

```
FROM node:22-bullseye
WORKDIR /app
COPY app/package*.json ./
RUN npm install
CMD ["npm", "test", "--", "--ci", "--runInBand", "--verbose"]
```

<a id="LICENSE"></a>
### 26. `LICENSE`
- Size: 11357 bytes | LOC: 201 | SLOC: 169 | TODOs: 0 | Modified: 2026-09-01 22:45:15 | SHA1: 7df059597099

#### Brief
Apache License
                           Version 2.0, January 2004

#### Auto Summary
Apache License

#### Content

```
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

<a id="README.md"></a>
### 27. `README.md`
- Size: 1148 bytes | LOC: 50 | SLOC: 36 | TODOs: 0 | Modified: 2026-09-01 22:47:03 | SHA1: e4aa6def036a

#### Brief
# 2D Linear Programming Visualizer

#### Auto Summary
2D Linear Programming Visualizer

#### Content (verbatim)

```markdown
# 2D Linear Programming Visualizer

A client-side graphical solver for two-variable linear programming problems, built with Expo / React Native Web.

## Features

- Maximize or minimize `z = c₁x + c₂y`
- Add and remove linear constraints of the form `ax + by ≤ c` or `ax + by ≥ c`
- Draws every constraint line and the feasible region
- Enumerates feasible corner points
- Draws the objective line at the optimum
- Detects infeasible and unbounded problems

## Run locally

```bash
cd frontend/app
npm install
npm run web
```

Or with Docker:

```bash
docker compose build
docker compose up
```


## Test

```bash
cd frontend/app
npm install
npm test -- --runInBand
npm run typecheck
```

## How the solver works

1. Converts all inequalities to half-planes.
2. Intersects pairs of boundary lines, including the non-negativity boundaries.
3. Keeps only feasible intersections as candidate vertices.
4. Evaluates the objective at each vertex.
5. Checks the recession cone to distinguish a bounded optimum from an unbounded objective.
6. Clips a plotting rectangle by all half-planes to display the feasible region.

## License

- Apache-2.0
```

<a id="SECURITY.md"></a>
### 28. `SECURITY.md`
- Size: 286 bytes | LOC: 5 | SLOC: 3 | TODOs: 0 | Modified: 2026-09-01 13:55:26 | SHA1: 7c0a754e9106

#### Brief
# Security Policy

#### Auto Summary
Security Policy

#### Content (verbatim)

```markdown
# Security Policy

This project has no backend and intentionally performs LP solving in the client. Please do not include secrets in source code or Expo public environment variables.

For a security issue, contact the repository maintainer privately rather than opening a public issue.
```
