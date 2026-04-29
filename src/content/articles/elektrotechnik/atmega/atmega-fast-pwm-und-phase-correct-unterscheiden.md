---
title: "ATmega – Fast PWM und Phase Correct PWM unterscheiden"
description: "Verstehe, warum der AVR unterschiedliche PWM-Betriebsarten kennt und wie sich Zählverlauf, Symmetrie und Periodendauer unterscheiden."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-fast-pwm-und-phase-correct-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "mikrocontroller-und-atmega"]
draft: false
---
## Grundidee

PWM ist nicht nur „ein Tastgrad auf einem Pin“. Am AVR bestimmt auch die **Betriebsart des Timers**, wie dieses Signal zeitlich entsteht. Besonders wichtig ist der Unterschied zwischen **Fast PWM** und **Phase Correct PWM**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Gleicher Tastgrad, aber anderes Zeitbild</h3>
  <p>Zwei PWM-Signale sollen beide ungefähr 50&nbsp;Prozent Tastgrad erzeugen. Trotzdem verhalten sie sich zeitlich nicht identisch. Der Grund liegt nicht im Ausgangspin selbst, sondern in der Art, wie der Timer zählt und wann er seine Richtung oder den Neustart vollzieht.</p>
</div>

## Die Grundidee beider Modi

<div class="visual-grid">
  <div class="visual-item">
    <strong>Fast PWM</strong>
    <span>Der Timer zählt in eine Richtung bis zum oberen Wert und springt dann wieder zurück.</span>
  </div>
  <div class="visual-item">
    <strong>Phase Correct PWM</strong>
    <span>Der Timer zählt auf und wieder ab. Dadurch wird das Zeitbild symmetrischer.</span>
  </div>
</div>

## Das ruhige Zeitbild

<div class="figure-card">
  <p class="card-kicker">Zeitlogik</p>
  <h3>Der Timerverlauf formt das PWM-Signal</h3>
  <div class="comparison-grid">
    <section>
      <p class="card-kicker">Fast PWM</p>
      <h3>Aufzählen und neu starten</h3>
      <pre><code>0 → 1 → 2 → ... → TOP
↺ zurück zu 0</code></pre>
    </section>
    <section>
      <p class="card-kicker">Phase Correct PWM</p>
      <h3>Aufzählen und wieder abwärts</h3>
      <pre><code>0 → 1 → 2 → ... → TOP
TOP → ... → 2 → 1 → 0</code></pre>
    </section>
  </div>
</div>

## Warum das mehr ist als ein anderer Modusname

Bei **Fast PWM** wird die Periode meist kürzer und direkter aus dem Aufwärtszählen gebildet. Bei **Phase Correct PWM** wird die Zählzeit auf Auf- und Abwärtsweg verteilt. Dadurch entsteht ein ruhigeres, symmetrischeres Zeitbild um die Mitte der Periode.

<div class="compare-card">
  <p class="card-kicker">Didaktisch wichtig</p>
  <h3>Tastgrad gleich heißt nicht automatisch Zeitbild gleich</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Fast PWM</strong>
      <span>Gut lesbar als schneller, direkter Modus mit Neustart am Periodenende.</span>
    </div>
    <div class="compare-item">
      <strong>Phase Correct PWM</strong>
      <span>Gut lesbar als symmetrischer Modus mit Auf- und Abwärtszählen.</span>
    </div>
  </div>
</div>

## Mini-Demo: derselbe PWM-Wunsch, zwei technische Wege

```text
Wunsch: ungefähr 50 % Tastgrad

Fast PWM:
Timer läuft nur aufwärts → kürzeres, direkteres Zeitbild

Phase Correct PWM:
Timer läuft aufwärts und abwärts → symmetrischeres Zeitbild
```

## Drei typische Denkfehler

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Fehler 1</p>
    <h3>„Beides ist doch einfach PWM“</h3>
    <p>Nein. Der Timerverlauf und damit das Zeitbild unterscheiden sich.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 2</p>
    <h3>„50 Prozent Tastgrad erklärt schon alles“</h3>
    <p>Nein. Auch Symmetrie und Periodenbildung gehören zur Einordnung.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 3</p>
    <h3>„Der Ausgangspin macht das schon“</h3>
    <p>Nein. Die eigentliche Form entsteht aus der Timerlogik im Modus.</p>
  </section>
</div>

## Mini-Prüfbild für den Kopf

<pre><code>Nur aufwärts zählen              → eher Fast PWM
Aufwärts und abwärts zählen      → eher Phase Correct PWM
Symmetrie besonders wichtig      → eher Phase Correct ruhig mitdenken</code></pre>

## Eine ruhige Prüfstrategie

1. Wie zählt der Timer in diesem Modus?
2. Wird am oberen Wert neu gestartet oder wieder rückwärts gezählt?
3. Welche Wirkung hat das auf Symmetrie und Periodendauer?
4. Erst danach den PWM-Modus bewerten.

<div class="note-panel">
  <p><strong>Merke:</strong> Fast PWM und Phase Correct PWM unterscheiden sich nicht nur im Namen, sondern im Zählverlauf des Timers und damit im Zeitbild des Signals.</p>
</div>
