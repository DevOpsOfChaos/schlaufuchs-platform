---
title: Musterlösung – Container- und Item-Regeln im Grid zuordnen
description: Musterlösung zur Aufgabe WEB-CSS-CORE-105.
subject: web-development
section: CSS
topicPath:
  - css
  - grid-container-und-grid-items-getrennt-denken
  - container-und-item-regeln-im-grid-zuordnen-loesung
taskId: WEB-CSS-CORE-105
relatedExercise: src/content/exercises/web-development/css/grid-container-und-grid-items-getrennt-denken/container-und-item-regeln-im-grid-zuordnen.md
tags:
  - web-development
  - css
  - loesung
  - task-id
draft: false
---

## Aufgabe 1: Regeln zuordnen

Container:
- <code>display: grid</code>
- <code>grid-template-columns</code>
- <code>gap</code>

Item:
- <code>grid-column: 2 / span 2</code>
- <code>align-self: center</code>

## Aufgabe 2: Fehlersuche beginnen

Containerfrage: Ist am richtigen Eltern-Element überhaupt das Raster definiert? Itemfrage: Hat das betroffene Element die richtige <code>grid-column</code>- oder <code>grid-row</code>-Angabe?

## Aufgabe 3: Raster beschreiben

Das Raster entsteht am Eltern-Element, weil dort die gemeinsame Struktur für alle Kinder mit Spalten, Zeilen und Abständen festgelegt wird.

## Worauf man bei der Korrektur achten sollte

- Container- und Item-Ebene klar trennen.
- Nicht nur Begriffe auflisten, sondern die Rollen erklären.

