# Legacy Source Staging

This directory is a curated staging area for selected material from the old Schlaufuchs mirror.

It is not production content.

The legacy site is used only as a source pool for later modernization:

- mandatory topics that should exist on the modern platform,
- old topic structures that can inform the current taxonomy,
- concrete tasks and worked solutions that are stronger than generic placeholder tasks,
- diagrams, circuit sketches, graphs, and explanatory images that can be redrawn or modernized.

Do not copy legacy HTML directly into `src/content`.

Do not move legacy images directly into `public/illustrations`.

Do not preserve the old visual design, navigation, CSS, logos, buttons, or page layout. Any future integration must be rewritten or redrawn for the current Schlaufuchs structure, styling, content model, and `CONTENT_GOVERNANCE.md`.

The manifest in `manifest.json` records each selected source unit, its intended subject/topic, migration action, exact staged-file coverage, license assumptions, and attribution requirement.

Manifest coverage is intentionally strict:

- single-file sources use `stagedPath`;
- multi-file sources use `stagedPathPrefix` plus `includedFiles`;
- a prefix alone is not coverage;
- every staged file must be either individually listed or named in `includedFiles`.

Before any item leaves this staging area:

1. Rewrite articles in the current neutral reference style.
2. Adapt tasks and solutions to the current content model.
3. Modernize diagrams instead of importing the old look.
4. Verify license and attribution details.
5. Review separately credited third-party material before reuse.

## Migration Priority

### First Production Migration Sprint

Start with `elektrotechnik/tasks/dioden_i_01`.

Reason: it is the strongest pilot because it has a concrete diode-characteristic measurement task, circuit material, measured values, interpretation questions, and worked solution assets. It can become a modern Schlaufuchs task only after the article/topic slot for diode behavior is ready, the circuit and graph are redrawn, and attribution is prepared.

Do not start this migration inside the legacy staging area.

### Second Recommended Pilot

Use `linux/tasks/bash_rsync_backup` after the first pilot. It has a practical shell-script task and a real solution script, but it needs safety review and modern command framing before publication.

### Do Not Migrate

Do not migrate old navigation, headers, footers, layout CSS, logo references, button pages, parking-page captures, duplicate web thumbnails, or image-only wrapper pages.

Do not migrate weak standalone tasks without a current solution and validation model.

### Modern Diagrams

Redraw circuit diagrams, signal diagrams, box-model diagrams, Linux permission diagrams, MOSFET characteristic diagrams, and vector-geometry diagrams in the current visual language. Legacy bitmaps are source evidence, not production assets.

### Rewritten Reference Articles

Use Linux shell/user/permissions pages, Elektrotechnik signals/MOSFET/AVR timer pages, HTML/CSS structure pages, and Informatik programming overview pages only as source material for neutral reference articles.

### Later Tasks And Solutions

Migrate math growth, complex-number, RCL, Arduino counter, CSS Grid, and Bash backup tasks only when the target topic structure exists and a modern solution/checking model is ready.
