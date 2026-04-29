---
title: "Optgroup im Select verstehen"
description: "Verstehe, wie optgroup lange Auswahllisten in erkennbare Gruppen gliedert und dadurch die Orientierung verbessert."
subject: "web-development"
section: "HTML"
topicPath: ["html", "optgroup-im-select-verstehen"]
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

Ein langes `select`-Feld kann schnell unübersichtlich wirken. `optgroup` hilft, Optionen in erkennbare Gruppen zu ordnen, damit Nutzer nicht nur lesen, sondern sich auch schneller orientieren können.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Land auswählen</h3>
  <p>Wenn alle Länder einfach untereinander stehen, ist die Liste lang und unruhig. Werden sie nach Regionen gruppiert, wird die Auswahl meist schneller verständlich – selbst wenn die Anzahl der Optionen gleich bleibt.</p>
</div>

## Mini-Demo: dieselben Optionen, mehr oder weniger Ordnung

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Gliederung hilft beim Finden</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px solid #e2e8f0;">
      <p style="margin:0 0 0.45rem;"><strong>Ungegliedert</strong></p>
      <div style="padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1; display:grid; gap:0.35rem;">
        <span>Deutschland</span>
        <span>Frankreich</span>
        <span>Japan</span>
        <span>Kanada</span>
        <span>Brasilien</span>
      </div>
    </div>
    <div style="padding:0.9rem; border-radius:16px; background:#f8fafc; border:1px solid #e2e8f0;">
      <p style="margin:0 0 0.45rem;"><strong>Mit Gruppen</strong></p>
      <div style="padding:0.75rem; border-radius:12px; background:white; border:1px solid #cbd5e1; display:grid; gap:0.35rem;">
        <strong style="font-size:0.9rem; color:#475569;">Europa</strong>
        <span>Deutschland</span>
        <span>Frankreich</span>
        <strong style="font-size:0.9rem; color:#475569; margin-top:0.2rem;">Andere Regionen</strong>
        <span>Japan</span>
        <span>Kanada</span>
        <span>Brasilien</span>
      </div>
    </div>
  </div>
</div>

## Gruppentitel sind keine normalen Optionen

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Orientierung und Auswahl sind nicht dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Optgroup</strong>
      <span>ordnet und benennt einen Block von Optionen.</span>
    </div>
    <div class="compare-item">
      <strong>Option</strong>
      <span>ist ein tatsächlich auswählbarer Wert.</span>
    </div>
  </div>
</div>

```html
<select>
  <optgroup label="Europa">
    <option>Deutschland</option>
    <option>Frankreich</option>
  </optgroup>
  <optgroup label="Asien">
    <option>Japan</option>
  </optgroup>
</select>
```

## Wann optgroup sinnvoll ist

- bei längeren Listen,
- bei klaren Teilgruppen,
- wenn Nutzer schneller scannen sollen,
- und wenn ähnliche Werte leichter sortierbar werden.

## Eine ruhige Prüfstrategie

1. Ist die Liste lang genug, um unübersichtlich zu werden?
2. Gibt es erkennbare Gruppen?
3. Hilft ein Gruppentitel wirklich beim Finden?
4. Dann ist `optgroup` oft eine gute Ergänzung.

<div class="note-panel">
  <p><strong>Merke:</strong> <code>optgroup</code> verbessert vor allem die <strong>Orientierung in langen Listen</strong>.</p>
</div>
