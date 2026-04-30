---
title: "Lösung – Web-Projektpraxis – Ordnerstruktur, Assets und Komponenten ordnen"
description: "Musterlösung zur Aufgabe: Entwirf eine kleine Ordnerstruktur für eine Lernseite mit Bildern, Komponenten und Inhaltsdateien. Begründe, was wohin gehört."
subject: "web-development"
section: "Projektpraxis"
topicPath: ["projektpraxis", "struktur-und-qualitaet", "ordnerstruktur-assets-und-komponenten-ordnen"]
taskId: "web-v100-ordnerstruktur-assets-und-komponenten-ordnen"
relatedExercise: "src/content/exercises/web-development/projektpraxis/struktur-und-qualitaet/ordnerstruktur-assets-und-komponenten-ordnen"
tags: ["web-development", "Projektpraxis", "loesung"]
draft: false
---
## Musterlösung

Eine gute Lösung beginnt nicht mit möglichst viel Code, sondern mit einer klaren Einordnung: Lerne, Projektdateien so zu strukturieren, dass Inhalte, wiederverwendbare Bausteine und statische Assets auffindbar bleiben.

Für die Beispielseite wird zuerst der sichtbare Fall beschrieben. Danach wird entschieden, welche Ressource, welches Ereignis, welcher Zustand oder welche Sicherheitsregel wirklich relevant ist.

## Beispielhafte Begründung

- **Sichtbare Wirkung:** Nutzerinnen und Nutzer sollen eine stabile, verständliche Rückmeldung erhalten.
- **Technische Entscheidung:** Gute Projektstruktur ist eine Lernhilfe: Sie macht sichtbar, welche Datei Inhalt, Darstellung, Logik oder Asset ist.
- **Prüfung:** Die Lösung wird nicht nur im Idealfall betrachtet, sondern auch bei langsamer Verbindung, fehlendem Inhalt, falscher Eingabe oder späterer Wartung.

## Kleine Lösungsskizze

```html
src/
  components/
  content/
  pages/
  utils/
public/
  illustrations/
  images/
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
