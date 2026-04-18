---
title: Grid-Spalten über Mindestbreite und Platzlogik begründen
description: Begründe, warum minmax und auto-fit für ein Kartenraster ruhiger wirken als starre Spaltenzahlen.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - minmax-und-auto-fit-verstehen
  - grid-spalten-ueber-mindestbreite-und-platzlogik-begruenden
level: mittel
draft: false
tags:
  - css
  - grid
  - minmax
  - auto-fit
hintPoints:
  - Frage zuerst nicht nach der Spaltenzahl, sondern nach der kleinsten sinnvollen Kartenbreite.
  - Überlege, was bei wenig Platz mit den Karten passieren soll.
  - Beschreibe nicht nur Umbruch, sondern auch Lesbarkeit.
selfCheckPoints:
  - Kannst du starres und flexibles Grid-Verhalten unterscheiden?
  - Kannst du die Rolle von minmax ruhig erklären?
transferIdeas:
  - Übertrage die Aufgabe auf Produktkarten, Themenübersichten oder Galerie-Kacheln.
reflectionPrompt: Warum ist bei Kartenrastern oft eine Mindestbreite hilfreicher als eine feste Anzahl von Spalten?
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
