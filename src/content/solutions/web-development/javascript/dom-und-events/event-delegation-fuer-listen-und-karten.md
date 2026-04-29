---
title: "Lösung – Event Delegation für Listen und Karten"
description: "Musterlösung mit fachlicher Begründung zur passenden Web-Development-Aufgabe."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "dom-und-events", "event-delegation-fuer-listen-und-karten"]
taskId: "web-v101-event-delegation-fuer-listen-und-karten"
relatedExercise: "web-development/javascript/dom-und-events/event-delegation-fuer-listen-und-karten"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Lösung

Der Listener sitzt auf der Liste. Innerhalb des Handlers wird mit closest geprüft, ob ein Löschbutton getroffen wurde. Nur dann wird der zugehörige Listeneintrag entfernt.

## Kontrollgedanke

Die Lösung ist gut, wenn sie nicht nur Syntax nennt, sondern die Verantwortung sauber trennt: Struktur lesen, Zustand entscheiden, verständlich rückmelden und den Fehlerfall nicht unsichtbar lassen.
