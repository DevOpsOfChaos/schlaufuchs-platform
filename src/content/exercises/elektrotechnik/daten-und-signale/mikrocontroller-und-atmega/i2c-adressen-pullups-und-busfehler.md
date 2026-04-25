---
title: "I²C-Busfehler systematisch eingrenzen"
description: "Übe, einen nicht gefundenen I²C-Sensor über Adresse, Pull-ups und Buszustand zu analysieren."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - i2c-adressen-pullups-und-busfehler
selfCheckPoints:
  - "Habe ich elektrische Prüfung vor Bibliothekswechsel gestellt?"
  - "Habe ich Pull-ups und gemeinsame Masse erwähnt?"
  - "Habe ich Adresse und Busblockade getrennt?"
taskId: "et-mc-v92-i2c-busfehler"
tags:
  - elektrotechnik
  - mikrocontroller
  - i2c
  - pullup
  - bus
  - adresse
hintPoints:
  - "I²C braucht Pull-ups und gemeinsamen Bezug."
  - "Ein Scanner prüft nur, ob ein Teilnehmer auf eine Adresse antwortet."
  - "SDA dauerhaft Low ist ein anderes Problem als eine falsche Adresse."
transferIdeas:
  - "Übertrage die Fehlersuche auf zwei Sensoren mit gleicher Adresse."
  - "Formuliere eine Checkliste für den ersten I²C-Test auf dem Steckbrett."
reflectionPrompt: "Welche I²C-Prüfung würdest du durchführen, bevor du den Code änderst?"
level: mittel
draft: false
---

## Aufgabe 1: Situation lesen

Ein I²C-Scanner findet keinen angeschlossenen Sensor. Nenne mindestens vier mögliche Ursachen, die nicht direkt ein Programmierfehler sind.

## Aufgabe 2: Entscheidung begründen

Erkläre, warum Pull-ups bei I²C wichtig sind und warum die Pull-up-Spannung zu den angeschlossenen Bausteinen passen muss.

## Aufgabe 3: Prüfung formulieren

Beschreibe eine sinnvolle Prüfreihenfolge für den ersten I²C-Aufbau.
