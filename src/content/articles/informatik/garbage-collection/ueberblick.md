---
title: "Garbage Collection"
description: "Allgemeiner Überblick über automatische Speicherbereinigung und ihre Auswirkungen auf Programme."
subject: informatik
section: "Programmierung"
topicPath:
  - "garbage-collection"
  - "ueberblick"
learningGoals:
  - "Du kannst Garbage Collection als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Bei GC-Sprachen wird oft angenommen, Speicherlecks seien unmöglich."
keyTakeaways:
  - "Garbage Collection gibt unerreichbare Objekte frei."
  - "Referenzen bestimmen, was erreichbar bleibt."
  - "Automatische Speicherbereinigung hat Grenzen und Kosten."
recognizeSignals:
  - "Speicherverbrauch wächst trotz automatischer Speicherverwaltung."
  - "Laufzeitumgebung meldet GC-Aktivität."
selfCheckPoints:
  - "Kann ich Garbage Collection in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "informatik"
  - "speicher"
  - "garbage collection"
  - "programmierung"
draft: false
---

# Garbage Collection

Garbage Collection ist automatische Speicherbereinigung. Eine Laufzeitumgebung erkennt unerreichbare Objekte und gibt deren Speicher frei.

## Einordnung

Sie vereinfacht Programmierung, beseitigt aber nicht alle Speicherprobleme. Noch referenzierte Daten bleiben erhalten, auch wenn sie fachlich nicht mehr gebraucht werden.

## Zentrale Aspekte

- **Erreichbarkeit:** Objekte bleiben, solange Referenzen existieren.
- **Speicherleck trotz GC:** Unerwünschte Referenzen halten Speicher fest.
- **Laufzeitkosten:** Analyse und Freigabe kosten Zeit.
- **Sprachmodell:** Sprachen nutzen unterschiedliche GC-Strategien.

## Beispiele und Zusammenhang

Wenn eine Anwendung alte DOM-Referenzen global speichert, kann der Garbage Collector sie nicht freigeben.

## Abgrenzung

Garbage Collection ist nicht perfekte Speicherverwaltung, sondern Freigabe unerreichbarer Objekte.

## Häufige Missverständnisse

Bei GC-Sprachen wird oft angenommen, Speicherlecks seien unmöglich.

## Kurz zusammengefasst

- Garbage Collection gibt unerreichbare Objekte frei.
- Referenzen bestimmen, was erreichbar bleibt.
- Automatische Speicherbereinigung hat Grenzen und Kosten.
