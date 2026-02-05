#!/usr/bin/env bash
# quick link checker: list hrefs and test HTTP status

set -euo pipefail

grep -Rho --include="*.html" -Eo 'href="[^"]+"' . | sed 's/href="//;s/"$//' | sort -u | while read url; do
  if [[ "$url" =~ ^https?:// ]]; then
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    echo "$status $url"
  else
    status=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:1313${url}" || echo "000")
    echo "$status $url"
  fi
done
