---
title: "Musterlösung – Stack und Rücksprung am AVR erklären"
description: "Musterlösung zur Aufgabe ET-ATMEGA-STK-210."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-stack-und-funktionsaufrufe-verstehen", "stack-und-ruecksprung-am-avr-erklaeren"]
taskId: "ET-ATMEGA-STK-210"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-stack-und-funktionsaufrufe-verstehen/stack-und-ruecksprung-am-avr-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Ein Funktionsaufruf ist mehr als nur ein Sprung, weil der AVR danach auch wieder an die richtige Stelle zurückkehren muss. Dazu reicht es nicht, nur den Unterprogrammcode auszuführen. Der Ablauf vor dem Aufruf und die Rückkehr danach müssen organisatorisch sauber zusammengehalten werden.

### Aufgabe 2

Der Stack organisiert beim AVR wichtige Ablaufinformationen, damit Funktionsaufrufe und Rücksprünge geordnet bleiben.

### Aufgabe 3

Ohne gesicherte Rücksprungstelle wäre unklar, an welcher Stelle des Hauptprogramms nach dem Unterprogramm weitergemacht werden soll. Das Programm könnte dann nicht zuverlässig in seinen ursprünglichen Ablauf zurückfinden.

### Aufgabe 4

Bei verschachtelten Aufrufen gibt es mehrere Rücksprungstellen gleichzeitig. Diese müssen in einer sauberen Reihenfolge verwaltet werden. Genau deshalb wird der Stack bei mehreren Aufrufebenen besonders wichtig.

### Aufgabe 5

Die Aussage ist zu grob, weil der Stack zwar ein Speicherbereich ist, aber mit einer sehr konkreten Ablaufrolle. Schon normale Funktionsaufrufe zeigen, dass Rücksprungstellen organisiert werden müssen. Der Stack ist also nicht nur „irgendein RAM-Bereich“, sondern ein wichtiger Teil des geordneten Programmablaufs.
