---
title: Musterlösung – Funktionen im Ablauf ruhig einordnen
description: Musterlösung zur Aufgabe INF-PROG-CPP-FUNC-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-ablauf
  - funktionen-und-unterprogramme-verstehen
  - funktionen-im-ablauf-ruhig-einordnen-loesung
taskId: INF-PROG-CPP-FUNC-001
relatedExercise: src/content/exercises/informatik/programmierung/cpp/funktionen-und-unterprogramme-verstehen/funktionen-im-ablauf-ruhig-einordnen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Hauptablauf und Teilaufgabe trennen

Der Hauptablauf liest zuerst die Eingaben, ruft dann die Funktion zur Mittelwertberechnung auf und gibt danach das Ergebnis aus. Die Funktion übernimmt dabei nur den Teilauftrag, aus zwei Zahlen einen Mittelwert zu berechnen.

## Aufgabe 2: Warum auslagern?

- Der Hauptablauf bleibt übersichtlich, weil die grobe Reihenfolge besser sichtbar ist.
- Die Berechnung kann leichter geprüft oder später wiederverwendet werden.

## Aufgabe 3: Denkfehler prüfen

Beim Funktionsaufruf startet kein neues, unabhängiges Programm. Stattdessen wird innerhalb desselben Programms nur eine klar abgegrenzte Teilaufgabe ausgeführt und danach in den Hauptablauf zurückgekehrt.
