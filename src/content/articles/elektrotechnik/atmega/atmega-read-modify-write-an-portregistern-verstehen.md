---
title: "ATmega – Read-Modify-Write an Portregistern verstehen"
description: "Verstehe, warum einzelne Bitänderungen an AVR-Registern oft als Lesen, gezieltes Ändern und Zurückschreiben gedacht werden müssen, damit andere Bits nicht versehentlich mitkippen."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-read-modify-write-an-portregistern-verstehen"]
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

An AVR-Registern wird oft nur **ein einzelnes Bit** geändert. Wer dann das ganze Register stumpf neu beschreibt, riskiert, dass andere Bits versehentlich mitgeändert werden. Genau deshalb ist die ruhige Denkweise oft:

1. aktuellen Registerzustand lesen,
2. gezielt nur das gewünschte Bit ändern,
3. Ergebnis zurückschreiben.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Nur eine LED soll umgeschaltet werden</h3>
  <p>Am selben Port hängen mehrere Pins mit unterschiedlichen Aufgaben. Wenn nur die LED an einem Pin gesetzt werden soll, wäre es fachlich unruhig, den gesamten Port pauschal neu zu beschreiben. Viel ruhiger ist es, nur das betroffene Bit gezielt zu verändern.</p>
</div>

## Komplettzuweisung gegen gezielte Änderung

<div class="compare-card">
  <p class="card-kicker">Registerlogik</p>
  <h3>Neue Gesamtsituation oder kleine gezielte Änderung?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Komplettzuweisung</strong>
      <span>Kann sinnvoll sein, wenn wirklich der ganze Registerzustand bewusst neu festgelegt wird.</span>
    </div>
    <div class="compare-item">
      <strong>Read-Modify-Write</strong>
      <span>Ist ruhiger, wenn nur ein Bit geändert werden soll und die übrigen Zustände erhalten bleiben müssen.</span>
    </div>
  </div>
</div>

## Mini-Demo: warum der Unterschied praktisch zählt

```c
PORTB = (1 << PB0);
```

Diese Zeile setzt nicht nur PB0, sondern beschreibt den gesamten Portzustand neu.

```c
PORTB |= (1 << PB0);
```

Diese Zeile beschreibt ruhiger: PB0 setzen, andere Bits erhalten.

## Was „Read-Modify-Write“ fachlich meint

- **Read**: Welcher Zustand liegt schon vor?
- **Modify**: Welches einzelne Bit soll sich ändern?
- **Write**: Der angepasste Zustand wird zurückgeschrieben.

Genau dieses Denken verhindert, dass eine kleine Absicht versehentlich einen großen Seiteneffekt bekommt.

## Eine ruhige Prüfstrategie

1. Soll wirklich das ganze Register neu festgelegt werden?
2. Oder soll nur ein einzelnes Bit geändert werden?
3. Welche Bits müssen ausdrücklich unverändert bleiben?
4. Ist eine Bitmaske deshalb die ruhigere Form?

<div class="note-panel">
  <p><strong>Merke:</strong> Read-Modify-Write ist am AVR keine bloße Stilfrage. Es ist oft die ruhigere Denkweise, wenn nur ein einzelnes Bit geändert werden soll und andere Bits geschützt bleiben müssen.</p>
</div>
