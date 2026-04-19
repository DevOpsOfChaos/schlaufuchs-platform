---
title: filter_input nach Quelle, Name und Filter lesen
description: Lies filter_input-Aufrufe und ordne Quelle, Variablenname und Filteridee korrekt zu.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - filter-input-in-php-verstehen
  - filter-input-aufruf-nach-quelle-name-und-filter-lesen
taskId: INF-PHP-FILTER-004
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
