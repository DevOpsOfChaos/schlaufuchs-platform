---
title: Musterlösung – Watchdog-Reaktionsarten am AVR ruhig einordnen
description: Musterlösung zur Aufgabe ET-ATMEGA-WDT-211.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - interrupts-und-reaktivitaet
  - atmega-watchdog-reset-und-interrupt-unterscheiden
  - watchdog-reaktionsarten-am-avr-ruhig-einordnen-loesung
taskId: ET-ATMEGA-WDT-211
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-watchdog-reset-und-interrupt-unterscheiden/watchdog-reaktionsarten-am-avr-ruhig-einordnen.md
tags:
  - elektrotechnik
  - atmega
  - watchdog
  - loesung
draft: false
---

## Aufgabe 1

Beim **Watchdog-Reset** führt die ausbleibende Rückmeldung zu einem Neustart des Controllers. Beim **Watchdog-Interrupt** löst der Watchdog stattdessen oder zunächst eine ISR aus. Damit kann das System noch definiert reagieren, bevor es hart neu startet oder statt eines Neustarts nur eine andere Reaktion ausführt.

## Aufgabe 2

Der Satz ist zu grob, weil er nur eine mögliche Reaktionsart nennt. Der Watchdog überwacht zwar ein Zeitfenster, aber die Reaktion kann unterschiedlich aussehen. Gerade der Unterschied zwischen harter Wiederherstellung und vorgelagerter ISR ist didaktisch wichtig.

## Aufgabe 3

- möglichst direkt definierter Neustart → eher **Reset**
- zuerst Zustand markieren oder wecken → eher **Interrupt**

## Aufgabe 4

Beim Wecken aus dem Sleep geht es nicht zuerst um einen Neustart, sondern um eine definierte Reaktion auf ein Zeitereignis. Genau deshalb wäre hier die Rede von einem Watchdog-Interrupt oder einer Watchdog-basierten Weckreaktion fachlich ruhiger als „Watchdog-Reset“.

## Aufgabe 5

Ein möglicher Merksatz lautet:

> Der Watchdog übernimmt die Überwachung, aber erst die gewählte Reaktion entscheidet, ob daraus ein Interrupt oder ein Neustart wird.
