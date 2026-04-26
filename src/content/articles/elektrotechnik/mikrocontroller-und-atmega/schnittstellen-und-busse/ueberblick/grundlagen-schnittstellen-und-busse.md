---
title: "Grundlagen: Schnittstellen und Busse"
description: "Allgemeiner Überblick über UART, I²C, SPI und die Rolle von Schnittstellen zwischen Mikrocontroller und Peripherie."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - mikrocontroller-und-atmega
  - schnittstellen-und-busse
  - grundlagen-schnittstellen-und-busse
learningGoals:
  - "Du erklärst Schnittstellen als definierte Verbindung zwischen Bausteinen."
  - "Du beschreibst Busse als gemeinsame Kommunikationswege für mehrere Teilnehmer."
  - "Du unterscheidest UART, I²C und SPI grob nach Einsatzidee."
practiceIdeas: []
commonMistakes:
  - "Jede Verbindung zwischen Bauteilen als gleichartig zu behandeln."
  - "Takt, Datenrichtung und Adressierung zu vermischen."
  - "Pegelkompatibilität und gemeinsame Masse zu vergessen."
keyTakeaways:
  - "Schnittstellen legen fest, wie Bausteine Daten austauschen."
  - "UART, I²C und SPI lösen ähnliche Kommunikationsprobleme mit unterschiedlichen Regeln."
  - "Elektrische Grundlagen und Protokollregeln müssen zusammenpassen."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "uart"
  - "i2c"
  - "spi"
draft: false
---

## Begriff

**Schnittstellen** verbinden elektronische Bausteine so, dass sie Daten austauschen können. Bei Mikrocontrollern werden häufig UART, I²C und SPI verwendet. Ein **Bus** ist eine gemeinsame Kommunikationsstruktur, an der mehrere Teilnehmer beteiligt sein können.

Schnittstellen sind wichtig, weil ein Mikrocontroller selten allein arbeitet. Er kommuniziert mit Sensoren, Displays, Speichern, Treibern oder anderen Controllern.

## UART

UART ist eine serielle Punkt-zu-Punkt-Kommunikation ohne gemeinsame Taktleitung. Sender und Empfänger müssen auf dieselbe Baudrate eingestellt sein. UART wird oft für Debugausgaben, einfache Module oder serielle Konsolen verwendet.

## I²C

I²C nutzt typischerweise zwei Leitungen: eine Datenleitung und eine Taktleitung. Mehrere Teilnehmer können am selben Bus hängen. Geräte werden über Adressen angesprochen. Pull-up-Widerstände sind für die Leitungen wichtig.

## SPI

SPI verwendet getrennte Leitungen für Takt, Datenrichtung und Auswahl eines Teilnehmers. Es ist oft schnell und wird für Displays, Speicher oder schnelle Sensoren genutzt. Dafür braucht es meist mehr Leitungen als I²C.

## Elektrische und logische Ebene

Eine Schnittstelle besteht nicht nur aus Software. Pegel, gemeinsame Masse, Leitungslänge, Pull-ups, Taktfrequenz und Störungen beeinflussen, ob Kommunikation zuverlässig funktioniert.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten behandeln konkrete Register, Bibliotheken oder Fehlerbilder. Diese Überblicksseite erklärt den allgemeinen Rahmen: Schnittstellen sind Regeln und elektrische Verbindungen für Datenaustausch zwischen Bausteinen.

<div class="note-panel">
  <p><strong>Merke:</strong> Bei Schnittstellen immer beides prüfen: die Protokollregeln und die elektrische Verbindung.</p>
</div>
