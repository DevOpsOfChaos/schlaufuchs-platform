---
title: "Datenbankindizes"
description: "Überblick über Indizes in Datenbanken, Suchgeschwindigkeit und Kosten bei Schreiboperationen."
subject: informatik
section: "Datenbanken"
topicPath:
  - "datenbankindizes"
  - "ueberblick"
learningGoals:
  - "Du kannst Datenbankindizes als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Entweder fehlen Indizes komplett oder jede Spalte wird blind indexiert."
keyTakeaways:
  - "Indizes beschleunigen passende Abfragen."
  - "Sie kosten Speicher und Schreibaufwand."
  - "Gute Indizes folgen realen Nutzungsmustern."
recognizeSignals:
  - "Abfragen sind langsam, obwohl wenige Ergebnisse erwartet werden."
  - "Analyse zeigt Table Scan oder fehlende Indexnutzung."
selfCheckPoints:
  - "Kann ich Datenbankindizes in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "informatik"
  - "datenbanken"
  - "index"
  - "performance"
draft: false
---

# Datenbankindizes

Ein Datenbankindex ist eine zusätzliche Datenstruktur, die bestimmte Abfragen schneller machen kann.

## Einordnung

Indizes beschleunigen häufige Such-, Sortier- und Join-Muster, kosten aber Speicherplatz und machen Schreiboperationen aufwendiger.

## Zentrale Aspekte

- **Suchspalten:** Indizes lohnen sich auf häufig gefilterten Spalten.
- **Kombinierte Indizes:** Mehrere Spalten können gemeinsam indexiert werden.
- **Schreibkosten:** Änderungen müssen Indizes aktualisieren.
- **Abfrageplan:** Die Datenbank entscheidet über Indexnutzung.

## Beispiele und Zusammenhang

Eine Benutzertabelle wird oft nach E-Mail-Adresse durchsucht. Ein Index auf dieser Spalte kann Login-Abfragen beschleunigen.

## Abgrenzung

Ein Index garantiert keine schnellen Abfragen; er muss zum Muster passen.

## Häufige Missverständnisse

Entweder fehlen Indizes komplett oder jede Spalte wird blind indexiert.

## Kurz zusammengefasst

- Indizes beschleunigen passende Abfragen.
- Sie kosten Speicher und Schreibaufwand.
- Gute Indizes folgen realen Nutzungsmustern.
