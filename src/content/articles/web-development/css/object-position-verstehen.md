---
title: "Object-Position verstehen"
description: "Verstehe, wie object-position festlegt, welcher Bereich eines Bildes im sichtbaren Ausschnitt betont wird."
subject: "web-development"
section: "CSS"
topicPath: ["css", "object-position-verstehen"]
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

Wenn ein Bild in einen festen Rahmen gezwungen wird, ist oft nicht nur wichtig, **wie** es skaliert wird, sondern auch **welcher Teil sichtbar bleiben soll**. Genau dort kommt `object-position` ins Spiel.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein breites Foto in einer schmalen Kartenbox</h3>
  <p>Das Bild passt mit <code>object-fit: cover</code> grundsätzlich in die Karte. Aber je nachdem, ob links, mittig oder rechts fokussiert wird, bleibt ein anderer Teil des Fotos sichtbar. Das verändert die Wirkung deutlich.</p>
</div>

## Erst fit, dann Fokus

<div class="visual-grid">
  <div class="visual-item">
    <strong><code>object-fit</code></strong>
    <span>Wie wird das Bild grundsätzlich in die Box eingepasst?</span>
  </div>
  <div class="visual-item">
    <strong><code>object-position</code></strong>
    <span>Welcher Bereich des Bildes soll im sichtbaren Ausschnitt bevorzugt werden?</span>
  </div>
</div>

## Mini-Demo: dieselbe Box, anderer Fokus

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Links, Mitte und rechts erzählen nicht dieselbe Bildgeschichte</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(14rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border-radius:16px; border:1px solid #e2e8f0; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Links fokussiert</strong></p>
      <div style="height:8rem; overflow:hidden; border-radius:12px; background:linear-gradient(90deg,#0ea5e9 0 33%,#f59e0b 33% 66%,#ef4444 66%); position:relative;">
        <div style="position:absolute; inset:0; background:linear-gradient(90deg,transparent 0 30%, rgba(255,255,255,.65) 30% 100%);"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Der linke Bildteil bleibt betont sichtbar.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; border:1px solid #e2e8f0; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mittig fokussiert</strong></p>
      <div style="height:8rem; overflow:hidden; border-radius:12px; background:linear-gradient(90deg,#0ea5e9 0 33%,#f59e0b 33% 66%,#ef4444 66%); position:relative;">
        <div style="position:absolute; inset:0; background:linear-gradient(90deg,rgba(255,255,255,.65) 0 18%, transparent 18% 82%, rgba(255,255,255,.65) 82%);"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Mitte wird betont, die Seiten treten zurück.</p>
    </div>
    <div style="padding:0.9rem; border-radius:16px; border:1px solid #e2e8f0; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Rechts fokussiert</strong></p>
      <div style="height:8rem; overflow:hidden; border-radius:12px; background:linear-gradient(90deg,#0ea5e9 0 33%,#f59e0b 33% 66%,#ef4444 66%); position:relative;">
        <div style="position:absolute; inset:0; background:linear-gradient(90deg,rgba(255,255,255,.65) 0 70%, transparent 70% 100%);"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Der rechte Bildteil steht im Vordergrund.</p>
    </div>
  </div>
</div>

```css
.bild {
  object-fit: cover;
  object-position: right center;
}
```

## Wofür object-position nützlich ist

- Gesichter oder Produkte im Bild halten,
- Kartenbilder sinnvoll zuschneiden,
- Banner nicht zufällig wirken lassen.

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Skalierung und Fokus sind zwei verschiedene Entscheidungen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>object-fit</strong>
      <span>entscheidet über Einpassen und Zuschneiden als Größenlogik.</span>
    </div>
    <div class="compare-item">
      <strong>object-position</strong>
      <span>entscheidet über den in der Box bevorzugten Blickpunkt.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Hat das Bild einen festen Rahmen?
2. Muss zugeschnitten werden?
3. Welcher Bildteil ist wichtig?
4. Erst dann die Fokusposition wählen.

<div class="note-panel">
  <p><strong>Merke:</strong> <code>object-position</code> ist am leichtesten als <strong>Steuerung des sichtbaren Blickpunkts</strong> zu verstehen.</p>
</div>
