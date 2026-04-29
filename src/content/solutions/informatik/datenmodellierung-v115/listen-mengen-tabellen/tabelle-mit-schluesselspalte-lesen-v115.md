---
title: "Lösung: Tabelle mit Schlüsselspalte lesen"
description: "Musterlösung zu Tabelle mit Schlüsselspalte lesen mit Trennkante und Gegenprobe."
subject: "informatik"
section: "Feinstruktur Informatik"
topicPath: ["datenmodellierung-v115", "listen-mengen-tabellen", "tabelle-mit-schluesselspalte-lesen-v115"]
taskId: "informatik-tabelle-mit-schluesselspalte-lesen-v115"
relatedExercise: "informatik/datenmodellierung-v115/listen-mengen-tabellen/tabelle-mit-schluesselspalte-lesen-v115"
tags: ["informatik", "Feinstruktur Informatik", "loesung"]
draft: false
---
## Musterlösung

Das geprüfte Unterthema ist **Tabelle mit Schlüsselspalte lesen**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Ein Name wird als eindeutig angenommen.

Fachlich ruhiger ist dagegen:

> Der Fall wird über Zustand, Eingabe, Ablauf und Verantwortlichkeit getrennt, nicht über spontanes Code-Ändern.

## Begründung

Die zentrale Prüffrage war:

> Welche Spalte identifiziert einen Datensatz zuverlässig?

Eine passende Antwort ist: Die saubere Lösung beginnt mit einem beobachtbaren Zustand und einer kleinen reproduzierbaren Änderung. Dadurch wird klar, welcher Schritt verantwortlich ist. Die Prüffrage wird beantwortet, indem Eingabe, Ablauf und Ausgabe getrennt werden.

## Gegenprobe

Die Entscheidung würde kippen, wenn die Eingabe stabil bleibt, aber ein anderer Programmzustand verändert wird. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
