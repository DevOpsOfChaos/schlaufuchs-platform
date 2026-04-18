---
title: Array und Einzelvariablen ruhig vergleichen
description: Begründe, wann eine feste Sammlung als Array ruhiger passt als mehrere einzelne Variablen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - arrays
  - arrays-in-cpp-verstehen
  - array-und-einzelvariablen-ruhig-vergleichen
taskId: INF-PROG-CPP-ARRAYS-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - arrays
hintPoints:
  - "Frage zuerst, ob mehrere Werte gleichen Typs gesammelt werden."
  - "Achte darauf, ob die Anzahl der Werte fest ist."
selfCheckPoints:
  - "Unterscheidest du Array, Index und Element sauber?"
  - "Begründest du die Sammlungsidee statt nur die Schreibweise?"
transferIdeas:
  - "Übertrage die Aufgabe auf Messwerte, Punktzahlen oder Wochentage."
reflectionPrompt: "Warum ist ein Array oft verständlicher als viele gleichartige Einzelvariablen?"
---

## Aufgabe 1: Form wählen

Erkläre, warum für vier Temperaturmesswerte eher ein Array als vier getrennte Variablen <code>t1</code>, <code>t2</code>, <code>t3</code>, <code>t4</code> passend sein kann.

## Aufgabe 2: Zugriff erklären

Gegeben ist:

```cpp
int werte[4] = {2, 4, 6, 8};
```

Erkläre, was <code>werte[2]</code> bedeutet.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: „Der Index 2 bedeutet, dass dort die Zahl 2 gespeichert ist.“
Erkläre, warum das nicht stimmt.
