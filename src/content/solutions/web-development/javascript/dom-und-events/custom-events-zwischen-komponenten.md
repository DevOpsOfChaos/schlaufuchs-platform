---
title: "Lösung – JavaScript: Custom Events zwischen Komponenten"
description: "Musterlösung zur Aufgabe: Verstehe, wie eigene Events helfen, Komponenten lose zu koppeln, statt direkte Funktionsaufrufe durch die Oberfläche zu ziehen."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "dom-und-events", "custom-events-zwischen-komponenten"]
taskId: "web-v102-custom-events-zwischen-komponenten"
relatedExercise: "src/content/exercises/web-development/javascript/dom-und-events/custom-events-zwischen-komponenten"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Musterlösung

Ein guter Eventname ist konkret, etwa favorite:add. In detail reichen meist id und Quelle. Die Komponente meldet das Ereignis, während Speicher oder Statusanzeige getrennt darauf reagieren.

## Begründung

Die Lösung ist fachlich sauber, wenn sie nicht nur den Normalfall beschreibt. Wichtig ist, dass Zustand, Bedienung und Rückmeldung zusammenpassen. Dadurch wird die Oberfläche nachvollziehbarer und der Code später leichter zu prüfen.

## Typischer Prüfpunkt

Eine gute Antwort nennt nicht nur eine Technik, sondern erklärt auch, **warum** diese Technik zur konkreten Situation passt.
