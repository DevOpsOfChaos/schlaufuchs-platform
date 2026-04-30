---
title: "Lösung – JavaScript: Fetch-Status und Netzwerkfehler trennen"
description: "Musterlösung zur Aufgabe: Lerne, warum fetch bei HTTP-Fehlerstatus nicht automatisch in catch springt und wie du Rückmeldungen sauber planst."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "daten-laden", "fetch-fehlerstatus-und-netzwerkfehler-trennen"]
taskId: "web-v102-fetch-fehlerstatus-und-netzwerkfehler-trennen"
relatedExercise: "src/content/exercises/web-development/javascript/daten-laden/fetch-fehlerstatus-und-netzwerkfehler-trennen"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Musterlösung

Ein Netzwerkfehler bedeutet, dass keine brauchbare Antwort angekommen ist. 404 bedeutet, dass die Ressource nicht gefunden wurde. 500 deutet auf ein Serverproblem. Die Oberfläche sollte diese Fälle nicht gleich behandeln.

## Begründung

Die Lösung ist fachlich sauber, wenn sie nicht nur den Normalfall beschreibt. Wichtig ist, dass Zustand, Bedienung und Rückmeldung zusammenpassen. Dadurch wird die Oberfläche nachvollziehbarer und der Code später leichter zu prüfen.

## Typischer Prüfpunkt

Eine gute Antwort nennt nicht nur eine Technik, sondern erklärt auch, **warum** diese Technik zur konkreten Situation passt.
