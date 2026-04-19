---
title: Prepared Statements und rohe SQL-Strings vergleichen
description: Vergleiche vorbereitete SQL-Anfragen mit direkter String-Zusammensetzung und erkläre den Sicherheitsnutzen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - prepared-statements-in-php-verstehen
  - prepared-statements-und-rohe-sql-strings-vergleichen
taskId: INF-PHP-MYSQL-002
level: mittel
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - sql
  - prepared-statements
hintPoints:
  - "Achte auf die Trennung von SQL-Struktur und Nutzereingabe."
  - "Platzhalter und spätere Werte gehören nicht in denselben Denk-Schritt."
selfCheckPoints:
  - "Habe ich den Sicherheitsvorteil fachlich erklärt?"
  - "Habe ich Platzhalter und gebundene Werte sauber getrennt?"
transferIdeas:
  - "Übertrage die Logik auf Login, Suche oder Datensatzfilterung."
reflectionPrompt: "Warum wirkt ein vorbereitetes Statement beim Lesen oft zunächst aufwendiger, ist fachlich aber ruhiger?"
---

## Aufgabe 1

Erkläre in eigenen Worten, warum Prepared Statements SQL-Struktur und Eingabewerte trennen.

## Aufgabe 2

Warum ist diese Trennung besonders wichtig, wenn Benutzereingaben in Datenbankabfragen vorkommen?

## Aufgabe 3

Jemand setzt Suchbegriffe direkt per String-Verkettung in eine SQL-Zeile ein. Beschreibe, warum das problematischer ist als ein Prepared Statement.
