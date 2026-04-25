---
title: ATmega – Polling als Grundidee verstehen
description: Verstehe, warum der Mikrocontroller bei Polling einen Zustand immer wieder aktiv abfragt und wie sich das fachlich von Interrupts unterscheidet.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - polling-und-entprellen
  - atmega-polling-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee von Polling als aktives Abfragen.
  - Du unterscheidest Polling und Interrupt-Reaktion fachlich sauber.
  - Du liest eine Hauptschleife ruhiger als wiederholte Zustandsprüfung statt als „dauernd dasselbe“.
practiceIdeas:
  - Vergleiche einen Taster, der ständig abgefragt wird, mit einem Taster, der per Interrupt reagiert.
  - Lies eine while-Schleife als wiederholte Prüfhaltung.
  - Beschreibe, wann Polling didaktisch einfacher und wann es technisch unruhiger sein kann.
commonMistakes:
  - Polling als „falsche“ Lösung abzuwerten, obwohl es oft didaktisch sehr klar ist.
  - Polling und Interrupt einfach nur als schnell und langsam zu beschreiben.
  - Die Hauptschleife nicht als bewusstes wiederholtes Prüfen zu lesen.
keyTakeaways:
  - Polling bedeutet, einen Zustand regelmäßig aktiv zu prüfen.
  - Polling und Interrupt lösen ähnliche Ereignisfragen, aber mit unterschiedlicher Struktur.
  - Für kleine AVR-Einstiege ist Polling oft die ruhigere Grundidee.
recognizeSignals:
  - Es geht um Hauptschleife, wiederholtes Abfragen oder Tasterprüfung.
  - Du sollst erklären, warum ein Controller einen Eingang ständig erneut liest.
  - In Codebeispielen tauchen while-Schleifen und if-Abfragen auf.
selfCheckPoints:
  - Kann ich Polling als aktives Prüfen in der Hauptschleife erklären?
  - Kann ich Polling und Interrupt fachlich unterscheiden?
  - Kann ich sagen, warum Polling didaktisch oft der ruhigere Einstieg ist?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - polling
  - taster
level: einfach
draft: false
---

Polling bedeutet: Der Mikrocontroller fragt einen Zustand **immer wieder aktiv selbst** ab. Er wartet also nicht darauf, dass ein Ereignis ihn unterbricht, sondern prüft in seiner Hauptschleife regelmäßig neu.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Taster prüfen statt auf Unterbrechung warten</h3>
  <p>Ein ATmega soll erkennen, ob ein Taster gedrückt wurde. Beim Polling schaut das Hauptprogramm immer wieder auf den Eingang. Genau deshalb ist Polling als Einstieg oft didaktisch klar: Der Ablauf bleibt sichtbar in der Hauptschleife.</p>
</div>

## Polling in einem Satz

**Polling = wiederholtes aktives Nachsehen, ob ein bestimmter Zustand gerade vorliegt.**

## Mini-Demo: dieselbe Frage, aber andere Struktur

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Die Hauptschleife bleibt beim Polling der zentrale Ort</h3>
  <pre><code>while (1) {
    if (!(PINB & (1 << PB2))) {
        PORTB |= (1 << PB0);
    } else {
        PORTB &= ~(1 << PB0);
    }
}
</code></pre>
  <p>Der Eingang wird hier nicht einmal, sondern immer wieder neu gelesen. Die Hauptschleife ist also bewusst eine Prüf-Schleife.</p>
</div>

## Polling und Interrupt nicht vermischen

<div class="compare-card">
  <p class="card-kicker">Trennschärfe</p>
  <h3>Beide reagieren auf Ereignisse, aber anders</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Polling</strong>
      <span>Die Hauptschleife schaut immer wieder aktiv nach, ob ein Zustand eingetreten ist.</span>
    </div>
    <div class="compare-item">
      <strong>Interrupt</strong>
      <span>Ein Ereignis unterbricht den normalen Ablauf kurz und springt in eine ISR.</span>
    </div>
  </div>
</div>

## Warum Polling didaktisch oft der ruhigere Start ist

Bei Polling liegt die ganze Logik sichtbar in der Hauptschleife. Das hilft besonders am Anfang, weil man den Weg **lesen** kann:

- Eingang prüfen,
- Bedingung auswerten,
- Ausgang ändern.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Hauptschleife finden</strong>
    <span>Wo wiederholt sich der Ablauf?</span>
  </div>
  <div class="step-item">
    <strong>2. Prüfpunkt finden</strong>
    <span>Welcher Eingang oder Zustand wird jedes Mal neu gelesen?</span>
  </div>
  <div class="step-item">
    <strong>3. Reaktion finden</strong>
    <span>Welche sichtbare oder technische Aktion folgt aus der Abfrage?</span>
  </div>
  <div class="step-item">
    <strong>4. Struktur benennen</strong>
    <span>Ist das aktives Polling oder eine unterbrechungsgetriebene Lösung?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Polling ist nicht bloß „dauernd dasselbe“, sondern eine bewusst wiederholte Prüfhaltung des Hauptprogramms.</p>
</div>
