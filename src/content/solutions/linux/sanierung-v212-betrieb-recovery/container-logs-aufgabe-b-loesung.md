---
title: "Lösung: Container-Logs – Praxisaufgabe B"
description: "Musterlösung zur Linux-Praxisaufgabe B zu Container-Logs."
subject: "linux"
section: "container-host-und-runtime-betrieb"
topicPath: ["container-host-und-runtime-betrieb", "container-logs"]
taskId: "LINUX-V212-066-B"
relatedExercise: "linux/sanierung-v212-betrieb-recovery/container-logs-aufgabe-b"
tags: ["linux", "container-host-und-runtime-betrieb", "container-logs", "betrieb", "recovery", "v212", "loesung"]
draft: false
---
## Musterlösung

Eine bessere Betriebsnotiz zu **Container-Logs** ersetzt Bauchgefühl durch Nachvollziehbarkeit.

Sinnvoll sind diese Punkte:

- Vor der Änderung fehlen Symptom, Zeitfenster, betroffener Dienst und letzter stabiler Zustand.
- Eine unkontrollierte Aktion kann Datenverlust, längeren Ausfall oder verdeckte Ursachen erzeugen.
- Nach der Änderung muss geprüft werden, ob das ursprüngliche Symptom weg ist und keine Nebenwirkung entstanden ist.
- Für die Übergabe werden Aktion, Kontrollsignal, Restproblem und nächster Schritt notiert.

## Kontrolle

Die Antwort ist gut, wenn sie Diagnose und Betriebssicherheit gleichermaßen abdeckt.
