---
title: "ATmega – ADC-Messwerte glätten und skalieren"
description: "Lerne, warum rohe ADC-Werte schwanken und wie Mittelwert, Plausibilitätsprüfung und Skalierung daraus brauchbare Messwerte machen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "adc-messwerte-glaetten-und-skalieren"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Mikrocontroller und ATmega"]
draft: false
---
## Grundidee

Ein ADC-Wert ist selten eine vollkommen ruhige Zahl. Selbst bei einer scheinbar konstanten Spannung können Rohwerte leicht springen. Das ist nicht automatisch ein Defekt, sondern oft die normale Mischung aus Quantisierung, Rauschen, Sensorstreuung und Referenzspannung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Der Lichtsensor steht still, aber die Anzeige zittert</h3>
  <p>Das Programm liest nacheinander <code>516</code>, <code>518</code>, <code>517</code>, <code>519</code> und <code>516</code>. Wer jeden Einzelwert direkt anzeigt, bekommt eine nervöse Anzeige. Wer die Spur als Bereich liest, erkennt: Die Messung liegt stabil um etwa <code>517</code>.</p>
</div>

## Drei Ebenen sauber trennen

<div class="visual-grid">
  <div class="visual-item"><strong>Rohwert</strong><span>Der ADC liefert zuerst nur eine digitale Stufe.</span></div>
  <div class="visual-item"><strong>Glättung</strong><span>Mehrere Werte werden gemittelt oder als Bereich bewertet.</span></div>
  <div class="visual-item"><strong>Skalierung</strong><span>Erst Messbereich und Einheit machen daraus Volt, Prozent oder Temperatur.</span></div>
</div>

## Mini-Demo: Anzeige beruhigen

<div class="figure-card">
  <p class="card-kicker">Messspur</p>
  <h3>Einzelwerte springen, der Trend bleibt stabil</h3>
  <pre><code>Rohwerte:      516  518  517  519  516  517  518  517
Einzelanzeige: zittert sichtbar
Mittelwert:    wirkt ruhiger, reagiert aber langsamer</code></pre>
</div>

## Glättung ist eine Abwägung

<div class="compare-card">
  <p class="card-kicker">Nicht blind mitteln</p>
  <h3>Ruhiger ist nicht automatisch richtiger</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Einzelmessung</strong><span>Reagiert schnell, zeigt aber jede kleine Schwankung.</span></div>
    <div class="compare-item"><strong>Mittelwert</strong><span>Beruhigt Anzeigen, kann echte Änderungen aber verspätet zeigen.</span></div>
    <div class="compare-item"><strong>Bereichslogik</strong><span>Bewertet zum Beispiel „hell genug“ statt jeden Rohwert auszudrucken.</span></div>
  </div>
</div>

## Typischer Denkweg im Code

<pre><code>uint16_t summe = 0;
for (uint8_t i = 0; i &lt; 8; i++) {
    summe += adc_lesen();
}
uint16_t mittelwert = summe / 8;</code></pre>

Der Code macht die Messspur ruhiger. Die Bedeutung entsteht aber erst danach durch Referenzspannung, Sensorbereich und Einheit.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute ADC-Auswertung trennt Rohwert, Glättung und Bedeutung. Wer diese Ebenen vermischt, jagt oft Scheingenauigkeit statt Messqualität.</p>
</div>
