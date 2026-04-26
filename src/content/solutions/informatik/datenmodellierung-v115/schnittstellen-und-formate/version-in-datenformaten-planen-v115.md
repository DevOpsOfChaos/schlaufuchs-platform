---
title: "Lösung: Version in Datenformaten planen"
description: "Musterlösung zu Version in Datenformaten planen mit Trennkante und Gegenprobe."
subject: informatik
section: "Feinstruktur Informatik"
topicPath:
  - "datenmodellierung-v115"
  - "schnittstellen-und-formate"
  - "version-in-datenformaten-planen-v115"
taskId: "informatik-version-in-datenformaten-planen-v115"
relatedExercise: "informatik/datenmodellierung-v115/schnittstellen-und-formate/version-in-datenformaten-planen-v115"
tags:
  - "informatik"
  - "feinstruktur"
  - "unterthema"
  - "datenmodellierung"
  - "schnittstellen und formate"
  - "lösung"
draft: false
---

## Musterlösung

Das geprüfte Unterthema ist **Version in Datenformaten planen**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Alte und neue Daten werden ohne Kennzeichnung gemischt.

Fachlich ruhiger ist dagegen:

> Der Fall wird über Zustand, Eingabe, Ablauf und Verantwortlichkeit getrennt, nicht über spontanes Code-Ändern.

## Begründung

Die zentrale Prüffrage war:

> Woran erkennt der Code die Formatversion?

Eine passende Antwort ist: Die saubere Lösung beginnt mit einem beobachtbaren Zustand und einer kleinen reproduzierbaren Änderung. Dadurch wird klar, welcher Schritt verantwortlich ist. Die Prüffrage wird beantwortet, indem Eingabe, Ablauf und Ausgabe getrennt werden.

## Gegenprobe

Die Entscheidung würde kippen, wenn die Eingabe stabil bleibt, aber ein anderer Programmzustand verändert wird. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
