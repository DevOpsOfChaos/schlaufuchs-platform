---
title: Musterlösung – PWM-Pinlogik am AVR ruhig bewerten
description: Musterlösung zur Aufgabe ET-ATMEGA-PWM-210.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - timer-und-pwm
  - atmega-pwm-nichtinvertierend-und-invertierend-unterscheiden
  - pwm-pinlogik-am-avr-ruhig-bewerten-loesung
taskId: ET-ATMEGA-PWM-210
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-pwm-nichtinvertierend-und-invertierend-unterscheiden/pwm-pinlogik-am-avr-ruhig-bewerten.md
tags:
  - elektrotechnik
  - atmega
  - pwm
  - loesung
draft: false
---

## Aufgabe 1

Nichtinvertierende PWM und invertierende PWM unterscheiden sich darin, wie der Ausgangspin auf die Compare-Ereignisse reagiert. Der Timer selbst kann denselben Vergleichspunkt verwenden, aber der Pin wird anders gesetzt oder gelöscht. Dadurch sieht das Signal am Ausgang trotz gleicher Zeitbasis anders aus.

## Aufgabe 2

Der OCR-Wert beschreibt zuerst einen Vergleichspunkt im Timer. Er bestimmt also, wann innerhalb des Zählverlaufs etwas passiert. Die sichtbare High-Zeit am Pin hängt zusätzlich davon ab, ob die PWM nichtinvertierend oder invertierend ausgegeben wird. Deshalb kann derselbe OCR-Wert am Ausgang unterschiedlich wirken.

## Aufgabe 3

- **„Der Timer vergleicht intern an derselben Stelle.“** → Das beschreibt den gleichen OCR-bezogenen Zeitpunkt im Timer.
- **„Das Signal am Pin wirkt trotzdem gegensinnig.“** → Das beschreibt die unterschiedliche Ausgangslogik bei invertierender und nichtinvertierender PWM.

## Aufgabe 4

Die Aussage stimmt nur, wenn die Ausgangslogik gleich bleibt und stillschweigend die nichtinvertierende Lesart gemeint ist. Bei invertierender PWM wirkt derselbe OCR-Wert am Pin gerade nicht in derselben Richtung. Deshalb ist „mehr OCR heißt immer mehr High-Zeit“ fachlich zu grob.

## Aufgabe 5

Ein möglicher Merksatz lautet:

> Der Timer liefert mit OCR den Vergleichspunkt, aber erst die Pinlogik entscheidet, wie das PWM-Signal am Ausgang sichtbar wirkt.
