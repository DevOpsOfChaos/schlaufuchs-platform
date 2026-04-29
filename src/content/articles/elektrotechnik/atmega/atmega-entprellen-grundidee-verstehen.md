---
title: "ATmega – Entprellen als Grundidee verstehen"
description: "Verstehe, warum ein mechanischer Taster beim Umschalten kurz unruhige Zustände erzeugen kann und warum man diese technisch sauber beruhigen muss."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-entprellen-grundidee-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "mikrocontroller-und-atmega"]
draft: false
---
Ein mechanischer Taster ist kein idealer mathematischer Schalter. Beim Umschalten kann der Kontakt für kurze Zeit **prellen**, also schnell zwischen Zuständen hin- und herspringen. Für den Mikrocontroller kann das so wirken, als wären mehrere Tastendrücke passiert.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Tastendruck – aber die LED schaltet mehrfach</h3>
  <p>Du drückst einen Taster einmal. Trotzdem reagiert die LED scheinbar zwei- oder dreimal. Die Ursache ist nicht automatisch ein Denkfehler im Programm, sondern oft das mechanische Prellen des Tasters.</p>
</div>

## Idealer Taster und realer Taster

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Gedachter Schaltwechsel gegen reales Kontaktsignal</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ideal</strong>
      <span>Der Zustand springt einmal sauber von nicht gedrückt zu gedrückt.</span>
    </div>
    <div class="compare-item">
      <strong>Real</strong>
      <span>Der Kontakt kann kurz unruhig zwischen beiden Zuständen wechseln, bevor er stabil bleibt.</span>
    </div>
  </div>
</div>

## Mini-Demo: ein Druck, mehrere scheinbare Kanten

<div class="figure-card">
  <p class="card-kicker">Signalbild im Kopf</p>
  <h3>So kann Prellen fachlich gelesen werden</h3>
  <pre><code>ideal:  111111100000000
real:   111110101000000
</code></pre>
  <p>Der reale Verlauf enthält kurz mehrere Wechsel. Ein Mikrocontroller kann daraus mehrere scheinbare Ereignisse lesen, obwohl physikalisch nur einmal gedrückt wurde.</p>
</div>

## Entprellen als ruhige Grundidee

Entprellen bedeutet fachlich nicht einfach nur „kurz warten“, sondern:

- ein unruhiges Eingangssignal nicht sofort als endgültige Entscheidung zu behandeln,
- sondern erst einen stabilen Zustand zu akzeptieren.

## Warum das in AVR-Programmen wichtig ist

Gerade bei Polling oder Interrupts kann Prellen dazu führen, dass

- eine LED mehrfach toggelt,
- ein Zähler zu schnell hochläuft,
- oder ein Menüpunkt mehrfach springt.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Mechanik mitdenken</strong>
    <span>Ist ein realer Taster im Spiel?</span>
  </div>
  <div class="step-item">
    <strong>2. Symptom lesen</strong>
    <span>Entsteht aus einem Tastendruck mehr als eine erkannte Aktion?</span>
  </div>
  <div class="step-item">
    <strong>3. Signal statt Absicht lesen</strong>
    <span>Vielleicht ist der Tastendruck menschlich einmalig, elektrisch aber kurz unruhig.</span>
  </div>
  <div class="step-item">
    <strong>4. Beruhigung suchen</strong>
    <span>Erst danach an Wartezeit, stabile Prüfung oder andere Entprellmethoden denken.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Entprellen bedeutet, aus einem mechanisch unruhigen Tastensignal einen stabilen logisch lesbaren Zustand zu machen.</p>
</div>
