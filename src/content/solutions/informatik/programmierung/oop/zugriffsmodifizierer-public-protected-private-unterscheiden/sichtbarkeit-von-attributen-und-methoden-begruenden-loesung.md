---
title: "Musterloesung - Sichtbarkeit von Attributen und Methoden begruenden"
description: "Musterloesung zur Aufgabe INF-PROG-OOP-006."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "zugriffsmodifizierer-public-protected-private-unterscheiden", "sichtbarkeit-von-attributen-und-methoden-begruenden"]
taskId: "INF-PROG-OOP-006"
relatedExercise: "src/content/exercises/informatik/programmierung/oop/zugriffsmodifizierer-public-protected-private-unterscheiden/sichtbarkeit-von-attributen-und-methoden-begruenden.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Zuordnung

<code>public</code> passt eher fuer Methoden der aeusseren Benutzung. <code>private</code> passt eher fuer interne Daten. <code>protected</code> ist sinnvoll, wenn Unterklassen etwas nutzen duerfen, die Aussenwelt aber nicht direkt.

## Aufgabe 2: Begruendung

Ein Attribut wie <code>minute</code> sollte nicht frei oeffentlich sein, weil sonst auch ungueltige Werte direkt gesetzt werden koennten.

## Aufgabe 3: Unterklasse mitdenken

<code>protected</code> ist oft sinnvoll, wenn abgeleitete Klassen intern mithelfen sollen, ohne dass fremder Aussen-Code denselben Zugriff bekommt.
