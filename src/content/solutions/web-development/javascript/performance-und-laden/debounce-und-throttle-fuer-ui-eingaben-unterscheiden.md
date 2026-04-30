---
title: "Lösung – Debounce und Throttle für UI-Eingaben unterscheiden"
description: "Musterlösung mit fachlicher Begründung zur passenden JavaScript-Aufgabe."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "performance-und-laden", "debounce-und-throttle-fuer-ui-eingaben-unterscheiden"]
taskId: "web-js-v99-debounce-und-throttle-fuer-ui-eingaben-unterscheiden"
relatedExercise: "src/content/exercises/web-development/javascript/performance-und-laden/debounce-und-throttle-fuer-ui-eingaben-unterscheiden"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Lösung

Beim Suchfeld passt Debounce, weil erst nach einer kurzen Tipp-Pause gesucht werden soll. Scroll-Position passt oft zu Throttle, weil regelmäßig, aber begrenzt reagiert werden soll. Resize kann je nach Ziel debounce oder throttle nutzen; für eine Endberechnung passt Debounce.

## Kontrollgedanke

Die Lösung ist gut, wenn sie nicht nur Syntax nennt, sondern die Verantwortung sauber trennt: vorhandene Struktur lesen, Entscheidung treffen, Rückmeldung geben und Fehler nicht unsichtbar lassen.
