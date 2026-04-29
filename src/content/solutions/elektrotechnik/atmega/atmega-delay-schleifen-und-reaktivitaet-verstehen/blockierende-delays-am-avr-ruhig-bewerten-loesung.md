---
title: "Musterlösung – Blockierende Delays am AVR ruhig bewerten"
description: "Musterlösung zur Aufgabe ET-ATMEGA-STRUKTUR-308."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-delay-schleifen-und-reaktivitaet-verstehen", "blockierende-delays-am-avr-ruhig-bewerten"]
taskId: "ET-ATMEGA-STRUKTUR-308"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-delay-schleifen-und-reaktivitaet-verstehen/blockierende-delays-am-avr-ruhig-bewerten.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Aufgabe 1

Ein langes Delay blockiert die normale Weiterarbeit der Hauptschleife. Während dieser Zeit werden andere Prüfungen oder Reaktionen oft gar nicht oder nur verspätet ausgeführt. Genau deshalb sinkt die Reaktivität des Programms.

## Aufgabe 2

Die LED blinkt zwar wie geplant, aber der Taster wird nur an bestimmten Zeitpunkten geprüft. Wenn dazwischen ein langer Delay-Block liegt, kann die Eingabe verspätet oder unruhig wirken. Das Problem liegt also nicht nur an der Funktion des Tasters, sondern an der Struktur des Programms.

## Aufgabe 3

Der AVR ist oft nicht „zu langsam“, sondern das Programm ist zu blockierend aufgebaut. Die Zeit wird in langen Wartephasen verbraucht, in denen andere Aufgaben nicht mehr sauber mitlaufen. Das ist eher eine Struktur- als eine reine Geschwindigkeitsfrage.

## Aufgabe 4

Möglicher Merksatz:

> Ein langes Delay blockiert die Hauptschleife und verschlechtert dadurch oft die Reaktion auf andere Ereignisse.
