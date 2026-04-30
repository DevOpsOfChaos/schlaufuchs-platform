from pathlib import Path
from collections import Counter
import re

ROOT = Path("src/content")
EX_ROOT = ROOT / "exercises"
SOL_ROOT = ROOT / "solutions"

def read(path):
    return path.read_text(encoding="utf-8", errors="replace")

def split_fm(text):
    if not text.startswith("---"):
        return "", text
    parts = text.split("---", 2)
    return (parts[1], parts[2]) if len(parts) >= 3 else ("", text)

def field(fm, name):
    m = re.search(rf'^{re.escape(name)}:\s*["\']?([^"\']+)["\']?\s*$', fm, re.M)
    return m.group(1).strip() if m else ""

def norm(ref):
    ref = ref.strip().strip('"').strip("'").replace("\\", "/")
    if ref.endswith(".md"):
        ref = ref[:-3]
    return ref

def canon_ex(path):
    return "src/content/exercises/" + str(path.relative_to(EX_ROOT).with_suffix("")).replace("\\", "/")

articles = list((ROOT / "articles").rglob("*.md")) if (ROOT / "articles").exists() else []
exercises = list(EX_ROOT.rglob("*.md")) if EX_ROOT.exists() else []
solutions = list(SOL_ROOT.rglob("*.md")) if SOL_ROOT.exists() else []

print("## Gesamt")
print(f"- articles: {len(articles)}")
print(f"- exercises: {len(exercises)}")
print(f"- solutions: {len(solutions)}")

print("\n## Nach Fachbereich")
for name, files, base in [
    ("articles", articles, ROOT / "articles"),
    ("exercises", exercises, EX_ROOT),
    ("solutions", solutions, SOL_ROOT),
]:
    c = Counter()
    for p in files:
        rel = p.relative_to(base)
        c[rel.parts[0] if rel.parts else "_unknown"] += 1
    print(f"\n### {name}")
    for k, v in c.most_common():
        print(f"- {k}: {v}")

exercise_ids = {canon_ex(p) for p in exercises}
exercise_task_ids = set()
for p in exercises:
    fm, _ = split_fm(read(p))
    tid = field(fm, "taskId")
    if tid:
        exercise_task_ids.add(tid)

solution_related = set()
solution_task_ids = set()
missing_related = []

for p in solutions:
    fm, _ = split_fm(read(p))
    rel = norm(field(fm, "relatedExercise"))
    tid = field(fm, "taskId")
    if rel:
        solution_related.add(rel)
        if rel not in exercise_ids:
            missing_related.append((str(p), rel))
    if tid:
        solution_task_ids.add(tid)

exercises_without_solution_by_path = sorted(exercise_ids - solution_related)
exercises_without_solution_by_task = sorted(exercise_task_ids - solution_task_ids)

print("\n## Konsistenz")
print(f"- exercises with taskId: {len(exercise_task_ids)}")
print(f"- solutions with taskId: {len(solution_task_ids)}")
print(f"- exercises without solution by path: {len(exercises_without_solution_by_path)}")
print(f"- exercises without solution by taskId: {len(exercises_without_solution_by_task)}")
print(f"- solutions with missing relatedExercise target: {len(missing_related)}")

if missing_related:
    print("\n### First missing related targets")
    for p, rel in missing_related[:40]:
        print(f"- {p} -> {rel}")
