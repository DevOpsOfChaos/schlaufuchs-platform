---
title: "ATmega – SPI Master und Slave unterscheiden"
description: "Verstehe, warum bei SPI nicht einfach zwei gleiche Partner reden, sondern ein Gerät den Takt und den Ablauf vorgibt."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-spi-master-und-slave-unterscheiden"]
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
Bei SPI reden nicht einfach zwei gleichberechtigte Teilnehmer parallel los. Ruhiger ist die klare Rollenfrage: **Wer gibt den Takt und den Ablauf vor?** Genau dadurch entsteht die Trennung zwischen **Master** und **Slave**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein AVR liest einen externen ADC-Baustein aus</h3>
  <p>Der AVR möchte Daten von einem Messbaustein bekommen. Trotzdem beginnt der Ablauf beim AVR: Er wählt den Baustein aus, liefert den Takt und stößt damit die Übertragung an. Der ADC antwortet nicht „einfach irgendwann“, sondern im Takt des Masters.</p>
</div>

## Rollen statt Geräte merken

<div class="visual-grid">
  <div class="visual-item">
    <strong>Master</strong>
    <span>Gibt den Takt vor, wählt das Zielgerät aus und startet die Übertragung.</span>
  </div>
  <div class="visual-item">
    <strong>Slave</strong>
    <span>Reagiert auf die Auswahl und liefert oder übernimmt Daten im vorgegebenen Takt.</span>
  </div>
</div>

## Mini-Demo: derselbe Datenweg, aber mit klaren Rollen

<div class="figure-card">
  <p class="card-kicker">Systembild</p>
  <h3>Der Slave antwortet nicht frei, sondern innerhalb des vorgegebenen Takts</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Master wählt aus</strong><span>SS wird aktiv.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Master taktet</strong><span>SCK bestimmt den Bit-Rhythmus.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Master sendet</strong><span>Über MOSI läuft die Anfrage.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Slave antwortet</strong><span>Über MISO kommt die Rückinformation im selben Takt zurück.</span></div>
  </div>
</div>

## Warum diese Trennung didaktisch wichtig ist

Ein häufiger Denkfehler ist: „Wenn Daten in beide Richtungen fließen, sind beide Seiten doch gleich aktiv.“ Gerade bei SPI stimmt das nicht. Auch wenn MISO Rückdaten trägt, bleibt die Leitfrage:

**Wer bestimmt den Zeitpunkt und die Struktur der Übertragung?**

Die Antwort ist beim klassischen AVR-SPI-Fall: der Master.

## Kleiner Codeblick

```c
SPCR = (1 << SPE) | (1 << MSTR);
```

Die ruhige Lesart ist nicht nur „SPI an und irgendein Bit gesetzt“, sondern:

- SPI wird aktiviert,
- und der AVR wird bewusst in die Rolle des Masters gebracht.

## Master bedeutet nicht „nur senden“

Gerade im ADC- oder Speicherfall will der Master oft vor allem etwas **lesen**. Trotzdem bleibt er Master, weil er

- die Auswahlleitung setzt,
- den Takt vorgibt,
- und damit den Übertragungsrahmen steuert.

Der Master ist also nicht „das sendende Gerät“, sondern **das taktgebende und steuernde Gerät**.

## Eine ruhige Prüfstrategie

1. Wer wählt das Zielgerät aus?
2. Wer liefert den Takt?
3. Wer startet die Übertragung aktiv?
4. Wer antwortet innerhalb dieses vorgegebenen Ablaufs?

<div class="note-panel">
  <p><strong>Merke:</strong> Bei SPI bedeutet Master vor allem: Takt und Ablauf werden vorgegeben. Slave bedeutet: auf Auswahl und Takt reagieren.</p>
</div>
