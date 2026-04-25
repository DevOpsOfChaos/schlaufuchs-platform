---
title: "Lösung – SPI-Bus mit Chip Select sauber bewerten"
description: "Musterlösung zu spi-bus mit chip select sauber bewerten."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - spi-chip-select-und-busdisziplin
taskId: "et-mc-v92-spi-chip-select"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/spi-chip-select-und-busdisziplin"
tags:
  - elektrotechnik
  - mikrocontroller
  - spi
  - chip-select
  - bus
  - miso
draft: false
---

## Lösung zu Aufgabe 1

SCK, MOSI und MISO sind gemeinsame Busleitungen. Chip Select sagt, welcher Teilnehmer die aktuelle Übertragung beachten und auf MISO antworten darf. Ohne getrennte CS-Leitungen könnten mehrere Geräte gleichzeitig reagieren.

## Lösung zu Aufgabe 2

Wenn zwei Geräte gleichzeitig aktiv sind, können beide die MISO-Leitung treiben. Dadurch entstehen Buskonflikte und Datenmüll. Selbst wenn kein Bauteil sofort beschädigt wird, sind die gelesenen Werte nicht verlässlich.

## Lösung zu Aufgabe 3

Zuerst Verdrahtung von SCK, MOSI, MISO und CS prüfen, dann aktiven CS-Pegel und Timing. Danach SPI-Modus, Bitreihenfolge und Taktrate mit dem Datenblatt vergleichen. Bei mehreren Geräten prüfen, ob wirklich immer nur ein CS aktiv ist.
