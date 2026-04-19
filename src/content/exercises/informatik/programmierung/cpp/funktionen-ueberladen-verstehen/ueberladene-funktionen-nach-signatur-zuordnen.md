---
title: Überladene Funktionen nach Signatur zuordnen
description: Ordne Aufrufe passenden Funktionsvarianten zu und begründe, wann derselbe Name eine echte Überladung bildet.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-parameter
  - funktionen-ueberladen-verstehen
  - ueberladene-funktionen-nach-signatur-zuordnen
taskId: INF-PROG-CPP-FUNC-006
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - aufgabe
hintPoints:
  - "Lies zuerst die Signatur oder den Ausdruck ruhig in Worten."
  - "Trenne Rolle, Wirkung und Ergebnis sauber voneinander."
selfCheckPoints:
  - "Habe ich die Fachbegriffe sauber benutzt?"
  - "Habe ich begründet statt nur benannt?"
transferIdeas:
  - "Übertrage die Logik auf ähnliche Funktionen oder Ausdrücke."
reflectionPrompt: "Welche Stelle im Beispiel war leicht zu verwechseln und warum?"
---

## Aufgabe 1: Signatur prüfen

Gegeben sind die Funktionen:

```cpp
void gibAus();
void gibAus(int a);
void gibAus(long a);
```

Erkläre, warum diese drei Varianten fachlich als Überladung gelten.

## Aufgabe 2: Rückgabewert prüfen

Erkläre, warum diese beiden Deklarationen keine saubere Überladung sind:

```cpp
void gibAus(int a);
int gibAus(int a);
```

## Aufgabe 3: Aufruf zuordnen

Welche der drei ersten Funktionen passt am besten zu <code>gibAus(20L);</code>? Begründe kurz.
