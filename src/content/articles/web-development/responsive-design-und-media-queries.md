---
title: Responsive Design und Media Queries
description: Responsive Design sorgt dafür, dass Webseiten auf unterschiedlichen Bildschirmgrößen lesbar, nutzbar und ruhig aufgebaut bleiben.
subject: web-development
section: CSS und Layout
level: mittel
tags:
  - Responsive Design
  - Media Queries
  - CSS
  - Layout
draft: false
---

## Überblick

Webseiten werden nicht nur auf großen Monitoren betrachtet, sondern auch auf Tablets, kleinen Laptops und Smartphones. Responsive Design bedeutet, dass sich Struktur und Darstellung an die verfügbare Breite anpassen, ohne dass Inhalt oder Bedienung leiden.

## Grundidee

Eine responsive Seite ist nicht einfach eine verkleinerte Desktop-Seite. Stattdessen werden Abstände, Spalten, Textblöcke und Navigationsstrukturen so gestaltet, dass sie auf unterschiedlichen Geräten sinnvoll funktionieren.

## Was machen Media Queries?

Media Queries erlauben es, CSS-Regeln abhängig von Eigenschaften des Geräts oder Viewports anzuwenden. Besonders häufig wird auf die Breite reagiert.

Ein einfaches Beispiel ist:

```css
@media (max-width: 800px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

Hier wird ein mehrspaltiges Layout unterhalb von 800 Pixel Breite auf eine Spalte umgestellt.

## Typische Anpassungen

Responsive Anpassungen betreffen oft:

- Spaltenzahl,
- Abstände,
- Schriftgrößen,
- Zeilenumbrüche,
- Navigationen,
- Karten- und Listenlayouts.

## Gute responsive Denkweise

Statt möglichst viele harte Sonderfälle einzubauen, ist es besser, mit klaren Grundlayouts zu arbeiten, die sich ruhig mit der verfügbaren Breite mitbewegen. Flexible Breiten, `gap`, Flexbox und Grid sind dafür meist hilfreicher als starre Pixelwerte.

## Typische Fehler

- Inhalte nur optisch verkleinern statt strukturell anpassen.
- Zu viele Breakpoints ohne klare Logik einbauen.
- Navigationen auf kleinen Breiten unbenutzbar werden lassen.
- Breiten fest verdrahten, sodass Zeilen aus dem Bereich laufen.

## Merksätze

- Responsive Design schützt Lesbarkeit und Nutzbarkeit.
- Media Queries reagieren auf Eigenschaften wie Breite.
- Gute responsive Seiten arbeiten mit flexiblen Layouts.
- Wenige klare Anpassungen sind oft besser als viele hektische Sonderregeln.
