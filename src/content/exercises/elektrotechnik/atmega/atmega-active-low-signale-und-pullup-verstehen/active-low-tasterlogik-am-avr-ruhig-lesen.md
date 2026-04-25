---
title: Active-Low-Tasterlogik am AVR ruhig lesen
description: Erkläre, warum ein Taster mit Pull-up am ATmega oft im Ruhezustand logisch 1 und beim Drücken logisch 0 liefert.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - digitale-eingaenge-und-ausgaenge
  - atmega-active-low-signale-und-pullup-verstehen
  - active-low-tasterlogik-am-avr-ruhig-lesen
taskId: ET-ATMEGA-IO-207
level: einfach
draft: false
tags:
  - elektrotechnik
  - atmega
  - pullup
  - active-low
hintPoints:
  - Trenne erst Ruhezustand, Tastendruck und Codebedeutung.
  - Lies logisch 0 nicht vorschnell als Fehler.
selfCheckPoints:
  - Kannst du erklären, warum ein gedrückter Taster logisch 0 sein kann?
  - Kannst du Pull-up und Active-Low sauber zusammen denken?
transferIdeas:
  - Übertrage die Logik auf Endschalter, Reset-Leitungen oder andere aktive Low-Signale.
reflectionPrompt: "Warum hilft der Blick auf den Ruhezustand oft mehr als die reine if-Bedingung?"
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
