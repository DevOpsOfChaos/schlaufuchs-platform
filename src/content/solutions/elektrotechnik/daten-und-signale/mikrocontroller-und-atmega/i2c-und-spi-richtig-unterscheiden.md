---
title: "Lösung – I²C und SPI nach Leitungen und Auswahlprinzip vergleichen"
description: "Musterlösung zum Vergleich von I²C, SPI, Adressierung und Chip Select."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "i2c-und-spi-richtig-unterscheiden"]
taskId: "et-mc-i2c-spi-vergleich"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/i2c-und-spi-richtig-unterscheiden"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

I²C nutzt SDA als Datenleitung, SCL als Taktleitung und Adressen zur Auswahl der Geräte. SPI nutzt MOSI für Daten vom Master, MISO für Daten zum Master, SCK als Takt und CS zur Auswahl eines Bausteins.

## Lösung zu Aufgabe 2

Die beiden I²C-Sensoren teilen sich SDA und SCL. Der Controller spricht sie über unterschiedliche Adressen an. Der SPI-Speicher wird über seine Chip-Select-Leitung ausgewählt.

## Lösung zu Aufgabe 3

I²C ist praktisch bei wenigen freien Pins und mehreren Sensoren mit unterschiedlichen Adressen. SPI passt oft besser bei höherer Geschwindigkeit, klarer Bausteinauswahl und Modulen, die SPI ohnehin vorgeben.
