from pathlib import Path
import re

ROOTS_DELETE = [
    Path("src/content"),
    Path("public/images"),
    Path("public/illustrations"),
    Path("docs"),
    Path("audit"),
]

DELETE_PATH_PATTERNS = [
    r"v114",
    r"v116",
    r"sanierung-v18[7-9]",
    r"sanierung-v19\d",
    r"sanierung-v20\d",
    r"sanierung-v21[0-7]",
    r"v18[7-9]",
    r"v19\d",
    r"v20\d",
    r"v21[0-7]",
    r"info-v114",
    r"info-v116",
]

DELETE_TEXT_MARKERS = [
    "möglichst viel Stoff",
    "Feines Unterthema",
    "Vom Eindruck zur prüfbaren Entscheidung",
    "Kleine Prüffragen zu",
    "statt breitem Sammelkapitel",
    "Eine gute Lernseite ist nicht möglichst breit",
    "konkrete Beobachtung, die passende Regel und eine einfache Kontrolle",
]

EXTENSIONS = {".md", ".mdx", ".svg", ".txt", ".json", ".csv"}

deleted = []
kept = []

def text(path):
    try:
        return path.read_text(encoding="utf-8", errors="replace")
    except Exception:
        return ""

def contaminated_path(path: Path) -> bool:
    s = str(path).replace("\\", "/")
    return any(re.search(pattern, s, re.IGNORECASE) for pattern in DELETE_PATH_PATTERNS)

def contaminated_text(content: str) -> bool:
    return any(marker in content for marker in DELETE_TEXT_MARKERS)

for root in ROOTS_DELETE:
    if not root.exists():
        continue

    for path in root.rglob("*"):
        if not path.is_file():
            continue
        if path.suffix.lower() not in EXTENSIONS:
            continue

        content = text(path)
        if contaminated_path(path) or contaminated_text(content):
            deleted.append(path)
            path.unlink(missing_ok=True)
        else:
            kept.append(path)

# areaStructure.ts nicht löschen, sondern sichtbare Meta-Sprache neutralisieren
area = Path("src/data/areaStructure.ts")
if area.exists():
    content = area.read_text(encoding="utf-8-sig")

    content = content.replace('"v116", ', '')
    content = content.replace('"v114", ', '')
    content = content.replace(', "v116"', '')
    content = content.replace(', "v114"', '')
    content = content.replace('["v116", "Feinstruktur"]', '["Grundlagen"]')
    content = content.replace('["v116", "Praxis"]', '["Praxis"]')
    content = content.replace('["v114", "Feinstruktur"]', '["Grundlagen"]')
    content = content.replace('["v114", "Praxis"]', '["Praxis"]')

    content = re.sub(
        r'description: "Feines v116-Unterthema: ([^"]+)\."',
        lambda m: f'description: "Grundlagen, typische Anwendung und Kontrolle zu {m.group(1)}."',
        content,
    )
    content = re.sub(
        r'description: "Kleine Prüffragen zu ([^"]+) statt breitem Sammelkapitel\."',
        lambda m: f'description: "Grundlagen, typische Anwendung und Kontrolle zu {m.group(1)}."',
        content,
    )

    area.write_text(content, encoding="utf-8")

# leere Ordner entfernen
for root in ROOTS_DELETE:
    if not root.exists():
        continue
    dirs = sorted([p for p in root.rglob("*") if p.is_dir()], key=lambda p: len(str(p)), reverse=True)
    for d in dirs:
        try:
            d.rmdir()
        except OSError:
            pass

report = Path("cleanup-contaminated-generated-content-report.md")
with report.open("w", encoding="utf-8") as f:
    f.write("# Cleanup contaminated generated content\n\n")
    f.write(f"Deleted: **{len(deleted)}**\n\n")
    for path in deleted:
        f.write(f"- `{path}`\n")

print(f"deleted={len(deleted)}")
print(f"report={report}")
