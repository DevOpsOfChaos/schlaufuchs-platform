# Legacy Migration Prep Plan

This package classifies every manifest item and every staged file under `legacy/selected/**`. It does not migrate production content.

- Total manifest items classified: 24
- Total staged files covered: 147
- Uncovered staged files: 0
- Missing manifest files: 0
- Production content modified by this package: none intended

## Status Counts

- ALREADY_MIGRATED: 10
- DELETE_OR_IGNORE: 3
- MERGE_INTO_EXISTING: 6
- MIGRATE_REFERENCE: 5

## Ready-to-run High Priority Prompts

### mathematik-vektorrechnung-ebenen

```text
Task: migrate or merge `mathematik-vektorrechnung-ebenen`.

Rules:
- Do not run `npm run build`.
- Do not copy legacy HTML, old CSS, navigation, wrappers, or old bitmap styling into production.
- Rewrite in current neutral Schlaufuchs reference style.
- Redraw diagrams; do not import old images directly.
- If an exercise is created or changed, create/update the matching solution in the same sprint.
- Add attribution for CC BY-NC-SA 4.0: source path/URL, author marker/date if observed, changed/adapted/redrawn note, and no endorsement implication.
- Commit and push only after validation passes.

Allowed scope:
- Source: legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/Ebenen.html, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_01_interaktiv.html, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_01.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_02_interaktiv.html, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_02.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_03_interaktiv.html, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_03.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_04_interaktiv.html, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_04.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_05_interaktiv.html, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_05.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_00.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_01.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_02.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_03.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_04.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_05.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_06.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_07.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_08.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_09.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_10.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_11.png, legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen/formeln/ebene_a_12.png
- Target area: Mathematik / Geometrie / Vektoren und Richtung
- Suggested target path: src/content/articles/mathematik/geometrie/vektoren-und-richtung/ebenen-im-raum/ueberblick.md

Stop conditions:
- unclear third-party asset rights,
- missing target topic structure,
- conflict with current production content,
- no matching solution for any task,
- validation failure.

Validation:
1. `git status`
2. `npx astro sync`
3. `npm run check:content`
4. `git diff --check`

Then commit and run `git push origin main`.
```

### elektrotechnik-daten-und-signale-leitungscodierung

```text
Task: migrate or merge `elektrotechnik-daten-und-signale-leitungscodierung`.

Rules:
- Do not run `npm run build`.
- Do not copy legacy HTML, old CSS, navigation, wrappers, or old bitmap styling into production.
- Rewrite in current neutral Schlaufuchs reference style.
- Redraw diagrams; do not import old images directly.
- If an exercise is created or changed, create/update the matching solution in the same sprint.
- Add attribution for CC BY-NC-SA 4.0: source path/URL, author marker/date if observed, changed/adapted/redrawn note, and no endorsement implication.
- Commit and push only after validation passes.

Allowed scope:
- Source: legacy/selected/elektrotechnik/topic-sources/daten-und-signale/bilder/digitales_signal_01.png, legacy/selected/elektrotechnik/topic-sources/daten-und-signale/bilder/Manchester_code_JW.png, legacy/selected/elektrotechnik/topic-sources/daten-und-signale/bilder/NRZ_bipolar_JW.png, legacy/selected/elektrotechnik/topic-sources/daten-und-signale/bilder/NRZ_unipolar_JW.png, legacy/selected/elektrotechnik/topic-sources/daten-und-signale/bilder/RZ_bipolar_JW.png, legacy/selected/elektrotechnik/topic-sources/daten-und-signale/bilder/RZ_unipolar_JW.png, legacy/selected/elektrotechnik/topic-sources/daten-und-signale/bilder/Signal_01_jw.png, legacy/selected/elektrotechnik/topic-sources/daten-und-signale/bilder/Signal_Uebertragungskette_01_jw_web.png, legacy/selected/elektrotechnik/topic-sources/daten-und-signale/bilder/Signalcodierung_01_jw.png, legacy/selected/elektrotechnik/topic-sources/daten-und-signale/leitungscodierung.html, legacy/selected/elektrotechnik/topic-sources/daten-und-signale/signale_grundlagen.html, legacy/selected/elektrotechnik/topic-sources/daten-und-signale/signaluebertragung_grundlagen.html
- Target area: Elektrotechnik / Daten und Signale
- Suggested target path: src/content/articles/elektrotechnik/daten-und-signale/leitungscodierung-und-signaluebertragung/ueberblick.md

Stop conditions:
- unclear third-party asset rights,
- missing target topic structure,
- conflict with current production content,
- no matching solution for any task,
- validation failure.

Validation:
1. `git status`
2. `npx astro sync`
3. `npm run check:content`
4. `git diff --check`

Then commit and run `git push origin main`.
```

