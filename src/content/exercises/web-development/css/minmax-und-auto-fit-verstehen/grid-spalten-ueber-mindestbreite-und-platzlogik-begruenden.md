---
title: "Grid-Spalten über Mindestbreite und Platzlogik begründen"
description: "Begründe, warum minmax und auto-fit für ein Kartenraster ruhiger wirken als starre Spaltenzahlen."
subject: "web-development"
section: "CSS"
topicPath: ["css", "minmax-und-auto-fit-verstehen", "grid-spalten-ueber-mindestbreite-und-platzlogik-begruenden"]
taskId: "AUTO-GRID-SPALTEN-UEBER-MINDESTBREITE-UND-PLATZLOGIK-BEGRUENDEN"
tags: ["web-development", "CSS", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Raster vergleichen

Ein Kartenbereich soll auf großen Flächen mehrere Karten nebeneinander zeigen, auf kleineren Breiten aber lesbar bleiben.

Vergleiche diese Ideen:

- <code>repeat(4, 1fr)</code>
- <code>repeat(auto-fit, minmax(14rem, 1fr))</code>

Erkläre, welche Variante ruhiger auf verschiedene Breiten reagiert und warum.

## Aufgabe 2: Mindestbreite begründen

Warum kann eine zu kleine Karte fachlich problematisch sein, selbst wenn noch „alles hineinpasst“?

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: „Wenn das Layout auf kleineren Breiten umbricht, ist das ein Fehler.“

Erkläre, warum ein Umbruch bei Grid oft gerade Teil einer guten Layoutlogik ist.
