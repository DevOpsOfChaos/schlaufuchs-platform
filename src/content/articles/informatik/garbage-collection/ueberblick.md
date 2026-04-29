---
title: "Garbage Collection"
description: "Allgemeiner Überblick über automatische Speicherbereinigung und ihre Auswirkungen auf Programme."
subject: "informatik"
section: "Programmierung"
topicPath: ["garbage-collection", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
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
