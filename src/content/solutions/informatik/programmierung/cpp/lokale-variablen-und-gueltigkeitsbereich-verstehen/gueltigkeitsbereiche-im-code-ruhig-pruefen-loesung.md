---
title: Musterlösung – Gültigkeitsbereiche im Code ruhig prüfen
description: Musterlösung zur Aufgabe INF-PROG-CPP-SCOPE-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-ablauf
  - lokale-variablen-und-gueltigkeitsbereich-verstehen
  - gueltigkeitsbereiche-im-code-ruhig-pruefen-loesung
taskId: INF-PROG-CPP-SCOPE-001
relatedExercise: src/content/exercises/informatik/programmierung/cpp/lokale-variablen-und-gueltigkeitsbereich-verstehen/gueltigkeitsbereiche-im-code-ruhig-pruefen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Sichtbarkeit erklären

Die Variable gehört nur zum Block der <code>for</code>-Schleife. Nach dem Ende der Schleife existiert dieser Gültigkeitsbereich nicht mehr, daher ist der Name außerhalb nicht mehr einfach verwendbar.

## Aufgabe 2: Zwei gleichnamige Variablen

Die beiden Variablen <code>count</code> liegen in verschiedenen Bereichen. Eine gehört zu <code>main</code>, die andere zu einer Funktion. Gleicher Name bedeutet deshalb nicht automatisch gleiche Variable.

## Aufgabe 3: Denkfehler prüfen

Wer nur auf Namen schaut, übersieht den Gültigkeitsbereich. Fachlich ist entscheidend, in welchem Block eine Variable deklariert wurde und wo sie sichtbar ist.
