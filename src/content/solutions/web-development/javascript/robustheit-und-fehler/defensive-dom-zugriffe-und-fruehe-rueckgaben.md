---
title: "Lösung – defensive DOM-Zugriffe und frühe Rückgaben"
description: "Musterlösung mit fachlicher Begründung zur passenden JavaScript-Aufgabe."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "robustheit-und-fehler", "defensive-dom-zugriffe-und-fruehe-rueckgaben"]
taskId: "web-js-v99-defensive-dom-zugriffe-und-fruehe-rueckgaben"
relatedExercise: "web-development/javascript/robustheit-und-fehler/defensive-dom-zugriffe-und-fruehe-rueckgaben"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Lösung

Nach querySelector prüft if (!form || !status) return;. Danach folgt der normale Code ohne zusätzliche Einrückung. Das ist lesbarer, weil der Sonderfall früh beendet wird und der Hauptfall klar sichtbar bleibt.

## Kontrollgedanke

Die Lösung ist gut, wenn sie nicht nur Syntax nennt, sondern die Verantwortung sauber trennt: vorhandene Struktur lesen, Entscheidung treffen, Rückmeldung geben und Fehler nicht unsichtbar lassen.
