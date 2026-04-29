---
title: "Watchdog als sinnvollen Fortschrittswächter planen"
description: "Übe, Watchdog-Reset nicht als beliebigen Timertrick, sondern als Robustheitskonzept zu verstehen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "watchdog-sinnvoll-einsetzen"]
taskId: "et-mc-v92-watchdog"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Situation lesen

Ein Programm setzt den Watchdog in jeder Funktion zurück, auch während es auf eine Sensorantwort wartet. Erkläre, warum das problematisch ist.

## Aufgabe 2: Entscheidung begründen

Schlage eine bessere Stelle vor, an der der Watchdog zurückgesetzt werden sollte. Begründe deine Wahl.

## Aufgabe 3: Prüfung formulieren

Nenne zwei Punkte, die nach einem Watchdog-Reset für einen sicheren Wiederanlauf wichtig sind.