### linux-shellskripte-grundlagen

```text
Task: migrate or merge `linux-shellskripte-grundlagen`.

Rules:
- Do not run `npm run build`.
- Do not copy legacy HTML, old CSS, navigation, wrappers, or old bitmap styling into production.
- Rewrite in current neutral Schlaufuchs reference style.
- Redraw diagrams; do not import old images directly.
- If an exercise is created or changed, create/update the matching solution in the same sprint.
- Add attribution for CC BY-NC-SA 4.0: source path/URL, author marker/date if observed, changed/adapted/redrawn note, and no endorsement implication.
- Commit and push only after validation passes.

Allowed scope:
- Source: legacy/selected/linux/topic-sources/linux_shellskripte.html
- Target area: Linux / Automatisierung und Skripte / Shellskripte
- Suggested target path: src/content/articles/linux/automatisierung-und-skripte/shellskripte/ueberblick.md

Stop conditions:
- unclear third-party asset rights,
- missing target topic structure,
- conflict with current production content,
- no matching solution for any task,
- validation failure.

Validation:
1. `git status`
2. `npx astro sync`
3. `npm run check:content`
4. `git diff --check`

Then commit and run `git push origin main`.
```

### informatik-c-python-programmiergrundlagen

```text
Task: migrate or merge `informatik-c-python-programmiergrundlagen`.

Rules:
- Do not run `npm run build`.
- Do not copy legacy HTML, old CSS, navigation, wrappers, or old bitmap styling into production.
- Rewrite in current neutral Schlaufuchs reference style.
- Redraw diagrams; do not import old images directly.
- If an exercise is created or changed, create/update the matching solution in the same sprint.
- Add attribution for CC BY-NC-SA 4.0: source path/URL, author marker/date if observed, changed/adapted/redrawn note, and no endorsement implication.
- Commit and push only after validation passes.

Allowed scope:
- Source: legacy/selected/informatik/topic-sources/informatik_einfuehrung/bilder/Aufbau_computer_02.png, legacy/selected/informatik/topic-sources/informatik_einfuehrung/bilder/Bestandteile_Programm.png, legacy/selected/informatik/topic-sources/informatik_einfuehrung/bilder/interpreter_vs_compiler.drawio.png, legacy/selected/informatik/topic-sources/informatik_einfuehrung/bilder/programmierparadigmen_farbig.drawio.png, legacy/selected/informatik/topic-sources/informatik_einfuehrung/C_Grundlagen.html, legacy/selected/informatik/topic-sources/informatik_einfuehrung/C_Programmierung.html, legacy/selected/informatik/topic-sources/informatik_einfuehrung/informatik_einfuehrung.html, legacy/selected/informatik/topic-sources/informatik_einfuehrung/informatik_einstieg.html
- Target area: Informatik / Programmierung / C, Python und Grundlagen
- Suggested target path: src/content/articles/informatik/programmieren-mit-c-und-python.md

Stop conditions:
- unclear third-party asset rights,
- missing target topic structure,
- conflict with current production content,
- no matching solution for any task,
- validation failure.

Validation:
1. `git status`
2. `npx astro sync`
3. `npm run check:content`
4. `git diff --check`

Then commit and run `git push origin main`.
```

