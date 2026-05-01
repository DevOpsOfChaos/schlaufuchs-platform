# Schlaufuchs Legacy Migration Prep

This folder is a curated preparation package for staged legacy Schlaufuchs source material. It is deliberately not a production migration sprint.

## Contents

- `migration-plan.json`: complete machine-readable classification for all 24 manifest items and all 147 staged files.
- `migration-plan.md`: human-readable plan grouped by subject.
- `selected/**`: focused copies of still-useful source files for future migration/merge work.
- `rejected/rejection-report.md`: explicit rejection notes for ignored source units.
- `package-notes.md`: license and attribution handling notes.
- `zip/schlaufuchs-legacy-migration-prep.zip`: portable package containing the plan, notes, selected sources, and rejection report.

## Scope Boundary

Do not treat files in this folder as production content. Future migrations must rewrite text, redraw diagrams, provide required attribution, and validate with:

1. `git status`
2. `npx astro sync`
3. `npm run check:content`
4. `git diff --check`

Do not run `npm run build` unless a later task explicitly requires it.
