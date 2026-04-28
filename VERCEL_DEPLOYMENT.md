# Deploying Pawtomation to Vercel

This project is a TanStack Start app built with Vite. When deployed to Vercel
it is served as a client-rendered SPA with a catch-all rewrite to
`index.html`, so every route (including deep links like `/security`,
`/privacy-policy`, `/our-customers`, etc.) works on direct visit, page
refresh, and share.

## One-time Vercel project setup

1. Push the repo to GitHub / GitLab / Bitbucket.
2. In Vercel, click **Add New → Project** and import the repo.
3. Vercel will auto-detect Vite. Override these if needed (already set in
   `vercel.json`, but confirm in the UI):
   - **Framework Preset**: `Other` (we control it via `vercel.json`)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/client`
   - **Install Command**: `npm install`
   - **Node.js Version**: 20.x or 22.x
4. Click **Deploy**.

## Why no 404 on refresh

The `vercel.json` at the project root contains:

```json
"rewrites": [
  { "source": "/(.*)", "destination": "/index.html" }
]
```

This tells Vercel's edge to serve `index.html` for any path that isn't an
existing static asset. TanStack Router then takes over on the client and
renders the correct route — so `/contact`, `/security`, `/cookies`, etc.
all work on direct visit and reload.

Static assets under `/assets/*` are served with a 1-year immutable cache
for optimal performance.

## Environment variables

None are required for the landing page. If you later add integrations
(analytics, Lovable Cloud, etc.), add them under
**Project Settings → Environment Variables** in Vercel.

## Custom domain

After the first successful deploy, go to **Project → Settings → Domains**
in Vercel and add `pawtomation.com` (or whichever domain you own). Update
the DNS as instructed.

## Local verification before pushing

```bash
npm run build
npx serve dist/client -s
```

The `-s` flag serves `index.html` for all paths — this simulates the
Vercel rewrite and lets you verify that refreshing on `/security` or
`/contact` works.
