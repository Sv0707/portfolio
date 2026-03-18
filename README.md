# Svitlana Onyshchenko Portfolio

Portfolio website built with React, TypeScript, and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `portfolio`.
2. In `vite.config.ts`, set:

```ts
base: '/portfolio/'
```

3. Push the project to GitHub.
4. Run:

```bash
npm install
npm run deploy
```

5. In GitHub repository settings, open **Pages** and choose **Deploy from a branch** if needed, or use the `gh-pages` branch created by the deploy script.

If your repository name is different, update `base` in `vite.config.ts` accordingly.
