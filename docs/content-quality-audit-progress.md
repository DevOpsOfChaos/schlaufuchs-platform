# Content-Quality-Audit Fortschritt

Stand: v173 / Block 21

- `docs/content-quality-audit.csv`: 24580 Einträge
- `docs/content-quality-audit-002.csv`: 12271 Einträge
- Gesamt über beide CSVs: 36851 Einträge
- Keine neuen Lernseiten
- Zweite CSV gestartet, weil die erste Datei inzwischen sehr groß ist

## Schwerpunkt dieses Blocks

Block 21 erzeugt eine große Verification Queue aus vorhandenen Remediation-Schritten. Damit ist nicht nur klar, was repariert werden soll, sondern auch, was nach einem Fix erneut geprüft werden muss.

## Neue Typen in v173

- verification_step: 11941
- verification_work_package: 326
- audit_split_marker: 4

## Prioritäten in v173

- high: 6122
- medium: 5890
- urgent: 148
- low: 111

## Nächster sinnvoller Schritt

Nicht weiter nur Meta-Zeilen erzeugen, sondern aus den urgent/high Work Packages erste echte Qualitätskorrekturen ableiten und danach die betroffenen Audit-Zeilen aktualisieren.


## v174 – Fix Tickets

- `docs/content-quality-audit-002.csv` weitergeführt.
- 11941 `fix_ticket`-Zeilen ergänzt.
- 138 `fix_package`-Zeilen ergänzt.
- 4 `fix_lane`-Zeilen ergänzt.
- Ziel: Verification-Queue in direkt abarbeitbare Arbeitsaufträge übersetzen.

## v175 – Acceptance-Kriterien

- Dritte CSV gestartet: `docs/content-quality-audit-003.csv`
- Neue Einträge: 24024
- Gesamt über alle CSVs: 72958
- Fokus: Fix-Tickets abnahmefähig machen, nicht neue Lernseiten erzeugen.
- Nächste Richtung: konkrete Seitenpakete aus den High-Priority-Queues bearbeiten statt weitere Meta-Schichten aufzubauen.


## v176 – Evidence Queue

- neue Datei: `docs/content-quality-audit-004.csv`
- neue Zeilen: 24118
- Schwerpunkt: Nachweise zu Acceptance Criteria, Packages, Lanes und Phasen
- keine neuen Lernseiten
