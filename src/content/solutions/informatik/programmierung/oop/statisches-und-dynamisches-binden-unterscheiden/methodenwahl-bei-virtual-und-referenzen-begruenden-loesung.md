---
title: "Loesung – Methodenwahl bei virtual und Referenzen begruenden"
description: "Musterloesung zur Aufgabe ueber statisches und dynamisches Binden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "statisches-und-dynamisches-binden-unterscheiden", "methodenwahl-bei-virtual-und-referenzen-begruenden"]
taskId: "INF-PROG-OOP-011"
relatedExercise: "informatik/programmierung/oop/statisches-und-dynamisches-binden-unterscheiden/methodenwahl-bei-virtual-und-referenzen-begruenden"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Musterloesung

### Aufgabe 1

Statisches Binden bedeutet, dass die passende Methode frueh anhand der bekannten Typinformation festgelegt wird. Dynamisches Binden bedeutet, dass die Entscheidung erst zur Laufzeit am wirklichen Objekt getroffen wird.

### Aufgabe 2

Der wichtigste Unterschied ist also der Entscheidungszeitpunkt. Beim statischen Binden steht die Methode frueh fest, beim dynamischen Binden darf die Auswahl spaeter und am konkreten Objekt orientiert erfolgen.

### Aufgabe 3

Wenn eine Referenz vom Typ `A` auf ein Objekt der Klasse `B` zeigt, wird dynamisches Binden dann wichtig, wenn eine virtuelle Methode aufgerufen wird. Dann zaehlt nicht nur der sichtbare Referenztyp `A`, sondern auch das wirkliche Objekt `B`.
