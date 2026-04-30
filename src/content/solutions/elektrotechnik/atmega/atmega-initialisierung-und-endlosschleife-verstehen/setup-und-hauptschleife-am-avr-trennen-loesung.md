---
title: "Musterlösung – Setup und Hauptschleife am AVR trennen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-CORE-301."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-initialisierung-und-endlosschleife-verstehen", "setup-und-hauptschleife-am-avr-trennen"]
taskId: "ET-ATMEGA-CORE-301"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-initialisierung-und-endlosschleife-verstehen/setup-und-hauptschleife-am-avr-trennen"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

- `DDRB |= (1 << PB0);` → Initialisierung
- `DDRB &= ~(1 << PB1);` → Initialisierung
- `PORTB |= (1 << PB1);` → Initialisierung
- die `if`-Abfrage in `while (1)` → Hauptschleife
- das Setzen oder Löschen von PB0 in der Schleife → Hauptschleife

### Aufgabe 2

Diese Zeilen richten die Grundrollen der Pins ein. Sobald die Richtung und der Pull-up einmal sinnvoll gesetzt sind, muss das nicht in jeder Runde erneut passieren. In die Schleife gehören eher die wiederkehrenden Prüfungen und Reaktionen.

### Aufgabe 3

Die Hauptschleife prüft fortlaufend den Zustand des Tasters an PB1. Wird der Taster gedrückt erkannt, setzt das Programm die LED an PB0 auf High. Andernfalls wird die LED wieder ausgeschaltet. Genau dieses Prüfen und Reagieren bildet das dauerhafte Verhalten des Controllers.

### Aufgabe 4

Eine ruhige Merkhilfe wäre zum Beispiel:

> Setup richtet das System einmal ein, die Hauptschleife beschreibt das wiederkehrende Verhalten.
