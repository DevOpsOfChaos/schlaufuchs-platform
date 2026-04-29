---
title: "Logging und Observability"
description: "Allgemeiner Überblick über Logs, Metriken, Traces und Beobachtbarkeit von Softwaresystemen."
subject: "informatik"
section: "Betrieb"
topicPath: ["logging-und-observability", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Betrieb"]
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
