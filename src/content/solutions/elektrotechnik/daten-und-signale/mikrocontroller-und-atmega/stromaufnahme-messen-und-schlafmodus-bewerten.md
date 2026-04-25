---
title: "Lösung – Stromaufnahme und Schlafmodus sinnvoll beurteilen"
description: "Musterlösung zu „Stromaufnahme und Schlafmodus sinnvoll beurteilen“."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "stromaufnahme-messen-und-schlafmodus-bewerten"
taskId: "et-mc-v93-stromaufnahme"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/stromaufnahme-messen-und-schlafmodus-bewerten"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "stromaufnahme"
  - "sleep-mode"
  - "energie"
  - "messung"
draft: false
---
## Lösung zu Aufgabe 1

Möglicherweise bleiben externe Module, LEDs, Sensoren oder Spannungswandler aktiv. Außerdem kann der Controller zu oft oder zu lange aufwachen.

## Lösung zu Aufgabe 2

Batterielaufzeit hängt davon ab, wie viel Ladung über die Zeit entnommen wird. Kurze hohe Ströme können akzeptabel sein, wenn die Schlafphase sehr lang und wirklich sparsam ist.

## Lösung zu Aufgabe 3

Der Strom sollte in Reihe zur Versorgung des gesamten Systems gemessen werden. Danach vergleicht man aktiven Betrieb, Schlafbetrieb und Betrieb mit abgeschalteter Peripherie.
