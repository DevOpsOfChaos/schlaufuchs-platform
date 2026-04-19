---
title: Escapen, Bereinigen und Entfernen passend wählen
description: Begründe, wann htmlspecialchars, strip_tags oder addslashes die passendere Idee ist.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - htmlspecialchars-strip-tags-und-addslashes-vergleichen
  - escapen-bereinigen-und-entfernen-passend-waehlen
taskId: INF-PHP-SECURITY-003
level: mittel
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - sicherheit
hintPoints:
  - "Frage zuerst nach dem Verwendungsziel der Eingabe."
  - "Unterscheide HTML-Ausgabe, Tag-Entfernung und Zeichenmaskierung."
selfCheckPoints:
  - "Habe ich den Zweck der Funktion benannt statt nur den Namen?"
  - "Habe ich den Kontext der späteren Nutzung mitgedacht?"
transferIdeas:
  - "Übertrage die Entscheidung auf Kommentartexte, Suchfelder oder HTML-Ausgabe in einem Adminbereich."
reflectionPrompt: "Warum führt dieselbe Eingabe je nach Ziel zu unterschiedlichen sinnvollen Reaktionen?"
---

## Aufgabe 1

Jemand gibt <code>&lt;script&gt;alert("X")&lt;/script&gt;</code> ein. Erkläre, welche grundsätzliche Idee hier jeweils im Vordergrund steht:

- sichere HTML-Ausgabe
- HTML-Tags entfernen
- bestimmte Sonderzeichen maskieren

## Aufgabe 2

Warum ist keine der drei Funktionen automatisch eine vollständige Fachprüfung der Eingabe?
