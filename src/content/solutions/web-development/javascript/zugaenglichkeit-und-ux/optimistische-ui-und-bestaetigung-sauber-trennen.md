---
title: "Lösung – optimistische UI und Bestätigung sauber trennen"
description: "Musterlösung mit fachlicher Begründung zur passenden Web-Development-Aufgabe."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "zugaenglichkeit-und-ux", "optimistische-ui-und-bestaetigung-sauber-trennen"]
taskId: "web-v101-optimistische-ui-und-bestaetigung-sauber-trennen"
relatedExercise: "web-development/javascript/zugaenglichkeit-und-ux/optimistische-ui-und-bestaetigung-sauber-trennen"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Lösung

Sofort kann ein wartender Zustand gezeigt werden. Erst nach erfolgreicher Antwort ist die Aktion bestätigt. Bei Fehlern wird der sichtbare Zustand zurückgenommen und verständlich erklärt.

## Kontrollgedanke

Die Lösung ist gut, wenn sie nicht nur Syntax nennt, sondern die Verantwortung sauber trennt: Struktur lesen, Zustand entscheiden, verständlich rückmelden und den Fehlerfall nicht unsichtbar lassen.
