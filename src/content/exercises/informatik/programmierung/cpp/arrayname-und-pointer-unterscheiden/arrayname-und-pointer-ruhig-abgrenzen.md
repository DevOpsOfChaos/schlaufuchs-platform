---
title: Arrayname und Pointer ruhig abgrenzen
description: Vergleiche Array und Pointer so, dass ähnliche Nutzung nicht zur falschen Gleichsetzung führt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - pointer-und-adressen
  - arrayname-und-pointer-unterscheiden
  - arrayname-und-pointer-ruhig-abgrenzen
taskId: INF-PROG-CPP-PTR-006
level: mittel
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - aufgabe
hintPoints:
  - "Frage zuerst, wer den Speicherbereich selbst mitbringt."
  - "Achte darauf, ob nur eine Adresse gespeichert wird oder mehrere Elemente fest angelegt sind."
selfCheckPoints:
  - "Habe ich ähnliche Nutzung und gleiche Struktur nicht verwechselt?"
  - "Habe ich Array und Pointer jeweils sauber beschrieben?"
transferIdeas:
  - "Übertrage die Unterscheidung auf Funktionsparameter, Elementzugriffe oder sizeof-Ausdrücke."
reflectionPrompt: "Welche Mini-Demo hat dir die Struktur klarer gezeigt: Zugriff oder sizeof?"
---
## Aufgabe 1: Strukturaussagen zuordnen

Ordne jede Aussage einer der Kategorien zu: **Array**, **Pointer**, **beides nicht**.

- bringt den Speicherbereich für mehrere Elemente selbst mit
- speichert eine Adresse in einer eigenen Variablen
- kann im Beispiel mit <code>p = andere;</code> auf ein anderes Ziel umgehängt werden
- wird durch ähnliche Indexschreibweise automatisch zum gleichen Konzept wie ein Pointer
- lässt sich mit <code>sizeof</code> als gesamter Bereich betrachten

## Aufgabe 2: Umhäng-Demo lesen

Gegeben ist:

```cpp
int zahlen[3] = {1, 2, 3};
int andere[3] = {4, 5, 6};
int *p = zahlen;

p = andere;
```

Erkläre in Worten, was sich hier tatsächlich ändert und was sich gerade **nicht** ändert.

## Aufgabe 3: Indexzugriff nicht überbewerten

Warum beweist der ähnliche Zugriff mit <code>zahlen[0]</code> und <code>p[0]</code> noch nicht, dass Array und Pointer fachlich dasselbe sind?

## Aufgabe 4: <code>sizeof</code> als Diagnose lesen

Gegeben ist:

```cpp
int zahlen[3] = {1, 2, 3};
int *p = zahlen;
```

Warum hilft schon der Vergleich von <code>sizeof(zahlen)</code> und <code>sizeof(p)</code>, die beiden Rollen sauberer auseinanderzuhalten?

## Aufgabe 5: Fehlschluss entkräften

Jemand sagt: „Wenn <code>int *p = zahlen;</code> erlaubt ist, dann ist <code>zahlen</code> einfach nur ein anderer Pointername.“

Warum ist diese Aussage didaktisch zu grob oder falsch?
