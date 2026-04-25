---
title: Musterlösung – TWI-Repeated-Start ruhig einordnen
description: Musterlösung zur Aufgabe ET-ATMEGA-TWI-306.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-repeated-start-verstehen
  - twi-repeated-start-ruhig-einordnen-loesung
taskId: ET-ATMEGA-TWI-306
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-twi-repeated-start-verstehen/twi-repeated-start-ruhig-einordnen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - twi
  - loesung
draft: false
---

## Aufgabe 1

Ein Stop beendet eine laufende TWI-Transaktion. Ein Repeated Start hält die Buskontrolle dagegen in einer zusammenhängenden Transaktion und leitet die nächste Phase ein. Beide sind daher nicht dieselbe strukturelle Aussage.

## Aufgabe 2

Weil zunächst vorbereitet wird, welches Register gemeint ist, und danach genau dieses Register ausgelesen wird. Schreiben und Lesen gehören hier fachlich zusammen und bilden gemeinsam einen ruhigen Gesamtzugriff.

## Aufgabe 3

Die Busfolge beschreibt eine typische Registertransaktion: Erst wird per Write die Registeradresse gesetzt, danach wird mit Repeated Start in die Lesephase gewechselt. Erst am Ende schließt der Stop die gesamte Folge ab.

## Aufgabe 4

Ein möglicher Merksatz lautet:

> Repeated Start bedeutet nicht einfach neu anfangen, sondern dieselbe TWI-Transaktion strukturiert fortsetzen.
