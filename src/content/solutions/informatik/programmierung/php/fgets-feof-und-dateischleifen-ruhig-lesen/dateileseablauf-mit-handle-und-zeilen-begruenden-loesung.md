---
title: "Musterlösung – Dateileseablauf mit handle und zeilen begruenden"
description: "Musterlösung zur Aufgabe INF-PHP-DATEI-003."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "fgets-feof-und-dateischleifen-ruhig-lesen", "dateileseablauf-mit-handle-und-zeilen-begruenden"]
taskId: "INF-PHP-DATEI-003"
relatedExercise: "src/content/exercises/informatik/programmierung/php/fgets-feof-und-dateischleifen-ruhig-lesen/dateileseablauf-mit-handle-und-zeilen-begruenden.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Lösung

Ein Handle ist die technische Referenz auf die geöffnete Datei. fgets liest typischerweise eine Zeile aus der Datei. feof prüft, ob das Dateiende erreicht ist.

fclose gehört zum Ablauf dazu, weil der Zugriff sauber beendet werden soll. Lesen allein reicht fachlich nicht, wenn der Dateizugriff offen bleibt.
