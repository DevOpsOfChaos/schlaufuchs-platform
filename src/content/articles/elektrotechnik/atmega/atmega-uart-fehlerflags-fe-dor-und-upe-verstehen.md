---
title: ATmega – UART-Fehlerflags FE, DOR und UPE verstehen
description: Verstehe am AVR-UART, warum beim Empfang nicht nur Datenbytes, sondern auch Fehlerflags wie Framing Error, Data OverRun und Parity Error mitgelesen werden müssen.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-kommunikation
  - atmega-uart-fehlerflags-fe-dor-und-upe-verstehen
learningGoals:
  - Du erklärst die Bedeutung von FE, DOR und UPE am AVR-UART.
  - Du unterscheidest Rahmenfehler, Überlauf und Paritätsfehler sauber.
  - Du liest seriellen Empfang eher als Daten plus Status statt nur als Byte-Strom.
practiceIdeas:
  - Vergleiche Empfangsfehler nach Ursache und nicht nur nach Symbolkürzel.
  - Prüfe bei UART-Problemen, ob Timing, Pufferung oder Prüfbitlogik betroffen ist.
  - Lies UCSRnA nicht nur als Nebenregister, sondern als Statusblick auf den Empfang.
commonMistakes:
  - Nur UDR zu lesen und die Fehlerflags zu ignorieren.
  - FE, DOR und UPE als denselben „kaputten UART“ zu behandeln.
  - Empfangsprobleme nur auf die Baudrate zu schieben.
keyTakeaways:
  - UART-Empfang liefert nicht nur Daten, sondern auch Statusinformationen.
  - FE, DOR und UPE beschreiben unterschiedliche Fehlerursachen.
  - Wer Daten und Status trennt, diagnostiziert serielle Probleme deutlich ruhiger.
recognizeSignals:
  - Es geht um fehlerhafte Zeichen, verlorene Bytes oder unruhigen UART-Empfang.
  - Du sollst erklären, warum ein Byte zwar ankommt, aber nicht vertrauenswürdig ist.
  - In Aufgaben ist die Fehlerursache wichtiger als die bloße Flag-Abkürzung.
selfCheckPoints:
  - Kann ich FE, DOR und UPE unterscheiden?
  - Kann ich erklären, warum Statusflags vor der Auswertung wichtig sind?
  - Kann ich UART-Fehler eher über Ursache als über Bauchgefühl einordnen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - uart
  - fehlerflags
level: fortgeschritten
draft: false
---

## Grundidee

Beim UART-Empfang ist ein Byte nicht automatisch „gut“, nur weil etwas im Datenregister steht. Der AVR liefert zusätzlich **Statusinformationen**, mit denen sich beurteilen lässt, ob beim Empfang selbst etwas schiefgelaufen ist. Genau dort kommen **FE**, **DOR** und **UPE** ins Spiel.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Zeichen kommt an – aber ist es auch vertrauenswürdig?</h3>
  <p>Im Terminal erscheint scheinbar nur ein falsches Zeichen. Fachlich lohnt sich der zweite Blick: War der Rahmen unplausibel, ist ein Byte verloren gegangen oder stimmt das Prüfbit nicht? Erst die Fehlerflags machen aus „komisch“ eine ruhige Diagnose.</p>
</div>

## Die drei Fehlerflags im Überblick

<div class="visual-grid">
  <div class="visual-item">
    <strong>FE</strong>
    <span>Framing Error. Der erwartete Zeichenrahmen passt nicht sauber, etwa wenn das Stopbit nicht plausibel erscheint.</span>
  </div>
  <div class="visual-item">
    <strong>DOR</strong>
    <span>Data OverRun. Ein neues Zeichen kommt nach, obwohl das vorherige noch nicht rechtzeitig abgeholt wurde.</span>
  </div>
  <div class="visual-item">
    <strong>UPE</strong>
    <span>Parity Error. Das empfangene Paritätsbit passt nicht zur erwarteten Prüfbitlogik.</span>
  </div>
</div>

## Mini-Demo: drei Fehler, drei Denkwege

<div class="figure-card">
  <p class="card-kicker">Diagnose statt Schlagwort</p>
  <h3>Nicht jeder schlechte Empfang meint dasselbe</h3>
  <pre><code>FE  → Rahmen stimmt nicht sauber
DOR → Zeichenfluss war schneller als das Auslesen
UPE → Prüfbitlogik und empfangenes Zeichen passen nicht zusammen</code></pre>
</div>

## Status zuerst, Byte danach lesen

Ein ruhiger UART-Empfang liest nicht nur das Datenregister, sondern denkt auch den Status mit. Sonst landet ein fehlerhaftes oder verlorenes Zeichen schnell im normalen Datenpfad, obwohl seine Entstehung schon Warnsignale geliefert hat.

## Drei typische Ursachenbilder

<div class="compare-card">
  <p class="card-kicker">Ursachenblick</p>
  <h3>Timingproblem ist nicht gleich Pufferproblem</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>FE</strong>
      <span>Die Bitrahmenlage passt nicht sauber. Häufig denkt man dann zuerst an Timing oder Leitungsqualität.</span>
    </div>
    <div class="compare-item">
      <strong>DOR</strong>
      <span>Das System war zu langsam beim Abholen. Hier ist die Reaktivität oder Pufferung das erste Thema.</span>
    </div>
    <div class="compare-item">
      <strong>UPE</strong>
      <span>Die eigentliche Datenprüfung passt nicht. Das lenkt den Blick stärker auf Paritätskonfiguration und Prüfmechanik.</span>
    </div>
  </div>
</div>

## Typischer Registerbezug

```c
status = UCSR0A;
data   = UDR0;
```

Die Denkhilfe dazu lautet: Erst interessiert, **wie** das Zeichen ankam, dann erst **welches** Zeichen angekommen ist.

## Eine ruhige Prüfstrategie

1. Kommt überhaupt ein Zeichen an?
2. Welche Fehlerflags stehen dabei?
3. Deutet das Problem eher auf Rahmen, Überlauf oder Prüfbit?
4. Erst danach die eigentlichen Nutzdaten auswerten.

<div class="note-panel">
  <p><strong>Merke:</strong> Guter UART-Empfang liest nicht nur Bytes, sondern auch den Zustand des Empfangs mit.</p>
</div>
