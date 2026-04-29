---
title: "TWI Clock Stretching als Buswartezeit ruhig einordnen"
description: "Erkläre, warum eine Gegenstelle am TWI-Bus die Taktleitung kurz halten kann und wann daraus erst ein echtes Problem wird."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-twi-clock-stretching-verstehen", "twi-clock-stretching-als-buswartezeit-ruhig-einordnen"]
taskId: "ET-ATM-TWI-301"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum SCL bei einem TWI-Zugriff kurz auf Low bleiben kann, obwohl die Verdrahtung korrekt ist.

## Aufgabe 2

Bewerte diese zwei Fälle kurz:

- Start → Adresse → ACK → kurzes Warten → Daten
- Start → Adresse → ACK → SCL bleibt dauerhaft Low

Beschreibe, welcher Fall noch zu Clock Stretching passt und welcher eher auf ein Busproblem hinweist.

## Aufgabe 3

Warum wäre es fachlich zu grob, jedes Warten auf SCL sofort als Fehler zu bewerten?
