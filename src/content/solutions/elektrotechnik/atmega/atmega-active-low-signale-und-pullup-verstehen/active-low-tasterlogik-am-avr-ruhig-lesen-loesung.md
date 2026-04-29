---
title: "Musterlösung – Active-Low-Tasterlogik am AVR ruhig lesen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-IO-207."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-active-low-signale-und-pullup-verstehen", "active-low-tasterlogik-am-avr-ruhig-lesen"]
taskId: "ET-ATMEGA-IO-207"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-active-low-signale-und-pullup-verstehen/active-low-tasterlogik-am-avr-ruhig-lesen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Im Ruhezustand liest der AVR typischerweise logisch 1. Der interne Pull-up zieht den Eingang ohne Tastendruck auf High und verhindert so einen undefinierten Zustand.

## Aufgabe 2

Beim Drücken verbindet der Taster den Eingang mit Masse. Dadurch wird der Pegel auf Low gezogen und der AVR liest logisch 0.

## Aufgabe 3

Die Bedingung passt zu einer Active-Low-Schaltung, weil der gedrückte Taster als logisch 0 erscheint. Das `!` macht daraus im Code wieder die Aussage „Ereignis liegt vor“. So wird elektrisch Low zu logisch „gedrückt“.

## Aufgabe 4

Die Logik ist nicht falsch herum, sondern nur anders zugeordnet. Der Pull-up definiert den Ruhezustand als 1, und das Ereignis zieht den Eingang auf 0. Active-Low beschreibt genau diese Zuordnung.
