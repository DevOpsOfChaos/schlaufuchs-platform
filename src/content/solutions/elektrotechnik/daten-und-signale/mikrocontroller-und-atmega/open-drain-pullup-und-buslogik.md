---
title: "Lösung – Open-Drain-Buslogik mit Pull-up erklären"
description: "Musterlösung zu „Open-Drain-Buslogik mit Pull-up erklären“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "open-drain-pullup-und-buslogik"]
taskId: "et-mc-v93-open-drain"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/open-drain-pullup-und-buslogik"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Ohne Pull-up gibt es keinen definierten Weg nach High. Die Leitung kann schweben und zufällige oder störanfällige Pegel liefern.

## Lösung zu Aufgabe 2

Alle Teilnehmer ziehen nur nach Low. Dadurch kämpfen sie nicht gegeneinander um High und Low. Sobald niemand zieht, erzeugt der Pull-up den High-Zustand.

## Lösung zu Aufgabe 3

Eine zu hohe Pull-up-Spannung kann Eingänge überlasten. Eine zu niedrige Spannung kann von manchen Teilnehmern nicht sicher als High erkannt werden.
