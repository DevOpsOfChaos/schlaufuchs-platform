---
title: Musterlösung – Adressoperator und Dereferenzierung sauber trennen
description: Musterlösung zur Aufgabe INF-PROG-CPP-PTR-002.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - pointer-und-adressen
  - adresse-operator-und-dereferenzierung-unterscheiden
  - adressoperator-und-dereferenzierung-sauber-trennen-loesung
taskId: INF-PROG-CPP-PTR-002
relatedExercise: src/content/exercises/informatik/programmierung/cpp/adresse-operator-und-dereferenzierung-unterscheiden/adressoperator-und-dereferenzierung-sauber-trennen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Richtung benennen

<code>&amp;x</code> liefert die Adresse von <code>x</code>. <code>*p</code> nimmt die in <code>p</code> gespeicherte Adresse und greift auf den dort liegenden Wert zu.

## Aufgabe 2: Ausdruck lesen

- <code>&amp;zahl</code> liefert die Adresse von <code>zahl</code>.
- <code>*p</code> liefert den Wert, auf den <code>p</code> zeigt, hier also <code>100</code>.

## Aufgabe 3: Zeichenrolle prüfen

Im Pointer-Kontext bedeutet <code>*</code> hier Dereferenzierung. Es beschreibt also keinen Rechenoperator, sondern den Zugriff auf den Zielwert des Pointers.
