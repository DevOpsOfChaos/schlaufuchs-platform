---
title: Musterlösung – Ausdrücke mit Priorität ruhig in Teilschritte zerlegen
description: Musterlösung zur Aufgabe INF-PROG-CPP-OP-002.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - operatoren-und-ausdruecke
  - operatorprioritaet-und-klammern-verstehen
  - ausdruecke-mit-prioritaet-ruhig-in-teilschritte-zerlegen-loesung
taskId: INF-PROG-CPP-OP-002
relatedExercise: src/content/exercises/informatik/programmierung/cpp/operatorprioritaet-und-klammern-verstehen/ausdruecke-mit-prioritaet-ruhig-in-teilschritte-zerlegen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Reihenfolge erklären

Zuerst wird der stärker bindende Teil <code>b * c</code> gelesen. Danach wird das Ergebnis mit <code>a</code> addiert. Erst anschließend wird das Gesamtergebnis mit <code>10</code> verglichen.

## Aufgabe 2: Lesbarkeit verbessern

Eine ruhigere Schreibweise wäre zum Beispiel:

```cpp
(a + (b * c)) > 10
```

## Aufgabe 3: Denkfehler prüfen

Ausdrücke werden nicht nur rein von links nach rechts gelesen. Operatorpriorität und Klammern bestimmen, welche Teile zuerst ausgewertet werden.
