---
title: "Client State und Server State"
description: "Überblick über lokale UI-Zustände und serverseitige Datenzustände in Webanwendungen."
subject: web-development
section: "State"
topicPath:
  - "client-state-vs-server-state"
  - "ueberblick"
learningGoals:
  - "Du kannst Client State und Server State als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Serverdaten wie einfache lokale Variablen zu behandeln und Aktualisierung, Fehler oder konkurrierende Änderungen zu ignorieren."
keyTakeaways:
  - "Client State und Server State haben unterschiedliche Quellen."
  - "Server State braucht Synchronisation und Fehlerbehandlung."
  - "Lokaler Zustand sollte nicht unnötig global werden."
recognizeSignals:
  - "UI-Zustand und API-Daten werden gemeinsam verwaltet."
  - "Daten können durch andere Nutzer oder Prozesse geändert werden."
selfCheckPoints:
  - "Kann ich Client State und Server State in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "web-development"
  - "state"
  - "api"
  - "frontend"
draft: false
---

# Client State und Server State

Client State beschreibt Zustände, die nur die aktuelle Oberfläche betreffen. Server State beschreibt Daten, deren Quelle außerhalb des Browsers liegt.

## Einordnung

Moderne Webanwendungen mischen lokale Interaktion, gecachte Daten, Formulare und API-Antworten. Die Unterscheidung hilft, Synchronisation und Fehlerfälle sauber zu behandeln.

## Zentrale Aspekte

- Client State umfasst zum Beispiel geöffnete Tabs, Filter oder Dialoge.
- Server State umfasst geladene Datensätze, Rechte oder Nutzerprofile.
- Server State kann veralten und muss revalidiert werden.
- Optimistische Updates brauchen Rückfallstrategien.

## Beispiele und Zusammenhang

Ob ein Seitenmenü offen ist, ist Client State. Ob eine Bestellung bezahlt wurde, ist Server State.

## Abgrenzung

Nicht jeder Zustand gehört in einen globalen Store. Viele UI-Zustände sind lokal besser aufgehoben.

## Häufige Missverständnisse

Serverdaten wie einfache lokale Variablen zu behandeln und Aktualisierung, Fehler oder konkurrierende Änderungen zu ignorieren.

## Kurz zusammengefasst

- Client State und Server State haben unterschiedliche Quellen.
- Server State braucht Synchronisation und Fehlerbehandlung.
- Lokaler Zustand sollte nicht unnötig global werden.