### web-html-grundstruktur

```text
Task: migrate or merge `web-html-grundstruktur`.

Rules:
- Do not run `npm run build`.
- Do not copy legacy HTML, old CSS, navigation, wrappers, or old bitmap styling into production.
- Rewrite in current neutral Schlaufuchs reference style.
- Redraw diagrams; do not import old images directly.
- If an exercise is created or changed, create/update the matching solution in the same sprint.
- Add attribution for CC BY-NC-SA 4.0: source path/URL, author marker/date if observed, changed/adapted/redrawn note, and no endorsement implication.
- Commit and push only after validation passes.

Allowed scope:
- Source: legacy/selected/web-development/topic-sources/html_grundstruktur.html
- Target area: Web Development / HTML / Struktur und Semantik
- Suggested target path: src/content/articles/web-development/html/html-grundstruktur/ueberblick.md

Stop conditions:
- unclear third-party asset rights,
- missing target topic structure,
- conflict with current production content,
- no matching solution for any task,
- validation failure.

Validation:
1. `git status`
2. `npx astro sync`
3. `npm run check:content`
4. `git diff --check`

Then commit and run `git push origin main`.
```

### web-html5-semantik

```text
Task: migrate or merge `web-html5-semantik`.

Rules:
- Do not run `npm run build`.
- Do not copy legacy HTML, old CSS, navigation, wrappers, or old bitmap styling into production.
- Rewrite in current neutral Schlaufuchs reference style.
- Redraw diagrams; do not import old images directly.
- If an exercise is created or changed, create/update the matching solution in the same sprint.
- Add attribution for CC BY-NC-SA 4.0: source path/URL, author marker/date if observed, changed/adapted/redrawn note, and no endorsement implication.
- Commit and push only after validation passes.

Allowed scope:
- Source: legacy/selected/web-development/topic-sources/html5_semantik.html
- Target area: Web Development / HTML / Semantik
- Suggested target path: src/content/articles/web-development/html/semantische-elemente/ueberblick.md

Stop conditions:
- unclear third-party asset rights,
- missing target topic structure,
- conflict with current production content,
- no matching solution for any task,
- validation failure.

Validation:
1. `git status`
2. `npx astro sync`
3. `npm run check:content`
4. `git diff --check`

Then commit and run `git push origin main`.
```

### web-css-grundstruktur-boxmodell-grid

```text
Task: migrate or merge `web-css-grundstruktur-boxmodell-grid`.

Rules:
- Do not run `npm run build`.
- Do not copy legacy HTML, old CSS, navigation, wrappers, or old bitmap styling into production.
- Rewrite in current neutral Schlaufuchs reference style.
- Redraw diagrams; do not import old images directly.
- If an exercise is created or changed, create/update the matching solution in the same sprint.
- Add attribution for CC BY-NC-SA 4.0: source path/URL, author marker/date if observed, changed/adapted/redrawn note, and no endorsement implication.
- Commit and push only after validation passes.

Allowed scope:
- Source: legacy/selected/web-development/topic-sources/css_grundstruktur/bilder/Border_Boxmodell_jw_web.png, legacy/selected/web-development/topic-sources/css_grundstruktur/bilder/Boxmodell-detail_jw_web.png, legacy/selected/web-development/topic-sources/css_grundstruktur/CSS_box_modell.html, legacy/selected/web-development/topic-sources/css_grundstruktur/css_grid_layout.html, legacy/selected/web-development/topic-sources/css_grundstruktur/css_grundstruktur.html, legacy/selected/web-development/topic-sources/css_grundstruktur/css_syntax.html, legacy/selected/web-development/topic-sources/css_grundstruktur/css_zentrierte_ausgabe.html, legacy/selected/web-development/topic-sources/css_grundstruktur/css_zweispaltiges_layout.html, legacy/selected/web-development/topic-sources/css_grundstruktur/externe_stylesheet_datei.html
- Target area: Web Development / CSS / Layout und Boxmodell
- Suggested target path: existing CSS box model and CSS Grid article/exercise paths under src/content/articles/web-development/css/**

Stop conditions:
- unclear third-party asset rights,
- missing target topic structure,
- conflict with current production content,
- no matching solution for any task,
- validation failure.

Validation:
1. `git status`
2. `npx astro sync`
3. `npm run check:content`
4. `git diff --check`

Then commit and run `git push origin main`.
```

