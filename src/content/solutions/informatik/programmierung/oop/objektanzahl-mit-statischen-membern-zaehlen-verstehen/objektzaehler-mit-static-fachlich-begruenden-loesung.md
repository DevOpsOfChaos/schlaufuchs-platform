---
title: "Musterloesung - Objektzaehler mit static fachlich begruenden"
description: "Musterloesung zur Aufgabe INF-PROG-OOP-014."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "objektanzahl-mit-statischen-membern-zaehlen-verstehen", "objektzaehler-mit-static-fachlich-begruenden"]
taskId: "INF-PROG-OOP-014"
relatedExercise: "src/content/exercises/informatik/programmierung/oop/objektanzahl-mit-statischen-membern-zaehlen-verstehen/objektzaehler-mit-static-fachlich-begruenden.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Grundidee erklaeren

Ein Objektzaehler muss statisch sein, weil es nur einen gemeinsamen Zaehler fuer alle Objekte geben soll.

## Aufgabe 2: Vergleich sauber machen

Im Konstruktor wird dieser Zaehler typischerweise erhoeht, weil ein neues Objekt entsteht.

## Aufgabe 3: Beispiel deuten

Im Destruktor wird er wieder erniedrigt, weil ein Objekt verschwindet. Sonst stimmt die aktuelle Anzahl nicht mehr.
