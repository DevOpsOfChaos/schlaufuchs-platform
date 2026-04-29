---
title: "SPI-Bus mit Chip Select sauber bewerten"
description: "Übe, SPI-Fehler über Leitungsrollen, Chip Select und Buskonflikte zu erklären."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "spi-chip-select-und-busdisziplin"]
taskId: "et-mc-v92-spi-chip-select"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Situation lesen

Ein ATmega spricht zwei SPI-Geräte an. Beide teilen sich SCK, MOSI und MISO. Erkläre, warum jedes Gerät trotzdem eine eigene Chip-Select-Leitung braucht.

## Aufgabe 2: Entscheidung begründen

Was kann passieren, wenn zwei Chip-Select-Leitungen gleichzeitig aktiv sind?

## Aufgabe 3: Prüfung formulieren

Nenne eine Prüfreihenfolge, wenn ein SPI-Sensor nur unplausible Werte liefert.
