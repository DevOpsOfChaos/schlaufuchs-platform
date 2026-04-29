---
title: "Musterlösung – Bitmasken an AVR-Registern ruhig lesen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-REG-201."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-bitmasken-und-bitoperationen-verstehen", "bitmasken-an-avr-registern-ruhig-lesen"]
taskId: "ET-ATMEGA-REG-201"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-bitmasken-und-bitoperationen-verstehen/bitmasken-an-avr-registern-ruhig-lesen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

- `PORTB |= (1 << PB0);` → Das Bit für PB0 wird gesetzt. Andere Bits bleiben erhalten.
- `PORTB &= ~(1 << PB0);` → Das Bit für PB0 wird gelöscht. Andere Bits bleiben erhalten.
- `if (PINB & (1 << PB2))` → Das Bit für PB2 wird geprüft, also gelesen.
- `PORTB = (1 << PB0);` → Hier wird das ganze Register neu geschrieben, nicht nur gezielt ein einzelnes Bit.

## Aufgabe 2

`|=` ist oft ruhiger, weil nur das adressierte Bit sicher auf 1 gesetzt wird und die übrigen Registerbits unverändert bleiben. Eine Komplettzuweisung kann andere vorher gesetzte Bits unbeabsichtigt überschreiben.

## Aufgabe 3

Die Maske `(1 << PB2)` bedeutet: Eine 1 wird genau an die Bitposition von PB2 geschoben, damit dieses Bit gezielt angesprochen werden kann.

## Aufgabe 4

Für AVR-Register sind `&`, `|` und `~` nicht bloß Symbolschmuck. Sie beschreiben, wie einzelne Bits in einem Register gezielt bearbeitet werden. Genau dadurch kann ein Mikrocontroller mehrere Funktionen in demselben Register verwalten, ohne ständig alles neu zu schreiben. Wer diese Operatoren nur als „komische Zeichen“ sieht, übersieht die eigentliche Registerlogik.

## Aufgabe 5

- **Bit setzen:** Mit OR und passender Maske.
- **Bit löschen:** Mit AND und invertierter Maske.
- **Bit prüfen:** Mit AND und passender Maske im Vergleich oder in einer Bedingung.
