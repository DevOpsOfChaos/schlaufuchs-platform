---
title: ATmega SPI CPOL und CPHA verstehen
description: Verstehe, wie Taktruhelage und Abtastzeitpunkt bei SPI zusammenwirken und warum der richtige Modus wichtiger ist als bloß „Takt läuft“.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-cpol-und-cpha-verstehen
learningGoals:
  - Du erklärst die Rollen von CPOL und CPHA.
  - Du unterscheidest Taktruhelage und Abtastkante sauber.
  - Du liest SPI-Modi eher als Timingfrage denn als bloße Registernummer.
practiceIdeas:
  - Vergleiche zwei SPI-Modi mit unterschiedlicher Taktruhelage.
  - Beschreibe, auf welcher Taktkante Daten gelten und auf welcher sie wechseln.
  - Begründe, warum derselbe Datenstrom im falschen Modus instabil gelesen werden kann.
commonMistakes:
  - CPOL und CPHA als austauschbare Bits zu betrachten.
  - Nur die Frequenz zu sehen und das Timing im Bitfenster zu übergehen.
  - Den SPI-Modus als reine Tabelle auswendig zu lernen statt als Timingfrage zu verstehen.
keyTakeaways:
  - CPOL beschreibt die Ruhelage des Takts.
  - CPHA beschreibt, an welcher Kante das Sample-/Shift-Verhalten orientiert wird.
  - Ein falscher SPI-Modus führt leicht zu zeitlich unstimmigem Lesen oder Schreiben.
recognizeSignals:
  - Es geht um SPI-Modi, Taktflanken, Sampling oder instabile Datenübernahme.
  - Du sollst erklären, warum zwei Geräte trotz gleicher Leitungen nicht sauber zusammenarbeiten.
  - In Beispielen ist die Taktkante wichtiger als das einzelne Byte.
selfCheckPoints:
  - Kann ich CPOL und CPHA in ihrer Funktion trennen?
  - Kann ich erklären, warum die richtige Taktkante wichtig ist?
  - Kann ich einen SPI-Modus als Timingbild beschreiben?
tags:
  - elektrotechnik
  - atmega
  - spi
  - timing
  - cpol
level: mittel
draft: false
---

## Grundidee

Bei SPI reicht es nicht, nur zu wissen, **dass** ein Takt vorhanden ist. Fachlich entscheidend ist: **Wie ruht der Takt, und an welcher Kante werden Daten übernommen?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Gleiches Byte, falscher Modus</h3>
  <p>Zwei Geräte sind korrekt verbunden, aber die empfangenen Daten wirken instabil oder verschoben. Häufig liegt das nicht an der Leitung selbst, sondern daran, dass Master und Slave unterschiedliche Erwartungen an Taktlage und Abtastzeitpunkt haben.</p>
</div>

## Die beiden Rollen

<div class="visual-grid">
  <div class="visual-item">
    <strong>CPOL</strong>
    <span>Beschreibt, ob der Takt im Ruhezustand LOW oder HIGH ist.</span>
  </div>
  <div class="visual-item">
    <strong>CPHA</strong>
    <span>Beschreibt, an welcher Taktkante Daten übernommen und wann sie wechseln.</span>
  </div>
</div>

## Ruhiger lesen statt Tabelle auswendig

Anstatt nur „Mode 0 bis 3“ zu merken, hilft dieses Denkbild:

1. Wie sieht der Takt aus, wenn gerade nichts passiert?
2. Bei welcher Kante werden Daten gültig gelesen?
3. Bei welcher Kante dürfen sie sich ändern?

## Mini-Denkbild

<pre><code>Ruhelage des Takts  → CPOL
Abtast-/Schiebekante → CPHA</code></pre>

## Warum der gleiche Datenstrom trotzdem schiefgehen kann

Wenn Master und Slave unterschiedliche Erwartungen an die Taktkante haben, liest das eine Gerät genau dann, wenn das andere noch umschaltet. Dann wirkt die Kommunikation nicht „kaputt verkabelt“, sondern zeitlich unsauber aufeinander abgestimmt.

## Eine ruhige Prüfstrategie

1. Welche Ruhelage hat SCK?
2. Auf welcher Kante liest das Gegenüber?
3. Auf welcher Kante ändert der Sender die Daten?
4. Passt der gewählte Modus zu beiden Geräten?

<div class="note-panel">
  <p><strong>Merke:</strong> SPI ist nicht nur eine Daten- und Taktleitung. Es ist vor allem ein gemeinsames Timingverständnis zwischen zwei Geräten.</p>
</div>
