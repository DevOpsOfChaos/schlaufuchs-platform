---
title: "ATmega – SPI Voll-Duplex als Grundidee verstehen"
description: "Verstehe, warum SPI bei jedem Takt gleichzeitig sendet und empfängt und warum das mehr ist als nur „eine Leitung hin und eine zurück“."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-spi-voll-duplex-grundidee-verstehen"]
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

Bei SPI wird nicht erst vollständig gesendet und danach getrennt vollständig empfangen. Ruhiger ist die Leitfrage:

**Was passiert bei jedem einzelnen Takt gleichzeitig?**

Genau dort liegt der Unterschied zu vielen ersten UART-Vorstellungen: SPI ist als Schnittstelle grundsätzlich **Voll-Duplex**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Der AVR fragt einen Sensor ab</h3>
  <p>Der Master-Controller möchte ein Byte vom Sensor lesen. Trotzdem muss er selbst gleichzeitig etwas über MOSI hinausschieben, damit der Takt läuft und der Sensor über MISO antworten kann. Empfangen ohne gleichzeitiges Takten und Mitsenden ist hier also keine ruhige Denkweise.</p>
</div>

## Ein Takt, zwei Richtungen

<div class="compare-card">
  <p class="card-kicker">Voll-Duplex</p>
  <h3>Jeder Takt schiebt in beide Richtungen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>MOSI</strong>
      <span>Der Master schiebt pro Takt ein Bit zum Slave.</span>
    </div>
    <div class="compare-item">
      <strong>MISO</strong>
      <span>Der Slave schiebt im selben Takt ein Bit zum Master zurück.</span>
    </div>
  </div>
</div>

## Mini-Demo: lesen heißt trotzdem auch senden

<pre><code>Master sendet: 0x00
Slave sendet:  Messwertbyte
Takt läuft:    8 Impulse
Ergebnis:      Master erhält das Byte nur, weil er gleichzeitig selbst Bits hinausschiebt</code></pre>

## Warum das didaktisch wichtig ist

Wer SPI nur als „ich frage mal Daten ab“ liest, übersieht leicht die Taktlogik. Ruhiger ist:

- ohne Takt kein Bitwechsel,
- ohne Mastertakt kein Austausch,
- und beim Lesen läuft trotzdem gleichzeitig eine Sendeaktion in Gegenrichtung.

## Eine ruhige Prüfstrategie

1. Wer ist Master und liefert den Takt?
2. Was läuft über MOSI hinaus?
3. Was kommt gleichzeitig über MISO zurück?
4. Wird der gesamte Rahmen als gemeinsamer Austausch gelesen?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein SPI-Lesevorgang ist oft kein „nur Empfangen“, sondern immer auch ein gleichzeitiger, vom Takt gekoppelter Austausch in beide Richtungen.</p>
</div>
