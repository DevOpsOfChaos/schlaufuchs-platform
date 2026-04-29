---
title: "sed und awk"
description: "Allgemeiner Überblick über sed und awk als klassische Textwerkzeuge."
subject: "linux"
section: "Textwerkzeuge"
topicPath: ["sed-und-awk", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Textwerkzeuge"]
draft: false
---
# sed und awk

sed und awk sind Werkzeuge zur Verarbeitung von Textströmen.

Linux-Werkzeuge erzeugen oft Text. Sed und awk ermöglichen, diesen Text direkt in der Shell weiterzuverarbeiten.

## Einordnung

Der Begriff ist besonders hilfreich, wenn einzelne Beobachtungen nicht isoliert, sondern als Teil eines größeren Zusammenhangs verstanden werden sollen. In Lern- und Praxiszusammenhängen dient er als Orientierung, bevor Spezialfälle oder Rechenverfahren betrachtet werden.

## Zentrale Aspekte

sed eignet sich besonders für zeilenorientierte Ersetzungen und einfache Transformationen.

awk behandelt Zeilen als Felder und kann berechnen, gruppieren und formatieren.

Beide Werkzeuge arbeiten gut mit Pipes, Dateien und regulären Ausdrücken zusammen.

## Abgrenzung

Sed und awk sind mächtig, aber nicht immer die beste Wahl für komplexe Datenformate.

## Beispiele und typische Situationen

sed kann Pfade in einer Textdatei ersetzen.

awk kann aus einer Tabelle bestimmte Spalten summieren.

## Häufige Missverständnisse

Häufig werden komplexe Einzeiler ohne Lesbarkeit gebaut. Ab einem gewissen Umfang ist ein kleines Skript klarer.

## Kurz zusammengefasst

Sed und awk gehören zur klassischen Shell-Werkzeugkiste.
