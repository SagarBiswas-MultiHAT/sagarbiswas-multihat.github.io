---
title: "Portfolio DNS and HTTPS Guide"
description: "DNS and HTTPS guidance for GitHub Pages portfolio deployments, including custom domain, CNAME, and SSL checks."
date: "2026-03-15"
tags: [dns, https, github-pages, ssl]
categories: [portfolio]
author: "Sagar Biswas"
canonical_url: "https://sagarbiswas-multihat.github.io/"
---

# GitHub Pages DNS and HTTPS Notes

If Semrush reports SSL certificate mismatch or SNI/HSTS issues, verify:

1. Custom domain set in GitHub Pages.
2. CNAME file at repo root matches domain.
3. DNS records point to GitHub Pages.
4. Enforce HTTPS is enabled.
