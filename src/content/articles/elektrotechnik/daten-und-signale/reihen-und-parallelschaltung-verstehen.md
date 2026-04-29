---
title: "Reihen- und Parallelschaltung verstehen"
description: "Verstehe den Unterschied zwischen hintereinander und nebeneinander geschalteten Bauteilen und ordne einfache Folgen dieser Anordnung ein."
subject: "elektrotechnik"
section: "Daten und Signale"
topicPath: ["daten-und-signale", "reihen-und-parallelschaltung-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Daten und Signale"]
draft: false
---
## Warum dieses Thema wichtig ist

Sobald mehr als ein Bauteil in einer Schaltung vorkommt, ist die Anordnung entscheidend. Zwei wichtige Grundformen sind die **Reihenschaltung** und die **Parallelschaltung**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Lampen, zwei völlig verschiedene Wirkungen</h3>
  <p>Auch wenn in beiden Fällen zwei Lampen vorkommen, kann ihre Anordnung den gesamten Stromkreis verändern. Hintereinander ist etwas anderes als auf getrennten Zweigen.</p>
</div>

## Reihenschaltung

In einer Reihenschaltung liegen die Bauteile nacheinander in **einem gemeinsamen Weg**. Es gibt also keinen zweiten Zweig, über den der Strom ausweichen könnte.

## Parallelschaltung

In einer Parallelschaltung liegen Bauteile auf **mehreren Zweigen**. Es gibt also nicht nur einen einzigen Weg durch die gesamte Schaltung.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Reihenschaltung</p>
    <h3>Ein gemeinsamer Weg</h3>
    <p>Alle Bauteile liegen im selben Strompfad. Änderungen oder Unterbrechungen wirken direkt auf die ganze Kette.</p>
  </section>
  <section>
    <p class="card-kicker">Parallelschaltung</p>
    <h3>Mehrere Wege</h3>
    <p>Die Zweige laufen nebeneinander. Damit können Bauteile unabhängiger voneinander wirken.</p>
  </section>
</div>

<div class="figure-card">
  <p class="card-kicker">Strukturbild</p>
  <h3>So liest du den Stromweg</h3>
  <div class="signal-flow compact">
    <div><strong>Schaltung ansehen</strong><span>nur optisch reicht noch nicht</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Stromweg verfolgen</strong><span>ein Weg oder Verzweigung?</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Schaltungsart erkennen</strong><span>Reihe oder Parallel</span></div>
  </div>
</div>

## Warum die Anordnung so wichtig ist

Die Struktur beeinflusst,

- wie sich eine Schaltung verhält,
- wie Fehler wirken,
- und wie man sie erklärt oder prüft.

Gerade deshalb reicht es nicht, nur Bauteile zu zählen. Entscheidend ist, **wie sie verbunden sind**.

## Typische Denkfehler

Ein häufiger Fehler ist, mehrere Bauteile automatisch als Parallelschaltung zu lesen. Entscheidend ist aber nicht die Anzahl, sondern die Frage:

- Gibt es nur einen gemeinsamen Stromweg?
- Oder entstehen mehrere Zweige?

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Fehlersuche in Reihe</p>
    <h3>Eine Unterbrechung trifft alles</h3>
    <p>Wenn der gemeinsame Weg unterbrochen ist, wirkt sich das auf die ganze Schaltung aus.</p>
  </section>
  <section>
    <p class="card-kicker">Fehlersuche parallel</p>
    <h3>Zweige getrennt betrachten</h3>
    <p>Bei mehreren Zweigen muss geprüft werden, welcher Teil betroffen ist und welcher weiterhin funktioniert.</p>
  </section>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Für die Unterscheidung zählt nicht die Anzahl der Bauteile, sondern der Verlauf des Stromwegs.</p>
</div>

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So ordnest du Schaltungen ruhiger ein</h3>
  <ol>
    <li>Verfolge zuerst gedanklich den Stromweg.</li>
    <li>Prüfe danach, ob nur ein Weg oder mehrere Zweige vorhanden sind.</li>
    <li>Leite erst dann ab, wie sich die Schaltung bei Fehlern oder Änderungen verhält.</li>
  </ol>
</div>
