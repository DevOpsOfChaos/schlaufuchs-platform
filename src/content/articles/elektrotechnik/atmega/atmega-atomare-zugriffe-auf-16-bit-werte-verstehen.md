---
title: ATmega – Atomare Zugriffe auf 16-Bit-Werte verstehen
description: Verstehe, warum gemeinsame 16-Bit-Werte zwischen Hauptprogramm und ISR am AVR heikel sein können und warum atomare Zugriffe eine eigene Rolle haben.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - interrupts-und-nebenlaeufigkeit
  - atmega-atomare-zugriffe-auf-16-bit-werte-verstehen
learningGoals:
  - Du erklärst, warum 16-Bit-Zugriffe am AVR nicht automatisch atomar sind.
  - Du beschreibst das Problem gemeinsamer Daten zwischen Hauptprogramm und ISR ruhiger als Lese-/Schreibfenster.
  - Du trennst volatile und atomare Sicherung fachlich sauber voneinander.
practiceIdeas:
  - Vergleiche einen einzelnen 8-Bit-Zugriff mit einem 16-Bit-Wert in zwei Teilschritten.
  - Beschreibe, wann eine ISR genau in eine Datenoperation hineinlaufen kann.
  - Lies atomare Sicherung als Schutz des gesamten Zugriffsfensters.
commonMistakes:
  - Zu denken, volatile allein löse schon Konsistenzprobleme bei Mehrbyte-Werten.
  - 16-Bit-Werte am AVR wie einen einzigen unteilbaren Zugriff zu behandeln.
  - Nebenläufigkeit nur als Softwareidee und nicht als reales Timing-Problem zu lesen.
keyTakeaways:
  - Ein 16-Bit-Zugriff kann am AVR aus mehreren Teilschritten bestehen.
  - Genau zwischen diesen Teilschritten kann eine ISR den gemeinsamen Wert verändern.
  - Atomare Sicherung schützt das gesamte Zugriffsfenster, nicht nur die Sichtbarkeit der Variablen.
recognizeSignals:
  - Es geht um ISR, gemeinsame Variablen, Zählerstände oder 16-Bit-Werte am AVR.
  - Du sollst erklären, warum ein gelesener Wert manchmal unstimmig wirkt.
  - In Aufgaben müssen volatile und atomare Sicherung getrennt gedacht werden.
selfCheckPoints:
  - Kann ich erklären, warum 16-Bit-Werte problematischer sein können als 8-Bit-Werte?
  - Kann ich volatile und atomar sauber unterscheiden?
  - Kann ich das Risiko eines unterbrochenen Zugriffsfensters beschreiben?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - interrupt
  - atomar
level: fortgeschritten
draft: false
---

Am AVR ist ein 16-Bit-Wert nicht automatisch ein einziger unteilbarer Zugriff. Genau das wird wichtig, wenn **Hauptprogramm und ISR** denselben Wert benutzen. Dann geht es nicht nur darum, ob eine Variable sichtbar ist, sondern ob der Zugriff **als Ganzes konsistent** bleibt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein 16-Bit-Zählerstand wird mitten im Lesen verändert</h3>
  <p>Das Hauptprogramm möchte einen 16-Bit-Zähler lesen. Währenddessen läuft eine ISR und erhöht genau diesen Wert. Dann kann ein Mischwert entstehen, der aus altem und neuem Zustand zusammengesetzt wirkt. Genau hier beginnt die eigentliche atomare Frage.</p>
</div>

## Die Trennkante zu volatile

<div class="compare-card">
  <p class="card-kicker">Wichtige Unterscheidung</p>
  <h3>Sichtbarkeit ist nicht dasselbe wie unteilbarer Zugriff</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>volatile</strong>
      <span>Sorgt dafür, dass der Compiler Zugriffe nicht wegoptimiert oder durch Caching verfälscht.</span>
    </div>
    <div class="compare-item">
      <strong>atomarer Zugriff</strong>
      <span>Schützt den gesamten Lese- oder Schreibvorgang davor, in einem kritischen Moment zerrissen zu werden.</span>
    </div>
  </div>
</div>

## Mini-Demo: der Mischwert entsteht im Zwischenfenster

<div class="figure-card">
  <p class="card-kicker">Timing-Bild</p>
  <h3>Nicht der Wert ist „kaputt“, sondern das Zugriffsfenster war offen</h3>
  <pre><code>Hauptprogramm liest 16-Bit-Wert:
  zuerst niederwertiges Byte
  dann höherwertiges Byte

Dazwischen läuft ISR:
  Wert wird erhöht

Ergebnis:
  gelesener Gesamtwert kann aus zwei Zeitpunkten stammen</code></pre>
  <p>Genau deshalb reicht „ist doch dieselbe Variable“ fachlich nicht aus. Wichtig ist, ob der ganze Zugriff geschützt war.</p>
</div>

## Warum 8-Bit und 16-Bit hier anders wirken

Bei einem 8-Bit-Wert kann ein einzelner Zugriff oft schon in einem Schritt erfolgen. Bei einem 16-Bit-Wert ist das Risiko größer, dass zwischen Teilschritten ein Interrupt eingreift. Genau daraus entsteht der praktische Unterschied.

## Ruhig als Zugriffsfenster denken

Die wichtigste Lesart ist nicht „eine gefährliche Variable“, sondern:

- Wann beginnt das Lesen oder Schreiben?
- Aus wie vielen Teilschritten besteht der Zugriff?
- Kann genau dazwischen eine ISR denselben Wert verändern?

## Abgrenzung zur Nachbarseite

Diese Seite erklärt bewusst die **Konsistenz eines Mehrbyte-Zugriffs**. Sie erklärt nicht noch einmal allgemein, warum `volatile` zwischen ISR und Hauptprogramm nötig sein kann. Dadurch bleibt die Logik sauber getrennt:

- `volatile` → Sichtbarkeit und Optimierungsfrage
- atomar → Schutz des kompletten Zugriffsfensters

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Gemeinsame Variable erkennen</strong>
    <span>Greifen ISR und Hauptprogramm auf denselben Wert zu?</span>
  </div>
  <div class="step-item">
    <strong>2. Wertgröße lesen</strong>
    <span>Handelt es sich um einen 16-Bit-Wert mit möglichem Mehrschrittzugriff?</span>
  </div>
  <div class="step-item">
    <strong>3. Zwischenfenster prüfen</strong>
    <span>Kann eine ISR genau zwischen zwei Teilschritte fallen?</span>
  </div>
  <div class="step-item">
    <strong>4. Schutzart begründen</strong>
    <span>volatile und atomare Sicherung lösen unterschiedliche Probleme.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Bei gemeinsamen 16-Bit-Werten am AVR ist nicht nur wichtig, dass die Variable sichtbar bleibt. Entscheidend ist, dass der gesamte Zugriff als zusammenhängender Vorgang konsistent bleibt.</p>
</div>
