---
title: "Grundlagen: I2C, SPI und UART in der Fehlersuche"
description: "Allgemeiner Überblick über typische Fehlersuchschritte bei seriellen Schnittstellen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "schnittstellen-und-busse", "i2c-spi-uart-fehlersuche", "ueberblick", "grundlagen-i2c-spi-uart-fehlersuche"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller und ATmega"]
draft: false
---
![Schnittstellen systematisch prüfen](/schlaufuchs-platform/images/overviews/v181/i2c-spi-uart-fehlersuche.svg)

## Überblick

**I2C, SPI und UART in der Fehlersuche** ist ein Querschnittsthema der Elektrotechnik. Es hilft, Schaltungen nicht nur als Sammlung einzelner Bauteile zu sehen, sondern als geordneten Zusammenhang aus Ursache, Wirkung, Grenze und Prüfung.

Die Seite ist bewusst allgemein angelegt. Sie soll Orientierung geben, bevor einzelne Aufgaben, Messsituationen oder Spezialfälle bearbeitet werden.

## Grundidee

Wenn Kommunikation nicht funktioniert, muss nicht sofort der Code falsch sein. Adresse, Masse, Pull-ups, Baudrate oder Chip-Select können genauso relevant sein.

Wichtig ist dabei, nicht nur den sichtbaren Einzelzustand zu betrachten. In der Elektrotechnik entstehen viele Fehler dadurch, dass Strompfade, Bezugspunkte, Grenzwerte oder zeitliche Abläufe nicht gemeinsam gelesen werden.

## Wichtige Begriffe

- **I2C**: wichtiger Begriff im Zusammenhang mit I2C, SPI und UART in der Fehlersuche.
- **SPI**: wichtiger Begriff im Zusammenhang mit I2C, SPI und UART in der Fehlersuche.
- **UART**: wichtiger Begriff im Zusammenhang mit I2C, SPI und UART in der Fehlersuche.
- **Fehlersuche**: wichtiger Begriff im Zusammenhang mit I2C, SPI und UART in der Fehlersuche.

Diese Begriffe sind keine isolierten Vokabeln. Sie beschreiben Rollen innerhalb einer Schaltung oder eines Messablaufs.

## Typische Denkweise

Eine gute Prüfung beginnt meist mit drei Fragen:

1. Welcher Zustand ist im Normalfall erwartet?
2. Welcher Fehlerfall soll erkannt oder verhindert werden?
3. Welche Grenze darf im Betrieb nicht überschritten werden?

Erst danach lohnt sich der Blick auf konkrete Zahlen, Bauteile oder Codeausschnitte.

## Typische Missverständnisse

- Alle Schnittstellen mit denselben Prüfschritten zu behandeln.
- Masseverbindung und Pegel zu vergessen.
- Busadresse, Datenbyte und Taktung zu vermischen.

## Beispiel

Wenn Kommunikation nicht funktioniert, muss nicht sofort der Code falsch sein. Adresse, Masse, Pull-ups, Baudrate oder Chip-Select können genauso relevant sein.

Das Beispiel zeigt: Die fachliche Frage ist selten nur „welches Bauteil wird benutzt?“. Entscheidend ist, welche Aufgabe das Bauteil im System erfüllt.

## Abgrenzung

Diese Überblicksseite ersetzt keine Detailseite. Einzelne Seiten können konkrete Rechnungen, Schaltbilder, Messungen oder Programmbeispiele behandeln. Hier geht es um den gemeinsamen Rahmen: Begriff, Zweck, Zusammenhang und typische Fehlerquellen.

## Merksätze

- Schnittstellenfehler werden systematisch eingegrenzt.
- Jede Schnittstelle hat eigene Grundbedingungen.
- Elektrische Ebene und Protokollebene gehören zusammen.
