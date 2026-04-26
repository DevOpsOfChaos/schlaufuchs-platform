import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
const roots = ["src/content", "src/data"];
const markers = ["Ã", "Â", "â€", "â€œ", "â€ž", "â€“", "â€¦"];
const issues = [];
function walk(dir){ for (const name of readdirSync(dir)){ const p = join(dir, name); const s = statSync(p); if (s.isDirectory()) walk(p); else if (/\.(md|mdx|ts|astro|mjs)$/.test(p)) check(p); } }
function check(p){ const t = readFileSync(p, "utf8"); for (const m of markers) if (t.includes(m)) issues.push({path:p,type:"mojibake",marker:m}); if (p.endsWith("src/data/areaStructure.ts") || p.endsWith("src\\data\\areaStructure.ts")){ if (/},\s*,/.test(t)) issues.push({path:p,type:"empty-array-entry-after-object"}); if (/],\s*,/.test(t)) issues.push({path:p,type:"empty-array-entry-after-array"}); } if (/draft:\s*false---/.test(t)) issues.push({path:p,type:"broken-frontmatter-close"}); }
for (const r of roots){ try { walk(r); } catch {} }
if (issues.length){ console.error(JSON.stringify({ok:false,issues}, null, 2)); process.exit(1); }
console.log(JSON.stringify({ok:true,checkedRoots:roots}, null, 2));
