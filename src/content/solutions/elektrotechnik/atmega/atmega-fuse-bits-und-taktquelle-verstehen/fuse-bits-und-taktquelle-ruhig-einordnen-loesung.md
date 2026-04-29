---
title: "Musterlösung – Fuse-Bits und Taktquelle ruhig einordnen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-SYS-301."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-fuse-bits-und-taktquelle-verstehen", "fuse-bits-und-taktquelle-ruhig-einordnen"]
taskId: "ET-ATMEGA-SYS-301"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-fuse-bits-und-taktquelle-verstehen/fuse-bits-und-taktquelle-ruhig-einordnen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Fuse-Bits sind keine normalen Laufzeitvariablen, sondern dauerhafte Startvorgaben für den Controller. Sie legen Grundbedingungen fest, etwa die Taktquelle. Deshalb liest man sie eher als Startkonfiguration des Systems als als normalen Teil des C-Programms.

### Aufgabe 2

Ein ruhiger Prüfweg wäre: zuerst prüfen, ob das Programm grundsätzlich plausibel ist, dann welche Taktquelle die Fuse-Bits voraussetzen, danach ob diese Auswahl zur realen Hardware passt. Erst wenn diese Grundbedingungen stimmen, lohnt sich die nähere Suche im eigentlichen Programmcode.

### Aufgabe 3

Die Aussage ist zu grob, weil die Taktquelle nicht nur eine Feinabstimmung der Geschwindigkeit bestimmt. Wenn die gewählte Quelle grundsätzlich nicht zur Beschaltung passt, wirkt der Controller insgesamt unplausibel oder scheinbar still. Es geht also um eine Grundbedingung des Starts, nicht nur um Komfort.

### Aufgabe 4

Ein möglicher Merksatz lautet:

> Das Flash-Programm beschreibt die Logik, aber Fuse-Bits legen fest, unter welchen Startbedingungen diese Logik überhaupt sinnvoll anlaufen kann.
