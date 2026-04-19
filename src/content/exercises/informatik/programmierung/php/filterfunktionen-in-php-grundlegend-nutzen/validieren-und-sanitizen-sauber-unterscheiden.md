---
title: Validieren und Sanitizen sauber unterscheiden
description: Unterscheide, wann Eingaben in PHP eher geprüft und wann eher bereinigt werden sollen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - filterfunktionen-in-php-grundlegend-nutzen
  - validieren-und-sanitizen-sauber-unterscheiden
taskId: INF-PHP-FILTER-001
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - filter
hintPoints:
  - "Frage zuerst: Soll der Wert fachlich passen oder nur bereinigt werden?"
  - "Ein bereinigter Wert ist nicht automatisch fachlich gültig."
selfCheckPoints:
  - "Habe ich Prüfung und Bereinigung getrennt?"
  - "Habe ich die Wirkung der Filter fachlich beschrieben?"
transferIdeas:
  - "Übertrage die Logik auf E-Mail, URL und Freitext."
reflectionPrompt: "Wann würdest du beides nacheinander nutzen?"
---

## Aufgabe 1

Erkläre den Unterschied zwischen Validieren und Sanitizen in eigenen Worten.

## Aufgabe 2

Jemand sagt: „Wenn eine E-Mail bereinigt wurde, ist sie automatisch gültig.“ Erkläre den Denkfehler.

## Aufgabe 3

Warum kann <code>filter_input</code> fachlich praktisch sein, wenn ein Wert direkt aus einer Eingabequelle gelesen werden soll?
