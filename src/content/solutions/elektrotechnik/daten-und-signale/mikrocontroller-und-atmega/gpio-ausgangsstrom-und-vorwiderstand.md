---
title: "Lösung – GPIO-Ausgangsstrom und Vorwiderstand prüfen"
description: "Musterlösung zu „GPIO-Ausgangsstrom und Vorwiderstand prüfen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "gpio-ausgangsstrom-und-vorwiderstand"
taskId: "et-mc-v93-gpio-strom"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/gpio-ausgangsstrom-und-vorwiderstand"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "gpio"
  - "strom"
  - "vorwiderstand"
  - "led"
  - "schutz"
draft: false
---
## Lösung zu Aufgabe 1

Ohne Vorwiderstand fehlt eine definierte Strombegrenzung. Der Pin und die LED können überlastet werden, obwohl die Schaltung auf den ersten Blick funktioniert.

## Lösung zu Aufgabe 2

Eine saubere Schaltung führt vom Pin über einen Vorwiderstand durch die LED nach Masse. Der Widerstand begrenzt den Strom auf einen Bereich, den LED und Mikrocontroller vertragen.

## Lösung zu Aufgabe 3

Ein Relais benötigt deutlich mehr Strom als ein GPIO sicher liefern kann und erzeugt beim Abschalten eine Induktionsspannung. Deshalb gehört eine Treiberstufe mit Freilaufpfad zwischen Pin und Relais.
