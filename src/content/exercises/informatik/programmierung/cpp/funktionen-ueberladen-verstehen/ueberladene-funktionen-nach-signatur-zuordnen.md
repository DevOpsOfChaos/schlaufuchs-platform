---
title: "Überladene Funktionen nach Signatur zuordnen"
description: "Ordne Aufrufe passenden Funktionsvarianten zu und begründe, wann derselbe Name eine echte Überladung bildet."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "funktionen-ueberladen-verstehen", "ueberladene-funktionen-nach-signatur-zuordnen"]
taskId: "INF-PROG-CPP-FUNC-006"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
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
