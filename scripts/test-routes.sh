#!/usr/bin/env bash
set -euo pipefail
PORT=8000
BASE="http://localhost:$PORT"
python3 -m http.server $PORT >/dev/null 2>&1 &
SERVER_PID=$!
trap 'kill $SERVER_PID' EXIT
sleep 0.5

routes=(
  "/"
  "/404.html"
  "/googlebc237380bb232626.html"
  "/resume.html"
  "/about/"
  "/cybersecurity/"
  "/notebooks/"
  "/projects/"
  "/blog/"
  "/blog/anonymity-opsec.html"
  "/blog/full-page-screenshot-using-inspect.html"
  "/blog/osi-layers-real-attack-examples.html"
  "/blog/printer-attack-starts-with-a-printer.html"
  "/blog/quantum-cryptography.html"
  "/blog/vibe-coding-tech-debt.html"
  "/blog/why-attackers-like-temp-folder.html"
  "/blog/wifi-security-alert.html"
  "/blog/wsl2-kali-winkex-installation.html"
  "/blogs/"
  "/blogs/anonymity-opsec.html"
  "/blogs/full-page-screenshot-using-inspect.html"
  "/blogs/osi-layers-real-attack-examples.html"
  "/blogs/printer-attack-starts-with-a-printer.html"
  "/blogs/quantum-cryptography.html"
  "/blogs/vibe-coding-tech-debt.html"
  "/blogs/why-attackers-like-temp-folder.html"
  "/blogs/wifi-security-alert.html"
  "/blogs/wsl2-kali-winkex-installation.html"
  "/node_modules/terser/tools/props.html"
  "/sitemap.xml"
  "/image-sitemap.xml"
  "/rss.xml"
  "/robots.txt"
  "/llms.txt"
)

printf "%-6s %s\n" "CODE" "URL"
for r in "${routes[@]}"; do
  status=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$r" || echo "000")
  printf "%-6s %s%s\n" "$status" "$BASE" "$r"
done

# server will be killed by trap on script exit
