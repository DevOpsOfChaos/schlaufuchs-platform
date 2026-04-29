---
title: "Grid-Linien, Spans und Track-Größen lesen"
description: "Verstehe, wie Grid-Linien, span-Angaben und Spaltengrößen zusammenspielen, damit du Grid-Layouts ruhiger lesen kannst."
subject: "web-development"
section: "CSS"
topicPath: ["css", "grid-linien-spans-und-track-groessen-lesen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "CSS"]
draft: false
---
## Grundidee

In CSS Grid wird nicht nur mit "Spalte 1" oder "Zeile 2" gedacht, sondern mit **Rasterlinien**. Diese Linien begrenzen die Spalten und Zeilen. Ein Element kann zwischen Linien liegen oder sich über mehrere Bereiche spannen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Header über die ganze Breite</h3>
  <p>Wenn ein Header im Grid über alle Spalten reicht, liegt er nicht einfach nur "in Spalte 1". Er startet an einer Linie und endet erst an einer späteren Linie - also über mehrere Tracks hinweg.</p>
</div>

## Linien und Spalten nicht verwechseln

Eine Spalte ist die Fläche zwischen zwei vertikalen Linien. Wenn du also <code>grid-column: 1 / 3</code> liest, bedeutet das: Das Element beginnt an Linie 1 und endet an Linie 3. Es belegt damit zwei Spaltenflächen.

## Track-Größen grob unterscheiden

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Fest</p>
    <h3>Pixel</h3>
    <p><code>120px</code> bleibt eine feste Größe. Das ist klar planbar, aber wenig flexibel.</p>
  </section>
  <section>
    <p class="card-kicker">Relativ</p>
    <h3>Prozent</h3>
    <p><code>20%</code> bezieht sich auf den verfügbaren Platz des Containers.</p>
  </section>
  <section>
    <p class="card-kicker">Flexibel</p>
    <h3>fr</h3>
    <p><code>1fr</code> verteilt restlichen Platz flexibel. Das ist für Grid besonders typisch.</p>
  </section>
</div>

## Was span bedeutet

<span></span>
Mit <code>span</code> wird keine Zielnummer direkt genannt, sondern eine Länge im Raster beschrieben.

```css
grid-column: 2 / span 2;
```

Das bedeutet: Das Element startet an Linie 2 und reicht von dort über zwei Spalten weiter.

## Mini-Demo: Linien lesen statt nur Flächen sehen

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Eine kleine Rasterfläche mit Linienlogik</h3>
  <div style="display:grid; grid-template-columns: 100px 1fr 20%; gap:0.6rem; padding:0.8rem; border:1px solid #cbd5e1; border-radius:16px; background:#f8fafc;">
    <div style="grid-column:1 / 4; padding:0.8rem; background:#dbeafe; border-radius:12px; font-weight:700;">Header 1 / 4</div>
    <div style="grid-column:1; padding:0.8rem; background:#fef3c7; border-radius:12px;">Nav</div>
    <div style="grid-column:2 / span 2; padding:0.8rem; background:#dcfce7; border-radius:12px;">Inhalt 2 / span 2</div>
  </div>
  <p style="margin:0.7rem 0 0; color:#475569;">Die erste Spalte ist fest, die zweite flexibel und die dritte prozentual. Der Inhaltsbereich startet an Linie 2 und spannt sich über zwei Tracks.</p>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Container lesen</strong>
    <span>Welche Track-Größen wurden definiert?</span>
  </div>
  <div class="step-item">
    <strong>2. Linien lesen</strong>
    <span>Von welcher Linie bis zu welcher Linie reicht das Item?</span>
  </div>
  <div class="step-item">
    <strong>3. span deuten</strong>
    <span>Geht es um eine Zielposition oder um eine Streckung über mehrere Tracks?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Grid-Linien sind die Bezugspunkte des Rasters. Wer Linien und Spans sauber liest, versteht Grid deutlich ruhiger.</p>
</div>
