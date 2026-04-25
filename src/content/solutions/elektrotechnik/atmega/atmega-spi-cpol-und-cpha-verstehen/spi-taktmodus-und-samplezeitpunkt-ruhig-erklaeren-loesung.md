---
title: Musterlösung – SPI-Taktmodus und Samplezeitpunkt ruhig erklären
description: Musterlösung zur Aufgabe ET-ATMEGA-SPI-302.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-cpol-und-cpha-verstehen
  - spi-taktmodus-und-samplezeitpunkt-ruhig-erklaeren-loesung
taskId: ET-ATMEGA-SPI-302
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-spi-cpol-und-cpha-verstehen/spi-taktmodus-und-samplezeitpunkt-ruhig-erklaeren.md
tags:
  - elektrotechnik
  - atmega
  - spi
  - loesung
draft: false
---

## Aufgabe 1

CPOL beschreibt die Ruhelage des Taktsignals. CPHA beschreibt, an welcher Taktkante das zeitliche Übernehmen oder Verschieben der Daten orientiert wird. Die eine Größe betrifft also den Grundzustand des Takts, die andere das Timing innerhalb eines Bitfensters.

## Aufgabe 2

Wenn der Modus nicht passt, liest ein Gerät Daten möglicherweise genau in dem Moment ein, in dem das andere sie noch umstellt. Dann ist die Verdrahtung zwar richtig, aber das gemeinsame Timingverständnis nicht. Genau dadurch wirken empfangene Daten instabil oder verschoben.

## Aufgabe 3

Ein möglicher Merksatz ist:

> CPOL sagt, wie der Takt ruht; CPHA sagt, an welcher Kante Daten gültig übernommen werden.

## Aufgabe 4

Eine ruhige Prüfstrategie wäre zum Beispiel:

1. Ruhelage von SCK prüfen.
2. Gewünschte Abtastkante des Gegenübers klären.
3. Sicherstellen, wann der Sender Daten ändert.
4. Erst danach den passenden SPI-Modus im Register wählen.
