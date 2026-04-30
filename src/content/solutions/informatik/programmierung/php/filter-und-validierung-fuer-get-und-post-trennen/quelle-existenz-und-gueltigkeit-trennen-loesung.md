---
title: "Musterlösung – Quelle existenz und gueltigkeit trennen"
description: "Musterlösung zur Aufgabe INF-PHP-FILTER-003."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "filter-und-validierung-fuer-get-und-post-trennen", "quelle-existenz-und-gueltigkeit-trennen"]
taskId: "INF-PHP-FILTER-003"
relatedExercise: "src/content/exercises/informatik/programmierung/php/filter-und-validierung-fuer-get-und-post-trennen/quelle-existenz-und-gueltigkeit-trennen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Lösung

GET oder POST beschreibt zuerst die Herkunft eines Wertes. Die Existenzprüfung klärt, ob der erwartete Wert überhaupt angekommen ist. Die fachliche Gültigkeit fragt erst danach, ob Inhalt und Format passen.

Ein vorhandenes Feld kann trotzdem leer, falsch formatiert oder fachlich unzulässig sein. Deshalb reicht bloße Existenzprüfung nicht aus.
