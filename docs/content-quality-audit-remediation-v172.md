# Content Quality Audit – v172 Remediation-Queues

Dieser Block macht aus den vorhandenen Quality-Gates, Review-Checkpoints und Audit-Aktionen konkrete Abarbeitungsschritte. Es wurden keine Lernseiten erzeugt.

## Umfang

- Vorherige CSV-Zeilen: 12494
- Neue Zeilen in v172: 12086
- Gesamtzeilen: 24580
- Neue `remediation_step`-Zeilen: 11941
- Neue `execution_queue`-Zeilen: 138
- Neue `subject_execution_queue`-Zeilen: 7

## Top-Aktionen

- `improve_text`: 2427
- `review`: 2145
- `add_exercise`: 2120
- `add_image`: 1265
- `verify_navigation`: 1079
- `split_topic`: 751
- `add_solution`: 712
- `fix_frontmatter`: 446
- `add_overview_or_link_existing_article`: 412
- `merge_duplicate`: 373
- `add_overview_or_fix_section`: 182
- `improve_solution`: 15

## Fachbereiche

- `elektrotechnik`: 3382
- `web-development`: 2408
- `linux`: 2133
- `informatik`: 2040
- `mathematik`: 1964
- `plattform`: 9
- `daten-und-signale`: 5

## Nutzung

In der CSV nach `content_type = remediation_step` filtern. Danach zuerst `priority = urgent`, dann `priority = high` bearbeiten. Für größere Pakete nach `content_type = execution_queue` oder `subject_execution_queue` filtern.
