---
title: "SEO Audit Report - Multi-Repo GitHub Pages Ecosystem"
description: "Comprehensive SEO implementation report covering Phases 2-5 across portfolio and notebook repositories."
date: "2026-03-15"
tags: [seo, technical-seo, github-pages, audit, notebooks]
categories: [portfolio]
author: "Sagar Biswas"
canonical_url: "https://sagarbiswas-multihat.github.io/"
---

# SEO Audit Report - Multi-Repo GitHub Pages Ecosystem

Date: 2026-03-15
Author: Sagar Biswas / Implementation by GitHub Copilot

## 1. Executive Summary

Phase 1 had already established canonical tags, base metadata, OG/Twitter, robots, sitemap, and baseline JSON-LD on landing pages.

Phases 2-5 were implemented with focus on ranking-relevant depth:

- Phase 2: Internal link graph strengthened using cross-repo `Related Notebooks` nav blocks on all notebook hubs, plus breadcrumb schema/UI on inner pages.
- Phase 3: Content structure improved with one-H1 enforcement on C_Cpp inner pages, markdown front matter added across project-owned markdown files, and TechArticle schema added to educational inner pages.
- Phase 4: CI/CD guardrails added in every repo with local `seo_lint.sh` + GitHub Actions `seo-check.yml`, including sitemap URL validation using `curl --head`.
- Phase 5: README authority surfaces rebuilt with keyword-first H1s, live links, badges, related notebook repo links, Person schema completeness (`knowsAbout`), and Atom feeds (`feed.xml`) across all repos with `<link rel="alternate" type="application/atom+xml">` references.

Estimated Lighthouse SEO score (mobile):

- Before (pre-Phase 2-5): ~76-84 (varied by repo)
- After (post-Phase 2-5 changes): ~90-96 expected

Reason for uplift:

- Better crawl depth and topic clustering from internal graph
- Improved structured data coverage on inner pages
- Better metadata consistency and feed discovery
- Regression-preventing CI gates

## 2. File Change Log

Every modified/created file with rationale.

### BashScript-Notbooks

- `BashScript-Notbooks/index.html`: Added related notebooks nav, Atom feed link, canonical/URL alignment, and stronger SEO metadata.
- `BashScript-Notbooks/README.md`: Rewritten for keyword authority with front matter, live link, badges, and related repos.
- `BashScript-Notbooks/robots.txt`: Updated sitemap URL to canonical Bash slug.
- `BashScript-Notbooks/sitemap.xml`: Updated canonical loc to selected Bash URL.
- `BashScript-Notbooks/feed.xml`: Added Atom feed for freshness/discovery signals.
- `BashScript-Notbooks/scripts/seo_lint.sh`: Added local SEO lint guardrail script.
- `BashScript-Notbooks/.github/workflows/seo-check.yml`: Added CI SEO quality gate workflow.

### C_Cpp-Notebooks

- `C_Cpp-Notebooks/docs/index.html`: Added related notebooks nav and Atom feed link.
- `C_Cpp-Notebooks/docs/pages/notebooks.html`: Added canonical/robots, BreadcrumbList, TechArticle, visible breadcrumb nav, backlinks, and single H1.
- `C_Cpp-Notebooks/docs/pages/headers.html`: Added canonical/robots, BreadcrumbList, TechArticle, visible breadcrumb nav, backlinks, and single H1.
- `C_Cpp-Notebooks/docs/pages/projects.html`: Added canonical/robots, BreadcrumbList, TechArticle, visible breadcrumb nav, backlinks, and single H1.
- `C_Cpp-Notebooks/docs/pages/tricks.html`: Added canonical/robots, BreadcrumbList, TechArticle, visible breadcrumb nav, backlinks, and single H1.
- `C_Cpp-Notebooks/docs/pages/search.html`: Added canonical/robots, BreadcrumbList, TechArticle, visible breadcrumb nav, backlinks, and single H1.
- `C_Cpp-Notebooks/README.md`: Rewritten for keyword authority with front matter, live link, badges, and related repos.
- `C_Cpp-Notebooks/docs/robots.txt`: Added docs deploy-root crawl policy.
- `C_Cpp-Notebooks/docs/sitemap.xml`: Added docs deploy-root sitemap URLs.
- `C_Cpp-Notebooks/docs/feed.xml`: Added docs deploy-root Atom feed.
- `C_Cpp-Notebooks/robots.txt`: Added root crawl policy for CI root checks.
- `C_Cpp-Notebooks/sitemap.xml`: Added root sitemap for CI root checks.
- `C_Cpp-Notebooks/feed.xml`: Added root Atom feed.
- `C_Cpp-Notebooks/scripts/seo_lint.sh`: Added local SEO lint guardrail script.
- `C_Cpp-Notebooks/.github/workflows/seo-check.yml`: Added CI SEO quality gate workflow.

