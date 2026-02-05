# Tools Toolkit README

This repository ships a small set of helper scripts centered on keeping the static portfolio polished, fast, and search-friendly. The tools live under `tools/` so they stay apart from the hand-authored HTML while still being easy to run locally.

## What’s inside

- `minify-css.mjs` – runs `postcss` + `cssnano` against `styles.css` and writes `styles.min.css`. It enables the production-ready stylesheet referenced by every page.
- `minify-js.mjs` – wraps `terser` so you can safely minify any JavaScript files you add later. It mirrors the CSS pipeline and writes `*.min.js` files beside their originals.
- `regenerate-feeds.mjs` – the brain behind the RSS, sitemap, and image sitemap automation. It crawls the `blog/` folder, extracts metadata from each post, and rewrites the three XML feeds in one go. Run it whenever you publish, edit, or delete a blog post so subscribers and crawlers see consistent dates, descriptions, and image assets.

## Best understanding of this repo

Imagine a polished, SEO-first developer portfolio that lives entirely on GitHub Pages. This toolkit keeps that site confident by automating two crucial workflows:

1. **Minify everything** – `npm run build` still runs both minifiers so every stylesheet and script stays trimmed. Use it after you edit any CSS/JS and before you push so visitors download the smallest possible assets.
2. **Refresh metadata** – `npm run generate:feeds` is the only command you need to keep the RSS/sitemap files honest. It:
	- Parses metadata (title, description, publish/modified dates, og:image, canonical URL) from each `blog/*.html` file.
	- Regenerates `rss.xml`, `sitemap.xml`, and `image-sitemap.xml` with clean XML, fresh timestamps, and complete coverage of the blog posts, the homepage, and `resume.html`.

Both commands share the same `npm` entry points documented in the repository root `README.md`, so anyone can understand how to keep the site performant and indexable.

## Usage notes

1. **Install dependencies once**:
	```bash
	npm install
	```
2. **Build assets** (run before deployment):
	```bash
	npm run build
	```
3. **Regenerate feeds** (run whenever blog content changes):
	```bash
	npm run generate:feeds
	```
	The script logs which XML files it writes so you know it succeeded.

## Why this matters

- The minifiers keep critical CSS/JS payloads lean, improving load speed for every visitor.
- The feed regen script protects against stale RSS/sitemap data, which is a common SEO pitfall on static sites. It also supplies `image-sitemap.xml` entries so Google can discover the rich preview images used throughout the blog.
- Everything lives in simple ESM scripts that run with the same `node` version GitHub Actions/GitHub Pages already support, so there is no heavy build toolchain or containerization.

## How to extend

- Add new scripts by creating additional `.mjs` files in this folder and wiring them into `package.json` if needed. Each tool only depends on Node’s standard `fs`/`path` modules plus the existing devDeps, so you can add features without bloating the stack.
- Keep `regenerate-feeds.mjs` aligned with new metadata you add to blog posts (e.g., custom `meta` tags) to ensure the parser extracts the right values.
- When you introduce new assets (images, icons, PDFs), update the root arrays in the script so `image-sitemap.xml` stays complete.
