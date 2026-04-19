---
title: Display – Block, Inline und Inline-Block verstehen
description: Verstehe, wie display das Grundverhalten eines Elements im Seitenfluss bestimmt und warum dieselben Inhalte je nach Wert sichtbar anders wirken.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - display-block-inline-und-inline-block-verstehen
learningGoals:
  - Du erklärst den Unterschied zwischen block, inline und inline-block.
  - Du beschreibst, wie sich Zeilenumbruch und Boxverhalten dadurch sichtbar ändern.
  - Du wählst den display-Wert eher nach Layoutrolle als nach Gewohnheit.
practiceIdeas:
  - Vergleiche denselben Inhalt einmal als block, inline und inline-block.
  - Prüfe bei Links, Buttons oder Badges zuerst das Grundverhalten des Elements.
  - Frage bei einem Layoutproblem zuerst, ob das Element eher Wort, Zeilenbaustein oder kleine Box sein soll.
commonMistakes:
  - display nur als Nebendetail zu sehen.
  - inline mit klein und block mit groß zu verwechseln.
  - an Breite und Abstände zu schrauben, obwohl das Grundverhalten des Elements das eigentliche Problem ist.
keyTakeaways:
  - display legt das Grundverhalten eines Elements im Layout fest.
  - block beginnt typischerweise in einer neuen Zeile, inline bleibt im Textfluss.
  - inline-block verbindet Textfluss mit besser steuerbarer Boxlogik.
recognizeSignals:
  - Es geht um Umbrüche, nebeneinander stehende Elemente oder seltsam reagierende Links und Buttons.
  - Du sollst erklären, warum derselbe Inhalt einmal untereinander und einmal im Satzfluss erscheint.
  - In Beispielen ist nicht die Farbe spannend, sondern die Rolle der Box im Seitenfluss.
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

Mit `display` legst du fest, **wie ein Element überhaupt am Seitenfluss teilnimmt**. Noch bevor Farben, Schatten oder Ausrichtung wichtig werden, entscheidet dieser Wert zum Beispiel,

- ob ein Element eine neue Zeile beginnt,
- ob es mitten im Textfluss bleibt,
- und ob es eher wie ein Wort oder wie eine kleine Box reagiert.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Derselbe Link wirkt einmal wie Text und einmal wie Baustein</h3>
  <p>Ein Link kann mitten im Satz wie normales Inline-Element wirken. Derselbe Link kann mit anderem <code>display</code>-Verhalten aber wie ein eigener kleiner UI-Baustein erscheinen. Genau daran sieht man, wie grundlegend <code>display</code> wirkt.</p>
</div>

## Drei ruhige Grundrollen

<div class="visual-grid">
  <div class="visual-item">
    <strong>block</strong>
    <span>Das Element verhält sich wie ein eigener Zeilenbaustein.</span>
  </div>
  <div class="visual-item">
    <strong>inline</strong>
    <span>Das Element bleibt im Textfluss und liegt eher wie ein Wort innerhalb einer Zeile.</span>
  </div>
  <div class="visual-item">
    <strong>inline-block</strong>
    <span>Das Element bleibt im Zeilenfluss, lässt sich aber besser wie eine kleine Box behandeln.</span>
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
      <span style="display:inline; padding:0.15rem 0.2rem; background:#dbeafe; font-weight:700;">Link 1</span>
      <span style="display:inline; padding:0.15rem 0.2rem; background:#dcfce7; font-weight:700;">Link 2</span>
      <span style="display:inline; padding:0.15rem 0.2rem; background:#fde68a; font-weight:700;">Link 3</span>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Variante C – inline-block</strong></p>
      <span style="display:inline-block; padding:0.55rem 0.7rem; border-radius:12px; background:#dbeafe; font-weight:700;">Link 1</span>
      <span style="display:inline-block; padding:0.55rem 0.7rem; border-radius:12px; background:#dcfce7; font-weight:700;">Link 2</span>
      <span style="display:inline-block; padding:0.55rem 0.7rem; border-radius:12px; background:#fde68a; font-weight:700;">Link 3</span>
    </div>
  </div>
  <p>Die Inhalte bleiben gleich. Geändert wird nur, <strong>wie die Elemente am Seitenfluss teilnehmen</strong>.</p>
</div>

## Eine ruhige Leselogik

<div class="compare-card">
  <p class="card-kicker">Sichtbare Unterschiede</p>
  <h3>Nicht zuerst an Farbe denken, sondern an Fluss und Box</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>block</strong>
      <span>Geeignet, wenn Inhalte wie eigene Zeilenbausteine wirken sollen.</span>
    </div>
    <div class="compare-item">
      <strong>inline</strong>
      <span>Geeignet, wenn etwas mitten im Textfluss bleiben soll.</span>
    </div>
    <div class="compare-item">
      <strong>inline-block</strong>
      <span>Hilfreich für kleine UI-Bausteine, die nebeneinander liegen und trotzdem boxartig reagieren sollen.</span>
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
2. Braucht es eine sichtbare kleine Boxlogik?
3. Reicht inline oder braucht die Aufgabe eher block beziehungsweise inline-block?
4. Erst danach an Abstände und Feinschliff denken.

<div class="note-panel">
  <p><strong>Merke:</strong> Viele scheinbare Layoutprobleme sind zuerst keine Frage von Farbe oder Größe, sondern von <code>display</code>.</p>
</div>
