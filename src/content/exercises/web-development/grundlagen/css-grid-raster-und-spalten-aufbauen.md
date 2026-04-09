---
title: CSS Grid, Raster und Spalten aufbauen
description: Diese Aufgabe vertieft die Grundidee von CSS Grid und das ruhige Aufbauen von Kartenrastern.
subject: web-development
section: Grundlagen
level: mittel
draft: false
---

## Arbeitsauftrag

Bearbeite die Aufgaben mit Blick auf Struktur und Raster. Es geht nicht um Effekte, sondern um klare Anordnung in Zeilen und Spalten.

## Aufgabe 1

Erkläre in eigenen Worten:

1. Wofür CSS Grid besonders gut geeignet ist.
2. Warum Grid für Rasterlayouts oft besser passt als eine rein lineare Anordnung.

## Aufgabe 2

Gegeben ist:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

Erkläre kurz:

1. Wie viele Spalten entstehen.
2. Was `1fr` bedeutet.
3. Wofür `gap` verwendet wird.

## Aufgabe 3

Beschreibe, warum ein dreispaltiges Raster auf kleinen Breiten problematisch sein kann.

## Aufgabe 4

Ergänze gedanklich eine responsive Idee:

- große Breite: 3 Spalten
- kleine Breite: 1 Spalte

Erkläre, warum das oft ruhiger und lesbarer ist.

## Hinweise

- CSS Grid arbeitet mit Zeilen und Spalten.
- `grid-template-columns` definiert die Spaltenstruktur.
- `gap` schafft Abstände zwischen Grid-Items.
