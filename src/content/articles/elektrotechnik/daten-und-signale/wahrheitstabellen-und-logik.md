---
title: Wahrheitstabellen und Logik
description: Verstehe, wie logische Aussagen und Schaltungen mit Wahrheitstabellen geordnet beschrieben werden.
subject: elektrotechnik
section: Daten und Signale
topicPath:
  - daten-und-signale
  - wahrheitstabellen-und-logik
tags:
  - logik
  - wahrheitstabelle
  - digitaltechnik
  - gatter
learningGoals:
  - "Du erklärst den Zweck einer Wahrheitstabelle."
  - "Du ordnest Eingaben und Ausgaben logisch zueinander."
  - "Du beschreibst einfache logische Verknüpfungen systematisch."
practiceIdeas:
  - "Schreibe alle Eingangskombinationen vollständig auf."
  - "Lies eine logische Regel erst in Worten und dann als Tabelle."
  - "Vergleiche ein Gatterbild mit seiner Wahrheitstabelle."
commonMistakes:
  - "Kombinationen auszulassen oder doppelt zu zählen."
  - "Die Tabelle nur abzuschreiben statt die Regel zu verstehen."
  - "Ein- und Ausgang nicht klar zu trennen."
keyTakeaways:
  - "Wahrheitstabellen beschreiben logische Regeln vollständig."
  - "Alle möglichen Eingangskombinationen müssen berücksichtigt werden."
  - "Die Tabelle macht Schaltungen lesbar und überprüfbar."
recognizeSignals:
  - "Es geht um logische Zustände, Gatter, 0/1 oder Eingang-Ausgang-Beziehungen."
  - "Du sollst systematisch alle Fälle erfassen."
  - "Ein Beispiel fragt, wie sich ein Ausgang bei verschiedenen Eingaben verhält."
selfCheckPoints:
  - "Kann ich erklären, warum alle Kombinationen vorkommen müssen?"
  - "Kann ich Eingang und Ausgang in einer Tabelle sauber unterscheiden?"
  - "Kann ich eine einfache logische Regel in Worten beschreiben?"
level: einfach
draft: false
---

## Warum dieses Thema wichtig ist

Logische Schaltungen sollen nicht nur funktionieren, sondern auch nachvollziehbar beschrieben werden. Wahrheitstabellen helfen dabei, alle möglichen Fälle geordnet sichtbar zu machen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Alle Fälle statt einzelner Beispiele</h3>
  <p>Bei zwei Eingängen reichen einzelne Beispiele nicht aus. Erst wenn die Kombinationen 00, 01, 10 und 11 vollständig betrachtet werden, ist klar, wie ein System wirklich reagiert.</p>
</div>

## Was eine Wahrheitstabelle leistet

Eine Wahrheitstabelle zeigt für jede mögliche Eingangskombination,

- welche Eingaben vorliegen,
- und welcher Ausgang daraus folgt.

Damit wird eine logische Regel vollständig und überprüfbar beschrieben.

<div class="figure-card">
  <p class="card-kicker">Mini-Tabelle</p>
  <h3>UND in tabellarischer Form</h3>
  <div class="logic-table" aria-label="Wahrheitstabelle fuer UND">
    <div class="logic-row">
      <span class="logic-cell header">A</span>
      <span class="logic-cell header">B</span>
      <span class="logic-cell header">Y</span>
    </div>
    <div class="logic-row">
      <span class="logic-cell">0</span>
      <span class="logic-cell">0</span>
      <span class="logic-cell">0</span>
    </div>
    <div class="logic-row">
      <span class="logic-cell">0</span>
      <span class="logic-cell">1</span>
      <span class="logic-cell">0</span>
    </div>
    <div class="logic-row">
      <span class="logic-cell">1</span>
      <span class="logic-cell">0</span>
      <span class="logic-cell">0</span>
    </div>
    <div class="logic-row">
      <span class="logic-cell">1</span>
      <span class="logic-cell">1</span>
      <span class="logic-cell">1</span>
    </div>
  </div>
</div>

## Warum Vollständigkeit entscheidend ist

Wenn nur ein Teil der Kombinationen notiert wird, bleibt die Regel unklar. Wahrheitstabellen sind deshalb mehr als eine Liste — sie sind ein vollständiges Ordnungswerkzeug.

## Wie man ruhig vorgeht

Ein guter Ablauf ist:

1. Anzahl der Eingänge bestimmen.
2. Alle Kombinationen geordnet aufschreiben.
3. Für jede Kombination den Ausgang nach der Regel bestimmen.
4. Am Ende prüfen, ob kein Fall fehlt.

<div class="practice-card">
  <p class="card-kicker">Vorgehensweise</p>
  <h3>Von der Regel zur Tabelle</h3>
  <div class="step-grid">
    <div class="step-item">
      <strong>Eingänge zählen</strong>
      <p>Nur so weißt du, wie viele Kombinationen entstehen.</p>
    </div>
    <div class="step-item">
      <strong>Fälle ordnen</strong>
      <p>Alle Kombinationen einmal vollständig und systematisch notieren.</p>
    </div>
    <div class="step-item">
      <strong>Regel anwenden</strong>
      <p>Für jede Zeile einzeln prüfen, wann der Ausgang 1 oder 0 ist.</p>
    </div>
  </div>
</div>

## Woran man gute Erklärungen erkennt

Gute Erklärungen nennen nicht nur das Ergebnis, sondern auch die zugrunde liegende Regel:

- Wann ist der Ausgang 1?
- Wann ist er 0?
- Welche Bedingung beschreibt das Verhalten?

<div class="formula-card">
  <p class="card-kicker">Merksatz</p>
  <h3>Eine Wahrheitstabelle ist dann gut, wenn sie jeden möglichen Fall zeigt und die Regel dahinter sichtbar macht.</h3>
</div>
