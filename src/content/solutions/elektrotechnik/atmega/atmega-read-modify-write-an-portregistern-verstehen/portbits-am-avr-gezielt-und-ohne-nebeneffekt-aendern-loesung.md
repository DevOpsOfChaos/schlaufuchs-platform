---
title: "Musterlösung – Portbits am AVR gezielt und ohne Nebeneffekt ändern"
description: "Musterlösung zur Aufgabe ET-ATMEGA-REG-301."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-read-modify-write-an-portregistern-verstehen", "portbits-am-avr-gezielt-und-ohne-nebeneffekt-aendern"]
taskId: "ET-ATMEGA-REG-301"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-read-modify-write-an-portregistern-verstehen/portbits-am-avr-gezielt-und-ohne-nebeneffekt-aendern"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

`PORTB = (1 << PB0);` schreibt den gesamten Registerwert neu. `PORTB |= (1 << PB0);` setzt dagegen gezielt das Bit PB0 und lässt die übrigen gesetzten Bits erhalten.

### Aufgabe 2

Wenn am selben Port noch andere Pins eine Aufgabe haben, wäre eine Komplettzuweisung riskanter, weil dabei ungewollt weitere Bitzustände überschrieben werden könnten. Die Bitmaske schützt diese anderen Zustände ruhiger.

### Aufgabe 3

Bei der Komplettzuweisung werden die übrigen Bits entsprechend des neuen Gesamtwerts mitfestgelegt. Bei der OR-Verknüpfung bleibt der bisherige Zustand der anderen Bits erhalten, nur das Zielbit wird zusätzlich gesetzt.

### Aufgabe 4

Eine komplette Registerzuweisung kann sinnvoll sein, wenn bewusst ein klar definierter Gesamtzustand für das gesamte Register hergestellt werden soll und keine anderen Bits erhalten bleiben müssen.

### Aufgabe 5

Eine mögliche Entscheidungsregel lautet:

> Wenn ich nur ein einzelnes Bit ändern will und andere Bits am Register ausdrücklich erhalten bleiben sollen, denke ich zuerst in Read-Modify-Write.
