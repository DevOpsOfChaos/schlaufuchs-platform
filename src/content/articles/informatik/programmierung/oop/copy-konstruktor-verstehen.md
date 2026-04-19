---
title: Kopier-Konstruktor verstehen
description: Verstehe, warum Objekte beim Kopieren eigene spezielle Startlogik brauchen koennen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - kopier-konstruktor-verstehen
learningGoals:
  - Du erklaerst die Rolle eines Kopier-Konstruktors beim Erzeugen eines neuen Objekts aus einem vorhandenen Objekt.
  - Du unterscheidest normales Zuweisen, Erzeugen und Kopieren sauber.
  - Du erkennst, warum Kopieren mehr sein kann als nur Werte "irgendwie uebernehmen".
practiceIdeas:
  - Markiere in einer Klassendefinition den Kopier-Konstruktor.
  - Vergleiche Objektanlage mit Parametern und Objektanlage durch Kopie.
  - Beschreibe, wann ein neues Objekt aus einem bestehenden Objekt entsteht.
commonMistakes:
  - Den Kopier-Konstruktor mit dem Zuweisungsoperator gleichzusetzen.
  - Zu denken, dass beim Kopieren gar kein neues Objekt entsteht.
  - Kopieren nur als formalen Sonderfall statt als eigenen Start eines Objekts zu lesen.
keyTakeaways:
  - Ein Kopier-Konstruktor erzeugt ein neues Objekt auf Basis eines vorhandenen Objekts.
  - Kopieren ist nicht dasselbe wie spaeteres Zuweisen an ein schon existierendes Objekt.
  - Gerade bei verwalteten Ressourcen muss Kopieren bewusst gedacht werden.
recognizeSignals:
  - In der Klasse taucht ein Konstruktor mit einem Objekt derselben Klasse als Parameter auf.
  - Eine Aufgabe zeigt Initialisierung aus einem vorhandenen Objekt.
  - Es geht darum, ob beim Kopieren ein neues Objekt oder nur ein neuer Name entsteht.
selfCheckPoints:
  - Kann ich sagen, wann ein Kopier-Konstruktor beteiligt ist?
  - Kann ich Kopieren und Zuweisen sauber trennen?
  - Kann ich erklaeren, warum Kopieren fachlich ein neuer Objektstart ist?
level: einfach
tags:
  - informatik
  - programmierung
  - oop
  - konstruktor
  - kopieren
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
