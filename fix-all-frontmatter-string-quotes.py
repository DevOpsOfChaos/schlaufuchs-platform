from pathlib import Path
import re

ROOT = Path("src/content")
FIELDS = {
    "title",
    "description",
    "section",
    "taskId",
    "relatedExercise",
    "reflectionPrompt",
    "subject",
    "level",
    "publishedAt",
}

changed = []

def needs_quote(raw: str) -> bool:
    raw = raw.strip()
    if raw == "":
        return False
    if raw.startswith(("'", '"', "[", "{", "|", ">")):
        return False
    if raw in ("true", "false", "null"):
        return False
    return True

def quote(raw: str) -> str:
    value = raw.strip()
    escaped = value.replace("\\", "\\\\").replace('"', '\\"')
    return f' "{escaped}"'

for path in ROOT.rglob("*"):
    if path.suffix.lower() not in {".md", ".mdx"}:
        continue

    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        continue

    end = text.find("\n---", 4)
    if end == -1:
        continue

    fm = text[4:end]
    rest = text[end:]
    out = []
    touched = False

    for line in fm.splitlines():
        m = re.match(r"^([A-Za-z][A-Za-z0-9_]*):\s*(.*)$", line)
        if m and m.group(1) in FIELDS and needs_quote(m.group(2)):
            line = f"{m.group(1)}:{quote(m.group(2))}"
            touched = True
        out.append(line)

    if touched:
        path.write_text("---\n" + "\n".join(out) + rest, encoding="utf-8")
        changed.append(str(path))

print(f"fixed={len(changed)}")
for item in changed[:120]:
    print(item)
if len(changed) > 120:
    print(f"... plus {len(changed)-120} more")
