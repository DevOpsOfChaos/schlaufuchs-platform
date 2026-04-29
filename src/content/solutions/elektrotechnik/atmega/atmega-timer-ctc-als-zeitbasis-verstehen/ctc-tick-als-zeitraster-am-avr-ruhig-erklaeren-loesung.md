---
title: "Musterlösung – CTC-Tick als Zeitraster am AVR ruhig erklären"
description: "Musterlösung zur Aufgabe ET-ATM-TMR-301."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-timer-ctc-als-zeitbasis-verstehen", "ctc-tick-als-zeitraster-am-avr-ruhig-erklaeren"]
taskId: "ET-ATM-TMR-301"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-timer-ctc-als-zeitbasis-verstehen/ctc-tick-als-zeitraster-am-avr-ruhig-erklaeren.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Der CTC-Modus passt gut zu periodischen Aufgaben, weil er einen wiederkehrenden Vergleichspunkt liefert. Daraus kann ein klarer Tick entstehen, an dem regelmäßig Aufgaben geprüft oder ausgelöst werden. Der Timer wird damit nicht nur zum Zählen genutzt, sondern als geordnete Zeitbasis. Das ist besonders nützlich, wenn Abläufe in festen Abständen stattfinden sollen.

## Aufgabe 2

Ein fester Tick ist oft ruhiger planbar, weil mehrere Aufgaben an demselben Zeitraster ausgerichtet werden können. Delay-Schleifen blockieren dagegen oft einzeln und unübersichtlich. Dadurch wird Zeitplanung schneller unruhig und schwerer erweiterbar.

## Aufgabe 3

Ein möglicher Merksatz ist:

> Ein fester Compare-Wert macht den Timer zu einer periodischen Zeitbasis für wiederkehrende Aufgaben.
