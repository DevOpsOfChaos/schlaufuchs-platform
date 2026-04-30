---
title: "Musterlösung – SQL-Anweisungen nach Lese- und Änderungsziel trennen"
description: "Musterlösung zur Aufgabe INF-PHP-MYSQL-006."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "dql-und-dml-bei-sql-anweisungen-unterscheiden", "sql-anweisungen-nach-lese-und-aenderungsziel-trennen"]
taskId: "INF-PHP-MYSQL-006"
relatedExercise: "src/content/exercises/informatik/programmierung/php/dql-und-dml-bei-sql-anweisungen-unterscheiden/sql-anweisungen-nach-lese-und-aenderungsziel-trennen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1

Lesend: <code>SELECT</code>. Verändernd: <code>INSERT</code>, <code>UPDATE</code>, <code>DELETE</code>.

## Aufgabe 2

Bei einer lesenden Anfrage müssen später meist Datensätze ausgewertet werden. Bei einer verändernden Anfrage interessiert oft vor allem, ob die Aktion gelungen ist.

## Aufgabe 3

Weil <code>fetch_array</code> eine lesbare Ergebnismenge voraussetzt und nicht bloß irgendeinen erfolgreichen Datenbankaufruf.