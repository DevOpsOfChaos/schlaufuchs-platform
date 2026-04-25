---
title: "Watchdog als sinnvollen Fortschrittswächter planen"
description: "Übe, Watchdog-Reset nicht als beliebigen Timertrick, sondern als Robustheitskonzept zu verstehen."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - watchdog-sinnvoll-einsetzen
selfCheckPoints:
  - "Habe ich eine sinnvolle Stelle für das Watchdog-Lebenszeichen genannt?"
  - "Habe ich Fehlerursache und Neustart getrennt?"
  - "Habe ich einen sicheren Wiederanlauf bedacht?"
taskId: "et-mc-v92-watchdog"
tags:
  - elektrotechnik
  - mikrocontroller
  - watchdog
  - robustheit
  - reset
  - fehlersuche
hintPoints:
  - "Der Watchdog soll nicht den defekten Zustand selbst bestätigen."
  - "Lebenszeichen gehören an Stellen mit abgeschlossenem Zyklus."
  - "Nach einem Reset müssen Ausgänge wieder sicher initialisiert werden."
transferIdeas:
  - "Übertrage das Prinzip auf eine Wetterstation, die regelmäßig Messwerte sendet."
  - "Formuliere eine Regel, wann ein Watchdog nicht helfen kann."
reflectionPrompt: "Wann würde ein Watchdog einen Fehler verdecken statt sichtbar machen?"
level: mittel
draft: false
---

## Aufgabe 1: Situation lesen

Ein Programm setzt den Watchdog in jeder Funktion zurück, auch während es auf eine Sensorantwort wartet. Erkläre, warum das problematisch ist.

## Aufgabe 2: Entscheidung begründen

Schlage eine bessere Stelle vor, an der der Watchdog zurückgesetzt werden sollte. Begründe deine Wahl.

## Aufgabe 3: Prüfung formulieren

Nenne zwei Punkte, die nach einem Watchdog-Reset für einen sicheren Wiederanlauf wichtig sind.
