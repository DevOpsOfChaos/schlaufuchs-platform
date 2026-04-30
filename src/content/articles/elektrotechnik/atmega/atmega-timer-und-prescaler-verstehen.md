---
title: "ATmega – Timer und Prescaler verstehen"
description: "Verstehe, warum ein Timer nicht direkt „Sekunden zählt“, sondern Taktsignale mit Prescaler und Zählerstand in eine Zeitbasis übersetzt."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-timer-und-prescaler-verstehen"]
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
AVR-Timer zählen nicht „Sekunden“, sondern Taktimpulse. Ein Prescaler teilt den eingehenden Takt herunter, bevor der Timer zählt. Genau diese Logik ist die Grundlage für Überläufe, Compare-Matches und einfache Zeitbasen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine LED soll in ruhigem Takt blinken</h3>
  <p>Die LED soll nicht in CPU-Geschwindigkeit flackern, sondern in gut sichtbaren Abständen reagieren. Dafür muss der Mikrocontroller aus einem schnellen Systemtakt erst eine langsamere Zeitbasis machen. Genau das ist die ruhige Grundidee hinter Timer und Prescaler.</p>
</div>

## Timer zuerst als Zähler lesen

Ein Timer ist zunächst kein „Uhrmodul“, sondern ein Zähler, der mit jedem passenden Taktimpuls weiterzählt.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Takt</strong>
    <span>Die CPU oder das Peripheriesystem liefert ein schnelles periodisches Signal.</span>
  </div>
  <div class="visual-item">
    <strong>Prescaler</strong>
    <span>Teilt dieses Signal herunter, damit der Timer langsamer zählt.</span>
  </div>
  <div class="visual-item">
    <strong>Timerzähler</strong>
    <span>Zählt die ankommenden Ereignisse bis zu einem Grenzwert oder Überlauf.</span>
  </div>
</div>

## Mini-Demo: derselbe Takt, anderer Prescaler

Angenommen, der Mikrocontroller läuft mit `16 MHz` und ein 8-Bit-Timer zählt von 0 bis 255.

<pre><code>ohne Prescaler      → 16 000 000 Zählschritte pro Sekunde
mit Prescaler 64    → 250 000 Zählschritte pro Sekunde
mit Prescaler 1024  → 15 625 Zählschritte pro Sekunde</code></pre>

Schon hier wird sichtbar: Nicht der Timer „entscheidet Zeit“, sondern das Zusammenspiel aus Systemtakt und Prescaler.

## Der Zahlenblick zum Überlauf

Bei `16 MHz` und Prescaler `64` gilt:

```text
Timer-Takt = 16 000 000 / 64 = 250 000 Hz
Ein Zählschritt dauert = 1 / 250 000 s = 4 µs
8-Bit-Überlaufzeit = 256 × 4 µs = 1024 µs = 1,024 ms
```

Die ruhige Schlussfolgerung lautet:

- der Timer läuft jetzt in **1,024 ms pro Überlauf**,
- eine Blinklogik über Timerereignisse ist damit viel ruhiger planbar.

## Was der Prescaler fachlich wirklich tut

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Prescaler ist keine Pause, sondern Taktteilung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Zu grob gedacht</strong>
      <span>„Der Prescaler macht eine Wartezeit.“</span>
    </div>
    <div class="compare-item">
      <strong>Ruhig fachlich</strong>
      <span>„Der Prescaler teilt den Eingangstakt herunter, sodass der Timer weniger Zählschritte pro Sekunde bekommt.“</span>
    </div>
  </div>
</div>

## Mini-Codebild

```c
TCCR0B |= (1 << CS01) | (1 << CS00); // Prescaler 64
```

Die Registerbits wählen hier nicht „eine Zeit“, sondern erst einmal eine **Taktteilung**. Die reale Zeit ergibt sich dann aus:

- CPU-Takt,
- gewähltem Prescaler,
- Breite des Timers,
- und eventuell zusätzlicher Logik wie Compare-Match oder Softwarezähler.

## Eine ruhige Prüfstrategie

1. Welcher CPU- oder Peripherietakt liegt an?
2. Welcher Prescaler ist gewählt?
3. Wie viele Zählschritte sind bis zum Ereignis nötig?
4. Erst dann in Millisekunden oder Mikrosekunden übersetzen.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Timer zählt Taktimpulse. Erst mit dem Prescaler und der Zählerbreite wird daraus eine verständliche Zeitbasis.</p>
</div>


