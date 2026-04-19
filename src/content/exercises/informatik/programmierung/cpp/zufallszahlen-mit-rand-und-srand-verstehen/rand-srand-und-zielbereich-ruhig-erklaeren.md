---
title: rand, srand und Zielbereich ruhig erklären
description: Erkläre, wie rand, srand und eine Bereichsbegrenzung in einfachen C++-Beispielen zusammenspielen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - cmath
  - zufallszahlen-mit-rand-und-srand-verstehen
  - rand-srand-und-zielbereich-ruhig-erklaeren
taskId: INF-PROG-CPP-RAND-001
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

## Aufgabe 1: Rollen trennen

Erkläre bei diesem Muster die Rollen von <code>srand</code> und <code>rand</code>:

```cpp
srand(time(NULL));
int wurf = 1 + rand() % 6;
```

## Aufgabe 2: Bereich begründen

Erkläre in 2 bis 4 Sätzen, warum aus <code>1 + rand() % 6</code> ein Bereich von 1 bis 6 entsteht.
