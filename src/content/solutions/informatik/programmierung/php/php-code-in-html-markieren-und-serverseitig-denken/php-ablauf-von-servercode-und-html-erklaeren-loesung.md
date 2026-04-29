---
title: "Musterlösung – PHP-Ablauf von Servercode und HTML erklären"
description: "Musterlösung zur Aufgabe INF-PHP-SERVERCODE-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "php-code-in-html-markieren-und-serverseitig-denken", "php-ablauf-von-servercode-und-html-erklaeren"]
taskId: "INF-PHP-SERVERCODE-001"
relatedExercise: "src/content/exercises/informatik/programmierung/php/php-code-in-html-markieren-und-serverseitig-denken/php-ablauf-von-servercode-und-html-erklaeren.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Lösung

Sinnvolle Reihenfolge: Browser fordert die Datei an → Webserver gibt PHP an die Verarbeitung weiter → PHP wird verarbeitet → Browser erhält HTML-Ergebnis.

Der Browser sieht den PHP-Quelltext typischerweise nicht, weil dieser auf dem Server ausgeführt wird. An den Browser geht nur das verarbeitete Ergebnis, meist als HTML.