## Mathematik

### Already migrated
- **mathematik-wachstum-i-03-bakterienkolonie** (ALREADY_MIGRATED, HIGH)
  - Source: `legacy/selected/mathematik/tasks/wachstum_i_03`
  - Coverage: Migrated to the exponential-functions article, exercise, and solution with attribution.
  - Recommendation: Mathematik / Funktionen / Exponentialfunktionen; suggested path: `src/content/exercises/mathematik/funktionen/exponentialfunktionen/bakterienkolonie-mit-verdopplungszeit-modellieren.md`
  - Reason: Concrete exponential-growth task already migrated and attributed.
- **mathematik-komplexe-zahlen-i-06** (ALREADY_MIGRATED, HIGH)
  - Source: `legacy/selected/mathematik/tasks/komplexe_zahlen_i_06`
  - Coverage: Migrated to the complex-numbers article, exercise, and solution with attribution.
  - Recommendation: Mathematik / Komplexe Zahlen; suggested path: `src/content/exercises/mathematik/komplexe-zahlen/addition-subtraktion-und-polarform.md`
  - Reason: Concrete complex-number task already migrated and attributed.

### High priority next migrations
- **mathematik-vektorrechnung-ebenen** (MIGRATE_REFERENCE, HIGH)
  - Source: `legacy/selected/mathematik/topic-sources/vektorrechnung_ebenen`
  - Coverage: Production has broad vector coverage, but no fully migrated dedicated reference for Ebenen in 3D vector geometry was found.
  - Recommendation: Mathematik / Geometrie / Vektoren und Richtung; suggested path: `src/content/articles/mathematik/geometrie/vektoren-und-richtung/ebenen-im-raum/ueberblick.md`
  - Reason: Structured plane-in-3D source with point-direction form, normal form, coordinate form, and diagrams worth modern redrawing.

### Medium priority migrations
- **mathematik-lineare-funktionen-taxonomy-source** (MERGE_INTO_EXISTING, MEDIUM)
  - Source: `legacy/selected/mathematik/topic-sources/mathematik_aufgaben_lineare_funktionen.html`
  - Coverage: Production already has lineare Gleichungen, lineare Funktionen, Steigung, Achsenabschnitt, and related exercises; this source is mainly taxonomy and difficulty evidence.
  - Recommendation: Mathematik / Funktionen and Algebra taxonomy; suggested path: `src/content/articles/mathematik/algebra/lineare-gleichungen-loesen.md or existing lineare-funktionen pages`
  - Reason: Useful for future linear-function taxonomy and task progression, not as direct prose.
- **mathematik-quadratische-funktionen-taxonomy-source** (MERGE_INTO_EXISTING, MEDIUM)
  - Source: `legacy/selected/mathematik/topic-sources/mathematik_aufgaben_quadratische_funktionen.html`
  - Coverage: Production already has quadratische Funktionen, Diskriminante, Scheitelpunktform, and related exercises; this source is taxonomy evidence.
  - Recommendation: Mathematik / Algebra / Quadratische Funktionen; suggested path: `src/content/articles/mathematik/algebra/quadratische-funktionen/ueberblick/grundlagen-quadratische-funktionen.md`
  - Reason: Useful for checking the split between equations, parabolas, exact solving, and difficulty levels.

### Low priority / optional
- None.

### Delete / ignore
- None.

### Hold for human review
- None.

## Elektrotechnik

