---
title: "Objekt Slicing in Vererbung ruhig erkennen"
description: "Verstehe, warum beim Kopieren einer Unterklasse in einen Basisklassenwert Spezialisierungen verloren gehen koennen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "objekt-slicing-in-vererbung-ruhig-erkennen"]
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

Wenn ein Objekt einer Unterklasse in einen **Basisklassenwert** kopiert wird, bleibt im Ziel nicht automatisch die ganze Spezialisierung erhalten. Es bleibt oft nur der Basisklassenteil uebrig.

Genau dieses Abschneiden der Spezialisierung nennt man oft Objekt Slicing.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Fahrzeug und Auto</h3>
  <p>Ein <code>Auto</code> ist auch ein <code>Fahrzeug</code>. Wenn ein <code>Auto</code> aber per Wert in eine Variable vom Typ <code>Fahrzeug</code> kopiert wird, landet dort nur noch der Fahrzeug Teil als eigener Wert. Spezifische Auto Teile werden nicht mit derselben Vollstaendigkeit weitergefuehrt.</p>
</div>

## Der ruhige Kern

Die wichtigste Frage lautet hier nicht zuerst, ob Vererbung vorliegt, sondern:

**Wird kopiert oder nur auf dasselbe konkrete Objekt verwiesen?**

Denn genau diese Unterscheidung entscheidet oft schon ueber Slicing oder kein Slicing.

<div class="compare-card">
  <p class="card-kicker">Kernvergleich</p>
  <h3>Wertkopie oder Bezug auf dasselbe Objekt</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Basisklassenwert</strong>
      <span>Hier entsteht eine eigene Kopie auf Basisklassenebene. Unterklassenteile koennen abgeschnitten werden.</span>
    </div>
    <div class="compare-item">
      <strong>Referenz oder Zeiger</strong>
      <span>Hier bleibt der Bezug auf das konkrete Objekt erhalten. Dadurch wird nichts als neuer Basisklassenwert abgeschnitten.</span>
    </div>
  </div>
</div>

## Mini-Demo: Abschneiden entsteht durch den Zieltyp als Wert

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Die Spezialisierung passt nicht voll in den kleineren Wertbehaelter</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Unterklassenobjekt</strong><span>enthaelt Basis und Spezialisierung</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Basisklassenwert</strong><span>nimmt nur den Basisteil als eigenen Wert auf</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Slicing</strong><span>Unterklassenspezifika sind im Zielwert nicht mehr voll da</span></div>
  </div>
</div>

## Diese Seite behandelt bewusst Wertkopie und nicht nur polymorphes Verhalten

Bei `virtual` und dynamischem Binden bleibt oft der Bezug auf das konkrete Objekt erhalten. Hier geht es um die andere Gefahr:

**Durch eine Wertkopie auf Basisklassenebene wird aus dem Objekt selbst schon etwas anderes.**

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Zieltyp lesen</strong>
    <span>Ist das Ziel ein Basisklassenwert oder nur eine Referenz?</span>
  </div>
  <div class="step-item">
    <strong>2. Kopie fragen</strong>
    <span>Entsteht ein neuer eigener Wert?</span>
  </div>
  <div class="step-item">
    <strong>3. Spezialisierung mitdenken</strong>
    <span>Welche Unterklassenteile koennen im Ziel verlorengehen?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Objekt Slicing ist keine magische Laufzeitpanne, sondern oft die direkte Folge einer Wertkopie in einen Basisklassenbehaelter.</p>
</div>
