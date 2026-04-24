---
title: Musterlösung – Nullpointer und uninitialisierte Pointer ruhig bewerten
description: Musterlösung zur Aufgabe INF-PROG-CPP-PTR-003.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - pointer-und-adressen
  - nullpointer-und-uninitialisierte-pointer-unterscheiden
  - nullpointer-und-uninitialisierte-pointer-ruhig-bewerten-loesung
taskId: INF-PROG-CPP-PTR-003
relatedExercise: src/content/exercises/informatik/programmierung/cpp/nullpointer-und-uninitialisierte-pointer-unterscheiden/nullpointer-und-uninitialisierte-pointer-ruhig-bewerten.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Mini-Beispiel lesen

- Bei <code>a</code> ist der Startzustand bewusst gesetzt: Der Pointer zeigt aktuell auf kein Objekt.
- Bei <code>b</code> ist der Startzustand nicht sauber festgelegt: Es gibt keinen verlaesslichen Anfangswert.

## Aufgabe 2: Drei Aussagen sortieren

- „<code>p</code> startet bewusst leer.“ → gehoert auf diese Seite
- „Vor <code>*p</code> sollte ich erst pruefen, ob <code>p</code> sinnvoll gesetzt ist.“ → gehoert auf die Nachbarseite zum Pruefen vor dem Zugriff
- „Ein Pointer darf ruhig ohne Initialisierung herumstehen, bis spaeter klar wird, wofuer man ihn braucht.“ → fachlich unsauber

Die Sortierung zeigt die Seitengrenze gut: Diese Seite klaert nur den Startzustand.

## Aufgabe 3: Startzustand und Zugriff trennen

<code>int *a = nullptr;</code> beantwortet nur, wie <code>a</code> startet. Daraus folgt noch nicht, dass ein Zugriff mit <code>*a</code> erlaubt waere. Fuer die Dereferenzierung braucht man zusaetzlich ein gueltiges Zielobjekt.

## Aufgabe 4: Ablauf bewerten

Der erste Ablauf ist als Lernbeispiel sauberer, weil <code>p</code> nicht in einem unklaren Zustand startet. Erst ist der Pointer bewusst leer, danach bekommt er gezielt ein gueltiges Ziel. Beim zweiten Ablauf gibt es zwischen Deklaration und spaeterer Zuweisung zunaechst keinen klaren Anfangszustand.

## Aufgabe 5: Grundregel formulieren

Wenn das endgueltige Ziel noch nicht feststeht, bekommt ein Pointer zuerst einen klaren Startzustand, zum Beispiel <code>nullptr</code>.

## Aufgabe 6: Zur Nachbarseite abgrenzen

Der klare Start mit <code>nullptr</code> sagt nur, dass <code>p</code> bewusst leer beginnt. Die Nachbarseite beginnt spaeter mit einer neuen Frage: Darf jetzt schon ueber <code>*p</code> auf einen Zielwert zugegriffen werden oder muss vorher geprueft werden?
