---
title: Musterlösung – Timer-Overflow am AVR als Zustand und Reaktion trennen
description: Musterlösung zur Aufgabe ET-ATMEGA-TMR-209.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - zeitbasis-und-timer
  - atmega-overflow-flag-und-overflow-interrupt-unterscheiden
  - timer-overflow-am-avr-als-zustand-und-reaktion-trennen-loesung
taskId: ET-ATMEGA-TMR-209
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-overflow-flag-und-overflow-interrupt-unterscheiden/timer-overflow-am-avr-als-zustand-und-reaktion-trennen.md
tags:
  - elektrotechnik
  - atmega
  - loesung
  - task-id
draft: false
---

## Aufgabe 1

Ein gesetztes Overflow-Flag bedeutet zuerst nur, dass der Timer übergelaufen ist. Das Flag markiert also ein stattgefundenes Ereignis im Timer-Modul.

## Aufgabe 2

Beim Interrupt kommt zusätzlich eine automatische Reaktionsmechanik dazu. Wenn die Freigaben passen, führt der AVR bei diesem Ereignis eine passende ISR aus.

## Aufgabe 3

Beim Polling fragt die Hauptschleife das Flag aktiv ab und entscheidet selbst, wann sie reagiert. Beim Interrupt wird die Reaktion an die ISR gekoppelt. Das Ereignis ist gleich, aber die Software-Struktur ist unterschiedlich.

## Aufgabe 4

Diese Aussage ist zu schnell. Das Flag zeigt zunächst nur das Ereignis an. Ob daraus auch ein Interrupt mit ISR wird, hängt zusätzlich von den passenden Freigaben und der gewählten Struktur ab.
