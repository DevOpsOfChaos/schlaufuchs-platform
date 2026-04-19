---
title: Loesung – Request Quelle und Feldnamen im PHP Zugriff verbinden
description: Musterloesung zur Aufgabe ueber Formularmethode, Feldnamen und Superglobals.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - formulardaten-aus-get-und-post-ruhig-auslesen
taskId: INF-PHP-FORMS-006
relatedExercise: informatik/programmierung/php/formulardaten-aus-get-und-post-ruhig-auslesen/request-quelle-und-feldnamen-im-php-zugriff-verbinden
tags:
  - informatik
  - php
  - loesung
draft: false
---

## Musterloesung

### Aufgabe 1

Der Feldname <code>email</code> wird im Formular zur Bezeichnung des gesendeten Werts. Wenn die Methode POST ist, liegt der Wert in PHP deshalb typischerweise unter <code>$_POST["email"]</code>.

### Aufgabe 2

Du musst zuerst die Formularmethode lesen und dann den Feldnamen. Die Methode fuehrt zum passenden Superglobal, der Feldname zum richtigen Schluessel darin.

### Aufgabe 3

Formularwerte tauchen nicht einfach automatisch als freie Variablen auf. Sie werden in PHP ueblicherweise ueber Superglobals mit klaren Schluesseln gelesen.
