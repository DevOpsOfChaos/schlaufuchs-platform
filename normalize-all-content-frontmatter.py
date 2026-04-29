from pathlib import Path
import json
import re

ROOT = Path("src/content")

SUBJECT_ORDER = {
    "mathematik": 1,
    "informatik": 2,
    "elektrotechnik": 3,
    "linux": 4,
    "web-development": 5,
    "daten-und-signale": 6,
}

SUBJECT_TITLES = {
    "mathematik": "Mathematik",
    "informatik": "Informatik",
    "elektrotechnik": "Elektrotechnik",
    "linux": "Linux",
    "web-development": "Web Development",
    "daten-und-signale": "Daten & Signale",
}

LEVELS = {"einfach", "mittel", "fortgeschritten"}
COLLECTIONS = {"subjects", "articles", "exercises", "solutions", "news"}

def q(value):
    return json.dumps(str(value), ensure_ascii=False)

def slug_title(value):
    value = re.sub(r"\.(mdx?|MDX?)$", "", value)
    value = re.sub(r"-loesung$", "", value)
    value = re.sub(r"-aufgabe-[ab]$", "", value)
    value = value.replace("-", " ").replace("_", " ")
    value = re.sub(r"\s+", " ", value).strip()
    if not value:
        return "Eintrag"
    return value[:1].upper() + value[1:]

def split_frontmatter(text):
    text = text.lstrip("\ufeff")
    lines = text.splitlines(keepends=True)
    if not lines or lines[0].strip() != "---":
        return None, text
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            return "".join(lines[1:i]), "".join(lines[i + 1:])
    return "", ""

def raw_fields(fm):
    data = {}
    current_key = None

    for line in fm.splitlines():
        m = re.match(r"^([A-Za-z][A-Za-z0-9_]*):\s*(.*)$", line)
        if m:
            current_key = m.group(1)
            data[current_key] = m.group(2).strip()
        elif current_key:
            # kaputte Mehrzeiler nicht als YAML weiterverwenden,
            # aber Inhalt als Text retten
            extra = line.strip()
            if extra:
                data[current_key] = (data[current_key] + " " + extra).strip()

    cleaned = {}
    for k, v in data.items():
        v = v.strip()
        if (v.startswith('"') and v.endswith('"')) or (v.startswith("'") and v.endswith("'")):
            v = v[1:-1]
        cleaned[k] = v.strip()
    return cleaned

def parse_list(raw):
    if not raw:
        return []
    raw = raw.strip()
    if not (raw.startswith("[") and raw.endswith("]")):
        return []
    inner = raw[1:-1].strip()
    if not inner:
        return []
    out = []
    for part in inner.split(","):
        item = part.strip().strip('"').strip("'").strip()
        if item:
            out.append(item)
    return out

def yaml_list(items):
    return "[" + ", ".join(q(x) for x in items if str(x).strip()) + "]"

def collection_and_parts(path):
    rel = path.relative_to(ROOT)
    parts = rel.parts
    if not parts or parts[0] not in COLLECTIONS:
        return None, []
    return parts[0], list(parts[1:])

def subject_from_parts(parts):
    if not parts:
        return "web-development"
    first = parts[0]
    if first in SUBJECT_ORDER:
        return first
    return "web-development"

def path_without_suffix(path):
    return str(path.with_suffix("")).replace("\\", "/")

def infer_topic_path(collection, parts):
    if collection == "subjects" or not parts:
        return []
    if len(parts) < 2:
        return []
    tail = list(parts[1:])
    tail[-1] = Path(tail[-1]).stem
    tail[-1] = re.sub(r"-loesung$", "", tail[-1])
    return [x for x in tail if x]

def safe_level(value):
    value = (value or "").strip().strip('"').strip("'")
    return value if value in LEVELS else "einfach"

def safe_section(value, topic_path):
    value = (value or "").strip().strip('"').strip("'")
    if value:
        return value
    if topic_path:
        return topic_path[0]
    return "grundlagen"

