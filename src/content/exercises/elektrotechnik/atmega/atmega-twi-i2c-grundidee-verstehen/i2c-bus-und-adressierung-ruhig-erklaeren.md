---
title: I²C-Bus und Adressierung ruhig erklären
description: Erkläre an kleinen AVR-Busfällen, warum zwei gemeinsame Leitungen trotzdem mehrere Geräte tragen können.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-i2c-grundidee-verstehen
  - i2c-bus-und-adressierung-ruhig-erklaeren
taskId: ET-ATMEGA-TWI-301
level: einfach
draft: false
tags:
  - elektrotechnik
  - atmega
  - twi
  - i2c
hintPoints:
  - Trenne Leitung, Adresse und Nutzdaten bewusst.
  - Lies den Fall als Bus und nicht als direkte Einzelverbindung.
selfCheckPoints:
  - Kannst du SCL und SDA fachlich unterscheiden?
  - Kannst du erklären, warum die Adresse auf dem Bus so wichtig ist?
transferIdeas:
  - Übertrage die Logik auf Sensor, Speicher oder Portexpander.
reflectionPrompt: "Welche Leitfrage verhindert bei I²C die meisten Verwechslungsfehler?"
---

## Aufgabe 1

Ein AVR, ein Sensor und ein EEPROM hängen an denselben zwei Leitungen.

Erkläre, warum das nicht automatisch chaotisch wird.

## Aufgabe 2

Beschreibe in 2 bis 4 Sätzen die Rolle von SCL und SDA.

## Aufgabe 3

Warum ist die Geräteadresse bei I²C/TWI wichtiger als eine eigene Auswahlleitung pro Gerät?

## Aufgabe 4

Schreibe eine kurze Merkhilfe auf, mit der du bei I²C zuerst Busstruktur und Zielgerät sortierst.
