---
title: Musterlösung – delete-Form zur Reservierung zuordnen
description: Musterlösung zur Aufgabe INF-PROG-CPP-MEM-002.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - dynamischer-speicher
  - delete-und-delete-array-unterscheiden
  - delete-form-zur-reservierung-zuordnen-loesung
taskId: INF-PROG-CPP-MEM-002
relatedExercise: src/content/exercises/informatik/programmierung/cpp/delete-und-delete-array-unterscheiden/delete-form-zur-reservierung-zuordnen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---
## Aufgabe 1: Direkt zuordnen

- <code>int *a = new int;</code> → <code>delete a;</code>
- <code>double *b = new double[4];</code> → <code>delete[] b;</code>
- <code>char *text = new char[20];</code> → <code>delete[] text;</code>
- <code>bool *flag = new bool;</code> → <code>delete flag;</code>

## Aufgabe 2: Welche Zeile entscheidet?

Die entscheidende Zeile ist <code>int *feld = new int[3];</code>. Dort wird festgelegt, dass ein Feld mit mehreren Elementen erzeugt wurde. Genau diese Erzeugungsform bestimmt später die Freigabeform.

## Aufgabe 3: Zugriffssyntax entkräften

Weil <code>*feld</code> und <code>feld[1]</code> nur Nutzungsformen beschreiben. Die Speicherstruktur bleibt trotzdem ein Array, weil sie in der Erzeugungszeile mit <code>new int[3]</code> festgelegt wurde. Deshalb gehört später <code>delete[] feld;</code> dazu.

## Aufgabe 4: Zwei fast gleiche Pointer sauber unterscheiden

Weil nicht der Typ <code>int *</code> entscheidet, sondern die Erzeugungszeile. <code>new int</code> erzeugt ein Einzelobjekt, <code>new int[3]</code> ein Feld. Darum braucht das erste <code>delete</code> und das zweite <code>delete[]</code>.

## Aufgabe 5: Rückwärts lesen

Man muss die frühere Erzeugungszeile suchen. Dort prüft man, ob <code>daten</code> mit <code>new T</code> oder mit <code>new T[n]</code> reserviert wurde. Genau diese Information entscheidet, ob <code>delete</code> oder <code>delete[]</code> fachlich richtig ist.
