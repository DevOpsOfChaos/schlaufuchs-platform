---
title: Session-Start vor Ausgabe begründen
description: Begründe, warum session_start und setcookie fachlich vor der ersten Ausgabe stehen sollten.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - session-start-header-und-ausgabe-reihenfolge-verstehen
  - sessionstart-vor-ausgabe-begruenden
taskId: INF-PHP-STATE-002
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - session
hintPoints:
  - "Frage, welche Informationen technisch zuerst in der Antwort gebraucht werden."
  - "Unterscheide Header und sichtbaren Inhalt."
selfCheckPoints:
  - "Kann ich Session-Start fachlich erklären, nicht nur als Merksatz?"
  - "Habe ich die Reihenfolge im Response bedacht?"
transferIdeas:
  - "Übertrage die Idee auf Cookies und Redirects."
reflectionPrompt: "Was genau passiert zu früh, wenn schon HTML ausgegeben wurde?"
---

## Aufgabe 1

Erkläre, warum <code>session_start()</code> vor einer ersten HTML-Ausgabe stehen sollte.

## Aufgabe 2

Warum gehören Session- und Cookie-Funktionen fachlich eher zum Protokollaufbau als zum sichtbaren Seitentext?
