---
title: "Lösung – UART-Fehlerbilder über Baudrate und Rahmen erklären"
description: "Musterlösung zur Diagnose typischer UART-Probleme und zur Erklärung des Zeichenrahmens."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - uart-baudrate-und-zeichenrahmen
taskId: "et-mc-uart-baudrate-rahmen"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/uart-baudrate-und-zeichenrahmen"
tags:
  - elektrotechnik
  - mikrocontroller
  - uart
  - baudrate
  - debugging
draft: false
---


## Lösung zu Aufgabe 1

Mögliche Ursachen sind unterschiedliche Baudraten, abweichende Einstellungen für Datenbits, Parität oder Stoppbits sowie eine Taktquelle, die nicht zur angenommenen Baudrate passt.

## Lösung zu Aufgabe 2

Typisch ist: ATmega TX geht zum Adapter RX, ATmega RX geht zum Adapter TX, und GND wird mit GND verbunden. TX und RX werden gekreuzt, weil der Sender des einen Geräts zum Empfänger des anderen Geräts gehen muss.

## Lösung zu Aufgabe 3

Das Startbit zeigt den Beginn eines Zeichens. Danach liest der Empfänger die Datenbits in festen Zeitabständen. Das Stoppbit beendet den Rahmen und bringt die Leitung wieder in den Ruhezustand.
