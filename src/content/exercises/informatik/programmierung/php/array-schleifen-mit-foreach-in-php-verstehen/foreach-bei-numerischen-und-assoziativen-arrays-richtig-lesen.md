---
title: foreach bei numerischen und assoziativen Arrays richtig lesen
description: Lies foreach-Schleifen ruhig und unterscheide Wertzugriff von Schlüssel-Wert-Zugriff.
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
hintPoints:
  - "Lies erst die Rollen der beteiligten Teile ruhig auseinander."
  - "Prüfe danach, welcher Schritt fachlich zuerst kommt."
selfCheckPoints:
  - "Habe ich die zentrale Unterscheidung der Aufgabe sauber benannt?"
  - "Habe ich meinen Ablauf oder Vergleich nachvollziehbar begründet?"
transferIdeas:
  - "Übertrage die Denkweise auf einen ähnlichen kleinen PHP-Ausschnitt."
  - "Formuliere die Logik zusätzlich in einem eigenen Mini-Beispiel."
reflectionPrompt: "Welche fachliche Trennung war hier am wichtigsten?"
---

## Aufgabe 1: Schleifenform unterscheiden

Erkläre den Unterschied zwischen:

- <code>foreach ($liste as $wert)</code>
- <code>foreach ($daten as $schluessel => $wert)</code>

## Aufgabe 2: Durchlauf denken

Ein Array enthält <code>["A", "B", "C"]</code>. Welcher Wert steckt im zweiten Schleifendurchlauf in <code>$wert</code>?

## Aufgabe 3: Begründung

Warum ist <code>foreach</code> bei vorhandenen Datenlisten oft ruhiger zu lesen als eine selbst gebaute Zählschleife?
