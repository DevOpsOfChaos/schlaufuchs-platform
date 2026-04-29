from pathlib import Path
import re

for path in Path("src/content/news").glob("*.md"):
    text = path.read_text(encoding="utf-8-sig")
    if not text.startswith("---"):
        continue

    parts = text.split("---", 2)
    if len(parts) < 3:
        print("BROKEN SEPARATOR", path)
        continue

    _, fm, body = parts
    lines = fm.strip().splitlines()
    data = {}

    for line in lines:
        if ":" not in line:
            continue
        k, v = line.split(":", 1)
        data[k.strip()] = v.strip().strip('"').strip("'")

    title = data.get("title", path.stem)
    description = data.get("description", title)
    published = data.get("publishedAt", "2026-04-01")
    tags = data.get("tags", "[news]")
    if not tags.startswith("["):
        tags = "[news]"

    new = f'''---
title: "{title.replace('"', '\\"')}"
description: "{description.replace('"', '\\"')}"
publishedAt: "{published}"
tags: {tags}
draft: false
---{body}'''

    path.write_text(new, encoding="utf-8")
    print("fixed", path)

