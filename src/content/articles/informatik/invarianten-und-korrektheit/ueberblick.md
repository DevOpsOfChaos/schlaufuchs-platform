---
title: "Invarianten und Korrektheit"
description: "Allgemeiner Überblick über Invarianten als Werkzeug zum Begründen korrekter Algorithmen."
subject: "informatik"
section: "Algorithmen"
topicPath: ["invarianten-und-korrektheit", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Algorithmen"]
draft: false
---
# Invarianten und Korrektheit

Eine Invariante ist eine Aussage, die während bestimmter Schritte eines Algorithmus wahr bleibt.

Invarianten helfen zu begründen, warum ein Algorithmus allgemein korrekt ist.

## Einordnung

Der Begriff ist besonders hilfreich, wenn einzelne Beobachtungen nicht isoliert, sondern als Teil eines größeren Zusammenhangs verstanden werden sollen. In Lern- und Praxiszusammenhängen dient er als Orientierung, bevor Spezialfälle oder Rechenverfahren betrachtet werden.

## Zentrale Aspekte

Eine Schleifeninvariante gilt vor und nach jedem Schleifendurchlauf.

Zusammen mit Abbruchbedingungen erklärt sie, warum am Ende das gewünschte Ergebnis vorliegt.

Invarianten zwingen dazu, den Zustand eines Algorithmus präzise zu beschreiben.

## Abgrenzung

Eine Invariante ist nicht einfach eine Vermutung. Sie muss für Start, Erhaltung und Nutzung begründet werden.

## Beispiele und typische Situationen

Beim Sortieren kann eine Teilliste nach jedem Schritt bereits sortiert sein.

Bei einer Suche kann ein Bereich garantiert alle noch möglichen Fundstellen enthalten.

## Häufige Missverständnisse

Häufig wird nur das Endergebnis betrachtet. Ohne Invariante bleibt unklar, warum Zwischenschritte korrekt bleiben.

## Kurz zusammengefasst

Invarianten sind Brücken zwischen Ablauf und Begründung.
