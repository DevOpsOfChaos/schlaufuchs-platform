---
title: "Pagination und Cursor"
description: "Allgemeiner Überblick über pagination und cursor und die wichtigsten Zusammenhänge."
subject: "informatik"
section: "Schnittstellen"
topicPath: ["pagination-und-cursor", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Schnittstellen"]
draft: false
---
# Pagination und Cursor

Pagination teilt große Ergebnismengen in Abschnitte auf. Cursor beschreiben eine stabile Fortsetzungsposition.

Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist als Einstieg gedacht, bevor einzelne Spezialfälle, Aufgaben oder konkrete Werkzeuge betrachtet werden.

## Bedeutung und Zusammenhang

In der Praxis wird dieses Thema wichtig, wenn Einzelbeobachtungen nicht isoliert bleiben sollen. Es hilft, Begriffe sauber zu verwenden, Entscheidungen zu begründen und typische Fehlerquellen früh zu erkennen.

## Wichtige Teilaspekte

- Seitennummern sind einfach, können aber bei veränderlichen Daten verrutschen.
- Cursor eignen sich oft für große oder dynamische Datenmengen.
- Sortierung und Filter müssen zur Pagination passen.

## Abgrenzung

Pagination ist nicht nur Darstellung, sondern beeinflusst Performance und Korrektheit.

## Beispiele

- Eine API liefert 50 Einträge und einen Cursor.
- Eine Suche zeigt Ergebnisse seitenweise.

## Häufiges Missverständnis

Häufig wird `page=1` gebaut, ohne neue oder gelöschte Einträge zu bedenken.

## Kurz zusammengefasst

Gute Pagination macht große Datenmengen bedienbar und technisch beherrschbar.
