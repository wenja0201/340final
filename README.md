# 340 Consultancy

Website for 340 Consultancy — a boutique, strategy-led social media consultancy. Strategy, management, 1:1 coaching and content & copywriting, in EN, NL, DE & ES.

## Tech stack

- Vite
- TypeScript
- React + React Router
- shadcn-ui
- Tailwind CSS
- Framer Motion

## Getting started

```sh
npm i
npm run dev
```

The site runs on `http://localhost:8080`.

Behind the scenes, `src/components/PasswordGate.tsx` gates access via `sessionStorage`; the password is read from `VITE_SITE_PASSWORD` in `.env.local`.

## Build & deploy

```sh
npm run build
```

### Vercel (GitHub-connected)

1. Push this repo to GitHub (already done — `Sebaspac/340`).
2. In Vercel: **Add New → Project → Import Git Repository**, pick this repo.
3. Framework preset: Vercel should auto-detect **Vite** from `vercel.json`.
   Build command `npm run build`, output directory `dist` (already set in
   `vercel.json`, no need to touch the defaults).
4. Add environment variables under **Project → Settings → Environment
   Variables** for both **Preview** and **Production** — see `.env.example`
   for the full list (`VITE_SITE_PASSWORD`, `VITE_STRAPI_URL`, ...).
5. Every push to `main` deploys to Production; every other branch/PR gets its
   own Preview URL automatically — no extra config needed.

`vercel.json` also handles the SPA rewrite (all routes → `index.html`) so
React Router's client-side routes don't 404 on refresh, same as the
`netlify.toml` redirect does for the current Netlify deploy.

### Netlify (current)

```sh
netlify deploy --prod --dir=dist
```

## CMS

Copy is being migrated to **Strapi**. See [`STRAPI_MIGRATION.md`](./STRAPI_MIGRATION.md)
for what's already CMS-shaped (`src/content/**`), what still needs migrating,
and the suggested content-type structure.
