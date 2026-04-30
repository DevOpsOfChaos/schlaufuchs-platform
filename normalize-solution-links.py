from pathlib import Path
import re
import json

EX_ROOT = Path("src/content/exercises")
SOL_ROOT = Path("src/content/solutions")
REPORT = Path("solution-link-normalization-report.md")

def read(path):
    return path.read_text(encoding="utf-8", errors="replace")

def write(path, text):
    path.write_text(text, encoding="utf-8")

def split_fm(text):
    if not text.startswith("---"):
        return "", text
    parts = text.split("---", 2)
    if len(parts) < 3:
        return "", text
    return parts[1], parts[2]

def get_field(fm, name):
    m = re.search(rf'^{re.escape(name)}:\s*["\']?([^"\']+)["\']?\s*$', fm, re.M)
    return m.group(1).strip() if m else ""

def set_field(fm, name, value):
    line = f'{name}: {json.dumps(value, ensure_ascii=False)}'
    if re.search(rf'^{re.escape(name)}:', fm, re.M):
        return re.sub(rf'^{re.escape(name)}:\s*.*$', line, fm, flags=re.M)
    return fm.rstrip() + "\n" + line + "\n"

def canonical_exercise_id(path):
    return "src/content/exercises/" + str(path.relative_to(EX_ROOT).with_suffix("")).replace("\\", "/")

def normalize_ref(raw):
    raw = raw.strip().strip('"').strip("'").replace("\\", "/")
    if raw.endswith(".md"):
        raw = raw[:-3]
    return raw

def aliases_for(canonical):
    short = canonical.replace("src/content/exercises/", "")
    return {
        canonical,
        canonical + ".md",
        short,
        short + ".md",
        "exercises/" + short,
        "exercises/" + short + ".md",
    }

exercise_by_alias = {}
exercise_task_id = {}

for ex in EX_ROOT.rglob("*.md") if EX_ROOT.exists() else []:
    canon = canonical_exercise_id(ex)
    fm, _ = split_fm(read(ex))
    tid = get_field(fm, "taskId")
    exercise_task_id[canon] = tid
    for a in aliases_for(canon):
        exercise_by_alias[normalize_ref(a)] = canon

changed = []
missing = []
taskid_fixed = []

for sol in SOL_ROOT.rglob("*.md") if SOL_ROOT.exists() else []:
    text = read(sol)
    fm, body = split_fm(text)
    if not fm:
        continue

    old_related = get_field(fm, "relatedExercise")
    related_norm = normalize_ref(old_related)
    canon = exercise_by_alias.get(related_norm)

    # Fallback: aus Lösungspfad ableiten
    if not canon:
        rel = sol.relative_to(SOL_ROOT)
        stem = rel.stem
        stem = re.sub(r"-loesung$", "", stem)
        candidate = "src/content/exercises/" + str(rel.with_name(stem).with_suffix("")).replace("\\", "/")
        canon = exercise_by_alias.get(normalize_ref(candidate))

    if not canon:
        missing.append((str(sol), old_related))
        continue

    new_fm = fm
    if old_related != canon:
        new_fm = set_field(new_fm, "relatedExercise", canon)

    ex_tid = exercise_task_id.get(canon, "")
    sol_tid = get_field(new_fm, "taskId")
    if ex_tid and sol_tid != ex_tid:
        new_fm = set_field(new_fm, "taskId", ex_tid)
        taskid_fixed.append((str(sol), sol_tid, ex_tid))

    new_text = "---" + new_fm + "---" + body
    if new_text != text:
        write(sol, new_text)
        changed.append(str(sol))

lines = []
lines.append("# Solution link normalization report\n")
lines.append(f"- changed solutions: {len(changed)}")
lines.append(f"- taskId fixed: {len(taskid_fixed)}")
lines.append(f"- still missing related target: {len(missing)}")

if missing:
    lines.append("\n## Missing")
    for sol, rel in missing[:120]:
        lines.append(f"- `{sol}` -> `{rel}`")
    if len(missing) > 120:
        lines.append(f"- ... plus {len(missing)-120} more")

REPORT.write_text("\n".join(lines) + "\n", encoding="utf-8")
print(REPORT.read_text(encoding="utf-8"))
