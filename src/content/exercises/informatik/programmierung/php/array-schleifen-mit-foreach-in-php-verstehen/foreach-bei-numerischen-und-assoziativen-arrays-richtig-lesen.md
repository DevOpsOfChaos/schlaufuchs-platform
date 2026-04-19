---
title: foreach bei numerischen und assoziativen Arrays richtig lesen
description: Lies foreach-Schleifen ruhig und unterscheide Wertzugriff von Schluessel Wert Zugriff.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - array-schleifen-mit-foreach-in-php-verstehen
  - foreach-bei-numerischen-und-assoziativen-arrays-richtig-lesen
taskId: INF-PHP-ARRAYS-002
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - array
hintPoints:
  - Lies zuerst, ob nur Werte oder Schluessel und Werte gelesen werden.
  - Denke einen einzigen Schleifendurchlauf konkret durch, bevor du verallgemeinerst.
selfCheckPoints:
  - Habe ich Wert und Schluessel nicht verwechselt?
  - Habe ich erklaert, warum foreach hier ruhiger ist als eine Zaehlschleife?
transferIdeas:
  - Uebertrage dieselbe Denkweise auf ein eigenes kleines Arraybeispiel.
reflectionPrompt: Welche Vorfrage hat dir am schnellsten geholfen, die Schleife ruhig zu lesen?
---

## Aufgabe 1: Schleifenform unterscheiden

Erklaere den Unterschied zwischen:

- <code>foreach ($liste as $wert)</code>
- <code>foreach ($daten as $schluessel => $wert)</code>

## Aufgabe 2: Durchlauf denken

Ein Array enthaelt <code>["A", "B", "C"]</code>. Welcher Wert steckt im zweiten Schleifendurchlauf in <code>$wert</code>?

## Aufgabe 3: Begruendung

Warum ist <code>foreach</code> bei vorhandenen Datenlisten oft ruhiger zu lesen als eine selbst gebaute Zaehlschleife?
