import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { minify } from "terser";

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SCRIPTS_DIR = path.join(ROOT_DIR, "scripts");

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const kibibytes = bytes / 1024;
  if (kibibytes < 1024) {
    return `${kibibytes.toFixed(2)} KiB`;
  }

  return `${(kibibytes / 1024).toFixed(2)} MiB`;
}

function writeFileIfChanged(filePath, content) {
  const normalizedContent = content.endsWith("\n") ? content : `${content}\n`;
  const currentContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : null;

  if (currentContent === normalizedContent) {
    return false;
  }

  const tempPath = `${filePath}.tmp`;
  fs.writeFileSync(tempPath, normalizedContent, "utf8");
  fs.renameSync(tempPath, filePath);
  return true;
}

function collectBrowserScripts(dir, files = []) {
  if (!fs.existsSync(dir)) {
    return files;
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const absolutePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      collectBrowserScripts(absolutePath, files);
      continue;
    }

    if (
      entry.isFile() &&
      entry.name.endsWith(".js") &&
      !entry.name.endsWith(".min.js")
    ) {
      files.push(absolutePath);
    }
  }

  return files;
}

async function minifyFile(filePath) {
  const sourceCode = fs.readFileSync(filePath, "utf8");
  if (!sourceCode.trim()) {
    throw new Error(`JavaScript source file is empty: ${path.relative(ROOT_DIR, filePath)}`);
  }

  const isModule = /\b(?:import|export)\b/u.test(sourceCode);
  const result = await minify({ [path.basename(filePath)]: sourceCode }, {
    compress: {
      ecma: 2020,
      passes: 2,
    },
    ecma: 2020,
    format: {
      comments: /@license|@preserve|^!/u,
    },
    mangle: true,
    module: isModule,
    sourceMap: false,
    toplevel: isModule,
  });

  if (!result.code) {
    throw new Error(`Terser produced no output for ${path.relative(ROOT_DIR, filePath)}`);
  }

  const outputPath = filePath.replace(/\.js$/u, ".min.js");
  const changed = writeFileIfChanged(outputPath, result.code);
  const inputBytes = Buffer.byteLength(sourceCode, "utf8");
  const outputBytes = Buffer.byteLength(result.code, "utf8");
  const savings = inputBytes === 0 ? 0 : ((inputBytes - outputBytes) / inputBytes) * 100;
  const verb = changed ? "Updated" : "Unchanged";

  console.log(
    `${verb} JS: ${path.relative(ROOT_DIR, outputPath)} (${formatBytes(inputBytes)} -> ${formatBytes(
      outputBytes
    )}, ${savings.toFixed(1)}% smaller)`
  );
}

async function main() {
  const browserScripts = collectBrowserScripts(SCRIPTS_DIR).sort();
  if (!browserScripts.length) {
    console.log("No browser JavaScript files found under scripts/.");
    return;
  }

  for (const filePath of browserScripts) {
    await minifyFile(filePath);
  }

  console.log(`Processed ${browserScripts.length} browser JavaScript file(s).`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
