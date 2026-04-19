---
title: MySQLi-Zugriff als Ablauf ordnen
description: Ordne die Grundphasen eines PHP-MySQLi-Zugriffs und unterscheide Lesen von Verändern.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - mysqli-grundablauf-in-php-verstehen
  - mysqli-zugriff-als-ablauf-ordnen
taskId: INF-PHP-MYSQL-001
level: mittel
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - mysqli
  - datenbank
hintPoints:
  - "Trenne Verbindung, Anfrage und Ergebniszugriff sauber."
  - "Achte darauf, dass SELECT etwas anderes liefert als UPDATE."
selfCheckPoints:
  - "Habe ich die Phasen richtig geordnet?"
  - "Habe ich DQL und DML unterschieden?"
transferIdeas:
  - "Übertrage den Ablauf auf Produktlisten, Logins oder Profilspeicherung."
reflectionPrompt: "Welche Phase wirkt technisch klein, ist fachlich aber entscheidend für das Verständnis?"
---

## Aufgabe 1

Bringe die Phasen in eine sinnvolle Reihenfolge:

- Ergebnis lesen
- Anfrage senden
- Verbindung schließen
- Verbindung aufbauen

## Aufgabe 2

Warum muss nach einer SELECT-Anfrage oft noch ein weiterer Ergebniszugriff folgen?

## Aufgabe 3

Erkläre den groben Unterschied zwischen einer SELECT-Anfrage und einer UPDATE-Anfrage.
