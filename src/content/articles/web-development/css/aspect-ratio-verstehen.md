---
title: "Aspect-Ratio verstehen"
description: "Verstehe, wie aspect-ratio feste Seitenverhältnisse sichert und warum Karten, Bilder oder Platzhalter dadurch ruhiger wirken."
subject: "web-development"
section: "CSS"
topicPath: ["css", "aspect-ratio-verstehen"]
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

Viele Layouts wirken unruhig, wenn ähnliche Boxen unterschiedliche Höhen bekommen, obwohl sie fachlich zusammengehören. <code>aspect-ratio</code> hilft, eine Fläche **proportional** zu denken.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Vorschaubilder sollen als ruhige Kartenreihe erscheinen</h3>
  <p>Wenn jede Vorschau eine andere Höhe hat, springen die Karten im Raster. Mit einem gemeinsamen Seitenverhältnis bleibt die Grundform ruhig, auch wenn der eigentliche Inhalt später noch geladen oder ausgetauscht wird.</p>
</div>

## Was aspect-ratio beschreibt

<code>aspect-ratio: 16 / 9;</code> bedeutet:

- die Fläche soll im Verhältnis 16 zu 9 gedacht werden,
- Breite und Höhe hängen proportional zusammen,
- die Form bleibt dadurch konsistent.

## Mini-Demo: gleiche Kartenart, andere Wirkung

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Gleiche Proportionen beruhigen ein Raster</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Ohne gemeinsame Proportion</strong></p>
      <div style="display:grid; gap:0.55rem; background:white; border:1px solid #e2e8f0; border-radius:12px; padding:0.8rem;">
        <div style="height:4rem; border-radius:12px; background:#dbeafe;"></div>
        <div style="height:6rem; border-radius:12px; background:#dcfce7;"></div>
        <div style="height:8rem; border-radius:12px; background:#fde68a;"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Flächen gehören zusammen, wirken aber wie drei verschiedene Formlogiken.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit gemeinsamer aspect-ratio</strong></p>
      <div style="display:grid; gap:0.55rem; background:white; border:1px solid #e2e8f0; border-radius:12px; padding:0.8rem;">
        <div style="aspect-ratio:16 / 9; border-radius:12px; background:#dbeafe;"></div>
        <div style="aspect-ratio:16 / 9; border-radius:12px; background:#dcfce7;"></div>
        <div style="aspect-ratio:16 / 9; border-radius:12px; background:#fde68a;"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Jetzt liest man die Flächen als gemeinsame Kartenfamilie.</p>
    </div>
  </div>
</div>

## Warum das nicht nur für Bilder wichtig ist

Aspect-Ratio ist nicht bloß eine Bildregel. Auch Container, Medienkarten, Teaserflächen oder Platzhalter können dadurch ruhiger aufgebaut werden.

<div class="compare-card">
  <p class="card-kicker">Wichtige Unterscheidung</p>
  <h3>Form der Box und Inhalt darin sind nicht dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Aspect-Ratio</strong>
      <span>Beschreibt zuerst die Form der Fläche.</span>
    </div>
    <div class="compare-item">
      <strong>Inhalt</strong>
      <span>Der Inhalt kommt in diese Fläche hinein und muss dann passend darin erscheinen.</span>
    </div>
  </div>
</div>

```css
.vorschau {
  aspect-ratio: 16 / 9;
}
```

## Eine ruhige Prüfstrategie

1. Gehören mehrere Boxen sichtbar zusammen?
2. Sollen sie eine gemeinsame Grundform haben?
3. Welche Proportion passt fachlich: breit, quadratisch oder hoch?
4. Erst danach Bildausschnitt, Höhe oder Detailstyling prüfen.

<div class="note-panel">
  <p><strong>Merke:</strong> <code>aspect-ratio</code> ordnet nicht zuerst den Inhalt, sondern die <strong>Form der Fläche</strong>.</p>
</div>
