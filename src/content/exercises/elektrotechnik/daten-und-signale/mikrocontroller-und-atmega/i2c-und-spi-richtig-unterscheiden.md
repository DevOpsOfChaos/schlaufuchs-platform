---
title: "I²C und SPI nach Leitungen und Auswahlprinzip vergleichen"
description: "Übe, I²C und SPI an Buslogik, Adressierung und Chip-Auswahl zu unterscheiden."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - i2c-und-spi-richtig-unterscheiden
selfCheckPoints:
  - "Habe ich Beobachtung, Ursache und Lösung sauber getrennt?"
  - "Habe ich mindestens einen typischen Denkfehler vermieden?"
  - "Kann ich meine Antwort ohne reine Schlagwörter begründen?"
taskId: "et-mc-i2c-spi-vergleich"
tags:
  - elektrotechnik
  - mikrocontroller
  - i2c
  - spi
  - schnittstellen
hintPoints:
  - "Zähle zuerst die Leitungen und benenne ihre Rollen."
  - "Frage danach, ob Geräte per Adresse oder per Chip Select ausgewählt werden."
  - "Denke bei mehreren Geräten an Adresskonflikte oder zusätzliche CS-Leitungen."
transferIdeas:
  - "Übertrage die Idee auf ein zweites Bauteil oder einen anderen Sensor."
  - "Formuliere eine kurze Checkliste, die du bei echter Fehlersuche nutzen würdest."
reflectionPrompt: "Welche Stelle war eher ein Verständnisproblem als ein reines Codeproblem?"
level: mittel
draft: false
---


## Aufgabe 1: Leitungen zuordnen

Ordne die Begriffe den Schnittstellen zu und erkläre kurz die Rolle: SDA, SCL, MOSI, MISO, SCK, CS, Adresse.

## Aufgabe 2: Mehrere Sensoren

Ein Projekt nutzt zwei I²C-Sensoren mit verschiedenen Adressen und einen SPI-Speicherbaustein. Beschreibe, wie die Geräte grundsätzlich ausgewählt werden.

## Aufgabe 3: Entscheidung begründen

Nenne zwei Gründe für I²C und zwei Gründe für SPI.
