---
title: "Event-Schema und Versionierung"
description: "Überblick über stabile Ereignisformate, Schemaänderungen und Kompatibilität in eventbasierten Systemen."
subject: "informatik"
section: "Events"
topicPath: ["event-schema-und-versionierung", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Events"]
draft: false
---
# Event-Schema und Versionierung

Ein Event-Schema beschreibt Aufbau und Bedeutung eines Ereignisses. Versionierung regelt, wie sich dieses Format ändern darf.

## Einordnung

Events werden oft von mehreren Diensten gelesen. Eine unkoordinierte Änderung kann Konsumenten brechen, auch wenn der erzeugende Dienst selbst funktioniert.

## Zentrale Aspekte

- Events sollten fachlich klar benannt sein.
- Neue Felder sind oft kompatibler als umbenannte Felder.
- Konsumenten müssen mit unbekannten Feldern umgehen können.
- Schema Registry oder Verträge machen Änderungen sichtbar.

## Beispiele und Zusammenhang

Ein Event `OrderPlaced` erhält ein neues optionales Feld für Rabattinformationen. Alte Konsumenten können es ignorieren.

## Abgrenzung

Eventversionierung ist nicht nur ein technisches JSON-Problem. Auch Bedeutungsänderungen können inkompatibel sein.

## Häufige Missverständnisse

Ein Feld umzudeuten, ohne den Eventnamen oder die Version anzupassen.

## Kurz zusammengefasst

- Events sind Verträge zwischen Systemen.
- Kompatibilität betrifft Struktur und Bedeutung.
- Versionierung schützt unabhängige Weiterentwicklung.
