---
title: "Lösung – MOSFET-Schalter und Freilaufdiode beurteilen"
description: "Musterlösung zu „MOSFET-Schalter und Freilaufdiode beurteilen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "mosfet-low-side-schalter-und-freilaufdiode"]
taskId: "et-mc-v94-mosfet-low-side"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/mosfet-low-side-schalter-und-freilaufdiode"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Der GPIO ist nur begrenzt belastbar. Ein Relais braucht meist mehr Strom als der Pin liefern darf und erzeugt beim Abschalten eine Spannungsspitze. Dadurch können Pin, Controller oder Versorgung gestört werden.

## Lösung zu Aufgabe 2

Der GPIO steuert das Gate des MOSFETs. Der Laststrom läuft von der Versorgung durch das Relais und den MOSFET nach Masse. Parallel zur Spule liegt eine Freilaufdiode, die beim Abschalten die induzierte Spannung begrenzt.

## Lösung zu Aufgabe 3

Sinnvoll sind eine Kontrolle der Freilaufdiode und der Versorgungseinbrüche. Zusätzlich sollte geprüft werden, ob Masseführung und Abblockkondensatoren nahe an Controller und Last sauber ausgeführt sind.
