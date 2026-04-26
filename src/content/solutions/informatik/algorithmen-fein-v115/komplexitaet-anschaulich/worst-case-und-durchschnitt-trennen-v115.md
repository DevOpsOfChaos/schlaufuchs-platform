---
title: "Lösung: Worst Case und Durchschnitt trennen"
description: "Musterlösung zu Worst Case und Durchschnitt trennen mit Trennkante und Gegenprobe."
subject: informatik
section: "Feinstruktur Informatik"
topicPath:
  - "algorithmen-fein-v115"
  - "komplexitaet-anschaulich"
  - "worst-case-und-durchschnitt-trennen-v115"
taskId: "informatik-worst-case-und-durchschnitt-trennen-v115"
relatedExercise: "informatik/algorithmen-fein-v115/komplexitaet-anschaulich/worst-case-und-durchschnitt-trennen-v115"
tags:
  - "informatik"
  - "feinstruktur"
  - "unterthema"
  - "algorithmische feinstruktur"
  - "komplexität anschaulich"
  - "lösung"
draft: false
---

## Musterlösung

Das geprüfte Unterthema ist **Worst Case und Durchschnitt trennen**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Ein günstiger Einzelfall wird als allgemeine Laufzeit genutzt.

Fachlich ruhiger ist dagegen:

> Der Fall wird über Zustand, Eingabe, Ablauf und Verantwortlichkeit getrennt, nicht über spontanes Code-Ändern.

## Begründung

Die zentrale Prüffrage war:

> Welcher Fall ist garantiert abgedeckt?

Eine passende Antwort ist: Die saubere Lösung beginnt mit einem beobachtbaren Zustand und einer kleinen reproduzierbaren Änderung. Dadurch wird klar, welcher Schritt verantwortlich ist. Die Prüffrage wird beantwortet, indem Eingabe, Ablauf und Ausgabe getrennt werden.

## Gegenprobe

Die Entscheidung würde kippen, wenn die Eingabe stabil bleibt, aber ein anderer Programmzustand verändert wird. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
