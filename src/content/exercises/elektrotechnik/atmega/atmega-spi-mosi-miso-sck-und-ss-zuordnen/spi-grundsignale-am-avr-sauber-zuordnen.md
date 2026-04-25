---
title: SPI-Grundsignale am AVR sauber zuordnen
description: Ordne MOSI, MISO, SCK und SS in einem typischen Master-Slave-Aufbau am ATmega ruhig zu.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-kommunikation
  - atmega-spi-mosi-miso-sck-und-ss-zuordnen
  - spi-grundsignale-am-avr-sauber-zuordnen
taskId: ET-ATMEGA-SPI-208
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - spi
  - pins
hintPoints:
  - Denke die Signalnamen zuerst aus Sicht des Masters.
  - Trenne Datenrichtung und Gerätesicht bewusst.
selfCheckPoints:
  - Kannst du MOSI, MISO, SCK und SS sicher erklären?
  - Kannst du Master- und Slave-Sicht ohne Richtungsfehler wechseln?
transferIdeas:
  - Übertrage die Logik auf Sensoren, Displays oder Speichermodule am SPI-Bus.
reflectionPrompt: "Welche der vier Leitungen wirkt auf den ersten Blick am „selbstverständlichsten“, ist aber in Wahrheit leicht falsch zu lesen?"
---

## Aufgabe 1

Ordne die vier Signalnamen **MOSI**, **MISO**, **SCK** und **SS** jeweils einer kurzen Funktionsbeschreibung zu.

## Aufgabe 2

Erkläre in 3 bis 5 Sätzen, warum der Satz „MOSI ist ein Ausgang“ fachlich zu grob ist.

## Aufgabe 3

Beschreibe für einen AVR als Master und einen Sensor als Slave:

- welche Leitung Daten zum Sensor trägt,
- welche Leitung Daten zurückträgt,
- welche Leitung den Takt liefert,
- und welche Leitung den Sensor auswählt.

## Aufgabe 4

Bewerte diese Aussage:

> „Wenn zwei SPI-Slaves an demselben Bus hängen, brauchen sie eigene SS-Leitungen.“

Erkläre kurz, warum diese Aussage ruhig und fachlich sinnvoll gelesen ist.

## Aufgabe 5

Schreibe einen Merksatz, in dem die Wörter **Master**, **Datenrichtung** und **Auswahl** alle sinnvoll vorkommen.
