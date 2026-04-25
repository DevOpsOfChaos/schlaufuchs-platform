---
title: Musterlösung – SPI-Leitungen und Geräteauswahl ruhig erklären
description: Musterlösung zur Aufgabe ET-ATMEGA-SPI-301.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-grundidee-verstehen
  - spi-leitungen-und-geraeteauswahl-ruhig-erklaeren-loesung
taskId: ET-ATMEGA-SPI-301
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-spi-grundidee-verstehen/spi-leitungen-und-geraeteauswahl-ruhig-erklaeren.md
tags:
  - elektrotechnik
  - atmega
  - spi
  - loesung
  - task-id
draft: false
---

## Musterlösung

### Aufgabe 1

- **SCK** liefert den Takt der Übertragung.
- **MOSI** trägt Daten vom Master nach außen.
- **MISO** trägt Daten von außen zurück zum Master.
- **SS** wählt aus, welches Gerät gerade angesprochen wird.

### Aufgabe 2

Die Datenleitung allein reicht nicht, weil die Bits auch im richtigen Moment übernommen werden müssen. Dafür braucht SPI den Takt. Außerdem muss klar sein, welches Gerät gerade überhaupt zuhören oder antworten soll, und genau dafür ist die Auswahlleitung wichtig.

### Aufgabe 3

MOSI beschreibt die Richtung vom AVR zum angeschlossenen Baustein. MISO beschreibt die Gegenrichtung zurück zum AVR. Beide Leitungen gehören zur selben SPI-Verbindung, tragen aber unterschiedliche Datenwege.

### Aufgabe 4

Wenn mehrere Geräte angeschlossen sind, verhindert SS, dass alle gleichzeitig auf dieselbe Übertragung reagieren. Die Leitung markiert also, welches Gerät gerade gemeint ist.

### Aufgabe 5

Eine ruhige Merkhilfe wäre zum Beispiel:

> Erst Takt und Richtung klären, dann fragen, welches Gerät überhaupt ausgewählt ist.
