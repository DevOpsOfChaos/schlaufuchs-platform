---
title: Lösung – Bootloader und Programmstart am AVR ruhig einordnen
description: Musterlösung zur Aufgabe über Bootloader und Startpfad am AVR.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - programmstart-und-reset
  - atmega-bootloader-und-programmstart-verstehen
taskId: ET-ATMEGA-BOOT-405
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-bootloader-und-programmstart-verstehen/bootloader-und-programmstart-am-avr-ruhig-einordnen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - loesung
draft: false
---

## Musterlösung

### Aufgabe 1

Der Bootloader übernimmt am AVR eine besondere Startfunktion. Er kann zum Beispiel prüfen, ob neue Firmware geladen werden soll, oder einen speziellen Ladepfad vorbereiten. Das Anwendungsprogramm übernimmt dagegen die eigentliche Projektaufgabe, etwa Messen, Steuern oder Anzeigen. Beide liegen zwar im Flash, haben aber unterschiedliche Rollen.

### Aufgabe 2

Im ersten Fall geht der Controller nach dem Reset direkt in das Hauptprogramm. Im zweiten Fall übernimmt zunächst der Bootloader eine vorgeschaltete Startrolle und leitet erst danach ins Hauptprogramm weiter. Der Unterschied liegt also nicht im Reset selbst, sondern im folgenden Startpfad.

### Aufgabe 3

Die Aussage ist zu grob, weil der Bootloader fachlich eine andere Aufgabe hat als die eigentliche Anwendung. Er dient nicht primär der Projektfunktion, sondern dem Start- oder Ladeweg. Dadurch ist er mehr als bloß „der erste normale Programmteil“.

### Aufgabe 4

Ein möglicher Merksatz lautet:

> Nach einem Reset entscheidet der Startpfad, ob zuerst ein Bootloader aktiv wird oder direkt das Anwendungsprogramm beginnt.
