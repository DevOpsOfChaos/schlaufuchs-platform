---
title: Display – Block, Inline und Inline-Block verstehen
description: Verstehe, wie display das Grundverhalten eines Elements bestimmt und warum dieselben Inhalte je nach Wert sichtbar anders wirken.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - display-block-inline-und-inline-block-verstehen
learningGoals:
  - Du erklärst den Unterschied zwischen block, inline und inline-block.
  - Du beschreibst, wie sich Breite, Zeilenumbruch und Abstände dadurch sichtbar ändern.
  - Du wählst den display-Wert eher nach dem gewünschten Verhalten als nach Gewohnheit.
practiceIdeas:
  - Vergleiche denselben Inhalt einmal als block, inline und inline-block.
  - Prüfe bei Buttons, Links oder Badges zuerst das Grundverhalten des Elements.
  - Frage bei einem Layoutproblem zuerst, ob das Element überhaupt als Zeilenbox oder Flächenbox gedacht ist.
commonMistakes:
  - display nur als Nebendetail zu sehen.
  - inline mit klein und block mit groß zu verwechseln.
  - width und padding zu ändern, obwohl das Grundverhalten des Elements das eigentliche Problem ist.
keyTakeaways:
  - display legt das Grundverhalten eines Elements im Layout fest.
  - block nimmt typischerweise eine neue Zeile ein, inline bleibt im Textfluss.
  - inline-block verbindet Textfluss mit besser steuerbarer Box.
recognizeSignals:
  - Es geht um Umbrüche, Breite, nebeneinander stehende Elemente oder seltsam reagierende Links und Buttons.
  - Du sollst erklären, warum derselbe Inhalt einmal untereinander und einmal nebeneinander erscheint.
  - In Beispielen ist nicht die Farbe spannend, sondern das Grundverhalten der Box.
selfCheckPoints:
  - Kann ich block, inline und inline-block sichtbar unterscheiden?
  - Kann ich erklären, warum ein Element eine neue Zeile beginnt oder nicht?
  - Kann ich begründen, wann inline-block hilfreicher ist als inline?
tags:
  - css
  - display
  - layout
  - box
level: einfach
draft: false
---

## Grundidee

Mit <code>display</code> legst du fest, **wie sich ein Element grundsätzlich im Layout verhält**. Noch bevor Farben, Schatten oder Ausrichtung wichtig werden, entscheidet dieser Wert zum Beispiel,

- ob ein Element eine neue Zeile beginnt,
- ob es im Textfluss bleibt,
- und wie gut sich Breite oder Höhe steuern lassen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Derselbe Link wirkt einmal wie Text und einmal wie Button</h3>
  <p>Ein Link kann mitten im Satz wie normales Inline-Element wirken. Derselbe Link kann mit anderem <code>display</code>-Verhalten aber wie ein eigener kleiner Baustein erscheinen, der sauber Abstand, Breite und Innenraum bekommt. Genau daran sieht man, wie grundlegend <code>display</code> wirkt.</p>
</div>

## Die drei Grundideen

<div class="visual-grid">
  <div class="visual-item">
    <strong>block</strong>
    <span>Das Element beginnt typischerweise in einer neuen Zeile und will horizontal mehr Raum einnehmen.</span>
  </div>
  <div class="visual-item">
    <strong>inline</strong>
    <span>Das Element bleibt im Textfluss und liegt eher wie ein Wort innerhalb einer Zeile.</span>
  </div>
  <div class="visual-item">
    <strong>inline-block</strong>
    <span>Das Element bleibt im Zeilenfluss, lässt sich aber stärker wie eine kleine Box behandeln.</span>
  </div>
</div>

