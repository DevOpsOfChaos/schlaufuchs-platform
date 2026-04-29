---
title: "Polling in der Hauptschleife sauber beschreiben"
description: "Erkläre, warum ein AVR-Eingang beim Polling immer wieder aktiv gelesen wird und wie sich das von einer Interrupt-Lösung unterscheidet."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-polling-grundidee-verstehen", "polling-in-der-hauptschleife-sauber-beschreiben"]
taskId: "ET-ATMEGA-POLL-203"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
Gegeben ist:

```c
while (1) {
    if (!(PINB & (1 << PB2))) {
        PORTB |= (1 << PB0);
    } else {
        PORTB &= ~(1 << PB0);
    }
}
```

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum dies ein Polling-Beispiel ist.

## Aufgabe 2

Welche Rolle spielt die Hauptschleife in diesem Beispiel?

## Aufgabe 3

Warum ist die Aussage „Der Taster wird einmal geprüft“ fachlich falsch?

## Aufgabe 4

Formuliere in 2 bis 4 Sätzen den Unterschied zwischen Polling und Interrupt am Beispiel eines Tasters.

## Aufgabe 5

Schreibe einen kurzen Merksatz dafür, warum Polling als Einstieg oft didaktisch ruhiger ist.
