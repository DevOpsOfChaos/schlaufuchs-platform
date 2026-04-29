---
title: "Request, Response und Payload"
description: "Eine Schnittstelle ist nur gut prüfbar, wenn Eingabe, Ausgabe und Pflichtfelder eindeutig beschrieben sind."
subject: "informatik"
section: "api-design"
topicPath: ["api-design", "request-response"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "api-design", "request-response", "sanierung-v200"]
draft: false
---
![Request, Response und Payload](/schlaufuchs-platform/images/informatik/sanierung-v200-architektur-datenpraxis/request-response-und-payload.svg)

Eine Schnittstelle ist nur gut prüfbar, wenn Eingabe, Ausgabe und Pflichtfelder eindeutig beschrieben sind.

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

Request, Response und Payload wird tragfähig, wenn Verantwortung, Datenfluss und Fehlerfälle vor der Umsetzung bewusst getrennt werden.
