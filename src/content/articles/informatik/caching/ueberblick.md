---
title: "Caching"
description: "Überblick über Caching als Zwischenspeicherung zur Beschleunigung von Zugriffen."
subject: "informatik"
section: "Systeme"
topicPath: ["caching", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Systeme"]
draft: false
---
# Caching

![Schaubild zu Caching.](/schlaufuchs-platform/images/overviews/v149/caching.svg)

*Das Schaubild zeigt schnellen Zwischenspeicher zwischen Anfrage und Datenquelle.*



Caching speichert bereits berechnete oder geladene Daten zwischen, damit spätere Zugriffe schneller sind. Ein Cache kann im Browser, im Arbeitsspeicher, auf Festplatte, in Datenbanken, in CDNs oder in Anwendungen liegen. Er nutzt die Annahme, dass bestimmte Daten wiederverwendet werden.

## Einordnung

Caching verbessert Performance und reduziert Last, bringt aber die Frage nach Aktualität mit. Je länger Daten im Cache bleiben, desto größer ist das Risiko veralteter Informationen. Gute Cache-Strategien balancieren Geschwindigkeit und Korrektheit.

## Zentrale Aspekte

- **Cache-Hit und Cache-Miss:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Ablaufzeit und Invalidierung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **lokale und verteilte Caches:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Konsistenz zwischen Quelle und Cache:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Ein Browser cached Bilder und Stylesheets. Eine Anwendung cached häufig genutzte Datenbankabfragen. Ein CDN hält statische Dateien näher beim Benutzer. Jede Ebene braucht Regeln, wann Daten erneuert werden.

## Abgrenzung

Caching ist kein Ersatz für effiziente Grundlogik. Ein Cache kann langsame Abläufe verdecken, aber auch neue Fehler erzeugen. Besonders schwierig sind Änderungen, Löschungen und benutzerabhängige Daten.

## Häufige Missverständnisse

Häufig wird Cache-Invalidierung unterschätzt. Veraltete Daten, falsche Nutzerzuordnung oder unklare Ablaufzeiten können schwer zu diagnostizieren sein. Ein weiterer Fehler ist, sensible private Daten in gemeinsam genutzten Caches abzulegen.

## Kurz zusammengefasst

- Caching beschleunigt Wiederverwendung von Daten.
- Aktualität und Invalidierung sind zentrale Herausforderungen.
- Private und öffentliche Cache-Daten müssen getrennt werden.
