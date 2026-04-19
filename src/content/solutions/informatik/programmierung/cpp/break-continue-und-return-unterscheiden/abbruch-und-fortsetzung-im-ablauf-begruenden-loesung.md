---
title: Musterlösung – Abbruch und Fortsetzung im Ablauf begründen
description: Musterlösung zur Aufgabe INF-PROG-CPP-FLOW-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - kontrollfluss-und-abbruch
  - break-continue-und-return-unterscheiden
  - abbruch-und-fortsetzung-im-ablauf-begruenden-loesung
taskId: INF-PROG-CPP-FLOW-001
relatedExercise: src/content/exercises/informatik/programmierung/cpp/break-continue-und-return-unterscheiden/abbruch-und-fortsetzung-im-ablauf-begruenden.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Wirkung zuordnen

- überspringt nur den restlichen Teil des aktuellen Schleifendurchlaufs → <code>continue</code>
- verlässt die aktuelle Funktion → <code>return</code>
- verlässt eine Schleife sofort → <code>break</code>

## Aufgabe 2: Schleifenbeispiel erklären

Bei <code>continue</code> wird nur der Rest des aktuellen Durchlaufs übersprungen. Danach prüft die Schleife ihre Bedingung erneut und kann mit dem nächsten Wert weiterlaufen.

## Aufgabe 3: Denkfehler prüfen

Beides stoppt zwar etwas, aber nicht denselben Bereich. <code>break</code> betrifft typischerweise eine Schleife oder Auswahl, <code>return</code> beendet die ganze aktuelle Funktion.