### Already migrated
- **elektrotechnik-mosfets-reference** (ALREADY_MIGRATED, HIGH)
  - Source: `legacy/selected/elektrotechnik/topic-sources/mosfets`
  - Coverage: Migrated/strengthened in src/content/articles/elektrotechnik/mosfet-grundlagen/ueberblick.md with legacy attribution.
  - Recommendation: Elektrotechnik / Bauteile / MOSFETs; suggested path: `src/content/articles/elektrotechnik/mosfet-grundlagen/ueberblick.md`
  - Reason: Pilot MOSFET reference already strengthened.
- **elektrotechnik-dioden-i-01-kennlinie** (ALREADY_MIGRATED, HIGH)
  - Source: `legacy/selected/elektrotechnik/tasks/dioden_i_01`
  - Coverage: Migrated to diode reference, exercise, solution, and redrawn diagram assets with attribution.
  - Recommendation: Elektrotechnik / Bauteile / Dioden und Richtung; suggested path: `src/content/exercises/elektrotechnik/bauteile/dioden-und-richtung/kennlinie-aus-messwerten-deuten.md`
  - Reason: Pilot diode-characteristic migration is complete.
- **elektrotechnik-rcl-i-01-rc-parallelschaltung** (ALREADY_MIGRATED, HIGH)
  - Source: `legacy/selected/elektrotechnik/tasks/rcl_i_01`
  - Coverage: Migrated to the RCL/RC exercise, matching solution, and reference page with attribution.
  - Recommendation: Elektrotechnik / Wechselstrom / RCL-Schaltungen und Zeigerdiagramme; suggested path: `src/content/exercises/elektrotechnik/wechselstrom/rcl-schaltungen-und-zeigerdiagramme/stromzeiger-in-rc-parallelschaltung-bestimmen.md`
  - Reason: RC/RCL Wechselstrom pilot is complete.
- **elektrotechnik-arduino-zaehler-03** (ALREADY_MIGRATED, HIGH)
  - Source: `legacy/selected/elektrotechnik/tasks/arduino_zaehler_03`
  - Coverage: Migrated to Arduino/AVR event-counter reference, exercise, solution, and adapted code/diagram material with attribution.
  - Recommendation: Elektrotechnik / Mikrocontroller und ATmega / Arduino und AVR; suggested path: `src/content/exercises/elektrotechnik/mikrocontroller-und-atmega/arduino-und-avr/arduino-uno-ereigniszaehler-mit-portd.md`
  - Reason: Arduino/ATmega event-counter pilot is complete.

### High priority next migrations
- **elektrotechnik-daten-und-signale-leitungscodierung** (MERGE_INTO_EXISTING, HIGH)
  - Source: `legacy/selected/elektrotechnik/topic-sources/daten-und-signale`
  - Coverage: Production has Elektrotechnik / daten-und-signale coverage, but legacy-specific signal transmission and line-coding material is not fully represented with attribution.
  - Recommendation: Elektrotechnik / Daten und Signale; suggested path: `src/content/articles/elektrotechnik/daten-und-signale/leitungscodierung-und-signaluebertragung/ueberblick.md`
  - Reason: Mandatory cluster for signals, transmission chain, NRZ/RZ, bipolar/unipolar, and Manchester coding diagrams.

### Medium priority migrations
- **elektrotechnik-avr-timer** (MERGE_INTO_EXISTING, MEDIUM)
  - Source: `legacy/selected/elektrotechnik/topic-sources/avr_timer`
  - Coverage: Production has multiple timer pages, including Timer und Zeitbasis, ATmega timer/prescaler, CTC, overflow, PWM, and 8-bit/16-bit timer pages.
  - Recommendation: Elektrotechnik / Mikrocontroller und ATmega / Timer und Zeitbasis; suggested path: `src/content/articles/elektrotechnik/mikrocontroller-und-atmega/timer-und-zeitbasis/ueberblick/grundlagen-timer-und-zeitbasis.md`
  - Reason: Existing coverage is broad; merge only missing AVR-specific normal-mode/CTC details or attribution evidence.

