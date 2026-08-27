# VB Styles

Three-page site for VB Styles — landing, services, portfolio. Built with
Next.js and Tailwind, deployed on Vercel.

## Editing the site

**Almost everything lives in [`src/content.ts`](src/content.ts)** — the studio
name, every heading and paragraph, the service packages, the portfolio
categories, and the captions. Change it there and the site updates. You should
not need to touch anything in `src/app` or `src/components` for a copy change.

### Swapping in real photos

Drop files into `public/images/` using the same filenames that `content.ts`
refers to, and they replace the placeholders — no code change needed.

| Slot            | Path                              | Best size   |
| --------------- | --------------------------------- | ----------- |
| Hero            | `public/images/hero.jpg`          | 2400 × 1500 |
| About portrait  | `public/images/portrait.jpg`      | 1000 × 1250 |
| Portfolio grid  | `public/images/portfolio/*.jpg`   | 1000 × 1250 |

Portfolio images are portrait (4:5). Keep each file under ~500KB — Next resizes
and serves modern formats automatically, but it can only work with what it's given.

To add or remove images from a category, edit that category's `images` array in
`content.ts`. The grid reflows on its own.

### Brand colours

Six CSS variables at the top of [`src/app/globals.css`](src/app/globals.css)
control the whole palette — warm neutrals with a slate-blue accent. Change them
there and every page follows.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploying

Pushing to `main` triggers a Vercel deploy. Pull requests get their own preview
URL before anything reaches the live site.

## Placeholder assets

The current hero is a stock photo from Unsplash (by Huy Nguyen), used as a
stand-in. Everything else in `public/images/` is a generated grey placeholder.
Replace them all before launch.

`npm run placeholders` regenerates any placeholder that is *missing* — it will
not overwrite a real photo. Pass `--force` only if you genuinely want to wipe
what's there. Once every image is real, delete `scripts/gen-placeholders.mjs`
and the `sharp` devDependency.
