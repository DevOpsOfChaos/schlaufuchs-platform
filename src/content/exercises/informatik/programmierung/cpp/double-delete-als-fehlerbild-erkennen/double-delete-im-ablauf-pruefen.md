---
title: "Double Delete im Ablauf prüfen"
description: "Prüfe in kleinen Alias-Beispielen, ob derselbe Speicherbereich zweimal freigegeben wird."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "double-delete-als-fehlerbild-erkennen", "double-delete-im-ablauf-pruefen"]
taskId: "INF-PROG-CPP-MEM-005"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Bereiche zählen

Gegeben ist:

```cpp
int *p = new int;
int *q = p;
delete p;
delete q;
```

Wie viele echte dynamische Bereiche gibt es hier, und warum?

## Aufgabe 2: Kippstelle benennen

Welche Zeile macht aus dem Ablauf wirklich Double Delete, und warum genau dort?

## Aufgabe 3: Gegenfall sauber bewerten

Warum ist das hier trotz zweier <code>delete</code>-Zeilen **kein** Double Delete?

```cpp
int *p = new int;
int *q = new int;
delete p;
delete q;
```

## Aufgabe 4: Nachbarseite erkennen

Warum gehört dieses Beispiel zuerst zur Dangling-Pointer-Seite und nicht zuerst zu Double Delete?

```cpp
int *p = new int;
delete p;
cout << *p;
```

## Aufgabe 5: Verantwortungsfehler entkräften

Jemand sagt: „<code>p</code> und <code>q</code> sind zwei Variablen, also darf jede einmal <code>delete</code> ausführen.“

Warum ist diese Aussage fachlich falsch?

## Aufgabe 6: Diagnose-Raster nennen

Nenne drei kurze Leitfragen, mit denen du Double Delete in einem kleinen Ablauf prüfen würdest.
