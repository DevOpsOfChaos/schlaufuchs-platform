---
title: "filter_input nach Quelle, Name und Filter lesen"
description: "Lies filter_input-Aufrufe und ordne Quelle, Variablenname und Filteridee korrekt zu."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "filter-input-in-php-verstehen", "filter-input-aufruf-nach-quelle-name-und-filter-lesen"]
taskId: "INF-PHP-FILTER-004"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
## Aufgabe 1: Aufruf zerlegen

Lies diesen Aufruf:

```php
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
```

Benenne:

- die Quelle,
- den Variablennamen,
- die Filteridee.

## Aufgabe 2: Unterschied erklären

Was ist der grobe Unterschied zwischen Validieren und Bereinigen?

## Aufgabe 3: Begründung

Warum ist ein solcher Zugriff oft klarer als ein direktes ungefiltertes Weiterreichen von Benutzereingaben?
