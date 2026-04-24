---
title: Musterlösung – Arrayname und Pointer ruhig abgrenzen
description: Musterlösung zur Aufgabe INF-PROG-CPP-PTR-006.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - pointer-und-adressen
  - arrayname-und-pointer-unterscheiden
  - arrayname-und-pointer-ruhig-abgrenzen-loesung
taskId: INF-PROG-CPP-PTR-006
relatedExercise: src/content/exercises/informatik/programmierung/cpp/arrayname-und-pointer-unterscheiden/arrayname-und-pointer-ruhig-abgrenzen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---
## Aufgabe 1: Strukturaussagen zuordnen

- „bringt den Speicherbereich für mehrere Elemente selbst mit“ → **Array**
- „speichert eine Adresse in einer eigenen Variablen“ → **Pointer**
- „kann im Beispiel mit <code>p = andere;</code> auf ein anderes Ziel umgehängt werden“ → **Pointer**
- „wird durch ähnliche Indexschreibweise automatisch zum gleichen Konzept wie ein Pointer“ → **beides nicht**
- „lässt sich mit <code>sizeof</code> als gesamter Bereich betrachten“ → **Array**

## Aufgabe 2: Umhäng-Demo lesen

Es ändert sich das Ziel von <code>p</code>. Der Pointer zeigt nach <code>p = andere;</code> nicht mehr auf den Bereich von <code>zahlen</code>, sondern auf den Bereich von <code>andere</code>. Die Arrays selbst ändern ihre Bauart dadurch nicht. Es entsteht auch kein neuer Pointer aus dem Arraynamen.

## Aufgabe 3: Indexzugriff nicht überbewerten

Der ähnliche Zugriff zeigt nur, dass beide in manchen Ausdrücken ähnlich benutzt werden können. Er beantwortet nicht die Strukturfrage. Das Array bleibt der feste Speicherbereich, der Pointer bleibt die Adressvariable auf einen Bereich.

## Aufgabe 4: <code>sizeof</code> als Diagnose lesen

Weil <code>sizeof(zahlen)</code> den gesamten Arraybereich betrachtet, während <code>sizeof(p)</code> nur die Pointervariable selbst betrachtet. Genau daran sieht man, dass hier nicht dieselbe Bauart vorliegt.

## Aufgabe 5: Fehlschluss entkräften

Weil <code>zahlen</code> nicht einfach eine normale frei umhängbare Pointervariable ist. Das Array bringt seinen Bereich selbst mit. Der Pointer <code>p</code> speichert dagegen nur eine Adresse auf diesen Bereich. Die erlaubte Zuweisung zeigt nur eine enge Beziehung in bestimmten Ausdrücken, aber keine vollständige Gleichheit.
