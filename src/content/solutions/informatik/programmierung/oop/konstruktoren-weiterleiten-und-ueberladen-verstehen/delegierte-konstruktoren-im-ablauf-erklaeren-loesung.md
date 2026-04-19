---
title: Musterloesung - Delegierte Konstruktoren im Ablauf erklaeren
description: Musterloesung zur Aufgabe INF-PROG-OOP-008.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - konstruktoren-weiterleiten-und-ueberladen-verstehen
  - delegierte-konstruktoren-im-ablauf-erklaeren-loesung
taskId: INF-PROG-OOP-008
relatedExercise: src/content/exercises/informatik/programmierung/oop/konstruktoren-weiterleiten-und-ueberladen-verstehen/delegierte-konstruktoren-im-ablauf-erklaeren.md
tags:
  - informatik
  - programmierung
  - oop
  - loesung
draft: false
---

## Aufgabe 1: Grundidee erklaeren

Ueberladene Konstruktoren erlauben verschiedene Arten, ein Objekt zu erzeugen, zum Beispiel ohne Parameter, mit einem Parameter oder mit mehreren Parametern.

## Aufgabe 2: Vergleich sauber machen

Bei der Delegation ruft ein Konstruktor einen anderen Konstruktor derselben Klasse auf. Dadurch wird die eigentliche Initialisierung an einer zentralen Stelle gebuendelt.

## Aufgabe 3: Beispiel deuten

Das macht den Code ruhiger, weil nicht jeder Konstruktor dieselben Attributzuweisungen noch einmal separat enthalten muss.
