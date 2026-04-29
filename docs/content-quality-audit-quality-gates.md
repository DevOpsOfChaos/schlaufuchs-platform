# Content Quality Audit – v171 Qualitätsgates

v171 ergänzt maschinell abgeleitete Qualitätsgate-Zeilen. Diese Zeilen sind keine neuen Lernseiten, sondern konkrete Prüfpunkte pro vorhandener Artikel-, Aufgaben-, Lösungs-, Themen-, Abschnitts- oder Fachbereichszeile.

## Zweck

- große, filterbare Arbeitsliste für fachliche Prüfung
- pro Seite/Thema mehrere konkrete Prüfdimensionen statt nur ein allgemeiner Status
- schnelle Filter nach `content_type = quality_gate`, `priority`, `subject` und `next_action`

## Neue Zeilentypen

- `quality_gate`: konkreter Prüfpunkt für eine bestehende Quelle
- `quality_gate_bundle`: großes Arbeitsbündel nach Fachbereich, Aktion und Priorität

## Empfohlene Filter

- `content_type = quality_gate` und `priority = urgent` für Lösungslücken
- `next_action = add_exercise` für fehlende Aufgabenanschlüsse
- `next_action = add_image` für Bildnutzen/Nachrüstung
- `next_action = verify_navigation` für TopicPath- und Einordnungsprüfung
- `content_type = quality_gate_bundle` für große Abarbeitungspakete

## Status v171

- Gesamtzeilen: 12494
- neue Zeilen in v171: 5120
- quality_gate: 5071
- quality_gate_bundle: 49
