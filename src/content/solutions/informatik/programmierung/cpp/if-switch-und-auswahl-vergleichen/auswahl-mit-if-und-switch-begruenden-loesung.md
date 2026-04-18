---
title: Musterlösung – Auswahl mit if und switch begründen
description: Musterlösung zur Aufgabe INF-PROG-CPP-KONTROLL-002.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - kontrollstrukturen
  - if-switch-und-auswahl-vergleichen
  - auswahl-mit-if-und-switch-begruenden-loesung
taskId: INF-PROG-CPP-KONTROLL-002
relatedExercise: src/content/exercises/informatik/programmierung/cpp/if-switch-und-auswahl-vergleichen/auswahl-mit-if-und-switch-begruenden.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Passende Form wählen

- Zahl positiv? → eher <code>if</code>, weil nur eine einzelne Bedingung geprüft wird.
- Menüpunkt 1, 2, 3 oder 4 → eher <code>switch</code>, weil mehrere feste Fälle vorliegen.
- Passwort leer, zu kurz oder gültig → eher <code>else if</code>, weil mehrere Bedingungen nacheinander geprüft werden.

## Aufgabe 2: Denkfehler prüfen

Man kann zwar vieles mit <code>if</code> lösen, aber nicht jede Form liest sich dann ruhig. Bei festen Fällen macht <code>switch</code> die Auswahlidee oft klarer sichtbar.
