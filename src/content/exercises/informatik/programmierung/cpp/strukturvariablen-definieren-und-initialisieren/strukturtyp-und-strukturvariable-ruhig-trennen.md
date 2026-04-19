---
title: Strukturtyp und Strukturvariable ruhig trennen
description: Unterscheide in C++-Beispielen Typbeschreibung, konkrete Variable und Initialisierung bei Strukturen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - strukturvariablen-definieren-und-initialisieren
  - strukturtyp-und-strukturvariable-ruhig-trennen
taskId: INF-PROG-CPP-STRUCTINIT-001
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

## Aufgabe 1: Typ oder Variable?

Lies dieses Beispiel:

```cpp
struct Punkt {
  int x;
  int y;
  string name;
};

Punkt P1;
Punkt P2 = {3, 4, "E"};
```

Erkläre:

- welcher Teil nur den Typ beschreibt,
- welche Namen konkrete Variablen sind,
- und welche Variable direkt initialisiert wird.

## Aufgabe 2: Reihenfolge verstehen

Erkläre in 2 bis 4 Sätzen, warum bei <code>{3, 4, "E"}</code> die Reihenfolge der Werte wichtig ist.
