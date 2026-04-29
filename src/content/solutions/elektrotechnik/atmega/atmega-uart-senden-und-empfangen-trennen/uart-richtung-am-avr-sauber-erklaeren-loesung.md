---
title: "Musterlösung – UART-Richtung am AVR sauber erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-UART-305."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-uart-senden-und-empfangen-trennen", "uart-richtung-am-avr-sauber-erklaeren"]
taskId: "ET-ATMEGA-UART-305"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-uart-senden-und-empfangen-trennen/uart-richtung-am-avr-sauber-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Das ist ein Sende-Fall, weil das Zeichen im AVR entsteht und von dort nach außen laufen soll. Aus Sicht des Controllers geht die Information also über die serielle Ausgangsrichtung hinaus.

### Aufgabe 2

Das ist ein Empfangs-Fall, weil das Zeichen außerhalb des AVR entsteht und in den Controller hineinkommt. Das Hauptprogramm holt also später eine von außen kommende Information ab.

### Aufgabe 3

TX beschreibt die Richtung vom Controller nach außen. RX beschreibt die Richtung von außen in den Controller hinein. Beide gehören zur selben UART-Schnittstelle, aber sie stehen für zwei verschiedene Datenwege.

### Aufgabe 4

Eine ruhige Merkhilfe wäre zum Beispiel:

> Wo startet das Zeichen – im AVR oder außerhalb?
