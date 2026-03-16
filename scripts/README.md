# Scripts

Utilities for the main `sagarbiswas-multihat.github.io` portfolio and notebook hub.

## Files

- `seo_lint.sh`: validates `robots.txt`, `sitemap.xml`, `feed.xml`, canonical URLs, HTML metadata, and Markdown front matter for the published portfolio site.
- `link-check.sh`: extracts links from HTML files and checks their HTTP status.
- `test-routes.sh`: starts a local static server and probes important portfolio routes.
- `cursor.js`: custom cursor behavior used by the live portfolio UI.

## Usage

```bash
bash ./scripts/seo_lint.sh
SEO_LINT_CHECK_HTTP=1 bash ./scripts/seo_lint.sh
bash ./scripts/link-check.sh
bash ./scripts/test-routes.sh
```

## Notes

- Running `seo_lint.sh` without an argument auto-detects the repo root from the script location.
- Default local SEO mode skips live HTTP requests and validates local files only.
- Set `SEO_LINT_CHECK_HTTP=1` when you want live GitHub Pages checks for robots, sitemap, and feed URLs.
- `test-routes.sh` requires `python3` and `curl`.
- `link-check.sh` checks absolute links directly and expects relative links to be served locally.
