---
title: Verdeckte Basismethoden mit Bereichsoperator aufrufen
description: Verstehe, wie ueberschriebene oder verdeckte Methoden der Oberklasse gezielt angesprochen werden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - verdeckte-basismethoden-mit-bereichsoperator-aufrufen
learningGoals:
  - Du erklaerst, warum Basismethoden in Unterklassen verdeckt sein koennen.
  - Du liest Aufrufe mit <code>A::methode()</code> gezielt als Zugriff auf die Oberklasse.
  - Du unterscheidest normales Ueberschreiben von bewusstem Rueckgriff auf die Basismethode.
practiceIdeas:
  - Suche in einem Codebeispiel alle verdeckten Methoden.
  - Erklaere, warum der Bereichsoperator an einer bestimmten Stelle noetig ist.
  - Vergleiche direkten Methodenaufruf und expliziten Basisklassenaufruf.
commonMistakes:
  - Zu denken, dass verdeckte Basismethoden verschwunden sind.
  - Den Bereichsoperator nur als Syntaxdetail statt als Navigationshilfe zu lesen.
  - Ueberladen und Verdecken durcheinanderzubringen.
keyTakeaways:
  - Basismethoden koennen in Unterklassen verdeckt werden.
  - Mit <code>Klassenname::methode()</code> kannst du gezielt auf die Oberklasse verweisen.
  - Das ist besonders hilfreich, wenn eine Unterklasse eigene und geerbte Varianten unterscheiden soll.
recognizeSignals:
  - In einer Unterklasse existiert eine Methode mit gleichem Namen wie in der Oberklasse.
  - Im Aufruf taucht der Bereichsoperator auf.
  - Es geht darum, warum eine bestimmte Basismethode nicht direkt sichtbar ist.
selfCheckPoints:
  - Kann ich sagen, welche Methode gerade verdeckt ist?
  - Kann ich den Bereichsoperator als bewussten Rueckgriff auf die Oberklasse erklaeren?
  - Kann ich Ueberschreiben, Ueberladen und Verdecken sauber trennen?
level: mittel
tags:
  - informatik
  - programmierung
  - oop
  - vererbung
  - bereichsoperator
draft: false
---

## Grundidee

Wenn eine Unterklasse eine Methode mit demselben Namen bereitstellt, kann dadurch der Blick auf Basismethoden enger werden. Dann hilft der Bereichsoperator, um gezielt zu sagen: **Ich will jetzt genau die Version aus dieser Klasse.**

```cpp
objekt.A::fkt();
```

## Warum das gebraucht wird

In Vererbungshierarchien gibt es nicht nur eine Methode pro Name. Es kann sein, dass eine Unterklasse eine Basismethode ueberschreibt oder dabei zugleich weitere ueberladene Varianten der Oberklasse verdeckt.

## Bereichsoperator als Wegweiser

<div class="example-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Bewusst zur Oberklasse zurueckschauen</h3>
  <p>Der Bereichsoperator ist hier wie ein ausdruecklicher Wegweiser im Code: Nicht die naechstliegende Methode der Unterklasse ist gemeint, sondern die Version aus einer bestimmten Oberklasse.</p>
</div>

## Vergleich

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Normaler Aufruf oder qualifizierter Aufruf</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>objekt.fkt()</strong>
      <span>Nimmt die normale Sicht der aktuellen Klasse und ihrer Regeln.</span>
    </div>
    <div class="compare-item">
      <strong>objekt.A::fkt()</strong>
      <span>Greift bewusst auf die Methode aus Klasse A zu.</span>
    </div>
  </div>
</div>

## Leitbeispiel

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Unterklasse mit eigener und geerbter Sicht</h3>
  <p>Eine Unterklasse kann eine eigene Variante von <code>anzeigen()</code> besitzen. Wenn du trotzdem gezielt die geerbte Sicht der Basisklasse brauchst, macht der Bereichsoperator diese Rueckkehr explizit sichtbar.</p>
</div>

## Diese Seite behandelt bewusst den Rueckgriff auf die Basis

Hier geht es nicht um die allgemeine Frage, ob ueberschrieben oder ueberladen wurde, sondern um den bewussten Zugriff auf eine **bestimmte Klassenebene**.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Gleiche Namen suchen</strong>
    <span>Gibt es in Ober- und Unterklasse denselben Methodennamen?</span>
  </div>
  <div class="step-item">
    <strong>2. Verdeckte Varianten mitdenken</strong>
    <span>Frage, ob durch den neuen Namen auch andere Varianten aus der Basis weniger sichtbar werden.</span>
  </div>
  <div class="step-item">
    <strong>3. Bereichsoperator lesen</strong>
    <span>Er ist die bewusste Rueckkehr zu einer bestimmten Klassenebene.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Der Bereichsoperator ist hier kein reines Syntaxdetail, sondern ein Wegweiser zur gewollten Basismethode.</p>
</div>
