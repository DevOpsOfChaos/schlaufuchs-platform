---
title: Deklaration und Definition ruhig zuordnen
description: Beschreibe bei Funktionsbeispielen, was nur angekündigt und was tatsächlich implementiert wird.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-ablauf
  - funktionsdeklaration-und-definition-vergleichen
  - deklaration-und-definition-ruhig-zuordnen
taskId: INF-PROG-CPP-FUNC-004
level: mittel
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - deklaration
hintPoints:
  - "Frage zuerst: Wo steht nur der Kopf, wo steckt schon Verhalten?"
  - "Achte darauf, ob ein Funktionskörper mit Klammern vorhanden ist."
selfCheckPoints:
  - "Ist Schnittstelle und Umsetzung sauber getrennt?"
  - "Wird der Funktionsprototyp nicht mit der Implementierung verwechselt?"
transferIdeas:
  - "Übertrage die Idee auf mehrere Funktionen in größeren Programmen."
reflectionPrompt: "Warum ist es nützlich, eine Funktion schon zu kennen, bevor ihr ganzer Code betrachtet wird?"
---

## Aufgabe 1: Rolle zuordnen

Gegeben sind zwei Formen:

```cpp
int addiere(int a, int b);
```

und

```cpp
int addiere(int a, int b) {
  return a + b;
}
```

Erkläre, welche davon die Deklaration und welche die Definition ist.

## Aufgabe 2: Unterschied erklären

Beschreibe in eigenen Worten den Unterschied zwischen einer Funktionsoberfläche und ihrer eigentlichen Umsetzung.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: "Wenn die Parameter schon in der Deklaration stehen, ist die Funktion damit vollständig beschrieben."

Erkläre, warum diese Aussage fachlich nicht reicht.
