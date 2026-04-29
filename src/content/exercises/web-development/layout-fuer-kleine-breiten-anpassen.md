---
title: "Layout für kleine Breiten anpassen"
description: "Diese Aufgabe trainiert einfache responsive Anpassungen mit Media Queries, damit Inhalte auch auf kleinen Breiten ruhig und nutzbar bleiben."
subject: "web-development"
section: "CSS und Layout"
topicPath: ["layout-fuer-kleine-breiten-anpassen"]
taskId: "AUTO-LAYOUT-FUER-KLEINE-BREITEN-ANPASSEN"
tags: ["web-development", "CSS und Layout", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Arbeitsauftrag

Bearbeite die Aufgaben mit Fokus auf Lesbarkeit und Struktur. Es geht nicht um möglichst viele Effekte, sondern um saubere Anpassungen für kleine Breiten.

## Ausgangscode

```html
<section class="cards">
  <article>Karte 1</article>
  <article>Karte 2</article>
  <article>Karte 3</article>
</section>
```

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

## Aufgabe 1

Ergänze eine Media Query, damit das Layout bei kleineren Breiten nicht dreispaltig bleibt, sondern auf eine Spalte umschaltet.

## Aufgabe 2

Erkläre kurz, warum ein dreispaltiges Raster auf kleinen Bildschirmen problematisch sein kann.

## Aufgabe 3

Eine Navigationsleiste ist auf dem Desktop horizontal angeordnet. Nenne zwei sinnvolle Strategien, wie sie auf kleinen Breiten angepasst werden kann.

## Aufgabe 4

Schreibe eine kurze CSS-Regel mit Media Query, die den Innenabstand eines Containers auf kleinen Breiten reduziert.

## Aufgabe 5

Erkläre in eigenen Worten:

1. Was eine Media Query macht.
2. Warum responsive Design mehr ist als nur kleinere Schrift.
3. Warum ruhige Layoutanpassungen oft besser sind als viele harte Sonderfälle.

## Hinweise

- Eine häufige Form ist `@media (max-width: ...)`.
- Prüfe immer, ob Inhalte noch lesbar und bedienbar bleiben.
- Auf kleinen Breiten ist weniger nebeneinander oft besser.

## Selbstkontrolle

Diese Punkte sollten klar sein:

- In Aufgabe 1 wird die Spaltenzahl reduziert.
- In Aufgabe 4 reagiert CSS gezielt auf die Breite.
- Responsive Design betrifft Struktur, nicht nur Optik.
