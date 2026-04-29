---
title: "Musterlösung – AJAX und WebSockets passend vergleichen"
description: "Musterlösung zur Aufgabe INF-NET-WS-002."
subject: "informatik"
section: "Netzwerke"
topicPath: ["netzwerke", "websockets", "ajax-und-websockets-vergleichen", "ajax-und-websockets-fachlich-vergleichen"]
taskId: "INF-NET-WS-002"
relatedExercise: "src/content/exercises/informatik/netzwerke/websockets/ajax-und-websockets-vergleichen/ajax-und-websockets-fachlich-vergleichen.md"
tags: ["informatik", "Netzwerke", "loesung"]
draft: false
---
## Aufgabe 1: Technik zuordnen

- Kommentarformular mit Hintergrundspeichern → eher AJAX
- Live-Chat → eher WebSockets
- Suchvorschläge → eher AJAX
- Sensor-Dashboard mit laufenden Updates → eher WebSockets

## Aufgabe 2: Kommunikationsmodell erklären

AJAX nutzt meist einzelne Hintergrundanfragen. WebSockets nutzen eine dauerhafte bidirektionale Verbindung.

## Aufgabe 3: Denkfehler prüfen

Nicht jede dynamische Seite braucht WebSockets. Für viele Situationen reichen gezielte Hintergrundanfragen völlig aus.
