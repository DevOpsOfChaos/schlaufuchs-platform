---
title: "Lösung – Sleep-Mode für einen Batteriesensor planen"
description: "Musterlösung zu sleep-mode für einen batteriesensor planen."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - sleep-mode-und-wecken-planen
taskId: "et-mc-v92-sleep-mode"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/sleep-mode-und-wecken-planen"
tags:
  - elektrotechnik
  - mikrocontroller
  - sleep-mode
  - energie
  - interrupt
  - batterie
draft: false
---

## Lösung zu Aufgabe 1

Ein sinnvoller Ablauf ist: aufwachen, Sensor und benötigte Peripherie einschalten, kurz stabilisieren lassen, Messwert erfassen, Daten senden, Peripherie wieder abschalten, Weckquelle für den nächsten Zyklus aktivieren und in den passenden Sleep-Mode gehen.

## Lösung zu Aufgabe 2

Typische Fehler sind: ein Funkmodul oder Sensor bleibt dauerhaft eingeschaltet, eine LED leuchtet weiter, ein Spannungsregler hat hohen Ruhestrom oder der gewählte Sleep-Mode hält unnötige Peripherie aktiv.

## Lösung zu Aufgabe 3

Ohne Weckquelle kann der Controller nicht zuverlässig in den nächsten Ablaufzustand zurückkehren. Außerdem muss die gewählte Weckquelle im jeweiligen Schlafmodus überhaupt funktionieren. Sleep ohne Weckplan ist keine robuste Ablaufsteuerung.
