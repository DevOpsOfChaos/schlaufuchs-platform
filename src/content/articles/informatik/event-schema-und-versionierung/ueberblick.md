---
title: "Event-Schema und Versionierung"
description: "Überblick über stabile Ereignisformate, Schemaänderungen und Kompatibilität in eventbasierten Systemen."
subject: informatik
section: "Events"
topicPath:
  - "event-schema-und-versionierung"
  - "ueberblick"
learningGoals:
  - "Du kannst Event-Schema und Versionierung als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Ein Feld umzudeuten, ohne den Eventnamen oder die Version anzupassen."
keyTakeaways:
  - "Events sind Verträge zwischen Systemen."
  - "Kompatibilität betrifft Struktur und Bedeutung."
  - "Versionierung schützt unabhängige Weiterentwicklung."
recognizeSignals:
  - "Mehrere Dienste konsumieren dieselben Ereignisse."
  - "Ein Eventformat soll geändert werden."
selfCheckPoints:
  - "Kann ich Event-Schema und Versionierung in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "informatik"
  - "events"
  - "schema"
  - "versionierung"
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
