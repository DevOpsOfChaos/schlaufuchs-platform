---
title: SPI-Auswahl bei mehreren Slaves ruhig erklären
description: Erkläre am AVR-SPI, warum mehrere Slaves gemeinsame Datenleitungen, aber getrennte Chip-Select-Leitungen brauchen.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-chip-select-bei-mehreren-slaves-verstehen
  - spi-auswahl-bei-mehreren-slaves-ruhig-erklaeren
taskId: ET-ATMEGA-SPI-305
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - spi
hintPoints:
  - Trenne gemeinsam genutzte Leitungen und Auswahlleitungen.
  - Frage immer, wer gerade aktiv ist.
selfCheckPoints:
  - Kannst du erklären, warum MOSI und SCK geteilt werden dürfen?
  - Kannst du begründen, warum Chip Select pro Slave getrennt sein muss?
transferIdeas:
  - Übertrage die Logik auf Sensoren, Displays und Speicherbausteine am selben SPI-Bus.
reflectionPrompt: "Warum ist bei mehreren SPI-Slaves die Auswahlfrage oft wichtiger als die Datenrichtung?"
---

## Aufgabe 1

Welche SPI-Leitungen können bei mehreren Slaves gemeinsam geführt werden und welche nicht?

## Aufgabe 2

Warum darf bei einem sauberen SPI-Austausch normalerweise immer nur ein Slave aktiv ausgewählt sein?

## Aufgabe 3

Erkläre in 3 bis 5 Sätzen, warum Chip Select fachlich mehr ist als nur „noch ein weiterer Pin“.

## Aufgabe 4

Ein AVR spricht nacheinander mit einem Sensor und einem Display am selben SPI-Bus.

Beschreibe kurz, wie die Auswahl der beiden Gegenstellen ruhig organisiert wird.
