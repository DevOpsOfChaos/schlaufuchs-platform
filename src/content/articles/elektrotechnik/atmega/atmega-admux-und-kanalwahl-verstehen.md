---
title: "ATmega – ADMUX und Kanalwahl verstehen"
description: "Verstehe, wie am AVR über ADMUX Referenz und Eingangskanal für eine ADC-Messung ausgewählt werden."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-admux-und-kanalwahl-verstehen"]
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
Bei einer ADC-Messung am AVR müssen mindestens zwei Fragen sauber beantwortet werden: **Gegen welche Referenz wird gemessen?** und **welcher Analogeingang wird gerade ausgewählt?** Genau diese Auswahl liegt typischerweise in `ADMUX`.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Spannung an zwei verschiedenen Potis messen</h3>
  <p>Ein AVR soll einmal die Spannung an ADC0 und einmal die Spannung an ADC1 messen. Gleichzeitig soll als Referenz nicht die Versorgung zufällig angenommen, sondern bewusst gewählt werden. Genau hier wird klar: ADMUX ist kein Startknopf, sondern zuerst eine Auswahlstelle für Referenz und Kanal.</p>
</div>

## Zwei getrennte Entscheidungen in einem Register

<div class="visual-grid">
  <div class="visual-item">
    <strong>Referenzwahl</strong>
    <span>Sie bestimmt, gegen welche Vergleichsspannung der ADC den Eingang einordnet.</span>
  </div>
  <div class="visual-item">
    <strong>Kanalwahl</strong>
    <span>Sie bestimmt, welcher Analogeingang gerade gemessen werden soll.</span>
  </div>
</div>

## Mini-Demo: gleicher ADC, andere Messfrage

```c
ADMUX = (1 << REFS0) | 0;   // AVcc als Referenz, Kanal ADC0
ADMUX = (1 << REFS0) | 1;   // AVcc als Referenz, Kanal ADC1
```

Die ruhige Lesart ist:

- in beiden Fällen bleibt die Referenz gleich,
- nur der Eingangskanal wechselt,
- die Messfrage ändert sich also von „Wie hoch ist ADC0?“ zu „Wie hoch ist ADC1?“.

## ADMUX startet noch keine Messung

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Auswählen ist etwas anderes als messen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>ADMUX</strong>
      <span>Wählt Referenz und Kanal.</span>
    </div>
    <div class="compare-item">
      <strong>Messstart</strong>
      <span>Geschieht an anderer Stelle, zum Beispiel über das Startbit im ADC-Steuerregister.</span>
    </div>
  </div>
</div>

## Mini-Konsole im Kopf

<pre><code>Welche Spannung soll gemessen werden?
→ Eingangskanal wählen
Gegen welche Vergleichsspannung?
→ Referenz wählen
Erst danach:
→ Messung tatsächlich starten</code></pre>

## Diese Seite behandelt bewusst Auswahl, nicht schon komplette ADC-Abläufe

Hier geht es um das ruhige Grundverständnis von `ADMUX`: **Was wird ausgewählt und warum?** Messstart, Wandlungsende oder Registerabholung bauen darauf auf und sind eigene Schritte.

## Eine ruhige Prüfstrategie

1. Welche Messgröße soll überhaupt erfasst werden?
2. Welcher Eingang gehört dazu?
3. Welche Referenzspannung ist für diese Messung gedacht?
4. Erst danach prüfen, wie die eigentliche Wandlung gestartet wird.

<div class="note-panel">
  <p><strong>Merke:</strong> `ADMUX` beantwortet zuerst die Fragen „Welcher Eingang?“ und „Gegen welche Referenz?“. Die Messung selbst ist ein weiterer Schritt.</p>
</div>
