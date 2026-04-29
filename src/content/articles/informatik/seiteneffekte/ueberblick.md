---
title: "Seiteneffekte"
description: "Allgemeiner Überblick über Seiteneffekte in Programmen und ihre Bedeutung für Verständlichkeit und Tests."
subject: "informatik"
section: "Programmierung"
topicPath: ["seiteneffekte", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Programmierung"]
draft: false
---
# Seiteneffekte

Ein Seiteneffekt liegt vor, wenn ein Programmteil neben seinem Rückgabewert auch einen Zustand verändert oder mit der Außenwelt interagiert.

Seiteneffekte sind notwendig für Ein- und Ausgabe, Datenbankzugriffe oder Benutzerinteraktion. Sie machen Programme aber schwerer vorhersagbar, wenn sie unklar verteilt sind.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Zustandsänderungen, Dateioperationen und Netzwerkzugriffe sind typische Seiteneffekte.
- Reine Funktionen ohne Seiteneffekte sind leichter zu testen.
- Klare Grenzen zwischen Logik und Wirkung verbessern Wartbarkeit.

## Abgrenzung

Seiteneffekte sind nicht grundsätzlich schlecht. Problematisch werden sie, wenn sie versteckt, unkontrolliert oder unerwartet auftreten.

## Beispiele

- Eine Funktion berechnet nicht nur einen Preis, sondern schreibt gleichzeitig eine Logdatei.
- Ein Test schlägt fehl, weil vorheriger Zustand nicht zurückgesetzt wurde.

## Häufiges Missverständnis

Häufig wird nur der Rückgabewert einer Funktion betrachtet. Veränderte globale Variablen oder externe Ressourcen erklären dann scheinbar zufälliges Verhalten.

## Kurz zusammengefasst

Seiteneffekte verbinden Programme mit Zustand und Außenwelt. Gute Architektur macht sie sichtbar und begrenzt sie bewusst.
