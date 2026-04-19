---
title: Pointer als Adressvariablen in Worte übersetzen
description: Beschreibe bei einfachen Beispielen, was im Pointer selbst steckt und worauf er zeigt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - pointer-und-adressen
  - pointer-in-cpp-verstehen
  - pointer-als-adressvariablen-in-worte-uebersetzen
taskId: INF-PROG-CPP-PTR-001
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

## Aufgabe 1: Rollen benennen

Gegeben ist:

```cpp
short varA = 70;
short *poinA;
poinA = &varA;
```

Erkläre in Worten:

- was <code>varA</code> ist,
- was <code>poinA</code> ist,
- und was nach der Zuweisung in <code>poinA</code> gespeichert ist.

## Aufgabe 2: Direkter und indirekter Zugriff

Warum können <code>varA</code> und <code>*poinA</code> am Ende denselben Nutzwert liefern?

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: "Ein Pointer speichert direkt den Datenwert der Zielvariable."

Erkläre, warum das fachlich falsch ist.
