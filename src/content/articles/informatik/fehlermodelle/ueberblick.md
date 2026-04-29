---
title: "Fehlermodelle"
description: "Überblick über Arten von Fehlern und ihre Bedeutung für robuste Systeme."
subject: "informatik"
section: "Fehler"
topicPath: ["fehlermodelle", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Fehler"]
draft: false
---
# Fehlermodelle

Ein Fehlermodell beschreibt, welche Fehlerarten ein System erwartet, erkennt und behandelt.

## Einordnung

Software kann durch ungültige Eingaben, Netzwerkprobleme, Zeitüberschreitungen, Datenkonflikte oder Programmierfehler scheitern. Ein Fehlermodell macht diese Möglichkeiten explizit.

## Zentrale Aspekte

- Temporäre Fehler können später verschwinden.
- Permanente Fehler brauchen Korrektur oder Ablehnung.
- Teilweise Fehler betreffen nur einen Systembereich.
- Unbekannte Fehler brauchen sichere Standardreaktionen.

## Beispiele und Zusammenhang

Ein Timeout beim Zahlungsanbieter ist anders zu behandeln als eine abgelehnte Karte oder ein Programmierfehler im eigenen Code.

## Abgrenzung

Fehlermodelle sind keine vollständige Vorhersage der Zukunft. Sie helfen, bekannte Klassen sinnvoll zu behandeln.

## Häufige Missverständnisse

Alle Fehler gleich zu behandeln und dadurch Wiederholungen, Nutzerhinweise und Datenkonsistenz zu vermischen.

## Kurz zusammengefasst

- Fehler unterscheiden sich nach Ursache und Dauer.
- Robuste Systeme behandeln Fehlerklassen gezielt.
- Unbekannte Fehler brauchen sichere Rückfallwege.
