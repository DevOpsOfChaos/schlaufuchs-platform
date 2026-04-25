---
title: Musterlösung – Analogsensor und ADC ruhig zusammen lesen
description: Musterlösung zur Aufgabe ELE-MCU-GEN-111.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - analogsensor-spannungsteiler-und-adc-zusammen-denken
  - analogsensor-und-adc-ruhig-zusammen-lesen-loesung
taskId: ELE-MCU-GEN-111
relatedExercise: src/content/exercises/elektrotechnik/mikrocontroller/analogsensor-spannungsteiler-und-adc-zusammen-denken/analogsensor-und-adc-ruhig-zusammen-lesen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - loesung
  - task-id
draft: false
---

## Aufgabe 1

Die Hauptfrage ist, wie aus einer physikalischen Größe über Sensor, Beschaltung und Referenz ein digitaler ADC-Wert wird. Entscheidend ist, die Messkette als Ganzes zu lesen und nicht Sensorwert und ADC-Rohwert zu verwechseln.

## Aufgabe 2

- **Ursache / Ausgangslage:** Ein analoger Sensor liefert zusammen mit einer Beschaltung eine Eingangsspannung für den ADC.
- **Kritischer Punkt:** Referenz, Spannungsteiler oder falsche Deutung des Rohwerts führen zu scheinbar „falschen“ Messungen.
- **Passende Maßnahme:** Sensor, Skalierung und ADC-Referenz getrennt prüfen.

## Aufgabe 3

Ein typischer Fehlersatz wäre: „Der ADC misst direkt die Temperatur.“ Das ist zu kurz. Fachlich misst der ADC zuerst eine Spannung gegen eine Referenz; die Temperatur wird erst danach über die Sensorcharakteristik abgeleitet.

## Aufgabe 4

Die Denkweise hilft ebenso bei Potentiometern, LDRs oder Batteriespannungsmessung. Immer wenn analoge Signale digital ausgewertet werden, sollte die ganze Messkette statt nur der Code betrachtet werden.
