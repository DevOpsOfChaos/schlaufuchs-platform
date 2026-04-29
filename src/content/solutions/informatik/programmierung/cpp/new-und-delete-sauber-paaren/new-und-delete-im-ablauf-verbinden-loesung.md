---
title: "Musterlösung – new und delete im Ablauf verbinden"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-MEM-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "new-und-delete-sauber-paaren", "new-und-delete-im-ablauf-verbinden"]
taskId: "INF-PROG-CPP-MEM-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/new-und-delete-sauber-paaren/new-und-delete-im-ablauf-verbinden.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Grundmuster markieren

- <code>int *p = new int;</code> → Reservieren
- <code>*p = 42;</code> → Nutzen
- <code>delete p;</code> → Beenden

## Aufgabe 2: Lebenszyklus lesen

Das Beispiel zeigt den kompletten Grundablauf: Mit <code>new</code> beginnt der Lebenszyklus des dynamischen Bereichs, über <code>*p</code> wird dieser Bereich benutzt, und mit <code>delete p;</code> endet genau dieser Bereich wieder sichtbar. Genau deshalb passt das Beispiel auf die Grundseite.

## Aufgabe 3: Unvollständigen Ablauf einordnen

Es fehlt die Phase <strong>Beenden</strong>. Reservierung und Nutzung sind sichtbar, aber der Abschluss mit <code>delete</code> taucht im Ausschnitt noch nicht auf.

## Aufgabe 4: Was wird eigentlich beendet?

Weil <code>p</code> nur die Adresse speichert. Freigegeben wird der dynamisch reservierte Bereich, auf den diese Adresse zeigt. Genau das ist die fachliche Ebene, nicht nur der Variablenname.

## Aufgabe 5: Zur lokalen Variable abgrenzen

Weil hier kein dynamisch reservierter Bereich mit <code>new</code> entsteht. Es geht nur um eine lokale Variable. Diese Seite trennt genau diesen Fall vom Lebenszyklus des dynamischen Speichers.

## Aufgabe 6: Leseraster nennen

Ein passendes Leseraster ist:

1. Wo beginnt der Lebenszyklus mit <code>new</code>?
2. Welcher Pointer trägt danach die Adresse?
3. Wo wird der Bereich benutzt?
4. Wo endet derselbe Bereich wieder mit <code>delete</code>?

## Aufgabe 7: Seitengrenze prüfen

- <code>int *feld = new int[3]; delete feld;</code> → erste Fachfrage: Welche Freigabeform passt zur Erzeugungsform?
- <code>int *p = new int; delete p; cout &lt;&lt; *p;</code> → erste Fachfrage: Warum ist der Folgezugriff nach der Freigabe kritisch?
- <code>int *p = new int; p = new int;</code> → erste Fachfrage: Bleibt ein Bereich ohne sauberen Pfad oder Abschluss zurück?

## Aufgabe 8: Mini-Konsole im Kopf

Eine passende Viererschritt-Lesart ist zum Beispiel:

1. Speicher mit <code>new</code> anfordern.
2. Adresse im Pointer merken.
3. Den reservierten Bereich benutzen.
4. Genau diesen Bereich wieder mit <code>delete</code> beenden.


## Aufgabe 9: Zwei Zyklen oder ein offener Rest?

Im ersten Beispiel sind zwei getrennte Lebenszyklen sichtbar geschlossen. Nach dem ersten <code>delete p;</code> ist der erste Bereich beendet, danach beginnt mit dem zweiten <code>new</code> ein neuer Bereich, der ebenfalls wieder mit <code>delete p;</code> endet.

Im zweiten Beispiel bleibt der erste Bereich offen zurück. Das spätere <code>delete p;</code> beendet nur den zweiten Bereich, weil <code>p</code> vorher bereits umgehängt wurde.
