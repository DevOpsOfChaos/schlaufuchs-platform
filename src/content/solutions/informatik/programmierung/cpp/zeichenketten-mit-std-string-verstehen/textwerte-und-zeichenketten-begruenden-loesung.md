---
title: Musterlösung – Textwerte und Zeichenketten begründen
description: Musterlösung zur Aufgabe INF-PROG-CPP-STRING-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - typen-und-texte
  - zeichenketten-mit-std-string-verstehen
  - textwerte-und-zeichenketten-begruenden-loesung
taskId: INF-PROG-CPP-STRING-001
relatedExercise: src/content/exercises/informatik/programmierung/cpp/zeichenketten-mit-std-string-verstehen/textwerte-und-zeichenketten-begruenden.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Typen zuordnen

- Anfangsbuchstabe eines Namens → eher <code>char</code>
- vollständiger Benutzername → eher <code>std::string</code>
- Ja/Nein als einzelnes Zeichen <code>J</code> oder <code>N</code> → eher <code>char</code>
- Stadtname → eher <code>std::string</code>

## Aufgabe 2: Unterschied erklären

<code>'A'</code> ist ein einzelnes Zeichen. <code>"Anna"</code> ist ein ganzer Text aus mehreren Zeichen, der als zusammenhängender Wert behandelt wird.

## Aufgabe 3: Denkfehler prüfen

Ein Name besteht aus mehreren Zeichen in fester Reihenfolge. Ein einzelnes <code>char</code> kann nur ein Symbol speichern und reicht deshalb für ganze Namen nicht aus.
