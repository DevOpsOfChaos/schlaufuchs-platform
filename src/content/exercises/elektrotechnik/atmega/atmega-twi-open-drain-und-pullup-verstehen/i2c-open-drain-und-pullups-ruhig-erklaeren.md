---
title: I²C-Open-Drain und Pull-ups ruhig erklären
description: Erkläre am AVR die Grundidee von Open-Drain-Busleitungen und begründe die Rolle der Pull-up-Widerstände.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-kommunikation
  - atmega-twi-open-drain-und-pullup-verstehen
  - i2c-open-drain-und-pullups-ruhig-erklaeren
taskId: ET-ATMEGA-TWI-305
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - twi
hintPoints:
  - Lies High zuerst als Bus-Ruhepegel und nicht automatisch als aktiv gesetzten Ausgang.
  - Frage, warum mehrere Teilnehmer dieselbe Leitung teilen können.
selfCheckPoints:
  - Kannst du Open-Drain und Push-Pull unterscheiden?
  - Kannst du erklären, warum Pull-ups für den Bus wichtig sind?
transferIdeas:
  - Übertrage die Logik auf andere gemeinsam genutzte Leitungen und Busprinzipien.
reflectionPrompt: "Warum hilft beim TWI-Bus die Frage nach der Leitungsidee oft mehr als die Frage nach einem einzelnen Gerät?"
---

## Aufgabe 1: High und Low trennen

Erkläre in 2 bis 4 Sätzen, warum ein High-Pegel auf SDA oder SCL oft nur „hochgezogen“ und nicht aktiv hochgetrieben ist.

## Aufgabe 2: Pull-up begründen

Warum gehören Pull-up-Widerstände beim TWI/I²C-Bus zur Grundidee und nicht nur als optionales Zusatzbauteil dazu?

## Aufgabe 3: Busvorteil erklären

Begründe, warum das Open-Drain-Prinzip hilft, wenn mehrere Geräte dieselbe Leitung gemeinsam verwenden.

## Aufgabe 4: Merksatz formulieren

Schreibe einen kurzen Merksatz auf, in dem die Wörter **Bus**, **Low** und **Pull-up** alle sinnvoll vorkommen.
