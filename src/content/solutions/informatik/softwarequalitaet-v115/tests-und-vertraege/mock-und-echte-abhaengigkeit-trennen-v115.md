---
title: "Lösung: Mock und echte Abhängigkeit trennen"
description: "Musterlösung zu Mock und echte Abhängigkeit trennen mit Trennkante und Gegenprobe."
subject: informatik
section: "Feinstruktur Informatik"
topicPath:
  - "softwarequalitaet-v115"
  - "tests-und-vertraege"
  - "mock-und-echte-abhaengigkeit-trennen-v115"
taskId: "informatik-mock-und-echte-abhaengigkeit-trennen-v115"
relatedExercise: "informatik/softwarequalitaet-v115/tests-und-vertraege/mock-und-echte-abhaengigkeit-trennen-v115"
tags:
  - "informatik"
  - "feinstruktur"
  - "unterthema"
  - "softwarequalität"
  - "tests und verträge"
  - "lösung"
draft: false
---

## Musterlösung

Das geprüfte Unterthema ist **Mock und echte Abhängigkeit trennen**. Der Fall gehört nicht einfach allgemein zum breiten Themenfeld, sondern zu dieser engeren Entscheidung.

## Einordnung

Die naheliegende Verwechslung lautet:

> Instabile Außenwelt wird als normaler Testbestandteil akzeptiert.

Fachlich ruhiger ist dagegen:

> Der Fall wird über Zustand, Eingabe, Ablauf und Verantwortlichkeit getrennt, nicht über spontanes Code-Ändern.

## Begründung

Die zentrale Prüffrage war:

> Welche Abhängigkeit soll im Test ersetzt werden?

Eine passende Antwort ist: Die saubere Lösung beginnt mit einem beobachtbaren Zustand und einer kleinen reproduzierbaren Änderung. Dadurch wird klar, welcher Schritt verantwortlich ist. Die Prüffrage wird beantwortet, indem Eingabe, Ablauf und Ausgabe getrennt werden.

## Gegenprobe

Die Entscheidung würde kippen, wenn die Eingabe stabil bleibt, aber ein anderer Programmzustand verändert wird. Dann wäre nicht mehr dieselbe Trennkante entscheidend, sondern ein Nachbarthema.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe kleine Entscheidung trainiert. Genau dadurch bleibt der Fachbereich übersichtlich: Eine Seite erklärt eine Trennkante, die Aufgabe prüft dieselbe Trennkante und die Lösung macht die Gegenprobe sichtbar.
