---
title: "DOM-Grundidee und Knotenbeziehungen verstehen"
description: "Verstehe, warum ein HTML-Dokument im Browser als Baum aus Knoten betrachtet wird und wie das für spätere DOM-Zugriffe hilft."
subject: "web-development"
section: "HTML"
topicPath: ["html", "dom-grundidee-und-knotenbeziehungen-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "HTML"]
draft: false
---
## Grundidee

Im Browser ist HTML nicht nur eine Textdatei, sondern eine **Baumstruktur aus Knoten**. Genau diese Sicht nennt man DOM – Document Object Model.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Warum das DOM wie ein Baum gedacht wird</h3>
  <p>Ein <code>&lt;ul&gt;</code> enthält mehrere <code>&lt;li&gt;</code>-Elemente. Diese enthalten wieder Text oder weitere Elemente. Dadurch entstehen Eltern-, Kind- und Geschwisterbeziehungen. Das ist deutlich ruhiger zu lesen als „einfach nur HTML-Zeilen“.</p>
</div>

## Typische Knotentypen

<div class="visual-grid">
  <div class="visual-item"><strong>Elementknoten</strong><span>Ein HTML-Element wie <code>&lt;p&gt;</code>, <code>&lt;ul&gt;</code> oder <code>&lt;li&gt;</code>.</span></div>
  <div class="visual-item"><strong>Attributknoten</strong><span>Zusätzliche Eigenschaften wie <code>id</code>, <code>class</code> oder <code>lang</code>.</span></div>
  <div class="visual-item"><strong>Textknoten</strong><span>Der eigentliche Textinhalt innerhalb eines Elements.</span></div>
</div>

## Beziehungen im DOM

- Ein Elternknoten enthält Kindknoten.
- Kinder desselben Elternteils sind Geschwister.
- Ein Textknoten hängt meist in einem Element.

## Mini-Demo: kleiner HTML-Baum

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Eine Liste als Hierarchie</h3>
  <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
    <code>&lt;ul&gt;</code><br />
    ├─ <code>&lt;li&gt;</code>Eintrag A<code>&lt;/li&gt;</code><br />
    └─ <code>&lt;li&gt;</code>Eintrag B<code>&lt;/li&gt;</code>
  </div>
</div>

## Warum das praktisch wichtig ist

Wenn du später CSS-Selektoren oder JavaScript nutzt, arbeitest du fast immer auf dieser DOM-Hierarchie.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item"><strong>1. Wurzel suchen</strong><span>Welcher Bereich umschließt den anderen?</span></div>
  <div class="step-item"><strong>2. Kinder erkennen</strong><span>Welche Elemente liegen direkt innerhalb eines anderen Elements?</span></div>
  <div class="step-item"><strong>3. Knotenart benennen</strong><span>Ist etwas Element, Attribut oder Text?</span></div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Wer HTML als Baum liest, versteht CSS-Selektoren und spätere DOM-Zugriffe deutlich ruhiger.</p>
</div>
