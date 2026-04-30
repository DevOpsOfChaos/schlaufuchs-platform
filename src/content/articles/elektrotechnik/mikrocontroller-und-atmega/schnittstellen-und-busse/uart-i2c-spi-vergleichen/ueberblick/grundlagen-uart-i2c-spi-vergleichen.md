---
title: "Grundlagen: UART, I2C und SPI vergleichen"
description: "Allgemeiner Überblick über typische Mikrocontroller-Schnittstellen und ihre Unterschiede."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "schnittstellen-und-busse", "uart-i2c-spi-vergleichen", "ueberblick", "grundlagen-uart-i2c-spi-vergleichen"]
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
## Begriff

Mikrocontroller kommunizieren mit anderen Bausteinen über Schnittstellen. Besonders häufig begegnen **UART**, **I2C** und **SPI**. Alle übertragen Daten, unterscheiden sich aber deutlich in Leitungen, Rollen und Ablauf.

![UART, I2C und SPI vergleichen](/schlaufuchs-platform/images/overviews/elektrotechnik/uart-i2c-spi-vergleichen.svg)

## Warum ein Vergleich wichtig ist

Viele Fehler entstehen, wenn alle Schnittstellen nur als „Datenleitung“ gedacht werden. In Wirklichkeit hat jedes Verfahren eigene Regeln: Wer startet die Übertragung? Welche Leitung trägt den Takt? Wie werden mehrere Teilnehmer unterschieden?

## UART

UART ist eine serielle Punkt-zu-Punkt-Verbindung. Typisch sind TX und RX. Beide Seiten müssen gemeinsame Einstellungen wie Baudrate und Frameformat verwenden. Ein separater Takt wird nicht übertragen.

## I2C

I2C nutzt typischerweise zwei Leitungen: Daten und Takt. Mehrere Geräte können am Bus hängen und werden über Adressen angesprochen. Pull-up-Widerstände gehören zur Grundidee des Busses.

## SPI

SPI arbeitet meist mit separaten Leitungen für Takt, Datenrichtung und Geräteauswahl. Ein Chip-Select-Signal legt fest, welches Gerät gerade angesprochen wird. SPI ist oft schnell, braucht aber mehr Leitungen.

## Häufige Missverständnisse

UART-TX und RX müssen passend gekreuzt werden. I2C funktioniert ohne passende Pull-ups nicht zuverlässig. Bei SPI darf Chip-Select nicht als nebensächliche Zusatzleitung behandelt werden.

## Abgrenzung

Diese Seite ordnet Schnittstellen allgemein. Detailseiten können Adressierung, Pegel, Timing, Fehlersuche oder konkrete Bibliotheksnutzung behandeln.

<div class="note-panel">
  <p><strong>Merke:</strong> Schnittstellen unterscheiden sich nicht nur im Namen, sondern in Rollen, Leitungen und Zeitabsprachen.</p>
</div>
