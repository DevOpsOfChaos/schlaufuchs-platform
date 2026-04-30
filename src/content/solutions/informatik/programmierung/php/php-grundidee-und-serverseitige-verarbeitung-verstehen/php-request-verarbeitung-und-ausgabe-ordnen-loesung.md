---
title: "Musterlösung – PHP-Ablauf zwischen Browser und Server ordnen"
description: "Musterlösung zur Aufgabe INF-PHP-BASICS-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "php-grundidee-und-serverseitige-verarbeitung-verstehen", "php-request-verarbeitung-und-ausgabe-ordnen"]
taskId: "INF-PHP-BASICS-001"
relatedExercise: "src/content/exercises/informatik/programmierung/php/php-grundidee-und-serverseitige-verarbeitung-verstehen/php-request-verarbeitung-und-ausgabe-ordnen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1

Sinnvolle Reihenfolge: Browser fordert Ressource an → PHP-Code wird verarbeitet → Server liefert Ergebnis zurück → Browser zeigt fertige Seite an.

## Aufgabe 2

Der Fehler ist, dass PHP serverseitig läuft. Der Browser bekommt typischerweise nur das erzeugte Ergebnis, nicht den auszuführenden PHP-Code.

## Aufgabe 3

Die PHP-Datei muss über einen Webserver laufen, damit der Verarbeitungsschritt überhaupt stattfindet. Ohne Server gäbe es nur die Datei, aber keine PHP-Ausführung.
