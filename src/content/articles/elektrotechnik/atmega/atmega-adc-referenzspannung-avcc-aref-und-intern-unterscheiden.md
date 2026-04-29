---
title: "ATmega – ADC-Referenzspannung mit AVCC, AREF und intern unterscheiden"
description: "Verstehe am AVR, warum ein ADC-Messwert nur zusammen mit seiner Referenzspannung sinnvoll gelesen werden kann und worin sich AVCC, AREF und interne Referenz unterscheiden."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-adc-referenzspannung-avcc-aref-und-intern-unterscheiden"]
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

Ein ADC liefert am AVR nicht einfach „eine Spannung“, sondern einen **Zahlenwert innerhalb eines Referenzbereichs**. Genau deshalb ist die erste ruhige Frage nie nur: **Welcher Rohwert kam heraus?** Sondern: **Auf welche Referenz bezieht sich dieser Rohwert überhaupt?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>512 ist nicht automatisch 2,5 Volt</h3>
  <p>Ein Rohwert von <code>512</code> wirkt auf den ersten Blick eindeutig. Fachlich fehlt aber noch die halbe Geschichte. Erst mit der Referenzspannung wird klar, welchen Spannungsbereich der ADC überhaupt abbildet und wie dieser Zahlenwert zu deuten ist.</p>
</div>

## Drei typische Referenzquellen

<div class="visual-grid">
  <div class="visual-item">
    <strong>AVCC</strong>
    <span>Die Versorgung des Analogteils dient als Referenz. Häufig wird damit der ganze Bereich von 0 Volt bis zur Versorgungsspannung abgebildet.</span>
  </div>
  <div class="visual-item">
    <strong>AREF extern</strong>
    <span>Eine externe Referenzspannung legt den Messbereich gezielt fest und macht ihn vom Versorgungspfad unabhängiger.</span>
  </div>
  <div class="visual-item">
    <strong>Interne Referenz</strong>
    <span>Der AVR stellt eine feste interne Referenz bereit. Damit lassen sich kleinere Spannungsbereiche oft feiner auflösen.</span>
  </div>
</div>

## Mini-Demo: gleicher Eingang, andere Deutung

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Ein Analogwert wird erst mit Referenz sinnvoll</h3>
  <div class="comparison-grid">
    <section>
      <p class="card-kicker">Fall A</p>
      <h3>Referenz 5,0 Volt</h3>
      <p>Ein Rohwert von <code>512</code> liegt ungefähr in der Mitte des Bereichs von 0 bis 5 Volt.</p>
    </section>
    <section>
      <p class="card-kicker">Fall B</p>
      <h3>Referenz 1,1 Volt</h3>
      <p>Der gleiche Rohwert liegt jetzt ungefähr in der Mitte des Bereichs von 0 bis 1,1 Volt. Die Zahl ist ähnlich, die Deutung aber nicht.</p>
    </section>
  </div>
</div>

## Die ruhige Lesart von ADC-Werten

```text
Rohwert allein        → noch keine fertige Spannungsangabe
Rohwert + Referenz    → jetzt erst sinnvoll interpretierbar
```

Gerade diese Trennung schützt vor einem typischen Denkfehler: Man sieht eine Zahl und liest sofort eine absolute Spannung hinein, obwohl eigentlich noch das Bezugssystem fehlt.

## Referenzwahl verändert nicht nur „Genauigkeit“

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Messbereich und Feingefühl gleichzeitig denken</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Größere Referenz</strong>
      <span>Der ADC deckt einen größeren Spannungsbereich ab, ein einzelner Schritt steht aber für einen größeren Spannungsanteil.</span>
    </div>
    <div class="compare-item">
      <strong>Kleinere Referenz</strong>
      <span>Der abbildbare Bereich wird kleiner, dafür wird derselbe Zahlenraum feiner auf einen kleineren Bereich verteilt.</span>
    </div>
  </div>
</div>

## Typischer Registerbezug

```c
ADMUX = (1 << REFS0);   // Beispielhaft AVCC als Referenz
```

Hier wird nicht „die gemessene Spannung“ eingestellt, sondern das **Bezugssystem**, in dem spätere ADC-Werte gelesen werden.

## Eine ruhige Prüfstrategie

1. Welcher ADC-Rohwert liegt vor?
2. Welche Referenz ist gewählt?
3. Welchen Spannungsbereich bildet diese Referenz ab?
4. Erst danach den Rohwert als Spannung oder Verhältnis deuten.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein ADC-Wert ohne Referenzspannung ist fachlich nur ein halber Messwert.</p>
</div>
