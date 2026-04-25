---
title: Musterlösung – SPI-Grundsignale am AVR sauber zuordnen
description: Musterlösung zur Aufgabe ET-ATMEGA-SPI-208.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-kommunikation
  - atmega-spi-mosi-miso-sck-und-ss-zuordnen
  - spi-grundsignale-am-avr-sauber-zuordnen-loesung
taskId: ET-ATMEGA-SPI-208
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-spi-mosi-miso-sck-und-ss-zuordnen/spi-grundsignale-am-avr-sauber-zuordnen.md
tags:
  - elektrotechnik
  - atmega
  - spi
  - loesung
draft: false
---

## Aufgabe 1

- **MOSI** → Daten vom Master zum Slave
- **MISO** → Daten vom Slave zum Master
- **SCK** → serieller Takt
- **SS** → Auswahl des aktiven Slaves

## Aufgabe 2

Der Satz ist zu grob, weil der Name **MOSI** aus Sicht des Masters vergeben ist. Am Master ist diese Leitung tatsächlich Ausgang. Am Slave ist dieselbe Leitung aber Eingang. Fachlich sauberer ist deshalb: MOSI trägt Daten vom Master zum Slave.

## Aufgabe 3

Vom AVR als Master zum Sensor als Slave gehen die Daten über **MOSI**. Die Antwort des Sensors kommt über **MISO** zurück. Den Takt liefert der Master auf **SCK**. Mit **SS** wählt der Master den Sensor als aktiven Slave aus.

## Aufgabe 4

Die Aussage ist sinnvoll, weil gemeinsam genutzte Daten- und Taktleitungen allein noch nicht festlegen, welches Gerät gerade antworten darf. Eigene SS-Leitungen helfen, den aktiven Slave eindeutig auszuwählen. So wird verhindert, dass mehrere Geräte gleichzeitig antworten.

## Aufgabe 5

Ein möglicher Merksatz lautet:

> Bei SPI werden die Signalnamen aus Sicht des Masters vergeben, die Datenrichtung darüber erklärt und der aktive Slave über SS ausgewählt.
