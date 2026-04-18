---
title: CSS-Grid – Grundidee verstehen
description: Verstehe, wie CSS Grid Inhalte in Zeilen und Spalten anordnet und warum das für Seitenlayouts hilfreich ist.
subject: web-development
section: CSS
topicPath:
  - css
  - css-grid-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee von CSS Grid.
  - Du unterscheidest Container und darin angeordnete Elemente.
  - Du beschreibst Grid als Flächen- und Rasterlayout.
practiceIdeas:
  - Ordne typische Seitenelemente als Bereiche in einem Raster.
  - Vergleiche eine Zeilen-Spalten-Struktur mit einer einfachen Einreihung.
  - Prüfe, warum ein Layout mehrere Spalten und Reihen braucht.
commonMistakes:
  - Grid mit einer bloßen Sammlung einzelner Abstände zu verwechseln.
  - Nur die Elemente zu sehen, aber nicht den gemeinsamen Container.
  - Grid und Flexbox als identisch zu behandeln.
keyTakeaways:
  - Grid organisiert Inhalte in einem Raster aus Zeilen und Spalten.
  - Der Container legt die Struktur fest, die Elemente füllen sie aus.
  - Grid ist besonders hilfreich für größere Layoutflächen.
recognizeSignals:
  - Es geht um Layout, Spalten, Zeilen oder Seitenbereiche.
  - Du sollst erklären, wie mehrere Elemente gemeinsam angeordnet werden.
  - In Beispielen werden Containerstruktur und Inhaltsebene getrennt.
selfCheckPoints:
  - Kann ich erklären, was ein Grid-Container ist?
  - Kann ich beschreiben, warum ein Raster für das Layout hilfreich ist?
  - Kann ich Grid grob von Flexbox unterscheiden?
tags:
  - css
  - grid
  - layout
  - raster
level: einfach
draft: false
---

## Grundidee

CSS Grid hilft dabei, Inhalte nicht nur nacheinander, sondern in einer **geordneten Rasterstruktur** aus Zeilen und Spalten anzuordnen. Damit denkst du eine Oberfläche eher als Fläche mit Bereichen als nur als Reihe von Boxen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Seite mit Sidebar und Hauptinhalt</h3>
  <p>Eine Seite soll links eine schmale Navigation und rechts einen breiten Inhaltsbereich haben. Dazu kommen vielleicht noch Kopfbereich und Fußbereich. Für solche Flächenaufteilungen ist Grid besonders gut geeignet, weil mehrere Bereiche gemeinsam als Raster gedacht werden.</p>
</div>

## Was Grid organisiert

Bei Grid gibt der Container eine Struktur vor:

- Spalten,
- Zeilen,
- Abstände zwischen Bereichen,
- und manchmal benannte Flächen.

Die Elemente innerhalb dieses Containers werden dann in dieses Raster eingeordnet.

## Grid und Flexbox grob unterscheiden

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Reihe gegen Raster</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Flexbox</strong>
      <span>Gut für das Ausrichten von Elementen in einer Richtung.</span>
    </div>
    <div class="compare-item">
      <strong>Grid</strong>
      <span>Gut für größere Flächen mit Zeilen und Spalten gleichzeitig.</span>
    </div>
  </div>
</div>

