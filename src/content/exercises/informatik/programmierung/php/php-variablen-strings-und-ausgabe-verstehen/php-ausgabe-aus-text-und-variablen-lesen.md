---
title: PHP-Ausgabe aus Text und Variablen lesen
description: Zerlege eine echo-Ausgabe in feste Textteile und eingesetzte Variablenwerte.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - php-variablen-strings-und-ausgabe-verstehen
  - php-ausgabe-aus-text-und-variablen-lesen
taskId: INF-PHP-BASICS-002
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - echo
  - strings
hintPoints:
  - "Markiere zuerst die Variablen mit $."
  - "Trenne feste Texte von eingesetzten Werten."
selfCheckPoints:
  - "Habe ich die Rolle von echo richtig beschrieben?"
  - "Kann ich das fertige Ergebnis in Worten nennen?"
transferIdeas:
  - "Baue aus einem Namen oder einer URL eine eigene kleine Ausgabe."
reflectionPrompt: "Welche Stelle war eher String-Syntax und welche eigentliche Fachlogik?"
---

Gegeben ist:

```php
<?php
$url = 'https://example.org';
echo '<a href="'.$url.'">'.$url.'</a>';
?>
```

## Aufgabe 1

Benenne, welche Teile der Ausgabe fester Text sind und welcher Teil aus der Variablen kommt.

## Aufgabe 2

Beschreibe in Worten, welches Ergebnis der Browser am Ende bekommt.

## Aufgabe 3

Warum ist die echo-Zeile leichter lesbar, wenn man sie zuerst in kleine Teile zerlegt?
