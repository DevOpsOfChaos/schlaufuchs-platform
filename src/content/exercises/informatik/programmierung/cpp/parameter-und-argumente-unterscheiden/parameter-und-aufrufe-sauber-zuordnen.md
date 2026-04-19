---
title: Parameter und Aufrufe sauber zuordnen
description: Unterscheide bei kleinen Beispielen zwischen Platzhaltern in der Funktion und konkreten Werten im Aufruf.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-ablauf
  - parameter-und-argumente-unterscheiden
  - parameter-und-aufrufe-sauber-zuordnen
taskId: INF-PROG-CPP-FUNC-002
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - parameter
hintPoints:
  - "Lies zuerst die Definition, dann den Aufruf."
  - "Frage bei jedem Wert: Ist das ein Platzhalter oder eine konkrete Eingabe?"
selfCheckPoints:
  - "Sind Parameter und Argumente nicht verwechselt?"
  - "Wird der konkrete Aufruf nachvollziehbar erklärt?"
transferIdeas:
  - "Übertrage die Unterscheidung auf mehrere Parameter oder Textwerte."
reflectionPrompt: "Warum ist die Unterscheidung fachlich hilfreicher als nur die Klammern zu sehen?"
---

## Aufgabe 1: Begriffe zuordnen

Gegeben ist:

```cpp
int verdoppeln(int zahl) {
  return zahl * 2;
}

int x = verdoppeln(7);
```

Ordne zu:

- Welcher Teil ist der Parameter?
- Welcher Teil ist das Argument?

## Aufgabe 2: Funktionsaufruf erklären

Erkläre in einem Satz, was beim Aufruf <code>verdoppeln(7)</code> mit dem Wert 7 geschieht.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: "<code>int zahl</code> ist schon der konkrete Wert, mit dem die Funktion später immer arbeitet."

Erkläre, warum das fachlich nicht stimmt.
