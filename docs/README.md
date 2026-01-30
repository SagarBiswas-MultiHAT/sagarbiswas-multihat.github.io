# GitHub Pages DNS & HTTPS Notes

If Semrush reports SSL certificate mismatch or SNI/HSTS issues, verify:

1. **Custom domain set in GitHub Pages** (Settings → Pages).
2. **CNAME file** at repo root matches the custom domain exactly.
3. **DNS records** point to GitHub Pages (A/AAAA or CNAME as required).
4. **Enforce HTTPS** is enabled in GitHub Pages.

TODO: If you use a custom domain, add a root `CNAME` file with that domain.
