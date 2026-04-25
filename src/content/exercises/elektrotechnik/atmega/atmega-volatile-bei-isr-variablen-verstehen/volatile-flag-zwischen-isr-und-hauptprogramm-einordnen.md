---
title: volatile-Flag zwischen ISR und Hauptprogramm einordnen
description: Erkläre an einem kleinen AVR-Beispiel, warum eine gemeinsam genutzte ISR-Variable oft als volatile markiert werden muss.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - ereignisse-und-interrupts
  - atmega-volatile-bei-isr-variablen-verstehen
  - volatile-flag-zwischen-isr-und-hauptprogramm-einordnen
taskId: ET-ATMEGA-INT-302
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - interrupt
  - volatile
hintPoints:
  - Frage zuerst, wer die Variable ändern darf.
  - Trenne Sichtbarkeit und Atomarität bewusst.
selfCheckPoints:
  - Kannst du erklären, warum die ISR die Variable außerhalb des sichtbaren Hauptablaufs ändert?
  - Kannst du sagen, was volatile nicht automatisch löst?
transferIdeas:
  - Übertrage die Logik auf Zähler, Flags oder UART-Ereignisse.
reflectionPrompt: "Welche Frage hilft dir mehr als das bloße Merken eines Schlüsselworts?"
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
