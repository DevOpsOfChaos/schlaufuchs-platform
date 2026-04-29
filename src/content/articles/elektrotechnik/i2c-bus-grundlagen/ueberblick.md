---
title: "I2C-Bus-Grundlagen"
description: "Allgemeiner Überblick über den I2C-Bus, Adressen und typische elektrische Eigenschaften."
subject: "elektrotechnik"
section: "Schnittstellen"
topicPath: ["i2c-bus-grundlagen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Schnittstellen"]
draft: false
---
# I2C-Bus-Grundlagen

I2C ist ein serieller Bus, bei dem mehrere Bausteine über eine Taktleitung und eine Datenleitung kommunizieren können.

Der Bus wird häufig für Sensoren, Speicher, Echtzeituhren und kleine Peripheriebausteine verwendet.

## Einordnung

Der Begriff ist besonders hilfreich, wenn einzelne Beobachtungen nicht isoliert, sondern als Teil eines größeren Zusammenhangs verstanden werden sollen. In Lern- und Praxiszusammenhängen dient er als Orientierung, bevor Spezialfälle oder Rechenverfahren betrachtet werden.

## Zentrale Aspekte

Geräte werden über Adressen angesprochen, damit mehrere Teilnehmer am gleichen Bus möglich sind.

Die Leitungen arbeiten typischerweise mit Pull-up-Widerständen und Open-Drain-Ausgängen.

Buskapazität, Leitungslänge und Pull-up-Werte begrenzen Geschwindigkeit und Signalqualität.

## Abgrenzung

I2C ist kein beliebig langer Feldbus. Er eignet sich vor allem für kurze Verbindungen.

## Beispiele und typische Situationen

Ein Mikrocontroller kann mehrere Sensoren über dieselben zwei Leitungen auslesen.

Adresskonflikte entstehen, wenn zwei Bausteine dieselbe Busadresse verwenden.

## Häufige Missverständnisse

Oft werden Pull-ups vergessen oder beliebig gewählt. Dann steigen Signale zu langsam oder erreichen keinen stabilen High-Pegel.

## Kurz zusammengefasst

I2C ist ein kompakter Bus für kurze digitale Verbindungen.
