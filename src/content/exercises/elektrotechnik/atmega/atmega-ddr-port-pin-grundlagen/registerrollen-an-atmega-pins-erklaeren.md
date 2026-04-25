---
title: Registerrollen an ATmega-Pins erklären
description: Erkläre an kleinen AVR-Beispielen, welche Rolle DDR, PORT und PIN jeweils übernehmen.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - digitale-eingaenge-und-ausgaenge
  - atmega-ddr-port-pin-grundlagen
  - registerrollen-an-atmega-pins-erklaeren
taskId: ET-ATMEGA-IO-201
level: einfach
draft: false
tags:
  - elektrotechnik
  - atmega
  - avr
  - io
hintPoints:
  - Trenne Richtung, gesetzten Wert und gelesenen Zustand sauber.
  - "Frage bei PORT immer zusätzlich: Ist der Pin Eingang oder Ausgang?"
selfCheckPoints:
  - Kannst du erklären, warum PORT je nach Pinrichtung unterschiedlich wirkt?
  - Kannst du PIN als Lesezugriff sauber einordnen?
transferIdeas:
  - Übertrage die Logik auf einen zweiten Port mit LED und Taster.
reflectionPrompt: "Welche Leitfrage hilft dir am meisten, DDR, PORT und PIN nicht durcheinanderzubringen?"
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