### Low priority / optional
- None.

### Delete / ignore
- None.

### Hold for human review
- None.

## Linux

### Already migrated
- **linux-shell-grundlagen** (ALREADY_MIGRATED, HIGH)
  - Source: `legacy/selected/linux/topic-sources/linux_shell.html`
  - Coverage: Migrated/strengthened in src/content/articles/linux/shell-arbeitsfluss/ueberblick.md with attribution.
  - Recommendation: Linux / Shell-Arbeitsfluss; suggested path: `src/content/articles/linux/shell-arbeitsfluss/ueberblick.md`
  - Reason: Linux shell pilot is complete.
- **linux-dateirechte** (ALREADY_MIGRATED, HIGH)
  - Source: `legacy/selected/linux/topic-sources/linux_dateirechte.html`
  - Coverage: Migrated/strengthened in the Linux dateirechte article with attribution.
  - Recommendation: Linux / Dateisystem und Rechte; suggested path: `src/content/articles/linux/dateisystem-und-rechte/dateirechte-und-besitz/ueberblick/grundlagen-dateirechte-und-besitz-v186.md`
  - Reason: Linux file-permissions pilot is complete.
- **linux-benutzerverwaltung** (ALREADY_MIGRATED, HIGH)
  - Source: `legacy/selected/linux/topic-sources/linux_benutzerverwaltung.html`
  - Coverage: Migrated/strengthened in src/content/articles/linux/benutzer-und-gruppen/ueberblick.md with attribution.
  - Recommendation: Linux / Rechte, Benutzer und Sicherheit; suggested path: `src/content/articles/linux/benutzer-und-gruppen/ueberblick.md`
  - Reason: Linux users/groups pilot is complete.
- **linux-bash-rsync-backup** (ALREADY_MIGRATED, HIGH)
  - Source: `legacy/selected/linux/tasks/bash_rsync_backup`
  - Coverage: Migrated to rsync backup exercise and solution under Linux automation/shell scripts with technical hardening and attribution.
  - Recommendation: Linux / Automatisierung und Skripte / Shellskripte; suggested path: `src/content/exercises/linux/automatisierung-und-skripte/shellskripte/rsync-backup-mit-probelauf-und-bestaetigung.md`
  - Reason: Linux rsync backup task pilot is complete.

### High priority next migrations
- **linux-shellskripte-grundlagen** (MIGRATE_REFERENCE, HIGH)
  - Source: `legacy/selected/linux/topic-sources/linux_shellskripte.html`
  - Coverage: Production has shell and scripting-related pages/exercises, but this legacy shell-script overview was not found as a specific attributed migration.
  - Recommendation: Linux / Automatisierung und Skripte / Shellskripte; suggested path: `src/content/articles/linux/automatisierung-und-skripte/shellskripte/ueberblick.md`
  - Reason: Useful Bash script introduction covering interpreter line, execution, variables, input/output, and control flow.

### Medium priority migrations
- None.

### Low priority / optional
- None.

### Delete / ignore
- **linux-shell-diagram-old-bitmap** (DELETE_OR_IGNORE, LOW)
  - Source: `legacy/selected/linux/topic-sources/bilder/linux_shell_jw_web.png`
  - Coverage: Linux shell reference is already migrated with attribution and without importing the old bitmap.
  - Recommendation: Linux / Shell-Arbeitsfluss
  - Reason: Standalone old bitmap is superseded by current shell coverage and should not be imported directly.
- **linux-permissions-diagram-old-bitmap** (DELETE_OR_IGNORE, LOW)
  - Source: `legacy/selected/linux/topic-sources/bilder/permissions.png`
  - Coverage: Linux dateirechte reference is already migrated with attribution and explicitly did not reuse the legacy permissions bitmap.
  - Recommendation: Linux / Dateisystem und Rechte
  - Reason: Standalone old permissions bitmap is superseded and should not be migrated directly.

