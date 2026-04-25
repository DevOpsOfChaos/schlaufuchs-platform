---
title: Master und Slave am SPI ruhig zuordnen
description: Ordne in kleinen AVR-SPI-Fällen sauber zu, wer den Ablauf bestimmt und wer darauf reagiert.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-master-und-slave-unterscheiden
  - master-und-slave-am-spi-ruhig-zuordnen
taskId: ET-ATMEGA-SPI-302
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - spi
  - avr
hintPoints:
  - Frage zuerst, wer den Takt liefert.
  - Lies Master nicht nur als Sender, sondern als steuernde Rolle.
selfCheckPoints:
  - Kannst du erklären, warum ein lesender AVR trotzdem Master sein kann?
  - Kannst du Takt, Auswahl und Antwortverhalten sauber trennen?
transferIdeas:
  - Übertrage die Logik auf Display, ADC oder Speicherbaustein.
reflectionPrompt: "Welche Leitfrage verhindert bei SPI-Master und -Slave die meisten Denkfehler?"
---

## Aufgabe 1

Ein AVR wählt einen ADC-Baustein aus, liefert den Takt und liest Messdaten zurück.

Erkläre, warum der AVR trotzdem Master ist, obwohl er gerade Daten einliest.

## Aufgabe 2

Beschreibe in 2 bis 4 Sätzen, welche Rolle der Slave in diesem Ablauf hat.

## Aufgabe 3

Warum wäre die Aussage „Master bedeutet einfach nur senden“ zu grob?

## Aufgabe 4

Schreibe eine kurze Merkhilfe auf, mit der du bei SPI zuerst Master und Slave zuordnest.
