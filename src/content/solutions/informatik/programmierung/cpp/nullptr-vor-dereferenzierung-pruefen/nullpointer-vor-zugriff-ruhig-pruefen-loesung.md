---
title: Musterlösung – Nullpointer vor Zugriff ruhig prüfen
description: Musterlösung zur Aufgabe INF-PROG-CPP-PTR-007.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - pointer-und-adressen
  - nullptr-vor-dereferenzierung-pruefen
  - nullpointer-vor-zugriff-ruhig-pruefen-loesung
taskId: INF-PROG-CPP-PTR-007
relatedExercise: src/content/exercises/informatik/programmierung/cpp/nullptr-vor-dereferenzierung-pruefen/nullpointer-vor-zugriff-ruhig-pruefen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Kernregel formulieren

Ich pruefe zuerst den Pointerzustand und dereferenziere erst danach.

## Aufgabe 2: Zwei fast gleiche Snippets vergleichen

Das erste Beispiel ist fachlich sauber, weil die Pruefung vor dem Zugriff steht. Im zweiten Beispiel kommt der Zugriff mit <code>*p</code> schon vorher und die spaetere if-Zeile kann diesen Fehler nicht mehr rueckgaengig machen.

## Aufgabe 3: Zeilenrollen benennen

- <code>if (p != nullptr)</code> → Pruefung
- <code>cout &lt;&lt; *p;</code> → Zugriff

Gerade diese Trennung macht die Logik sauber.

## Aufgabe 4: Startzustand bewusst ausklammern

Die Initialisierung mit <code>nullptr</code> sagt nur, dass der Pointer bewusst leer ist. Ein leerer Pointer ist aber noch kein gueltiges Zielobjekt. Vor <code>*p</code> muss deshalb weiterhin entschieden werden, ob ueberhaupt sinnvoll zugegriffen werden darf.

## Aufgabe 5: Mini-Routine formulieren

1. Erst pruefen, ob der Pointer sinnvoll gesetzt ist.
2. Nur dann ueber <code>*p</code> auf den Zielwert zugreifen.

## Aufgabe 6: Zur Nachbarseite abgrenzen

Die Nachbarseite zum Startzustand klaert, wie ein Pointer beginnt. Diese Seite beginnt spaeter: Es gibt bereits einen Pointer, und jetzt muss die Reihenfolge fuer einen moeglichen Zugriff sauber gelesen werden.
