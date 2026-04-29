---
title: "Grid-Container und Grid-Items getrennt denken"
description: "Verstehe, welche Eigenschaften am Grid-Container liegen und welche erst auf die einzelnen Grid-Items wirken."
subject: "web-development"
section: "CSS"
topicPath: ["css", "grid-container-und-grid-items-getrennt-denken"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "CSS"]
draft: false
---
## Grundidee

CSS Grid arbeitet auf zwei Ebenen gleichzeitig. Das macht das Thema stark, aber auch fehleranfällig. Erst der **Container** definiert das Raster. Danach bekommen einzelne **Items** ihre Position oder ihr eigenes Verhalten im Raster.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Karten sollen in einem Raster liegen</h3>
  <p>Die Spaltenbreiten, Zeilenhöhen und Lücken zwischen den Bereichen gehören zum Container. Erst danach kann eine Karte sagen, ob sie zum Beispiel über zwei Spalten reichen soll.</p>
</div>

## Was zum Container gehört

Typische Container-Eigenschaften sind:

- <code>display: grid</code>
- <code>grid-template-columns</code>
- <code>grid-template-rows</code>
- <code>gap</code>
- <code>justify-items</code>
- <code>align-items</code>

Der Container baut also das gemeinsame Raster, in das alle Kinder eingeordnet werden.

## Was zum Item gehört

Typische Item-Eigenschaften sind:

- <code>grid-column</code>
- <code>grid-row</code>
- <code>justify-self</code>
- <code>align-self</code>

Das Item beschreibt damit nicht das ganze Raster, sondern nur **seinen Platz darin**.

<div class="compare-card">
  <p class="card-kicker">Saubere Trennung</p>
  <h3>Raster bauen vs. Platz wählen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Container</strong>
      <span>Legt fest, wie viele Spalten und Zeilen es gibt und wie weit die Bereiche auseinanderliegen.</span>
    </div>
    <div class="compare-item">
      <strong>Item</strong>
      <span>Legt fest, an welcher Stelle ein Element liegt oder wie weit es sich über das Raster erstreckt.</span>
    </div>
  </div>
</div>

## Mini-Demo: wo das Raster entsteht

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Container zuerst, Item danach</h3>
  <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:0.6rem; padding:0.8rem; border-radius:16px; background:#f8fafc; border:1px solid #cbd5e1;">
    <div style="padding:0.8rem; border-radius:12px; background:#dbeafe; font-weight:700;">Item 1</div>
    <div style="padding:0.8rem; border-radius:12px; background:#fecaca; font-weight:700; grid-column: span 2;">Item 2 spannt über zwei Spalten</div>
    <div style="padding:0.8rem; border-radius:12px; background:#dcfce7; font-weight:700;">Item 3</div>
  </div>
  <p style="margin:0.7rem 0 0; color:#475569;">Die drei Spalten kommen vom Container. Dass Item 2 breiter ist, kommt erst von seiner Item-Regel.</p>
</div>

## Eine ruhige Fehlersuche

Wenn ein Grid nicht so aussieht wie erwartet, frage nacheinander:

1. Ist überhaupt am richtigen Eltern-Element <code>display: grid</code> gesetzt?
2. Sind Spalten und Zeilen im Container sauber definiert?
3. Hat ein Item eine falsche <code>grid-column</code>- oder <code>grid-row</code>-Regel?

<div class="note-panel">
  <p><strong>Merke:</strong> Viele Grid-Probleme sind keine schwierigen CSS-Probleme, sondern nur eine Verwechslung von Container- und Item-Ebene.</p>
</div>
