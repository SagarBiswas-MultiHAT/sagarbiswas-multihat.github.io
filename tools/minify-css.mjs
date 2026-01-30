import fs from "node:fs";
import postcss from "postcss";
import cssnano from "cssnano";

const inputPath = new URL("../styles.css", import.meta.url);
const outputPath = new URL("../styles.min.css", import.meta.url);

const css = fs.readFileSync(inputPath, "utf8");
const result = await postcss([cssnano({ preset: "default" })]).process(css, {
  from: inputPath.pathname,
  to: outputPath.pathname,
});

fs.writeFileSync(outputPath, result.css, "utf8");
console.log(`Minified CSS: ${outputPath.pathname}`);
