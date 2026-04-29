---
title: "Lösung: Volumes – Praxisaufgabe B"
description: "Musterlösung zur Linux-Praxisaufgabe B zu Volumes."
subject: "linux"
section: "container-host-und-runtime-betrieb"
topicPath: ["container-host-und-runtime-betrieb", "volumes"]
taskId: "LINUX-V212-067-B"
relatedExercise: "linux/sanierung-v212-betrieb-recovery/volumes-aufgabe-b"
tags: ["linux", "container-host-und-runtime-betrieb", "volumes", "betrieb", "recovery", "v212", "loesung"]
draft: false
---
## Musterlösung

Eine bessere Betriebsnotiz zu **Volumes** ersetzt Bauchgefühl durch Nachvollziehbarkeit.

Sinnvoll sind diese Punkte:

- Vor der Änderung fehlen Symptom, Zeitfenster, betroffener Dienst und letzter stabiler Zustand.
- Eine unkontrollierte Aktion kann Datenverlust, längeren Ausfall oder verdeckte Ursachen erzeugen.
- Nach der Änderung muss geprüft werden, ob das ursprüngliche Symptom weg ist und keine Nebenwirkung entstanden ist.
- Für die Übergabe werden Aktion, Kontrollsignal, Restproblem und nächster Schritt notiert.

## Kontrolle

Die Antwort ist gut, wenn sie Diagnose und Betriebssicherheit gleichermaßen abdeckt.
