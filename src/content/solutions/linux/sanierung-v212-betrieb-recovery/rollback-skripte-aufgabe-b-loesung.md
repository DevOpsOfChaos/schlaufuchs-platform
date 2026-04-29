---
title: "Lösung: Rollback-Skripte – Praxisaufgabe B"
description: "Musterlösung zur Linux-Praxisaufgabe B zu Rollback-Skripte."
subject: "linux"
section: "automatisierung-und-scheduled-jobs"
topicPath: ["automatisierung-und-scheduled-jobs", "rollback-skripte"]
taskId: "LINUX-V212-055-B"
relatedExercise: "linux/sanierung-v212-betrieb-recovery/rollback-skripte-aufgabe-b"
tags: ["linux", "automatisierung-und-scheduled-jobs", "rollback-skripte", "betrieb", "recovery", "v212", "loesung"]
draft: false
---
## Musterlösung

Eine bessere Betriebsnotiz zu **Rollback-Skripte** ersetzt Bauchgefühl durch Nachvollziehbarkeit.

Sinnvoll sind diese Punkte:

- Vor der Änderung fehlen Symptom, Zeitfenster, betroffener Dienst und letzter stabiler Zustand.
- Eine unkontrollierte Aktion kann Datenverlust, längeren Ausfall oder verdeckte Ursachen erzeugen.
- Nach der Änderung muss geprüft werden, ob das ursprüngliche Symptom weg ist und keine Nebenwirkung entstanden ist.
- Für die Übergabe werden Aktion, Kontrollsignal, Restproblem und nächster Schritt notiert.

## Kontrolle

Die Antwort ist gut, wenn sie Diagnose und Betriebssicherheit gleichermaßen abdeckt.
