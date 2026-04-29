---
title: "Musterlösung – SPI-Auswahl bei mehreren Slaves ruhig erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-SPI-305."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-spi-chip-select-bei-mehreren-slaves-verstehen", "spi-auswahl-bei-mehreren-slaves-ruhig-erklaeren"]
taskId: "ET-ATMEGA-SPI-305"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-spi-chip-select-bei-mehreren-slaves-verstehen/spi-auswahl-bei-mehreren-slaves-ruhig-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

MOSI, MISO und SCK können bei mehreren Slaves gemeinsam geführt werden. Die Auswahlleitungen für die einzelnen Slaves sollten dagegen getrennt sein, damit der Master gezielt genau eine Gegenstelle aktivieren kann.

## Aufgabe 2

Wenn mehrere Slaves gleichzeitig aktiv wären, könnte der Datenfluss unklar oder konflikthaft werden. Ein sauberer SPI-Austausch braucht deshalb eine eindeutige Auswahl, damit klar ist, wer gerade zuhört und wer antworten darf.

## Aufgabe 3

Chip Select ist fachlich die Auswahlmechanik des Busses. Über diese Leitung legt der Master fest, welcher Slave gerade an der Kommunikation teilnehmen soll. Ohne diese Auswahl wäre ein Mehrteilnehmer-SPI zwar verdrahtet, aber nicht ruhig organisiert.

## Aufgabe 4

Der AVR hält die gemeinsamen Datenleitungen bereit und aktiviert jeweils nur die Auswahlleitung des gerade gewünschten Slaves. Für den Sensor wird also nur dessen Chip Select aktiv, für das Display danach nur dessen eigene Auswahlleitung. Genau so bleibt der Bus geordnet.
