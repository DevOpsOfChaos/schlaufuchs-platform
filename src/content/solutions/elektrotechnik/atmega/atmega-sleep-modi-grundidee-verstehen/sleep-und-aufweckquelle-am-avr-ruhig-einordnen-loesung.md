---
title: Musterlösung – Sleep und Aufweckquelle am AVR ruhig einordnen
description: Musterlösung zur Aufgabe ET-ATMEGA-SLEEP-301.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - robustheit-und-fehlersicherheit
  - atmega-sleep-modi-grundidee-verstehen
  - sleep-und-aufweckquelle-am-avr-ruhig-einordnen-loesung
taskId: ET-ATMEGA-SLEEP-301
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-sleep-modi-grundidee-verstehen/sleep-und-aufweckquelle-am-avr-ruhig-einordnen.md
tags:
  - elektrotechnik
  - atmega
  - sleep
  - loesung
  - task-id
draft: false
---

## Musterlösung

### Aufgabe 1

Ein Sleep-Modus ist sinnvoll, weil der AVR zwischen den Messungen nicht ständig voll aktiv rechnen muss. In dieser Wartephase kann Energie gespart werden, ohne dass die eigentliche Messlogik verloren geht.

### Aufgabe 2

Die Aussage ist zu grob, weil Sleep nicht einfach „weg“ oder „kaputt“ bedeutet. Der Controller bleibt Teil des Systems und kann durch passende Ereignisse wieder in die aktive Phase zurückkehren.

### Aufgabe 3

Typische Aufweckquellen sind zum Beispiel ein Timerereignis oder ein externes Signal an einem Eingang. Beide gehören zum Sleep-Gedanken, weil der Controller nur dann sinnvoll schlafen kann, wenn klar ist, wodurch er wieder aufgeweckt wird.

### Aufgabe 4

Eine ruhige Merkhilfe wäre zum Beispiel:

> Erst fragen, ob gerade gearbeitet oder nur gewartet wird. Dann klären, wodurch das nächste Aufwachen passiert.
