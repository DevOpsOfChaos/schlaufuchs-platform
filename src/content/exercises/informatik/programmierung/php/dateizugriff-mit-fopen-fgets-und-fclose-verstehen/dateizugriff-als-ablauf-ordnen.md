---
title: Dateizugriff als Ablauf ordnen
description: Ordne Öffnen, Lesen oder Schreiben und Schließen beim PHP-Dateizugriff in eine sinnvolle Reihenfolge.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - dateizugriff-mit-fopen-fgets-und-fclose-verstehen
  - dateizugriff-als-ablauf-ordnen
taskId: INF-PHP-FILES-001
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - datei
hintPoints:
  - "Frage zuerst: Wie komme ich an die Datei, wie bearbeite ich sie, wie beende ich den Zugriff?"
  - "feof prüft, fgets liest, fclose schließt."
selfCheckPoints:
  - "Habe ich die Funktionsnamen als Ablauf gelesen und nicht nur als Liste?"
  - "Kann ich erklären, warum die Datei am Ende wieder geschlossen wird?"
transferIdeas:
  - "Übertrage die Logik auf Logdateien, Textdateien oder einfache Konfigurationsdateien."
reflectionPrompt: "Welche Funktion war für dich zuerst am schwersten fachlich einzuordnen?"
---

## Aufgabe 1

Ordne diese Schritte zu einem sinnvollen Ablauf:

- Datei schließen
- Datei öffnen
- Zeile lesen
- Dateiende prüfen

## Aufgabe 2

Erkläre den Unterschied zwischen <code>fgets(...)</code> und <code>feof(...)</code>.

## Aufgabe 3

Warum ist <code>fclose(...)</code> nicht nur Dekoration, sondern ein sinnvoller Abschlussschritt?
