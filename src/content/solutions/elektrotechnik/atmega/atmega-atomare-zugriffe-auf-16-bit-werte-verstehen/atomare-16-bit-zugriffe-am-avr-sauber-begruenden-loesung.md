---
title: "Lösung – Atomare 16-Bit-Zugriffe am AVR sauber begründen"
description: "Musterlösung zur Aufgabe über atomare Mehrbyte-Zugriffe zwischen Hauptprogramm und ISR."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-atomare-zugriffe-auf-16-bit-werte-verstehen", "atomare-16-bit-zugriffe-am-avr-sauber-begruenden"]
taskId: "ET-ATMEGA-ISR-403"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-atomare-zugriffe-auf-16-bit-werte-verstehen/atomare-16-bit-zugriffe-am-avr-sauber-begruenden.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Ein gemeinsamer 16-Bit-Wert kann problematischer sein, weil der Zugriff nicht immer in einem einzigen unteilbaren Schritt erfolgt. Zwischen zwei Teilschritten kann eine ISR denselben Wert verändern. Dadurch steigt das Risiko, dass das Hauptprogramm keinen sauberen Gesamtzustand liest. Bei einem 8-Bit-Wert ist dieses Risiko oft geringer, weil der Zugriff einfacher in einem Schritt erfolgen kann.

### Aufgabe 2

Die Aussage ist zu grob, weil `volatile` vor allem die Sichtbarkeit der Zugriffe für den Compiler sichert. Damit ist aber noch nicht garantiert, dass ein 16-Bit-Lesevorgang als ganzer Block konsistent bleibt. Für genau dieses Zugriffsfenster braucht man zusätzlich eine atomare Sicherung.

### Aufgabe 3

Ein Mischwert kann entstehen, wenn das Hauptprogramm zuerst einen Teil des 16-Bit-Werts liest, dann eine ISR den Wert verändert und anschließend der andere Teil gelesen wird. Dann stammen die beiden Teile nicht mehr aus demselben Zeitpunkt. Der Gesamtwert wirkt dadurch unstimmig, obwohl jede Einzeloperation für sich korrekt war.

### Aufgabe 4

Ein möglicher Merksatz lautet:

> `volatile` schützt die Sichtbarkeit einer Variablen, atomar schützt das gesamte Zugriffsfenster.
