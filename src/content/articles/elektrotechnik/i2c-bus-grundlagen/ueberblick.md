---
title: "I2C-Bus-Grundlagen"
description: "Allgemeiner Überblick über den I2C-Bus, Adressen und typische elektrische Eigenschaften."
subject: elektrotechnik
section: "Schnittstellen"
topicPath:
  - "i2c-bus-grundlagen"
  - "ueberblick"
learningGoals:
  - "Du kannst I2C-Bus-Grundlagen als Grundbegriff einordnen."
  - "Du kennst zentrale Eigenschaften und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse zu diesem Thema erkennen."
practiceIdeas: []
commonMistakes:
  - "Oft werden Pull-ups vergessen oder beliebig gewählt. Dann steigen Signale zu langsam oder erreichen keinen stabilen High-Pegel."
keyTakeaways:
  - "I2C ist ein kompakter Bus für kurze digitale Verbindungen."
  - "I2C-Bus-Grundlagen sollte immer im fachlichen Zusammenhang betrachtet werden."
recognizeSignals:
  - "Es geht um Grundlagen, typische Begriffe oder Abgrenzungen rund um I2C-Bus-Grundlagen."
selfCheckPoints:
  - "Kann ich erklären, woran man I2C-Bus-Grundlagen erkennt und wovon es abzugrenzen ist?"
level: einfach
tags:
  - "elektrotechnik"
  - "i2c"
  - "bus"
  - "schnittstelle"
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
