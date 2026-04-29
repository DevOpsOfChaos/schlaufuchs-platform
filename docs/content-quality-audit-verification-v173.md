# Content-Quality-Audit v173 – Verification Queue

Dieser Block startet `docs/content-quality-audit-002.csv` mit identischem Header. Die erste CSV bleibt unverändert als Inventar-, Gate- und Remediation-Basis.

## Zweck

v173 ergänzt zu den vorhandenen Remediation-Schritten konkrete Verification-Schritte. Damit ist nach einer Korrektur sichtbar, was erneut geprüft werden muss.

## Umfang

- neue Zeilen in `content-quality-audit-002.csv`: 12271
- verification_step: 11941
- verification_work_package: 326
- audit_split_marker: 4

## Arbeitsweise

1. Nach Fachbereich, Priorität und `recommended_fix_type` filtern.
2. Ein `verification_work_package` auswählen.
3. Die zugehörigen `verification_step`-Zeilen abarbeiten.
4. Danach Originalzeile, Remediation-Zeile und Verification-Zeile gemeinsam aktualisieren.
