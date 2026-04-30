---
title: "Musterlösung – Double Delete im Ablauf prüfen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-MEM-005."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "double-delete-als-fehlerbild-erkennen", "double-delete-im-ablauf-pruefen"]
taskId: "INF-PROG-CPP-MEM-005"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/double-delete-als-fehlerbild-erkennen/double-delete-im-ablauf-pruefen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Bereiche zählen

Es gibt nur einen echten dynamischen Bereich. <code>q = p;</code> erzeugt keinen zweiten Bereich, sondern nur einen zweiten Namen für dieselbe Adresse.

## Aufgabe 2: Kippstelle benennen

Die Kippstelle ist <code>delete q;</code>. Nach <code>delete p;</code> ist der Bereich bereits beendet. Das zweite <code>delete</code> versucht, denselben Bereich noch einmal freizugeben.

## Aufgabe 3: Gegenfall sauber bewerten

Weil hier zwei getrennte <code>new</code>-Zeilen auch zwei getrennte Bereiche erzeugen. Je ein <code>delete</code> pro Bereich ist deshalb korrekt und kein Double Delete.

## Aufgabe 4: Nachbarseite erkennen

Weil hier nicht eine zweite Freigabe im Mittelpunkt steht, sondern der Zugriff auf einen bereits beendeten Bereich. Das ist zuerst ein Dangling-Pointer-Problem.

## Aufgabe 5: Verantwortungsfehler entkräften

Weil Freigaberechte nicht an Variablennamen hängen, sondern an echte Speicherbereiche. Zwei Namen für denselben Bereich erlauben nicht zwei Freigaben.

## Aufgabe 6: Diagnose-Raster nennen

Zum Beispiel:

1. Wie viele echte <code>new</code>-Ereignisse gab es?
2. Sind zwei Namen nur Alias für denselben Bereich?
3. Kommt nach der ersten Freigabe noch einmal <code>delete</code> auf denselben Bereich?

Mit diesen Fragen liest man den Ablauf statt nur einzelne Zeilen.
