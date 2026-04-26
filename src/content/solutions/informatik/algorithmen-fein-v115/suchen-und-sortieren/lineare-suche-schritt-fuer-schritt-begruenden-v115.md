---
title: "Lösung: Lineare Suche Schritt für Schritt begründen"
description: "Musterlösung zu Lineare Suche Schritt für Schritt begründen mit Trennkante und Gegenprobe."
subject: informatik
section: "Feinstruktur Informatik"
topicPath:
  - "algorithmen-fein-v115"
  - "suchen-und-sortieren"
  - "lineare-suche-schritt-fuer-schritt-begruenden-v115"
taskId: "informatik-lineare-suche-schritt-fuer-schritt-begruenden-v115"
relatedExercise: "informatik/algorithmen-fein-v115/suchen-und-sortieren/lineare-suche-schritt-fuer-schritt-begruenden-v115"
tags:
  - "informatik"
  - "feinstruktur"
  - "unterthema"
  - "algorithmische feinstruktur"
  - "suchen und sortieren"
  - "lösung"
draft: false
---

## Musterlösung

Das geprüfte Unterthema ist **Lineare Suche Schritt für Schritt begründen**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Es wird angenommen, man könne direkt springen.

Fachlich ruhiger ist dagegen:

> Der Fall wird über Zustand, Eingabe, Ablauf und Verantwortlichkeit getrennt, nicht über spontanes Code-Ändern.

## Begründung

Die zentrale Prüffrage war:

> Gibt es eine Ordnung, die schnelleres Suchen erlaubt?

Eine passende Antwort ist: Die saubere Lösung beginnt mit einem beobachtbaren Zustand und einer kleinen reproduzierbaren Änderung. Dadurch wird klar, welcher Schritt verantwortlich ist. Die Prüffrage wird beantwortet, indem Eingabe, Ablauf und Ausgabe getrennt werden.

## Gegenprobe

Die Entscheidung würde kippen, wenn die Eingabe stabil bleibt, aber ein anderer Programmzustand verändert wird. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
