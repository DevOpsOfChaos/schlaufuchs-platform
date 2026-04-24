---
title: Musterlösung – Speicherleck im Ablauf erkennen
description: Musterlösung zur Aufgabe INF-PROG-CPP-MEM-004.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - dynamischer-speicher
  - speicherleck-durch-fehlende-freigabe-verstehen
  - speicherleck-im-ablauf-erkennen-loesung
taskId: INF-PROG-CPP-MEM-004
relatedExercise: src/content/exercises/informatik/programmierung/cpp/speicherleck-durch-fehlende-freigabe-verstehen/speicherleck-im-ablauf-erkennen.md
tags:
  - informatik
  - programmierung
  - cpp
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Kippstelle benennen

Die Kippstelle ist die zweite Zeile <code>p = new int;</code>, weil <code>p</code> dadurch auf einen neuen Bereich umgehängt wird. Der erste Bereich bleibt ohne sichtbaren Zugriffspfad zurück.

## Aufgabe 2: Zwei Leckmuster unterscheiden

Im ersten Beispiel kippt der Ablauf, weil der alte Bereich aus dem Blick gerät und nicht mehr sauber erreichbar ist. Im zweiten Beispiel bleibt der Bereich zwar sichtbar, aber sein Abschluss taucht im Ausschnitt nicht auf. Beide gehören zur gleichen Fehlerklasse, weil der Speicherlebenszyklus offen bleibt.

## Aufgabe 3: Wiederholung einordnen

Weil in jeder Schleifenrunde ein neuer Bereich mit <code>new</code> entsteht, ohne dass ein sichtbarer Abschluss mit <code>delete</code> folgt. Das Grundproblem ist also nicht ein einzelner Folgezugriff, sondern dass wiederholt offene Lebenszyklen zurückbleiben.

## Aufgabe 4: Gegenbild einordnen

Weil der Bereich hier mit <code>delete p;</code> einen sichtbaren Abschluss bekommt. Genau dieser Abschluss fehlt beim Speicherleck.

## Aufgabe 5: Erste Fachfrage zuordnen

Nur das erste Beispiel gehört zuerst zur Speicherleck-Frage, weil dort der erste Bereich ohne sauberen Pfad oder Abschluss zurückbleibt.

- Im zweiten Beispiel steht zuerst die Dangling-Pointer-Frage im Zentrum, weil nach einer Freigabe noch zugegriffen wird.
- Im dritten Beispiel steht zuerst die Double-Delete-Frage im Zentrum, weil derselbe Bereich ein zweites Mal freigegeben wird.

## Aufgabe 6: Vier Kernfragen nennen

Vier hilfreiche Fragen sind:

1. Wo entsteht Speicher?
2. Bleibt der Bereich erreichbar?
3. Wo wird genau dieser Bereich beendet?
4. Fehlt dieser Abschluss?

## Aufgabe 7: Kurzprotokoll schreiben

Ein passendes Viererschritt-Protokoll lautet:

1. Der erste Bereich entsteht.
2. <code>p</code> kennt seine Adresse.
3. Ein zweiter Bereich entsteht und <code>p</code> wird umgehängt.
4. Der erste Bereich bleibt ohne sauberen Zugriffspfad und ohne sichtbaren Abschluss zurück.

## Aufgabe 8: Fehlender Crash als Fehlschluss

Weil ein Speicherleck nicht erst durch einen sichtbaren Absturz bewiesen wird. Entscheidend ist, dass ein reservierter Bereich ohne sauberen Abschluss oder ohne erreichbaren Zugriffspfad zurückbleibt. Dafür braucht es keinen späteren Folgezugriff und keinen Crash.

## Aufgabe 9: Leck und Zugriffsfehler trennen

Beim Speicherleck bleibt ein reservierter Bereich ohne sauberen Abschluss zurück. Beim Dangling Pointer steht dagegen zuerst im Vordergrund, dass nach einer bereits erfolgten Freigabe noch über einen Restpointer gearbeitet wird. Das eine ist also ein offener Lebenszyklus, das andere ein Folgezugriff nach seinem Ende.


## Aufgabe 10: Spätes delete richtig einordnen

Weil <code>p</code> vor dem <code>delete</code> bereits auf den zweiten Bereich umgehängt wurde. Das sichtbare <code>delete p;</code> beendet deshalb nur noch diesen zweiten Bereich.

Der erste Bereich ist an dieser Stelle bereits aus dem sauberen Zugriffspfad herausgefallen. Genau deshalb bleibt er trotz späterem <code>delete</code> als Leck zurück.
