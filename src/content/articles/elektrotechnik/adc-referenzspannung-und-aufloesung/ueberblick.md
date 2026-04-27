---
title: "ADC-Referenzspannung und Auflösung"
description: "Allgemeiner Überblick über ADC-Referenzen, Auflösung und Messbereich."
subject: elektrotechnik
section: "Mikrocontroller"
topicPath:
  - "adc-referenzspannung-und-aufloesung"
  - "ueberblick"
learningGoals:
  - "Du kannst ADC-Referenzspannung und Auflösung als Grundbegriff einordnen."
  - "Du kennst zentrale Eigenschaften und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse zu diesem Thema erkennen."
practiceIdeas: []
commonMistakes:
  - "Häufig wird der letzte Digit als sicherer Messwert interpretiert, obwohl Rauschen mehrere Codes schwanken lassen kann."
keyTakeaways:
  - "ADC-Referenz und Auflösung bestimmen den Zahlenraum einer Messung."
  - "ADC-Referenzspannung und Auflösung sollte immer im fachlichen Zusammenhang betrachtet werden."
recognizeSignals:
  - "Es geht um Grundlagen, typische Begriffe oder Abgrenzungen rund um ADC-Referenzspannung und Auflösung."
selfCheckPoints:
  - "Kann ich erklären, woran man ADC-Referenzspannung und Auflösung erkennt und wovon es abzugrenzen ist?"
level: einfach
tags:
  - "elektrotechnik"
  - "adc"
  - "referenzspannung"
  - "auflösung"
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
