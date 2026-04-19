---
title: Existenz, Validierung und Bereinigung unterscheiden
description: Unterscheide bei Eingaben, ob ein Wert fehlt, ungültig ist oder nur bereinigt werden muss.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - filter_has_var-und-filter_var-in-php-gezielt-nutzen
  - existenz-validierung-und-bereinigung-unterscheiden
taskId: INF-PHP-FILTER-002
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - filter
hintPoints:
  - "Frage zuerst: ist die Variable da?"
  - "Danach: ist der Inhalt fachlich passend?"
selfCheckPoints:
  - "Habe ich Existenzprüfung und Inhaltsprüfung nicht vermischt?"
  - "Kann ich validieren und bereinigen sprachlich trennen?"
transferIdeas:
  - "Übertrage die Logik auf E-Mail, URL, Zahl und freie Texteingabe."
reflectionPrompt: "Wo würdest du in einem echten Formular zuerst abbrechen?"
---

## Aufgabe 1

Ordne zu, was fachlich zuerst passt:

- Prüfen, ob das Feld <code>email</code> überhaupt gesendet wurde
- Prüfen, ob der Wert eine gültige E-Mail ist
- Zeichen vor einer Ausgabe entschärfen

## Aufgabe 2

Warum reicht es nicht, nur zu prüfen, ob ein Wert vorhanden ist?
