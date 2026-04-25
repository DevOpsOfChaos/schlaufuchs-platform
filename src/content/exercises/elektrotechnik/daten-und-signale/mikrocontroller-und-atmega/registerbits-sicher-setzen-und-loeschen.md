---
title: Registerbits am ATmega sicher ändern
description: Übe, einzelne Bits zu setzen, zu löschen und zu prüfen, ohne Nachbarbits zu verändern.
subject: elektrotechnik
section: Mikrocontroller und ATmega
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - registerbits-sicher-setzen-und-loeschen
taskId: et-mc-registerbits-sicher-aendern
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - register
  - bitmasken
hintPoints:
  - "Frage zuerst, ob ein Bit gesetzt, gelöscht, umgeschaltet oder nur gelesen werden soll."
  - "Achte darauf, ob der Code das ganze Register oder nur ein Zielbit verändert."
  - "Beschreibe die Wirkung erst in Worten, bevor du den Ausdruck hinschreibst."
selfCheckPoints:
  - "Bleiben alle nicht gemeinten Bits unverändert?"
  - "Kann ich die Rolle von |, &, ~ und ^ jeweils erklären?"
  - "Habe ich Prüfen und Verändern eines Bits nicht verwechselt?"
transferIdeas:
  - "Übertrage die gleiche Denkweise auf Timer-Flags oder Interrupt-Masken."
  - "Erkläre einer anderen Person, warum direkte Registerzuweisungen manchmal gefährlich sind."
reflectionPrompt: "Welche Bitoperation fällt dir am leichtesten zu lesen, und welche musst du noch bewusster prüfen?"
level: einfach
draft: false
---

## Aufgabe 1: Wirkung beschreiben

Beschreibe in eigenen Worten, was die folgenden Zeilen jeweils tun:

```c
DDRB |= (1 << PB2);
PORTB &= ~(1 << PB2);
PORTB ^= (1 << PB2);
if (PINB & (1 << PB2)) {
    // ...
}
```

Achte besonders darauf, ob ein Register verändert oder nur gelesen wird.

## Aufgabe 2: Fehler finden

Ein Programm soll nur `PB3` als Ausgang setzen. Vorher können aber schon andere Bits in `DDRB` konfiguriert sein.

```c
DDRB = (1 << PB3);
```

Erkläre, warum diese Zeile in einem größeren Programm problematisch sein kann. Schreibe anschließend eine sicherere Variante.

## Aufgabe 3: Bitoperation zuordnen

Ordne zu:

1. Zielbit auf 1 bringen
2. Zielbit auf 0 bringen
3. Zielbit umschalten
4. Zielbit lesen

Verwende die Ausdrücke `|=`, `&= ~`, `^=` und `&` passend.
