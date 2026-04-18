---
title: Arraygrenzen und Indexfehler begründen
description: Prüfe an einem kleinen Beispiel, warum eine falsche Schleifenbedingung zu ungültigen Array-Zugriffen führt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - arrays
  - array-indizes-und-grenzen-ruhig-pruefen
  - arraygrenzen-und-indexfehler-begruenden
taskId: INF-PROG-CPP-ARRAYS-002
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - arrays
  - fehler
hintPoints:
  - "Unterscheide Anzahl der Elemente und letzten gültigen Index."
  - "Prüfe die Schleifenbedingung sehr genau auf < oder <=."
selfCheckPoints:
  - "Ist der letzte gültige Index korrekt bestimmt?"
  - "Zeigst du, an welcher Stelle der ungültige Zugriff entsteht?"
transferIdeas:
  - "Übertrage die Denkregel auf Listen, Strings oder andere Sammlungen mit Index."
reflectionPrompt: "Warum sind kleine Grenzfehler oft schwerer zu bemerken als grobe Syntaxfehler?"
---

## Aufgabe 1: Fehler finden

Gegeben ist:

```cpp
int A[] = {2, 4, 6, 8};
for (int L = 0; L <= 4; L++) {
  std::cout << A[L] << "
";
}
```

Erkläre, warum die Schleifenbedingung problematisch ist.

## Aufgabe 2: Bereich richtig benennen

Welche Indizes sind für das Array aus Aufgabe 1 gültig?

## Aufgabe 3: Korrektur formulieren

Wie sollte die Schleifenbedingung ruhiger lauten und warum?
