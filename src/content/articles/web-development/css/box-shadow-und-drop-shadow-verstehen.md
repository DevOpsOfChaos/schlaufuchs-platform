---
title: Box-Shadow und Drop-Shadow verstehen
description: Verstehe, warum box-shadow und filter drop-shadow beide Schatten erzeugen, aber unterschiedlich stark an Rechteck, Inhalt und sichtbarer Form eines Elements gebunden sind.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - box-shadow-und-drop-shadow-verstehen
learningGoals:
  - Du erklärst den Unterschied zwischen box-shadow und drop-shadow.
  - Du beschreibst, warum ein Rechteckschatten nicht immer dieselbe Wirkung hat wie ein Formschatten.
  - Du liest Schatten eher über Bezug zur sichtbaren Form als nur über „mehr Tiefe".
practiceIdeas:
  - Vergleiche eine rechteckige Karte mit einem freigestellten Symbol oder Badge.
  - Prüfe, ob der Schatten eher der Box oder der sichtbaren Form folgen soll.
  - Lies Schatten nicht nur als Deko, sondern als Teil der Formwirkung.
commonMistakes:
  - box-shadow und drop-shadow als identisch zu behandeln.
  - für freigestellte Formen automatisch box-shadow zu verwenden.
  - Schattenwirkung nur nach Stärke statt nach Bezug zur Form zu beurteilen.
keyTakeaways:
  - box-shadow folgt stärker der Box des Elements.
  - drop-shadow orientiert sich stärker an der sichtbaren Form des gerenderten Inhalts.
  - Die passendere Wahl hängt davon ab, ob Box oder Form betont werden soll.
recognizeSignals:
  - Es geht um Karten, Icons, freigestellte Bilder, Badges oder schwebende Elemente.
  - Du sollst erklären, warum ein Schatten eckig oder formnah wirkt.
  - In Beispielen zählt die Formlogik stärker als bloße Intensität.
selfCheckPoints:
  - Kann ich box-shadow und drop-shadow fachlich trennen?
  - Kann ich entscheiden, ob Box oder sichtbare Form betont werden soll?
  - Kann ich eine passende Schattenart für Karten und freigestellte Elemente begründen?
tags:
  - css
  - box-shadow
  - drop-shadow
  - tiefe
level: mittel
draft: false
---

## Grundidee

Schatten sollen oft räumliche Tiefe andeuten. Dabei ist aber wichtig, **woran** sich der Schatten orientiert. Soll der Schatten einer rechteckigen Box folgen oder eher der sichtbaren Form eines Elements?

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Karte versus freigestelltes Icon</h3>
  <p>Eine Inhaltskarte ist klar rechteckig. Ein freigestelltes Symbol oder Badge hat dagegen eher eine unregelmäßige Form. Wenn beide denselben Schatten bekämen, sähe das oft unstimmig aus. Genau deshalb muss man <code>box-shadow</code> und <code>drop-shadow</code> unterscheiden.</p>
</div>

## Zwei Schattenideen

<div class="visual-grid">
  <div class="visual-item">
    <strong>box-shadow</strong>
    <span>Betont die Box eines Elements und passt gut zu Karten, Buttons und Panels.</span>
  </div>
  <div class="visual-item">
    <strong>drop-shadow</strong>
    <span>Folgt stärker der sichtbaren Form und passt gut zu freigestellten Grafiken oder Symbolen.</span>
  </div>
</div>

## Mini-Demo: Rechteckschatten oder Formschatten?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die richtige Schattenidee hängt an der sichtbaren Form</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>box-shadow</strong></p>
      <div style="padding:1rem; border-radius:16px; background:white; box-shadow:0 16px 30px rgba(15,23,42,0.15); border:1px solid #e2e8f0;">
        <strong>Karte</strong>
        <p style="margin:0.45rem 0 0;">Der Schatten folgt der klaren Box und macht die Fläche räumlich lesbar.</p>
      </div>
    </div>
    <div style="padding:0.95rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>drop-shadow</strong></p>
      <div style="display:grid; place-items:center; min-height:8rem; border-radius:16px; background:white; border:1px solid #e2e8f0;">
        <div style="width:5.2rem; height:5.2rem; background:#60a5fa; clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); filter:drop-shadow(0 12px 12px rgba(15,23,42,0.22));"></div>
      </div>
      <p style="margin:0.55rem 0 0;">Hier folgt der Schatten eher der sichtbaren Sternform statt einer großen Rechteckbox.</p>
    </div>
  </div>
</div>

## Wann `box-shadow` gut passt

```css
.card {
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.14);
}
```

Das ist besonders sinnvoll, wenn die **Box selbst** die zentrale sichtbare Form ist, zum Beispiel bei:

- Karten,
- Buttons,
- Dialogen,
- Panels,
- Formularflächen.

## Wann `drop-shadow` gut passt

```css
.icon {
  filter: drop-shadow(0 10px 12px rgba(15, 23, 42, 0.22));
}
```

Das ist besonders sinnvoll, wenn ein Element keine klassische rechteckige Formwirkung haben soll, etwa bei:

- freigestellten Symbolen,
- transparenten PNG-/SVG-Flächen,
- Badges oder Logos,
- unregelmäßigen Formen.

## Ruhiger Vergleich

<div class="compare-card">
  <p class="card-kicker">Wahl nach Formlogik</p>
  <h3>Nicht jede Schattenstärke löst das eigentliche Problem</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Box betonen</strong>
      <span>Dann ist <code>box-shadow</code> oft die ruhigere Wahl, weil die Fläche selbst wie ein Layer wirkt.</span>
    </div>
    <div class="compare-item">
      <strong>Form betonen</strong>
      <span>Dann ist <code>drop-shadow</code> oft stimmiger, weil nicht die unsichtbare Rechteckfläche betont wird.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Welche **sichtbare Form** hat das Element?
2. Soll der Schatten der **Box** oder der **Form** folgen?
3. Wirkt ein rechteckiger Schatten hier stimmig oder zu grob?
4. Wird die Tiefe klarer oder nur unruhiger?

<div class="note-panel">
  <p><strong>Merke:</strong> <code>box-shadow</code> denkt stärker von der Box aus. <code>drop-shadow</code> denkt stärker von der sichtbaren Form aus.</p>
</div>
