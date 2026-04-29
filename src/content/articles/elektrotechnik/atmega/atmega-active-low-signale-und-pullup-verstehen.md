---
title: "ATmega – Active-Low-Signale und Pull-up verstehen"
description: "Verstehe, warum ein Eingang mit Pull-up im Ruhezustand logisch 1 liest und beim Drücken oft logisch 0 wird."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-active-low-signale-und-pullup-verstehen"]
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
## Grundidee

Am ATmega werden Tastereingänge sehr oft mit **internem Pull-up** betrieben. Dann liegt der Eingang im Ruhezustand auf logisch **1**. Wird der Taster gedrückt und nach Masse gezogen, liest der Controller logisch **0**. Genau diese Zuordnung nennt man oft **Active-Low**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Der Taster ist im Code „negativ“ – aber fachlich völlig ruhig</h3>
  <p>Ein Taster an einem Eingang mit Pull-up wirkt im ersten Moment ungewohnt: Nicht gedrückt bedeutet logisch 1, gedrückt bedeutet logisch 0. Wer nur auf die Zahl schaut, findet das schnell „verkehrt herum“. Wer dagegen Ruhezustand, Schaltung und Ereignis zusammen liest, erkennt: Die Logik ist nicht falsch, sondern nur anders zugeordnet.</p>
</div>

## Drei Ebenen sauber trennen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Elektrischer Ruhezustand</strong>
    <span>Der Pull-up hält den Eingang ohne Tastendruck auf High.</span>
  </div>
  <div class="visual-item">
    <strong>Ereignis beim Drücken</strong>
    <span>Der Taster verbindet den Eingang mit Masse.</span>
  </div>
  <div class="visual-item">
    <strong>Logische Bedeutung</strong>
    <span>Das Ereignis „gedrückt“ wird im Code oft als logisch 0 erkannt.</span>
  </div>
</div>

## Mini-Demo: derselbe Taster, zwei Lesarten

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Nicht die Zahl ist entscheidend, sondern was sie bedeutet</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(16rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Nicht gedrückt</strong></p>
      <pre style="margin:0;"><code>PORTB |= (1 &lt;&lt; PB0);
PINB liest 1</code></pre>
      <p style="margin:0.6rem 0 0;">Der Pull-up hält den Eingang stabil auf logisch 1.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Gedrückt</strong></p>
      <pre style="margin:0;"><code>Taster nach GND
PINB liest 0</code></pre>
      <p style="margin:0.6rem 0 0;">Das Ereignis wird logisch 0 – genau das ist bei Active-Low gemeint.</p>
    </div>
  </div>
</div>

## Typischer AVR-Code

```c
DDRB &= ~(1 << PB0);
PORTB |= (1 << PB0);

if (!(PINB & (1 << PB0))) {
    // Taster gedrückt
}
```

Die ruhige Lesart ist:

- `DDRB &= ...` macht den Pin zum Eingang,
- `PORTB |= ...` aktiviert den Pull-up,
- `!(PINB & ...)` bedeutet: Der Eingang ist gerade logisch 0, also wurde der Taster gedrückt.

## Nicht „invertiert“ im Sinne von falsch

<div class="compare-card">
  <p class="card-kicker">Denkfehler vermeiden</p>
  <h3>Active-Low ist eine Zuordnung, kein Bug</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unruhige Lesart</strong>
      <span>„Gedrückt ist 0, also ist die Schaltung komisch.“</span>
    </div>
    <div class="compare-item">
      <strong>Ruhige Lesart</strong>
      <span>„Der Pull-up definiert den Ruhezustand als 1. Das Ereignis zieht den Eingang auf 0.“</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Wie ist der Eingang im Ruhezustand beschaltet?
2. Was passiert elektrisch beim Drücken?
3. Welchen Pegel liest der AVR dann tatsächlich?
4. Welche Bedeutung bekommt dieser Pegel im Code?

<div class="note-panel">
  <p><strong>Merke:</strong> Active-Low heißt nur: Das Ereignis ist an logisch 0 gebunden. Mit Pull-up ist das am ATmega oft die ruhigste und stabilste Tasterlogik.</p>
</div>
