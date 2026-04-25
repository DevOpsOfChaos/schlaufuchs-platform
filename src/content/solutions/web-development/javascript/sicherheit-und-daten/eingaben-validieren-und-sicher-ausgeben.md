---
title: "Lösung – Eingaben validieren und sicher ausgeben"
description: "Musterlösung mit fachlicher Begründung zur passenden JavaScript-Aufgabe."
subject: "web-development"
section: "JavaScript"
topicPath:
  - "javascript"
  - "sicherheit-und-daten"
  - "eingaben-validieren-und-sicher-ausgeben"
taskId: "web-js-v99-eingaben-validieren-und-sicher-ausgeben"
relatedExercise: "web-development/javascript/sicherheit-und-daten/eingaben-validieren-und-sicher-ausgeben"
tags:
  - "web development"
  - "javascript"
  - "sicherheit"
  - "validierung"
  - "xss"
  - "lösung"
draft: false
---

## Lösung

textContent behandelt die Eingabe als Text und nicht als HTML. Dadurch wird aus eingegebenen Zeichen keine ausführbare Struktur. Serverseitige Prüfung bleibt nötig, weil Client-Code verändert oder umgangen werden kann.

## Kontrollgedanke

Die Lösung ist gut, wenn sie nicht nur Syntax nennt, sondern die Verantwortung sauber trennt: vorhandene Struktur lesen, Entscheidung treffen, Rückmeldung geben und Fehler nicht unsichtbar lassen.
