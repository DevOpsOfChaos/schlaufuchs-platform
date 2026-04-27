---
title: "PWM-Filter und Analogausgabe"
description: "Allgemeiner Überblick über gefilterte PWM-Signale und einfache Analogausgaben."
subject: elektrotechnik
section: "Mikrocontroller"
topicPath:
  - "pwm-filter-und-analogausgabe"
  - "ueberblick"
learningGoals:
  - "Du kannst PWM-Filter und Analogausgabe als Grundbegriff einordnen."
  - "Du kennst zentrale Eigenschaften und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse zu diesem Thema erkennen."
practiceIdeas: []
commonMistakes:
  - "Häufig wird nur das Tastverhältnis betrachtet. Ohne passende Frequenz und Filterung bleibt das Signal stark gepulst."
keyTakeaways:
  - "PWM-Filter erlauben einfache Analogausgaben aus digitalen Signalen."
  - "PWM-Filter und Analogausgabe sollte immer im fachlichen Zusammenhang betrachtet werden."
recognizeSignals:
  - "Es geht um Grundlagen, typische Begriffe oder Abgrenzungen rund um PWM-Filter und Analogausgabe."
selfCheckPoints:
  - "Kann ich erklären, woran man PWM-Filter und Analogausgabe erkennt und wovon es abzugrenzen ist?"
level: einfach
tags:
  - "elektrotechnik"
  - "pwm"
  - "filter"
  - "analogausgabe"
draft: false
---

# PWM-Filter und Analogausgabe

Ein PWM-Signal kann durch Tiefpassfilterung in einen geglätteten Mittelwert überführt werden.

Mikrocontroller besitzen häufig digitale Ausgänge und PWM-Einheiten, aber nicht immer echte Digital-Analog-Wandler.

## Einordnung

Der Begriff ist besonders hilfreich, wenn einzelne Beobachtungen nicht isoliert, sondern als Teil eines größeren Zusammenhangs verstanden werden sollen. In Lern- und Praxiszusammenhängen dient er als Orientierung, bevor Spezialfälle oder Rechenverfahren betrachtet werden.

## Zentrale Aspekte

Das Tastverhältnis bestimmt den zeitlichen Mittelwert des Signals.

Ein Tiefpass reduziert schnelle Schaltanteile und lässt langsamere Änderungen durch.

Grenzfrequenz, PWM-Frequenz und Last bestimmen Restwelligkeit und Reaktionszeit.

## Abgrenzung

Gefilterte PWM ist nicht dasselbe wie ein idealer DAC. Auflösung, Rauschen und Ausgangsbelastung sind begrenzt.

## Beispiele und typische Situationen

Eine LED-Helligkeit kann direkt über PWM wirken.

Für eine Steuerspannung kann ein RC-Filter den PWM-Mittelwert glätten.

## Häufige Missverständnisse

Häufig wird nur das Tastverhältnis betrachtet. Ohne passende Frequenz und Filterung bleibt das Signal stark gepulst.

## Kurz zusammengefasst

PWM-Filter erlauben einfache Analogausgaben aus digitalen Signalen.
