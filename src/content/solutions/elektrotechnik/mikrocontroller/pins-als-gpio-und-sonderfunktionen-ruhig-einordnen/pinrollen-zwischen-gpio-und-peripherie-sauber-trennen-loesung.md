---
title: "Musterlösung – Pinrollen zwischen GPIO und Peripherie sauber trennen"
description: "Musterlösung zur Aufgabe ELE-MCU-GEN-104."
subject: "elektrotechnik"
section: "mikrocontroller"
topicPath: ["mikrocontroller", "pins-als-gpio-und-sonderfunktionen-ruhig-einordnen", "pinrollen-zwischen-gpio-und-peripherie-sauber-trennen"]
taskId: "ELE-MCU-GEN-104"
relatedExercise: "src/content/exercises/elektrotechnik/mikrocontroller/pins-als-gpio-und-sonderfunktionen-ruhig-einordnen/pinrollen-zwischen-gpio-und-peripherie-sauber-trennen.md"
tags: ["elektrotechnik", "mikrocontroller", "loesung"]
draft: false
---
## Aufgabe 1

Als GPIO dient ein Pin als allgemeiner digitaler Ein- oder Ausgang. Dann wird seine Rolle typischerweise über normale Portlogik beschrieben. Als Sonderfunktion wird derselbe physische Pin an eine interne Peripherie gebunden, etwa an UART, SPI oder PWM. Dann steht nicht mehr die allgemeine GPIO-Rolle im Vordergrund, sondern die spezialisierte Funktion.

## Aufgabe 2

Eine plausible Erklärung ist, dass der Pin gerade einer anderen internen Funktion zugeordnet ist und deshalb nicht mehr als normaler GPIO arbeitet. Dann wäre der Portzugriff nicht die eigentliche Hauptsteuerung dieses Pins.

## Aufgabe 3

Eine ruhige Prüffrage wäre zum Beispiel:

> Arbeitet dieser Pin gerade wirklich als allgemeiner GPIO oder ist er einer internen Sonderfunktion zugewiesen?

## Aufgabe 4

Typische Sonderfunktionen sind zum Beispiel UART-TX und PWM-Ausgang. In beiden Fällen wird der Pin nicht mehr nur als einfacher digitaler Ausgang gelesen, sondern als Teil einer internen Peripherie mit eigener Funktion und eigenem Zeitverhalten.
