---
title: "Lösung – Timer-Overflow und Prescaler zeitlich einordnen"
description: "Musterlösung zu „Timer-Overflow und Prescaler zeitlich einordnen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "timer-overflow-prescaler-und-zeitrechnung"]
taskId: "et-mc-v94-timer-overflow-prescaler"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/timer-overflow-prescaler-und-zeitrechnung"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Möglich sind ein aktivierter CKDIV8-Teiler, ein falsch gewählter Prescaler oder eine falsche Annahme über den Systemtakt.

## Lösung zu Aufgabe 2

Ein 8-Bit-Timer hat viel weniger Zählschritte bis zum Überlauf als ein 16-Bit-Timer. Bei gleicher Tick-Dauer ist der kleinere Zählraum früher durchlaufen.

## Lösung zu Aufgabe 3

Compare Match ist sauberer, wenn ein bestimmter Zeitpunkt innerhalb des Zählbereichs gebraucht wird. Man kann die Periode gezielter festlegen.
