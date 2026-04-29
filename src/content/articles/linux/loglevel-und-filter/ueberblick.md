---
title: "Loglevel und Filter"
description: "Allgemeiner Überblick über Loglevel, Filterung und gezieltes Lesen von Protokollen."
subject: "linux"
section: "Logs"
topicPath: ["loglevel-und-filter", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Logs"]
draft: false
---
# Loglevel und Filter

Loglevel ordnen Meldungen nach Schwere oder Bedeutung ein. Filter helfen, aus vielen Meldungen die relevanten Einträge für eine konkrete Frage zu finden.

Moderne Systeme erzeugen große Mengen Logs. Ohne Filterung werden wichtige Hinweise leicht übersehen oder von Routineausgaben überdeckt.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Typische Stufen reichen von Debug-Informationen bis zu kritischen Fehlern.
- Zeitfenster, Dienstname und Prozess-ID sind wichtige Filterkriterien.
- Zu viel Logging kann Speicher, Datenschutz und Übersicht belasten.

## Abgrenzung

Ein Logeintrag ist ein Hinweis, kein vollständiger Beweis. Er muss mit Zeitpunkt, Konfiguration und beobachtetem Verhalten verbunden werden.

## Beispiele

- Bei einem fehlgeschlagenen Dienststart sind Meldungen unmittelbar um den Startzeitpunkt besonders relevant.
- Debug-Logs können kurzfristig helfen, sollten aber nicht dauerhaft unnötig laut bleiben.

## Häufiges Missverständnis

Häufig wird nach dem Wort „error“ gesucht und alles andere ignoriert. Warnungen oder vorherige Kontextmeldungen erklären oft die eigentliche Ursache.

## Kurz zusammengefasst

Loglevel und Filter machen Protokolle lesbar. Gute Fehlersuche stellt zuerst eine Frage und filtert dann gezielt nach passenden Hinweisen.
