---
title: "Normalisierung"
description: "Allgemeiner Überblick über Normalisierung, Redundanzvermeidung und konsistente relationale Datenmodelle."
subject: informatik
section: "Datenbanken"
topicPath:
  - "normalisierung"
  - "ueberblick"
learningGoals:
  - "Du kannst Normalisierung als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Alles wird oft in eine große Tabelle geschrieben, bis Änderungen schwer kontrollierbar werden."
keyTakeaways:
  - "Normalisierung reduziert Redundanz."
  - "Schlüssel und Beziehungen halten Daten konsistenter."
  - "Denormalisierung sollte bewusst erfolgen."
recognizeSignals:
  - "Dieselbe Information steht an vielen Stellen."
  - "Änderungen müssen mehrfach durchgeführt werden."
selfCheckPoints:
  - "Kann ich Normalisierung in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "informatik"
  - "datenbanken"
  - "normalisierung"
  - "datenmodell"
draft: false
---

# Normalisierung

Normalisierung ist ein Entwurfsprinzip für relationale Datenbanken. Daten werden so strukturiert, dass Redundanzen und Widersprüche reduziert werden.

## Einordnung

Sie hilft, Daten langfristig wartbar zu halten. Wenn dieselbe Information an vielen Stellen steht, können Aktualisierungen unvollständig werden.

## Zentrale Aspekte

- **Redundanz:** Doppelte Informationen werden reduziert.
- **Schlüssel:** Eindeutige Identifikatoren verbinden Datensätze.
- **Beziehungen:** Fremdschlüssel modellieren Zusammenhänge.
- **Abwägung:** Denormalisierung kann bewusst erfolgen.

## Beispiele und Zusammenhang

Statt den Fachbereichsnamen in jeder Aufgabe als freien Text zu speichern, kann eine Fachbereichstabelle mit ID genutzt werden.

## Abgrenzung

Normalisierung ist kein Selbstzweck und soll Abfragen nicht unnötig kompliziert machen.

## Häufige Missverständnisse

Alles wird oft in eine große Tabelle geschrieben, bis Änderungen schwer kontrollierbar werden.

## Kurz zusammengefasst

- Normalisierung reduziert Redundanz.
- Schlüssel und Beziehungen halten Daten konsistenter.
- Denormalisierung sollte bewusst erfolgen.
