---
title: ATmega – UART-Ringpuffer beim Empfang verstehen
description: Verstehe, warum empfangene UART-Zeichen am AVR oft nicht sofort vollständig verarbeitet, sondern zunächst in einem Ringpuffer gesammelt werden.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - uart-und-serielle-schnittstellen
  - atmega-uart-ringpuffer-beim-empfang-verstehen
learningGoals:
  - Du erklärst die Grundidee eines Ringpuffers beim UART-Empfang.
  - Du unterscheidest Zeichenankunft, Zwischenspeicherung und spätere Auswertung sauber.
  - Du liest Ringpuffer eher als Struktur für Reaktivität als als bloße Index-Tricks.
practiceIdeas:
  - Verfolge mehrere nacheinander eintreffende Zeichen gedanklich in einen Puffer.
  - Prüfe, warum sofortiges Verarbeiten in der ISR oft unruhiger ist als Zwischenspeichern.
  - Erkläre Kopf- und Ende-Index zuerst als Rollen und erst danach als Variablen.
commonMistakes:
  - Zu denken, jedes empfangene Zeichen müsse vollständig in der ISR verarbeitet werden.
  - Ringpuffer nur als komplizierte Speicherübung statt als Reaktivitätswerkzeug zu sehen.
  - Kopf und Ende zu vertauschen oder den Puffer nur als lineare Liste zu lesen.
keyTakeaways:
  - Ein Ringpuffer sammelt eingehende UART-Zeichen zwischen.
  - Die ISR kann dadurch kurz bleiben und nur den Empfang sichern.
  - Die eigentliche Auswertung kann später ruhiger in der Hauptschleife erfolgen.
recognizeSignals:
  - Es geht um mehrere schnelle UART-Zeichen, Empfangs-ISR oder Zeichen, die sonst verloren gehen könnten.
  - Du sollst erklären, warum Zwischenspeicherung die Hauptlogik entlastet.
  - In Aufgaben sind Rollen wie Puffer, Schreibposition und Leseposition wichtiger als die konkrete Zahl.
selfCheckPoints:
  - Kann ich erklären, warum ein Ringpuffer am UART nützlich ist?
  - Kann ich Kopf und Ende als unterschiedliche Rollen benennen?
  - Kann ich beschreiben, warum die ISR dadurch kürzer bleiben kann?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - uart
  - puffer
level: fortgeschritten
draft: false
---

## Grundidee

Ein UART-Zeichen kommt oft zu einem Zeitpunkt an, an dem die Hauptschleife gerade etwas anderes tut. Würde man jedes Zeichen sofort vollständig verarbeiten, würde die Struktur leicht unruhig. Genau deshalb ist ein **Ringpuffer** ein typisches AVR-Denkmodell:

- die ISR **sichert** das eingehende Zeichen,
- die Hauptschleife **wertet später ruhiger aus**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Zeichen kommen schnell hintereinander</h3>
  <p>Ein AVR empfängt nacheinander die Zeichen <code>A</code>, <code>B</code> und <code>C</code>. Wenn die Hauptschleife gerade noch mit anderer Logik beschäftigt ist, wäre es unruhig, jedes Zeichen sofort komplett auszuwerten. Ein Ringpuffer hält die Zeichen erst einmal geordnet fest.</p>
</div>

## Drei Rollen statt nur ein Array

<div class="visual-grid">
  <div class="visual-item">
    <strong>Puffer</strong>
    <span>Speichert die Zeichen zwischen, bis sie ruhiger weiterverarbeitet werden.</span>
  </div>
  <div class="visual-item">
    <strong>Schreibposition</strong>
    <span>Zeigt, wo das nächste empfangene Zeichen eingetragen wird.</span>
  </div>
  <div class="visual-item">
    <strong>Leseposition</strong>
    <span>Zeigt, welches Zeichen die Hauptschleife als Nächstes auswertet.</span>
  </div>
</div>

## Mini-Demo: warum „Ring“?

<pre><code>Puffergröße 4
Schreibposition: 0 → 1 → 2 → 3 → wieder 0
Leseposition:     folgt unabhängig nach, sobald ausgewertet wird</code></pre>

Der Puffer wird also nicht immer länger, sondern die Positionen laufen im Kreis.

## Warum das die ISR ruhiger hält

<div class="compare-card">
  <p class="card-kicker">Strukturvergleich</p>
  <h3>Sofort alles verarbeiten oder nur ruhig sichern?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Viel Arbeit in der ISR</strong>
      <span>Die ISR wird lang, unruhig und blockiert unnötig andere Ereignisse.</span>
    </div>
    <div class="compare-item">
      <strong>Zeichen in Puffer legen</strong>
      <span>Die ISR bleibt kurz. Die eigentliche Auswertung passiert später ruhiger in der Hauptschleife.</span>
    </div>
  </div>
</div>

## Ein sehr grobes Denkbild

```c
ISR(USART_RX_vect) {
  puffer[head] = UDR0;
  head = naechste_position;
}
```

Das ist fachlich noch kein fertiger Treiber, zeigt aber die Kernidee: **Empfang sichern, nicht alles sofort auswerten.**

## Eine ruhige Prüfstrategie

1. Kommen Zeichen schneller an, als die Hauptschleife sie immer sofort komplett verarbeiten kann?
2. Soll die ISR bewusst kurz bleiben?
3. Welche Rolle hat die Schreibposition und welche die Leseposition?
4. Was passiert, wenn der Puffer voll wird?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein UART-Ringpuffer ist kein Selbstzweck. Er ist eine Struktur, die Empfang und spätere Verarbeitung am AVR ruhiger voneinander trennt.</p>
</div>
