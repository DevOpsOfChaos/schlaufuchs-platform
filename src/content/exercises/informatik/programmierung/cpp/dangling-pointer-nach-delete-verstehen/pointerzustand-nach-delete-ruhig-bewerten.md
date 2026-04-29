---
title: "Pointerzustand nach delete ruhig bewerten"
description: "Bewerte in kleinen Beispielen, was nach einer Speicherfreigabe noch vom Pointer übrig bleibt und welche Folgezeile problematisch wird."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "dangling-pointer-nach-delete-verstehen", "pointerzustand-nach-delete-ruhig-bewerten"]
taskId: "INF-PROG-CPP-MEM-003"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Drei Aussagen sortieren

Gegeben ist:

```cpp
int *p = new int;
delete p;
```

Bewerte die drei Aussagen jeweils mit „stimmt“ oder „stimmt nicht“ und begründe kurz:

- <code>p</code> existiert als Variable noch.
- Das frühere Ziel von <code>p</code> ist noch sicher nutzbar.
- Ein späteres <code>*p</code> wäre unkritisch.

## Aufgabe 2: Problemzustand und Folgefehler trennen

Gegeben ist:

```cpp
int *p = new int;
delete p;
cout << *p;
```

Welche Zeile beschreibt den problematischen Zustand, und welche Zeile macht daraus den konkreten Folgefehler?

## Aufgabe 3: Mini-Speicherprotokoll füllen

Formuliere zu diesem Beispiel drei kurze Notizen:

```cpp
int *p = new int;
*p = 7;
delete p;
```

- Was ist mit der Variablen <code>p</code> direkt nach <code>delete</code>?
- Was gilt für das frühere Ziel?
- Worauf würdest du in der nächsten Zeile besonders achten?

## Aufgabe 4: Fehlvorstellung prüfen

Warum ist die Aussage „Der Pointername ist noch da, also ist auch das Ziel noch sicher“ falsch?

## Aufgabe 5: Zur Nachbarseite abgrenzen

Warum ist <code>p = nullptr;</code> nicht mehr die Kernfrage dieser Seite?

## Aufgabe 6: Fehlerklasse einordnen

Warum ist das Kernproblem hier weder ein Speicherleck noch schon automatisch ein Double Delete?

## Aufgabe 7: Alias-Zustand bewerten

Gegeben ist:

```cpp
int *p = new int;
int *q = p;
delete p;
```

Beschreibe getrennt, warum danach sowohl <code>p</code> als auch <code>q</code> kritisch gelesen werden müssen.

## Aufgabe 8: Zeitpunktfrage trennen

Gegeben ist:

```cpp
int *p = new int;
delete p;
// weitere harmlose Zeilen
cout << *p;
```

Beantworte getrennt:
- Ab welcher Zeile liegt der problematische Zustand schon vor?
- In welcher Zeile wird aus diesem Zustand der konkrete Folgezugriff?
