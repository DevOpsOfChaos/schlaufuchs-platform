---
title: "5-V- und 3,3-V-Pegel sicher bewerten"
description: "Übe, eine gemischte Mikrocontroller-Schnittstelle richtungsbezogen und sicher zu beurteilen."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - 5v-3v3-pegel-und-schnittstellen-schuetzen
selfCheckPoints:
  - "Habe ich jede Richtung getrennt betrachtet?"
  - "Habe ich 5-V-Toleranz nicht einfach angenommen?"
  - "Habe ich eine konkrete Schutzmaßnahme genannt?"
taskId: "et-mc-v92-pegel-schuetzen"
tags:
  - elektrotechnik
  - mikrocontroller
  - pegel
  - 3v3
  - 5v
  - schnittstellen
hintPoints:
  - "TX einer Seite geht auf RX der anderen Seite."
  - "Ein gemeinsamer GND ersetzt keinen Pegelwandler."
  - "I²C mit Pull-ups folgt anderen Regeln als ein Push-Pull-GPIO."
transferIdeas:
  - "Übertrage die Tabelle auf SPI mit MISO, MOSI, SCK und CS."
  - "Erstelle eine kleine Prüfliste für neue Module."
reflectionPrompt: "Welche Leitung würdest du bei gemischten Pegeln zuerst prüfen und warum?"
level: mittel
draft: false
---

## Aufgabe 1: Situation lesen

Ein 5-V-ATmega soll per UART mit einem 3,3-V-Modul verbunden werden. Erkläre, warum die Leitung vom ATmega-TX zum Modul-RX besonders kritisch sein kann.

## Aufgabe 2: Entscheidung begründen

Nenne zwei sichere Möglichkeiten, die kritische Richtung zu entschärfen. Erkläre außerdem, warum ein gemeinsamer GND trotzdem nötig ist.

## Aufgabe 3: Prüfung formulieren

Erstelle eine kleine Prüftabelle mit den Spalten Leitung, Sender, Empfänger, Risiko und Maßnahme.
