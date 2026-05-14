# lakon-site

Landing page for [lakon](https://github.com/bargadev/lakon-lib) — live at **[lakon.fun](https://lakon.fun)**.

## Stack

- Next.js 14 (App Router, static export)
- TypeScript
- CSS Modules
- pnpm
- Deployed to GitHub Pages via GH Actions

## Develop

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

Output: `out/` (static HTML/CSS/JS, ready for any static host).

## Deploy

Push to `main` → GH Actions workflow builds and deploys to Pages.
