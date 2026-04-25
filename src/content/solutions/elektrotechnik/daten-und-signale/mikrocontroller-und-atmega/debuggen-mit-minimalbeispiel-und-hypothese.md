---
title: "Lösung – Fehlersuche mit Minimalbeispiel und Hypothese strukturieren"
description: "Musterlösung zu „Fehlersuche mit Minimalbeispiel und Hypothese strukturieren“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "debuggen-mit-minimalbeispiel-und-hypothese"
taskId: "et-mc-v94-debug-minimalbeispiel"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/debuggen-mit-minimalbeispiel-und-hypothese"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "atmega"
  - "debugging"
  - "minimalbeispiel"
  - "fehlersuche"
  - "hypothese"
  - "test"
draft: false
---
## Lösung zu Aufgabe 1

Eine prüfbare Hypothese wäre: „Der Sensor antwortet nicht, weil die I²C-Adresse falsch ist“ oder „Der Sensor bekommt keine stabile Versorgung“.

## Lösung zu Aufgabe 2

Ein Minimalbeispiel enthält nur Mikrocontroller, Versorgung, gemeinsame Masse, SDA/SCL mit Pull-ups und einen I²C-Scanner. Anwendungscode und weitere Module werden entfernt.

## Lösung zu Aufgabe 3

Bei mehreren gleichzeitigen Änderungen ist unklar, welche Änderung den Befund verursacht. Dadurch entsteht kein Wissen über die Fehlerursache, sondern nur ein Zufallsergebnis.
