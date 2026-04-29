---
title: "ATmega – Overflow-Flag und Overflow-Interrupt unterscheiden"
description: "Verstehe, warum ein Overflow-Flag nur einen Zustand markiert, während ein Overflow-Interrupt daraus eine Ereignisreaktion macht."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-overflow-flag-und-overflow-interrupt-unterscheiden"]
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

Wenn ein Timer überläuft, passiert zuerst einmal nur ein **Ereignis im Hardware-Modul**. Dieses Ereignis kann als **Flag** sichtbar werden. Erst wenn zusätzlich ein passender Interrupt freigegeben ist, wird daraus eine automatische **Ereignisreaktion** per ISR.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Der gleiche Timer-Überlauf, zwei völlig unterschiedliche Lesarten</h3>
  <p>Einmal läuft die Hauptschleife und fragt regelmäßig nach, ob das Overflow-Flag gesetzt ist. Ein anderes Mal sorgt derselbe Überlauf dafür, dass sofort eine ISR aufgerufen wird. Das Hardware-Ereignis ist gleich – aber die Software-Struktur ist eine andere.</p>
</div>

## Zwei Ebenen sauber trennen

<div class="compare-card">
  <p class="card-kicker">Zustand und Reaktion</p>
  <h3>Dasselbe Ereignis, aber nicht dieselbe Ebene</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Overflow-Flag</strong>
      <span>Markiert, dass ein Überlauf stattgefunden hat.</span>
    </div>
    <div class="compare-item">
      <strong>Overflow-Interrupt</strong>
      <span>Nutzen dieses Ereignis für eine automatische Reaktion per ISR.</span>
    </div>
  </div>
</div>

## Mini-Demo: pollen oder reagieren?

```c
if (TIFR0 & (1 << TOV0)) {
    TIFR0 |= (1 << TOV0);
    // Ereignis in der Hauptschleife behandeln
}
```

```c
TIMSK0 |= (1 << TOIE0);
ISR(TIMER0_OVF_vect) {
    // Ereignis automatisch behandeln
}
```

Die ruhige Lesart ist:

- Im ersten Fall bleibt die Hauptschleife zuständig und fragt das Flag ab.
- Im zweiten Fall wird aus demselben Ereignis eine Interrupt-Reaktion.

## Warum das didaktisch wichtig ist

Viele Lernende sagen vorschnell: „Der Timer hat einen Interrupt.“ Fachlich ruhiger ist:

1. Der Timer erzeugt ein Ereignis.
2. Dieses Ereignis kann ein Flag setzen.
3. Wenn Freigaben passen, kann daraus zusätzlich ein Interrupt werden.

## Eine ruhige Prüfstrategie

1. Welches Hardware-Ereignis tritt ein?
2. Welches Flag markiert dieses Ereignis?
3. Wird das Flag nur abgefragt oder löst es eine ISR aus?
4. Welche Struktur passt zur Aufgabe ruhiger: Polling oder Interrupt?

<div class="note-panel">
  <p><strong>Merke:</strong> Das Flag sagt zuerst nur „Es ist passiert“. Der Interrupt macht daraus erst eine automatische Reaktion.</p>
</div>
