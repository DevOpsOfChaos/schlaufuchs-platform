---
title: "ADC-Referenzspannung und Auflösung"
description: "Allgemeiner Überblick über ADC-Referenzen, Auflösung und Messbereich."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath: ["adc-referenzspannung-und-aufloesung", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mikrocontroller"]
draft: false
---
# ADC-Referenzspannung und Auflösung

![Schaubild zu ADC-Referenzspannung und Auflösung.](/schlaufuchs-platform/images/overviews/v150/adc-referenzspannung-und-aufloesung.svg)

*Das Schaubild ordnet Referenzspannung, Schrittweite und nutzbaren Messbereich ein.*



Die Referenzspannung eines ADC legt fest, welcher Spannungsbereich in digitale Zahlenwerte abgebildet wird.

Analogmessungen wirken oft präzise, sind aber immer an Referenz, Rauschen, Eingangsbeschaltung und Umrechnung gebunden.

## Einordnung

Der Begriff ist besonders hilfreich, wenn einzelne Beobachtungen nicht isoliert, sondern als Teil eines größeren Zusammenhangs verstanden werden sollen. In Lern- und Praxiszusammenhängen dient er als Orientierung, bevor Spezialfälle oder Rechenverfahren betrachtet werden.

## Zentrale Aspekte

Eine kleinere Referenz kann feinere Stufen in einem kleineren Messbereich ermöglichen.

Die Anzahl der Bits bestimmt die theoretische Zahl möglicher Codes.

Rauschen und Toleranzen können die praktisch nutzbare Genauigkeit deutlich verringern.

## Abgrenzung

Auflösung ist nicht dasselbe wie Genauigkeit. Viele Bits bedeuten viele Stufen, aber nicht automatisch korrekte Werte.

## Beispiele und typische Situationen

Bei 10 Bit entstehen 1024 mögliche Codes.

Ein Sensor mit kleinem Ausgangsbereich profitiert oft von passender Referenz oder Verstärkung.

## Häufige Missverständnisse

Häufig wird der letzte Digit als sicherer Messwert interpretiert, obwohl Rauschen mehrere Codes schwanken lassen kann.

## Kurz zusammengefasst

ADC-Referenz und Auflösung bestimmen den Zahlenraum einer Messung.
