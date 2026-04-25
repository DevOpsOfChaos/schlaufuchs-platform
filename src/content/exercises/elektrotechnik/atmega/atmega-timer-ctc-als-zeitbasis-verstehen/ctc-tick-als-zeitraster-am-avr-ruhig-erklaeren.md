---
title: CTC-Tick als Zeitraster am AVR ruhig erklären
description: Erkläre, warum der CTC-Modus oft eine bessere Zeitbasis für periodische Aufgaben liefert als blockierende Warte-Schleifen.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - timer-und-zeitverhalten
  - atmega-timer-ctc-als-zeitbasis-verstehen
  - ctc-tick-als-zeitraster-am-avr-ruhig-erklaeren
taskId: ET-ATM-TMR-301
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - timer
hintPoints:
  - Trenne periodisches Zeitraster und bloße Wartezeit bewusst.
  - Lies den Compare-Wert als Zeitanker.
selfCheckPoints:
  - Kannst du CTC und Delay fachlich trennen?
  - Kannst du erklären, warum periodische Aufgaben von einem Tick profitieren?
transferIdeas:
  - Übertrage die Idee auf Tasterabfrage, LED-Blinken oder Sensorabfrage im festen Raster.
reflectionPrompt: "Warum ist ein wiederkehrender Zeitanker oft besser planbar als viele einzelne Warteblöcke?"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum der CTC-Modus gut zu periodischen Aufgaben passt.

## Aufgabe 2

Warum ist ein fester Tick oft ruhiger planbar als mehrere verstreute Delay-Schleifen?

## Aufgabe 3

Formuliere einen kurzen Merksatz, in dem die Wörter Compare-Wert, Zeitbasis und periodisch sinnvoll vorkommen.
