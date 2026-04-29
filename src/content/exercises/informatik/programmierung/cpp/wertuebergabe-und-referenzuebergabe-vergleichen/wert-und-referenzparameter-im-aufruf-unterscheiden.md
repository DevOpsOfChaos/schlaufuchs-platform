---
title: "Wert- und Referenzparameter im Aufruf unterscheiden"
description: "Vergleiche zwei Funktionssignaturen und begründe, wann Änderungen nur lokal bleiben und wann sie das Original betreffen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "wertuebergabe-und-referenzuebergabe-vergleichen", "wert-und-referenzparameter-im-aufruf-unterscheiden"]
taskId: "INF-PROG-CPP-FUNC-007"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Zwei Signaturen lesen

Vergleiche diese beiden Funktionen:

```cpp
void halbieren(int zahl);
void halbierenDirekt(int &zahl);
```

Erkläre, welche Funktion nur mit einer Kopie arbeitet und welche direkt auf das Original wirkt.

## Aufgabe 2: Wirkung vorhersagen

Eine Variable <code>x</code> hat vor dem Aufruf den Wert <code>100</code>. Danach wird <code>halbierenDirekt(x)</code> aufgerufen.

Erkläre, warum sich <code>x</code> danach ändern kann.

## Aufgabe 3: Begriff klären

Warum ist ein Referenzparameter eher ein Alias als eine Kopie?
