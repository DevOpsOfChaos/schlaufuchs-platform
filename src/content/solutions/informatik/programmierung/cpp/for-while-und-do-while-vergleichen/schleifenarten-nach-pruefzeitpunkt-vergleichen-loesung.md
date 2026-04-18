---
title: Musterlösung – Schleifenarten nach Prüfzeitpunkt vergleichen
description: Musterlösung zur Aufgabe INF-PROG-CPP-KONTROLL-003.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - kontrollstrukturen
  - for-while-und-do-while-vergleichen
  - schleifenarten-nach-pruefzeitpunkt-vergleichen-loesung
taskId: INF-PROG-CPP-KONTROLL-003
relatedExercise: src/content/exercises/informatik/programmierung/cpp/for-while-und-do-while-vergleichen/schleifenarten-nach-pruefzeitpunkt-vergleichen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Schleife wählen

- Zehn Listenelemente ausgeben → eher <code>for</code>, weil ein klarer Zählschritt vorliegt.
- Erneut fragen, bis die Eingabe gültig ist → eher <code>while</code>, weil eine offene Bedingung am Anfang geprüft wird.
- Menü mindestens einmal anzeigen → eher <code>do while</code>, weil mindestens ein Durchlauf garantiert sein soll.

## Aufgabe 2: Kurzvergleich

<code>while</code> prüft die Bedingung vor dem Durchlauf. <code>do while</code> führt den Block erst einmal aus und prüft danach. Darum ist do while hilfreich, wenn der Ablauf mindestens einmal stattfinden muss.
