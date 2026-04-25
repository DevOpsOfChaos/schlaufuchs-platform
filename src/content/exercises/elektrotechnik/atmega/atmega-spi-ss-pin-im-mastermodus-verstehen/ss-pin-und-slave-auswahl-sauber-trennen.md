---
title: SS-Pin und Slave-Auswahl sauber trennen
description: Erkläre am AVR-SPI, warum der SS-Pin des Controllers nicht einfach mit frei gewählten Chip-Select-Leitungen gleichgesetzt werden darf.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-ss-pin-im-mastermodus-verstehen
  - ss-pin-und-slave-auswahl-sauber-trennen
taskId: ET-ATMEGA-SPI-306
level: fortgeschritten
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - spi
hintPoints:
  - Trenne Auswahl nach außen und Zustandslogik im Controller.
  - Frage immer, welche Rolle ein Signal am Controller selbst hat.
selfCheckPoints:
  - Kannst du SS-Pin und externe Chip-Selects unterscheiden?
  - Kannst du erklären, warum der Master trotz korrekter Verdrahtung unruhig sein kann?
transferIdeas:
  - Übertrage die Logik auf komplexere SPI-Topologien mit mehreren Slaves.
reflectionPrompt: "Warum hilft bei SPI-Masterproblemen oft zuerst die Zustandsfrage des Controllers und nicht sofort nur der Blick aufs Kabel?"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen den Unterschied zwischen

- dem SS-Pin am AVR selbst
- und frei gewählten Chip-Select-Leitungen zu externen Slaves.

## Aufgabe 2

Warum kann ein SPI-Aufbau trotz korrekt aussehender Leitungen zu Sensor und Display unruhig bleiben, wenn der SS-Pin des AVR falsch behandelt wird?

## Aufgabe 3

Formuliere einen kurzen Merksatz dazu, warum „Slave auswählen“ und „Master stabil halten“ nicht dieselbe Aufgabe sind.
