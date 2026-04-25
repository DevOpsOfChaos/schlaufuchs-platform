---
title: SPI-Leitungen und Geräteauswahl ruhig erklären
description: Erkläre an kleinen SPI-Fällen, welche Leitungen welche Rolle übernehmen und warum die Geräteauswahl wichtig ist.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-grundidee-verstehen
  - spi-leitungen-und-geraeteauswahl-ruhig-erklaeren
taskId: ET-ATMEGA-SPI-301
level: einfach
draft: false
tags:
  - elektrotechnik
  - atmega
  - spi
  - avr
hintPoints:
  - Lies SPI zuerst als Bündel aus Leitungen mit klaren Rollen.
  - Frage immer auch, welches Gerät gerade aktiv ausgewählt ist.
selfCheckPoints:
  - Kannst du MOSI, MISO, SCK und SS fachlich trennen?
  - Kannst du erklären, warum SS nicht bloß „noch ein Pin“ ist?
transferIdeas:
  - Übertrage die Logik auf Display, Speicherbaustein oder ADC-Modul.
reflectionPrompt: "Welche Leitfrage verhindert bei SPI die meisten Richtungsfehler?"
---

## Aufgabe 1

Nenne die vier typischen SPI-Leitungen und beschreibe zu jeder in einem kurzen Satz ihre Rolle.

## Aufgabe 2

Ein AVR sendet ein Byte an einen Display-Baustein. Erkläre, warum dazu nicht nur eine Datenleitung, sondern auch Takt und Geräteauswahl wichtig sind.

## Aufgabe 3

Formuliere in 2 bis 4 Sätzen den Unterschied zwischen MOSI und MISO aus Sicht des AVR.

## Aufgabe 4

Warum ist die SS-Leitung wichtig, wenn mehrere Bausteine an derselben SPI-Struktur hängen?

## Aufgabe 5

Schreibe eine kurze Merkhilfe auf, mit der du bei SPI zuerst die Leitungsrollen sortierst.
