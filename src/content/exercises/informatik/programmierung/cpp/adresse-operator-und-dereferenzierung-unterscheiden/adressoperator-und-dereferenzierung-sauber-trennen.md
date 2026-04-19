---
title: Adressoperator und Dereferenzierung sauber trennen
description: Unterscheide in kleinen Pointer-Beispielen zwischen dem Ermitteln einer Adresse und dem Zugriff auf den Zielwert.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - pointer-und-adressen
  - adresse-operator-und-dereferenzierung-unterscheiden
  - adressoperator-und-dereferenzierung-sauber-trennen
taskId: INF-PROG-CPP-PTR-002
level: mittel
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

## Aufgabe 1: Richtung benennen

Erkläre den Unterschied zwischen <code>&amp;x</code> und <code>*p</code> in Worten.

## Aufgabe 2: Ausdruck lesen

Gegeben ist:

```cpp
int zahl = 100;
int *p = &zahl;
```

Was liefert <code>&amp;zahl</code> und was liefert <code>*p</code>?

## Aufgabe 3: Zeichenrolle prüfen

Warum darf man das <code>*</code> in <code>*p</code> hier nicht als Multiplikation lesen?
