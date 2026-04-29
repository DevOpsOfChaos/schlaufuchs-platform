---
title: "Lösung – Startzustand von Ausgängen sicher planen"
description: "Musterlösung zu „Startzustand von Ausgängen sicher planen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "sicherer-startzustand-bei-mikrocontroller-ausgaengen"]
taskId: "et-mc-v94-startzustand-ausgaenge"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/sicherer-startzustand-bei-mikrocontroller-ausgaengen"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Mögliche Ursachen sind ein hochohmiger Pin während Reset, ein offener Treibereingang, ein Bootloader-Impuls oder eine ungünstige Reihenfolge beim Setzen von PORT und DDR.

## Lösung zu Aufgabe 2

Der Pull-down legt den Treibereingang auf Low, solange der Mikrocontroller ihn noch nicht aktiv steuert. Dadurch bleibt der Aktor in der Resetphase aus.

## Lösung zu Aufgabe 3

Zuerst wird der sichere PORT-Pegel vorbereitet, danach wird der Pin als Ausgang geschaltet. Zusätzlich sollte die externe Beschaltung sicherstellen, dass der Treiber vorher nicht schaltet.
