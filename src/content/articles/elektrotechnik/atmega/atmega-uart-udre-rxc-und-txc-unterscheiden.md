---
title: ATmega – UDRE, RXC und TXC unterscheiden
description: Verstehe, welche UART-Statusflags beim AVR Senden und Empfangen wirklich beschreiben und warum sie nicht dieselbe Frage beantworten.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-kommunikation
  - atmega-uart-udre-rxc-und-txc-unterscheiden
learningGoals:
  - Du erklärst die Rollen von UDRE, RXC und TXC am AVR.
  - Du unterscheidest Datenregister leer, Zeichen empfangen und Übertragung vollständig beendet sauber.
  - Du liest UART-Statusflags eher als Ablaufmarken statt nur als Bitnamen.
practiceIdeas:
  - Vergleiche den Moment vor dem Schreiben, nach dem Empfang und nach dem vollständigen Senden.
  - Ordne typische Polling-Schleifen dem passenden UART-Flag zu.
  - Prüfe bei seriellen Routinen, welche Frage das jeweilige Flag wirklich beantwortet.
commonMistakes:
  - UDRE und TXC gleichzusetzen.
  - RXC als allgemeines „UART läuft“-Signal zu lesen.
  - Zu früh von vollständiger Übertragung zu sprechen, obwohl nur das Datenregister leer ist.
keyTakeaways:
  - UDRE zeigt, dass das UDR-Register neu beschrieben werden darf.
  - RXC zeigt, dass ein empfangenes Zeichen im Datenregister bereitliegt.
  - TXC beschreibt erst das Ende der tatsächlichen Übertragung auf der Leitung.
recognizeSignals:
  - Es geht um UCSRnA, Statusflags oder Polling bei der UART.
  - Du sollst erklären, warum man für Senden und Empfangen unterschiedliche Bits beobachtet.
  - In Aufgaben wird zwischen „schreiben dürfen“ und „wirklich fertig gesendet“ unterschieden.
selfCheckPoints:
  - Kann ich UDRE und TXC sauber trennen?
  - Kann ich sagen, wann RXC gesetzt wird?
  - Kann ich die drei Flags als unterschiedliche Ablaufpunkte beschreiben?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - uart
  - statusflags
level: mittel
draft: false
---

## Grundidee

Bei der UART reichen Begriffe wie „fertig“ oder „bereit“ oft nicht aus. Der AVR unterscheidet sauber, **welcher Teil des Ablaufs** gerade gemeint ist. Genau dafür sind die drei Statusflags **UDRE**, **RXC** und **TXC** wichtig.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Zeichen senden und auf Antwort warten</h3>
  <p>Ein Controller soll ein Zeichen senden und danach auf ein empfangenes Byte reagieren. Dafür braucht er nicht ein einziges „UART-ist-gut“-Bit, sondern verschiedene Marker: Darf ich neu in das Datenregister schreiben? Liegt schon ein empfangenes Zeichen vor? Ist die Übertragung auf der Leitung wirklich komplett abgeschlossen?</p>
</div>

## Drei Fragen statt ein Sammelgefühl

<div class="visual-grid">
  <div class="visual-item">
    <strong>UDRE</strong>
    <span>Ist das UART-Datenregister frei, sodass das nächste Byte hineingeschrieben werden darf?</span>
  </div>
  <div class="visual-item">
    <strong>RXC</strong>
    <span>Liegt ein empfangenes Byte zum Lesen bereit?</span>
  </div>
  <div class="visual-item">
    <strong>TXC</strong>
    <span>Ist die Übertragung des letzten Zeichens auf der Leitung wirklich beendet?</span>
  </div>
</div>

## Der Ablauf in ruhigen Schritten

<div class="figure-card">
  <p class="card-kicker">Ablaufbild</p>
  <h3>Schreiben dürfen ist noch nicht dasselbe wie vollständig gesendet haben</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>UDRE gesetzt</strong><span>Das UDR-Register darf neu beschrieben werden.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Byte wird übertragen</strong><span>Das Zeichen wandert bitweise über die Leitung.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>TXC gesetzt</strong><span>Erst jetzt ist die Sendung auf der Leitung vollständig abgeschlossen.</span></div>
  </div>
</div>

## Mini-Demo: dieselbe UART, drei unterschiedliche Zustände

```c
while (!(UCSR0A & (1 << UDRE0))) {
}
UDR0 = daten;

while (!(UCSR0A & (1 << RXC0))) {
}
antwort = UDR0;
```

Die ruhige Lesart ist:

- auf **UDRE** warten, wenn ein neues Byte geschrieben werden soll,
- auf **RXC** warten, wenn ein empfangenes Byte gelesen werden soll,
- und **TXC** nur dann prüfen, wenn wirklich das Ende der Übertragung auf der Leitung wichtig ist.

## UDRE und TXC nicht vermischen

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Beides klingt nach „fertig“, meint aber etwas anderes</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>UDRE</strong>
      <span>Das Register kann neu beschrieben werden. Das ist eine Aussage über den nächsten Schreibschritt.</span>
    </div>
    <div class="compare-item">
      <strong>TXC</strong>
      <span>Die aktuelle Übertragung ist auf der Leitung vollständig vorbei. Das ist eine Aussage über das Ende des Sendevorgangs.</span>
    </div>
  </div>
</div>

Gerade bei Halbduplex-Situationen oder Richtungsumschaltung wird dieser Unterschied wichtig. Wer dort nur „irgendein Sendeflag“ liest, vertauscht leicht Registerzustand und Leitungszustand.

## RXC ist die Empfängerfrage

**RXC** gehört auf die Empfängerseite. Es beantwortet die Frage:

> Liegt schon ein Byte zum Lesen vor?

Es beschreibt nicht, dass die UART „allgemein aktiv“ ist, sondern ganz konkret: Das Datenregister enthält ein empfangenes Zeichen.

```c
if (UCSR0A & (1 << RXC0)) {
    daten = UDR0;
}
```

## Drei typische Denkfehler

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Fehler 1</p>
    <h3>„UDRE heißt Senden fertig“</h3>
    <p>Nein. Es heißt nur, dass das Register wieder neu beschrieben werden darf.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 2</p>
    <h3>„RXC sagt, dass die UART arbeitet“</h3>
    <p>Nein. RXC zeigt konkret ein bereitliegendes empfangenes Byte an.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 3</p>
    <h3>„TXC ist immer das wichtigste Sendeflag“</h3>
    <p>Nur dann, wenn das wirkliche Leitungsende wichtig ist. Für das nächste Schreiben ist oft UDRE die passendere Frage.</p>
  </section>
</div>

## Mini-Prüfbild für den Kopf

<pre><code>Ich will ein neues Byte schreiben         → UDRE
Ich will ein empfangenes Byte lesen       → RXC
Ich brauche das echte Leitungsende        → TXC</code></pre>

## Eine ruhige Prüfstrategie

1. Geht es um **Senden** oder **Empfangen**?
2. Willst du **neu schreiben dürfen** oder das **wirkliche Ende** kennen?
3. Geht es um das **Register** oder um die **Leitung**?
4. Erst danach das passende Flag auswählen.

<div class="note-panel">
  <p><strong>Merke:</strong> UDRE, RXC und TXC sind keine austauschbaren „UART-ist-bereit“-Bits. Sie markieren drei verschiedene Ablaufpunkte.</p>
</div>
