---
title: CSS Grid – Grundidee verstehen
description: Verstehe, wie CSS Grid Inhalte in einem Raster aus Zeilen und Spalten organisiert und warum das für Seitenlayouts hilfreich ist.
subject: web-development
section: CSS
topicPath:
  - css
  - css-grid-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee von CSS Grid.
  - Du unterscheidest Rasterstruktur und Inhaltsebene.
  - Du beschreibst Grid als Werkzeug für Flächenlayout mit Zeilen und Spalten.
practiceIdeas:
  - Ordne typische Seitenbereiche als Rasterflächen ein.
  - Vergleiche ein einfaches Nacheinander mit einem echten Raster.
  - Prüfe, warum ein größeres Layout mehr als nur Flexbox in einer Richtung braucht.
commonMistakes:
  - Grid nur als optisches Kästchensystem zu sehen.
  - Den Container zu übersehen und nur auf einzelne Elemente zu schauen.
  - Grid und Flexbox ohne Richtungsunterschied gleichzusetzen.
keyTakeaways:
  - Grid organisiert Inhalte gleichzeitig in Zeilen und Spalten.
  - Das Raster entsteht am Container.
  - Grid eignet sich besonders für größere Seitenbereiche und klare Flächenlayouts.
recognizeSignals:
  - Es geht um Seitenraster, Spalten, Zeilen oder Bereiche wie Header, Navigation und Inhalt.
  - Du sollst erklären, wie mehrere Elemente gemeinsam angeordnet werden.
  - In Beispielen werden grid-template, gap, grid-column oder grid-row genannt.
selfCheckPoints:
  - Kann ich erklären, warum Grid eher Fläche als Reihe denkt?
  - Kann ich Container und Items sauber unterscheiden?
  - Kann ich Grid grob von Flexbox abgrenzen?
tags:
  - css
  - grid
  - layout
  - raster
level: einfach
draft: false
---

## Grundidee

CSS Grid hilft dabei, Oberflächen als **gemeinsames Raster** zu denken. Statt Inhalte nur nacheinander zu setzen, verteilst du Bereiche auf Zeilen und Spalten. Genau deshalb ist Grid besonders stark bei typischen Seitenlayouts.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Seite mit Header, Navigation, Inhalt und Footer</h3>
  <p>Ein Header soll oben über die ganze Breite laufen, links liegt eine Navigation, rechts der Hauptinhalt und unten ein Footer. So ein Aufbau ist keine reine Ein-Richtungs-Anordnung mehr, sondern ein Flächenlayout. Dafür passt Grid sehr gut.</p>
</div>

## Grid denkt in zwei Schritten

1. Der **Container** bekommt ein Raster aus Spalten und Zeilen.
2. Die **Items** werden innerhalb dieses Rasters platziert.

Genau diese Zweiteilung ist die wichtigste Grundidee.

## Typische Container-Eigenschaften

```css
.container {
  display: grid;
  grid-template-columns: 180px 1fr 20%;
  grid-template-rows: 80px auto 80px;
  gap: 10px;
}
```

Damit entstehen Spalten, Zeilen und Abstände. Erst danach können einzelne Elemente auf bestimmte Rasterbereiche gesetzt werden.

## Typische Item-Eigenschaften

```css
header {
  grid-column: 1 / 4;
  grid-row: 1;
}
```

Ein Item beschreibt also nicht das ganze Raster, sondern seinen Platz darin.

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Reihenlogik gegen Flächenlogik</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Flexbox</strong>
      <span>Gut, wenn vor allem eine Richtung wichtig ist, zum Beispiel eine Leiste oder Kartenreihe.</span>
    </div>
    <div class="compare-item">
      <strong>Grid</strong>
      <span>Gut, wenn Zeilen und Spalten gemeinsam als Raster gedacht werden sollen.</span>
    </div>
  </div>
</div>

## Mini-Demo: dieselbe Seite ohne und mit Raster

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Warum Grid bei Flächenlayouts ruhiger wirkt</h3>
  <div style="display:grid; gap:0.9rem;">
    <div>
      <p style="margin:0 0 0.4rem;"><strong>Ohne klares Raster</strong></p>
      <div style="padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
        <div style="margin-bottom:0.5rem; padding:0.65rem; border-radius:12px; background:#dbeafe; font-weight:700;">Header</div>
        <div style="margin-bottom:0.5rem; padding:0.65rem; border-radius:12px; background:#fef3c7; font-weight:700;">Navigation</div>
        <div style="margin-bottom:0.5rem; padding:0.9rem 0.65rem; border-radius:12px; background:#dcfce7; font-weight:700;">Inhalt</div>
        <div style="padding:0.65rem; border-radius:12px; background:#e2e8f0; font-weight:700;">Footer</div>
      </div>
    </div>
    <div>
      <p style="margin:0 0 0.4rem;"><strong>Mit Grid als Raster</strong></p>
      <div style="display:grid; grid-template-columns: 120px 1fr; gap:0.5rem; padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
        <div style="grid-column:1 / 3; padding:0.65rem; border-radius:12px; background:#dbeafe; font-weight:700;">Header</div>
        <div style="padding:0.9rem 0.65rem; border-radius:12px; background:#fef3c7; font-weight:700;">Navigation</div>
        <div style="padding:0.9rem 0.65rem; border-radius:12px; background:#dcfce7; font-weight:700;">Inhalt</div>
        <div style="grid-column:1 / 3; padding:0.65rem; border-radius:12px; background:#e2e8f0; font-weight:700;">Footer</div>
      </div>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Raster suchen</strong>
    <span>Gibt es Spalten, Zeilen und Abstände auf Container-Ebene?</span>
  </div>
  <div class="step-item">
    <strong>2. Bereiche lesen</strong>
    <span>Welche Elemente belegen welche Rasterflächen?</span>
  </div>
  <div class="step-item">
    <strong>3. Ein-Richtung oder Fläche?</strong>
    <span>Liegt eher ein Flexbox- oder ein Grid-Fall vor?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Grid ist am stärksten, wenn eine Oberfläche nicht nur als Reihe, sondern als ganze Fläche mit Bereichen gedacht werden muss.</p>
</div>
