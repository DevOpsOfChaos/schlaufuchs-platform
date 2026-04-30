from pathlib import Path
import re
import sys
from collections import Counter

APPLY = "--apply" in sys.argv

ROOTS = [
    Path("src/content/articles"),
    Path("src/content/exercises"),
    Path("src/content/solutions"),
]

BAD_MARKERS = [
    "kleines Unterthema",
    "enges, prüfbares Unterthema",
    "enges, pr├╝fbares Unterthema",
    "prüfbares Unterthema mit Beispiel",
    "pr├╝fbares Unterthema mit Beispiel",
    "mit Beispiel, Abgrenzung und Gegenprobe",
    "mit Beispiel, Abgrenzung und Prüfstrategie",
    "mit Beispiel, Abgrenzung und Pr├╝fstrategie",
    "zu breiten Sammelthema",
    "├╝bergro├ƒen Sammelbereich",
    "übergroßen Sammelbereich",
    "Dadurch bleibt die Seite übersichtlich",
    "Dadurch bleibt die Seite ├╝bersichtlich",
    "Dadurch bleibt die Seite auffindbar",
    "bewusst als kleines Unterthema angelegt",
    "ist ein kleines Unterthema mit einer klaren Trennkante",
    "klaren Trennkante",
    "Lerne ",
]

# Lerne allein wäre zu breit. Es wird nur gelöscht, wenn zusätzlich
# eine eindeutige Schablonenphrase vorkommt.
STRONG_MARKERS = [
    "kleines Unterthema",
    "enges, prüfbares Unterthema",
    "enges, pr├╝fbares Unterthema",
    "Abgrenzung und Gegenprobe",
    "Abgrenzung und Prüfstrategie",
    "Abgrenzung und Pr├╝fstrategie",
    "zu breiten Sammelthema",
    "├╝bergro├ƒen Sammelbereich",
    "übergroßen Sammelbereich",
    "klaren Trennkante",
    "Sammelbereich",
]

EXTENSIONS = {".md", ".mdx"}

def read(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")

def is_bad(text: str) -> bool:
    return any(marker in text for marker in STRONG_MARKERS)

candidates = []

for root in ROOTS:
    if not root.exists():
        continue

    for path in root.rglob("*"):
        if not path.is_file() or path.suffix.lower() not in EXTENSIONS:
            continue

        text = read(path)
        if is_bad(text):
            candidates.append(path)

# Wenn Aufgaben gelöscht werden, die zugehörigen Lösungen mitlöschen.
deleted_exercise_ids = {
    "src/content/exercises/" + str(p.relative_to(Path("src/content/exercises")).with_suffix("")).replace("\\", "/")
    for p in candidates
    if "src\\content\\exercises" in str(p) or "src/content/exercises" in str(p)
}

extra_solutions = []
solutions_root = Path("src/content/solutions")
if solutions_root.exists():
    for path in solutions_root.rglob("*.md"):
        text = read(path)
        m = re.search(r'^relatedExercise:\s*["\']?([^"\']+)["\']?\s*$', text, re.MULTILINE)
        if m and m.group(1).strip() in deleted_exercise_ids:
            extra_solutions.append(path)

all_delete = []
seen = set()
for path in candidates + extra_solutions:
    key = str(path)
    if key not in seen:
        seen.add(key)
        all_delete.append(path)

by_root = Counter()
for path in all_delete:
    rel = path.parts
    key = "/".join(rel[:4]) if len(rel) >= 4 else str(path.parent)
    by_root[key] += 1

report = Path("cleanup-template-undercontent-report.md")
with report.open("w", encoding="utf-8") as f:
    f.write("# Cleanup template undercontent report\n\n")
    f.write(f"Apply: `{APPLY}`\n\n")
    f.write(f"Candidates: **{len(all_delete)}**\n\n")
    f.write("## By root\n\n")
    for key, count in by_root.most_common():
        f.write(f"- {key}: {count}\n")
    f.write("\n## Files\n\n")
    for path in all_delete:
        f.write(f"- `{path}`\n")

print(f"candidates={len(all_delete)}")
print(f"report={report}")

if APPLY:
    for path in all_delete:
        path.unlink(missing_ok=True)

    for root in ROOTS:
        if not root.exists():
            continue
        dirs = sorted([p for p in root.rglob("*") if p.is_dir()], key=lambda p: len(str(p)), reverse=True)
        for d in dirs:
            try:
                d.rmdir()
            except OSError:
                pass

    print("deleted=true")
else:
    print("deleted=false")
