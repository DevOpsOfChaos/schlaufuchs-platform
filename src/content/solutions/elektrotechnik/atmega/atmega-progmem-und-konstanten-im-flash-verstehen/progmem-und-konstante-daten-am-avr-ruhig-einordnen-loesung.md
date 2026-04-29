---
title: "Lösung – PROGMEM und konstante Daten am AVR ruhig einordnen"
description: "Musterlösung zur Aufgabe über PROGMEM und konstante Programmdaten am AVR."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-progmem-und-konstanten-im-flash-verstehen", "progmem-und-konstante-daten-am-avr-ruhig-einordnen"]
taskId: "ET-ATMEGA-MEM-404"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-progmem-und-konstanten-im-flash-verstehen/progmem-und-konstante-daten-am-avr-ruhig-einordnen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Eine feste Lookup-Tabelle ändert sich zur Laufzeit nicht und gehört damit fachlich eher zu den Programmdaten. Ein Zählerwert ändert sich dagegen während des Programmlaufs ständig und braucht deshalb eine Laufzeitrolle im Arbeitsspeicher. Genau diese unterschiedliche Datenrolle ist die ruhige Grundlage der Speicherentscheidung.

### Aufgabe 2

Flash ist der Programmspeicher und passt daher gut zu konstanten Programmdaten. SRAM ist der Arbeitsspeicher und ist besonders für veränderliche Laufzeitdaten wichtig. Konstante Texte oder Tabellen passen fachlich also eher zum Flash.

### Aufgabe 3

Ein möglicher Satz lautet:

> PROGMEM hält konstante Programmdaten im Flash und entlastet dadurch das knappe SRAM für veränderliche Laufzeitdaten.

### Aufgabe 4

Die Aussage ist zu grob, weil die Speicherrolle reale Auswirkungen auf das Projekt hat. Gerade am AVR ist SRAM oft knapp. Wenn konstante Daten unnötig dort landen, fehlt dieser Platz später für Werte, die sich zur Laufzeit wirklich ändern müssen.
