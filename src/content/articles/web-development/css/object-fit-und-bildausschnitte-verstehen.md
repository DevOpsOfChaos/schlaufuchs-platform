---
title: "Object-Fit und Bildausschnitte verstehen"
description: "Verstehe, wie object-fit Bilder in feste Boxen einpasst und warum cover, contain und verzerrtes Strecken sichtbar sehr unterschiedliche Ergebnisse erzeugen."
subject: "web-development"
section: "CSS"
topicPath: ["css", "object-fit-und-bildausschnitte-verstehen"]
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

Bilder haben oft ein eigenes Seitenverhältnis. Karten, Galerien oder Avatare haben aber häufig **vorgegebene Boxen**. Genau dann wird <code>object-fit</code> wichtig: Es steuert, wie Bildinhalt in diese Box eingepasst wird.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Produktkarten mit gleich großer Bildfläche</h3>
  <p>Alle Karten sollen dieselbe Bildhöhe haben. Das eine Bild ist breit, das andere hoch, das dritte fast quadratisch. Ohne klare Regel entstehen schnell abgeschnittene, verzerrte oder unruhig leere Flächen. <code>object-fit</code> macht dieses Verhalten lesbar.</p>
</div>

## Drei sichtbare Denkweisen

<div class="visual-grid">
  <div class="visual-item">
    <strong>cover</strong>
    <span>Die Fläche wird gefüllt, dabei kann Bildinhalt am Rand abgeschnitten werden.</span>
  </div>
  <div class="visual-item">
    <strong>contain</strong>
    <span>Der gesamte Bildinhalt bleibt sichtbar, dafür können leere Ränder entstehen.</span>
  </div>
  <div class="visual-item">
    <strong>verzerrtes Strecken</strong>
    <span>Die Fläche wird gefüllt, aber das Bild verliert seine Proportionen.</span>
  </div>
</div>

## Mini-Demo: dieselbe Bildidee, andere Einpassung

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Fläche füllen, Inhalt zeigen oder Bild verzerren?</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.5rem;"><strong>Cover</strong></p>
      <div style="height:9rem; overflow:hidden; border-radius:12px; background:linear-gradient(135deg,#93c5fd 0 35%, #22c55e 35% 65%, #facc15 65% 100%); position:relative;">
        <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; transform:scale(1.2); font-weight:800;">Bildfläche</div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Fläche wirkt voll, am Rand darf Inhalt verloren gehen.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.5rem;"><strong>Contain</strong></p>
      <div style="height:9rem; padding:0.6rem; border-radius:12px; background:white; border:1px solid #cbd5e1;">
        <div style="height:100%; border-radius:10px; background:linear-gradient(135deg,#93c5fd 0 35%, #22c55e 35% 65%, #facc15 65% 100%); display:flex; align-items:center; justify-content:center; font-weight:800;">Bildfläche</div>
      </div>
      <p style="margin:0.55rem 0 0;">Der gesamte Inhalt bleibt sichtbar, aber nicht jede Ecke wird vollständig gefüllt.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.5rem;"><strong>Verzerrt</strong></p>
      <div style="height:9rem; border-radius:12px; background:linear-gradient(90deg,#93c5fd 0 35%, #22c55e 35% 65%, #facc15 65% 100%); display:flex; align-items:center; justify-content:center; font-weight:800; letter-spacing:0.08em;">Bildfläche</div>
      <p style="margin:0.55rem 0 0;">Die Fläche ist voll, aber die Proportionen wirken künstlich gestreckt.</p>
    </div>
  </div>
</div>

## Warum cover oft beliebt ist

Karten und Teaser sollen oft eine ruhige, gleich hohe Bildfläche zeigen. Dafür ist <code>cover</code> beliebt, weil die Fläche geschlossen wirkt. Der Preis dafür ist: Randbereiche können abgeschnitten werden.

```css
.card img {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}
```

## Eine ruhige Entscheidungsfrage

Frage nicht zuerst: „Wie bekomme ich die Box voll?“

Frage zuerst:

- Muss der gesamte Bildinhalt sichtbar bleiben?
- Oder soll die Fläche als ruhige Kartenfläche funktionieren?

<div class="compare-card">
  <p class="card-kicker">Entscheidungshilfe</p>
  <h3>Ausschnitt oder Vollständigkeit?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Cover</strong>
      <span>Gut für ruhige Kartenflächen, wenn ein kleiner Ausschnittverlust okay ist.</span>
    </div>
    <div class="compare-item">
      <strong>Contain</strong>
      <span>Gut, wenn der gesamte Inhalt sichtbar bleiben muss.</span>
    </div>
    <div class="compare-item">
      <strong>Nicht verzerren</strong>
      <span>Wenn Proportionen kippen, stimmt meist die Einpassungslogik nicht.</span>
    </div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> <code>object-fit</code> beantwortet nicht nur „Passt das Bild rein?“, sondern „Wie soll Bildinhalt in einer festen Fläche sichtbar wirken?“</p>
</div>
