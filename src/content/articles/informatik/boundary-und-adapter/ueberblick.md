---
title: "Boundary und Adapter"
description: "Überblick über Grenzen zwischen Fachlogik und technischen Anschlüssen in Softwarearchitekturen."
subject: "informatik"
section: "Architektur"
topicPath: ["boundary-und-adapter", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Architektur"]
draft: false
---
# Boundary und Adapter

![Schaubild zu Boundary und Adapter.](/schlaufuchs-platform/images/overviews/v150/boundary-und-adapter.svg)

*Das Schaubild zeigt, wie Adapter eine Grenze zwischen Domäne und Außenwelt bilden.*



Eine Boundary beschreibt eine Grenze zwischen Kernlogik und Außenwelt. Ein Adapter übersetzt zwischen dieser Grenze und konkreten Technologien.

## Einordnung

Software spricht mit Datenbanken, APIs, Dateisystemen oder Benutzeroberflächen. Boundaries helfen, Fachlogik stabil zu halten, während Adapter technische Details kapseln.

## Zentrale Aspekte

- Boundaries definieren, was der Kern braucht oder anbietet.
- Adapter enthalten technische Umsetzung.
- Tests können Boundaries mit Ersatzobjekten nutzen.
- Technologiewechsel wird leichter, wenn die Grenze klar ist.

## Beispiele und Zusammenhang

Eine Zahlungslogik kennt eine Schnittstelle `PaymentGateway`. Der konkrete Adapter ruft später Stripe, PayPal oder ein Testsystem auf.

## Abgrenzung

Boundaries sind keine zusätzliche Schicht um ihrer selbst willen. Sie lohnen sich dort, wo Abhängigkeiten, Tests oder Austauschbarkeit relevant sind.

## Häufige Missverständnisse

Technische Details direkt in Fachlogik einzubauen und dadurch Tests und Änderungen schwer zu machen.

## Kurz zusammengefasst

- Boundaries schützen den fachlichen Kern.
- Adapter übersetzen zu konkreten Technologien.
- Klare Grenzen verbessern Testbarkeit und Wartbarkeit.
