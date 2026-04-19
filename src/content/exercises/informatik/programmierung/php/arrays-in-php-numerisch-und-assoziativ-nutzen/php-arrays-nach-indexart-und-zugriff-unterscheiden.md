---
title: PHP-Arrays nach Indexart und Zugriff unterscheiden
description: Entscheide, ob ein Array numerisch oder assoziativ aufgebaut ist und lies typische Zugriffe fachlich.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - arrays-in-php-numerisch-und-assoziativ-nutzen
  - php-arrays-nach-indexart-und-zugriff-unterscheiden
taskId: INF-PHP-ARRAYS-001
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - arrays
hintPoints:
  - "Achte darauf, ob Positionen oder benannte Schlüssel verwendet werden."
  - "Lies $name[index] in Worten aus."
selfCheckPoints:
  - "Habe ich Index und Wert sauber getrennt?"
  - "Habe ich erklärt, warum ein Schlüssel hier sinnvoll ist?"
transferIdeas:
  - "Übertrage die Logik auf Formulardaten oder ein Benutzerprofil."
reflectionPrompt: "Wann wirkt ein assoziatives Array deutlich ruhiger als eine bloße Liste?"
---

Gegeben sind:

```php
$liste = array('A', 'B', 'C');
$profil = array('name' => 'Mira', 'stadt' => 'Karlsruhe');
```

## Aufgabe 1

Ordne beide Arrays als numerisch oder assoziativ ein.

## Aufgabe 2

Erkläre fachlich, was <code>$profil['stadt']</code> bedeutet.

## Aufgabe 3

Warum passt für ein Benutzerprofil meist ein assoziatives Array besser als nur eine numerische Liste?
