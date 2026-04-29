---
title: "rand, srand und Zielbereich ruhig erklären"
description: "Erkläre, wie rand, srand und eine Bereichsbegrenzung in einfachen C++-Beispielen zusammenspielen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "zufallszahlen-mit-rand-und-srand-verstehen", "rand-srand-und-zielbereich-ruhig-erklaeren"]
taskId: "INF-PROG-CPP-RAND-001"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
## Aufgabe 1: Rollen trennen

Erkläre bei diesem Muster die Rollen von <code>srand</code> und <code>rand</code>:

```cpp
srand(time(NULL));
int wurf = 1 + rand() % 6;
```

## Aufgabe 2: Bereich begründen

Erkläre in 2 bis 4 Sätzen, warum aus <code>1 + rand() % 6</code> ein Bereich von 1 bis 6 entsteht.