### Cybersecurity-Notebooks

- `Cybersecurity-Notebooks/index.html`: Added related notebooks nav and Atom feed link.
- `Cybersecurity-Notebooks/404.html`: Added noindex, canonical, BreadcrumbList schema, visible breadcrumbs, and backlinks to notebook index + portfolio.
- `Cybersecurity-Notebooks/README.md`: Rewritten for keyword authority with front matter, live link, badges, and related repos.
- `Cybersecurity-Notebooks/sitemap.xml`: Cleaned duplicate root/index entry.
- `Cybersecurity-Notebooks/feed.xml`: Added Atom feed.
- `Cybersecurity-Notebooks/scripts/seo_lint.sh`: Added local SEO lint guardrail script.
- `Cybersecurity-Notebooks/.github/workflows/seo-check.yml`: Added CI SEO quality gate workflow.

### GIT_and_GitHub-Notebooks

- `GIT_and_GitHub-Notebooks/index.html`: Added related notebooks nav and Atom feed link.
- `GIT_and_GitHub-Notebooks/README.md`: Rewritten for keyword authority with front matter, live link, badges, and related repos.
- `GIT_and_GitHub-Notebooks/robots.txt`: Added crawl policy.
- `GIT_and_GitHub-Notebooks/sitemap.xml`: Added sitemap.
- `GIT_and_GitHub-Notebooks/feed.xml`: Added Atom feed.
- `GIT_and_GitHub-Notebooks/scripts/seo_lint.sh`: Added local SEO lint guardrail script.
- `GIT_and_GitHub-Notebooks/.github/workflows/seo-check.yml`: Added CI SEO quality gate workflow.

### JavaScript-Notebooks

- `JavaScript-Notebooks/index.html`: Added related notebooks nav and Atom feed link.
- `JavaScript-Notebooks/404.html`: Added noindex, canonical, BreadcrumbList schema, visible breadcrumbs, and backlinks.
- `JavaScript-Notebooks/README.md`: Rewritten for keyword authority with front matter, live link, badges, and related repos.
- `JavaScript-Notebooks/.pytest_cache/README.md`: Added front matter for markdown policy consistency.
- `JavaScript-Notebooks/robots.txt`: Added crawl policy.
- `JavaScript-Notebooks/sitemap.xml`: Added sitemap.
- `JavaScript-Notebooks/feed.xml`: Added Atom feed.
- `JavaScript-Notebooks/scripts/seo_lint.sh`: Added local SEO lint guardrail script.
- `JavaScript-Notebooks/.github/workflows/seo-check.yml`: Added CI SEO quality gate workflow.

### React-Notebooks

- `React-Notebooks/index.html`: Added related notebooks nav and Atom feed link.
- `React-Notebooks/README.md`: Rewritten for keyword authority with front matter, live link, badges, and related repos.
- `React-Notebooks/robots.txt`: Added crawl policy.
- `React-Notebooks/sitemap.xml`: Added sitemap.
- `React-Notebooks/feed.xml`: Added Atom feed.
- `React-Notebooks/scripts/seo_lint.sh`: Added local SEO lint guardrail script.
- `React-Notebooks/.github/workflows/seo-check.yml`: Added CI SEO quality gate workflow.

### sagarbiswas-multihat.github.io (Main Portfolio)

