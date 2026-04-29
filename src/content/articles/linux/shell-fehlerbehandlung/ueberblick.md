---
title: "Fehlerbehandlung in Shell-Skripten"
description: "Überblick über Exit-Codes, Abbruchstrategien und kontrollierte Fehlerbehandlung in Shell-Skripten."
subject: "linux"
section: "Shell"
topicPath: ["shell-fehlerbehandlung", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Shell"]
draft: false
---
# Fehlerbehandlung in Shell-Skripten

Fehlerbehandlung in Shell-Skripten bedeutet, Rückgabewerte zu prüfen, erwartete Fehler zu behandeln und unerwartete Zustände sichtbar zu machen.

## Einordnung

Shell-Skripte automatisieren oft Dateioperationen, Deployments oder Wartungsaufgaben. Ohne Fehlerbehandlung laufen sie bei Problemen weiter oder brechen an unklarer Stelle ab.

## Zentrale Aspekte

- Exit-Codes zeigen Erfolg oder Fehler eines Kommandos.
- `set -euo pipefail` kann viele Fehler früh sichtbar machen.
- Erwartete Fehler brauchen eigene Prüfungen.
- Logausgaben sollten Ursache und Kontext enthalten.

## Beispiele und Zusammenhang

Ein Backup-Skript sollte abbrechen, wenn das Zielverzeichnis nicht eingehängt ist, statt Dateien unbemerkt lokal abzulegen.

## Abgrenzung

Strenge Optionen ersetzen kein bewusstes Design. Manche Kommandos liefern erwartbar Nicht-Null zurück und müssen gezielt behandelt werden.

## Häufige Missverständnisse

Nur die letzte Zeile eines Skripts zu prüfen und Fehler in früheren Pipeline-Schritten zu übersehen.

## Kurz zusammengefasst

- Exit-Codes sind Grundlage der Shell-Fehlerbehandlung.
- Automatisierung braucht klare Abbruchbedingungen.
- Erwartete und unerwartete Fehler werden unterschiedlich behandelt.
