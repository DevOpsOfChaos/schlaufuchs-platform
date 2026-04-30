---
title: "Lösung – Eingang mit Pull-Widerstand und Schutzgedanke bewerten"
description: "Musterlösung zu „Eingang mit Pull-Widerstand und Schutzgedanke bewerten“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "pullup-pulldown-und-eingangsschutz"]
taskId: "et-mc-v94-pullup-pulldown-schutz"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/pullup-pulldown-und-eingangsschutz"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Es fehlt ein definierter Ruhezustand, zum Beispiel durch einen Pull-down gegen Masse. Sonst kann der Eingang zufällig High oder Low lesen.

## Lösung zu Aufgabe 2

Ein Pull-up legt den offenen Eingang auf High, ein Pull-down auf Low. Je nach Verdrahtung ist das Ereignis der Wechsel nach Low oder nach High.

## Lösung zu Aufgabe 3

Ein Pull-Widerstand definiert vor allem einen Pegel. Eingangsschutz muss zusätzlich prüfen, ob Spannung und Strom innerhalb zulässiger Grenzen bleiben.
