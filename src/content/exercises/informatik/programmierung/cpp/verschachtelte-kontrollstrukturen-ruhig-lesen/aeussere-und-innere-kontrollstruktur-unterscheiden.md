---
title: "Äußere und innere Kontrollstruktur unterscheiden"
description: "Beschreibe bei kleinen C++-Beispielen, welche Struktur den Rahmen bildet und welche Struktur darin verschachtelt ist."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "verschachtelte-kontrollstrukturen-ruhig-lesen", "aeussere-und-innere-kontrollstruktur-unterscheiden"]
taskId: "INF-PROG-CPP-NESTED-001"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
## Aufgabe 1: Ebenen benennen

Gegeben ist:

```cpp
for (int i = 0; i < 5; i++) {
  if (werte[i] > 10) {
    cout << werte[i] << endl;
  }
}
```

Erkläre:

- welche Struktur außen liegt,
- welche Struktur innen liegt,
- und welche Aktion nur im inneren Wahrheitsfall ausgeführt wird.

## Aufgabe 2: Reihenfolge begründen

Erkläre in 2 bis 4 Sätzen, warum zuerst die Schleife und erst innerhalb jedes Durchlaufs das if wirkt.
