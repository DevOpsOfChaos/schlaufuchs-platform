---
title: "Content Negotiation"
description: "Überblick über Aushandlung von Formaten, Sprachen und Darstellungsvarianten zwischen Client und Server."
subject: "web-development"
section: "HTTP"
topicPath: ["content-negotiation", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "HTTP"]
draft: false
---
# Content Negotiation

Content Negotiation bedeutet, dass Client und Server über Header aushandeln, welche Repräsentation einer Ressource geliefert wird.

## Einordnung

Eine URL kann je nach Anfrage HTML, JSON, unterschiedliche Sprachen oder komprimierte Inhalte liefern. Der Server nutzt dafür Anfrageheader wie `Accept`, `Accept-Language` oder `Accept-Encoding`.

## Zentrale Aspekte

- Der Client beschreibt bevorzugte Formate.
- Der Server wählt eine passende Repräsentation.
- Caches müssen Varianten korrekt unterscheiden.
- `Vary` macht relevante Anfrageheader für Caches sichtbar.

## Beispiele und Zusammenhang

Ein Browser fordert HTML an, ein API-Client JSON. Beide können dieselbe Ressource meinen, aber unterschiedliche Darstellungen erhalten.

## Abgrenzung

Content Negotiation ist nicht dasselbe wie Routing. Die URL kann gleich bleiben, während die Darstellung variiert.

## Häufige Missverständnisse

Varianten auszuliefern, ohne Cache-Header wie `Vary` zu setzen, sodass falsche Inhalte wiederverwendet werden.

## Kurz zusammengefasst

- Content Negotiation trennt Ressource und Darstellung.
- Header bestimmen bevorzugte Formate und Sprachen.
- Caching muss Varianten korrekt berücksichtigen.
