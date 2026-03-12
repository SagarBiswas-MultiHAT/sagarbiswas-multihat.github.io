# Sagar Biswas — MultiHAT-in-Training Portfolio

<!-- Release badges -->
<div align="right">

[![Release](https://img.shields.io/github/v/release/sagarbiswas-multihat/sagarbiswas-multihat.github.io?style=flat-square)](https://github.com/sagarbiswas-multihat/sagarbiswas-multihat.github.io/releases)
&nbsp;
[![Release Date](https://img.shields.io/github/release-date/sagarbiswas-multihat/sagarbiswas-multihat.github.io?style=flat-square)](https://github.com/sagarbiswas-multihat/sagarbiswas-multihat.github.io/releases)
&nbsp;

</div>

<div align="right">

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

A BlackHAT-inspired, WhiteHAT-ethical portfolio for **Sagar Biswas (SagarBiswas-MultiHAT)** — CSE student at AIUB, cybersecurity enthusiast, ethical hacker (web app security), and web developer.

## Live: https://sagarbiswas-multihat.github.io/

## Highlights

- SEO-first metadata and structured data
- Fast, static, GitHub Pages-ready (HTML + CSS only)
- Responsive layout with a dark, dangerous aesthetic
- Clear sections for identity, skills, projects, and community
- RSS feed for blog subscribers (rss.xml)

## Structure

Project Structure (TREE):

```
portfolio/
├─ index.html
├─ styles.css
├─ robots.txt
├─ sitemap.xml
├─ rss.xml
├─ INSTRUCTIONS.md
├─ README.md
├─ SagarBiswas-MultiHAT-Profile.md
├─ t.html
├─ assets/
│  ├─ blogs/
│  │  ├─ Blog1 - hackByPrinter.png
│  │  ├─ Blog2 - Vibe Coding & Tech Debt.png
│  │  ├─ Blog3 - Anonymity.png
│  │  ├─ Blog4 - Wi-Fi security alert.png
│  │  ├─ Blog5 - Quantum Crypto.png
│  │  ├─ Blog6 - WSL2, Kali-Linux, Installation.png
│  │  └─ Blog7 - Take a FULL-PAGE Screenshot Using Inspect.png
│  ├─ certifications/
│  ├─ resume/
│  ├─ favicon.svg
│  ├─ og-preview.svg
│  ├─ profile.jpg
│  └─ profile_eg.svg
└─ blog/
	├─ index.html
	├─ full-page-screenshot-using-inspect.html
	├─ anonymity-opsec.html
	├─ printer-attack-starts-with-a-printer.html
	├─ quantum-cryptography.html
	├─ vibe-coding-tech-debt.html
	├─ wifi-security-alert.html
	└─ wsl2-kali-winkex-installation.html
```

## Latest Blog Posts

- WSL2 + Kali Linux + Win‑KeX (GUI) Installation Guide (Beginner‑Friendly)
- Easiest Way to Take a FULL-PAGE Screenshot Using Inspect!
- Wi‑Fi Security Alert: MAC Blocking Isn’t Enough — What to Do Instead
- Why Quantum Computers Will Break Your Encryption (And Why We're Ready)
- Complete, Forever Anonymity Doesn't Exist — Here's What Actually Works
- 🧨 Fun Fact: A Cyberattack That Can Start With… a Printer 🖨️
- Vibe Coding মানে দ্রুত কাজের আড়ালে ধীরে ধীরে টেক ডেবট জমা করা

## Deploy on GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, choose the **main** branch and root folder.
3. Your site will be live at: https://sagarbiswas-multihat.github.io/

## Build (Minify CSS/JS)

This repo includes a tiny build setup to minify CSS and any JS you add later.

```bash
npm install
npm run build
```

Output:

- styles.min.css (used by all pages)
- \*.min.js (generated if JS files exist)

## Regenerate Feeds

- `npm run generate:feeds` rebuilds `rss.xml`, `sitemap.xml`, and `image-sitemap.xml` from the latest blog metadata so subscribers and crawlers see the newest posts.
- Run it before every deployment or when you publish new articles.

## Custom Domain & HTTPS (SSL)

If you use a custom domain, set it in **Settings → Pages** and create a `CNAME` file
with the exact domain. Then enable **Enforce HTTPS** in GitHub Pages. This ensures
the SSL certificate matches your domain and avoids mismatch warnings.

## Hosting / DNS / Security notes

- TODO: If using a custom domain, add a CNAME file at the repo root and verify DNS points to GitHub Pages.
- TODO: Confirm HSTS and SNI are enabled for any custom subdomains (GitHub Pages supports both).

## SEO Checklist

- Update the canonical URL if the domain changes.
- Ensure og:image and twitter:image use absolute URLs.
- Keep sitemap.xml and robots.txt in sync with the live domain.
- Update JSON-LD when profile details change.
- Ensure blog posts include og:locale, article:author, and ImageObject sizes.

## Customize

- Replace the profile photo at assets/profile.jpg.
- Update any new project links in index.html.
- Add new posts in blog/ and update sitemap.xml accordingly.
- Add entries to rss.xml when publishing a new post.

---
