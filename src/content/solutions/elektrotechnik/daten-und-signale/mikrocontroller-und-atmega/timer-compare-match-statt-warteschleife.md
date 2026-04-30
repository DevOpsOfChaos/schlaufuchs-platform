---
title: "Lösung – Compare Match als Timerereignis erklären"
description: "Musterlösung zur Abgrenzung von Compare Match, Überlauf und Warteschleife."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "timer-compare-match-statt-warteschleife"]
taskId: "et-mc-timer-compare-match"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/timer-compare-match-statt-warteschleife"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Compare Match passiert, wenn der Timerstand den Vergleichswert erreicht. In diesem Beispiel entsteht das Ereignis, sobald der Timer bei 200 angekommen ist. Danach kann ein Flag gesetzt oder ein Interrupt ausgelöst werden.

## Lösung zu Aufgabe 2

Ein Überlauf passiert am Ende des Zählbereichs, wenn der Timer wieder von vorne beginnt. Compare Match passiert bei einem eingestellten Vergleichswert, der auch deutlich vor dem Maximalwert liegen kann.

## Lösung zu Aufgabe 3

Eine Warteschleife hängt von der Laufzeit des Programms ab. Wenn zusätzlicher UART-Code dazukommt, verändert sich die Zeit bis zum nächsten LED-Wechsel. Ein Hardware-Timer zählt unabhängiger von der Hauptschleife und liefert über Compare Match einen stabileren Zeitpunkt.