## Mini-Demo: kleine Seite als Raster

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Was ein Grid-Container für das Gesamtbild leistet</h3>
  <div style="display:grid; gap:0.9rem;">
    <div>
      <p style="margin:0 0 0.45rem;"><strong>Ohne klares Raster</strong></p>
      <div style="padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
        <div style="margin-bottom:0.55rem; padding:0.65rem; border-radius:12px; background:#dbeafe; font-weight:700;">Header</div>
        <div style="margin-bottom:0.55rem; padding:0.65rem; border-radius:12px; background:#fef3c7; font-weight:700;">Navigation</div>
        <div style="margin-bottom:0.55rem; padding:0.9rem 0.65rem; border-radius:12px; background:#dcfce7; font-weight:700;">Inhalt</div>
        <div style="padding:0.65rem; border-radius:12px; background:#e2e8f0; font-weight:700;">Footer</div>
      </div>
    </div>
    <div>
      <p style="margin:0 0 0.45rem;"><strong>Mit Grid als Seitenraster</strong></p>
      <div style="display:grid; grid-template-columns:12rem 1fr; gap:0.6rem; padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
        <div style="grid-column:1 / -1; padding:0.65rem; border-radius:12px; background:#dbeafe; font-weight:700;">Header</div>
        <div style="padding:0.65rem; border-radius:12px; background:#fef3c7; font-weight:700;">Navigation</div>
        <div style="padding:0.9rem 0.65rem; border-radius:12px; background:#dcfce7; font-weight:700;">Inhalt</div>
        <div style="grid-column:1 / -1; padding:0.65rem; border-radius:12px; background:#e2e8f0; font-weight:700;">Footer</div>
      </div>
    </div>
  </div>
  <p>Hier wird sichtbar: Grid ist nicht nur „mehr Abstand“, sondern eine echte <strong>Flächenstruktur für das gesamte Layout</strong>.</p>
</div>

## Zweite Mini-Demo: dieselben Karten, anderes Raster

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Ein Raster denkt nicht nur in Abstand, sondern in Spaltenlogik</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem; align-items:start;">
    <div style="padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Drei gleich breite Spalten</strong></p>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:0.5rem;">
        <div style="padding:0.8rem; border-radius:12px; background:#dbeafe; font-weight:700;">A</div>
        <div style="padding:0.8rem; border-radius:12px; background:#dcfce7; font-weight:700;">B</div>
        <div style="padding:0.8rem; border-radius:12px; background:#fde68a; font-weight:700;">C</div>
      </div>
    </div>
    <div style="padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Schmale Infospalte + breiter Inhalt</strong></p>
      <div style="display:grid; grid-template-columns:8rem 1fr; gap:0.5rem;">
        <div style="padding:0.8rem; border-radius:12px; background:#dbeafe; font-weight:700;">Filter</div>
        <div style="padding:0.8rem; border-radius:12px; background:#dcfce7; font-weight:700;">Inhalt</div>
        <div style="padding:0.8rem; border-radius:12px; background:#fde68a; font-weight:700; grid-column:1 / -1;">Zusatzbereich</div>
      </div>
    </div>
  </div>
  <p>Die Stärke von Grid liegt nicht nur in vielen Boxen, sondern in einer bewusst gewählten <strong>Spalten- und Flächenaufteilung</strong>.</p>
</div>

## Denkbild

<div class="figure-card">
  <p class="card-kicker">Layoutbild</p>
  <h3>Erst Raster, dann Inhalte einordnen</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Container</strong><span>Legt Zeilen und Spalten fest.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Raster</strong><span>Schafft klare Flächen im Layout.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Elemente</strong><span>Werden passend in diese Flächen gesetzt.</span></div>
  </div>
</div>

## Ein kleines Beispiel

```css
.layout {
  display: grid;
  grid-template-columns: 14rem 1fr;
  gap: 1rem;
}
```

Hier entsteht:

- links eine feste schmale Spalte,
- rechts ein flexibler Hauptbereich,
- dazwischen ein klarer Abstand.

## Eine ruhige Prüfstrategie

1. Brauche ich nur eine Richtung oder ein ganzes Raster?
2. Welche Bereiche gehören nebeneinander oder untereinander?
3. Welche Struktur legt der Container fest?
4. Wie ordnen sich die Inhalte in diese Struktur ein?

<div class="note-panel">
  <p><strong>Merke:</strong> Grid ist besonders dann stark, wenn ein Layout gleichzeitig über Zeilen und Spalten gedacht werden soll.</p>
</div>
