---
title: Musterlösung – Tastereingang mit Pull-up ruhig lesen
description: Musterlösung zur Aufgabe ET-ATMEGA-IO-202.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - digitale-eingaenge-und-ausgaenge
  - atmega-taster-mit-pullup-verstehen
  - tastereingang-mit-pullup-ruhig-lesen-loesung
taskId: ET-ATMEGA-IO-202
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-taster-mit-pullup-verstehen/tastereingang-mit-pullup-ruhig-lesen.md
tags:
  - elektrotechnik
  - atmega
  - loesung
  - task-id
draft: false
---

## Musterlösung

### Aufgabe 1

PB1 bekommt einen definierten Ruhezustand, weil der Pin als Eingang konfiguriert bleibt und gleichzeitig der interne Pull-up eingeschaltet wird. Dadurch liegt im offenen Zustand sauber logisch 1 an.

### Aufgabe 2

Wenn der Taster gedrückt wird und gegen Masse schaltet, wird der Eingang auf logisch 0 gezogen. Deshalb bedeutet „gedrückt“ in diesem Beispiel gerade nicht 1, sondern 0.

### Aufgabe 3

Die Aussage ist zu grob, weil der Pin hier kein Ausgang ist. `PORTB = 1` bedeutet an diesem Eingang nicht aktiv High ausgeben, sondern den internen Pull-up aktivieren.

### Aufgabe 4

Im Ruhezustand hält der Pull-up den Eingang auf logisch 1. Beim Drücken zieht der Taster den Pin nach Masse, dadurch wird logisch 0 gelesen. Der Code erkennt also gerade diesen Zustandswechsel als Tasteraktivität.
