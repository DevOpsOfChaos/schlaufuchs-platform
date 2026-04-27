---
title: "Fehlermodelle"
description: "Überblick über Arten von Fehlern und ihre Bedeutung für robuste Systeme."
subject: informatik
section: "Fehler"
topicPath:
  - "fehlermodelle"
  - "ueberblick"
learningGoals:
  - "Du kannst Fehlermodelle als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Alle Fehler gleich zu behandeln und dadurch Wiederholungen, Nutzerhinweise und Datenkonsistenz zu vermischen."
keyTakeaways:
  - "Fehler unterscheiden sich nach Ursache und Dauer."
  - "Robuste Systeme behandeln Fehlerklassen gezielt."
  - "Unbekannte Fehler brauchen sichere Rückfallwege."
recognizeSignals:
  - "Ein System soll mit Ausfällen umgehen."
  - "Fehler werden geloggt, wiederholt oder an Nutzer gemeldet."
selfCheckPoints:
  - "Kann ich Fehlermodelle in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "informatik"
  - "fehler"
  - "resilienz"
  - "robustheit"
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
