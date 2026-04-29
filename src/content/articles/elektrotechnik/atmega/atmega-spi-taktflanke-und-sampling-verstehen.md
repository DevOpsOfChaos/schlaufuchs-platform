---
title: "ATmega – SPI-Taktflanke und Sampling verstehen"
description: "Verstehe, warum bei SPI nicht nur Leitungen und Rollen wichtig sind, sondern auch der Moment, in dem Daten übernommen oder geändert werden."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-spi-taktflanke-und-sampling-verstehen"]
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

Bei SPI reicht es nicht, nur die Leitungen und Rollen zu kennen. Entscheidend ist auch, **wann** ein Bit als gültig übernommen wird. Genau dafür sind **Taktflanke** und **Sampling-Moment** wichtig.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Gleicher Bus, aber falscher Lesemoment</h3>
  <p>Master und Slave sind korrekt verbunden. Trotzdem kommen falsche Werte an. Oft liegt das Problem dann nicht an MOSI, MISO oder SCK selbst, sondern daran, dass Daten nicht an derselben Flanke geändert und gelesen werden.</p>
</div>

## Zwei Zeitfragen statt nur vier Leitungen

<div class="compare-card">
  <p class="card-kicker">Timing-Frage</p>
  <h3>Ändern und übernehmen sind nicht dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Daten ändern</strong>
      <span>Der Sender legt neue Bitwerte zu einem bestimmten Zeitpunkt auf die Leitung.</span>
    </div>
    <div class="compare-item">
      <strong>Daten übernehmen</strong>
      <span>Der Empfänger liest diese Bitwerte an einem bestimmten Taktmoment ein.</span>
    </div>
  </div>
</div>

## Mini-Demo: ruhiger Zeitblick

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Ein stabiler Lesemoment ist wichtiger als eine bloße Modusnummer</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Ruhiger Fall</strong></p>
      <p style="margin:0;"><code>ändern → stabil → lesen</code></p>
      <p style="margin:0.6rem 0 0;">Der Empfänger übernimmt das Bit in einem stabilen Zeitfenster.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Unruhiger Fall</strong></p>
      <p style="margin:0;"><code>lesen während Änderung</code></p>
      <p style="margin:0.6rem 0 0;">Dann entsteht leicht ein Timing-Fehler, obwohl die Leitungen richtig verbunden sind.</p>
    </div>
  </div>
</div>

## Warum Moduszahlen allein didaktisch zu kurz greifen

SPI-Modi werden oft nur als Nummern gelernt. Das ist für Prüfungen manchmal praktisch, erklärt aber das eigentliche Problem nicht. Ruhiger ist:

- Wann ändert der Sender das Bit?
- Wann liest der Empfänger es?
- Liegt zwischen beiden ein stabiles Zeitfenster?

Dann wird aus „Modus 0 oder 1“ wieder eine echte Zeitfrage.

## Typischer Fehlstart

Wenn Übertragung instabil wirkt, wird oft zuerst an Verdrahtung gedacht. Das kann sinnvoll sein, aber bei korrekt angeschlossenen Leitungen bleibt ein zweites großes Fehlerfeld:

- falscher zeitlicher Bezug,
- unpassende Flanke,
- falscher Sampling-Moment.

## Diagnose-Raster

<div class="step-grid">
  <div class="step-item">
    <strong>1. Rollen prüfen</strong>
    <span>Master und Slave müssen grundsätzlich klar sein.</span>
  </div>
  <div class="step-item">
    <strong>2. Leitungen prüfen</strong>
    <span>MOSI, MISO, SCK und SS müssen logisch passen.</span>
  </div>
  <div class="step-item">
    <strong>3. Timing lesen</strong>
    <span>Wann werden Bits geändert und wann werden sie gelesen?</span>
  </div>
  <div class="step-item">
    <strong>4. Erst dann Moduszahl</strong>
    <span>Die Modusnummer ist nur die kompakte Form dieses Timing-Verhältnisses.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Bei SPI reicht „Leitung korrekt“ noch nicht aus. Auch der zeitliche Lesemoment muss zur Datenänderung passen.</p>
</div>
