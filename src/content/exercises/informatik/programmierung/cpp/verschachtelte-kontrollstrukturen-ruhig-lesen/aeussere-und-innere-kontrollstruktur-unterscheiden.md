---
title: Äußere und innere Kontrollstruktur unterscheiden
description: Beschreibe bei kleinen C++-Beispielen, welche Struktur den Rahmen bildet und welche Struktur darin verschachtelt ist.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - kontrollstrukturen
  - verschachtelte-kontrollstrukturen-ruhig-lesen
  - aeussere-und-innere-kontrollstruktur-unterscheiden
taskId: INF-PROG-CPP-NESTED-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - verschachtelung
hintPoints:
  - "Suche zuerst den äußeren Block."
  - "Frage danach, welche Struktur nur innerhalb dieses Rahmens wirkt."
selfCheckPoints:
  - "Sind äußere und innere Struktur getrennt?"
  - "Ist die Reihenfolge der Prüfungen erklärt?"
transferIdeas:
  - "Übertrage die Logik auf Schleife mit if oder if mit weiterem if."
reflectionPrompt: "Warum hilft Einrückung besonders bei verschachtelten Strukturen?"
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
