---
title: Zusammengehörige Daten als struct begründen
description: Begründe, warum mehrere zusammengehörige Werte in C++ sinnvoll in einer Struktur gebündelt werden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - strukturen-in-cpp-verstehen
  - zusammengehoerige-daten-als-struct-begruenden
taskId: INF-PROG-CPP-STRUCT-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
hintPoints:
  - "Trenne erst die Rolle der einzelnen Teile, dann den Gesamtablauf."
  - "Begründe nicht nur das Ergebnis, sondern auch die Zuordnung."
selfCheckPoints:
  - "Habe ich die entscheidenden Begriffe oder Code-Stellen sauber zugeordnet?"
  - "Ist meine Begründung fachlich ruhig und eindeutig?"
transferIdeas:
  - "Übertrage die Logik auf ein ähnliches kleines C++-Beispiel."
reflectionPrompt: "Welche Unterscheidung war in dieser Aufgabe die wichtigste?"
---

## Aufgabe 1: Warum struct?

Erkläre an einem Punkt mit x, y und name, warum eine Struktur lesbarer sein kann als drei lose Einzelvariablen.

## Aufgabe 2: Komponente erkennen

Nenne bei der Struktur

```cpp
struct Punkt {
  int x;
  int y;
  string name;
};
```

die drei Komponenten und erkläre kurz, warum sie fachlich zusammengehören.
