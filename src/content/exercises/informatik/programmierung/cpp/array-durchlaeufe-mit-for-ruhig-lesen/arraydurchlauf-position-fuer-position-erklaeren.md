---
title: Arraydurchlauf Position für Position erklären
description: Beschreibe, wie eine for-Schleife ein Array schrittweise über seine Indizes durchläuft.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - arrays
  - array-durchlaeufe-mit-for-ruhig-lesen
  - arraydurchlauf-position-fuer-position-erklaeren
taskId: INF-PROG-CPP-LOOPARRAY-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - arrays
  - for
hintPoints:
  - "Trenne den Schleifenzähler vom Inhalt des Arrays."
  - "Achte darauf, wie die Grenze zur Arraygröße passt."
selfCheckPoints:
  - "Ist i als Positionszähler erklärt?"
  - "Ist die obere Grenze fachlich richtig eingeordnet?"
transferIdeas:
  - "Übertrage die Logik auf Punktzahlen, Messwerte oder Wochentage."
reflectionPrompt: "Warum ist ein Arraydurchlauf lesbarer, wenn du zuerst über Positionen denkst?"
---

## Aufgabe 1: Schleifenrolle erklären

Erkläre in eigenen Worten, was <code>i</code> in diesem Code macht:

```cpp
for (int i = 0; i < 4; i++) {
  cout << werte[i] << endl;
}
```

## Aufgabe 2: Grenze prüfen

Begründe, warum bei vier Array-Elementen <code>i &lt; 4</code> sinnvoller ist als <code>i &lt;= 4</code>.
