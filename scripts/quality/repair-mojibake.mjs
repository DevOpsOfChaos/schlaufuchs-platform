import { readFileSync, writeFileSync, statSync, readdirSync } from "node:fs";
import { join } from "node:path";

const roots = ["src", "public"].filter((root) => {
  try { return statSync(root).isDirectory(); } catch { return false; }
});

const textExtensions = new Set([
  ".astro", ".css", ".html", ".js", ".json", ".md", ".mdx", ".mjs", ".ts", ".tsx", ".txt", ".svg",
]);

const replacements = [
  ["Ã„", "Ä"], ["Ã–", "Ö"], ["Ãœ", "Ü"],
  ["Ã¤", "ä"], ["Ã¶", "ö"], ["Ã¼", "ü"], ["ÃŸ", "ß"],
  ["â€“", "–"], ["â€”", "—"], ["â€ž", "„"], ["â€œ", "“"], ["â€", "”"],
  ["â€˜", "‘"], ["â€™", "’"], ["Â·", "·"], ["Â°", "°"], ["Âµ", "µ"], ["Â", ""],
];

const extensionOf = (path) => {
  const index = path.lastIndexOf(".");
  return index >= 0 ? path.slice(index) : "";
};

const walk = (dir, files = []) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      if (!["node_modules", "dist", ".astro", ".git"].includes(name)) walk(path, files);
    } else if (textExtensions.has(extensionOf(path))) {
      files.push(path);
    }
  }
  return files;
};

let changed = 0;
const touched = [];

for (const root of roots) {
  for (const path of walk(root)) {
    const before = readFileSync(path, "utf8");
    let after = before;
    for (const [from, to] of replacements) after = after.split(from).join(to);
    if (after !== before) {
      writeFileSync(path, after, "utf8");
      changed += 1;
      touched.push(path.replaceAll("\\", "/"));
    }
  }
}

console.log(JSON.stringify({ changedFiles: changed, files: touched }, null, 2));
