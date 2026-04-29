---
title: "Lösung: Image-Cleanup – Praxisaufgabe B"
description: "Musterlösung zur Linux-Praxisaufgabe B zu Image-Cleanup."
subject: "linux"
section: "container-host-und-runtime-betrieb"
topicPath: ["container-host-und-runtime-betrieb", "image-cleanup"]
taskId: "LINUX-V212-072-B"
relatedExercise: "linux/sanierung-v212-betrieb-recovery/image-cleanup-aufgabe-b"
tags: ["linux", "container-host-und-runtime-betrieb", "image-cleanup", "betrieb", "recovery", "v212", "loesung"]
draft: false
---
## Musterlösung

Eine bessere Betriebsnotiz zu **Image-Cleanup** ersetzt Bauchgefühl durch Nachvollziehbarkeit.

Sinnvoll sind diese Punkte:

- Vor der Änderung fehlen Symptom, Zeitfenster, betroffener Dienst und letzter stabiler Zustand.
- Eine unkontrollierte Aktion kann Datenverlust, längeren Ausfall oder verdeckte Ursachen erzeugen.
- Nach der Änderung muss geprüft werden, ob das ursprüngliche Symptom weg ist und keine Nebenwirkung entstanden ist.
- Für die Übergabe werden Aktion, Kontrollsignal, Restproblem und nächster Schritt notiert.

## Kontrolle

Die Antwort ist gut, wenn sie Diagnose und Betriebssicherheit gleichermaßen abdeckt.
