---
title: Position Sticky verstehen
description: Verstehe, wie sticky Elemente im normalen Fluss bleiben und trotzdem an einer Kante haften, sobald der Scrollbereich sie erreicht.
subject: web-development
section: CSS
topicPath:
  - css
  - responsive-layouts
  - position-sticky-verstehen
learningGoals:
  - Du erklärst die Grundidee von position sticky.
  - Du unterscheidest sticky von static, fixed und absolute.
  - Du beschreibst Sticky-Verhalten eher über Scrollkontext und Haftkante als über bloßes Festkleben.
practiceIdeas:
  - Vergleiche eine normale Überschrift mit einer sticky Bereichsüberschrift.
  - Suche bei einem sticky Element immer zuerst den Scrollbereich und die Haftkante.
  - Prüfe, ob Sticky wirklich Teil des Inhaltsflusses bleibt.
commonMistakes:
  - sticky mit fixed gleichzusetzen.
  - nur auf top zu schauen und den Scrollkontext zu vergessen.
  - zu erwarten, dass sticky ohne sinnvolle Scrollstrecke sichtbar wird.
keyTakeaways:
  - sticky bleibt zunächst im normalen Fluss.
  - Erst beim Scrollen haftet das Element an einer definierten Kante.
  - Sticky eignet sich besonders für Orientierung innerhalb eines Inhaltsbereichs.
recognizeSignals:
  - Es geht um Inhaltslisten, Kapitelüberschriften oder Filterleisten, die beim Scrollen sichtbar bleiben sollen.
  - Du sollst erklären, warum etwas erst mitscrollt und dann „haftet“.
  - In Beispielen zählt der Scrollkontext stärker als Farbe oder Balkenoptik.
selfCheckPoints:
  - Kann ich sticky und fixed sauber unterscheiden?
  - Kann ich erklären, wann ein sticky Element zu haften beginnt?
  - Kann ich den Scrollbereich nennen, in dem Sticky wirkt?
tags:
  - css
  - sticky
  - scroll
  - position
level: mittel
draft: false
---

## Grundidee

`position: sticky` ist spannend, weil das Element **nicht sofort fest** auf dem Bildschirm sitzt. Es bleibt zuerst Teil des normalen Layouts und beginnt erst dann an einer Kante zu haften, wenn der Scrollbereich es dorthin schiebt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Kapitelüberschrift in einer langen Lernseite</h3>
  <p>Beim Lesen soll die aktuelle Kapitelüberschrift kurz sichtbar bleiben, damit man nicht vergisst, in welchem Abschnitt man sich befindet. Sie soll aber nicht dauerhaft wie eine globale Leiste wirken. Genau dafür ist <code>sticky</code> oft passender als <code>fixed</code>.</p>
</div>

## Sticky liest man am besten über drei Fragen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Wo ist der Scrollbereich?</strong>
    <span>Sticky wirkt immer innerhalb eines Bereichs, in dem tatsächlich gescrollt wird.</span>
  </div>
  <div class="visual-item">
    <strong>Welche Kante zählt?</strong>
    <span>Mit <code>top</code> oder einer anderen Kante wird festgelegt, wo das Element haften soll.</span>
  </div>
  <div class="visual-item">
    <strong>Bleibt das Element Teil des Inhalts?</strong>
    <span>Ja. Genau das unterscheidet Sticky von einem dauerhaft losgelösten Overlay.</span>
  </div>
</div>

## Mini-Demo: mitscrollen oder haften?

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Beide Überschriften sehen ähnlich aus – ihr Scrollverhalten nicht</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Normale Bereichsüberschrift</strong></p>
      <div style="height:12rem; overflow:auto; border:1px solid #e2e8f0; border-radius:12px; background:white;">
        <div style="padding:0.7rem 0.9rem; background:#dbeafe; font-weight:700;">Kapitel 2</div>
        <div style="padding:0.9rem; display:grid; gap:0.55rem;">
          <div style="height:2.25rem; border-radius:10px; background:#eef2ff;"></div>
          <div style="height:2.25rem; border-radius:10px; background:#eef2ff;"></div>
          <div style="height:2.25rem; border-radius:10px; background:#eef2ff;"></div>
          <div style="height:2.25rem; border-radius:10px; background:#eef2ff;"></div>
        </div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Überschrift verschwindet mit dem restlichen Inhalt aus dem Sichtbereich.</p>
    </div>
    <div style="padding:0.9rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Sticky Bereichsüberschrift</strong></p>
      <div style="height:12rem; overflow:auto; border:1px solid #e2e8f0; border-radius:12px; background:white;">
        <div style="position:sticky; top:0; z-index:1; padding:0.7rem 0.9rem; background:#fde68a; font-weight:700; border-bottom:1px solid #e2e8f0;">Kapitel 2</div>
        <div style="padding:0.9rem; display:grid; gap:0.55rem;">
          <div style="height:2.25rem; border-radius:10px; background:#fef3c7;"></div>
          <div style="height:2.25rem; border-radius:10px; background:#fef3c7;"></div>
          <div style="height:2.25rem; border-radius:10px; background:#fef3c7;"></div>
          <div style="height:2.25rem; border-radius:10px; background:#fef3c7;"></div>
        </div>
      </div>
      <p style="margin:0.55rem 0 0;">Die Überschrift scrollt zunächst normal und haftet dann oben im eigenen Bereich.</p>
    </div>
  </div>
</div>

## Sticky ist vor allem eine Scroll-Logik

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Bereichsbezogen haften ist etwas anderes als global festbleiben</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>sticky</strong>
      <span>Das Element gehört weiter zum Inhaltsbereich und haftet nur innerhalb seines Scrollkontexts.</span>
    </div>
    <div class="compare-item">
      <strong>fixed</strong>
      <span>Das Element löst sich vom normalen Fluss und bleibt global am Viewport hängen.</span>
    </div>
  </div>
</div>

```css
.kapitelkopf {
  position: sticky;
  top: 0;
}
```

## Abgrenzung zu den Nachbarseiten

Diese Seite klärt die **Scroll- und Haftlogik**.  
Sie erklärt bewusst nicht ausführlich,

- wie ein Element in einer Ecke verankert wird (`relative`/`absolute`),
- oder wie bei Überlagerung die sichtbare Ebene entschieden wird (`z-index`).

So bleibt Sticky als eigenes Denkmodell klar lesbar.

## Eine ruhige Prüfstrategie

1. In welchem Bereich wird gescrollt?
2. Welche Kante soll haften?
3. Soll das Element weiter Teil des Inhalts bleiben?
4. Erst danach an z-index oder Feinschliff denken.

<div class="note-panel">
  <p><strong>Merke:</strong> Sticky ist am verständlichsten als <strong>bereichsbezogene Orientierung beim Scrollen</strong> – nicht als globale Fixierung.</p>
</div>
