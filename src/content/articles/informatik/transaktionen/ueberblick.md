---
title: "Transaktionen"
description: "Allgemeiner Überblick über Transaktionen, Konsistenz und sichere Änderungen in Datenbanken."
subject: "informatik"
section: "Datenbanken"
topicPath: ["transaktionen", "ueberblick"]
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
# Transaktionen

Eine Transaktion fasst mehrere Datenbankoperationen zu einer logischen Einheit zusammen. Entweder gelingen alle Schritte oder keiner.

## Einordnung

Transaktionen sind wichtig, wenn Änderungen zusammengehören. Sie verhindern halbfertige Zustände bei Fehlern, Abstürzen oder parallelen Zugriffen.

## Zentrale Aspekte

- **Atomarität:** Alle Schritte gelten als eine Einheit.
- **Konsistenz:** Regeln der Datenbank bleiben erhalten.
- **Isolation:** Gleichzeitige Transaktionen werden kontrolliert.
- **Dauerhaftigkeit:** Bestätigte Änderungen bleiben gespeichert.

## Beispiele und Zusammenhang

Beim Anlegen einer Bestellung können Auftrag, Positionen und Zahlungsstatus zusammen gespeichert werden. Schlägt ein Schritt fehl, wird zurückgerollt.

## Abgrenzung

Eine Transaktion ist nicht einfach eine einzelne Abfrage, sondern ein Rahmen für zusammengehörende Änderungen.

## Häufige Missverständnisse

Mehrere abhängige Änderungen werden oft ohne Transaktion ausgeführt.

## Kurz zusammengefasst

- Transaktionen bündeln zusammengehörende Änderungen.
- Rollback verhindert halbfertige Zustände.
- Sie sind grundlegend für konsistente Daten.
