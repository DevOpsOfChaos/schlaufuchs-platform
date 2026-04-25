---
title: "Lösung – Datenattribute als Brücke zwischen HTML und JavaScript"
description: "Musterlösung mit fachlicher Begründung zur passenden JavaScript-Aufgabe."
subject: "web-development"
section: "JavaScript"
topicPath:
  - "javascript"
  - "zustand-und-ui"
  - "datenattribute-als-bruecke-zwischen-html-und-javascript"
taskId: "web-js-v99-datenattribute-als-bruecke-zwischen-html-und-javascript"
relatedExercise: "web-development/javascript/zustand-und-ui/datenattribute-als-bruecke-zwischen-html-und-javascript"
tags:
  - "web development"
  - "javascript"
  - "data attribute"
  - "html"
  - "ui"
  - "lösung"
draft: false
---

## Lösung

Die Buttons können data-filter="alle", data-filter="offen" und data-filter="erledigt" tragen. JavaScript liest button.dataset.filter. Styling-Klassen bleiben für Aussehen zuständig, während data-filter die fachliche Auswahl benennt.

## Kontrollgedanke

Die Lösung ist gut, wenn sie nicht nur Syntax nennt, sondern die Verantwortung sauber trennt: vorhandene Struktur lesen, Entscheidung treffen, Rückmeldung geben und Fehler nicht unsichtbar lassen.
