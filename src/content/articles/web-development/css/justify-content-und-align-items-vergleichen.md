---
title: Justify-Content und Align-Items vergleichen
description: Verstehe den sichtbaren Unterschied zwischen Verteilung auf der Hauptachse und Ausrichtung auf der Querachse.
subject: web-development
section: CSS
topicPath:
  - css
  - flexbox
  - justify-content-und-align-items-vergleichen
learningGoals:
  - Du unterscheidest <code>justify-content</code> und <code>align-items</code> sicher.
  - Du beschreibst Änderungen über Achsen statt über bloße Eigenschaftsnamen.
  - Du erklärst sichtbare Layoutunterschiede an kleinen Flexbox-Beispielen.
practiceIdeas:
  - Vergleiche zwei Flex-Layouts mit gleichem HTML, aber unterschiedlichem Containerwert.
  - Prüfe bei einer Leiste zuerst Hauptachse und Querachse.
  - Beschreibe sichtbar, was sich verändert und was gleich bleibt.
commonMistakes:
  - Beide Eigenschaften für dieselbe Richtung zu halten.
  - Nur Eigenschaftsnamen auswendig zu lernen, ohne sichtbaren Effekt zu verstehen.
  - Die Achsrichtung nicht mitzudenken.
keyTakeaways:
  - <code>justify-content</code> arbeitet auf der Hauptachse.
  - <code>align-items</code> arbeitet auf der Querachse.
  - Dieselben Elemente können ganz anders wirken, obwohl nur der Containerwert geändert wird.
recognizeSignals:
  - Es geht um Flexbox, Ausrichtung, Verteilung oder unterschiedliche Positionen im selben Container.
  - Du sollst CSS-Effekte sichtbar beschreiben statt nur Begriffe wiederholen.
  - In Aufgaben wird nach dem Unterschied zwischen zwei fast gleichen Layouts gefragt.
selfCheckPoints:
  - Kann ich beide Eigenschaften einer Achse zuordnen?
  - Kann ich die sichtbare Änderung benennen?
  - Kann ich erklären, warum dieselben Elemente unterschiedlich wirken?
tags:
  - css
  - flexbox
  - justify-content
  - align-items
level: einfach
draft: false
---

## Grundidee

Bei Flexbox wirken <code>justify-content</code> und <code>align-items</code> oft ähnlich, weil beide „irgendetwas mit Ausrichtung“ machen. Der entscheidende Unterschied liegt aber in der **Achse**, auf der sie arbeiten.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Karten in einer Leiste</h3>
  <p>Die Karten können entweder dicht am Anfang sitzen, mit großem Abstand verteilt sein oder in der Höhe mittig stehen. Sichtbar ähnlich unruhig wird es erst dann, wenn nicht klar ist, auf welcher Achse die Änderung stattfindet.</p>
</div>

## Der Kernunterschied

<div class="compare-card">
  <p class="card-kicker">Achsenvergleich</p>
  <h3>Verteilen ist nicht dasselbe wie quer ausrichten</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>justify-content</code></strong>
      <span>Verteilt Elemente entlang der Hauptachse.</span>
    </div>
    <div class="compare-item">
      <strong><code>align-items</code></strong>
      <span>Richtet Elemente auf der Querachse aus.</span>
    </div>
  </div>
</div>

## Mini-Demo: gleicher Inhalt, zwei unterschiedliche Fragen

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Was sich tatsächlich verändert</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong><code>justify-content: space-between</code></strong></p>
      <div style="display:flex; justify-content:space-between; align-items:flex-start; min-height:5rem; padding:0.7rem; border-radius:12px; background:white;">
        <span style="padding:0.45rem 0.7rem; background:#dbeafe; border-radius:10px;">A</span>
        <span style="padding:0.8rem 0.7rem; background:#dcfce7; border-radius:10px;">B</span>
        <span style="padding:1rem 0.7rem; background:#fde68a; border-radius:10px;">C</span>
      </div>
      <p style="margin:0.55rem 0 0;">Die Karten werden über die Breite verteilt.</p>
    </div>
    <div style="padding:0.8rem; border:1px dashed #94a3b8; border-radius:16px; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong><code>align-items: center</code></strong></p>
      <div style="display:flex; justify-content:flex-start; align-items:center; gap:0.55rem; min-height:5rem; padding:0.7rem; border-radius:12px; background:white;">
        <span style="padding:0.45rem 0.7rem; background:#dbeafe; border-radius:10px;">A</span>
        <span style="padding:0.8rem 0.7rem; background:#dcfce7; border-radius:10px;">B</span>
        <span style="padding:1rem 0.7rem; background:#fde68a; border-radius:10px;">C</span>
      </div>
      <p style="margin:0.55rem 0 0;">Die Karten bleiben links, sitzen aber quer mittiger.</p>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Wie verläuft die Hauptachse?
2. Wird der freie Platz entlang dieser Achse verteilt?
3. Oder geht es darum, wo die Elemente quer dazu sitzen?
4. Was bleibt trotz der Änderung gleich?

<div class="note-panel">
  <p><strong>Merke:</strong> Bei Flexbox nicht nur Eigenschaftsnamen merken. Immer fragen: Geht es gerade um die Hauptachse oder um die Querachse?</p>
</div>
