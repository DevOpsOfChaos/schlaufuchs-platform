---
title: "SPI-Bus mit Chip Select sauber bewerten"
description: "Übe, SPI-Fehler über Leitungsrollen, Chip Select und Buskonflikte zu erklären."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - spi-chip-select-und-busdisziplin
selfCheckPoints:
  - "Habe ich SCK, MOSI, MISO und CS korrekt zugeordnet?"
  - "Habe ich erklärt, warum nur ein Gerät aktiv sein darf?"
  - "Habe ich Modus und Verdrahtung getrennt geprüft?"
taskId: "et-mc-v92-spi-chip-select"
tags:
  - elektrotechnik
  - mikrocontroller
  - spi
  - chip-select
  - bus
  - miso
hintPoints:
  - "MOSI und MISO sind aus Sicht des Masters benannt."
  - "Chip Select ist häufig aktiv Low."
  - "Mehrere aktive MISO-Treiber können Daten verfälschen."
transferIdeas:
  - "Übertrage die Prüfung auf eine SD-Karte und ein Display am gleichen SPI-Bus."
  - "Erstelle eine kleine Verdrahtungstabelle für zwei SPI-Teilnehmer."
reflectionPrompt: "Welche SPI-Leitung würdest du bei Datenmüll zuerst logisch erklären?"
level: mittel
draft: false
---

## Aufgabe 1: Situation lesen

Ein ATmega spricht zwei SPI-Geräte an. Beide teilen sich SCK, MOSI und MISO. Erkläre, warum jedes Gerät trotzdem eine eigene Chip-Select-Leitung braucht.

## Aufgabe 2: Entscheidung begründen

Was kann passieren, wenn zwei Chip-Select-Leitungen gleichzeitig aktiv sind?

## Aufgabe 3: Prüfung formulieren

Nenne eine Prüfreihenfolge, wenn ein SPI-Sensor nur unplausible Werte liefert.
