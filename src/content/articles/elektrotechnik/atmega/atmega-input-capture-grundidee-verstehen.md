---
title: ATmega – Input Capture als Grundidee verstehen
description: Verstehe, wie ein AVR einen Timerstand genau beim Eintreffen eines Signals festhält und warum das für Zeitmessungen nützlich ist.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - timer-und-zeitbasis
  - atmega-input-capture-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee von Input Capture am AVR.
  - Du beschreibst, warum ein gespeicherter Timerstand für Zeitmessungen hilfreich ist.
  - Du liest Input Capture eher als Zeitmarke als als bloßes Interrupt-Ereignis.
practiceIdeas:
  - Vergleiche eine grobe Polling-Messung mit einer sauberen Zeitmarke durch Hardware.
  - Erkläre, warum die Flanke eines Signals als Messmoment wichtig ist.
  - Lies einen Capture-Wert als festgehaltenen Zeitpunkt im Timerlauf.
commonMistakes:
  - Input Capture mit gewöhnlichem Timerüberlauf zu verwechseln.
  - Zu denken, es gehe nur um irgendeinen Interrupt.
  - Den Capture-Wert nicht als Zeitmarke, sondern als beliebige Zahl zu lesen.
keyTakeaways:
  - Input Capture hält den Timerstand in genau dem Moment eines Signalereignisses fest.
  - Dadurch lassen sich Zeitabstände präziser bestimmen als mit grobem Nachsehen in Schleifen.
  - Der Capture-Wert ist fachlich eine gespeicherte Zeitmarke im laufenden Timer.
recognizeSignals:
  - Es geht um Flanken, Pulsbreite, Periodendauer oder Zeitmessung am AVR.
  - Du sollst erklären, wie ein genauer Messzeitpunkt im Timer erfasst wird.
  - In Aufgaben müssen Signalereignis und gespeicherter Timerstand zusammen gedacht werden.
selfCheckPoints:
  - Kann ich Input Capture als Zeitmarke erklären?
  - Kann ich Signalflanke und gespeicherten Timerwert zusammenlesen?
  - Kann ich sagen, warum Polling für solche Messmomente oft unruhiger ist?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - timer
  - input-capture
level: fortgeschritten
draft: false
---

Wenn ein AVR Zeitabstände messen soll, reicht es nicht immer, „irgendwann mal nach dem Timer zu schauen“. Oft ist entscheidend, **genau den Moment eines Signalereignisses festzuhalten**. Genau dafür ist **Input Capture** gedacht.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Die steigende Flanke soll den Messmoment markieren</h3>
  <p>Ein externes Signal wechselt von Low auf High. Genau in diesem Augenblick soll der aktuelle Timerstand gespeichert werden. So entsteht eine präzise Zeitmarke, mit der später Perioden oder Pulsbreiten sauber berechnet werden können.</p>
</div>

## Die Grundidee in einem Satz

<div class="visual-grid">
  <div class="visual-item">
    <strong>Timer läuft</strong>
    <span>Im Hintergrund zählt der Timer mit seiner aktuellen Zeitbasis weiter.</span>
  </div>
  <div class="visual-item">
    <strong>Signalflanke kommt</strong>
    <span>Ein definiertes Ereignis markiert den fachlich interessanten Messmoment.</span>
  </div>
  <div class="visual-item">
    <strong>Capture-Wert wird festgehalten</strong>
    <span>Der aktuelle Timerstand wird gespeichert und kann später ausgewertet werden.</span>
  </div>
</div>

## Mini-Demo: nicht schätzen, sondern Zeit markieren

<div class="figure-card">
  <p class="card-kicker">Messbild</p>
  <h3>Das Ereignis friert nicht den Timer ein, sondern den Messwert</h3>
  <pre><code>Timer läuft:      100 101 102 103 104 105 106 ...
Signalflanke:                     ↑
Capture-Wert:                     103 gespeichert</code></pre>
  <p>Der Timer läuft weiter. Gespeichert wird nur der Timerstand im interessanten Moment. Genau das macht Input Capture als Messidee so nützlich.</p>
</div>

## Warum das ruhiger ist als Polling

Beim Polling schaut das Hauptprogramm immer wieder nach, ob etwas passiert ist. Dadurch kann der eigentliche Messmoment unsauber werden, weil zwischen Ereignis und Reaktion Zeit vergeht. Input Capture arbeitet hier viel zielgenauer, weil der Zeitstempel direkt am Signalereignis festgehalten wird.

## Typische Einsatzfälle

Input Capture ist besonders hilfreich bei Fragen wie:

- Wie lang ist ein Puls?
- Wie groß ist die Periodendauer eines Signals?
- Wann genau ist eine Flanke angekommen?

## Abgrenzung zu den Nachbarseiten

Diese Seite erklärt bewusst die **Grundidee des festgehaltenen Messmoments**. Sie erklärt nicht im Detail,

- wie Compare Match einen Zielwert überwacht,
- wie PWM Ausgänge moduliert,
- oder wie ein normaler Timerüberlauf aussieht.

So bleibt die Seitenlogik sauber: **Input Capture = Zeitmarke eines Signalereignisses**.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Messfrage klären</strong>
    <span>Geht es um die Zeit eines Signalereignisses oder nur um irgendeinen Timerstand?</span>
  </div>
  <div class="step-item">
    <strong>2. Flanke erkennen</strong>
    <span>Welche Änderung des Signals soll den Messmoment auslösen?</span>
  </div>
  <div class="step-item">
    <strong>3. Capture-Wert lesen</strong>
    <span>Der gespeicherte Wert ist eine Zeitmarke im laufenden Timer.</span>
  </div>
  <div class="step-item">
    <strong>4. Zeitabstand bilden</strong>
    <span>Erst durch den Vergleich mehrerer Marken entsteht die eigentliche Messgröße.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Input Capture speichert keinen „irgendwie interessanten Wert“, sondern den Timerstand im genauen Moment eines Signalereignisses. Genau das macht daraus eine ruhige Hardware-Zeitmarke.</p>
</div>
