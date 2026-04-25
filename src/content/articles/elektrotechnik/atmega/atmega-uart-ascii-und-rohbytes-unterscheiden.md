---
title: ATmega – UART, ASCII und Rohbytes unterscheiden
description: Verstehe, warum der AVR über UART zunächst nur Bytes überträgt und warum lesbarer Text erst durch eine vereinbarte Darstellung entsteht.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-kommunikation
  - atmega-uart-ascii-und-rohbytes-unterscheiden
learningGoals:
  - Du erklärst den Unterschied zwischen Rohbytes und ASCII-Text bei UART.
  - Du beschreibst, warum dieselbe UART-Verbindung einmal lesbaren Text und ein anderes Mal nur Zahlenwerte übertragen kann.
  - Du liest serielle Daten ruhiger als Datenrahmen und Darstellung statt nur als sichtbare Zeichenfolge.
practiceIdeas:
  - Vergleiche die Übertragung eines Messwerts als Zahlencode und als lesbare Zeichenfolge.
  - Prüfe bei UART-Ausgabe, ob Rohwerte oder Textformate gesendet werden.
  - Lies denselben Bytewert einmal als Zahl und einmal als ASCII-Zeichen.
commonMistakes:
  - UART automatisch mit „Textübertragung“ gleichzusetzen.
  - Zu denken, dass ein Byte immer schon ein sichtbares Zeichen sein muss.
  - Messwerte und Textdarstellung nicht sauber zu trennen.
keyTakeaways:
  - UART überträgt zuerst nur Bytes.
  - Ob diese Bytes als ASCII-Text erscheinen, hängt von der vereinbarten Darstellung ab.
  - Lesbarer Text ist eine Interpretation der Bytefolge, nicht die UART selbst.
recognizeSignals:
  - Es geht um serielle Monitor-Ausgabe, Bytes, ASCII, Parser oder die Frage, warum Zeichen lesbar oder unlesbar wirken.
  - Du sollst erklären, ob ein Wert als Rohdaten oder als Text übertragen wird.
  - In Aufgaben zählt die Trennung von Bytewert und Textdarstellung mehr als die UART-Hardware selbst.
selfCheckPoints:
  - Kann ich Bytewert und ASCII-Zeichen sauber unterscheiden?
  - Kann ich erklären, warum dieselbe UART-Verbindung Zahlen und Text gleichermaßen transportieren kann?
  - Kann ich serielle Ausgabe als Darstellung statt als reine Leitungseigenschaft lesen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - uart
  - ascii
level: einfach
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
