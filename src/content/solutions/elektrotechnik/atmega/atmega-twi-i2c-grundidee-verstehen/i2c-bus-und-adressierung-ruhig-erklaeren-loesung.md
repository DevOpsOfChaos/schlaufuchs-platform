---
title: Musterlösung – I²C-Bus und Adressierung ruhig erklären
description: Musterlösung zur Aufgabe ET-ATMEGA-TWI-301.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-i2c-grundidee-verstehen
  - i2c-bus-und-adressierung-ruhig-erklaeren-loesung
taskId: ET-ATMEGA-TWI-301
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-twi-i2c-grundidee-verstehen/i2c-bus-und-adressierung-ruhig-erklaeren.md
tags:
  - elektrotechnik
  - atmega
  - twi
  - i2c
  - loesung
  - task-id
draft: false
---

## Musterlösung

### Aufgabe 1

Es wird nicht chaotisch, weil die Geräte nicht nur „an Leitungen hängen“, sondern über Adressen angesprochen werden. Dadurch ist im Busvorgang klar, welches Gerät gerade gemeint ist.

### Aufgabe 2

SCL ist die Taktleitung und strukturiert die Übertragung. SDA ist die Datenleitung und trägt sowohl Adresse als auch eigentliche Nutzdaten.

### Aufgabe 3

Die Adresse übernimmt auf dem Bus die Zielauswahl. Man braucht also nicht für jedes Gerät eine eigene Auswahlleitung, solange die Buskommunikation sauber adressiert wird.

### Aufgabe 4

Eine ruhige Merkhilfe wäre zum Beispiel:

> Erst die zwei Busleitungen klären, dann fragen, welche Adresse das Zielgerät markiert.
