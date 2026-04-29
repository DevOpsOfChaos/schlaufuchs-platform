---
title: "ATmega – Compare Match verstehen"
description: "Verstehe, wie ein AVR-Timer nicht nur überlaufen kann, sondern auch bei einem gezielt gewählten Vergleichswert ein Ereignis auslöst."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-compare-match-verstehen"]
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
Beim AVR-Timer ist der Überlauf nur eine mögliche Grenze. Oft will man nicht warten, bis ein 8-Bit-Timer ganz von 0 bis 255 durchgezählt hat. Dann ist ein **Compare Match** hilfreich: Der Timer löst schon dann ein Ereignis aus, wenn er einen vorher festgelegten Vergleichswert erreicht.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein regelmäßiges Ereignis schon vor dem Überlauf</h3>
  <p>Ein Timer soll nicht erst bei 255 reagieren, sondern schon bei 124. Damit lässt sich eine feinere oder passendere Zeitbasis bauen. Genau das ist die Grundidee eines Compare Match.</p>
</div>

## Überlauf und Vergleich nicht vermischen

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Zwei verschiedene Arten von Timerereignissen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Überlauf</strong>
      <span>Der Timer zählt bis an sein Ende und springt dann wieder zurück.</span>
    </div>
    <div class="compare-item">
      <strong>Compare Match</strong>
      <span>Der Timerstand trifft auf einen vorher gesetzten Vergleichswert.</span>
    </div>
  </div>
</div>

## Mini-Demo: dieselbe Zählrichtung, andere Grenze

<div class="figure-card">
  <p class="card-kicker">Zahlenbild</p>
  <h3>Warum das Ereignis nicht erst bei 255 kommen muss</h3>
  <pre><code>0 ... 60 ... 100 ... 124  → Compare Match
0 ... 60 ... 100 ... 255  → Überlauf
</code></pre>
  <p>Beide Fälle benutzen denselben Timer. Unterschiedlich ist nur, an welcher Grenze ein relevantes Ereignis entsteht.</p>
</div>

## Warum Compare Match didaktisch wichtig ist

Compare Match zeigt besonders gut, dass ein Timer nicht „Zeit an sich“ misst. Er zählt Takte. Welche reale Zeit daraus wird, hängt davon ab,

- wie schnell der Takt ist,
- wie stark der Prescaler teilt,
- und bei welchem Wert reagiert werden soll.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Timerart erkennen</strong>
    <span>Welcher Zähler läuft hier überhaupt?</span>
  </div>
  <div class="step-item">
    <strong>2. Vergleichswert erkennen</strong>
    <span>Bei welchem Zählerstand soll das Ereignis auftreten?</span>
  </div>
  <div class="step-item">
    <strong>3. Überlauf abgrenzen</strong>
    <span>Ist hier die volle Zählerbreite gemeint oder ein vorheriger Vergleichspunkt?</span>
  </div>
  <div class="step-item">
    <strong>4. Zeitidee bilden</strong>
    <span>Wie übersetzen Takt, Prescaler und Vergleichswert diesen Punkt in eine reale Zeit?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Compare Match bedeutet: Nicht erst am Ende reagieren, sondern gezielt bei einem vorher bestimmten Timerstand.</p>
</div>
