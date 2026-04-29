---
title: "LED-Ausgang am AVR sauber erklären"
description: "Erkläre an einem kleinen AVR-Beispiel, warum Richtung und Ausgangswert für eine LED getrennt gelesen werden müssen."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-led-mit-registerzugriff-schalten", "led-ausgang-am-avr-sauber-erklaeren"]
taskId: "ET-ATMEGA-IO-202"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
Gegeben ist dieser Code:

```c
DDRB  |= (1 << PB0);
PORTB |= (1 << PB0);
PORTB &= ~(1 << PB0);
```

## Aufgabe 1

Beschreibe in 3 bis 5 Sätzen, was die drei Zeilen nacheinander bewirken.

## Aufgabe 2

Warum reicht es nicht, nur `PORTB |= (1 << PB0);` zu schreiben, wenn PB0 vorher noch nicht als Ausgang eingerichtet wurde?

## Aufgabe 3

Formuliere einen kurzen Merksatz für den Unterschied zwischen
- Richtung festlegen
- Pegel ausgeben

## Aufgabe 4

Jemand sagt: „DDRB schaltet die LED ein.“ Erkläre, warum das fachlich zu ungenau ist.

## Aufgabe 5

Ergänze in Worten den fehlenden Zwischenschritt zwischen „Code geschrieben“ und „LED leuchtet“.
