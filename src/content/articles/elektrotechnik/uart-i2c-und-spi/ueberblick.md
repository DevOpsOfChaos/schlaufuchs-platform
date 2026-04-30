---
title: "UART, I2C und SPI"
description: "Allgemeiner Überblick über UART, I2C und SPI als verbreitete digitale Kommunikationsschnittstellen."
subject: "elektrotechnik"
section: "Kommunikation"
topicPath: ["uart-i2c-und-spi", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Kommunikation"]
draft: false
---
# UART, I2C und SPI

![Schaubild zum Vergleich von UART, I²C und SPI.](/schlaufuchs-platform/images/overviews/v148/uart-i2c-und-spi.svg)

*Das Schaubild stellt die Grundidee der drei seriellen Schnittstellen nebeneinander.*


## Überblick
UART, I2C und SPI sind digitale Schnittstellen, über die Mikrocontroller mit anderen Bausteinen kommunizieren. Sie übertragen Daten seriell, unterscheiden sich aber stark in Verdrahtung, Organisation, Geschwindigkeit und typischer Anwendung.

## UART
UART arbeitet meist mit zwei Datenleitungen: Senden und Empfangen. Die Partner müssen sich auf eine Baudrate und ein Datenformat einigen. UART ist einfach, robust für Punkt-zu-Punkt-Verbindungen und häufig bei Debug-Ausgaben, GPS-Modulen, seriellen Adaptern oder Funkmodulen zu finden.

## I2C
I2C verwendet typischerweise zwei Leitungen: Daten und Takt. Mehrere Geräte teilen sich den Bus und werden über Adressen angesprochen. Pull-up-Widerstände sind ein zentraler Bestandteil. I2C eignet sich gut für viele Sensoren und Konfigurationsbausteine mit moderater Geschwindigkeit.

## SPI
SPI nutzt getrennte Leitungen für Takt und Datenrichtung sowie Auswahlleitungen für einzelne Geräte. Es ist oft schneller als I2C, benötigt aber mehr Pins. SPI wird häufig für Displays, Speicher, schnelle ADCs oder Funkchips eingesetzt.

## Vergleich
Die Wahl der Schnittstelle hängt von Geschwindigkeit, Pinzahl, Entfernung, Anzahl der Geräte und vorhandener Hardware ab. Keine der drei Schnittstellen ist grundsätzlich besser. Wichtig ist, die elektrische Ebene und das Protokoll gemeinsam zu betrachten.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
