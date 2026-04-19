---
title: Musterlösung – Datenformat passend auswählen
description: Musterlösung zur Aufgabe INF-DATA-FORMAT-COMP-001.
subject: informatik
section: Grundlagen
topicPath:
  - grundlagen
  - datenformate
  - csv-json-und-xml-vergleichen
  - datenformat-fuer-anwendungsfall-begruenden-loesung
taskId: INF-DATA-FORMAT-COMP-001
relatedExercise: src/content/exercises/informatik/grundlagen/datenformate/csv-json-und-xml-vergleichen/datenformat-fuer-anwendungsfall-begruenden.md
tags:
  - informatik
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Format zuordnen

- einfache Tabelle → CSV
- API-Antwort mit Unterobjekten und Listen → JSON
- formal beschriebenes hierarchisches Austauschformat → XML

## Aufgabe 2: Struktur begründen

CSV ist flach und arbeitet mit Zeilen und Spalten. Verschachtelte Unterstrukturen lassen sich darin nur unruhig darstellen.

## Aufgabe 3: Denkfehler prüfen

JSON ist nicht immer besser. Für einfache tabellarische Exporte kann CSV passender und kompakter sein.
