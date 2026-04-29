---
title: "Calc für zusammengesetzte Größen verstehen"
description: "Verstehe, wie calc mehrere Größenideen in einem Ausdruck verbindet und warum dadurch Abstände, Breiten oder Höhen ruhiger beschrieben werden können."
subject: "web-development"
section: "CSS"
topicPath: ["css", "calc-fuer-zusammengesetzte-groessen-verstehen"]
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

Manche CSS-Größen lassen sich nicht mit nur einem Wert gut beschreiben. Ein Element soll vielleicht **fast die ganze Breite** einnehmen, aber trotzdem einen **festen Abstand** zum Rand behalten. Genau für solche Fälle ist `calc(...)` hilfreich.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Spalte mit Restbreite</h3>
  <p>In einem Layout soll die Hauptspalte den verfügbaren Platz nutzen, aber neben einer festen Seitenleiste und einem festen Zwischenraum stehen. Ein einziger Prozentwert reicht dafür oft nicht. Hier ist <code>calc</code> eine ruhige Art, die Größenlogik sichtbar zu machen.</p>
</div>

## Worum es bei `calc` geht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Flexibler Anteil</strong>
    <span>Zum Beispiel ein Prozentwert oder eine viewportbezogene Größe.</span>
  </div>
  <div class="visual-item">
    <strong>Fester Anteil</strong>
    <span>Zum Beispiel ein Rand, eine Lücke oder eine feste Spaltenbreite.</span>
  </div>
  <div class="visual-item">
    <strong>Zusammenspiel</strong>
    <span><code>calc</code> verbindet beides in einem lesbaren Ausdruck.</span>
  </div>
</div>

## Mini-Demo: volle Breite oder verfügbare Restfläche?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Manchmal beschreibt ein Einzelwert die Fläche einfach nicht gut genug</h3>
  <div style="display:grid; gap:0.9rem;">
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Nur 100%</strong></p>
      <div style="display:grid; grid-template-columns:10rem 1fr; gap:0.8rem;">
        <div style="padding:0.7rem; border-radius:10px; background:#dbeafe;">Seitenleiste</div>
        <div style="padding:0.7rem; border-radius:10px; background:#c7d2fe;">Hauptbereich ohne zusätzlich erklärte Restlogik</div>
      </div>
    </div>
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>calc(100% - 10rem - 0.8rem)</strong></p>
      <div style="display:grid; grid-template-columns:10rem minmax(0,1fr); gap:0.8rem;">
        <div style="padding:0.7rem; border-radius:10px; background:#dbeafe;">Seitenleiste</div>
        <div style="padding:0.7rem; border-radius:10px; background:#fde68a;">Hauptbereich als berechnete Restfläche</div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Fläche wird nicht nur „groß“, sondern als Rest nach festen Anteilen gedacht.</p>
    </div>
  </div>
</div>

## Typische Einsatzsituationen

- verfügbare Restbreite neben einer festen Spalte,
- Höhe abzüglich fester Kopf- oder Fußbereiche,
- Breite mit festem Innen- oder Außenabstand,
- flexible Fläche plus feste Lücke.

```css
.main {
  width: calc(100% - 18rem);
}
```

Das bedeutet nicht nur „irgendwie kleiner“, sondern: **Alles, was nach einem festen Bereich übrig bleibt, gehört dem Hauptinhalt.**

## Gute Lesart von `calc`

<div class="compare-card">
  <p class="card-kicker">Größenlogik</p>
  <h3>Calc ist eher ein Satz über Fläche als ein Rechenspiel</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hilfreich</strong>
      <span>Wenn eine Fläche von mehreren Bedingungen gleichzeitig abhängt und diese Bedingungen sichtbar bleiben sollen.</span>
    </div>
    <div class="compare-item">
      <strong>Weniger hilfreich</strong>
      <span>Wenn dieselbe Wirkung mit klarerer Layoutstruktur schon direkt erreichbar wäre.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Welche Fläche ist **flexibel**?
2. Welche Anteile sind **fest**?
3. Beschreibt `calc` den sichtbaren Rest wirklich klar?
4. Oder wäre eine andere Layoutidee lesbarer?

<div class="note-panel">
  <p><strong>Merke:</strong> <code>calc</code> ist besonders nützlich, wenn feste und flexible Größen gleichzeitig erklärt werden müssen.</p>
</div>
