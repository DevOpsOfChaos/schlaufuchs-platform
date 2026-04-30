---
title: "ATmega – Pin-Change-Masken und PCMSK verstehen"
description: "Verstehe, warum Pin-Change-Interrupts am AVR nicht nur über die Gruppe, sondern zusätzlich über Masken auf einzelne Pins eingeschränkt werden."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-pin-change-masken-und-pcmsk-verstehen"]
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

Pin-Change-Interrupts wirken am AVR zunächst bequem: Ein Pegelwechsel an einem Pin kann eine Reaktion auslösen. In Wahrheit ist die Logik etwas feiner. Es reicht nicht, nur die **Gruppe** zu aktivieren. Zusätzlich muss über **PCMSK** festgelegt werden, **welche Pins innerhalb dieser Gruppe** überhaupt beachtet werden sollen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Taster hängen in derselben Gruppe</h3>
  <p>Ein AVR hat mehrere Eingänge in derselben Pin-Change-Gruppe. Nur einer davon soll aktuell eine ISR auslösen. Dann reicht es nicht, einfach nur die ganze Gruppe freizuschalten. Erst die passende Maske sorgt dafür, dass nur der gewünschte Pin wirklich in die Auswertung eingeht.</p>
</div>

## Zweistufig denken

<div class="visual-grid">
  <div class="visual-item">
    <strong>Gruppenfreigabe</strong>
    <span>Im PCICR wird der gesamte Pin-Change-Bereich grundsätzlich aktiviert.</span>
  </div>
  <div class="visual-item">
    <strong>Pinmaske</strong>
    <span>Im passenden PCMSK-Register wird festgelegt, welche einzelnen Pins in dieser Gruppe relevant sind.</span>
  </div>
</div>

## Das ruhige Denkbild

<div class="figure-card">
  <p class="card-kicker">Freigabelogik</p>
  <h3>Erst Bereich, dann Einzelpin</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>PCICR</strong><span>Schaltet eine Pin-Change-Gruppe grundsätzlich frei.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>PCMSK</strong><span>Wählt innerhalb dieser Gruppe die relevanten Pins aus.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>ISR-Reaktion</strong><span>Nur passende Änderungen sollen wirklich eine Reaktion auslösen.</span></div>
  </div>
</div>

## Warum das didaktisch wichtig ist

Ohne diese Trennung wäre die Gefahr groß, dass gleich alle Pins eines Bereichs ungewollt als Interruptquelle mitlaufen. Gerade bei mehreren Tastern, Sensoren oder Nebenfunktionen am selben Port wird die Pinmaske zur eigentlichen Feinauswahl.

```c
PCICR |= (1 << PCIE1);
PCMSK1 |= (1 << PCINT9);
```

Die ruhige Lesart ist:

- **PCICR** schaltet die Gruppe ein,
- **PCMSK1** legt fest, welcher Pin in dieser Gruppe beobachtet wird.

## Gruppenfreigabe und Pinfreigabe nicht verwechseln

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Bereich aktiv heißt noch nicht: jeder Pin ist gemeint</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Nur Gruppe freigegeben</strong>
      <span>Der Bereich ist grundsätzlich aktiv, aber die eigentliche Pin-Auswahl ist noch nicht vollständig erklärt.</span>
    </div>
    <div class="compare-item">
      <strong>Gruppe plus Maske</strong>
      <span>Jetzt ist fachlich klar, welche Pins innerhalb des Bereichs tatsächlich beachtet werden.</span>
    </div>
  </div>
</div>

## Externer Interrupt ist nicht dasselbe

## Drei typische Denkfehler

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Fehler 1</p>
    <h3>„PCICR reicht schon“</h3>
    <p>Nein. Ohne passende Maske ist die eigentliche Pin-Auswahl nicht sauber beschrieben.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 2</p>
    <h3>„PCMSK ist nur Feinschliff“</h3>
    <p>Nein. PCMSK ist didaktisch die entscheidende Ebene für die Pin-Auswahl innerhalb der Gruppe.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 3</p>
    <h3>„Pin-Change ist wie externer Interrupt“</h3>
    <p>Nein. Beides reagiert auf Signaländerungen, aber nicht mit derselben Auswahl- und Freigabelogik.</p>
  </section>
</div>

## Mini-Prüfbild für den Kopf

<pre><code>Welche Gruppe soll grundsätzlich reagieren?     → PCICR
Welche Pins in dieser Gruppe sollen zählen?     → PCMSK
Welche ISR soll dann ausgelöst werden?          → Reaktion sauber zuordnen</code></pre>

## Eine ruhige Prüfstrategie

1. Welche Pin-Change-Gruppe ist überhaupt gemeint?
2. Welche Pins dieser Gruppe sollen wirklich auslösen dürfen?
3. Ist die eigentliche Pinmaske gesetzt?
4. Erst danach die ISR-Reaktion interpretieren.

<div class="note-panel">
  <p><strong>Merke:</strong> Pin-Change-Interrupts am AVR werden zweistufig freigegeben: erst der Bereich, dann die eigentlichen Pins.</p>
</div>
