---
title: "Methoden ueberschreiben und ueberladen unterscheiden"
description: "Verstehe, wann gleiche Namen verschiedene Signaturen haben und wann dieselbe Signatur Verhalten einer Oberklasse ersetzt."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "methoden-ueberschreiben-und-ueberladen-unterscheiden"]
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

Die beiden Begriffe klingen fast gleich, aber die Denkfragen dahinter sind verschieden.

- **Ueberladen** fragt, ob es mehrere passende Varianten mit demselben Namen gibt.
- **Ueberschreiben** fragt, ob eine Unterklasse geerbtes Verhalten ersetzt.

<div class="compare-card">
  <p class="card-kicker">Kernvergleich</p>
  <h3>Varianten anbieten oder Verhalten ersetzen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ueberladen</strong>
      <span>Gleicher Methodenname, aber unterschiedliche Signaturen.</span>
    </div>
    <div class="compare-item">
      <strong>Ueberschreiben</strong>
      <span>Gleicher Methodenname und identische Signatur in der Unterklasse.</span>
    </div>
  </div>
</div>

## Leitbeispiel

Eine Klasse `A` kann `fkt()` und `fkt(int)` besitzen. Das ist Ueberladen.  
Wenn eine Unterklasse `B` ebenfalls `fkt()` mit derselben Signatur definiert, dann ueberschreibt `B` die geerbte Variante `A::fkt()`.

## Die ruhigste Prueffrage

**Aendert sich nur die Parameterliste oder taucht dieselbe Methode in einer Unterklasse noch einmal auf?**

Diese Frage fuehrt meist schneller zur richtigen Einordnung als nur auf den Namen zu schauen.

## Warum das leicht verwechselt wird

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Auf Signatur und Klassenebene achten</h3>
    <p>Du pruefst erst die Parameter und dann, ob Vererbung beteiligt ist.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur am Namen haengen bleiben</h3>
    <p>Dann wirkt fast jeder gleiche Methodenname sofort wie Ueberschreiben.</p>
  </section>
</div>

Sobald danach noch die Frage dazukommt, **wann** die passende Methode wirklich ausgewaehlt wird, bist du schon beim naechsten Thema mit `virtual` und Binden.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Namen vergleichen</strong>
    <span>Sind die Methodennamen gleich?</span>
  </div>
  <div class="step-item">
    <strong>2. Signaturen vergleichen</strong>
    <span>Unterscheiden sich Parameterzahl oder Parametertypen?</span>
  </div>
  <div class="step-item">
    <strong>3. Vererbung pruefen</strong>
    <span>Liegt die neue Methode in einer Unterklasse?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ueberladen organisiert Auswahl zwischen Varianten. Ueberschreiben organisiert Verhalten entlang einer Vererbung.</p>
</div>
