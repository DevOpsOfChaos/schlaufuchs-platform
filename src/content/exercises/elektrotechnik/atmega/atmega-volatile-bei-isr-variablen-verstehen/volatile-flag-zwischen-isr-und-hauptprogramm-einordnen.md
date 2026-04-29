---
title: "volatile-Flag zwischen ISR und Hauptprogramm einordnen"
description: "Erkläre an einem kleinen AVR-Beispiel, warum eine gemeinsam genutzte ISR-Variable oft als volatile markiert werden muss."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-volatile-bei-isr-variablen-verstehen", "volatile-flag-zwischen-isr-und-hauptprogramm-einordnen"]
taskId: "ET-ATMEGA-INT-302"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
Gegeben ist dieser Code:

```c
volatile uint8_t taste_gedrueckt = 0;

ISR(INT0_vect) {
  taste_gedrueckt = 1;
}

int main(void) {
  while (!taste_gedrueckt) {
    // warten
  }
}
```

## Aufgabe 1

Erkläre in 2 bis 4 Sätzen, warum `taste_gedrueckt` hier von zwei Seiten aus wichtig ist.

## Aufgabe 2

Beschreibe, warum eine ISR-Änderung fachlich nicht einfach wie ein normaler Funktionsaufruf im Hauptablauf gelesen werden darf.

## Aufgabe 3

Erkläre kurz, welche Grundidee `volatile` in genau diesem Beispiel trägt.

## Aufgabe 4

Formuliere einen Satz, der klar macht, was `volatile` hier gerade **nicht** automatisch löst.
