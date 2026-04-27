---
title: "Datenintegrität"
description: "Überblick über Korrektheit, Vollständigkeit und Widerspruchsfreiheit von Daten."
subject: informatik
section: "Daten"
topicPath:
  - "datenintegritaet"
  - "ueberblick"
learningGoals:
  - "Du kannst Datenintegrität als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Daten nur im Frontend zu prüfen und die Persistenz ohne eigene Constraints zu lassen."
keyTakeaways:
  - "Datenintegrität entsteht durch Regeln auf mehreren Ebenen."
  - "Datenbanken, Anwendung und Prozesse tragen gemeinsam dazu bei."
  - "Fehlerhafte Daten sind oft teurer als abgelehnte Eingaben."
recognizeSignals:
  - "Daten widersprechen sich oder verweisen ins Leere."
  - "Mehrere Systeme ändern denselben Datenbestand."
selfCheckPoints:
  - "Kann ich Datenintegrität in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "informatik"
  - "daten"
  - "integrität"
  - "datenbank"
draft: false
---

# Datenintegrität

![Schaubild zu Datenintegrität.](/schlaufuchs-platform/images/overviews/v149/datenintegritaet.svg)

*Das Schaubild zeigt Regeln und Prüfungen für korrekte Datenzustände.*



Datenintegrität beschreibt, dass Daten korrekt, vollständig, konsistent und ihrem Zweck entsprechend verlässlich sind.

## Einordnung

Daten werden eingegeben, übertragen, gespeichert und verändert. Integrität kann auf jeder Stufe verloren gehen, etwa durch fehlerhafte Validierung, konkurrierende Änderungen oder fehlende Constraints.

## Zentrale Aspekte

- Constraints schützen strukturelle Regeln.
- Transaktionen schützen zusammengehörige Änderungen.
- Validierung prüft Eingaben vor der Verarbeitung.
- Audits und Checksums können Veränderungen nachvollziehbar machen.

## Beispiele und Zusammenhang

Eine Bestellung darf nicht auf einen nicht existierenden Kunden verweisen. Eine Fremdschlüsselregel schützt diese Beziehung.

## Abgrenzung

Integrität ist nicht dasselbe wie Sicherheit. Sicherheitsmaßnahmen können Integrität schützen, aber fachliche Korrektheit braucht eigene Regeln.

## Häufige Missverständnisse

Daten nur im Frontend zu prüfen und die Persistenz ohne eigene Constraints zu lassen.

## Kurz zusammengefasst

- Datenintegrität entsteht durch Regeln auf mehreren Ebenen.
- Datenbanken, Anwendung und Prozesse tragen gemeinsam dazu bei.
- Fehlerhafte Daten sind oft teurer als abgelehnte Eingaben.
