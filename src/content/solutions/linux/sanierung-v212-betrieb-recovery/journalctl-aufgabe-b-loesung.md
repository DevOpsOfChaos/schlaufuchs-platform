---
title: "Lösung: journalctl – Praxisaufgabe B"
description: "Musterlösung zur Linux-Praxisaufgabe B zu journalctl."
subject: "linux"
section: "logs-monitoring-und-alarmierung"
topicPath: ["logs-monitoring-und-alarmierung", "journalctl"]
taskId: "LINUX-V212-009-B"
relatedExercise: "linux/sanierung-v212-betrieb-recovery/journalctl-aufgabe-b"
tags: ["linux", "logs-monitoring-und-alarmierung", "journalctl", "betrieb", "recovery", "v212", "loesung"]
draft: false
---
## Musterlösung

Eine bessere Betriebsnotiz zu **journalctl** ersetzt Bauchgefühl durch Nachvollziehbarkeit.

Sinnvoll sind diese Punkte:

- Vor der Änderung fehlen Symptom, Zeitfenster, betroffener Dienst und letzter stabiler Zustand.
- Eine unkontrollierte Aktion kann Datenverlust, längeren Ausfall oder verdeckte Ursachen erzeugen.
- Nach der Änderung muss geprüft werden, ob das ursprüngliche Symptom weg ist und keine Nebenwirkung entstanden ist.
- Für die Übergabe werden Aktion, Kontrollsignal, Restproblem und nächster Schritt notiert.

## Kontrolle

Die Antwort ist gut, wenn sie Diagnose und Betriebssicherheit gleichermaßen abdeckt.
