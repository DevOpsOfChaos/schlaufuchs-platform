---
title: "Logging und Fehlerkontext"
description: "Allgemeiner Überblick über Logging, Kontextinformationen und nachvollziehbare Fehleranalyse."
subject: "informatik"
section: "Betrieb"
topicPath: ["logging-und-fehlerkontext", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Betrieb"]
draft: false
---
# Logging und Fehlerkontext

Logging ist das gezielte Aufzeichnen von Ereignissen, Zuständen und Fehlern während ein Programm läuft.

Im Betrieb sind Fehler oft nicht direkt reproduzierbar. Logs helfen, Abläufe nachzuvollziehen, ohne dass ein Entwickler im Moment des Fehlers danebensteht.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Gute Logs enthalten Zeitpunkt, Schweregrad und relevanten Kontext.
- Zu viele Logs erschweren die Suche, zu wenige Logs lassen Ursachen unsichtbar.
- Strukturierte Logs können maschinell gefiltert und ausgewertet werden.

## Abgrenzung

Logging ersetzt keine Fehlerbehandlung. Ein Fehler muss weiterhin passend behandelt, gemeldet oder begrenzt werden.

## Beispiele

- Eine fehlgeschlagene API-Anfrage protokolliert Ziel, Status und Korrelations-ID.
- Ein Hintergrundjob schreibt Start, Ende und Anzahl verarbeiteter Datensätze.

## Häufiges Missverständnis

Häufig werden sensible Daten in Logs geschrieben. Logs sind dann selbst ein Sicherheits- und Datenschutzrisiko.

## Kurz zusammengefasst

Logging macht laufende Systeme beobachtbar. Gute Logs beantworten konkrete Fragen, ohne unnötige oder sensible Informationen zu sammeln.
