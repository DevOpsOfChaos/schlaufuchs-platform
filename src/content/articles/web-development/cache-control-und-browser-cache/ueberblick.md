---
title: "Cache-Control und Browser-Cache"
description: "Allgemeiner Überblick über Browser-Caching, Cache-Control und die Balance zwischen Aktualität und Geschwindigkeit."
subject: web-development
section: "Performance"
topicPath:
  - "cache-control-und-browser-cache"
  - "ueberblick"
learningGoals:
  - "Du kannst Cache-Control und Browser-Cache als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Dateien werden häufig lange gecacht, ohne sie bei Änderungen zu versionieren."
keyTakeaways:
  - "Caching macht Webseiten schneller."
  - "Aktualität und Geschwindigkeit müssen balanciert werden."
  - "Versionierte Assets erlauben lange Cache-Zeiten."
recognizeSignals:
  - "Änderungen sind lokal oder bei Nutzern nicht sichtbar."
  - "Performance-Analysen zeigen wiederholte Ressourcenanfragen."
selfCheckPoints:
  - "Kann ich Cache-Control und Browser-Cache in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "web-development"
  - "cache"
  - "performance"
  - "http"
draft: false
---

# Cache-Control und Browser-Cache

![Schaubild zu Cache-Control und Browser-Cache.](/schlaufuchs-platform/images/overviews/v150/cache-control-und-browser-cache.svg)

*Das Schaubild zeigt, wie HTTP-Header Wiederverwendung und Aktualisierung steuern.*



Der Browser-Cache speichert geladene Ressourcen wie Bilder, CSS, JavaScript oder HTML. `Cache-Control` beschreibt, wie lange diese Ressourcen wiederverwendet werden dürfen.

## Einordnung

Caching verbessert Ladezeiten und reduziert Datenverkehr. Zu aggressives Caching kann aber dazu führen, dass Nutzer veraltete Dateien sehen.

## Zentrale Aspekte

- **Max-Age:** Gibt an, wie lange eine Ressource frisch ist.
- **Validierung:** Der Browser kann prüfen, ob eine Datei noch aktuell ist.
- **Fingerprinting:** Hash-Dateinamen erlauben lange Cache-Zeiten.
- **HTML und Assets:** HTML wird oft kürzer gecacht als versionierte Assets.

## Beispiele und Zusammenhang

Eine CSS-Datei mit Hash im Namen kann lange gecacht werden. Ändert sich ihr Inhalt, bekommt sie einen neuen Namen und die HTML-Datei verweist darauf.

## Abgrenzung

Caching von HTTP-Ressourcen ist nicht dasselbe wie Anwendungsdaten im Browser-Speicher.

## Häufige Missverständnisse

Dateien werden häufig lange gecacht, ohne sie bei Änderungen zu versionieren.

## Kurz zusammengefasst

- Caching macht Webseiten schneller.
- Aktualität und Geschwindigkeit müssen balanciert werden.
- Versionierte Assets erlauben lange Cache-Zeiten.
