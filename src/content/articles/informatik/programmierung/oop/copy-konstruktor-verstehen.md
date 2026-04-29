---
title: "Kopier-Konstruktor verstehen"
description: "Verstehe, warum Objekte beim Kopieren eigene spezielle Startlogik brauchen koennen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "copy-konstruktor-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Ein Objekt kann nicht nur "frisch" mit Werten erzeugt werden. Es kann auch **aus einem vorhandenen Objekt** entstehen. Dann geht es nicht um einen normalen Methodenaufruf, sondern um einen besonderen Startfall: den Kopier-Konstruktor.

<div class="example-card">
  <p class="card-kicker">Leitbild</p>
  <h3>Neues Objekt aus altem Objekt</h3>
  <p>Wenn aus <code>kontoA</code> ein neues <code>kontoB</code> gebildet wird, dann sollen oft Daten uebernommen werden. Trotzdem ist <code>kontoB</code> ein eigenes neues Objekt mit eigener Identitaet. Genau dieser Start wird durch den Kopier-Konstruktor beschrieben.</p>
</div>

## Typische Form

```cpp
class Konto {
public:
  Konto(const Konto& anderes) {
    // Daten uebernehmen
  }
};
```

Die Klasse taucht im Parameter wieder auf. Das ist das wichtigste Signal.

## Was dabei fachlich passiert

<div class="signal-flow">
  <div class="flow-node"><strong>Vorhandenes Objekt</strong><span>Ein Objekt besitzt bereits Werte und Zustand.</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Kopier-Start</strong><span>Ein neues Objekt wird aus diesem Zustand heraus erzeugt.</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Eigenes neues Objekt</strong><span>Das Ergebnis ist kein Alias, sondern eine neue Instanz.</span></div>
</div>

## Kopieren und Zuweisen nicht verwechseln

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Neues Objekt entstehen lassen vs. bestehendes Objekt aendern</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Kopier-Konstruktor</strong>
      <span>Es entsteht ein neues Objekt, das beim Start Werte vom alten Objekt uebernimmt.</span>
    </div>
    <div class="compare-item">
      <strong>Zuweisung</strong>
      <span>Ein bereits existierendes Objekt bekommt spaeter neue Werte zugewiesen.</span>
    </div>
  </div>
</div>

## Warum das wichtig ist

Bei einfachen Zahlen wirkt Kopieren harmlos. Bei Objekten mit Dateien, Speicher oder anderen Ressourcen muss Kopieren bewusst gestaltet werden, damit nicht zwei Objekte denselben internen Zustand ungewollt teilen oder doppelt freigeben.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Entsteht ein neues Objekt?</strong>
    <span>Dann bist du eher bei Konstruktorlogik als bei normaler Zuweisung.</span>
  </div>
  <div class="step-item">
    <strong>2. Kommt ein Objekt derselben Klasse vor?</strong>
    <span>Dann lohnt sich der Blick auf einen moeglichen Kopier-Konstruktor.</span>
  </div>
  <div class="step-item">
    <strong>3. Ist das Ergebnis eigenstaendig?</strong>
    <span>Ein neues Objekt bedeutet eigene Identitaet, nicht nur ein zweiter Name.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Der Kopier-Konstruktor beschreibt keinen spaeteren Umbau eines Objekts, sondern einen besonderen Start eines neuen Objekts.</p>
</div>
