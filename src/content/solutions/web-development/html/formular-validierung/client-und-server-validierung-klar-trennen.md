---
title: "Lösung – Client- und Servervalidierung klar trennen"
description: "Musterlösung mit fachlicher Begründung zur passenden Web-Development-Aufgabe."
subject: "web-development"
section: "HTML"
topicPath: ["html", "formular-validierung", "client-und-server-validierung-klar-trennen"]
taskId: "web-v101-client-und-server-validierung-klar-trennen"
relatedExercise: "web-development/html/formular-validierung/client-und-server-validierung-klar-trennen"
tags: ["web-development", "HTML", "loesung"]
draft: false
---
## Lösung

Der Browser prüft Pflichtfelder, Format und sofort verständliche Bedienfehler. Der Server prüft alles erneut, weil Anfragen manipuliert werden können. Die Rückmeldung nennt das betroffene Feld und bleibt auch ohne Farbe verständlich.

## Kontrollgedanke

Die Lösung ist gut, wenn sie nicht nur Syntax nennt, sondern die Verantwortung sauber trennt: Struktur lesen, Zustand entscheiden, verständlich rückmelden und den Fehlerfall nicht unsichtbar lassen.
