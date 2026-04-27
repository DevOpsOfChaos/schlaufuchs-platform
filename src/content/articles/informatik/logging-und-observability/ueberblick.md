---
title: "Logging und Observability"
description: "Allgemeiner Überblick über Logs, Metriken, Traces und Beobachtbarkeit von Softwaresystemen."
subject: informatik
section: "Betrieb"
topicPath:
  - "logging-und-observability"
  - "ueberblick"
learningGoals:
  - "Du kannst Logging und Observability als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Oft wird entweder gar nichts geloggt oder so viel, dass Wichtiges untergeht."
keyTakeaways:
  - "Observability macht Systemverhalten sichtbar."
  - "Logs, Metriken und Traces ergänzen sich."
  - "Gute Signale brauchen Kontext und Maß."
recognizeSignals:
  - "Fehler treten nur im Betrieb auf."
  - "Antwortzeiten, Fehlerraten oder Anfragen müssen nachvollzogen werden."
selfCheckPoints:
  - "Kann ich Logging und Observability in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "informatik"
  - "logging"
  - "observability"
  - "betrieb"
draft: false
---

# Logging und Observability

Logging und Observability helfen zu verstehen, was ein System im Betrieb tut. Logs, Metriken und Traces liefern unterschiedliche Blickwinkel.

## Einordnung

Beobachtbarkeit ist wichtig, weil Fehler im Produktivbetrieb oft nicht direkt reproduzierbar sind. Gute Signale liefern Kontext, ohne in Rauschen unterzugehen.

## Zentrale Aspekte

- **Logs:** Beschreiben Ereignisse, Fehler und Kontext.
- **Metriken:** Zeigen Trends wie Antwortzeiten oder Fehlerraten.
- **Traces:** Verbinden Schritte einer Anfrage.
- **Signalqualität:** Zu viele Meldungen verdecken Wichtiges.

## Beispiele und Zusammenhang

Wenn eine API langsam wird, zeigen Metriken den Zeitraum, Logs konkrete Fehler und Traces den langsamen Datenbankaufruf.

## Abgrenzung

Logging allein ist noch keine Observability. Erst auswertbare Signale mit Kontext machen Systeme beobachtbar.

## Häufige Missverständnisse

Oft wird entweder gar nichts geloggt oder so viel, dass Wichtiges untergeht.

## Kurz zusammengefasst

- Observability macht Systemverhalten sichtbar.
- Logs, Metriken und Traces ergänzen sich.
- Gute Signale brauchen Kontext und Maß.
