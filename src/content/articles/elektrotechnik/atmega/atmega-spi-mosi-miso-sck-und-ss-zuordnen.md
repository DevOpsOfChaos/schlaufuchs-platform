---
title: "ATmega – MOSI, MISO, SCK und SS zuordnen"
description: "Verstehe die Rollen der vier SPI-Grundsignale am AVR und warum ihre Richtung nicht aus dem Namen allein, sondern aus Master- und Slave-Rolle gelesen werden sollte."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-spi-mosi-miso-sck-und-ss-zuordnen"]
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

Bei SPI wirken die Namen **MOSI**, **MISO**, **SCK** und **SS** zuerst wie eine reine Pinliste. Didaktisch wichtiger ist aber: Diese Signale beschreiben **Rollen im Bus**. Wer nur auf den Pin schaut, übersieht leicht, aus **wessen Sicht** der Name vergeben ist.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein AVR spricht mit einem Sensor</h3>
  <p>Der AVR arbeitet als Master und ein Sensor als Slave. Der Master gibt den Takt vor, wählt den Sensor aus und sendet ein Kommando. Der Sensor antwortet mit Messdaten. Genau an diesem kleinen Aufbau lassen sich MOSI, MISO, SCK und SS ruhig und dauerhaft verständlich zuordnen.</p>
</div>

## Die vier Grundsignale

<div class="visual-grid">
  <div class="visual-item">
    <strong>MOSI</strong>
    <span><em>Master Out Slave In</em> – Daten vom Master zum Slave.</span>
  </div>
  <div class="visual-item">
    <strong>MISO</strong>
    <span><em>Master In Slave Out</em> – Daten vom Slave zurück zum Master.</span>
  </div>
  <div class="visual-item">
    <strong>SCK</strong>
    <span>Der serielle Takt, den typischerweise der Master liefert.</span>
  </div>
  <div class="visual-item">
    <strong>SS</strong>
    <span>Die Slave-Auswahl. Damit wird festgelegt, welches Gerät gerade angesprochen wird.</span>
  </div>
</div>

## Das ruhige Denkbild

<div class="figure-card">
  <p class="card-kicker">Busbild</p>
  <h3>Die Namen entstehen aus Sicht des Masters</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>MOSI</strong><span>Master sendet Befehle oder Daten nach außen.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>MISO</strong><span>Der aktive Slave sendet Daten zurück.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>SCK</strong><span>Der Takt strukturiert die Bitfolge zeitlich.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>SS</strong><span>Nur der ausgewählte Slave soll antworten.</span></div>
  </div>
</div>

## Signalname und Gerätesicht

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Ein Signalname beschreibt die Busrolle, nicht automatisch die Pinrichtung jedes Geräts</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Am Master</strong>
      <span>MOSI ist Ausgang, MISO Eingang, SCK Ausgang, SS typischerweise Ausgang zur Auswahl des Slaves.</span>
    </div>
    <div class="compare-item">
      <strong>Am Slave</strong>
      <span>MOSI ist Eingang, MISO Ausgang, SCK Eingang und SS typischerweise Eingang zur Auswahl.</span>
    </div>
  </div>
</div>

Gerade dieser Rollenwechsel ist wichtig: **MOSI** heißt nicht „das ist immer ein Ausgangspin“, sondern „diese Leitung trägt Daten vom Master zum Slave“.

## Mini-Demo: derselbe Draht, andere Sicht

```text
Master-MOSI  ─────────►  Slave-MOSI-Eingang
Master-MISO  ◄────────  Slave-MISO-Ausgang
Master-SCK   ─────────►  Slave-SCK-Eingang
Master-SS    ─────────►  Slave-SS-Eingang
```

Die Leitung heißt also auf beiden Seiten gleich, wird aber nicht auf beiden Seiten gleich benutzt.

## SS ist mehr als nur „irgendein Steuerpin“

**SS** wird häufig zu knapp gelesen. Didaktisch ruhiger ist:

- Mit **SS** wählt der Master den aktiven Slave aus.
- Nur der ausgewählte Slave soll auf **MISO** sinnvoll antworten.
- So können mehrere SPI-Slaves an gemeinsamen Leitungen hängen, ohne gleichzeitig durcheinander zu senden.

## Drei typische Denkfehler

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Fehler 1</p>
    <h3>MOSI = immer Ausgang</h3>
    <p>Nein. Es ist nur aus Sicht des Masters die „Out“-Leitung. Am Slave ist dieselbe Leitung Eingang.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 2</p>
    <h3>SCK trägt Daten</h3>
    <p>Nein. SCK gibt den Takt vor, also die zeitliche Struktur für die Datenübernahme.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 3</p>
    <h3>SS ist optionaler Schmuck</h3>
    <p>Nein. Gerade bei mehreren Slaves ist die Auswahl des aktiven Geräts zentral.</p>
  </section>
</div>

## Mini-Prüfbild für den Kopf

<pre><code>Daten vom Master nach außen        → MOSI
Daten zurück zum Master            → MISO
Zeitliche Taktvorgabe              → SCK
Aktiven Slave auswählen            → SS</code></pre>

## Eine ruhige Prüfstrategie

1. Wer ist Master, wer ist Slave?
2. In welche Richtung sollen die Daten gerade laufen?
3. Wer gibt den Takt vor?
4. Welches Gerät darf überhaupt antworten?

<div class="note-panel">
  <p><strong>Merke:</strong> MOSI, MISO, SCK und SS sind Rollen im Bus. Erst zusammen mit Master- und Slave-Sicht werden die Leitungen wirklich klar.</p>
</div>
