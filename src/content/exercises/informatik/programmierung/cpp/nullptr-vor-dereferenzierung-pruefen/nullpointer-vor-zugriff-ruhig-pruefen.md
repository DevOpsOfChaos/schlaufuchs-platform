---
title: Nullpointer vor Zugriff ruhig prüfen
description: Trainiere die sichere Reihenfolge beim Arbeiten mit <code>nullptr</code> und Dereferenzierung.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - pointer-und-adressen
  - nullptr-vor-dereferenzierung-pruefen
  - nullpointer-vor-zugriff-ruhig-pruefen
taskId: INF-PROG-CPP-PTR-007
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - aufgabe
hintPoints:
  - "Achte besonders auf die Reihenfolge von Prüfung und Zugriff."
  - "Ein definierter Zustand ist nicht automatisch schon ein nutzbarer Zielwertzugang."
  - "Bewerte hier die Zugriffssituation, nicht noch einmal die Deklaration."
selfCheckPoints:
  - "Habe ich Prüfung und Dereferenzierung klar getrennt?"
  - "Habe ich begründet, warum die Reihenfolge wichtig ist?"
  - "Habe ich Startzustand und Zugriff nicht vermischt?"
transferIdeas:
  - "Übertrage die Prüfregel auf Funktionen, die Pointer entgegennehmen."
reflectionPrompt: "Warum hilft ein sauberer Startzustand allein noch nicht, wenn direkt danach falsch zugegriffen wird?"
---

## Aufgabe 1: Kernregel formulieren

Formuliere in einem Satz die ruhige Grundreihenfolge fuer Pointer, bei denen der Zugriff noch unsicher ist.

## Aufgabe 2: Zwei fast gleiche Snippets vergleichen

Vergleiche diese beiden Beispiele:

```cpp
if (p != nullptr) {
  cout << *p;
}
```

```cpp
cout << *p;

if (p != nullptr) {
  cout << "ok";
}
```

Welches Beispiel ist fachlich sauber, und warum?

## Aufgabe 3: Zeilenrollen benennen

Ordne den beiden Zeilen ihre Rolle zu:

- <code>if (p != nullptr)</code>
- <code>cout &lt;&lt; *p;</code>

Verwende die Begriffe **Pruefung** und **Zugriff**.

## Aufgabe 4: Startzustand bewusst ausklammern

Warum reicht die Aussage „<code>p</code> ist mit <code>nullptr</code> initialisiert“ allein noch nicht aus, um schon <code>*p</code> zu benutzen?

## Aufgabe 5: Mini-Routine formulieren

Schreibe eine kurze Denkregel mit zwei Schritten fuer den Umgang mit einem Pointer, wenn unklar ist, ob er auf ein gueltiges Ziel zeigt.

## Aufgabe 6: Zur Nachbarseite abgrenzen

Warum ist die Frage „pruefen oder dereferenzieren?“ eine andere als die Frage „klarer Startzustand oder uninitialisiert?“
