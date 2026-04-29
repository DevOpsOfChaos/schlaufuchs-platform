---
title: "Schlüssel und Identität"
description: "Schlüssel entscheiden, wann zwei Datensätze dasselbe Objekt meinen und wie Beziehungen stabil bleiben."
subject: "informatik"
section: "datenmodellierung"
topicPath: ["datenmodellierung", "schluessel-identitaet"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "datenmodellierung", "schluessel-identitaet", "sanierung-v200"]
draft: false
---
![Schlüssel und Identität](/schlaufuchs-platform/images/informatik/sanierung-v200-architektur-datenpraxis/schluessel-und-identitaet.svg)

Schlüssel entscheiden, wann zwei Datensätze dasselbe Objekt meinen und wie Beziehungen stabil bleiben.

## Grundidee

Dieses Thema gehört zu den Stellen, an denen Informatik nicht nur aus Code besteht. Entscheidend ist, dass Begriffe, Zuständigkeiten und Datenflüsse so klar sind, dass spätere Änderungen nicht zur Ratesituation werden.

## Was du trennen solltest

- **Begriff:** Was ist fachlich gemeint?
- **Struktur:** Wo liegt die Verantwortung im System?
- **Datenfluss:** Welche Information kommt hinein und was verlässt die Grenze?
- **Fehlerfall:** Was passiert, wenn eine Annahme nicht stimmt?

## Ruhiger Prüfweg

1. Beschreibe zuerst die Rolle des Bausteins.
2. Markiere Eingaben, Ausgaben und Abhängigkeiten.
3. Suche nach stillen Nebenwirkungen oder unklaren Zuständigkeiten.
4. Lege einen Kontrollpunkt fest, der das Verhalten sichtbar macht.

## Mini-Beispiel

Eine API wirkt zunächst wie eine einfache Funktion. Erst mit Statuscodes, ungültigen Eingaben, Versionierung und Logging wird sichtbar, ob sie im echten Systembetrieb verständlich bleibt.

## Merksatz

Schlüssel und Identität wird tragfähig, wenn Verantwortung, Datenfluss und Fehlerfälle vor der Umsetzung bewusst getrennt werden.
