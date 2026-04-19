---
title: Default-Parameter bei Aufrufen ruhig ergänzen
description: Ergänze bei Funktionsaufrufen passende Vorgabewerte und begründe, warum nur bestimmte Parameter weggelassen werden dürfen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-parameter
  - default-parameter-verstehen
  - default-parameter-bei-aufrufen-ruhig-ergaenzen
taskId: INF-PROG-CPP-FUNC-005
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

## Aufgabe 1: Aufruf ergänzen

Gegeben ist die Signatur:

```cpp
void gibPreisAus(double preis, int stellen = 2);
```

Erkläre, welcher zweite Wert intern verwendet wird, wenn der Aufruf nur <code>gibPreisAus(19.95);</code> lautet.

## Aufgabe 2: Pflicht und optional trennen

Beschreibe, welcher Parameter Pflicht ist und welcher optional ist.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: "Default-Parameter dürfen auch mitten in der Parameterliste stehen, solange ich aufpasse."

Erkläre, warum das fachlich keine ruhige Regel ist.
