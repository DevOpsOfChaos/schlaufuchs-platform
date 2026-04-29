---
title: "Lösung – JavaScript – CSP, XSS und sichere Ausgabe als Grundidee"
description: "Musterlösung zur Aufgabe: Bewerte zwei Ausgabevarianten für einen Kommentartext: textContent und innerHTML. Erkläre, wo XSS-Risiko entsteht und wie CSP zusätzlich helfen kann."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "sicherheit-und-daten", "csp-xss-und-sichere-ausgabe-grundidee"]
taskId: "web-v100-csp-xss-und-sichere-ausgabe-grundidee"
relatedExercise: "web-development/javascript/sicherheit-und-daten/csp-xss-und-sichere-ausgabe-grundidee"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Musterlösung

Eine gute Lösung beginnt nicht mit möglichst viel Code, sondern mit einer klaren Einordnung: Lerne, warum fremde Eingaben nicht ungeprüft als HTML ausgegeben werden sollten und welche Rolle eine Content Security Policy spielt.

Für die Beispielseite wird zuerst der sichtbare Fall beschrieben. Danach wird entschieden, welche Ressource, welches Ereignis, welcher Zustand oder welche Sicherheitsregel wirklich relevant ist.

## Beispielhafte Begründung

- **Sichtbare Wirkung:** Nutzerinnen und Nutzer sollen eine stabile, verständliche Rückmeldung erhalten.
- **Technische Entscheidung:** Sichere Ausgabe beginnt im Code. Eine CSP kann zusätzlich begrenzen, was der Browser ausführen darf.
- **Prüfung:** Die Lösung wird nicht nur im Idealfall betrachtet, sondern auch bei langsamer Verbindung, fehlendem Inhalt, falscher Eingabe oder späterer Wartung.

## Kleine Lösungsskizze

```html
// sicherer für reinen Text
output.textContent = userName;

// riskant bei ungeprüften Inhalten
output.innerHTML = userName;
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
