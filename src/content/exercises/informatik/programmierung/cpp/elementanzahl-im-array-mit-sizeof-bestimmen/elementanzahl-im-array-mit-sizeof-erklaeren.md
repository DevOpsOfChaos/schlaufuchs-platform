---
title: Elementanzahl im Array mit sizeof erklären
description: Erkläre die Quotientenidee hinter sizeof(array) geteilt durch sizeof(array[0]).
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - arrays
  - elementanzahl-im-array-mit-sizeof-bestimmen
  - elementanzahl-im-array-mit-sizeof-erklaeren
taskId: INF-PROG-CPP-ARRAYS-003
level: mittel
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - arrays
  - sizeof
hintPoints:
  - "Benenne zuerst, was sizeof(array) und sizeof(array[0]) jeweils liefern."
  - "Denke die Formel als Gesamtgröße geteilt durch Einzelgröße."
selfCheckPoints:
  - "Ist klar, was Zähler und Nenner bedeuten?"
  - "Verwechslst du Speichergröße nicht mit Elementanzahl?"
transferIdeas:
  - "Übertrage die Quotientenidee auf Alltagsbeispiele mit Gesamtmenge und Einzelportion."
reflectionPrompt: "Warum wirkt die Formel klarer, wenn du sie als Größenvergleich statt als Spezialtrick liest?"
---

## Aufgabe 1: Formel erklären

Erkläre in Worten, was diese Berechnung bedeutet:

```cpp
int anzahl = sizeof(A) / sizeof(A[0]);
```

## Aufgabe 2: Begriffe trennen

Warum liefert <code>sizeof(A)</code> allein noch nicht direkt die Anzahl der Elemente?

## Aufgabe 3: Denkmodell bilden

Finde ein Alltagsbeispiel, mit dem sich die Quotientenidee „Gesamtgröße geteilt durch Einzelgröße“ anschaulich erklären lässt.
