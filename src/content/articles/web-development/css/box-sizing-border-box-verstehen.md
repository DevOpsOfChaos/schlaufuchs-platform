---
title: "Box-Sizing und Border-Box verstehen"
description: "Verstehe, warum <code>box-sizing: border-box</code> die Gesamtbreite eines Elements leichter lesbar und berechenbar macht."
subject: "web-development"
section: "CSS"
topicPath: ["css", "box-sizing-border-box-verstehen"]
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

Beim Box-Modell ist nicht nur wichtig, **welche Teile eine Box hat**, sondern auch, **wie eine Breitenangabe gelesen wird**. Genau hier kommt <code>box-sizing</code> ins Spiel.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Karten sollen exakt nebeneinander passen</h3>
  <p>Beide Karten bekommen <code>width: 50%</code>. Zusätzlich kommt innen noch Padding dazu. Plötzlich wird das Layout breiter als gedacht. Genau an dieser Stelle hilft <code>box-sizing: border-box</code>, weil die Gesamtbreite ruhiger lesbar wird.</p>
</div>

## Zwei Leseweisen für Breite

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Was zählt in die Breite hinein?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Standarddenken</strong>
      <span>Die angegebene <code>width</code> bezieht sich auf den Inhalt. Padding und Border kommen zusätzlich dazu.</span>
    </div>
    <div class="compare-item">
      <strong>Border-Box</strong>
      <span>Die angegebene <code>width</code> beschreibt die gesamte Box. Padding und Border liegen bereits darin.</span>
    </div>
  </div>
</div>

## Mini-Demo: gleiche width, anderer Effekt

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Warum zwei Boxen unterschiedlich breit wirken können</h3>
  <div style="display:grid; gap:0.9rem;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Ohne <code>border-box</code></strong></p>
      <div style="display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:0.6rem;">
        <div style="width:100%; padding:1rem; border:2px solid #60a5fa; border-radius:12px; background:#dbeafe; box-sizing:content-box; font-weight:700;">Box A</div>
        <div style="width:100%; padding:1rem; border:2px solid #34d399; border-radius:12px; background:#dcfce7; box-sizing:content-box; font-weight:700;">Box B</div>
      </div>
      <p style="margin:0.55rem 0 0;">Die sichtbare Gesamtbreite wird größer als nur der Inhaltswert.</p>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit <code>box-sizing: border-box</code></strong></p>
      <div style="display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:0.6rem;">
        <div style="width:100%; padding:1rem; border:2px solid #60a5fa; border-radius:12px; background:#dbeafe; box-sizing:border-box; font-weight:700;">Box A</div>
        <div style="width:100%; padding:1rem; border:2px solid #34d399; border-radius:12px; background:#dcfce7; box-sizing:border-box; font-weight:700;">Box B</div>
      </div>
      <p style="margin:0.55rem 0 0;">Padding und Border liegen jetzt schon in der angegebenen Breite.</p>
    </div>
  </div>
</div>

## Typisches Beispiel

```css
.karte {
  width: 18rem;
  padding: 1rem;
  border: 2px solid #334155;
  box-sizing: border-box;
}
```

Hier bleibt die angegebene Breite von <code>18rem</code> als Gesamtbreite kontrollierbar.

## Eine ruhige Prüfstrategie

1. Meint die Breitenangabe nur den Inhalt oder die ganze Box?
2. Kommen Padding und Border zusätzlich dazu?
3. Wird die Box dadurch breiter als geplant?
4. Würde <code>border-box</code> die Breitenlogik klarer machen?

<div class="note-panel">
  <p><strong>Merke:</strong> <code>border-box</code> ist vor allem ein Denkwerkzeug für ruhige Layoutbreiten. Es macht Boxen oft leichter berechenbar.</p>
</div>