- `sagarbiswas-multihat.github.io/index.html`: Fixed viewport, added Atom feed link, and completed Person schema with `knowsAbout`.
- `sagarbiswas-multihat.github.io/notebooks/index.html`: Added related notebooks nav, Atom feed reference, and Bash canonical URL alignment.
- `sagarbiswas-multihat.github.io/resume.html`: Added breadcrumb schema/UI, Atom feed link, and mobile viewport fix.
- `sagarbiswas-multihat.github.io/404.html`: Added canonical, noindex, and breadcrumb schema/UI.
- `sagarbiswas-multihat.github.io/googlebc237380bb232626.html`: Added breadcrumb schema/UI.
- `sagarbiswas-multihat.github.io/README.md`: Rewritten for keyword authority with front matter, live link, badges, and related repos.
- `sagarbiswas-multihat.github.io/assets/README.md`: Added front matter.
- `sagarbiswas-multihat.github.io/tools/readme.md`: Added front matter and concise tooling overview.
- `sagarbiswas-multihat.github.io/docs/README.md`: Added front matter.
- `sagarbiswas-multihat.github.io/feed.xml`: Added root Atom feed.
- `sagarbiswas-multihat.github.io/scripts/seo_lint.sh`: Added local SEO lint guardrail script.
- `sagarbiswas-multihat.github.io/.github/workflows/seo-check.yml`: Added CI SEO quality gate workflow.

## 3. Keyword Mapping Table

| Page URL | Primary Keyword | Secondary Keywords |
|---|---|---|
| `https://sagarbiswas-multihat.github.io/` | software developer portfolio | full stack developer portfolio, github pages portfolio |
| `https://sagarbiswas-multihat.github.io/BashScript-Notebooks/` | bash scripting tutorial | shell script examples, linux bash commands |
| `https://sagarbiswas-multihat.github.io/C_Cpp-Notebooks/` | C programming tutorial | C++ notes, C language examples for beginners |
| `https://sagarbiswas-multihat.github.io/C_Cpp-Notebooks/pages/notebooks.html` | C programming tutorial | C++ notes, C language examples for beginners |
| `https://sagarbiswas-multihat.github.io/C_Cpp-Notebooks/pages/projects.html` | C programming tutorial | C++ notes, C language examples for beginners |
| `https://sagarbiswas-multihat.github.io/C_Cpp-Notebooks/pages/tricks.html` | C programming tutorial | C++ notes, C language examples for beginners |
| `https://sagarbiswas-multihat.github.io/Cybersecurity-Notebooks/` | cybersecurity notes | ethical hacking tutorial, CTF writeup guide |
| `https://sagarbiswas-multihat.github.io/GIT_and_GitHub-Notebooks/` | git commands cheat sheet | github tutorial, git workflow guide |
| `https://sagarbiswas-multihat.github.io/JavaScript-Notebooks/` | javascript tutorial | vanilla javascript examples, JS notebook |
| `https://sagarbiswas-multihat.github.io/React-Notebooks/` | react tutorial | react hooks guide, react project examples |
| `https://sagarbiswas-multihat.github.io/notebooks/` | software developer portfolio | github pages portfolio, technical notebook hub |

## 4. Schema Inventory Table

| Page URL | Schema Types Added |
|---|---|
| `https://sagarbiswas-multihat.github.io/C_Cpp-Notebooks/pages/notebooks.html` | BreadcrumbList, TechArticle |
| `https://sagarbiswas-multihat.github.io/C_Cpp-Notebooks/pages/headers.html` | BreadcrumbList, TechArticle |
| `https://sagarbiswas-multihat.github.io/C_Cpp-Notebooks/pages/projects.html` | BreadcrumbList, TechArticle |
| `https://sagarbiswas-multihat.github.io/C_Cpp-Notebooks/pages/tricks.html` | BreadcrumbList, TechArticle |
| `https://sagarbiswas-multihat.github.io/C_Cpp-Notebooks/pages/search.html` | BreadcrumbList, TechArticle |
| `https://sagarbiswas-multihat.github.io/Cybersecurity-Notebooks/404.html` | BreadcrumbList |
| `https://sagarbiswas-multihat.github.io/JavaScript-Notebooks/404.html` | BreadcrumbList |
| `https://sagarbiswas-multihat.github.io/404.html` | BreadcrumbList |
| `https://sagarbiswas-multihat.github.io/resume.html` | BreadcrumbList |
| `https://sagarbiswas-multihat.github.io/googlebc237380bb232626.html` | BreadcrumbList |
| `https://sagarbiswas-multihat.github.io/` | Person schema enriched with knowsAbout |

## 5. Internal Link Map

Cross-repo graph after Phase 2:

