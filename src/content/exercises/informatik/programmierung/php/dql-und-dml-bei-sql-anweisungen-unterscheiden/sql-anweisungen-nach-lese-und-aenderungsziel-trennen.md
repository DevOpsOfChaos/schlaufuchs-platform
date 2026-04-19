---
title: SQL-Anweisungen nach Lese- und Änderungsziel trennen
description: Trenne SQL-Anweisungen nach lesender und verändernder Wirkung und leite die PHP-Folge ab.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - dql-und-dml-bei-sql-anweisungen-unterscheiden
  - sql-anweisungen-nach-lese-und-aenderungsziel-trennen
taskId: INF-PHP-MYSQL-006
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
hintPoints:
  - "Trenne SQL-Ziel, Rückgabeart und PHP-Folgeschritt voneinander."
  - "Frage zuerst: Wird gelesen oder verändert?"
selfCheckPoints:
  - "Habe ich die zentrale Unterscheidung der Aufgabe sauber benannt?"
  - "Habe ich meinen Ablauf oder Vergleich nachvollziehbar begründet?"
transferIdeas:
  - "Übertrage die Denkweise auf einen ähnlichen kleinen PHP-Ausschnitt."
  - "Formuliere die Logik zusätzlich in einem eigenen Mini-Beispiel."
reflectionPrompt: "Welche fachliche Trennung war hier am wichtigsten?"
---

## Aufgabe 1: Einordnen

Ordne grob zu:

- <code>SELECT</code>
- <code>INSERT</code>
- <code>UPDATE</code>
- <code>DELETE</code>

Welche lesen Daten, welche verändern Daten?

## Aufgabe 2: PHP-Folge

Warum braucht eine lesende Anfrage oft eine andere Weiterverarbeitung als eine verändernde?

## Aufgabe 3: Denkfehler prüfen

Warum ist <code>fetch_array</code> nicht automatisch bei jeder erfolgreichen SQL-Anweisung passend?
