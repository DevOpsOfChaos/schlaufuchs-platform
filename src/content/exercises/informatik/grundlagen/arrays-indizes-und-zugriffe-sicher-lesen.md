---
title: "Arrays, Indizes und Zugriffe sicher lesen"
description: "Diese Aufgabe vertieft den Umgang mit Array-Längen, Indizes und typischen Zugriffsfehlern."
subject: "informatik"
section: "Grundlagen"
topicPath: ["grundlagen", "arrays-indizes-und-zugriffe-sicher-lesen"]
taskId: "AUTO-ARRAYS-INDIZES-UND-ZUGRIFFE-SICHER-LESEN"
tags: ["informatik", "Grundlagen", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Arbeitsauftrag

Bearbeite die Aufgaben so, dass immer klar ist, welche Indizes gültig sind und welcher Zugriff sicher ist.

## Aufgabe 1

Gegeben ist:

```c
int werte[5] = {4, 7, 9, 12, 15};
```

1. Welche Werte haben `werte[0]`, `werte[2]` und `werte[4]`?
2. Warum ist `werte[5]` kein gültiger Zugriff?

## Aufgabe 2

Erkläre in eigenen Worten:

1. Warum Arrays in vielen Sprachen bei Index 0 beginnen.
2. Warum ein Array eine feste Länge haben kann.

## Aufgabe 3

Welche Indizes sind bei einem Array der Länge 8 gültig?

## Aufgabe 4

Gegeben ist:

```c
for (int i = 0; i < 5; i++) {
  printf("%d\n", werte[i]);
}
```

1. Warum funktioniert diese Schleife korrekt?
2. Was wäre am Ausdruck `i <= 5` problematisch?

## Aufgabe 5

Erkläre kurz:

1. Warum Arrays und Schleifen oft zusammen verwendet werden.
2. Warum falsche Indexgrenzen zu Fehlern führen können.

## Hinweise

- Ein Array der Länge 5 hat meist die Indizes 0 bis 4.
- Gültige Zugriffe enden vor der Länge des Arrays.
- Schleifenbedingungen müssen zu den Indizes passen.
