---
title: Musterlösung – Zustandsmaschine im AVR sauber einordnen
description: Musterlösung zur Aufgabe ET-ATMEGA-STRUKTUR-309.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - programmstruktur-und-reaktivitaet
  - atmega-zustandsmaschine-als-programmstruktur-verstehen
  - zustandsmaschine-im-avr-sauber-einordnen-loesung
taskId: ET-ATMEGA-STRUKTUR-309
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-zustandsmaschine-als-programmstruktur-verstehen/zustandsmaschine-im-avr-sauber-einordnen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - loesung
draft: false
---

## Aufgabe 1

Die drei Zustände können ruhig so beschrieben werden:

- **Zustand A:** LED aus
- **Zustand B:** LED blinkt
- **Zustand C:** LED dauerhaft an

Jeder Zustand beschreibt also eine klar benennbare Betriebsart des Programms.

## Aufgabe 2

Ein möglicher Übergang ist jeweils derselbe: Ein Tastendruck führt vom aktuellen Zustand in den nächsten. Dadurch wird aus einer losen Reaktion eine klar definierte Wechselbedingung.

## Aufgabe 3

Viele Sonderfälle und Delays verteilen die Logik auf verschiedene Stellen, die schnell unübersichtlich werden. Ein Zustandsmodell hält dagegen sichtbar fest, welche Betriebsarten es gibt und wann gewechselt wird. Genau dadurch wird das Verhalten ruhiger lesbar.

## Aufgabe 4

Möglicher Merksatz:

> Eine Betriebsart ist ein Zustand, und ein Übergang beschreibt, wann das Programm von einer Betriebsart in die nächste wechselt.
