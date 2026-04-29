---
title: "Setup und Hauptschleife am AVR trennen"
description: "Erkläre an einem kleinen AVR-Programm, welche Schritte nur einmal zur Initialisierung gehören und welche dauerhaft in die Hauptschleife gehören."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-initialisierung-und-endlosschleife-verstehen", "setup-und-hauptschleife-am-avr-trennen"]
taskId: "ET-ATMEGA-CORE-301"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
Gegeben ist dieser Code:

```c
int main(void) {
  DDRB |= (1 << PB0);
  DDRB &= ~(1 << PB1);
  PORTB |= (1 << PB1);

  while (1) {
    if (!(PINB & (1 << PB1))) {
      PORTB |= (1 << PB0);
    } else {
      PORTB &= ~(1 << PB0);
    }
  }
}
```

## Aufgabe 1

Ordne jede Codezeile entweder der **Initialisierung** oder der **Hauptschleife** zu.

## Aufgabe 2

Erkläre, warum die drei Zeilen vor `while (1)` typischerweise nicht in jede Schleifenrunde gehören.

## Aufgabe 3

Beschreibe in 3 bis 5 Sätzen, was die Hauptschleife hier dauerhaft tut.

## Aufgabe 4

Formuliere eine kurze Merkhilfe dafür, woran man bei AVR-Code erkennt, ob etwas eher Setup oder eher Laufbetrieb ist.
