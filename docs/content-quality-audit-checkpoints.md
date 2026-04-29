# Content Quality Audit – v170 großer Prüfpunkt-Block

Dieser Block stellt den Audit-Modus auf größere, effizientere Arbeitspakete um.

## Änderung

- Ausgangsstand v169: 1886 Audit-Zeilen
- Neu in v170: 5488 Zeilen
- Neuer Gesamtstand: 7374 Zeilen
- Hauptneuheit: `review_checkpoint`-Zeilen als konkrete Prüfpunkte pro vorhandener Artikel-/Aufgaben-/Themenzeile

## Warum dieser Block größer ist

Die bisherigen Blöcke haben Inventar, Themenknoten, Arbeitsaktionen und Prioritäten aufgebaut. v170 zerlegt die vorhandenen Seiten und Themen nun in konkrete Prüfpunkte, damit später größere Qualitätsblöcke ohne erneute Orientierung möglich sind.

## Filtern in der CSV

Empfohlene Filter:

- `content_type = review_checkpoint`
- `priority = urgent` oder `priority = high`
- `next_action = add_solution`
- `next_action = add_exercise`
- `next_action = add_overview_or_link_existing_article`
- `next_action = add_image`
- `subject = <fachbereich>`

## Neue Zeilentypen

- `review_checkpoint`: einzelner maschinell abgeleiteter Prüfschritt zu einer vorhandenen Seite/einem Thema
- `audit_large_batch`: größere Sammelgruppe aus vielen Checkpoints mit gleicher Aktion

## Statusregel

Auch diese Zeilen sind kein fachlicher Abschluss. Sie sind bewusst mit `checked = no` und `quality_status = open` markiert, weil sie als Arbeitsliste dienen.
