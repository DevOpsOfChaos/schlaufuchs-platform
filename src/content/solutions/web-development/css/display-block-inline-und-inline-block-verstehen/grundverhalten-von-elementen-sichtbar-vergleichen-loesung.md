---
title: Musterlösung – Grundverhalten von Elementen sichtbar vergleichen
description: Erste festgehaltene Musterlösung zur Aufgabe WEB-CSS-DISPLAY-001.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - display-block-inline-und-inline-block-verstehen
  - grundverhalten-von-elementen-sichtbar-vergleichen-loesung
taskId: WEB-CSS-DISPLAY-001
relatedExercise: src/content/exercises/web-development/css/display-block-inline-und-inline-block-verstehen/grundverhalten-von-elementen-sichtbar-vergleichen.md
tags:
  - web-development
  - css
  - display
  - loesung
  - task-id
draft: false
---

## Lösungsidee

Hier geht es nicht darum, welches Element „größer“ ist, sondern wie sich das Layoutverhalten ändert: neue Zeile, Textfluss und Boxcharakter.

## Aufgabe 1: Wirkung beschreiben

- **block**: Die Links wirken wie eigene Zeilen oder eigene größere Bereiche. Sie stehen typischerweise untereinander und nehmen stärker den Eindruck einer selbstständigen Box an.
- **inline**: Die Links bleiben im normalen Textfluss. Sie stehen eher nebeneinander im Satz und wirken weniger wie einzelne Bausteine mit eigener Boxlogik.
- **inline-block**: Die Links bleiben nebeneinander möglich, wirken aber trotzdem stärker wie eigene kleine Boxen. Genau das passt oft gut für klickbare Badges oder kleine Navigationschips.

## Aufgabe 2: Auswahl begründen

`inline-block` liegt hier oft näher als reines `inline`, weil die Links nebeneinander bleiben können und gleichzeitig wie eigene kleine UI-Bausteine mit Innenabstand wirken.  
`inline` bleibt stärker im Textfluss und ist für solche kleinen, klar abgegrenzten Klickflächen oft zu wenig „Box“.  
`block` würde dagegen eher eine neue Zeile pro Link nahelegen.

## Aufgabe 3: Denkfehler prüfen

„Block ist einfach die große Version von Inline“ ist zu kurz gedacht. Es geht nicht nur um optische Größe, sondern um ein **anderes Layoutverhalten**.  
Block-Elemente wirken eher als eigene Bereiche, Inline-Elemente bleiben stärker im Textfluss. `inline-block` ist deshalb keine Zwischenstufe in „groß“ oder „klein“, sondern eine andere Kombination aus Fluss und Boxcharakter.

## Worauf man bei der Korrektur achten sollte

- Nicht nur „untereinander/nebeneinander“, sondern auch den Boxcharakter benennen.
- `inline-block` als sinnvolle UI-Variante erklären.
- Layoutverhalten statt Größenvergleich in den Mittelpunkt stellen.
