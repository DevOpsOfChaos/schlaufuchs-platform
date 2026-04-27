---
title: "Mutabilität und Immutabilität"
description: "Allgemeiner Überblick über veränderliche und unveränderliche Datenstrukturen."
subject: "informatik"
section: "Programmierung"
topicPath:
  - "mutabilitaet-und-immutabilitaet"
learningGoals:
  - "Du kannst den Begriff einordnen und von ähnlichen Begriffen abgrenzen."
  - "Du kennst typische Teilaspekte und praktische Zusammenhänge."
  - "Du erkennst häufige Missverständnisse zu diesem Thema."
practiceIdeas: []
commonMistakes:
  - "Häufig wird eine Kopie angenommen, obwohl nur eine Referenz weitergegeben wurde. Dadurch verändern Änderungen an einer Stelle unbemerkt andere Programmteile."
keyTakeaways:
  - "Mutabilität regelt, wie Zustand verändert wird. Bewusste Entscheidungen dazu machen Programme berechenbarer."
  - "Immutabilität bedeutet nicht automatisch langsam oder speicherintensiv. Moderne Datenstrukturen können Teile teilen und dennoch unveränderliche Sichtweisen bieten."
recognizeSignals:
  - "Es geht um Grundlagen, Einordnung, Begriffe oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ruhig und allgemein erklären?"
  - "Kann ich ein Beispiel nennen, ohne direkt in eine Spezialaufgabe zu springen?"
level: "mittel"
tags:
  - "informatik"
  - "programmierung"
  - "zustand"
  - "immutabilität"
draft: false
---

# Mutabilität und Immutabilität

Mutabilität bedeutet, dass ein Objekt oder eine Datenstruktur nach ihrer Erstellung verändert werden kann. Immutabilität bedeutet, dass Änderungen als neue Werte modelliert werden.

Der Umgang mit Veränderung beeinflusst Fehleranfälligkeit, Nebenläufigkeit, Lesbarkeit und Performance eines Programms.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Veränderliche Daten können effizient sein, brauchen aber klare Besitz- und Zuständigkeitsregeln.
- Unveränderliche Daten erleichtern Nachvollziehbarkeit und Vergleich.
- Viele Sprachen kombinieren beide Modelle.

## Abgrenzung

Immutabilität bedeutet nicht automatisch langsam oder speicherintensiv. Moderne Datenstrukturen können Teile teilen und dennoch unveränderliche Sichtweisen bieten.

## Beispiele

- Ein Warenkorb kann bei jeder Änderung als neuer Zustand erzeugt werden.
- Eine gemeinsam genutzte Liste kann unerwartet verändert werden, wenn mehrere Programmteile dieselbe Referenz besitzen.

## Häufiges Missverständnis

Häufig wird eine Kopie angenommen, obwohl nur eine Referenz weitergegeben wurde. Dadurch verändern Änderungen an einer Stelle unbemerkt andere Programmteile.

## Kurz zusammengefasst

Mutabilität regelt, wie Zustand verändert wird. Bewusste Entscheidungen dazu machen Programme berechenbarer.
