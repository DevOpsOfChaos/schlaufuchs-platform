---
title: "Lösung: Workaround und Ursache – Praxisaufgabe B"
description: "Musterlösung zur Linux-Praxisaufgabe B zu Workaround und Ursache."
subject: "linux"
section: "incident-response-und-runbooks"
topicPath: ["incident-response-und-runbooks", "workaround-und-ursache"]
taskId: "LINUX-V212-077-B"
relatedExercise: "linux/sanierung-v212-betrieb-recovery/workaround-und-ursache-aufgabe-b"
tags: ["linux", "incident-response-und-runbooks", "workaround-und-ursache", "betrieb", "recovery", "v212", "loesung"]
draft: false
---
## Musterlösung

Eine bessere Betriebsnotiz zu **Workaround und Ursache** ersetzt Bauchgefühl durch Nachvollziehbarkeit.

Sinnvoll sind diese Punkte:

- Vor der Änderung fehlen Symptom, Zeitfenster, betroffener Dienst und letzter stabiler Zustand.
- Eine unkontrollierte Aktion kann Datenverlust, längeren Ausfall oder verdeckte Ursachen erzeugen.
- Nach der Änderung muss geprüft werden, ob das ursprüngliche Symptom weg ist und keine Nebenwirkung entstanden ist.
- Für die Übergabe werden Aktion, Kontrollsignal, Restproblem und nächster Schritt notiert.

## Kontrolle

Die Antwort ist gut, wenn sie Diagnose und Betriebssicherheit gleichermaßen abdeckt.
