---
title: "Musterlösung – Speicherrollen am AVR sauber zuordnen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-MEM-306."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-flash-sram-und-eeprom-unterscheiden", "speicherrollen-am-avr-sauber-zuordnen"]
taskId: "ET-ATMEGA-MEM-306"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-flash-sram-und-eeprom-unterscheiden/speicherrollen-am-avr-sauber-zuordnen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

- **Programm selbst** → Flash
- **laufender Tastenzähler** → SRAM
- **Kalibrierwert nach dem Ausschalten** → EEPROM

### Aufgabe 2

SRAM ist ein typischer Laufzeitspeicher für veränderliche Daten während des Betriebs. Nach dem Ausschalten oder Neustart bleiben solche Inhalte aber nicht in derselben Weise erhalten. Genau deshalb ist SRAM für dauerhafte Einstellwerte nicht die erste ruhige Wahl.

### Aufgabe 3

EEPROM ist eher für Werte gedacht, die gezielt erhalten bleiben sollen, nicht für beliebige schnell wechselnde Laufdaten in jeder Programmrunde. Es erfüllt also eine andere Speicherrolle als normaler Arbeitsspeicher. Fachlich ruhiger ist es, EEPROM als Ort für dauerhafte Werte und SRAM als Ort für laufende Arbeitsdaten zu lesen.

### Aufgabe 4

Eine mögliche Merkhilfe wäre:

> Flash trägt typischerweise den Code, SRAM die laufenden veränderlichen Daten und EEPROM die dauerhaft zu behaltenden Werte.
