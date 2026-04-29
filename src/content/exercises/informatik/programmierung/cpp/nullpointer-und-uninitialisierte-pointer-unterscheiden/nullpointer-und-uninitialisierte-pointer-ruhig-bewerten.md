---
title: "Nullpointer und uninitialisierte Pointer ruhig bewerten"
description: "Vergleiche Pointer-Deklarationen mit und ohne sicheren Startzustand."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "nullpointer-und-uninitialisierte-pointer-unterscheiden", "nullpointer-und-uninitialisierte-pointer-ruhig-bewerten"]
taskId: "INF-PROG-CPP-PTR-003"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Mini-Beispiel lesen

Gegeben ist:

```cpp
int *a = nullptr;
int *b;
```

Fülle die beiden Aussagen in Worten aus:

- Bei <code>a</code> ist der Startzustand …
- Bei <code>b</code> ist der Startzustand …

## Aufgabe 2: Drei Aussagen sortieren

Ordne jede Aussage einer dieser drei Gruppen zu:

- gehoert auf diese Seite
- gehoert auf die Nachbarseite zum Pruefen vor dem Zugriff
- fachlich unsauber

Aussagen:

- „<code>p</code> startet bewusst leer.“
- „Vor <code>*p</code> sollte ich erst pruefen, ob <code>p</code> sinnvoll gesetzt ist.“
- „Ein Pointer darf ruhig ohne Initialisierung herumstehen, bis spaeter klar wird, wofuer man ihn braucht.“

## Aufgabe 3: Startzustand und Zugriff trennen

Warum beantwortet die Zeile <code>int *a = nullptr;</code> zwar die Startzustandsfrage, aber noch nicht automatisch die Zugriffsfrage mit <code>*a</code>?

## Aufgabe 4: Ablauf bewerten

Vergleiche die beiden Starts:

```cpp
int *p = nullptr;
int wert = 7;
p = &wert;
```

```cpp
int *q;
int wert2 = 7;
q = &wert2;
```

Welcher Ablauf ist als Lernbeispiel sauberer, und warum?

## Aufgabe 5: Grundregel formulieren

Formuliere eine kurze Grundregel fuer neue Pointer, wenn ihr endgueltiges Ziel noch nicht direkt feststeht.

## Aufgabe 6: Zur Nachbarseite abgrenzen

Warum reicht die Erkenntnis „<code>p</code> startet mit <code>nullptr</code>“ noch nicht aus, um schon einen sicheren Zugriff mit <code>*p</code> zu begruenden?
