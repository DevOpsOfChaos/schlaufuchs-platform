---
title: "Lösung – Web-Projektpraxis – Linting, Formatierung und Code Review nutzen"
description: "Musterlösung zur Aufgabe: Formuliere eine kleine Review-Checkliste für eine Webänderung: Lesbarkeit, Barrierefreiheit, Fehlerzustände und Build-Prüfung."
subject: "web-development"
section: "Projektpraxis"
topicPath:
  - "projektpraxis"
  - "struktur-und-qualitaet"
  - "linting-formatierung-und-code-review-nutzen"
taskId: "web-v100-linting-formatierung-und-code-review-nutzen"
relatedExercise: "web-development/projektpraxis/struktur-und-qualitaet/linting-formatierung-und-code-review-nutzen"
tags:
  - "web development"
  - "projektpraxis"
  - "linting"
  - "formatierung"
  - "review"
  - "lösung"
draft: false
---

## Musterlösung

Eine gute Lösung beginnt nicht mit möglichst viel Code, sondern mit einer klaren Einordnung: Verstehe, wie automatische Prüfungen und kurze Reviews helfen, Stilfragen, Flüchtigkeitsfehler und riskante Änderungen früher zu finden.

Für die Beispielseite wird zuerst der sichtbare Fall beschrieben. Danach wird entschieden, welche Ressource, welches Ereignis, welcher Zustand oder welche Sicherheitsregel wirklich relevant ist.

## Beispielhafte Begründung

- **Sichtbare Wirkung:** Nutzerinnen und Nutzer sollen eine stabile, verständliche Rückmeldung erhalten.
- **Technische Entscheidung:** Automatische Prüfungen finden vieles, aber nicht alles. Gute Reviews verbinden Technik, Verständlichkeit und Nutzererfahrung.
- **Prüfung:** Die Lösung wird nicht nur im Idealfall betrachtet, sondern auch bei langsamer Verbindung, fehlendem Inhalt, falscher Eingabe oder späterer Wartung.

## Kleine Lösungsskizze

```html
npm run build
# optional im Projekt:
npm run lint
npm run format
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
