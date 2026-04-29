---
title: "PWM-Filter und Analogausgabe"
description: "Allgemeiner Überblick über gefilterte PWM-Signale und einfache Analogausgaben."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath: ["pwm-filter-und-analogausgabe", "ueberblick"]
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
