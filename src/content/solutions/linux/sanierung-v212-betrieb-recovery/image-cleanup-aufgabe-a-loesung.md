---
title: "Lösung: Image-Cleanup – Praxisaufgabe A"
description: "Musterlösung zur Linux-Praxisaufgabe A zu Image-Cleanup."
subject: "linux"
section: "container-host-und-runtime-betrieb"
topicPath: ["container-host-und-runtime-betrieb", "image-cleanup"]
taskId: "LINUX-V212-072-A"
relatedExercise: "linux/sanierung-v212-betrieb-recovery/image-cleanup-aufgabe-a"
tags: ["linux", "container-host-und-runtime-betrieb", "image-cleanup", "betrieb", "recovery", "v212", "loesung"]
draft: false
---
## Musterlösung

Ein guter Prüfplan zu **Image-Cleanup** beginnt mit Beobachtung.

1. Istzustand: betroffenen Dienst, Zeitpunkt, Symptom und Auswirkung notieren.
2. Signal: Statuskommando, Logauszug oder Metrik mit passendem Zeitfenster wählen.
3. Risiko: Daten, Nutzer, Sicherheit und Abhängigkeiten prüfen.
4. Aktion: nur eine kleine Änderung durchführen.
5. Kontrolle: Vorher-Nachher-Vergleich machen.
6. Rückfallweg: Konfiguration, Dienstzustand oder Datenstand wiederherstellen können.

## Kontrolle

Die Lösung ist tragfähig, wenn ein anderes Teammitglied sie ohne Rückfragen nachvollziehen kann.
