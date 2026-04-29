---
title: "Musterlösung – Watchdog als Sicherheitsnetz ruhig erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-WDT-301."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-watchdog-grundidee-verstehen", "watchdog-als-sicherheitsnetz-ruhig-erklaeren"]
taskId: "ET-ATMEGA-WDT-301"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-watchdog-grundidee-verstehen/watchdog-als-sicherheitsnetz-ruhig-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Ein Watchdog ist hier sinnvoll, weil das Programm im Normalfall regelmäßig zeigen soll, dass es noch geordnet weiterläuft. Bleibt dieses Lebenszeichen wegen eines Hängers aus, erkennt der Watchdog das und kann eine Schutzreaktion auslösen.

### Aufgabe 2

Die Aussage ist zu grob, weil der Watchdog nicht für normale Wartezeiten oder Zeitplanung gedacht ist. Seine Hauptfunktion ist die Überwachung des Programmablaufs.

### Aufgabe 3

Ein Watchdog-Reset bedeutet in diesem Fall, dass das System auf ein ausbleibendes Lebenszeichen reagiert. Der Reset ist also nicht bloß ein Defektzeichen, sondern eine Chance auf einen geordneten Neustart nach einem Hänger.

### Aufgabe 4

Eine ruhige Merkhilfe wäre zum Beispiel:

> Timer planen Zeit, Watchdogs überwachen Ablauf.
