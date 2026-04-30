---
title: "Lösung – Analogsensor am ADC mit Spannungsteiler beurteilen"
description: "Musterlösung zu „Analogsensor am ADC mit Spannungsteiler beurteilen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "analogsensor-spannungsteiler-und-adc-eingang"]
taskId: "et-mc-v93-analogsensor"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/analogsensor-spannungsteiler-und-adc-eingang"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Der ADC misst nur die Spannung am Eingang relativ zur Referenz. Diese Spannung entsteht aus Sensor, Widerstand, Versorgung und Schaltung.

## Lösung zu Aufgabe 2

Die Lage des LDR bestimmt, ob sein Widerstandsabfall den ADC-Knoten eher nach oben oder nach unten zieht. Dadurch kann Licht je nach Aufbau steigende oder fallende ADC-Werte erzeugen.

## Lösung zu Aufgabe 3

Wichtig sind die Referenzspannung, die Schaltung des Spannungsteilers, die Sensorlage und die Frage, welcher Spannungsbereich am ADC-Pin wirklich anliegt.