### Hold for human review
- None.

## Informatik

### Already migrated
- None.

### High priority next migrations
- **informatik-c-python-programmiergrundlagen** (MIGRATE_REFERENCE, HIGH)
  - Source: `legacy/selected/informatik/topic-sources/informatik_einfuehrung`
  - Coverage: Production has Informatik basics, programming, compiler/interpreter, C++ and Python-adjacent pages, but this C/Python legacy cluster was not found as an attributed migration.
  - Recommendation: Informatik / Programmierung / C, Python und Grundlagen; suggested path: `src/content/articles/informatik/programmieren-mit-c-und-python.md`
  - Reason: Large, recent source cluster for programming foundations, C basics, program structure, paradigms, and compiler/interpreter comparison.

### Medium priority migrations
- None.

### Low priority / optional
- None.

### Delete / ignore
- None.

### Hold for human review
- None.

## Web Development

### Already migrated
- None.

### High priority next migrations
- **web-html-grundstruktur** (MIGRATE_REFERENCE, HIGH)
  - Source: `legacy/selected/web-development/topic-sources/html_grundstruktur.html`
  - Coverage: Production has HTML articles/exercises for structure and semantics, but this legacy HTML basics source was not found as a specific attributed migration.
  - Recommendation: Web Development / HTML / Struktur und Semantik; suggested path: `src/content/articles/web-development/html/html-grundstruktur/ueberblick.md`
  - Reason: Foundational HTML source for markup, tags, attributes, hyperlinks, document structure, and validation.
- **web-html5-semantik** (MIGRATE_REFERENCE, HIGH)
  - Source: `legacy/selected/web-development/topic-sources/html5_semantik.html`
  - Coverage: Production has semantic HTML exercises and adjacent reference pages, but this legacy semantic-elements source was not found as a specific attributed migration.
  - Recommendation: Web Development / HTML / Semantik; suggested path: `src/content/articles/web-development/html/semantische-elemente/ueberblick.md`
  - Reason: Clear source for semantic HTML elements and separating document structure from styling.
- **web-css-grundstruktur-boxmodell-grid** (MERGE_INTO_EXISTING, HIGH)
  - Source: `legacy/selected/web-development/topic-sources/css_grundstruktur`
  - Coverage: Production has CSS box-model, grid, selectors, stylesheets, responsive layout, and related exercises/solutions.
  - Recommendation: Web Development / CSS / Layout und Boxmodell; suggested path: `existing CSS box model and CSS Grid article/exercise paths under src/content/articles/web-development/css/**`
  - Reason: Useful cluster for CSS syntax, external stylesheets, classic and border-box models, centered output, two-column layouts, and CSS Grid.

### Medium priority migrations
- **web-css-aufgabe-02-grid-layout** (MERGE_INTO_EXISTING, MEDIUM)
  - Source: `legacy/selected/web-development/tasks/css_aufgabe_02`
  - Coverage: Production already has CSS Grid exercises and solutions. This source can inform a future refinement, but should not be migrated standalone without a modern solution.
  - Recommendation: Web Development / CSS / Grid und Layout; suggested path: `existing CSS Grid exercise/solution paths under src/content/exercises/web-development/css/** and src/content/solutions/web-development/css/**`
  - Reason: Concrete CSS Grid task with layout diagram and experimentation requirement; useful only if merged into an existing solved task flow.

### Low priority / optional
- None.

### Delete / ignore
- **web-html-aufgabe-01-hallo-welt** (DELETE_OR_IGNORE, LOW)
  - Source: `legacy/selected/web-development/tasks/html_aufgabe_01.html`
  - Coverage: Production already has stronger HTML structure and semantics exercises with validation framing.
  - Recommendation: Web Development / HTML
  - Reason: Tiny hello-world task without solution; governance discourages adding weak standalone tasks without solutions.

### Hold for human review
- None.
