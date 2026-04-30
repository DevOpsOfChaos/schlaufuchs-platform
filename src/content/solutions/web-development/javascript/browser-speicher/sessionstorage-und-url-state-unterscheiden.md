---
title: "Lösung – Browser: sessionStorage und URL-Zustand unterscheiden"
description: "Musterlösung zur Aufgabe: Lerne, wann ein Zustand in die URL gehört und wann sessionStorage für temporäre Bedienzustände besser passt."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "browser-speicher", "sessionstorage-und-url-state-unterscheiden"]
taskId: "web-v102-sessionstorage-und-url-state-unterscheiden"
relatedExercise: "src/content/exercises/web-development/javascript/browser-speicher/sessionstorage-und-url-state-unterscheiden"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Musterlösung

Eine Suche gehört meist in die URL, damit der Zustand teilbar ist. Eine nur vorübergehend geöffnete Seitenleiste passt eher in sessionStorage. Ein dauerhaft gewünschtes Theme kann in localStorage liegen.

## Begründung

Die Lösung ist fachlich sauber, wenn sie nicht nur den Normalfall beschreibt. Wichtig ist, dass Zustand, Bedienung und Rückmeldung zusammenpassen. Dadurch wird die Oberfläche nachvollziehbarer und der Code später leichter zu prüfen.

## Typischer Prüfpunkt

Eine gute Antwort nennt nicht nur eine Technik, sondern erklärt auch, **warum** diese Technik zur konkreten Situation passt.
