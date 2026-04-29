---
title: "Arraygrenzenfehler im Schleifendurchlauf finden"
description: "Finde in kleinen C++-Schleifen Grenzfehler bei Array-Zugriffen und begründe die Korrektur."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "array-durchlaeufe-mit-for-ruhig-lesen", "arraygrenzenfehler-im-schleifendurchlauf-finden"]
taskId: "INF-PROG-CPP-LOOPARRAY-002"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
## Aufgabe 1: Fehlerstelle benennen

Gegeben ist:

```cpp
int A[] = {2, 4, 6, 8};
for (int i = 0; i <= 4; i++) {
  cout << A[i] << endl;
}
```

Erkläre:

- an welcher Stelle der Grenzfehler liegt,
- welcher Zugriff problematisch wird,
- und wie die Schleifenbedingung korrigiert werden sollte.

## Aufgabe 2: Warum ist vier Elemente nicht gleich letzter Index 4?

Erkläre in 2 bis 4 Sätzen den Unterschied zwischen Elementanzahl und letztem gültigen Index.
