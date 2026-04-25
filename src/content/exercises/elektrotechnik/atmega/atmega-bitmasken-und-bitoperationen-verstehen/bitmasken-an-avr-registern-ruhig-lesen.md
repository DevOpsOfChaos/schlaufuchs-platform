---
title: Bitmasken an AVR-Registern ruhig lesen
description: Erkläre an kleinen AVR-Beispielen, wie einzelne Bits gesetzt, gelöscht oder geprüft werden, ohne andere Registerbits zu beschädigen.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - register-und-bitoperationen
  - atmega-bitmasken-und-bitoperationen-verstehen
  - bitmasken-an-avr-registern-ruhig-lesen
taskId: ET-ATMEGA-REG-201
level: einfach
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - avr
  - register
hintPoints:
  - Trenne zuerst Register, Bitposition und Absicht.
  - Prüfe, ob nur ein Bit oder das ganze Register verändert wird.
selfCheckPoints:
  - Kannst du Setzen, Löschen und Prüfen sauber auseinanderhalten?
  - Kannst du erklären, warum eine Maske andere Bits in Ruhe lässt?
transferIdeas:
  - Übertrage die Logik auf DDR-, PORT- und Timerregister.
reflectionPrompt: "Welche ruhige Lesefrage hilft dir am meisten, wenn ein AVR-Ausdruck nur wie Symbolcode aussieht?"
---

Gegeben sind diese Zeilen:

```c
PORTB |=  (1 << PB0);
PORTB &= ~(1 << PB0);
if (PINB & (1 << PB2)) { /* ... */ }
PORTB =   (1 << PB0);
```

## Aufgabe 1

Erkläre für jede Zeile kurz, ob ein Bit gesetzt, gelöscht, geprüft oder das ganze Register neu geschrieben wird.

## Aufgabe 2

Warum ist `PORTB |= (1 << PB0);` oft ruhiger als `PORTB = (1 << PB0);`?

## Aufgabe 3

Formuliere in einem Satz, was die Maske `(1 << PB2)` fachlich ausdrückt.

## Aufgabe 4

Jemand sagt: „Das `&` und das `|` sind nur komische Symbole.“ Erkläre in 3 bis 5 Sätzen, warum diese Sicht für AVR-Register zu grob ist.

## Aufgabe 5

Schreibe einen kurzen Merksatz dafür,
- wie man ein Bit setzt,
- wie man ein Bit löscht,
- und wie man ein Bit prüft.
