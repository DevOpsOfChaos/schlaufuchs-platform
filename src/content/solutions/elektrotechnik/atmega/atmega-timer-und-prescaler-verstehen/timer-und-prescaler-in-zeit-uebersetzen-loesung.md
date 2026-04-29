---
title: "Musterlösung – Timer und Prescaler in Zeit übersetzen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-TMR-203."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-timer-und-prescaler-verstehen", "timer-und-prescaler-in-zeit-uebersetzen"]
taskId: "ET-ATMEGA-TMR-203"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-timer-und-prescaler-verstehen/timer-und-prescaler-in-zeit-uebersetzen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Der Timertakt ergibt sich aus:

```text
16 000 000 Hz / 64 = 250 000 Hz
```

### Aufgabe 2

Ein Zählschritt dauert damit:

```text
1 / 250 000 s = 4 µs
```

### Aufgabe 3

Ein 8-Bit-Timer zählt 256 Zustände. Damit ergibt sich:

```text
256 × 4 µs = 1024 µs = 1,024 ms
```

### Aufgabe 4

Der Prescaler macht keine „Pause“, sondern teilt den eingehenden Takt herunter. Der Timer bekommt dadurch weniger Zählschritte pro Sekunde. Erst daraus entsteht eine langsamere und besser nutzbare Zeitbasis.
