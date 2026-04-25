---
title: Musterlösung – Compare Match und Überlauf trennen
description: Musterlösung zur Aufgabe ET-ATMEGA-TMR-205.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - zeitbasis-und-timer
  - atmega-compare-match-verstehen
  - compare-match-und-ueberlauf-trennen-loesung
taskId: ET-ATMEGA-TMR-205
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-compare-match-verstehen/compare-match-und-ueberlauf-trennen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - loesung
draft: false
---

## Aufgabe 1

Beim Überlauf zählt der Timer bis an seine maximale Zählergrenze und springt dann zurück. Beim Compare Match wird ein Ereignis schon dann ausgelöst, wenn der aktuelle Zählerstand einem vorher gesetzten Vergleichswert entspricht. Beide Fälle benutzen also denselben Timer, aber unterschiedliche Auslösegrenzen.

## Aufgabe 2

Das Ereignis kann früher eintreten, weil der Vergleichswert kleiner als der Maximalwert des Timers sein kann. Der Timer muss also nicht erst bis 255 zählen, wenn vorher schon ein passender Vergleichspunkt gesetzt wurde.

## Aufgabe 3

Die Aussage ist zu grob, weil ein 8-Bit-Timer nicht nur beim Überlauf reagieren kann. Mit Compare Match kann ein sinnvolles Ereignis schon bei deutlich kleineren Zählerständen ausgelöst werden.

## Aufgabe 4

Ein möglicher Merksatz lautet:

> Der Vergleichswert legt eine gezielte Timergrenze fest, bei der schon vor dem Überlauf ein Ereignis entstehen kann.

## Aufgabe 5

`TCNT` beschreibt den aktuellen Zählerstand des Timers. `OCR` beschreibt den Vergleichswert, mit dem dieser Stand abgeglichen wird. Zählerstand und Vergleichswert gehören also zusammen, haben aber klar unterschiedliche Rollen.
