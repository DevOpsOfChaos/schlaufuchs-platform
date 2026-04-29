---
title: "Lösung – Input Capture als Zeitmarke am AVR erklären"
description: "Musterlösung zur Aufgabe über Input Capture und Signalzeitmarken am AVR."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-input-capture-grundidee-verstehen", "input-capture-als-zeitmarke-am-avr-erklaeren"]
taskId: "ET-ATMEGA-TIMER-402"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-input-capture-grundidee-verstehen/input-capture-als-zeitmarke-am-avr-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Der Timer läuft im Hintergrund ständig weiter und bildet die aktuelle Zeitbasis. Die Signalflanke markiert den fachlich interessanten Moment, also den Augenblick, an dem gemessen werden soll. Der Capture-Wert ist dann der genau in diesem Moment festgehaltene Timerstand. Genau dadurch wird aus dem Ereignis eine sauber speicherbare Zeitmarke.

### Aufgabe 2

Polling ist unruhiger, weil das Programm nur in Abständen nach dem Signal sieht. Zwischen dem eigentlichen Ereignis und dem Nachsehen vergeht also Zeit. Input Capture hält den Timerstand direkt am Ereignis fest und reduziert genau diese Unsicherheit.

### Aufgabe 3

Ein möglicher Satz lautet:

> Bei einer Signalflanke wird der aktuelle Timerstand als Zeitmarke gespeichert.

### Aufgabe 4

Ein typischer Einsatzfall ist die Messung einer Pulsbreite. Dort ist wichtig, wann eine Flanke beginnt und wann eine andere endet. Input Capture hilft, diese Zeitpunkte präziser festzuhalten als bloßes Nachsehen im Hauptprogramm.
