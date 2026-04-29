---
title: "Lösung: Update mit Rollback – Praxisaufgabe A"
description: "Musterlösung zur Linux-Praxisaufgabe A zu Update mit Rollback."
subject: "linux"
section: "pakete-updates-und-releasepflege"
topicPath: ["pakete-updates-und-releasepflege", "update-mit-rollback"]
taskId: "LINUX-V212-060-A"
relatedExercise: "linux/sanierung-v212-betrieb-recovery/update-mit-rollback-aufgabe-a"
tags: ["linux", "pakete-updates-und-releasepflege", "update-mit-rollback", "betrieb", "recovery", "v212", "loesung"]
draft: false
---
## Musterlösung

Ein guter Prüfplan zu **Update mit Rollback** beginnt mit Beobachtung.

1. Istzustand: betroffenen Dienst, Zeitpunkt, Symptom und Auswirkung notieren.
2. Signal: Statuskommando, Logauszug oder Metrik mit passendem Zeitfenster wählen.
3. Risiko: Daten, Nutzer, Sicherheit und Abhängigkeiten prüfen.
4. Aktion: nur eine kleine Änderung durchführen.
5. Kontrolle: Vorher-Nachher-Vergleich machen.
6. Rückfallweg: Konfiguration, Dienstzustand oder Datenstand wiederherstellen können.

## Kontrolle

Die Lösung ist tragfähig, wenn ein anderes Teammitglied sie ohne Rückfragen nachvollziehen kann.
