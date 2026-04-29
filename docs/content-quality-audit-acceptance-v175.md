# Content Quality Audit – Acceptance Block v175

Dieser Block ergänzt keine Lernseiten. Er macht die vorhandenen Fix-Tickets abnahmefähig.

## Dateien

- `docs/content-quality-audit.csv`: 24580 Einträge
- `docs/content-quality-audit-002.csv`: 24354 Einträge
- `docs/content-quality-audit-003.csv`: 24024 Einträge

Gesamtbestand nach v175: 72958 Audit-Einträge.

## Neu in v175

- `acceptance_criterion`: 23882
- `acceptance_package`: 138
- `acceptance_lane`: 4

## Zweck

Die bisherigen `fix_ticket`-Zeilen beschreiben, was geändert werden soll.  
Die neuen `acceptance_criterion`-Zeilen beschreiben, wie ein erledigtes Ticket danach geprüft wird.

Typische Filter:

- `content_type = acceptance_criterion`
- `next_action = verify_fixed_state`
- `next_action = update_audit_row`
- `priority = high`
- `subject = elektrotechnik`

## Regel

Eine inhaltliche Korrektur gilt erst dann als fertig, wenn:

1. die Zielseite, Aufgabe, Lösung oder Audit-Zeile wirklich angepasst wurde,
2. der passende Audit-Status aktualisiert wurde,
3. die Anschlussprüfung keine neue Lücke erzeugt.

