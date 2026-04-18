---
title: Musterlösung – Arraygrenzen und Indexfehler begründen
description: Musterlösung zur Aufgabe INF-PROG-CPP-ARRAYS-002.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - arrays
  - array-indizes-und-grenzen-ruhig-pruefen
  - arraygrenzen-und-indexfehler-begruenden-loesung
taskId: INF-PROG-CPP-ARRAYS-002
relatedExercise: src/content/exercises/informatik/programmierung/cpp/array-indizes-und-grenzen-ruhig-pruefen/arraygrenzen-und-indexfehler-begruenden.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Fehler finden

Die Bedingung <code>L &lt;= 4</code> erlaubt auch den Wert <code>4</code>. Bei vier Array-Elementen gibt es aber nur die gültigen Indizes 0 bis 3. Dadurch wird <code>A[4]</code> angesprochen, obwohl dieser Platz nicht mehr zum Feld gehört.

## Aufgabe 2: Bereich richtig benennen

Gültig sind die Indizes 0, 1, 2 und 3.

## Aufgabe 3: Korrektur formulieren

Ruhiger passt <code>L &lt; 4</code>, weil damit genau die vier gültigen Positionen durchlaufen werden.
