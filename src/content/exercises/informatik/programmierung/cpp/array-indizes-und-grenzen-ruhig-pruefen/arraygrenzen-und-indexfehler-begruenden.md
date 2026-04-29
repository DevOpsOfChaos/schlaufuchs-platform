---
title: "Arraygrenzen und Indexfehler begründen"
description: "Prüfe an einem kleinen Beispiel, warum eine falsche Schleifenbedingung zu ungültigen Array-Zugriffen führt."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "array-indizes-und-grenzen-ruhig-pruefen", "arraygrenzen-und-indexfehler-begruenden"]
taskId: "INF-PROG-CPP-ARRAYS-002"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
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
