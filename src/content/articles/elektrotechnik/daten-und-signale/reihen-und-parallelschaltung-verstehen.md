---
title: Reihen- und Parallelschaltung verstehen
description: Verstehe den Unterschied zwischen hintereinander und nebeneinander geschalteten Bauteilen und ordne einfache Folgen dieser Anordnung ein.
subject: elektrotechnik
section: Daten und Signale
topicPath:
  - daten-und-signale
  - reihen-und-parallelschaltung-verstehen
tags:
  - reihenschaltung
  - parallelschaltung
  - stromkreis
  - schaltung
learningGoals:
  - "Du unterscheidest Reihenschaltung und Parallelschaltung in einfachen Plänen."
  - "Du beschreibst die Anordnung der Bauteile in beiden Schaltungsarten."
  - "Du erkennst, warum sich Verhalten und Fehlersuche dadurch unterscheiden."
practiceIdeas:
  - "Vergleiche zwei einfache Pläne nach Reihen- oder Parallelschaltung."
  - "Erkläre, ob es nur einen oder mehrere Wege im Stromkreis gibt."
  - "Ordne ein Fehlerbild danach ein, welche Schaltungsart vorliegt."
commonMistakes:
  - "Bauteile nur optisch statt über den Stromweg zu vergleichen."
  - "Zu denken, mehrere Bauteile bedeuteten automatisch Parallelschaltung."
  - "Verzweigungen im Plan zu übersehen."
keyTakeaways:
  - "In der Reihenschaltung liegen Bauteile in einem gemeinsamen Weg."
  - "In der Parallelschaltung entstehen mehrere Zweige."
  - "Die Schaltungsart beeinflusst Verhalten und Fehlersuche."
recognizeSignals:
  - "Es geht um mehrere Verbraucher, Verzweigungen oder verschiedene Wege im Stromkreis."
  - "Du sollst Schaltungen vergleichen oder ihre Struktur erklären."
  - "Ein Beispiel fragt nach Zweigen oder einem gemeinsamen Weg."
selfCheckPoints:
  - "Kann ich erklären, woran ich eine Reihenschaltung erkenne?"
  - "Kann ich erklären, woran ich eine Parallelschaltung erkenne?"
  - "Kann ich begründen, warum die Struktur für die Funktion wichtig ist?"
level: einfach
draft: false
---

## Warum dieses Thema wichtig ist

Sobald mehr als ein Bauteil in einer Schaltung vorkommt, ist die Anordnung entscheidend. Zwei wichtige Grundformen sind die **Reihenschaltung** und die **Parallelschaltung**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Lampen, zwei unterschiedliche Strukturen</h3>
  <p>Zwei Lampen können hintereinander in einem gemeinsamen Stromweg liegen oder in zwei getrennten Zweigen eingebaut sein. Von außen sieht beides nach „zwei Lampen“ aus, fachlich ist das aber nicht dasselbe.</p>
</div>

## Reihenschaltung

In der Reihenschaltung liegen die Bauteile in einem gemeinsamen Weg. Der Stromkreis führt nacheinander durch mehrere Bauteile.

<div class="figure-card">
  <p class="card-kicker">Bildidee</p>
  <h3>Ein Weg durch alle Bauteile</h3>
  <div class="signal-flow">
    <div class="flow-node">
      <strong>Quelle</strong>
      <p>Start des Stromwegs</p>
    </div>
    <span class="flow-arrow" aria-hidden="true">→</span>
    <div class="flow-node">
      <strong>Lampe 1</strong>
      <p>liegt im selben Weg</p>
    </div>
    <span class="flow-arrow" aria-hidden="true">→</span>
    <div class="flow-node">
      <strong>Lampe 2</strong>
      <p>liegt ebenfalls im gemeinsamen Weg</p>
    </div>
  </div>
</div>

## Parallelschaltung

In der Parallelschaltung verzweigt sich der Stromkreis. Es entstehen mehrere Wege oder Zweige.

<div class="figure-card">
  <p class="card-kicker">Bildidee</p>
  <h3>Mehrere Wege nebeneinander</h3>
  <div class="visual-grid">
    <div class="visual-item">
      <strong>Zweig 1</strong>
      <p>Ein eigener Weg mit eigenem Bauteil.</p>
    </div>
    <div class="visual-item">
      <strong>Zweig 2</strong>
      <p>Ein weiterer Weg, der parallel dazu verläuft.</p>
    </div>
  </div>
</div>

## Woran man den Unterschied erkennt

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Weg oder Verzweigung?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Reihenschaltung</strong>
      <p>Ein gemeinsamer Weg durch alle Bauteile. Keine Verzweigung.</p>
    </div>
    <div class="compare-item">
      <strong>Parallelschaltung</strong>
      <p>Mehrere Zweige. Die Bauteile liegen nebeneinander in getrennten Wegen.</p>
    </div>
  </div>
</div>

## Warum die Struktur Folgen hat

Die Schaltungsart beeinflusst nicht nur den Plan, sondern auch das Verhalten und die Fehlersuche. Gerade deshalb reicht es nicht, Bauteile nur optisch zu zählen.

- Gibt es nur einen Weg?
- Gibt es eine Verzweigung?
- Was passiert, wenn ein Zweig oder ein Bauteil ausfällt?

## So liest du Schaltungen ruhiger

<div class="practice-card">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>Drei Blickfragen für den Plan</h3>
  <div class="step-grid">
    <div class="step-item">
      <strong>1. Stromweg verfolgen</strong>
      <p>Gibt es einen gemeinsamen Weg oder mehrere Zweige?</p>
    </div>
    <div class="step-item">
      <strong>2. Verzweigung suchen</strong>
      <p>Eine echte Abzweigung ist das klare Signal für Parallelstruktur.</p>
    </div>
    <div class="step-item">
      <strong>3. Verhalten mitdenken</strong>
      <p>Überlege, wie die Struktur die Funktion und Fehlersuche beeinflusst.</p>
    </div>
  </div>
</div>
