# React CI/CD Lab

A minimal React + TypeScript + Vite project for practicing CI/CD. No workflow configuration is included.

## Getting started

Use Node.js 24.12 or newer (Node 24 LTS recommended).

```sh
nvm use
npm ci
npm run dev
```

Open the local URL printed by Vite. Home is at `/`; About is at `/about` and linked from Home. The counter supports increment and reset.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run Oxlint; fail on warnings |
| `npm run typecheck` | Check TypeScript in app, tests, and config |
| `npm test` | Run Vitest tests once and exit |
| `npm run test:watch` | Run tests in watch mode |
| `npm run build` | Build production files in `dist/` |
| `npm run preview` | Preview the production build locally |

These checks are intentionally separate: `build` bundles the app; `typecheck` verifies types.

A typical set of CI commands to practice configuring yourself:

```sh
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

Commit `package-lock.json` whenever dependencies change so `npm ci` stays reproducible.

## Project layout

- `src/App.tsx`: shared layout and Home, About, and fallback routes
- `src/components/Counter.tsx`: stateful counter component
- `src/App.test.tsx`: navigation, direct routes, counter, and fallback tests
- `src/test/setup.ts`: DOM matchers and test cleanup
- `vite.config.ts`: Vite and Vitest configuration

Tests use React Testing Library and jsdom. Production hosting must serve `index.html` for client routes such as `/about` (SPA fallback). No deployment or GitHub Actions workflows are included.
