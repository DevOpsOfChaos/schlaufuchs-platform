---
title: Portbits am AVR gezielt und ohne Nebeneffekt ändern
description: Begründe, wann am ATmega eine gezielte Bitoperation ruhiger ist als eine komplette Registerzuweisung.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - register-und-bitoperationen
  - atmega-read-modify-write-an-portregistern-verstehen
  - portbits-am-avr-gezielt-und-ohne-nebeneffekt-aendern
taskId: ET-ATMEGA-REG-301
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - register
  - bitmaske
hintPoints:
  - Frage zuerst, ob wirklich der ganze Registerzustand neu festgelegt werden soll.
  - Denke an die übrigen Bits und nicht nur an das Zielbit.
selfCheckPoints:
  - Kannst du erklären, warum eine Komplettzuweisung andere Bits mitschreibt?
  - Kannst du begründen, wann OR oder AND ruhiger ist?
transferIdeas:
  - Übertrage die Logik auf DDR, PORT oder Interrupt-Freigabebits.
reflectionPrompt: "Welche ruhigere Leitfrage hilft hier: Welches Bit will ich ändern oder was passiert mit allen anderen Bits?"
---

Gegeben sind diese beiden Zeilen:

```c
PORTB = (1 << PB0);
PORTB |= (1 << PB0);
```

## Aufgabe 1

Erkläre den fachlichen Unterschied zwischen beiden Zeilen.

## Aufgabe 2

Warum ist die zweite Zeile oft ruhiger, wenn an demselben Port noch weitere Pins eine Aufgabe haben?

## Aufgabe 3

Formuliere in einem Satz, was mit den übrigen Bits in beiden Fällen passiert.

## Aufgabe 4

Beschreibe, wann eine komplette Registerzuweisung trotzdem sinnvoll sein kann.

## Aufgabe 5

Nenne eine ruhige Entscheidungsregel dafür, wann du bei AVR-Registern eher in Read-Modify-Write denken würdest.
