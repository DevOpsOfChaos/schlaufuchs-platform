---
title: "Lösung – HTML – Bildgrößen, srcset und sizes für Ladezeit planen"
description: "Musterlösung zur Aufgabe: Plane für eine Bildkarte drei Bildgrößen und beschreibe, welche Information srcset und sizes dem Browser geben."
subject: "web-development"
section: "HTML"
topicPath: ["html", "performance-und-medien", "bildgroessen-srcset-sizes-und-ladezeit"]
taskId: "web-v100-bildgroessen-srcset-sizes-und-ladezeit"
relatedExercise: "src/content/exercises/web-development/html/performance-und-medien/bildgroessen-srcset-sizes-und-ladezeit"
tags: ["web-development", "HTML", "loesung"]
draft: false
---
## Musterlösung

Eine gute Lösung beginnt nicht mit möglichst viel Code, sondern mit einer klaren Einordnung: Verstehe, wie responsive Bilder dem Browser helfen, die passende Bilddatei statt unnötig großer Medien zu laden.

Für die Beispielseite wird zuerst der sichtbare Fall beschrieben. Danach wird entschieden, welche Ressource, welches Ereignis, welcher Zustand oder welche Sicherheitsregel wirklich relevant ist.

## Beispielhafte Begründung

- **Sichtbare Wirkung:** Nutzerinnen und Nutzer sollen eine stabile, verständliche Rückmeldung erhalten.
- **Technische Entscheidung:** Responsive Bilder sparen Ladezeit, wenn HTML dem Browser ehrlich sagt, welche Bildgrößen wirklich gebraucht werden.
- **Prüfung:** Die Lösung wird nicht nur im Idealfall betrachtet, sondern auch bei langsamer Verbindung, fehlendem Inhalt, falscher Eingabe oder späterer Wartung.

## Kleine Lösungsskizze

```html
<img
  src="karte-800.jpg"
  srcset="karte-400.jpg 400w, karte-800.jpg 800w, karte-1200.jpg 1200w"
  sizes="(max-width: 700px) 92vw, 42rem"
  alt="Lernkarte mit Beispielinhalt"
/>
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
