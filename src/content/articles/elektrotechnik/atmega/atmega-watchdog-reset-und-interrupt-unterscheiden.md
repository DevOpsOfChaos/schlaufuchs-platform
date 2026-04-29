---
title: "ATmega – Watchdog-Reset und Watchdog-Interrupt unterscheiden"
description: "Verstehe, warum der Watchdog am AVR nicht nur hart zurücksetzen, sondern auch als vorgelagerte Warn- oder Weckreaktion genutzt werden kann."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-watchdog-reset-und-interrupt-unterscheiden"]
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
## Grundidee

Der Watchdog wird oft sehr grob als „Timer gegen Programmabstürze“ beschrieben. Das stimmt nur teilweise. Wichtiger ist die Frage: **Wie soll das System reagieren, wenn die erwartete Rückmeldung ausbleibt?** Genau dort trennt der AVR zwischen **Watchdog-Reset** und **Watchdog-Interrupt**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Programm hängt – aber was soll zuerst passieren?</h3>
  <p>Ein AVR soll auf eine Störung reagieren. In einem Fall ist ein sofortiger Neustart sinnvoll. In einem anderen Fall soll erst eine ISR eine letzte Meldung schreiben oder das System aus dem Sleep holen. Beides hat mit dem Watchdog zu tun, aber nicht dieselbe Reaktionslogik.</p>
</div>

## Zwei Reaktionsformen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Watchdog-Reset</strong>
    <span>Wenn der Watchdog nicht rechtzeitig zurückgesetzt wird, startet das System neu.</span>
  </div>
  <div class="visual-item">
    <strong>Watchdog-Interrupt</strong>
    <span>Der Watchdog kann zunächst eine ISR auslösen, bevor es – je nach Konfiguration – zu einem Reset kommt oder stattdessen nur reagiert wird.</span>
  </div>
</div>

## Die ruhige Leitfrage

Die richtige Frage ist nicht nur:

> „Ist der Watchdog aktiv?“

Sondern:

> „Welche Art von Reaktion soll die Überwachung auslösen?“

Damit wird der Watchdog nicht bloß als Resetmechanismus, sondern als **Überwachungs- und Reaktionsbaustein** lesbar.

## Mini-Demo: gleiche Überwachung, andere Reaktion

<div class="compare-card">
  <p class="card-kicker">Sicherheitslogik</p>
  <h3>Die Störung ist dieselbe – die Reaktion nicht</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Reset-Fall</strong>
      <span>Das Programm reagiert nicht mehr sinnvoll. Der Watchdog soll hart zurücksetzen, um den Zustand neu aufzubauen.</span>
    </div>
    <div class="compare-item">
      <strong>Interrupt-Fall</strong>
      <span>Vor dem harten Eingriff soll eine ISR noch eine Warnung markieren, einen Zustand sichern oder das System wecken.</span>
    </div>
  </div>
</div>

## Warum das didaktisch wichtig ist

Wer nur „Watchdog = Reset“ lernt, übersieht zwei zentrale Punkte:

- Überwachung und Reaktion sind nicht identisch.
- Ein System kann sinnvoll **zuerst reagieren** und **danach** erst härter eingreifen.

Gerade bei Sleep-Modi, Diagnose oder abgestuften Sicherheitskonzepten ist das eine wichtige Trennung.

## Drei typische Denkfehler

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Fehler 1</p>
    <h3>„Watchdog heißt automatisch Reset“</h3>
    <p>Nein. Es gibt auch Konfigurationen, bei denen zuerst oder stattdessen eine ISR eine Reaktion auslöst.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 2</p>
    <h3>„Interrupt und Reset sind dasselbe“</h3>
    <p>Nein. Ein Interrupt ist eine Programmunterbrechung mit definierter ISR, ein Reset ein Neustart des Systems.</p>
  </section>
  <section>
    <p class="card-kicker">Fehler 3</p>
    <h3>„Der Watchdog ist nur ein Notanker“</h3>
    <p>Nein. Er ist Teil eines bewussten Überwachungs- und Reaktionskonzepts.</p>
  </section>
</div>

## Mini-Prüfbild für den Kopf

<pre><code>Ausbleibende Rückmeldung überwachen      → Watchdog
Sofort neu starten                       → Reset-Reaktion
Erst reagieren, melden oder wecken       → Interrupt-Reaktion</code></pre>

## Eine ruhige Prüfstrategie

1. Was wird überwacht?
2. Welche Rückmeldung bleibt aus?
3. Soll sofort neu gestartet werden oder zunächst eine definierte Reaktion erfolgen?
4. Erst danach die Watchdog-Konfiguration bewerten.

<div class="note-panel">
  <p><strong>Merke:</strong> Der Watchdog ist nicht nur ein Reset-Timer. Er gehört zu einem bewussten Konzept aus Überwachung und Reaktionsart.</p>
</div>
