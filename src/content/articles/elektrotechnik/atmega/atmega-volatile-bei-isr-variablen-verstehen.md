---
title: "ATmega – volatile bei ISR-Variablen verstehen"
description: "Verstehe, warum gemeinsam genutzte Variablen zwischen Hauptprogramm und ISR am AVR oft als volatile markiert werden müssen."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-volatile-bei-isr-variablen-verstehen"]
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
Wenn Hauptprogramm und ISR dieselbe Variable benutzen, reicht die naive Lesart „Der Wert bleibt so, bis die nächste Zeile im Hauptprogramm ihn ändert“ oft nicht mehr. Eine ISR kann den Wert jederzeit durch ein Ereignis verändern. Genau dafür ist `volatile` bei AVR-Programmen ein wichtiges Grundwerkzeug.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Flag wird durch einen Interrupt gesetzt</h3>
  <p>Das Hauptprogramm wartet in einer Schleife auf ein Ereignis. Eine ISR setzt bei diesem Ereignis ein Flag von `0` auf `1`. Wenn diese Variable nicht als gemeinsam veränderbar gedacht wird, liest man den Code schnell zu ruhig und übersieht den eigentlichen Interrupt-Eingriff.</p>
</div>

## Die Grundfrage ist nicht nur „wo steht die Variable?“, sondern „wer darf sie ändern?“

<div class="visual-grid">
  <div class="visual-item">
    <strong>Nur Hauptprogramm</strong>
    <span>Dann bleibt die Änderung im normalen sichtbaren Ablauf.</span>
  </div>
  <div class="visual-item">
    <strong>ISR und Hauptprogramm</strong>
    <span>Dann kann sich der Wert auch durch ein Ereignis außerhalb des gerade sichtbaren Hauptcodes ändern.</span>
  </div>
</div>

## Mini-Demo: Warten auf ein Flag

```c
volatile uint8_t taste_gedrueckt = 0;

ISR(INT0_vect) {
  taste_gedrueckt = 1;
}

int main(void) {
  while (!taste_gedrueckt) {
    // warten
  }
}
```

Die ruhige Lesart ist:

- die ISR darf `taste_gedrueckt` ändern,
- das Hauptprogramm darf nicht so tun, als könnte dieser Wert nur im sichtbaren Hauptcode wechseln,
- `volatile` markiert genau diese externe Änderbarkeit aus Sicht des Hauptablaufs.

## Was volatile hier leistet – und was nicht

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Sichtbarkeit ja, Zauberlösung nein</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>volatile hilft</strong>
      <span>Es signalisiert, dass sich der Wert auch außerhalb des direkt sichtbaren Hauptcodes ändern kann.</span>
    </div>
    <div class="compare-item">
      <strong>volatile löst nicht alles</strong>
      <span>Es macht Zugriffe nicht automatisch atomar und ersetzt keine saubere Mehrbyte- oder Konsistenzstrategie.</span>
    </div>
  </div>
</div>

## Mini-Konsole im Kopf

<pre><code>Hauptprogramm liest Variable
→ Ereignis tritt auf
→ ISR ändert Variable
→ Hauptprogramm muss diese Änderung als echt möglichen Zustand mitdenken</code></pre>

Hier geht es zuerst um die ruhige Grundidee: Eine ISR kann einen Wert ändern, obwohl der normale Hauptablauf das gerade nicht „sichtbar“ tut. Mehrbyte-Zugriffe oder atomare Abschnitte bauen darauf auf und gehören auf eigene Vertiefungen.

## Eine ruhige Prüfstrategie

1. Wird die Variable in ISR und Hauptprogramm beide benutzt?
2. Kann sich der Wert durch ein Ereignis ändern, obwohl die Hauptschleife nur wartet?
3. Geht es gerade um Sichtbarkeit oder schon um Atomarität?
4. Erst danach das konkrete Schlüsselwort bewerten.

<div class="note-panel">
  <p><strong>Merke:</strong> `volatile` ist bei ISR-Variablen zuerst ein Hinweis auf externe Änderbarkeit. Es löst ein Sichtbarkeitsproblem, nicht automatisch jedes Nebenläufigkeitsproblem.</p>
</div>
