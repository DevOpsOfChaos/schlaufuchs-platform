---
title: "Musterlösung – Nullsetzen nach delete begrenzt einordnen"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-MEM-006."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "pointer-nach-delete-auf-null-setzen-einordnen", "nullsetzen-nach-delete-begrenzt-einordnen"]
taskId: "INF-PROG-CPP-MEM-006"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/pointer-nach-delete-auf-null-setzen-einordnen/nullsetzen-nach-delete-begrenzt-einordnen.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Lokalen Nutzen beschreiben

Weil dadurch genau diese Variable sichtbar leer gesetzt wird. Spätere Lesart oder Prüfungen über <code>p</code> werden damit klarer als ohne das Nullsetzen.

## Aufgabe 2: Kurzprotokoll ergänzen

- An <code>p</code> wird sichtbar geändert, dass die Variable jetzt bewusst leer gesetzt ist.
- Am früheren Speicher wird **nicht** wiederhergestellt, dass er wieder sicher nutzbar wäre. Das Nullsetzen heilt den alten Bereich nicht.

## Aufgabe 3: Alias-Beispiel lesen

- <code>p</code> wird nach der letzten Zeile bewusst auf <code>nullptr</code> gesetzt.
- <code>q</code> bleibt unverändert und trägt die alte Adresse als eigenes Risiko weiter.

## Aufgabe 4: Grenze benennen

Weil <code>p = nullptr;</code> nur die Variable <code>p</code> verändert. Andere Alias-Pointer werden dadurch nicht automatisch mitverändert.

## Aufgabe 5: Mini-Konsole im Kopf

Eine knappe Lesart ist:

1. Der Bereich wird freigegeben.
2. Ein Pointername wird danach bewusst leer gesetzt.
3. Der lokale Zustand von genau diesem Namen wird klarer.
4. Andere Alias-Namen bleiben trotzdem ein eigenes Risiko.

## Aufgabe 6: Einordnung formulieren

Das Muster ist hilfreich, weil es genau einen Pointer klarer lesbar macht. Es ist begrenzt, weil es weder alle Alias-Pointer noch die gesamte Besitz- und Freigabelogik automatisch repariert.

## Aufgabe 7: Zur Nachbarseite abgrenzen

Die Nachbarseite erklärt zuerst den problematischen Altzustand nach <code>delete</code>. Diese Seite setzt danach an und fragt, was ein zusätzliches <code>p = nullptr;</code> lokal verbessert.

## Aufgabe 8: Seitencheck anwenden

Zur Nullsetzen-Seite gehören das erste und das dritte Beispiel, weil dort die Frage lautet, was das bewusste Leersetzen einer konkreten Variablen lokal verbessert und wo seine Grenze liegt.

Das zweite Beispiel gehört zuerst auf die Dangling-Pointer-Seite, weil dort der Folgezugriff über den alten Restpointer die Kernfrage ist.

## Aufgabe 9: Alias-Ampel

- Lokal klar leer ist danach nur <code>p</code>.
- Weiterhin kritisch bleibt <code>q</code>.
- Das Beispiel zeigt die Grenze gut, weil <code>p = nullptr;</code> nur eine Variable ändert. Der Alias <code>q</code> wird nicht automatisch mitgeheilt.


## Aufgabe 10: Überschätzung entkräften

Weil das Nullsetzen nur die konkrete Variable <code>p</code> klarer macht. Andere Alias-Pointer können weiterhin kritisch bleiben, und auch die Besitz- und Freigabelogik wird dadurch nicht automatisch richtig. Das Muster hilft lokal, löst aber nicht die ganze Situation.
