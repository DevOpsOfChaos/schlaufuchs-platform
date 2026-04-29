---
title: "Lösung: Rollback-Entscheidung – Praxisaufgabe A"
description: "Musterlösung zur Linux-Praxisaufgabe A zu Rollback-Entscheidung."
subject: "linux"
section: "incident-response-und-runbooks"
topicPath: ["incident-response-und-runbooks", "rollback-entscheidung"]
taskId: "LINUX-V212-078-A"
relatedExercise: "linux/sanierung-v212-betrieb-recovery/rollback-entscheidung-aufgabe-a"
tags: ["linux", "incident-response-und-runbooks", "rollback-entscheidung", "betrieb", "recovery", "v212", "loesung"]
draft: false
---
## Musterlösung

Ein guter Prüfplan zu **Rollback-Entscheidung** beginnt mit Beobachtung.

1. Istzustand: betroffenen Dienst, Zeitpunkt, Symptom und Auswirkung notieren.
2. Signal: Statuskommando, Logauszug oder Metrik mit passendem Zeitfenster wählen.
3. Risiko: Daten, Nutzer, Sicherheit und Abhängigkeiten prüfen.
4. Aktion: nur eine kleine Änderung durchführen.
5. Kontrolle: Vorher-Nachher-Vergleich machen.
6. Rückfallweg: Konfiguration, Dienstzustand oder Datenstand wiederherstellen können.

## Kontrolle

Die Lösung ist tragfähig, wenn ein anderes Teammitglied sie ohne Rückfragen nachvollziehen kann.
