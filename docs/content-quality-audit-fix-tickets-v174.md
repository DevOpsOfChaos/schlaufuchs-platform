# Content Quality Audit – v174 Fix Tickets

Stand: 2026-04-28

Dieser Block macht die bestehende Verification-Queue abarbeitbar. Aus den vorhandenen `verification_step`-Zeilen wurden konkrete `fix_ticket`-Zeilen abgeleitet.

## Inhalt

- Neue CSV-Zeilen in `docs/content-quality-audit-002.csv`: 12083
- Davon `fix_ticket`: 11941
- Davon `fix_package`: 138
- Davon `fix_lane`: 4

## Arbeitslogik

- `fix_ticket` ist der konkrete Abarbeitungspunkt.
- `fix_package` bündelt Tickets nach Fachbereich, Priorität und Aktion.
- `fix_lane` bündelt Tickets nach Priorität.
- Die ursprünglichen Prüf- und Verifikationszeilen bleiben erhalten.

## Fix Tickets nach Priorität

| Wert | Anzahl |
|---|---:|
| high | 5961 |
| medium | 5743 |
| urgent | 137 |
| low | 100 |

## Fix Tickets nach Fachbereich

| Wert | Anzahl |
|---|---:|
| elektrotechnik | 3382 |
| web-development | 2408 |
| linux | 2133 |
| informatik | 2040 |
| mathematik | 1964 |
| plattform | 9 |
| daten-und-signale | 5 |

## Fix Tickets nach Aktion

| Wert | Anzahl |
|---|---:|
| improve_text | 2427 |
| review | 2145 |
| add_exercise | 2120 |
| add_image | 1265 |
| verify_navigation | 1079 |
| split_topic | 751 |
| add_solution | 712 |
| fix_frontmatter | 446 |
| add_overview_or_link_existing_article | 412 |
| merge_duplicate | 373 |
| add_overview_or_fix_section | 182 |
| improve_solution | 15 |
| verify_solution_link | 14 |


## Weiterer Ablauf

1. Nach Priorität filtern.
2. Ein `fix_package` auswählen.
3. Die darunterliegenden `fix_ticket`-Zeilen abarbeiten.
4. Danach die zugehörigen `verification_step`-Zeilen prüfen.
5. Erst dann `checked` und `quality_status` aktualisieren.

