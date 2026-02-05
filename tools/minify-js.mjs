import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { minify } from "terser";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignoreDirs = new Set(["node_modules", ".git", ".venv", "tools"]);

async function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (ignoreDirs.has(entry.name)) continue;
      await walk(path.join(dir, entry.name), files);
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".js") &&
      !entry.name.endsWith(".min.js")
    ) {
      files.push(path.join(dir, entry.name));
    }
  }
  return files;
}

const jsFiles = await walk(root);
if (!jsFiles.length) {
  console.log("No JS files to minify.");
  process.exit(0);
}

for (const file of jsFiles) {
  const code = fs.readFileSync(file, "utf8");
  const result = await minify(code);
  const outFile = file.replace(/\.js$/, ".min.js");
  fs.writeFileSync(outFile, result.code ?? "", "utf8");
  console.log(`Minified JS: ${path.relative(root, outFile)}`);
}
