---
title: "Globale und lokale Interruptfreigabe trennen"
description: "Erkläre, warum eine Interruptquelle am ATmega lokal aktiv und trotzdem global noch gesperrt sein kann."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-sei-cli-und-globale-interruptfreigabe-verstehen", "globale-und-lokale-interruptfreigabe-trennen"]
taskId: "ET-ATMEGA-INT-307"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1

Erkläre in 2 bis 4 Sätzen den Unterschied zwischen lokaler Interruptfreigabe und globaler Interruptfreigabe am ATmega.

## Aufgabe 2

Warum kann eine korrekt konfigurierte Interruptquelle trotzdem scheinbar nichts auslösen?

## Aufgabe 3

Ordne die Rollen von `sei` und `cli` in einem kurzen Satz jeweils sauber ein.

## Aufgabe 4

Formuliere einen ruhigen Diagnoseweg für diesen Fall:

> Der Timer ist eingerichtet, das zugehörige Interrupt-Bit ist gesetzt, aber die ISR läuft nicht.
