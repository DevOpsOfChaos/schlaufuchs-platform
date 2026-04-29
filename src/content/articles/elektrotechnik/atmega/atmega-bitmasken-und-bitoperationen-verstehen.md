---
title: "ATmega – Bitmasken und Bitoperationen verstehen"
description: "Verstehe, wie einzelne Bits in AVR-Registern gezielt gesetzt, gelöscht oder geprüft werden, ohne andere Bits versehentlich mitzuverändern."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-bitmasken-und-bitoperationen-verstehen"]
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
Bei AVR-Mikrocontrollern stehen in einem Register oft mehrere Funktionen gleichzeitig nebeneinander. Genau deshalb reicht es selten, einfach „eine Zahl ins Register zu schreiben“. Meist soll **nur ein einzelnes Bit** gesetzt, gelöscht oder geprüft werden, während die übrigen Bits unverändert bleiben.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine LED an PB0 einschalten, ohne andere Portbits zu beschädigen</h3>
  <p>Wenn an einem Port mehrere Pins für verschiedene Aufgaben benutzt werden, wäre eine komplette Neuzuweisung oft unruhig. Ruhiger ist es, nur das Bit für PB0 zu setzen. Genau dafür braucht man Bitmasken und Bitoperationen.</p>
</div>

## Drei Grundhandlungen an einem Bit

<div class="visual-grid">
  <div class="visual-item">
    <strong>Bit setzen</strong>
    <span>Ein einzelnes Bit soll sicher auf 1 gehen, ohne andere Bits zu verändern.</span>
  </div>
  <div class="visual-item">
    <strong>Bit löschen</strong>
    <span>Ein einzelnes Bit soll sicher auf 0 gehen, ohne Nachbarbits anzutasten.</span>
  </div>
  <div class="visual-item">
    <strong>Bit prüfen</strong>
    <span>Ein Bit wird gelesen, um den Zustand eines Pins oder einer Funktion zu beurteilen.</span>
  </div>
</div>

## Die typische Maske beim AVR

```c
(1 << PB0)
```

Diese Schreibweise bedeutet: **Eine 1 wird an die Bitposition von PB0 geschoben.**  
Dadurch entsteht eine Maske, die genau dieses Bit adressiert.

## Mini-Demo: gleiche Registerbreite, andere Absicht

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Dasselbe Register, aber drei verschiedene Absichten</h3>
  <pre><code>PORTB |=  (1 << PB0);   // PB0 setzen
PORTB &= ~(1 << PB0);   // PB0 löschen
if (PINB & (1 << PB0))  // PB0 prüfen
</code></pre>
  <p>Die Registerbreite bleibt gleich. Geändert wird nur die Frage: soll das Bit gesetzt, gelöscht oder nur gelesen werden?</p>
</div>

## So liest du die Operatoren ruhig

<div class="compare-card">
  <p class="card-kicker">Bedeutung statt Symbol</p>
  <h3>Was die Zeichen im AVR-Alltag praktisch ausdrücken</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong><code>|=</code></strong>
      <span>Das adressierte Bit soll auf 1 gesetzt werden. Andere Bits dürfen bleiben, wie sie sind.</span>
    </div>
    <div class="compare-item">
      <strong><code>&= ~</code></strong>
      <span>Das adressierte Bit soll auf 0 gesetzt werden. Die invertierte Maske schützt die übrigen Bits.</span>
    </div>
    <div class="compare-item">
      <strong><code>&</code> in einer Prüfung</strong>
      <span>Hier wird gefragt, ob das adressierte Bit aktuell gesetzt ist.</span>
    </div>
  </div>
</div>

## Warum Komplettzuweisungen oft unruhig sind

```c
PORTB = (1 << PB0);
```

Diese Zeile kann zwar PB0 setzen, sie schreibt aber das ganze Register neu. Dadurch können andere Portbits verloren gehen, wenn dort bereits andere Zustände gebraucht werden. Ruhiger ist daher oft:

```c
PORTB |= (1 << PB0);
```

## Drei typische Fehlersätze ruhig korrigieren

<div class="compare-card">
  <p class="card-kicker">Fehlersprache</p>
  <h3>So wird aus Symbolcode eine saubere Registerlesart</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ungenau</strong>
      <span>„Da steht halt irgendein Bitcode.“</span>
    </div>
    <div class="compare-item">
      <strong>Ruhig präzise</strong>
      <span>„Hier wird gezielt nur das Bit für PB0 verändert, die restlichen Bits bleiben erhalten.“</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Register erkennen</strong>
    <span>Welches Register ist gemeint: Richtung, Ausgang oder Eingang?</span>
  </div>
  <div class="step-item">
    <strong>2. Bitposition erkennen</strong>
    <span>Welches einzelne Bit wird mit der Maske adressiert?</span>
  </div>
  <div class="step-item">
    <strong>3. Absicht erkennen</strong>
    <span>Soll das Bit gesetzt, gelöscht oder nur geprüft werden?</span>
  </div>
  <div class="step-item">
    <strong>4. Nebeneffekt prüfen</strong>
    <span>Bleiben die übrigen Bits in Ruhe oder wird das ganze Register unnötig überschrieben?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Gute AVR-Programmierung verändert Registerbits möglichst gezielt. Bitmasken sind genau dafür das ruhige Werkzeug.</p>
</div>
