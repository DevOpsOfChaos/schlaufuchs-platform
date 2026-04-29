---
title: "Width und Max-Width verstehen"
description: "Verstehe, warum feste Breiten oft unruhig werden und wie max-width Inhalte begrenzt, ohne kleine Bildschirme zu überfordern."
subject: "web-development"
section: "CSS"
topicPath: ["css", "width-und-max-width-verstehen"]
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

Mit Breitenregeln steuerst du nicht nur, **wie groß etwas sein soll**, sondern auch, **wie starr oder flexibel ein Element auf unterschiedliche Bildschirmgrößen reagiert**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Lesespalte soll nicht zu schmal und nicht zu breit werden</h3>
  <p>Ein Inhaltsbereich soll auf kleinen Geräten die verfügbare Breite nutzen, auf großen Bildschirmen aber nicht endlos breit werden. Genau dort hilft <code>max-width</code>, weil es nicht erzwingt, sondern begrenzt.</p>
</div>

## Zwei verschiedene Denkweisen

<div class="compare-card">
  <p class="card-kicker">Breitenlogik</p>
  <h3>Zwang oder Obergrenze?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>width</strong>
      <span>Legt eine konkrete Breite fest. Das Element versucht, genau so breit zu sein.</span>
    </div>
    <div class="compare-item">
      <strong>max-width</strong>
      <span>Setzt nur eine obere Grenze. Das Element darf kleiner bleiben, wenn weniger Platz da ist.</span>
    </div>
  </div>
</div>

## Mini-Demo: dieselbe Karte, unterschiedliche Breitenlogik

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Warum feste Breite und Obergrenze nicht dasselbe sind</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem; align-items:start;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc; max-width:18rem;">
      <p style="margin:0 0 0.45rem;"><strong>Starr mit width</strong></p>
      <div style="width:18rem; max-width:none; padding:0.85rem; border-radius:12px; background:#dbeafe; font-weight:700; box-sizing:border-box;">Die Box versucht, immer dieselbe Breite zu halten.</div>
      <p style="margin:0.55rem 0 0;">Wenn der verfügbare Raum kleiner wird, kann genau diese Starrheit unruhig werden.</p>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc; max-width:18rem;">
      <p style="margin:0 0 0.45rem;"><strong>Begrenzt mit max-width</strong></p>
      <div style="width:100%; max-width:18rem; padding:0.85rem; border-radius:12px; background:#dcfce7; font-weight:700; box-sizing:border-box;">Die Box darf groß werden, bleibt auf kleineren Flächen aber flexibler.</div>
      <p style="margin:0.55rem 0 0;">Hier ist die Obergrenze gleich, aber die Reaktion auf wenig Platz deutlich ruhiger.</p>
    </div>
  </div>
</div>

## Warum max-width auch Lesbarkeit schützt

<div class="figure-card">
  <p class="card-kicker">Lesespalten</p>
  <h3>Zu breit ist nicht automatisch besser</h3>
  <div style="display:grid; gap:0.85rem;">
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <div style="padding:0.85rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        Eine sehr breite Textfläche kann technisch möglich sein, wirkt beim Lesen aber schnell unruhig, weil die Augen weite Zeilen zurücklegen müssen.
      </div>
    </div>
    <div style="padding:0.85rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <div style="max-width:24rem; padding:0.85rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        Eine mit max-width begrenzte Lesespalte nutzt den vorhandenen Platz auf kleinen Geräten und bleibt auf großen Flächen trotzdem angenehm lesbar.
      </div>
    </div>
  </div>
</div>

```css
.inhalt {
  width: 100%;
  max-width: 42rem;
}
```

## Eine ruhige Prüfstrategie

1. Soll das Element immer exakt gleich breit sein?
2. Oder soll es nur nicht zu breit werden?
3. Muss der Inhalt auf kleinen Geräten flexibel bleiben?
4. Dann ist <code>max-width</code> oft der ruhigere erste Gedanke.

<div class="note-panel">
  <p><strong>Merke:</strong> <code>width</code> sagt: „So breit soll es sein.“ <code>max-width</code> sagt: „Breiter als bis hierhin bitte nicht.“</p>
</div>
