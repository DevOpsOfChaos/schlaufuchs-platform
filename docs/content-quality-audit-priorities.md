# Content-Quality-Audit Prioritäten v169

Diese Datei ist eine kompakte Arbeitsansicht zur bestehenden CSV. Sie erzeugt keine neuen Lernseiten und ersetzt nicht `docs/content-quality-audit.csv`.

## Warum dieser Block existiert

Die CSV enthält inzwischen Inventar, virtuelle Themenknoten, Arbeitsaktionen und Batches. Block 17 ergänzt daraus größere `audit_sprint`- und `audit_lane`-Zeilen, damit die nächsten Qualitätsblöcke schneller filterbar sind.

## Neue Zeilentypen in v169

- `audit_sprint`: gröbere Sprint-Vorschläge nach Fachbereich und Aktion.
- `audit_lane`: fachbereichsübergreifende Arbeitslinien, zum Beispiel Lösungen oder Bilder.
- `audit_subject_plan`: kompakte Fachbereichspläne aus bestehenden Audit-Batches.

## Empfohlene Reihenfolge

1. **Lösungslücken schließen** (`next_action = add_solution`, `priority = high`)
2. **Einordnung/Navigation prüfen** (`next_action = review`, `priority = high`)
3. **Aufgabenlücken schließen** (`next_action = add_exercise`)
4. **Bildnutzen prüfen und nachrüsten** (`next_action = add_image`)
5. Danach erst fachliche Detailprüfung einzelner Artikel.

## Sprint-Vorschläge

- **high / add_solution** – `elektrotechnik`: Sprint 001: Lösungen – elektrotechnik (17 Aktionen)
- **high / add_solution** – `informatik`: Sprint 002: Lösungen – informatik (12 Aktionen)
- **high / add_solution** – `linux`: Sprint 003: Lösungen – linux (15 Aktionen)
- **high / add_solution** – `mathematik`: Sprint 004: Lösungen – mathematik (7 Aktionen)
- **high / add_solution** – `web-development`: Sprint 005: Lösungen – web-development (8 Aktionen)
- **high / review** – `elektrotechnik`: Sprint 006: Review – elektrotechnik (11 Aktionen)
- **high / review** – `informatik`: Sprint 007: Review – informatik (6 Aktionen)
- **high / review** – `linux`: Sprint 008: Review – linux (8 Aktionen)
- **high / review** – `mathematik`: Sprint 009: Review – mathematik (4 Aktionen)
- **high / review** – `web-development`: Sprint 010: Review – web-development (4 Aktionen)
- **medium / add_exercise** – `elektrotechnik`: Sprint 011: Aufgaben – elektrotechnik (37 Aktionen)
- **medium / add_exercise** – `informatik`: Sprint 012: Aufgaben – informatik (27 Aktionen)
- **medium / add_exercise** – `linux`: Sprint 013: Aufgaben – linux (33 Aktionen)
- **medium / add_exercise** – `mathematik`: Sprint 014: Aufgaben – mathematik (31 Aktionen)
- **medium / add_exercise** – `web-development`: Sprint 015: Aufgaben – web-development (27 Aktionen)
- **medium / add_image** – `elektrotechnik`: Sprint 016: Bilder – elektrotechnik (20 Aktionen)
- **medium / add_image** – `informatik`: Sprint 017: Bilder – informatik (21 Aktionen)
- **medium / add_image** – `linux`: Sprint 018: Bilder – linux (22 Aktionen)
- **medium / add_image** – `mathematik`: Sprint 019: Bilder – mathematik (7 Aktionen)
- **medium / add_image** – `web-development`: Sprint 020: Bilder – web-development (4 Aktionen)

## Aktuelle Gesamtverteilung

### Zeilentypen

- illustration: 473
- topic_node: 373
- article: 368
- audit_action: 347
- section_node: 86
- audit_batch: 80
- exercise: 68
- audit_sprint: 20
- route_page: 13
- component: 10
- config: 7
- subject_overview: 6
- subject_node: 6
- solution: 5
- audit_phase: 5
- audit_subject_plan: 5
- audit_lane: 4
- quality_script: 3
- news: 3
- documentation: 2
- navigation_data: 1
- audit_file: 1

### Prioritäten

- medium: 1333
- high: 465
- low: 88

### Nächste Aktionen

- add_exercise: 875
- review: 594
- add_solution: 221
- add_image: 155
- verify_navigation: 41

## Nutzung in der CSV

Für einen schnellen Einstieg in die nächsten Blöcke filtern:

- `content_type = audit_sprint`
- danach `priority = high`
- danach `next_action = add_solution` oder `review`

Für konkrete Einzelarbeit filtern:

- `content_type = audit_action`
- danach denselben Fachbereich und dieselbe Aktion wie im gewählten Sprint.
