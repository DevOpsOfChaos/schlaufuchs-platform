---
title: "Musterlösung – SPI-Timing und Lesemoment ruhig einordnen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-SPI-304."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-spi-taktflanke-und-sampling-verstehen", "spi-timing-und-lesemoment-ruhig-einordnen"]
taskId: "ET-ATMEGA-SPI-304"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-spi-taktflanke-und-sampling-verstehen/spi-timing-und-lesemoment-ruhig-einordnen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Der Sender ändert ein Bit zu einem bestimmten Zeitpunkt auf der Leitung. Der Empfänger übernimmt dieses Bit zu einem eigenen Lesemoment. Beides darf nicht gedanklich zusammenfallen, weil ein Bit idealerweise erst dann gelesen wird, wenn es stabil anliegt. Genau dadurch wird aus einem Taktverfahren ein ruhiger und verlässlicher Übertragungsablauf.

## Aufgabe 2

Auch bei richtiger Verdrahtung kann ein Timing-Problem entstehen, wenn Daten an einer unpassenden Taktflanke gelesen werden. Dann sind die Leitungen zwar korrekt angeschlossen, aber der zeitliche Bezug zwischen Ändern und Lesen passt nicht. Das Ergebnis sind instabile oder falsche Daten.

## Aufgabe 3

Die Moduszahl ist nur die kompakte Abkürzung für einen zeitlichen Ablauf. Wer nur die Nummer kennt, aber nicht weiß, wann Bits geändert und gelesen werden, kann Fehler kaum ruhig einordnen. Darum sollte zuerst der Timing-Blick verstanden werden.

## Aufgabe 4

Möglicher Merksatz:

> Ein Bit sollte an der gewählten Flanke nur dann übernommen werden, wenn es in diesem Moment stabil anliegt.
