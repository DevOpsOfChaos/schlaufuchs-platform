---
title: Z-Index und Ebenen verstehen
description: Verstehe, warum sich überlagernde Elemente nicht nur nach Reihenfolge im HTML, sondern auch nach Ebenenlogik verhalten und wie z-index diese Sichtbarkeit steuern kann.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - z-index-und-ebenen-verstehen
learningGoals:
  - Du erklärst die Grundidee von Ebenen im Layout.
  - Du beschreibst, wann z-index sichtbar wird.
  - Du unterscheidest Positionslogik und Ebenenlogik ruhiger voneinander.
practiceIdeas:
  - Vergleiche ein Badge hinter und vor einer Karte.
  - Prüfe bei Overlays, Menüs oder Hinweisen zuerst die Ebenenfrage.
  - Erkläre, warum ein Element zwar positioniert, aber trotzdem verdeckt sein kann.
commonMistakes:
  - z-index überall einzusetzen, ohne dass überhaupt eine Überlagerung vorliegt.
  - Position und Ebenenreihenfolge zu vermischen.
  - hohe Zahlen als Dauerlösung statt als durchdachte Ebenenlogik zu verwenden.
keyTakeaways:
  - z-index ist für überlagernde Elemente relevant, nicht für jedes normale Layout.
  - Sichtbarkeit in der Tiefe ist etwas anderes als Position auf x- und y-Achse.
  - Gute Ebenenlogik bleibt bewusst und sparsam.
recognizeSignals:
  - Es geht um Menüs, Badges, Overlays, Tooltips oder verdeckte Boxen.
  - Du sollst erklären, warum etwas hinter oder vor etwas anderem liegt.
  - In Beispielen ist die Frage wichtig, welche Ebene sichtbar oben liegen soll.
selfCheckPoints:
  - Kann ich erklären, wann z-index überhaupt wichtig wird?
  - Kann ich Position und Ebene unterscheiden?
  - Kann ich begründen, warum ein Element sichtbar über einem anderen liegen soll?
tags:
  - css
  - z-index
  - position
  - ebene
level: einfach
draft: false
---

## Grundidee

Im Layout gibt es nicht nur links, rechts, oben und unten. Sobald sich Elemente überlagern, entsteht auch eine **Ebenenfrage**: Was liegt sichtbar davor und was dahinter?

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Badge soll auf einer Karte sichtbar oben liegen</h3>
  <p>Eine Produktkarte bekommt eine Eckmarkierung mit „Neu“. Wenn sich Badge und Karte überlagern, reicht die reine Position nicht mehr. Jetzt wird wichtig, welche Ebene sichtbar oben liegt.</p>
</div>

## Was z-index eigentlich steuert

<div class="visual-grid">
  <div class="visual-item">
    <strong>Position</strong>
    <span>Wo steht ein Element auf der Fläche?</span>
  </div>
  <div class="visual-item">
    <strong>Ebene</strong>
    <span>Liegt es vor oder hinter einem anderen Element?</span>
  </div>
  <div class="visual-item">
    <strong>z-index</strong>
    <span>Diese CSS-Regel hilft, die Reihenfolge überlagernder Elemente bewusst zu steuern.</span>
  </div>
</div>

## Mini-Demo: gleiche Position, andere Ebene

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Was „vorne“ und „hinten“ sichtbar ändert</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Badge liegt dahinter</strong></p>
      <div style="position:relative; height:8rem; border-radius:14px; background:#dbeafe;">
        <div style="position:absolute; top:0.6rem; right:0.6rem; padding:0.35rem 0.55rem; border-radius:999px; background:#ef4444; color:white; font-weight:700; z-index:0;">Neu</div>
        <div style="position:absolute; inset:1.2rem; border-radius:12px; background:white; border:1px solid #cbd5e1; z-index:1; display:grid; place-items:center;">Karte</div>
      </div>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Badge liegt darüber</strong></p>
      <div style="position:relative; height:8rem; border-radius:14px; background:#dbeafe;">
        <div style="position:absolute; top:0.6rem; right:0.6rem; padding:0.35rem 0.55rem; border-radius:999px; background:#ef4444; color:white; font-weight:700; z-index:2;">Neu</div>
        <div style="position:absolute; inset:1.2rem; border-radius:12px; background:white; border:1px solid #cbd5e1; z-index:1; display:grid; place-items:center;">Karte</div>
      </div>
    </div>
  </div>
  <p>Der Ort des Badges ist fast gleich. Geändert wird nur die <strong>Sichtbarkeitsebene</strong>.</p>
</div>

## Position ist nicht Ebene

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Auf die Fläche setzen ist etwas anderes als davor liegen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Positionieren</strong>
      <span>Hier bestimmst du, wo ein Element steht, zum Beispiel oben rechts in einer Karte.</span>
    </div>
    <div class="compare-item">
      <strong>Ebenen steuern</strong>
      <span>Hier bestimmst du, welches Element bei einer Überlagerung sichtbar vorne bleibt.</span>
    </div>
  </div>
</div>

```css
.badge {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}
```

## Wann z-index überhaupt wichtig wird

z-index wird erst relevant, wenn

- Elemente sich überlagern,
- ihre Position bewusst gelöst ist,
- und sichtbar entschieden werden muss, wer oben liegt.

Für normale Textabsätze oder Karten untereinander bringt z-index oft gar nichts.

## Eine ruhige Prüfstrategie

1. Überlagern sich die Elemente wirklich?
2. Ist die Position schon klar?
3. Geht es jetzt nur noch darum, wer vorne sichtbar liegt?
4. Erst dann ist <code>z-index</code> die richtige Stellschraube.

<div class="note-panel">
  <p><strong>Merke:</strong> Erst an Überlagerung denken, dann an Ebene. Wer sofort mit großen z-index-Zahlen arbeitet, überspringt oft die eigentliche Layoutfrage.</p>
</div>
