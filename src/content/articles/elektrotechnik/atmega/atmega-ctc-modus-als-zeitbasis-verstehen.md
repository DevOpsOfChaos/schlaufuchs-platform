---
title: "ATmega – CTC-Modus als Zeitbasis verstehen"
description: "Verstehe, wie der CTC-Modus am ATmega aus Timer, Prescaler und Vergleichswert eine saubere periodische Zeitbasis macht."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-ctc-modus-als-zeitbasis-verstehen"]
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

Im **CTC-Modus** zählt der Timer nicht einfach stumpf bis zum Maximalwert. Stattdessen vergleicht der ATmega den aktuellen Zählerstand mit einem **Vergleichswert**. Wird dieser erreicht, entsteht ein Compare Match – und genau daraus lässt sich eine saubere **periodische Zeitbasis** bauen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Alle 1 Millisekunde soll etwas passieren</h3>
  <p>Statt in einer Endlosschleife ständig zu warten, kann der Timer alle 1 ms ein Ereignis liefern. Dann wird aus „Zeit verstreichen lassen“ eine echte Zeitbasis, auf die der Rest des Programms geordnet reagieren kann.</p>
</div>

## Die drei Bausteine der Zeitbasis

<div class="visual-grid">
  <div class="visual-item">
    <strong>Systemtakt</strong>
    <span>Er bestimmt, wie schnell der Timer grundsätzlich zählt.</span>
  </div>
  <div class="visual-item">
    <strong>Prescaler</strong>
    <span>Er bremst den Timer-Takt in einen gröberen Zählschritt herunter.</span>
  </div>
  <div class="visual-item">
    <strong>OCR-Wert</strong>
    <span>Er legt fest, bis zu welchem Zählerstand gezählt wird, bevor das nächste Ereignis entsteht.</span>
  </div>
</div>

## Mini-Demo: 1 ms als ruhige Zeitbasis

```text
F_CPU = 16 MHz
Prescaler = 64
Timer-Takt = 16 000 000 / 64 = 250 000 Hz
1 Tick = 4 µs
Für 1 ms braucht man 250 Ticks
OCR = 249
```

Die ruhige Lesart ist:

- Der Prescaler macht aus dem Systemtakt einen Timer-Takt.
- Jeder Tick hat eine feste Dauer.
- Der OCR-Wert legt fest, nach wie vielen Ticks das nächste Ereignis kommt.

## Warum CTC oft ruhiger ist als Overflow

<div class="compare-card">
  <p class="card-kicker">Zeitbasis denken</p>
  <h3>Überlauf und CTC sind nicht dieselbe Geschichte</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Overflow-Denken</strong>
      <span>Der Timer läuft bis zum Maximalwert und kippt dann um.</span>
    </div>
    <div class="compare-item">
      <strong>CTC-Denken</strong>
      <span>Der Timer endet gezielt am Vergleichswert und erzeugt dort eine periodische Marke.</span>
    </div>
  </div>
</div>

Gerade für feste Intervalle ist CTC oft ruhiger, weil der Endpunkt direkt gewählt wird und nicht aus einem Vollüberlauf hergeleitet werden muss.

## Typischer Codeblick

```c
TCCR0A = (1 << WGM01);
TCCR0B = (1 << CS01) | (1 << CS00);
OCR0A = 249;
```

Das bedeutet grob:

- WGM setzt den CTC-Modus,
- CS legt den Prescaler fest,
- OCR0A definiert den Vergleichswert.

## Eine ruhige Prüfstrategie

1. Welche Periodendauer wird gebraucht?
2. Welcher Timer-Takt entsteht aus `F_CPU` und Prescaler?
3. Wie viele Ticks passen in das gewünschte Intervall?
4. Welcher OCR-Wert ergibt daraus den gewünschten Compare Match?

<div class="note-panel">
  <p><strong>Merke:</strong> CTC ist keine bloße Timer-Variante, sondern eine ruhige Methode, aus dem AVR eine feste periodische Zeitbasis abzuleiten.</p>
</div>
