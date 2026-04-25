---
title: Musterlösung – I²C-Open-Drain und Pull-ups ruhig erklären
description: Musterlösung zur Aufgabe ET-ATMEGA-TWI-305.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-kommunikation
  - atmega-twi-open-drain-und-pullup-verstehen
  - i2c-open-drain-und-pullups-ruhig-erklaeren-loesung
taskId: ET-ATMEGA-TWI-305
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-twi-open-drain-und-pullup-verstehen/i2c-open-drain-und-pullups-ruhig-erklaeren.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - twi
  - loesung
draft: false
---

## Aufgabe 1

Ein High-Pegel auf SDA oder SCL entsteht oft dadurch, dass die Leitung über Pull-up-Widerstände nach oben gezogen wird. Der Teilnehmer treibt also nicht aktiv „eine 1“ auf die Leitung, sondern lässt die Leitung los, damit der Pull-up den ruhenden High-Zustand herstellt.

## Aufgabe 2

Pull-up-Widerstände sind Teil der Grundidee, weil der Bus ohne sie keinen sauberen ruhenden High-Pegel hätte. Sie sorgen dafür, dass die Leitung nach einer aktiven Low-Phase wieder zuverlässig nach oben zurückkehrt.

## Aufgabe 3

Wenn mehrere Geräte dieselbe Leitung teilen, ist es hilfreich, dass niemand aktiv gegen einen fremden High-Treiber arbeiten muss. Geräte ziehen nur bei Bedarf nach Low. Dadurch entsteht ein gemeinsames, robustes Leitungsprinzip.

## Aufgabe 4

Möglicher Merksatz:

> Auf dem TWI-Bus wird Low aktiv gezogen, während der Pull-up den ruhenden High-Pegel herstellt.
