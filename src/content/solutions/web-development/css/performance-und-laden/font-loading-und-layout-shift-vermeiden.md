---
title: "Lösung – CSS – Font Loading und Layout Shift vermeiden"
description: "Musterlösung zur Aufgabe: Bewerte eine Seite mit Webfont und Fallback-Schrift. Beschreibe, wo Layout Shift entstehen kann und welche CSS-Entscheidung ihn reduziert."
subject: "web-development"
section: "CSS"
topicPath:
  - "css"
  - "performance-und-laden"
  - "font-loading-und-layout-shift-vermeiden"
taskId: "web-v100-font-loading-und-layout-shift-vermeiden"
relatedExercise: "web-development/css/performance-und-laden/font-loading-und-layout-shift-vermeiden"
tags:
  - "web development"
  - "css"
  - "fonts"
  - "layout shift"
  - "performance"
  - "lösung"
draft: false
---

## Musterlösung

Eine gute Lösung beginnt nicht mit möglichst viel Code, sondern mit einer klaren Einordnung: Lerne, warum Schriftarten Layoutverschiebungen auslösen können und wie du Fallback, font-display und Größen stabil planst.

Für die Beispielseite wird zuerst der sichtbare Fall beschrieben. Danach wird entschieden, welche Ressource, welches Ereignis, welcher Zustand oder welche Sicherheitsregel wirklich relevant ist.

## Beispielhafte Begründung

- **Sichtbare Wirkung:** Nutzerinnen und Nutzer sollen eine stabile, verständliche Rückmeldung erhalten.
- **Technische Entscheidung:** Gute Font-Nutzung bedeutet nicht nur die richtige Schrift, sondern ein stabiles Verhalten während des Ladens.
- **Prüfung:** Die Lösung wird nicht nur im Idealfall betrachtet, sondern auch bei langsamer Verbindung, fehlendem Inhalt, falscher Eingabe oder späterer Wartung.

## Kleine Lösungsskizze

```html
@font-face {
  font-family: "Inter";
  src: url("/fonts/inter.woff2") format("woff2");
  font-display: swap;
}

body {
  font-family: "Inter", system-ui, sans-serif;
}
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