def normalize_file(path):
    collection, parts = collection_and_parts(path)
    if not collection:
        return False

    text = path.read_text(encoding="utf-8-sig")
    fm, body = split_frontmatter(text)
    data = raw_fields(fm or "")

    filename_title = slug_title(path.stem)
    lines = []

    if collection == "subjects":
        slug = parts[0] if parts and parts[0] != "index.md" else path.parent.name
        title = data.get("title") or SUBJECT_TITLES.get(slug, slug_title(slug))
        description = data.get("description") or f"{title} auf Schlaufuchs."
        order = data.get("order")
        try:
            order_int = int(str(order).strip())
        except Exception:
            order_int = SUBJECT_ORDER.get(slug, 99)

        lines = [
            f"title: {q(title)}",
            f"slug: {q(slug)}",
            f"description: {q(description)}",
            f"order: {order_int}",
        ]
        accent = data.get("accent", "").strip()
        if accent:
            lines.append(f"accent: {q(accent)}")

    elif collection == "news":
        title = data.get("title") or filename_title
        description = data.get("description") or title
        published = data.get("publishedAt") or re.match(r"^\d{4}-\d{2}-\d{2}", path.stem).group(0) if re.match(r"^\d{4}-\d{2}-\d{2}", path.stem) else "2026-04-01"
        tags = parse_list(data.get("tags", "")) or ["news"]

        lines = [
            f"title: {q(title)}",
            f"description: {q(description)}",
            f"publishedAt: {q(published)}",
            f"tags: {yaml_list(tags)}",
            "draft: false",
        ]

    elif collection == "articles":
        subject = subject_from_parts(parts)
        topic_path = parse_list(data.get("topicPath", "")) or infer_topic_path(collection, parts)
        section = safe_section(data.get("section", ""), topic_path)
        title = data.get("title") or filename_title
        description = data.get("description") or f"Überblick zu {title}."
        tags = parse_list(data.get("tags", "")) or [subject, section]
        level = safe_level(data.get("level", ""))

        lines = [
            f"title: {q(title)}",
            f"description: {q(description)}",
            f"subject: {q(subject)}",
            f"section: {q(section)}",
            f"topicPath: {yaml_list(topic_path)}",
            "learningGoals: []",
            "practiceIdeas: []",
            "commonMistakes: []",
            "keyTakeaways: []",
            "recognizeSignals: []",
            "selfCheckPoints: []",
            f"level: {q(level)}",
            f"tags: {yaml_list(tags)}",
            "draft: false",
        ]

    elif collection == "exercises":
        subject = subject_from_parts(parts)
        topic_path = parse_list(data.get("topicPath", "")) or infer_topic_path(collection, parts)
        section = safe_section(data.get("section", ""), topic_path)
        title = data.get("title") or filename_title
        description = data.get("description") or f"Übung zu {title}."
        tags = parse_list(data.get("tags", "")) or [subject, section, "aufgabe"]
        level = safe_level(data.get("level", ""))
        task_id = data.get("taskId") or ("AUTO-" + re.sub(r"[^A-Z0-9]+", "-", path.stem.upper()).strip("-"))

        lines = [
            f"title: {q(title)}",
            f"description: {q(description)}",
            f"subject: {q(subject)}",
            f"section: {q(section)}",
            f"topicPath: {yaml_list(topic_path)}",
            f"taskId: {q(task_id)}",
            f"tags: {yaml_list(tags)}",
            "hintPoints: []",
            "selfCheckPoints: []",
            "transferIdeas: []",
            f"level: {q(level)}",
            "draft: false",
        ]

    elif collection == "solutions":
        subject = subject_from_parts(parts)
        topic_path = parse_list(data.get("topicPath", "")) or infer_topic_path(collection, parts)
        section = safe_section(data.get("section", ""), topic_path)
        title = data.get("title") or ("Lösung: " + filename_title)
        description = data.get("description") or f"Musterlösung zu {filename_title}."
        tags = parse_list(data.get("tags", "")) or [subject, section, "loesung"]
        task_id = data.get("taskId") or ("AUTO-" + re.sub(r"[^A-Z0-9]+", "-", re.sub(r"-loesung$", "", path.stem.upper())).strip("-"))
        related = data.get("relatedExercise")

        if not related:
            try:
                rel = path.relative_to(ROOT / "solutions")
                exercise_rel = rel.with_name(re.sub(r"-loesung$", "", rel.stem) + rel.suffix)
                related = "src/content/exercises/" + str(exercise_rel.with_suffix("")).replace("\\", "/")
            except Exception:
                related = "src/content/exercises/" + re.sub(r"-loesung$", "", path.stem)

        lines = [
            f"title: {q(title)}",
            f"description: {q(description)}",
            f"subject: {q(subject)}",
            f"section: {q(section)}",
            f"topicPath: {yaml_list(topic_path)}",
            f"taskId: {q(task_id)}",
            f"relatedExercise: {q(related)}",
            f"tags: {yaml_list(tags)}",
            "draft: false",
        ]

    else:
        return False

    new_text = "---\n" + "\n".join(lines) + "\n---\n" + body.lstrip("\n")
    if new_text != text:
        path.write_text(new_text, encoding="utf-8")
        return True
    return False

changed = []
for path in ROOT.rglob("*"):
    if path.suffix.lower() not in {".md", ".mdx"}:
        continue
    if normalize_file(path):
        changed.append(str(path))

print(f"normalized={len(changed)}")
for item in changed[:120]:
    print(item)
if len(changed) > 120:
    print(f"... plus {len(changed)-120} more")
