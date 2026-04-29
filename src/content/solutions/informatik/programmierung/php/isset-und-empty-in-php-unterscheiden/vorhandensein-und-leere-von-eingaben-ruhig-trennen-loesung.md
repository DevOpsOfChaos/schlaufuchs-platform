---
title: "Loesung – Vorhandensein und Leere von Eingaben ruhig trennen"
description: "Musterloesung zur Aufgabe ueber isset und empty in PHP."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "isset-und-empty-in-php-unterscheiden", "vorhandensein-und-leere-von-eingaben-ruhig-trennen"]
taskId: "INF-PHP-FORMS-007"
relatedExercise: "informatik/programmierung/php/isset-und-empty-in-php-unterscheiden/vorhandensein-und-leere-von-eingaben-ruhig-trennen"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Musterloesung

### Aufgabe 1

Die erste Frage lautet, ob ein Feld ueberhaupt vorhanden und erreichbar ist. Die zweite Frage lautet, ob sein Inhalt inhaltlich leer wirkt. Das sind zwei verschiedene Pruefideen.

### Aufgabe 2

Ein Feld kann gesetzt sein, aber trotzdem nur einen leeren oder fachlich unbrauchbaren Inhalt haben. Darum reicht Vorhandensein allein oft noch nicht als sinnvolle Eingabe.

### Aufgabe 3

<code>isset</code> und <code>empty</code> sind nicht dasselbe, weil sie unterschiedliche Fragen beantworten. Die eine Funktion prueft eher das Vorhandensein, die andere eher die inhaltliche Leere.
