---
title: Tastereingang mit Pull-up ruhig lesen
description: Begründe an einem ATmega-Tasterbeispiel, warum der interne Pull-up den Eingang stabilisiert und warum gedrückt oft logisch 0 ist.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - digitale-eingaenge-und-ausgaenge
  - atmega-taster-mit-pullup-verstehen
  - tastereingang-mit-pullup-ruhig-lesen
taskId: ET-ATMEGA-IO-202
level: einfach
draft: false
tags:
  - elektrotechnik
  - atmega
  - taster
  - pullup
hintPoints:
  - Unterscheide Ruhezustand und gedrückten Zustand.
  - Denke daran, dass der Taster oft nach Masse schaltet.
selfCheckPoints:
  - Kannst du erklären, warum ein offener Eingang unruhig ist?
  - Kannst du den Begriff active low fachlich sauber beschreiben?
transferIdeas:
  - Übertrage die Logik auf einen zweiten Taster oder einen Jumper-Eingang.
reflectionPrompt: "Warum hilft dir die Frage nach dem Ruhezustand oft mehr als direkt auf die if-Bedingung zu schauen?"
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
