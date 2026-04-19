---
title: Methoden ueberschreiben und ueberladen unterscheiden
description: Verstehe, wann gleiche Namen verschiedene Signaturen haben und wann dieselbe Signatur Verhalten einer Oberklasse ersetzt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - methoden-ueberschreiben-und-ueberladen-unterscheiden
learningGoals:
  - Du unterscheidest Ueberladen und Ueberschreiben fachlich sauber.
  - Du erklaerst, was eine identische Signatur beim Ueberschreiben bedeutet.
  - Du liest Methodenfamilien in Vererbung ruhiger.
practiceIdeas:
  - Vergleiche zwei Methoden mit gleichem Namen und unterschiedlichen Parametern.
  - Pruefe, ob in der Unterklasse exakt dieselbe Signatur erneut auftaucht.
  - Begruende, welche Methoden fuer ein Objekt der Unterklasse direkt sichtbar sind.
commonMistakes:
  - Gleichen Namen sofort als Ueberschreiben zu deuten.
  - Signatur und Rueckgabetyp nicht sauber zu trennen.
  - Zu uebersehen, dass beim Ueberschreiben ueberladene Varianten der Basis ueberdeckt werden koennen.
keyTakeaways:
  - Ueberladen nutzt denselben Namen mit verschiedener Signatur.
  - Ueberschreiben nutzt denselben Namen mit identischer Signatur in einer Unterklasse.
  - Beides klingt aehnlich, beschreibt aber zwei andere Situationen.
recognizeSignals:
  - Es tauchen mehrere Methoden mit gleichem Namen auf.
  - Eine Aufgabe erwaehnt Oberklasse und Unterklasse.
  - Die Frage lautet, ob eine Variante ersetzt oder nur zusaetzlich angeboten wird.
selfCheckPoints:
  - Kann ich gleiche Namen und gleiche Signatur auseinanderhalten?
  - Kann ich Ueberladen ohne Vererbung denken?
  - Kann ich Ueberschreiben als Vererbungsfall erkennen?
level: mittel
tags:
  - informatik
  - programmierung
  - oop
  - ueberladen
  - ueberschreiben
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

## Diese Seite behandelt bewusst nur Namens- und Signaturfragen

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
