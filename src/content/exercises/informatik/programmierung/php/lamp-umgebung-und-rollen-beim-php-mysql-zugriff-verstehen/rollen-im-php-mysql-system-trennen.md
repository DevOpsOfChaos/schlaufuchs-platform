---
title: Rollen im PHP-MySQL-System trennen
description: Trenne Browser, Webserver, PHP und MySQL nach ihrer Aufgabe im System.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - lamp-umgebung-und-rollen-beim-php-mysql-zugriff-verstehen
  - rollen-im-php-mysql-system-trennen
taskId: INF-PHP-LAMP-001
level: mittel
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - mysql
  - backend
hintPoints:
  - "Frage bei jedem Teil: fragt er an, verarbeitet er, oder speichert er Daten?"
  - "Trenne Browserantwort und Datenbankantwort."
selfCheckPoints:
  - "Habe ich die Rollen nicht vermischt?"
  - "Habe ich erklärt, warum PHP eine Vermittlungsrolle hat?"
transferIdeas:
  - "Übertrage das Systembild auf Login, Produktliste oder Suchfunktion."
reflectionPrompt: "Welche typische Fehlvorstellung entsteht, wenn man Browser und Datenbank direkt zusammenschiebt?"
---

## Aufgabe 1

Ordne die Rollen sinnvoll:

- Browser zeigt die Antwort an
- PHP verarbeitet serverseitige Logik
- Webserver nimmt die Anfrage entgegen
- MySQL liefert gespeicherte Daten

## Aufgabe 2

Warum ist es fachlich falsch zu sagen, die Datenbank „liefere direkt die Webseite an den Browser“?
