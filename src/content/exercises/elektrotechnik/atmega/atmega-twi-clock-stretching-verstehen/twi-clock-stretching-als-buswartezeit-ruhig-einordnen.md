---
title: TWI Clock Stretching als Buswartezeit ruhig einordnen
description: Erkläre, warum eine Gegenstelle am TWI-Bus die Taktleitung kurz halten kann und wann daraus erst ein echtes Problem wird.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-clock-stretching-verstehen
  - twi-clock-stretching-als-buswartezeit-ruhig-einordnen
taskId: ET-ATM-TWI-301
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - twi
hintPoints:
  - Lies SCL als gemeinsame Busleitung und nicht nur als festen Masterausgang.
  - Achte darauf, ob der Bus danach weiterläuft oder dauerhaft stehen bleibt.
selfCheckPoints:
  - Kannst du kurzes Warten und echten Busstillstand unterscheiden?
  - Kannst du erklären, warum ein langsamer Slave Zeit brauchen könnte?
transferIdeas:
  - Übertrage die Idee auf Sensoren, Displays oder EEPROMs am I²C-Bus.
reflectionPrompt: "Welche Beobachtung zeigt dir am ehesten, dass der Bus nur wartet statt festzuhängen?"
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
