---
title: "Lösung: Postmortem-Daten – Praxisaufgabe A"
description: "Musterlösung zur Linux-Praxisaufgabe A zu Postmortem-Daten."
subject: "linux"
section: "logs-monitoring-und-alarmierung"
topicPath: ["logs-monitoring-und-alarmierung", "postmortem-daten"]
taskId: "LINUX-V212-016-A"
relatedExercise: "linux/sanierung-v212-betrieb-recovery/postmortem-daten-aufgabe-a"
tags: ["linux", "logs-monitoring-und-alarmierung", "postmortem-daten", "betrieb", "recovery", "v212", "loesung"]
draft: false
---
## Musterlösung

Ein guter Prüfplan zu **Postmortem-Daten** beginnt mit Beobachtung.

1. Istzustand: betroffenen Dienst, Zeitpunkt, Symptom und Auswirkung notieren.
2. Signal: Statuskommando, Logauszug oder Metrik mit passendem Zeitfenster wählen.
3. Risiko: Daten, Nutzer, Sicherheit und Abhängigkeiten prüfen.
4. Aktion: nur eine kleine Änderung durchführen.
5. Kontrolle: Vorher-Nachher-Vergleich machen.
6. Rückfallweg: Konfiguration, Dienstzustand oder Datenstand wiederherstellen können.

## Kontrolle

Die Lösung ist tragfähig, wenn ein anderes Teammitglied sie ohne Rückfragen nachvollziehen kann.
