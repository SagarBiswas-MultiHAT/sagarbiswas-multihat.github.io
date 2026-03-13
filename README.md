# Sagar Biswas — MultiHAT-in-Training Portfolio

<div align="center">

[![Release](https://img.shields.io/github/v/release/SagarBiswas-MultiHAT/sagarbiswas-multihat.github.io)](https://github.com/SagarBiswas-MultiHAT/sagarbiswas-multihat.github.io/releases)
&nbsp;
[![Release Date](https://img.shields.io/github/release-date/SagarBiswas-MultiHAT/sagarbiswas-multihat.github.io)](https://github.com/SagarBiswas-MultiHAT/sagarbiswas-multihat.github.io/releases)
&nbsp;

</div>

<div align="center">

[![Pages](https://img.shields.io/badge/Pages-GitHub%20Pages-blue)](https://sagarbiswas-multihat.github.io/)
&nbsp;
[![RSS](https://img.shields.io/badge/RSS-feed-orange)](https://sagarbiswas-multihat.github.io/rss.xml)
&nbsp;
[![Last commit](https://img.shields.io/github/last-commit/SagarBiswas-MultiHAT/sagarbiswas-multihat.github.io)](https://github.com/SagarBiswas-MultiHAT/sagarbiswas-multihat.github.io)
&nbsp;
[![License](https://img.shields.io/github/license/SagarBiswas-MultiHAT/sagarbiswas-multihat.github.io)](https://github.com/SagarBiswas-MultiHAT/sagarbiswas-multihat.github.io/blob/main/LICENSE)
&nbsp;
[![Issues](https://img.shields.io/github/issues/SagarBiswas-MultiHAT/sagarbiswas-multihat.github.io)](https://github.com/SagarBiswas-MultiHAT/sagarbiswas-multihat.github.io/issues)
&nbsp;
[![Build](https://github.com/SagarBiswas-MultiHAT/sagarbiswas-multihat.github.io/actions/workflows/build.yml/badge.svg)](https://github.com/SagarBiswas-MultiHAT/sagarbiswas-multihat.github.io/actions/workflows/build.yml)

</div>

A dark, hacker-inspired portfolio for **Sagar Biswas (SagarBiswas-MultiHAT)** — CSE student at AIUB, cybersecurity enthusiast, ethical hacker (web app security), and web developer. This site is a static GitHub Pages project with a custom design system, narrative content, and automated RSS/sitemap tooling.

## Live Site

- https://sagarbiswas-multihat.github.io/

## Pages & Routes

Core pages shipped in this repo:

- `/` — Homepage (Identity File, terminal, projects, certifications, contact)
- `/about/` — Threat Actor profile
- `/capabilities/` — Capabilities landing page
- `/certifications/` — Certifications landing page
- `/projects/` — Classified operations
- `/notebooks/` — Research notebooks
- `/cybersecurity/` — Tools and resources
- `/blogs/` — Blog index
- `/resume.html` — Resume viewer
- `/404.html` — Custom error page

All blog content lives under `/blogs/`.

## Core Features

- Dark hacker aesthetic with a custom CSS design system
- Identity File layout, terminal simulation, and animated skill matrix
- Custom ring/crosshair cursor
- CRT scanlines and vignette overlay
- SEO metadata, Open Graph, JSON-LD, and social cards
- RSS feed + sitemap + image sitemap automation
- Minified production CSS/JS for fast delivery

## Desktop Viewport (Mobile Behavior)

The site is intentionally forced into **desktop layout** on phones and desktops. All HTML pages use:

```
<meta name="viewport" content="width=1200, initial-scale=1.0" />
```

This keeps the desktop grid and typography intact on mobile screens (users can pinch-zoom).

## Project Structure (Top Level)

```
portfolio/
├─ index.html
├─ 404.html
├─ resume.html
├─ styles.css
├─ styles.min.css
├─ robots.txt
├─ sitemap.xml
├─ image-sitemap.xml
├─ rss.xml
├─ assets/
├─ about/
├─ blogs/
├─ capabilities/
├─ certifications/
├─ cybersecurity/
├─ notebooks/
├─ projects/
├─ scripts/
└─ tools/
```

## Blog System

Blog posts live in `/blogs/` and are standard HTML files with SEO metadata (title, description, canonical, og:image, publish dates). After editing or adding a post, regenerate feeds so RSS and sitemaps stay accurate.

## Tooling & Scripts

This repo includes minimal build tooling under `/tools/`:

- `minify-css.mjs` — minifies `styles.css` into `styles.min.css`; run `npm run minify:css` so the generated `styles.min.css` stays in sync with the source CSS.
- `minify-js.mjs` — minifies any JS files you add later; invoke it with `npm run minify:js` before committing new scripts.
- `regenerate-feeds.mjs` — builds `rss.xml`, `sitemap.xml`, and `image-sitemap.xml` from `/blogs/`; execute `npm run generate:feeds` after adding or editing blog posts.
- `scripts/test-routes.sh` — quick local route checker (status codes); run `./scripts/test-routes.sh` from the repo root to ensure each route returns 200 before pushing.

## Build & Update Commands

Install dependencies once:

```bash
npm install
```

Build minified assets:

```bash
npm run build
```

Regenerate RSS + sitemaps after blog updates:

```bash
npm run generate:feeds
```

## Deployment (GitHub Pages)

1. Push to GitHub.
2. In **Settings → Pages**, choose the **main** branch and root folder.
3. The site will be served at: https://sagarbiswas-multihat.github.io/

## Common Updates

- **Add a blog post**: Create a new HTML file in `/blogs/` and run `npm run generate:feeds`.
- **Update profile imagery**: Replace images in `/assets/` and keep sizes consistent with existing filenames.
- **Add a new page**: Create a folder with `index.html`, then update the nav links.

## Troubleshooting

- **CSS not loading**: Run `npm run minify:css` and make sure `styles.min.css` is committed.
- **Broken feeds**: Run `npm run generate:feeds` after any blog change.
- **Missing routes**: Use `scripts/test-routes.sh` to confirm every route returns 200 locally.

---
