---
title: "Registerrollen an ATmega-Pins erklären"
description: "Erkläre an kleinen AVR-Beispielen, welche Rolle DDR, PORT und PIN jeweils übernehmen."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-ddr-port-pin-grundlagen", "registerrollen-an-atmega-pins-erklaeren"]
taskId: "ET-ATMEGA-IO-201"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
Gegeben ist dieser Code:

```c
DDRB  |=  (1 << PB0);
DDRB  &= ~(1 << PB1);
PORTB |=  (1 << PB0);
PORTB |=  (1 << PB1);
```

## Aufgabe 1

Erkläre für PB0 und PB1 getrennt, ob der Pin als Eingang oder Ausgang arbeitet.

## Aufgabe 2

Beschreibe, was die PORTB-Zeile bei PB0 bewirkt und was sie bei PB1 bewirkt.

## Aufgabe 3

Erkläre in 2 bis 4 Sätzen, warum PORT nicht einfach nur „Ausgangsregister“ genannt werden sollte.

## Aufgabe 4

Formuliere eine ruhige Merkhilfe für DDR, PORT und PIN mit je einem kurzen Satz.
