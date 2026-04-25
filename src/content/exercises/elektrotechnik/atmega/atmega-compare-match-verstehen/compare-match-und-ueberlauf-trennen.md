---
title: Compare Match und Überlauf trennen
description: Erkläre, warum ein AVR-Timer schon vor dem Überlauf reagieren kann und wie sich Compare Match fachlich vom Überlauf unterscheidet.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - zeitbasis-und-timer
  - atmega-compare-match-verstehen
  - compare-match-und-ueberlauf-trennen
taskId: ET-ATMEGA-TMR-205
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - timer
  - compare-match
hintPoints:
  - Trenne zuerst volle Zählerbreite und gesetzten Vergleichswert.
  - Lies den Timer als Taktzähler, nicht als fertige Uhr.
selfCheckPoints:
  - Kannst du Überlauf und Compare Match fachlich unterscheiden?
  - Kannst du erklären, warum ein Ereignis schon vor 255 auftreten kann?
transferIdeas:
  - Übertrage die Logik auf Blinkzyklen oder periodische Interrupts.
reflectionPrompt: "Welche ruhige Lesefrage hilft dir am meisten, wenn Timerereignisse nur als Registerkürzel dastehen?"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen den Unterschied zwischen Überlauf und Compare Match.

## Aufgabe 2

Warum kann ein Timerereignis bei Compare Match schon früher eintreten als beim Überlauf?

## Aufgabe 3

Bewerte diese Aussage:

> „Ein 8-Bit-Timer kann erst bei 255 ein sinnvolles Ereignis auslösen.“

Erkläre, warum diese Aussage zu grob ist.

## Aufgabe 4

Formuliere einen Merksatz dafür, was der Vergleichswert bei Compare Match fachlich leistet.

## Aufgabe 5

Jemand verwechselt `OCR` und `TCNT`. Erkläre kurz, warum Zählerstand und Vergleichswert nicht dieselbe Rolle haben.
