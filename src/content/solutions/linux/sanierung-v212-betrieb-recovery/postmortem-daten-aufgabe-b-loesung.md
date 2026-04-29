---
title: "Lösung: Postmortem-Daten – Praxisaufgabe B"
description: "Musterlösung zur Linux-Praxisaufgabe B zu Postmortem-Daten."
subject: "linux"
section: "logs-monitoring-und-alarmierung"
topicPath: ["logs-monitoring-und-alarmierung", "postmortem-daten"]
taskId: "LINUX-V212-016-B"
relatedExercise: "linux/sanierung-v212-betrieb-recovery/postmortem-daten-aufgabe-b"
tags: ["linux", "logs-monitoring-und-alarmierung", "postmortem-daten", "betrieb", "recovery", "v212", "loesung"]
draft: false
---
## Musterlösung

Eine bessere Betriebsnotiz zu **Postmortem-Daten** ersetzt Bauchgefühl durch Nachvollziehbarkeit.

Sinnvoll sind diese Punkte:

- Vor der Änderung fehlen Symptom, Zeitfenster, betroffener Dienst und letzter stabiler Zustand.
- Eine unkontrollierte Aktion kann Datenverlust, längeren Ausfall oder verdeckte Ursachen erzeugen.
- Nach der Änderung muss geprüft werden, ob das ursprüngliche Symptom weg ist und keine Nebenwirkung entstanden ist.
- Für die Übergabe werden Aktion, Kontrollsignal, Restproblem und nächster Schritt notiert.

## Kontrolle

Die Antwort ist gut, wenn sie Diagnose und Betriebssicherheit gleichermaßen abdeckt.
