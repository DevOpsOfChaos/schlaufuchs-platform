---
title: "ATmega – LED mit Registerzugriff schalten"
description: "Verstehe, wie ein AVR-Pin als Ausgang vorbereitet und anschließend per Registerzugriff auf High oder Low gesetzt wird."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-led-mit-registerzugriff-schalten"]
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
Eine LED am AVR zu schalten ist didaktisch sehr hilfreich, weil dabei zwei Grundfragen sichtbar werden:

1. **Ist der Pin überhaupt als Ausgang vorbereitet?**
2. **Welchen Pegel gibt dieser Ausgang gerade aus?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>PB0 soll eine LED schalten</h3>
  <p>Die LED hängt an einem Pin des Mikrocontrollers. Damit sie gezielt an- und ausgehen kann, muss der Pin zuerst als Ausgang arbeiten. Erst danach ist die eigentliche Frage sinnvoll, ob der Ausgang auf High oder Low gesetzt wird.</p>
</div>

## Die ruhige Zweiteilung

<div class="visual-grid">
  <div class="visual-item">
    <strong>Schritt 1: Richtung festlegen</strong>
    <span>Über DDR wird entschieden, dass der Pin als Ausgang arbeiten soll.</span>
  </div>
  <div class="visual-item">
    <strong>Schritt 2: Pegel ausgeben</strong>
    <span>Über PORT wird entschieden, ob der Ausgang High oder Low ausgibt.</span>
  </div>
</div>

## Typischer LED-Code am AVR

```c
DDRB  |= (1 << PB0);   // PB0 als Ausgang
PORTB |= (1 << PB0);   // LED einschalten
PORTB &= ~(1 << PB0);  // LED ausschalten
```

## Mini-Demo: gleiche LED, aber andere Fehlerquelle

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Warum Konfiguration und Schalten nicht dieselbe Aktion sind</h3>
  <pre><code>DDRB  |= (1 << PB0);   // Richtung: Ausgang
PORTB |= (1 << PB0);   // Pegel: High
</code></pre>
  <p>Die erste Zeile entscheidet noch nicht, dass die LED leuchtet. Sie bereitet nur die Ausgangsrolle vor. Erst die zweite Zeile setzt den Pegel.</p>
</div>

## Drei ähnlich klingende Aussagen sauber trennen

<div class="compare-card">
  <p class="card-kicker">Trennschärfe</p>
  <h3>„Pin aktivieren“ ist oft zu ungenau</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Als Ausgang schalten</strong>
      <span>Das ist die Aufgabe des Richtungsregisters.</span>
    </div>
    <div class="compare-item">
      <strong>High ausgeben</strong>
      <span>Das ist die Aufgabe des Ausgangsregisters.</span>
    </div>
    <div class="compare-item">
      <strong>LED leuchtet</strong>
      <span>Das ist die sichtbare Wirkung der beiden technischen Schritte.</span>
    </div>
  </div>
</div>

## Ein typischer Denkfehler

```c
PORTB |= (1 << PB0);
```

Allein diese Zeile wirkt für Anfänger oft schon „wie LED einschalten“. Fachlich fehlt aber noch die ruhigere Frage: **Ist PB0 überhaupt schon als Ausgang eingerichtet?**

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Zielpin benennen</strong>
    <span>Welcher Pin soll die LED treiben?</span>
  </div>
  <div class="step-item">
    <strong>2. Richtung prüfen</strong>
    <span>Ist das passende DDR-Bit wirklich als Ausgang gesetzt?</span>
  </div>
  <div class="step-item">
    <strong>3. Pegel prüfen</strong>
    <span>Wird der Ausgang anschließend auf High oder Low gesetzt?</span>
  </div>
  <div class="step-item">
    <strong>4. Wirkung zuordnen</strong>
    <span>Welche sichtbare Reaktion folgt daraus an der LED?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Eine LED am AVR wird nicht in einem Schritt „magisch eingeschaltet“. Zuerst braucht der Pin die Ausgangsrolle, danach den passenden Ausgangspegel.</p>
</div>
