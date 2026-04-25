---
title: "Sleep-Mode für einen Batteriesensor planen"
description: "Übe, Energiesparen als Zustandsablauf mit Weckquelle und Peripherie zu entwerfen."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - sleep-mode-und-wecken-planen
selfCheckPoints:
  - "Habe ich Schlafen und Wecken als Zustandspaar beschrieben?"
  - "Habe ich Peripherie und nicht nur die CPU betrachtet?"
  - "Habe ich eine plausible Weckquelle genannt?"
taskId: "et-mc-v92-sleep-mode"
tags:
  - elektrotechnik
  - mikrocontroller
  - sleep-mode
  - energie
  - interrupt
  - batterie
hintPoints:
  - "Ein schlafender Controller braucht eine aktive Weckmöglichkeit."
  - "Funkmodule und LEDs können mehr Strom verbrauchen als der Controller."
  - "Nach dem Wecken muss der Ablauf wissen, was als Nächstes passiert."
transferIdeas:
  - "Übertrage den Ablauf auf einen Türsensor."
  - "Vergleiche ein dauerhaft aktives Gerät mit einem zyklisch schlafenden Gerät."
reflectionPrompt: "Welche Komponente würdest du bei einem Batteriegerät zuerst auf Stromverbrauch prüfen?"
level: mittel
draft: false
---

## Aufgabe 1: Situation lesen

Ein Sensor soll im Batteriebetrieb nur alle zehn Minuten messen und senden. Beschreibe einen sinnvollen Ablauf aus Wachphase, Messung, Übertragung und Schlafphase.

## Aufgabe 2: Entscheidung begründen

Nenne zwei Fehler, durch die Sleep-Mode kaum Energie spart, obwohl der Controller tatsächlich schläft.

## Aufgabe 3: Prüfung formulieren

Erkläre, warum die Weckquelle vor dem Einschlafen feststehen muss.
