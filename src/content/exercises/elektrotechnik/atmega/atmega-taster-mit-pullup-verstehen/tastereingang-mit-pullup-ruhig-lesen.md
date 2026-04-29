---
title: "Tastereingang mit Pull-up ruhig lesen"
description: "Begründe an einem ATmega-Tasterbeispiel, warum der interne Pull-up den Eingang stabilisiert und warum gedrückt oft logisch 0 ist."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-taster-mit-pullup-verstehen", "tastereingang-mit-pullup-ruhig-lesen"]
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
DDRB  &= ~(1 << PB1);
PORTB |=  (1 << PB1);

if ((PINB & (1 << PB1)) == 0) {
  // Taster gedrückt
}
```

## Aufgabe 1

Erkläre, warum PB1 hier einen definierten Ruhezustand bekommt.

## Aufgabe 2

Beschreibe, warum „gedrückt“ in diesem Beispiel als logisch 0 gelesen wird.

## Aufgabe 3

Jemand sagt: „Dann ist PORTB hier also einfach High am Ausgang.“ Erkläre kurz, warum das zu grob ist.

## Aufgabe 4

Formuliere eine ruhige Beschreibung für den gesamten Weg von „nicht gedrückt“ zu „gedrückt“.