## Mini-Demo: derselbe Inhalt, anderes Grundverhalten

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Was <code>display</code> sichtbar ändert</h3>
  <div style="display:grid; gap:0.85rem;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Variante A – block</strong></p>
      <span style="display:block; padding:0.6rem 0.8rem; border-radius:12px; background:#dbeafe; font-weight:700;">Link 1</span>
      <span style="display:block; margin-top:0.45rem; padding:0.6rem 0.8rem; border-radius:12px; background:#dcfce7; font-weight:700;">Link 2</span>
      <span style="display:block; margin-top:0.45rem; padding:0.6rem 0.8rem; border-radius:12px; background:#fde68a; font-weight:700;">Link 3</span>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Variante B – inline</strong></p>
      <span style="display:inline; padding:0.2rem 0.25rem; background:#dbeafe; font-weight:700;">Link 1</span>
      <span style="display:inline; padding:0.2rem 0.25rem; background:#dcfce7; font-weight:700;">Link 2</span>
      <span style="display:inline; padding:0.2rem 0.25rem; background:#fde68a; font-weight:700;">Link 3</span>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Variante C – inline-block</strong></p>
      <span style="display:inline-block; padding:0.55rem 0.7rem; border-radius:12px; background:#dbeafe; font-weight:700;">Link 1</span>
      <span style="display:inline-block; padding:0.55rem 0.7rem; border-radius:12px; background:#dcfce7; font-weight:700;">Link 2</span>
      <span style="display:inline-block; padding:0.55rem 0.7rem; border-radius:12px; background:#fde68a; font-weight:700;">Link 3</span>
    </div>
  </div>
  <p>Die Inhalte bleiben gleich. Geändert wird nur, <strong>wie die Boxen am Seitenfluss teilnehmen</strong>.</p>
</div>

## Zweite Mini-Demo: Warum width nicht überall gleich wirkt

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Display entscheidet auch, wie ernst Breitenregeln genommen werden</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Inline-Link mit width-Idee</strong></p>
      <div style="background:white; border:1px solid #e2e8f0; border-radius:12px; padding:0.75rem;">
        <span style="display:inline; width:12rem; padding:0.4rem 0.55rem; background:#dbeafe; font-weight:700;">Inline</span>
      </div>
      <p style="margin:0.55rem 0 0;">Der Inhalt bleibt eher wortartig im Textfluss. Die gedachte Breitenbox wirkt hier nicht so ruhig sichtbar wie bei echten Flächenboxen.</p>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Inline-Block mit width</strong></p>
      <div style="background:white; border:1px solid #e2e8f0; border-radius:12px; padding:0.75rem;">
        <span style="display:inline-block; width:12rem; padding:0.4rem 0.55rem; background:#dcfce7; font-weight:700;">Inline-Block</span>
      </div>
      <p style="margin:0.55rem 0 0;">Jetzt wird der Link sichtbar wie eine kleine Box behandelt, obwohl er weiterhin im Zeilenfluss mitlaufen kann.</p>
    </div>
  </div>
</div>

## Was man daran ruhig lesen kann

<div class="compare-card">
  <p class="card-kicker">Sichtbare Unterschiede</p>
  <h3>Nicht zuerst an Farben denken, sondern an Zeilenlogik</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>block</strong>
      <span>Geeignet, wenn Elemente wie eigene Abschnitte oder Zeilenbausteine wirken sollen.</span>
    </div>
    <div class="compare-item">
      <strong>inline</strong>
      <span>Geeignet, wenn etwas im Textfluss bleiben soll, etwa ein Link mitten im Satz.</span>
    </div>
    <div class="compare-item">
      <strong>inline-block</strong>
      <span>Hilfreich für kleine UI-Bausteine, die nebeneinander liegen und trotzdem wie Boxen reagieren sollen.</span>
    </div>
  </div>
</div>

```css
a.button-artig {
  display: inline-block;
  padding: 0.6rem 0.9rem;
}
```

## Eine ruhige Prüfstrategie

1. Soll das Element im Textfluss bleiben oder eine eigene Zeile bilden?
2. Braucht es eine gut steuerbare Box für Breite, Höhe oder Innenraum?
3. Reicht inline oder braucht die Aufgabe eher block bzw. inline-block?
4. Erst danach an Abstand, Farbe und Feinschliff denken.

<div class="note-panel">
  <p><strong>Merke:</strong> Viele scheinbare Layoutprobleme sind zuerst keine Frage von Farbe oder Größe, sondern von <code>display</code>.</p>
</div>
