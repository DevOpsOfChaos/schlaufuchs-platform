---
title: Musterlösung – Flanke und Zustand am AVR ruhig trennen
description: Musterlösung zur Aufgabe ET-ATMEGA-REG-302.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - register-und-bitoperationen
  - atmega-zustandswechsel-mit-edge-detection-verstehen
  - flanke-und-zustand-am-avr-ruhig-trennen-loesung
taskId: ET-ATMEGA-REG-302
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-zustandswechsel-mit-edge-detection-verstehen/flanke-und-zustand-am-avr-ruhig-trennen.md
tags:
  - elektrotechnik
  - atmega
  - loesung
draft: false
---

## Aufgabe 1

Ein Pegel beschreibt den aktuellen Zustand eines Eingangs, also zum Beispiel HIGH oder LOW. Eine Flanke beschreibt dagegen den Übergang von einem Zustand in einen anderen. Fachlich ist eine Flanke also kein Dauerzustand, sondern ein Wechselereignis.

## Aufgabe 2

Wenn der Code nur den aktuellen Pinwert sieht, erkennt er denselben gedrückten Zustand in vielen Schleifendurchläufen immer wieder. Dann würde das Ereignis mehrfach auslösen. Für ein einmaliges Reagieren muss deshalb zusätzlich der vorherige Zustand mitgedacht werden.

## Aufgabe 3

Ein möglicher Merksatz ist:

> Eine Flanke erkennt man nicht am aktuellen Wert allein, sondern nur am Vergleich von vorher und jetzt.

## Aufgabe 4

Typische Fälle sind zum Beispiel:

- ein Taster, der genau einmal pro Druck eine LED umschalten soll,
- ein Impuls- oder Triggersignal, das nur beim Übergang ein Ereignis startet.
