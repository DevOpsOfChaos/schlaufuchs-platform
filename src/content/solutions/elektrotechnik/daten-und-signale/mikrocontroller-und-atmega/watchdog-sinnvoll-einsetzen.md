---
title: "Lösung – Watchdog als sinnvollen Fortschrittswächter planen"
description: "Musterlösung zu watchdog als sinnvollen fortschrittswächter planen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "watchdog-sinnvoll-einsetzen"]
taskId: "et-mc-v92-watchdog"
relatedExercise: "src/content/exercises/elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/watchdog-sinnvoll-einsetzen"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Wenn der Watchdog auch in der blockierenden Wartefunktion zurückgesetzt wird, sieht er keinen Unterschied zwischen gesundem Ablauf und Hänger. Der defekte Zustand füttert dann selbst den Wächter. Dadurch verliert der Watchdog seine wichtigste Aufgabe.

## Lösung zu Aufgabe 2

Besser ist eine Stelle am Ende eines plausibel abgeschlossenen Hauptzyklus, zum Beispiel nachdem Eingänge gelesen, Zustände verarbeitet und Ausgänge sicher aktualisiert wurden. Dann bedeutet das Zurücksetzen wirklich: Der Ablauf ist einmal sinnvoll durchgelaufen.

## Lösung zu Aufgabe 3

Wichtig sind sichere Ausgangszustände nach dem Neustart und eine Strategie gegen Reset-Schleifen. Außerdem kann es hilfreich sein, die Resetursache zu merken oder eine Kommunikation zunächst kontrolliert neu aufzubauen.
