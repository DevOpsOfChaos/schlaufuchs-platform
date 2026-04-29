---
title: "PWM-Frequenz und Auflösung"
description: "Allgemeiner Überblick über pwm-frequenz und auflösung und die wichtigsten Zusammenhänge."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath: ["pwm-frequenz-und-aufloesung", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Mikrocontroller"]
draft: false
---
# PWM-Frequenz und Auflösung

PWM-Frequenz und Auflösung beschreiben, wie schnell ein PWM-Signal wiederholt wird und wie fein das Tastverhältnis einstellbar ist.

Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist als Einstieg gedacht, bevor einzelne Spezialfälle, Aufgaben oder konkrete Werkzeuge betrachtet werden.

## Bedeutung und Zusammenhang

In der Praxis wird dieses Thema wichtig, wenn Einzelbeobachtungen nicht isoliert bleiben sollen. Es hilft, Begriffe sauber zu verwenden, Entscheidungen zu begründen und typische Fehlerquellen früh zu erkennen.

## Wichtige Teilaspekte

- Hohe Frequenzen können Flimmern oder hörbare Effekte verringern.
- Hohe Auflösung erlaubt feinere Abstufungen.
- Timer-Takt, Zählbereich und Prescaler begrenzen beide Größen gemeinsam.

## Abgrenzung

Frequenz und Auflösung lassen sich nicht unabhängig beliebig erhöhen.

## Beispiele

- Eine LED-Dimmung soll flimmerfrei wirken und fein steuerbar sein.
- Eine Motoransteuerung braucht eine Frequenz, die zu Treiber und Last passt.

## Häufiges Missverständnis

Häufig wird nur das Tastverhältnis betrachtet, obwohl Frequenz und Auflösung die praktische Wirkung bestimmen.

## Kurz zusammengefasst

PWM-Qualität hängt von Tastverhältnis, Frequenz, Auflösung und Last ab.
