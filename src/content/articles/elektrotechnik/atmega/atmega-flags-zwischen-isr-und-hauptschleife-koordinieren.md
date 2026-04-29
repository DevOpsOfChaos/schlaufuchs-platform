---
title: "ATmega – Flags zwischen ISR und Hauptschleife koordinieren"
description: "Verstehe, warum viele AVR-Programme Ereignisse zuerst nur mit einem Flag markieren und die eigentliche Verarbeitung danach ruhiger in der Hauptschleife erledigen."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-flags-zwischen-isr-und-hauptschleife-koordinieren"]
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

Viele AVR-Ereignisse brauchen eine schnelle Reaktion, aber nicht sofort eine vollständige Verarbeitung. Genau deshalb ist ein typisches Muster:

- ISR merkt: **Ereignis ist passiert**
- Hauptschleife verarbeitet: **Was soll jetzt ruhig daraus folgen?**

Das Bindeglied dazwischen ist oft ein **Flag**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Timer-Ereignis soll später etwas im Hauptprogramm auslösen</h3>
  <p>Ein Timer läuft regelmäßig ab. Die ISR muss nicht sofort die ganze Anzeige umbauen, UART senden und Zustände ändern. Viel ruhiger ist es, nur ein Flag zu setzen und die eigentliche Arbeit danach bewusst in der Hauptschleife zu erledigen.</p>
</div>

## Warum Flags strukturell nützlich sind

<div class="compare-card">
  <p class="card-kicker">Aufgabentrennung</p>
  <h3>Kurze Markierung gegen lange ISR</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Lange ISR</strong>
      <span>Viel Fachlogik direkt im Ereignis. Das macht den Ablauf schnell unübersichtlich und schwerer steuerbar.</span>
    </div>
    <div class="compare-item">
      <strong>Flag plus Hauptschleife</strong>
      <span>Die ISR meldet nur den Auslöser. Die Hauptschleife verarbeitet später mit mehr Ruhe und Kontext.</span>
    </div>
  </div>
</div>

## Mini-Demo: Ereignis melden statt alles sofort tun

```c
volatile uint8_t uart_neu = 0;

ISR(USART_RX_vect) {
  uart_neu = 1;
}

int main(void) {
  while (1) {
    if (uart_neu) {
      uart_neu = 0;
      // ruhig weiterverarbeiten
    }
  }
}
```

Das Entscheidende ist hier nicht die konkrete Variable, sondern die Rollenverteilung:

- ISR markiert,
- Hauptschleife reagiert ausführlicher.

## Was ein Flag nicht ist

Ein Flag ist nicht bloß eine zufällige zusätzliche Variable. Es ist eine **Kommunikationsform zwischen zwei Programmbereichen**. Genau deshalb sollte man bei solchen Variablen ruhig fragen:

- Wer setzt das Flag?
- Wer löscht es wieder?
- Welche Arbeit wird dadurch bewusst verschoben?

## Eine ruhige Prüfstrategie

1. Was muss im Ereignis wirklich sofort passieren?
2. Welche Arbeit darf ruhiger später laufen?
3. Reicht dafür ein einfaches Flag?
4. Ist klar, wer das Flag setzt und wer es wieder verarbeitet?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Flag ist am AVR oft kein Beiwerk, sondern eine ruhige Strukturidee: Ereignis kurz markieren, Verarbeitung später sauber nachziehen.</p>
</div>
