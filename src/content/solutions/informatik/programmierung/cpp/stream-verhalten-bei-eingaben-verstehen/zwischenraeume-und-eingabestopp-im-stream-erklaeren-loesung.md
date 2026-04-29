---
title: "Musterlösung – Zwischenräume und Eingabestopp im Stream erklären"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-STREAMREAD-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "stream-verhalten-bei-eingaben-verstehen", "zwischenraeume-und-eingabestopp-im-stream-erklaeren"]
taskId: "INF-PROG-CPP-STREAMREAD-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/stream-verhalten-bei-eingaben-verstehen/zwischenraeume-und-eingabestopp-im-stream-erklaeren.md"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Führende Zeichen

Der führende Tabulator wird bei vielen einfachen <code>cin</code>-Eingaben übersprungen. Als float kann der Teil <code>34.5</code> übernommen werden. Der Buchstabe <code>a</code> passt nicht mehr zu einer gültigen Float-Zahl und bleibt deshalb als Rest im Stream zurück.

## Aufgabe 2: Trennstelle finden

Leerzeichen und Zeilenumbrüche markieren bei vielen einfachen Eingaben das Ende des aktuellen Tokens. <code>cin</code> liest dann nur den nächsten passenden Eingabeteil. Deshalb wird nicht automatisch die gesamte Zeile als ein einziger Wert übernommen.
