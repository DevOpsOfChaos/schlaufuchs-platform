---
title: Musterlösung – GET, POST und Superglobals zuordnen
description: Musterlösung zur Aufgabe INF-PHP-REQUEST-001.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - get-post-und-superglobals-in-php-verstehen
  - get-post-und-superglobals-zuordnen-loesung
taskId: INF-PHP-REQUEST-001
relatedExercise: src/content/exercises/informatik/programmierung/php/get-post-und-superglobals-in-php-verstehen/get-post-und-superglobals-zuordnen.md
tags:
  - informatik
  - loesung
  - php
  - task-id
draft: false
---

## Aufgabe 1

Suchbegriff über Link mit Parametern → eher GET. Login-Formular → eher POST. Einfache Filterauswahl in einer URL → eher GET.

## Aufgabe 2

<code>$_POST['email']</code> bedeutet: Lies aus den per POST übertragenen Daten den Wert mit dem Bezeichner <code>email</code>.

## Aufgabe 3

Der Feldname ist die fachliche Zuordnung zwischen Formular und PHP-Skript. Ohne passenden Namen könnte das Skript den richtigen Wert nicht eindeutig auslesen.
