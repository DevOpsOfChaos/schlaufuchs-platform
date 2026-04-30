from pathlib import Path
from collections import Counter

roots = {
    "articles": Path("src/content/articles"),
    "exercises": Path("src/content/exercises"),
    "solutions": Path("src/content/solutions"),
    "subjects": Path("src/content/subjects"),
    "news": Path("src/content/news"),
}

print("## Gesamt")
for name, root in roots.items():
    count = len(list(root.rglob("*.md"))) if root.exists() else 0
    print(f"{name}: {count}")

print("\n## Nach Fachbereich")
for name in ["articles", "exercises", "solutions"]:
    root = roots[name]
    c = Counter()
    if root.exists():
        for p in root.rglob("*.md"):
            rel = p.relative_to(root)
            subject = rel.parts[0] if rel.parts else "_unknown"
            c[subject] += 1
    print(f"\n{name}")
    for k, v in c.most_common():
        print(f"  {k}: {v}")
