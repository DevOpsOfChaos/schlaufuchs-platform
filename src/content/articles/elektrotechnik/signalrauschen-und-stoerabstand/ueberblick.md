---
title: "Signalrauschen und Störabstand"
description: "Allgemeiner Überblick über Signalrauschen, Störabstand und die Lesbarkeit elektrischer Signale."
subject: "elektrotechnik"
section: "Signale"
topicPath:
  - "signalrauschen-und-stoerabstand"
learningGoals:
  - "Du kannst den Begriff einordnen und von ähnlichen Begriffen abgrenzen."
  - "Du kennst typische Teilaspekte und praktische Zusammenhänge."
  - "Du erkennst häufige Missverständnisse zu diesem Thema."
practiceIdeas: []
commonMistakes:
  - "Häufig wird ein schwankender Messwert sofort als defekter Sensor gedeutet. Oft liegt die Ursache aber in Versorgung, Leitung, Bezugspotential oder fehlender Filterung."
keyTakeaways:
  - "Signalrauschen begrenzt, wie zuverlässig ein Signal gelesen werden kann. Der Störabstand hilft einzuschätzen, ob ein Signal robust genug für Auswertung oder Schaltentscheidungen ist."
  - "Rauschen ist nicht dasselbe wie ein systematischer Messfehler. Ein Offset verschiebt ein Signal dauerhaft, während Rauschen unregelmäßige oder breitbandige Schwankungen beschreibt."
recognizeSignals:
  - "Es geht um Grundlagen, Einordnung, Begriffe oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ruhig und allgemein erklären?"
  - "Kann ich ein Beispiel nennen, ohne direkt in eine Spezialaufgabe zu springen?"
level: "mittel"
tags:
  - "elektrotechnik"
  - "signale"
  - "rauschen"
  - "störabstand"
draft: false
---

# Signalrauschen und Störabstand

![Schaubild zu Signalrauschen und Störungen.](/schlaufuchs-platform/images/overviews/v149/signalrauschen-und-stoerungen.svg)

*Das Schaubild zeigt Nutzsignal, Störung und Maßnahmen zur Trennung.*



Signalrauschen bezeichnet unerwünschte Schwankungen, die einem Nutzsignal überlagert sind. Der Störabstand beschreibt, wie deutlich das Nutzsignal gegenüber solchen Störungen hervortritt.

In realen Schaltungen sind Signale nie vollkommen ideal. Leitungen, Bauteile, Versorgungsspannungen, Temperatur und elektromagnetische Einflüsse können Messwerte und digitale Zustände beeinflussen.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Rauschen kann kontinuierlich auftreten oder als kurze Störung sichtbar werden.
- Ein großer Störabstand macht Signale robuster gegenüber Fehlinterpretationen.
- Filterung, saubere Masseführung, kurze Leitungen und passende Pegel verbessern die Nutzbarkeit eines Signals.

## Abgrenzung

Rauschen ist nicht dasselbe wie ein systematischer Messfehler. Ein Offset verschiebt ein Signal dauerhaft, während Rauschen unregelmäßige oder breitbandige Schwankungen beschreibt.

## Beispiele

- Ein analoger Temperatursensor liefert leicht schwankende ADC-Werte.
- Eine lange Eingangsleitung kann Störungen aufnehmen, die wie zusätzliche Impulse wirken.

## Häufiges Missverständnis

Häufig wird ein schwankender Messwert sofort als defekter Sensor gedeutet. Oft liegt die Ursache aber in Versorgung, Leitung, Bezugspotential oder fehlender Filterung.

## Kurz zusammengefasst

Signalrauschen begrenzt, wie zuverlässig ein Signal gelesen werden kann. Der Störabstand hilft einzuschätzen, ob ein Signal robust genug für Auswertung oder Schaltentscheidungen ist.
