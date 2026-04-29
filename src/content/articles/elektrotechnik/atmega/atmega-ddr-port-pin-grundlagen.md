---
title: "ATmega – DDR, PORT und PIN verstehen"
description: "Verstehe die drei Grundregister für digitale Ein- und Ausgänge am ATmega, damit du Pins nicht nur benutzt, sondern sauber liest."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-ddr-port-pin-grundlagen"]
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
Digitale I/O-Pins bei AVR-Mikrocontrollern werden im Grundfall über drei Register pro Port gesteuert: **DDRx**, **PORTx** und **PINx**. AVR-Ports bestehen typischerweise aus genau diesen drei Registern, wobei `DDRx` die Richtung, `PORTx` den Ausgangswert beziehungsweise Pull-up und `PINx` den gelesenen Pinzustand beschreibt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine LED an PB0 und ein Taster an PB1</h3>
  <p>PB0 soll eine LED steuern. PB1 soll einen Taster lesen. Schon an diesem kleinen Beispiel sieht man: Nicht jeder Pin macht dasselbe, und dieselbe Registerfamilie beschreibt unterschiedliche Rollen – Richtung, Ausgangszustand und gelesenen Eingang.</p>
</div>

## Die drei Register als ruhige Rollen lesen

<div class="visual-grid">
  <div class="visual-item">
    <strong>DDRx</strong>
    <span>Legt fest, ob ein Pin als Eingang oder Ausgang arbeitet.</span>
  </div>
  <div class="visual-item">
    <strong>PORTx</strong>
    <span>Setzt bei Ausgängen den Pegel und kann bei Eingängen den internen Pull-up aktivieren.</span>
  </div>
  <div class="visual-item">
    <strong>PINx</strong>
    <span>Liefert beim Lesen den aktuellen Zustand des Pins.</span>
  </div>
</div>

Microchip beschreibt diese Grundlogik ausdrücklich so: `DDxn = 1` konfiguriert einen Pin als Ausgang, `DDxn = 0` als Eingang. `PORTxn` setzt bei Ausgängen High oder Low; bei Eingängen schaltet `PORTxn = 1` den Pull-up ein. `PINxn` wird gelesen, um den Zustand des Pins abzufragen.

## Mini-Demo: dieselben Bits, andere Rollen

```c
DDRB  |= (1 << PB0);   // PB0 als Ausgang
DDRB  &= ~(1 << PB1);  // PB1 als Eingang
PORTB |= (1 << PB0);   // LED an PB0 auf High setzen
PORTB |= (1 << PB1);   // Pull-up an PB1 einschalten
```

Die ruhige Lesart ist:

- `DDRB |= (1 << PB0)` → PB0 wird Ausgang,
- `DDRB &= ~(1 << PB1)` → PB1 wird Eingang,
- `PORTB |= (1 << PB0)` → am Ausgang PB0 liegt High an,
- `PORTB |= (1 << PB1)` → am Eingang PB1 wird nicht „High ausgegeben“, sondern der Pull-up aktiviert.

## Warum PORT nicht nur „Ausgangsregister“ ist

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Dasselbe Register, aber nicht dieselbe Wirkung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Pin ist Ausgang</strong>
      <span>`PORTx` bestimmt, ob der Pin auf High oder Low getrieben wird.</span>
    </div>
    <div class="compare-item">
      <strong>Pin ist Eingang</strong>
      <span>`PORTx` aktiviert oder deaktiviert den Pull-up-Widerstand.</span>
    </div>
  </div>
</div>

Gerade diese Doppelfunktion ist eine der häufigsten Stolperstellen.

## Mini-Konsole im Kopf

<pre><code>DDRB Bit = 1   → Pin arbeitet als Ausgang
DDRB Bit = 0   → Pin arbeitet als Eingang
PORTB Bit = 1  → bei Ausgang: High / bei Eingang: Pull-up an
PORTB Bit = 0  → bei Ausgang: Low  / bei Eingang: Pull-up aus
PINB lesen     → aktuellen Zustand des Pins abfragen</code></pre>

## PIN ist zum Lesen da

```c
if (PINB & (1 << PB1)) {
  // PB1 wird gerade als logisch 1 gelesen
}
```

Hier wird nicht gesetzt, sondern abgefragt. `PINB` ist also die ruhige Antwort auf die Frage: **Was liegt gerade wirklich am Pin an?**

## Diese Seite behandelt bewusst Grund-I/O, nicht schon Timer oder Interrupts

Hier geht es nur um die **digitale Grundsteuerung von Pins**. Sobald Zeitbasis, Interruptquellen oder spezielle Peripherie dazukommen, beginnt eine andere Geschichte.

## Eine ruhige Prüfstrategie

1. Soll der Pin Eingang oder Ausgang sein?
2. Wird gerade ein Wert gesetzt oder ein Zustand gelesen?
3. Falls es ein Eingang ist: Geht es um echten Pegel oder um Pull-up-Aktivierung?
4. Erst danach den ganzen Codeblock bewerten.

<div class="note-panel">
  <p><strong>Merke:</strong> DDR bestimmt die Richtung, PORT bestimmt den Ausgangswert oder den Pull-up, und PIN wird gelesen, wenn du wissen willst, was am Pin gerade anliegt.</p>
</div>
