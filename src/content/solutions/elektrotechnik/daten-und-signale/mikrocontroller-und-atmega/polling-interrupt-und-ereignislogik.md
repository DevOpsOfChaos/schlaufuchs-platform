---
title: "Lösung – Polling und Interrupt passend auswählen"
description: "Musterlösung zu „Polling und Interrupt passend auswählen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "polling-interrupt-und-ereignislogik"
taskId: "et-mc-v94-polling-interrupt"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/polling-interrupt-und-ereignislogik"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "atmega"
  - "polling"
  - "interrupt"
  - "isr"
  - "ereignis"
  - "softwarelogik"
draft: false
---
## Lösung zu Aufgabe 1

Ein menschlicher Tastendruck ist im Vergleich zur Programmschleife sehr langsam. Wenn die Hauptschleife nicht blockiert, kann sie den Zustand regelmäßig abfragen.

## Lösung zu Aufgabe 2

Ein sehr kurzer Impuls kann zwischen zwei Polling-Abfragen liegen und dadurch verpasst werden. Ein Interrupt kann die Flanke sofort erfassen und ein Flag setzen.

## Lösung zu Aufgabe 3

Lange Delays, umfangreiche Berechnungen, langsame Ausgaben, blockierende Kommunikation oder komplette Menülogik gehören nicht in eine ISR.
