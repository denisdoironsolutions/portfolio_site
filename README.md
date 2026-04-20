# denisdoiron.solutions

Personal portfolio — Denis Doiron, freelance SAP Business One + AWS consultant.

## Stack

- Vite 6 + React 19 + TypeScript (strict)
- React Router 7
- CSS Modules + design tokens (global CSS for typography, layout primitives, buttons)
- Self-hosted Fraunces + Inter + JetBrains Mono via @fontsource-variable

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Produces `dist/` with `index.html`, `404.html` (copy of index), and hashed assets.

## Deploy

Push to `main` → GitHub Actions builds and publishes to GitHub Pages. Custom domain: `denisdoiron.solutions` (configured via `public/CNAME`).
