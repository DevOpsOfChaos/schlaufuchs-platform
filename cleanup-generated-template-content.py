from pathlib import Path
import sys

APPLY = "--apply" in sys.argv

ROOTS = [
    Path("src/content"),
    Path("public/illustrations"),
]

BAD_TEXT_MARKERS = [
    "geht es nicht darum, möglichst viel Stoff",
    "Feines Unterthema",
    "Vom Eindruck zur prüfbaren Entscheidung",
    "bewusst klein halten",
    "größere Kapitel wieder anschließen",
    "Eine gute Lernseite ist nicht möglichst breit",
    "Kleine Prüffragen zu",
    "statt breitem Sammelkapitel",
    "konkrete Beobachtung, die passende Regel und eine einfache Kontrolle",
]

BAD_PATH_MARKERS = [
    "-v114",
    "-v116",
    "/v114",
    "/v116",
    "\\v114",
    "\\v116",
    "info-v114",
    "info-v116",
]

EXTENSIONS = {".md", ".mdx", ".svg"}

candidates = []

def is_bad_path(path: Path) -> bool:
    normalized = str(path).replace("\\", "/")
    name = path.name
    return any(marker.replace("\\", "/") in normalized or marker in name for marker in BAD_PATH_MARKERS)

def is_bad_text(text: str) -> bool:
    return any(marker in text for marker in BAD_TEXT_MARKERS)

for root in ROOTS:
    if not root.exists():
        continue

    for path in root.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix.lower() not in EXTENSIONS:
            continue

        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except Exception:
            text = ""

        reasons = []
        if is_bad_path(path):
            reasons.append("bad-path-marker")
        if is_bad_text(text):
            reasons.append("bad-template-text")

        if reasons:
            candidates.append((path, reasons))

report = Path("generated-template-cleanup-report.md")
with report.open("w", encoding="utf-8") as f:
    f.write("# Generated template cleanup report\n\n")
    f.write(f"Apply mode: `{APPLY}`\n\n")
    f.write(f"Candidates: **{len(candidates)}**\n\n")
    for path, reasons in candidates:
        f.write(f"- `{path}` — {', '.join(reasons)}\n")

print(f"candidates={len(candidates)}")
print(f"report={report}")

if APPLY:
    for path, _ in candidates:
        path.unlink(missing_ok=True)

    # leere Ordner entfernen, tief zuerst
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
    print("Run again with --apply after checking the report.")
