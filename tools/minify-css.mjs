import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import postcss from "postcss";
import cssnano from "cssnano";

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const INPUT_FILE = path.join(ROOT_DIR, "styles.css");
const OUTPUT_FILE = path.join(ROOT_DIR, "styles.min.css");

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

async function main() {
  if (!fs.existsSync(INPUT_FILE)) {
    throw new Error(`CSS source file not found: ${path.relative(ROOT_DIR, INPUT_FILE)}`);
  }

  const sourceCss = fs.readFileSync(INPUT_FILE, "utf8");
  if (!sourceCss.trim()) {
    throw new Error(`CSS source file is empty: ${path.relative(ROOT_DIR, INPUT_FILE)}`);
  }

  const processor = postcss([
    cssnano({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ]);

  const result = await processor.process(sourceCss, {
    from: INPUT_FILE,
    map: false,
    to: OUTPUT_FILE,
  });

  const changed = writeFileIfChanged(OUTPUT_FILE, result.css);
  const inputBytes = Buffer.byteLength(sourceCss, "utf8");
  const outputBytes = Buffer.byteLength(result.css, "utf8");
  const savings = inputBytes === 0 ? 0 : ((inputBytes - outputBytes) / inputBytes) * 100;
  const verb = changed ? "Updated" : "Unchanged";

  console.error(
    `${verb} CSS: ${path.relative(ROOT_DIR, OUTPUT_FILE)} (${formatBytes(inputBytes)} -> ${formatBytes(
      outputBytes
    )}, ${savings.toFixed(1)}% smaller)`
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
