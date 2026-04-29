---
title: "Musterlösung – Registerrollen an ATmega-Pins erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-IO-201."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-ddr-port-pin-grundlagen", "registerrollen-an-atmega-pins-erklaeren"]
taskId: "ET-ATMEGA-IO-201"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-ddr-port-pin-grundlagen/registerrollen-an-atmega-pins-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

PB0 arbeitet als Ausgang, weil das Bit in `DDRB` gesetzt wird. PB1 arbeitet als Eingang, weil das Bit in `DDRB` gelöscht wird.

### Aufgabe 2

Bei PB0 bedeutet `PORTB |= (1 << PB0)`, dass der Ausgang auf logisch High gesetzt wird. Bei PB1 bedeutet dieselbe Art Zugriff nicht „High ausgeben“, sondern den internen Pull-up für den Eingang aktivieren.

### Aufgabe 3

`PORT` ist nicht einfach nur ein Ausgangsregister, weil seine Wirkung vom Pinmodus abhängt. Bei Ausgängen setzt es den Pegel, bei Eingängen aktiviert oder deaktiviert es den Pull-up. Genau deshalb muss man `PORT` immer zusammen mit `DDR` lesen.

### Aufgabe 4

- **DDR** legt fest, ob ein Pin Eingang oder Ausgang ist.
- **PORT** setzt den Ausgangswert oder den Pull-up.
- **PIN** wird gelesen, um den aktuellen Zustand am Pin abzufragen.
