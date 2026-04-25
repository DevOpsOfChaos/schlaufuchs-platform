---
title: Musterlösung – PWM-Frequenz und Tastverhältnis ruhig trennen
description: Musterlösung zur Aufgabe ET-ATMEGA-TIMER-307.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - timer-und-zeitverhalten
  - atmega-pwm-frequenz-und-tastverhaeltnis-trennen
  - pwm-frequenz-und-tastverhaeltnis-ruhig-trennen-loesung
taskId: ET-ATMEGA-TIMER-307
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-pwm-frequenz-und-tastverhaeltnis-trennen/pwm-frequenz-und-tastverhaeltnis-ruhig-trennen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - pwm
  - loesung
draft: false
---

## Aufgabe 1

Die PWM-Frequenz beschreibt, wie oft sich eine ganze Periode wiederholt. Das Tastverhältnis beschreibt, wie groß der Anteil der Ein-Zeit innerhalb dieser Periode ist. Beides gehört zum selben Signal, ist aber nicht dieselbe Größe.

## Aufgabe 2

50 Prozent bedeuten nur, dass die Ein-Zeit halb so lang ist wie die gesamte Periode. Wenn die eine Periode sehr lang und die andere sehr kurz ist, bleibt der relative Anteil gleich, aber das zeitliche Verhalten des Signals ändert sich trotzdem.

## Aufgabe 3

Die Aussage ist zu grob, weil das Tastverhältnis nur den Ein-Anteil innerhalb einer Periode verändert. Die Frequenz hängt dagegen an der Länge der ganzen Periode. Man kann also den Duty Cycle ändern, ohne die Grundfrequenz zu verändern.

## Aufgabe 4

Möglicher Merksatz:

> Die Frequenz beschreibt, wie oft sich die Periode wiederholt, und das Tastverhältnis beschreibt den Ein-Anteil innerhalb dieser Periode.
