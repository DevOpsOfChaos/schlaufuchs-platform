---
title: "Musterlösung – Rollen im PHP-MySQL-System trennen"
description: "Musterlösung zur Aufgabe INF-PHP-LAMP-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "lamp-umgebung-und-rollen-beim-php-mysql-zugriff-verstehen", "rollen-im-php-mysql-system-trennen"]
taskId: "INF-PHP-LAMP-001"
relatedExercise: "src/content/exercises/informatik/programmierung/php/lamp-umgebung-und-rollen-beim-php-mysql-zugriff-verstehen/rollen-im-php-mysql-system-trennen.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Lösung

Sinnvolle Zuordnung: Webserver nimmt die Anfrage entgegen → PHP verarbeitet serverseitige Logik → MySQL liefert gespeicherte Daten → Browser zeigt die Antwort an.

Die Datenbank liefert keine fertige Webseite direkt an den Browser. Typischerweise verarbeitet PHP die Datenbankantwort und erzeugt daraus eine HTML-Antwort.
