---
title: "Portfolio Tooling Notes - Build and Feed Scripts"
description: "Tooling notes for build, feed generation, and static optimization in the software developer portfolio repository."
date: "2026-03-15"
tags: [tools, build, feeds, seo]
categories: [portfolio]
author: "Sagar Biswas"
canonical_url: "https://sagarbiswas-multihat.github.io/"
---

# Tools Toolkit README

This repository ships helper scripts centered on keeping the static portfolio polished, fast, and search-friendly.
- `minify-css.mjs` for stylesheet minification.

- `minify-js.mjs` for JavaScript minification.

- `regenerate-feeds.mjs` for RSS and sitemap regeneration.

## Prerequisites

- Node.js (v16+ recommended).
```
sudo apt install nodejs
```
- From the repository root, install developer dependencies if you haven't already:

```
npm install --save-dev postcss cssnano terser
```

## Usage

All commands are intended to be run from the repository root. Replace `node` with your node runtime if different.

```
sudo apt install npm
npm install
```


### Minify CSS

`minify-css.mjs` reads `styles.css` from the repository root and writes `styles.min.css` next to it.

Run:

```
node tools/minify-css.mjs
```

Output:

- Creates/overwrites `styles.min.css` and logs the output path to stderr.

### Minify JavaScript

`minify-js.mjs` walks the repository (rooted at the project root) and minifies `.js` files (skipping files that already end with `.min.js` and ignoring common folders such as `node_modules`, `.git`, `.venv`, and `tools`). For each `foo.js` it writes `foo.min.js` alongside it.

Run:

```
node tools/minify-js.mjs
```

Notes:

- If no JS files are found the script prints `No JS files to minify.` and exits cleanly.
- The script preserves the original files and writes separate `.min.js` files.

### Regenerate Feeds (RSS / Sitemap)

`regenerate-feeds.mjs` generates `rss.xml`, `sitemap.xml`, and `image-sitemap.xml` in the repository root from blog post HTML files located in the `blogs/` directory.

Requirements for blog posts:

- Files must be HTML files located in the `blogs/` directory (excluding `index.html`).
- Each blog post must include a publish date in a meta tag with property `article:published_time` (the script will skip posts missing this metadata).

Run:

```
node tools/regenerate-feeds.mjs
```

Output:

- Writes `rss.xml`, `sitemap.xml`, and `image-sitemap.xml` to the repository root and logs written filenames.

## Troubleshooting

- If `minify-css.mjs` fails, ensure `postcss` and `cssnano` are installed and that `styles.css` exists at the repository root.
- If `minify-js.mjs` produces syntax/minification errors, inspect the printed stack trace to find the offending file; consider excluding non-browser JS or tooling files.
- If `regenerate-feeds.mjs` reports `No blog posts found. Aborting feed generation.`, verify the `blogs/` directory exists and contains valid `.html` posts with `article:published_time` metadata.

If you want, I can also add small npm scripts (e.g. `npm run minify:css`) to make these commands easier to run—would you like that?