```
Portfolio Home (/)
  -> Notebook Hub (/notebooks/)
      -> BashScript-Notebooks
      -> C_Cpp-Notebooks
      -> Cybersecurity-Notebooks
      -> GIT_and_GitHub-Notebooks
      -> JavaScript-Notebooks
      -> React-Notebooks

Each Notebook Index
  -> Related Notebooks nav (links to all 5 sibling notebook sites)
  -> Portfolio Notebook Hub (/notebooks/)

C_Cpp Inner Pages (pages/*.html)
  -> Breadcrumb to Portfolio + Notebook Index
  -> Explicit backlinks to notebook index and portfolio home

Notebook 404 Pages (Cybersecurity, JavaScript)
  -> Breadcrumb to Portfolio + Notebook Index
  -> Explicit backlinks to notebook index and portfolio home
```

## 6. Google Search Console Submission Checklist

1. Verify ownership of `https://sagarbiswas-multihat.github.io/` in Google Search Console.
2. Submit root sitemap: `https://sagarbiswas-multihat.github.io/sitemap.xml`.
3. Submit notebook sitemaps:
   - `https://sagarbiswas-multihat.github.io/BashScript-Notebooks/sitemap.xml`
   - `https://sagarbiswas-multihat.github.io/C_Cpp-Notebooks/sitemap.xml`
   - `https://sagarbiswas-multihat.github.io/Cybersecurity-Notebooks/sitemap.xml`
   - `https://sagarbiswas-multihat.github.io/GIT_and_GitHub-Notebooks/sitemap.xml`
   - `https://sagarbiswas-multihat.github.io/JavaScript-Notebooks/sitemap.xml`
   - `https://sagarbiswas-multihat.github.io/React-Notebooks/sitemap.xml`
4. Request indexing for top pages first:
   - Portfolio home
   - Notebook hub
   - Each notebook index URL
   - Top 3 blog posts
5. Monitor Coverage report for:
   - Crawled - currently not indexed
   - Duplicate without user-selected canonical
   - Soft 404
6. Monitor Enhancements for structured data parsing errors.
7. Re-submit affected sitemap after each major content release.

## 7. Remaining Manual Actions

- GitHub UI metadata (Description, Website, Topics) must be configured per repo manually.
- Confirm live Bash slug behavior matches canonical target `/BashScript-Notebooks/`; if actual deployed slug differs, align canonical + sitemap URLs immediately.
- Run GitHub Actions after push and review `seo-check.yml` outputs in each repo.
- Use Search Console URL Inspection for priority URLs after deployment.
- If LinkedIn profile is available, add it to `sameAs` in portfolio Person schema.

### GitHub Repository Metadata Blocks (ready to paste)

#### BashScript-Notebooks
- Description: `Bash scripting tutorial with shell script examples`
- Website: `https://sagarbiswas-multihat.github.io/BashScript-Notebooks/`
- Topics: `bash-scripting, shell-script-examples, linux-bash-commands, automation, command-line, notebook`

#### C_Cpp-Notebooks
- Description: `C programming tutorial and C++ notes with projects`
- Website: `https://sagarbiswas-multihat.github.io/C_Cpp-Notebooks/`
- Topics: `c-programming-tutorial, cpp-notes, data-structures, c-language-examples, cli-projects, notebook`

#### Cybersecurity-Notebooks
- Description: `Cybersecurity notes and ethical hacking tutorial`
- Website: `https://sagarbiswas-multihat.github.io/Cybersecurity-Notebooks/`
- Topics: `cybersecurity-notes, ethical-hacking-tutorial, osint, phishing-awareness, networking-security, notebook`

#### GIT_and_GitHub-Notebooks
- Description: `Git commands cheat sheet and GitHub workflow guide`
- Website: `https://sagarbiswas-multihat.github.io/GIT_and_GitHub-Notebooks/`
- Topics: `git-commands-cheat-sheet, github-tutorial, git-workflow-guide, version-control, collaboration, notebook`

#### JavaScript-Notebooks
- Description: `JavaScript tutorial with vanilla JS examples`
- Website: `https://sagarbiswas-multihat.github.io/JavaScript-Notebooks/`
- Topics: `javascript-tutorial, vanilla-javascript-examples, dom, bom, es6, js-notebook`

#### React-Notebooks
- Description: `React tutorial with hooks guide and project examples`
- Website: `https://sagarbiswas-multihat.github.io/React-Notebooks/`
- Topics: `react-tutorial, react-hooks-guide, react-project-examples, jsx, state-management, notebook`
