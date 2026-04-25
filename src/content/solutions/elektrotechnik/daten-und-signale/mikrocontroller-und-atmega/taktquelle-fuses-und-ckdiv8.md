---
title: "Lösung – Taktquelle und CKDIV8 bei Upload- und Timingfehlern prüfen"
description: "Musterlösung zu „Taktquelle und CKDIV8 bei Upload- und Timingfehlern prüfen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "taktquelle-fuses-und-ckdiv8"
taskId: "et-mc-v93-takt-fuses"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/taktquelle-fuses-und-ckdiv8"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "atmega"
  - "takt"
  - "fuses"
  - "ckdiv8"
  - "debugging"
draft: false
---
## Lösung zu Aufgabe 1

Eine plausible Ursache ist ein geteilter Systemtakt, zum Beispiel durch CKDIV8. Dann läuft der Controller mit einem Achtel der erwarteten Frequenz.

## Lösung zu Aufgabe 2

Die UART-Baudrate wird aus dem angenommenen Systemtakt berechnet. Wenn der reale Takt abweicht, passt die Bitdauer nicht und die Gegenstelle liest falsche Zeichen.

## Lösung zu Aufgabe 3

Zuerst Symptome messen, dann die angenommene Taktquelle mit Board, Programmer und Dokumentation vergleichen. Fuse-Werte sollten gelesen und gesichert werden, bevor sie gezielt geändert werden.
