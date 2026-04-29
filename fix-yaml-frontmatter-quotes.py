from pathlib import Path
import re

roots = [Path("src/content")]
changed = []

def quote_yaml_value(value: str) -> str:
    raw = value.strip()
    if not raw:
        return value
    if raw.startswith(("'", '"', "[", "{")):
        return value
    # quote only risky plain scalars
    if ": " in raw or raw.startswith(("Lösung:", "Aufgabe:")):
        escaped = raw.replace("\\", "\\\\").replace('"', '\\"')
        return f' "{escaped}"'
    return value

for path in roots[0].rglob("*.md"):
    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        continue

    end = text.find("\n---", 4)
    if end == -1:
        continue

    fm = text[4:end]
    body = text[end:]

    new_lines = []
    touched = False

    for line in fm.splitlines():
        m = re.match(r"^(title|description):(\s*)(.*)$", line)
        if m:
            key, space, value = m.groups()
            new_value = quote_yaml_value(value)
            new_line = f"{key}:{new_value}"
            if new_line != line:
                touched = True
                line = new_line
        new_lines.append(line)

    if touched:
        path.write_text("---\n" + "\n".join(new_lines) + body, encoding="utf-8")
        changed.append(str(path))

print(f"fixed={len(changed)}")
for p in changed[:80]:
    print(p)
if len(changed) > 80:
    print(f"... plus {len(changed)-80} more")
