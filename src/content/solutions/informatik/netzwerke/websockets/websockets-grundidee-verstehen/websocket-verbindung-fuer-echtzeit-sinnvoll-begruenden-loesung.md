---
title: "Musterlösung – WebSockets für Echtzeit begründen"
description: "Musterlösung zur Aufgabe INF-NET-WS-001."
subject: "informatik"
section: "Netzwerke"
topicPath: ["netzwerke", "websockets", "websockets-grundidee-verstehen", "websocket-verbindung-fuer-echtzeit-sinnvoll-begruenden"]
taskId: "INF-NET-WS-001"
relatedExercise: "src/content/exercises/informatik/netzwerke/websockets/websockets-grundidee-verstehen/websocket-verbindung-fuer-echtzeit-sinnvoll-begruenden.md"
tags: ["informatik", "Netzwerke", "loesung"]
draft: false
---
## Aufgabe 1: Echtzeit begründen

Ein Chat oder Live-Ticker braucht schnelle laufende Aktualisierungen. Eine offene Verbindung erleichtert genau diesen unmittelbaren Austausch.

## Aufgabe 2: Verbindungslogik beschreiben

Die Verbindung bleibt bestehen. Deshalb können Nachrichten in beide Richtungen ausgetauscht werden, ohne ständig neu anzufragen.

## Aufgabe 3: Denkfehler prüfen

Bei WebSockets kann der Server auch ohne neue Aktion des Clients Daten senden, weil die Verbindung bereits offen ist.
