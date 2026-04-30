---
title: "Aggregation und Komposition unterscheiden"
description: "Verstehe, wie Objekte miteinander verbunden sein koennen und wann Teile eher lose oder eng an ein Ganzes gebunden sind."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "aggregation-und-komposition-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Objekte stehen in OOP nicht nur fuer sich allein. Sie koennen andere Objekte nutzen, enthalten oder verwalten. Die wichtigste Denkfrage lautet dabei:

**Wie eng ist ein Teil an das Ganze gebunden?**

Genau daraus ergibt sich oft schon die ruhige Trennung zwischen Aggregation und Komposition.

<div class="compare-card">
  <p class="card-kicker">Kernvergleich</p>
  <h3>Lose Verbindung oder enges Ganzes?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Aggregation</strong>
      <span>Der Teil ist mit dem Ganzen verbunden, kann aber oft auch ohne dieses Ganze noch sinnvoll existieren.</span>
    </div>
    <div class="compare-item">
      <strong>Komposition</strong>
      <span>Der Teil ist staerker an das Ganze gebunden und wird oft als fester Bestandteil dieses Ganzen gedacht.</span>
    </div>
  </div>
</div>

## Leitbeispiel

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Kurs und Teilnehmer im Vergleich zu Haus und Zimmer</h3>
  <p>Teilnehmer koennen einen Kurs verlassen und trotzdem weiter als Personen existieren. Das wirkt eher wie Aggregation. Zimmer sind dagegen als Teile eines Hauses enger an dieses Ganze gebunden. Das wirkt naeher an Komposition.</p>
</div>

## Die ruhigste Leitfrage

Nicht zuerst auf den Namen schauen, sondern auf diese Prueffrage:

**Kann der Teil auch ohne das Ganze sinnvoll weitergedacht werden?**

Diese Frage bringt oft mehr Klarheit als bloesse Diagrammsymbole.

## Mini-Demo: Beziehungen als Denkbild

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Lebensdauer und Bindung helfen beim Lesen</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <strong>Aggregation</strong>
      <p style="margin:0.55rem 0 0;">Eine Bibliothek hat Leser. Leser bleiben auch dann Leser Personen, wenn sie nicht mehr zu genau dieser Bibliothek gehoeren.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <strong>Komposition</strong>
      <p style="margin:0.55rem 0 0;">Ein Haus besteht aus Zimmern. Die Zimmer werden enger als Bestandteile genau dieses Hauses gedacht.</p>
    </div>
  </div>
</div>

Hier geht es um **hat ein** Beziehungen und nicht um **ist ein** Beziehungen. Sobald du ueber Oberklasse und Unterklasse nachdenkst, bist du im Bereich der Vererbung und nicht mehr bei Aggregation oder Komposition.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Ganzes und Teil benennen</strong>
    <span>Welches Objekt enthaelt oder verwaltet welches andere?</span>
  </div>
  <div class="step-item">
    <strong>2. Lebensdauer fragen</strong>
    <span>Kann der Teil auch ohne das Ganze noch sinnvoll existieren?</span>
  </div>
  <div class="step-item">
    <strong>3. Bindungsstaerke deuten</strong>
    <span>Ist die Beziehung eher locker oder eng eingebettet?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Aggregation und Komposition werden ruhiger, wenn du statt auf Besitzwoerter zuerst auf Bindungsstaerke und Lebensdauer schaust.</p>
</div>
