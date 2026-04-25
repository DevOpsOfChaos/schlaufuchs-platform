---
title: ATmega – Timer CTC als Zeitbasis verstehen
description: Verstehe, warum der CTC-Modus eine ruhige Zeitbasis für wiederkehrende Ereignisse liefern kann.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - timer-und-zeitverhalten
  - atmega-timer-ctc-als-zeitbasis-verstehen
learningGoals:
  - Du erklärst die Grundidee des CTC-Modus am AVR-Timer.
  - Du beschreibst, warum ein definierter Vergleichswert eine feste Zeitbasis ermöglicht.
  - Du trennst Überlaufdenken und Compare-Match-Denken sauber voneinander.
practiceIdeas:
  - Vergleiche Zeitmessung über Überlauf mit einer festen CTC-Zeitbasis.
  - Prüfe, warum regelmäßige Ticks oft leichter planbar sind als unruhige Delay-Schleifen.
  - Lies Compare-Match als geordneten Zeitanker statt nur als Registerereignis.
commonMistakes:
  - CTC und Overflow als praktisch dasselbe zu behandeln.
  - Den Compare-Wert als bloße Zahl statt als Zeitanker zu lesen.
  - Wiederkehrende Aufgaben weiter mit blockierenden Delays zu planen.
keyTakeaways:
  - CTC erzeugt einen wiederkehrenden Vergleichspunkt im Timerlauf.
  - Daraus lässt sich eine ruhige Zeitbasis für periodische Aufgaben ableiten.
  - CTC ist besonders nützlich, wenn Zeitplanung klar und wiederholbar sein soll.
recognizeSignals:
  - Es geht um Compare-Match, CTC, periodische Ticks oder regelmäßige Zeitraster.
  - Du sollst erklären, warum eine Aufgabe in festen Abständen laufen soll.
  - In Aufgaben ist das Zeitraster wichtiger als der einzelne Timerzählerstand.
selfCheckPoints:
  - Kann ich CTC und Overflow fachlich unterscheiden?
  - Kann ich erklären, warum Compare-Match eine ruhige Zeitbasis liefert?
  - Kann ich den Nutzen für periodische Aufgaben beschreiben?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - timer
  - ctc
level: mittel
draft: false
---

## Grundidee

Ein Timer ist nicht nur zum Zählen da. Oft soll er eine **wiederkehrende Zeitbasis** liefern, zum Beispiel alle 1 Millisekunde oder alle 10 Millisekunden. Genau dafür ist der **CTC-Modus** besonders nützlich. Der Timer zählt dabei bis zu einem Vergleichswert und beginnt danach wieder in derselben geordneten Struktur.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein System braucht einen sauberen 1-ms-Tick</h3>
  <p>Mehrere Aufgaben sollen regelmäßig geprüft werden. Statt überall mit Delay zu warten, liefert der Timer im CTC-Modus einen festen Tick. Dadurch wird Zeitplanung ruhiger, weil das System sich an einem wiederkehrenden Vergleichspunkt orientieren kann.</p>
</div>

## Was CTC didaktisch stark macht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Zählen bis zum Vergleichswert</strong>
    <span>Der Timer läuft geordnet auf einen festen Punkt zu.</span>
  </div>
  <div class="visual-item">
    <strong>Compare-Match</strong>
    <span>Am Vergleichspunkt entsteht ein klares Ereignis.</span>
  </div>
  <div class="visual-item">
    <strong>Wiederholung</strong>
    <span>Daraus wird ein regelmäßiges Zeitraster.</span>
  </div>
</div>

## Mini-Demo: Delay oder ruhiger Tick?

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>CTC hilft, Zeit als Raster statt als Warteblock zu lesen</h3>
  <pre><code>Fall A: Aufgabe → delay → Aufgabe → delay
Fall B: Tick → Aufgaben prüfen → Tick → Aufgaben prüfen</code></pre>
  <p>Der zweite Fall ist oft besser planbar, weil Zeit als wiederkehrender Bezugspunkt sichtbar wird.</p>
</div>

## Eine ruhige Prüfstrategie

1. Braucht das System einzelne Wartephasen oder eine wiederkehrende Zeitbasis?
2. Gibt es einen klaren Compare-Wert als Zeitanker?
3. Sollen Aufgaben periodisch geprüft oder einmalig verzögert werden?
4. Ist CTC hier die ruhigere Denkform als bloßes Delay?

<div class="note-panel">
  <p><strong>Merke:</strong> CTC ist didaktisch stark, weil aus einem Timerwert ein regelmäßiger Zeitanker wird. Genau das macht periodische Mikrocontroller-Programme oft deutlich ruhiger planbar.</p>
</div>
