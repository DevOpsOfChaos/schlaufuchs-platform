---
title: "Strukturtyp und Strukturvariable ruhig trennen"
description: "Unterscheide in C++-Beispielen Typbeschreibung, konkrete Variable und Initialisierung bei Strukturen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "strukturvariablen-definieren-und-initialisieren", "strukturtyp-und-strukturvariable-ruhig-trennen"]
taskId: "INF-PROG-CPP-STRUCTINIT-001"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
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
