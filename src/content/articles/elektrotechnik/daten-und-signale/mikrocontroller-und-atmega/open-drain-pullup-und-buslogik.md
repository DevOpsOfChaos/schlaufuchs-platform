---
title: "Mikrocontroller – Open-Drain, Pull-up und Buslogik verstehen"
description: "Verstehe, warum manche Schnittstellen nicht aktiv High treiben, sondern die Leitung nur nach Low ziehen und den High-Pegel einem Pull-up überlassen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "open-drain-pullup-und-buslogik"
learningGoals:
  - "Du beschreibst Open-Drain als gemeinsames Leitungsprinzip."
  - "Du erklärst, warum der Pull-up den High-Zustand herstellt."
  - "Du erkennst, warum mehrere Teilnehmer dieselbe Leitung sicher nach Low ziehen können."
practiceIdeas:
  - "Vergleiche Push-Pull-Ausgänge mit Open-Drain-Ausgängen."
  - "Lies eine I²C-Leitung als Ruhe-High und aktives Low."
  - "Prüfe, welche Spannung an den Pull-ups eines Busses anliegt."
commonMistakes:
  - "Open-Drain als defekten Ausgang zu lesen, weil er nicht aktiv High treibt."
  - "Pull-ups wegzulassen und dann undefinierte Pegel zu erwarten."
  - "Mehrere Push-Pull-Ausgänge direkt gegeneinander arbeiten zu lassen."
keyTakeaways:
  - "Open-Drain-Teilnehmer ziehen eine Leitung aktiv nach Low."
  - "Der Pull-up stellt den High-Pegel her, wenn niemand zieht."
  - "Gemeinsame Busleitungen funktionieren nur mit klarer Pegellogik und passenden Pull-ups."
recognizeSignals:
  - "Es geht um I²C, gemeinsame Leitungen, Pull-ups oder mehrere Teilnehmer auf einem Bus."
  - "Die Leitung ist im Ruhezustand High und wird bei Aktivität Low."
  - "Eine Aufgabe fragt, warum Teilnehmer nicht direkt gegeneinander treiben dürfen."
selfCheckPoints:
  - "Kann ich erklären, woher High und Low auf einer Open-Drain-Leitung kommen?"
  - "Kann ich Pull-up-Spannung und Teilnehmerpegel zusammen prüfen?"
  - "Kann ich Push-Pull und Open-Drain unterscheiden?"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "open-drain"
  - "pullup"
  - "i2c"
  - "bus"
  - "logik"
level: "mittel"
draft: false
---
## Grundidee

Bei Open-Drain ist High kein aktiv getriebener Zustand des Teilnehmers. High entsteht, wenn niemand die Leitung herunterzieht und der Pull-up sie auf einen definierten Pegel bringt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>I²C funktioniert, weil Low gemeinsam erlaubt ist</h3>
  <p>Mehrere Bausteine dürfen dieselbe Leitung nach Low ziehen. Wenn keiner zieht, hebt der Pull-up die Leitung wieder an. Genau dadurch lässt sich Buslogik mit mehreren Teilnehmern aufbauen.</p>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Die Aussage hinter dem Signal lesen</h3>
  <pre><code>niemand zieht      → Pull-up macht High
Teilnehmer zieht   → Leitung wird Low
mehrere ziehen Low → kein elektrischer Streit</code></pre>
  <p>Die wichtige Frage ist nicht nur, ob ein Codebeispiel kompiliert oder ein Kabel steckt. Entscheidend ist, welche elektrische oder zeitliche Aussage damit verbunden ist.</p>
</div>

## Zwei Ebenen sauber trennen

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Ähnliche Begriffe, andere Bedeutung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ebene 1</strong>
      <span>Push-Pull kann aktiv High und Low treiben.</span>
    </div>
    <div class="compare-item">
      <strong>Ebene 2</strong>
      <span>Open-Drain zieht aktiv Low und braucht für High einen Pull-up.</span>
    </div>
  </div>
</div>

## Prüfraster

<div class="step-grid">
  <div class="step-item">
    <strong>1. Ausgangsart erkennen</strong>
    <span>Beginne mit einer beobachtbaren Tatsache statt mit einer schnellen Vermutung.</span>
  </div>
  <div class="step-item">
    <strong>2. Pull-up suchen</strong>
    <span>Trenne Namen, Signale, Strompfade und Zustände voneinander.</span>
  </div>
  <div class="step-item">
    <strong>3. Pull-up-Spannung prüfen</strong>
    <span>Nutze Datenblatt, Messung oder Skizze als Gegenprüfung.</span>
  </div>
  <div class="step-item">
    <strong>4. Buskonflikte vermeiden</strong>
    <span>Ändere immer nur einen Punkt, damit die Ursache sichtbar bleibt.</span>
  </div>
</div>

## Abgrenzung im Mikrocontroller-Cluster

Diese Seite soll ein konkretes Praxisproblem klären. Sie ersetzt nicht die Nachbarseiten zu ADC-Auflösung, Timerlogik, Schnittstellen oder Fehlersuche. Die Abgrenzung ist bewusst eng, damit ähnliche Themen nicht ineinanderlaufen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Mikrocontroller-Fehlersuche beginnt fast immer mit einer sauberen Trennung von Code, Signal, Strompfad, Zeitbasis und realem Bauteilverhalten.</p>
</div>
