---
title: "Lösung – HTML – preload, prefetch und Resource Hints einordnen"
description: "Musterlösung zur Aufgabe: Sortiere fünf Ressourcen einer Beispielseite: sofort wichtig, vielleicht später wichtig oder normal ladbar. Begründe preload und prefetch getrennt."
subject: "web-development"
section: "HTML"
topicPath:
  - "html"
  - "performance-und-medien"
  - "preload-prefetch-und-resource-hints-einordnen"
taskId: "web-v100-preload-prefetch-und-resource-hints-einordnen"
relatedExercise: "web-development/html/performance-und-medien/preload-prefetch-und-resource-hints-einordnen"
tags:
  - "web development"
  - "html"
  - "performance"
  - "preload"
  - "prefetch"
  - "lösung"
draft: false
---

## Musterlösung

Eine gute Lösung beginnt nicht mit möglichst viel Code, sondern mit einer klaren Einordnung: Ordne Resource Hints als Priorisierungshilfe ein, ohne jede Datei vorsorglich als wichtig zu markieren.

Für die Beispielseite wird zuerst der sichtbare Fall beschrieben. Danach wird entschieden, welche Ressource, welches Ereignis, welcher Zustand oder welche Sicherheitsregel wirklich relevant ist.

## Beispielhafte Begründung

- **Sichtbare Wirkung:** Nutzerinnen und Nutzer sollen eine stabile, verständliche Rückmeldung erhalten.
- **Technische Entscheidung:** Resource Hints sind Prioritäten, keine Dekoration. Jeder Hinweis sollte eine klare Ladeentscheidung ausdrücken.
- **Prüfung:** Die Lösung wird nicht nur im Idealfall betrachtet, sondern auch bei langsamer Verbindung, fehlendem Inhalt, falscher Eingabe oder späterer Wartung.

## Kleine Lösungsskizze

```html
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="prefetch" href="/wissen/css/layout-grundlagen/">
```

Diese Skizze ist absichtlich klein. Sie zeigt die zentrale Entscheidung, ohne das Thema durch ein komplettes Beispielprojekt zu verdecken.

## Typische Fehlerkorrektur

Eine schwache Lösung behandelt nur den ersten erfolgreichen Fall. Eine bessere Lösung fragt zusätzlich:

1. Ist der relevante Zustand sichtbar?
2. Bleibt die Seite verständlich, wenn etwas fehlt oder später lädt?
3. Ist die Entscheidung sicher, wartbar und überprüfbar?

## Selbstkontrolle

- Passt die Lösung zur Aufgabe und nicht nur zu einem zufälligen Codebeispiel?
- Wird die Wirkung für Nutzerinnen und Nutzer beschrieben?
- Ist die Grenze zwischen HTML, CSS, JavaScript und Projektpraxis nachvollziehbar?
