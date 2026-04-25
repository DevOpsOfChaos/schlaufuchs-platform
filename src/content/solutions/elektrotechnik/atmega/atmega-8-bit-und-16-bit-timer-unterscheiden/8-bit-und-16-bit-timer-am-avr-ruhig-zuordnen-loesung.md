---
title: Lösung – 8-Bit- und 16-Bit-Timer am AVR ruhig zuordnen
description: Musterlösung zur Aufgabe über Timergröße und Zählbereich am AVR.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - timer-und-zeitbasis
  - atmega-8-bit-und-16-bit-timer-unterscheiden
taskId: ET-ATMEGA-TIMER-401
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-8-bit-und-16-bit-timer-unterscheiden/8-bit-und-16-bit-timer-am-avr-ruhig-zuordnen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - loesung
draft: false
---

## Musterlösung

### Aufgabe 1

Ein 8-Bit-Timer zählt typischerweise von `0` bis `255`. Ein 16-Bit-Timer zählt typischerweise von `0` bis `65535`. Der wichtige Unterschied liegt also im deutlich größeren Zählbereich des 16-Bit-Timers.

### Aufgabe 2

Für eine einfache periodische LED-Taktung reicht oft schon ein 8-Bit-Timer aus. Ein längeres Zeitfenster mit feineren Vergleichswerten spricht eher für einen 16-Bit-Timer, weil dort deutlich mehr Zählschritte zur Verfügung stehen.

### Aufgabe 3

Die Aussage ist zu grob, weil ein größerer Timer nicht automatisch jede Aufgabe besser löst. Für viele einfache Zeit- oder PWM-Aufgaben reicht ein kleinerer Timer bereits aus. Die sinnvolle Wahl hängt vom benötigten Zeitfenster, von der gewünschten Auflösung und vom konkreten Einsatzfall ab. „Größer“ ist also kein Ersatz für eine ruhige fachliche Begründung.

### Aufgabe 4

Ein möglicher Merksatz lautet:

> Die Timerwahl am AVR hängt davon ab, wie groß der benötigte Zählbereich ist und welches Zeitfenster sauber abgedeckt werden soll.
