---
title: "HTTP-Caching-Strategien"
description: "Überblick über Cache-Strategien für statische Assets, HTML und dynamische Daten."
subject: "web-development"
section: "Caching"
topicPath: ["http-caching-strategien", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Caching"]
draft: false
---
# HTTP-Caching-Strategien

HTTP-Caching-Strategien legen fest, welche Antworten zwischengespeichert werden dürfen, wie lange sie gültig bleiben und wann sie erneut geprüft werden.

## Einordnung

Caching verbessert Ladezeit und reduziert Serverlast. Gleichzeitig können falsche Strategien veraltete Inhalte anzeigen oder personalisierte Daten zu breit speichern.

## Zentrale Aspekte

- Statische, versionierte Assets können lange gecacht werden.
- HTML braucht oft kürzere Gültigkeit oder Revalidierung.
- `ETag` und `Last-Modified` ermöglichen bedingte Anfragen.
- Private Daten dürfen nicht in öffentliche Caches geraten.

## Beispiele und Zusammenhang

Eine Datei `app.4f3a.js` kann lange im Cache bleiben. Die Startseite sollte häufiger geprüft werden, weil sie auf neue Inhalte verweist.

## Abgrenzung

Caching ist nicht nur Browsercache. Auch CDN, Proxy, Service Worker und Server können Antworten speichern.

## Häufige Missverständnisse

Für alle Ressourcen dieselben Cache-Header zu setzen und Unterschiede zwischen HTML, Assets und Nutzerdaten zu ignorieren.

## Kurz zusammengefasst

- Cache-Strategien hängen vom Ressourcentyp ab.
- Versionierte Assets erlauben lange Cachezeiten.
- Dynamische und private Daten brauchen vorsichtige Regeln.
