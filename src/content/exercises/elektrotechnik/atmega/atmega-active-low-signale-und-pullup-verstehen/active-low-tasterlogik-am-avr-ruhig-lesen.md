---
title: "Active-Low-Tasterlogik am AVR ruhig lesen"
description: "Erkläre, warum ein Taster mit Pull-up am ATmega oft im Ruhezustand logisch 1 und beim Drücken logisch 0 liefert."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-active-low-signale-und-pullup-verstehen", "active-low-tasterlogik-am-avr-ruhig-lesen"]
taskId: "ET-ATMEGA-IO-207"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
## Aufgabe 1: Ruhezustand benennen

Ein Eingang wird als Eingang geschaltet und der interne Pull-up aktiviert.

Erkläre, welchen Pegel der AVR im Ruhezustand typischerweise liest und warum.

## Aufgabe 2: Ereigniszustand erklären

Der Taster verbindet den Eingang beim Drücken mit Masse.

Erkläre, warum der AVR dann logisch 0 liest.

## Aufgabe 3: Code ruhig lesen

```c
if (!(PINB & (1 << PB0))) {
    // Taster gedrückt
}
```

Beschreibe in 2 bis 4 Sätzen, warum diese Bedingung zu einer Active-Low-Schaltung passt.

## Aufgabe 4: Denkfehler korrigieren

Jemand sagt: „Wenn gedrückt gleich 0 ist, ist die Logik falsch herum.“

Formuliere eine ruhigere fachliche Antwort darauf.
