---
title: "Normalisierung"
description: "Allgemeiner Überblick über Normalisierung, Redundanzvermeidung und konsistente relationale Datenmodelle."
subject: "informatik"
section: "Datenbanken"
topicPath: ["normalisierung", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Datenbanken"]
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
