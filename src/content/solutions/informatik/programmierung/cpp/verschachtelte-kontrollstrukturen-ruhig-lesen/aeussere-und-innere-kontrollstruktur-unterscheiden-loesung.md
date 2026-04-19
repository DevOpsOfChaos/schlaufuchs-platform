---
title: Musterlösung – Äußere und innere Kontrollstruktur unterscheiden
description: Musterlösung zur Aufgabe INF-PROG-CPP-NESTED-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - kontrollstrukturen
  - verschachtelte-kontrollstrukturen-ruhig-lesen
  - aeussere-und-innere-kontrollstruktur-unterscheiden-loesung
taskId: INF-PROG-CPP-NESTED-001
relatedExercise: src/content/exercises/informatik/programmierung/cpp/verschachtelte-kontrollstrukturen-ruhig-lesen/aeussere-und-innere-kontrollstruktur-unterscheiden.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Ebenen benennen

Außen liegt die `for`-Schleife. Innen liegt die `if`-Bedingung. Ausgegeben wird ein Wert nur dann, wenn die Schleife gerade ein Element betrachtet und die innere Bedingung `werte[i] > 10` wahr ist.

## Aufgabe 2: Reihenfolge begründen

Zuerst erzeugt die Schleife die einzelnen Durchläufe und damit die jeweiligen Indexpositionen. Erst innerhalb jedes dieser Durchläufe prüft das `if`, ob die zusätzliche Bedingung erfüllt ist.
