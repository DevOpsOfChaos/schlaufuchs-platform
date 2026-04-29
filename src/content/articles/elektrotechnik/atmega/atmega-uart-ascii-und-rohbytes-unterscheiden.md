---
title: "ATmega – UART, ASCII und Rohbytes unterscheiden"
description: "Verstehe, warum der AVR über UART zunächst nur Bytes überträgt und warum lesbarer Text erst durch eine vereinbarte Darstellung entsteht."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-uart-ascii-und-rohbytes-unterscheiden"]
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
## Grundidee

Die UART selbst kennt erst einmal keine „lesbaren Wörter“. Sie überträgt **Bytes**. Ob diese Bytes im Terminal als Text erscheinen, hängt davon ab, **wie sie interpretiert werden**. Genau deshalb sollte man UART sauber als **Übertragung** und ASCII als **Darstellung** lesen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Die Zahl 65 kann sichtbar ein A werden</h3>
  <p>Wird über UART der Bytewert 65 übertragen, kann ein Terminal daraus den Buchstaben <code>A</code> machen – wenn ASCII als Darstellung gemeint ist. Derselbe Bytewert kann in einem anderen Zusammenhang aber auch einfach ein Messwert oder ein Binärdatenpaket sein.</p>
</div>

## Zwei Ebenen der seriellen Kommunikation

<div class="compare-card">
  <p class="card-kicker">Übertragung und Darstellung</p>
  <h3>Die Leitung transportiert Bytes, das Terminal zeigt Zeichen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>UART-Ebene</strong>
      <span>Die UART überträgt Byte für Byte über eine serielle Verbindung.</span>
    </div>
    <div class="compare-item">
      <strong>Darstellungsebene</strong>
      <span>ASCII oder ein anderes Format legt fest, wie diese Bytes sichtbar interpretiert werden.</span>
    </div>
  </div>
</div>

## Mini-Demo: derselbe Bytewert, zwei Lesarten

```text
Bytewert 65  -> als ASCII gelesen: 'A'
Bytewert 65  -> als Rohwert gelesen: 65
```

Die ruhige Lesart ist:

- Die UART hat in beiden Fällen denselben Bytewert transportiert.
- Erst die Darstellung macht daraus Buchstaben oder Zahlenwert.

## Warum das für Mikrocontroller wichtig ist

Wer Messdaten über UART sendet, muss sich entscheiden:

- Soll ein Mensch die Werte im Terminal lesen?
- Oder soll ein anderes Programm Rohbytes weiterverarbeiten?

Diese Frage ist nicht dieselbe wie „Funktioniert die UART?“, sondern eine Frage der **Datenrepräsentation**.

## Eine ruhige Prüfstrategie

1. Welche Bytewerte werden tatsächlich gesendet?
2. Sollen diese Bytes als Text gelesen werden?
3. Oder sind sie Rohdaten für eine weitere Verarbeitung?
4. Passt die gewählte Darstellung zur Aufgabe?

<div class="note-panel">
  <p><strong>Merke:</strong> UART überträgt Bytes. ASCII macht aus manchen Bytefolgen lesbaren Text. Text ist also eine Darstellung der Daten, nicht die UART selbst.</p>
</div>
