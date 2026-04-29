---
title: "Consumer-Driven Contract Tests"
description: "Überblick über verbrauchergetriebene Vertragstests für Schnittstellen."
subject: "informatik"
section: "Tests"
topicPath: ["consumer-driven-contract-tests", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Tests"]
draft: false
---
# Consumer-Driven Contract Tests

API Contract Testing prüft, ob Anbieter und Verbraucher einer Schnittstelle dieselben Erwartungen an Formate, Felder und Verhalten haben.

## Einordnung

In verteilten Systemen können Dienste unabhängig deployt werden. Contract Tests helfen, inkompatible Änderungen früh zu finden, bevor echte Konsumenten brechen.

## Zentrale Aspekte

- Contracts beschreiben erwartete Requests und Responses.
- Consumer-Driven Contracts starten von Nutzererwartungen der API.
- Schema und Bedeutung müssen zusammen passen.
- Versionierung bleibt trotz Tests wichtig.

## Beispiele und Zusammenhang

Ein Frontend erwartet, dass `/orders` ein Feld `status` liefert. Ein Contract Test verhindert, dass dieses Feld unbemerkt entfernt wird.

## Abgrenzung

Contract Tests ersetzen keine Integrationstests. Sie prüfen den Vertrag, nicht zwingend das komplette Zusammenspiel aller Systeme.

## Häufige Missverständnisse

Nur OpenAPI-Dateien zu pflegen, ohne zu prüfen, ob Implementierung und Konsumenten wirklich dazu passen.

## Kurz zusammengefasst

- Contract Tests schützen Schnittstellenkompatibilität.
- Sie sind besonders nützlich bei unabhängigen Deployments.
- Verträge müssen Struktur und Bedeutung abdecken.
