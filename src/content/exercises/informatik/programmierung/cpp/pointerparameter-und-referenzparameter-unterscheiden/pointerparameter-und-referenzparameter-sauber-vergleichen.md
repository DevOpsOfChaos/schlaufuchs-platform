---
title: "Pointerparameter und Referenzparameter sauber vergleichen"
description: "Vergleiche Funktionsköpfe und Aufrufe mit Pointer- und Referenzparametern."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "pointerparameter-und-referenzparameter-unterscheiden", "pointerparameter-und-referenzparameter-sauber-vergleichen"]
taskId: "INF-PROG-CPP-PARAM-001"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Vertrag der Schnittstelle lesen

Gegeben sind:

```cpp
void erhoehePointer(int *wert);
void erhoeheReferenz(int &wert);
```

Erkläre den Unterschied zwischen beiden Funktionsköpfen in Worten, ohne nur die Symbole nachzusprechen.

## Aufgabe 2: Aufrufbild vergleichen

Gegeben ist:

```cpp
int zahl = 5;

erhoehePointer(&zahl);
erhoeheReferenz(zahl);
```

Warum braucht nur eine der beiden Varianten den Adressoperator im Aufruf?

## Aufgabe 3: Optionales Ziel einordnen

Gegeben ist:

```cpp
pruefePointer(&zahl);
pruefePointer(nullptr);
```

Warum passt dieses Aufrufbild eher zu einer Pointer-Schnittstelle als zu einer Referenz-Schnittstelle?

## Aufgabe 4: Rumpf ruhig lesen

Vergleiche die beiden Zeilen:

```cpp
*wert = 0;
wert = 0;
```

Welche Zeile gehört eher zu einem Pointerparameter, welche eher zu einem Referenzparameter, und warum?

## Aufgabe 5: Passende Schnittstelle wählen

Welche Variante wirkt didaktisch passender?

1. Eine Funktion soll nur arbeiten, wenn überhaupt ein Ziel vorhanden ist.
2. Eine Funktion soll sich so lesen, als arbeite sie direkt mit einem vorhandenen Objekt.
3. Eine Funktion soll im Aufruf die Adresse ausdrücklich sichtbar machen.

Begründe jede Zuordnung kurz.
