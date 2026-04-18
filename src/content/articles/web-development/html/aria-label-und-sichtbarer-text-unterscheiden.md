---
title: ARIA-Label und sichtbaren Text unterscheiden
description: Verstehe, warum ein sichtbarer Text und ein ARIA-Label nicht dieselbe Rolle haben und warum gute Bedienbarkeit meist mit klar erkennbarem Inhalt beginnt.
subject: web-development
section: HTML
topicPath:
  - html
  - linktexte-und-links
  - aria-label-und-sichtbarer-text-unterscheiden
learningGoals:
  - Du erklärst den Unterschied zwischen sichtbarem Text und ARIA-Label.
  - Du beschreibst, warum sichtbarer Inhalt oft die erste und ruhigere Lösung ist.
  - Du liest Beschriftung eher als Orientierung für Menschen und Hilfstechnologien zusammen.
practiceIdeas:
  - Vergleiche einen Icon-Button mit und ohne klar erkennbare Beschriftung.
  - Prüfe, wann ein sichtbarer Text schon ausreicht und wann eine zusätzliche Benennung nötig wird.
  - Lies Beschriftung nicht nur aus Designsicht, sondern auch aus Bedien- und Verständnissicht.
commonMistakes:
  - ARIA als Ersatz für fehlende klare sichtbare Inhalte zu behandeln.
  - zu denken, dass ein Symbol immer schon selbsterklärend genug ist.
  - sichtbare Beschriftung und technische Benennung nicht zusammen zu denken.
keyTakeaways:
  - Sichtbarer Text hilft direkt beim Verstehen.
  - ARIA-Labels unterstützen vor allem die technische Benennung von Elementen.
  - Gute Oberflächen versuchen zuerst verständliche sichtbare Beschriftung.
recognizeSignals:
  - Es geht um Icon-Buttons, unklare Schaltflächen oder knappe Oberflächen.
  - Du sollst erklären, wie ein Element benannt oder verstanden wird.
  - In Beispielen ist die Verständlichkeit wichtiger als die reine Platzersparnis.
selfCheckPoints:
  - Kann ich sichtbaren Text und ARIA-Label trennen?
  - Kann ich begründen, warum sichtbare Beschriftung oft die ruhigere Lösung ist?
  - Kann ich einen unklar benannten Button kritisch lesen?
tags:
  - html
  - aria-label
  - accessibility
  - buttons
level: mittel
draft: false
---

## Grundidee

Ein sichtbarer Text erklärt direkt, was ein Element tut. Ein `aria-label` hilft vor allem dabei, ein Element technisch sinnvoll zu benennen. Beides kann zusammenwirken, aber es ist nicht dieselbe Rolle.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Papierkorb-Icon ohne Text</h3>
  <p>Für manche Menschen ist das Symbol klar, für andere nicht. Ein sichtbarer Text wie „Löschen“ schafft sofort Verständlichkeit. Ein zusätzliches technisches Label kann helfen, ersetzt aber nicht automatisch eine insgesamt gute Oberfläche.</p>
</div>

## Sichtbare Beschriftung und technische Benennung

<div class="compare-card">
  <p class="card-kicker">Rollen trennen</p>
  <h3>Beides unterstützt Orientierung, aber auf unterschiedliche Weise</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sichtbarer Text</strong>
      <span>Ist direkt für alle auf der Oberfläche erkennbar und erklärt die Aufgabe sofort.</span>
    </div>
    <div class="compare-item">
      <strong>ARIA-Label</strong>
      <span>Hilft bei der technischen Benennung eines Elements, besonders wenn sichtbarer Text fehlt oder ergänzt werden muss.</span>
    </div>
  </div>
</div>

## Mini-Demo: derselbe Button, andere Klarheit

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Verständlichkeit beginnt oft sichtbar</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Nur Symbol</strong></p>
      <button style="padding:0.7rem 0.85rem; border-radius:999px; border:1px solid #94a3b8; background:white;">🗑</button>
      <p style="margin:0.6rem 0 0;">Das kann funktionieren, muss aber nicht für alle sofort klar sein.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Mit sichtbarer Beschriftung</strong></p>
      <button style="padding:0.7rem 0.85rem; border-radius:999px; border:1px solid #94a3b8; background:white;">🗑 Löschen</button>
      <p style="margin:0.6rem 0 0;">Die Handlung ist sofort verständlicher und muss weniger erraten werden.</p>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Versteht man die Aufgabe des Elements schon sichtbar?
2. Fehlt Text nur aus Platzgründen oder auch im Verständnis?
3. Reicht ein klarer sichtbarer Text schon aus?
4. Braucht das Element zusätzlich eine technische Benennung?

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Benennung beginnt oft mit klar erkennbarem sichtbarem Inhalt. ARIA-Labels sind eine Ergänzung für technische Verständlichkeit, nicht automatisch die erste Designlösung.</p>
</div>
