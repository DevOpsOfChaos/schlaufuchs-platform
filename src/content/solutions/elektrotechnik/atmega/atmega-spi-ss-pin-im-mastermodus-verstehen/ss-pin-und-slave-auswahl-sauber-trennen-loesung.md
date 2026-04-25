---
title: Musterlösung – SS-Pin und Slave-Auswahl sauber trennen
description: Musterlösung zur Aufgabe ET-ATMEGA-SPI-306.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-ss-pin-im-mastermodus-verstehen
  - ss-pin-und-slave-auswahl-sauber-trennen-loesung
taskId: ET-ATMEGA-SPI-306
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-spi-ss-pin-im-mastermodus-verstehen/ss-pin-und-slave-auswahl-sauber-trennen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - spi
  - loesung
draft: false
---

## Aufgabe 1

Der SS-Pin am AVR gehört zur internen Betriebslogik des SPI-Moduls im Controller. Frei gewählte Chip-Select-Leitungen zu Sensoren oder Displays dienen dagegen der Aktivierung externer Slaves. Beide sehen ähnlich nach „Auswahl“ aus, haben aber nicht dieselbe fachliche Rolle.

## Aufgabe 2

Dann bleibt zwar die Verdrahtung nach außen scheinbar richtig, aber der Controller selbst kann im Masterzustand unruhig werden. Das Problem ist dann kein reines Buskabelthema, sondern eine Frage des stabilen Betriebsmodus des AVR.

## Aufgabe 3

Ein möglicher Merksatz lautet:

> Externe Chip-Select-Leitungen wählen Slaves aus, der SS-Pin des AVR betrifft zusätzlich den sicheren Zustand des Masters selbst.
