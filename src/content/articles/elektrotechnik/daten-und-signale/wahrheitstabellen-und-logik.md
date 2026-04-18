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
  <p class="card-kicker">Denkbild</p>
  <h3>Von der Regel zur vollständigen Übersicht</h3>
  <div class="signal-flow compact">
    <div><strong>Eingänge festlegen</strong><span>zum Beispiel A und B</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>alle Fälle notieren</strong><span>00, 01, 10, 11</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Ausgang bestimmen</strong><span>Regel für jede Zeile prüfen</span></div>
  </div>
</div>

## Warum Vollständigkeit entscheidend ist

Wenn nur ein Teil der Kombinationen notiert wird, bleibt die Regel unklar. Wahrheitstabellen sind deshalb mehr als eine Liste — sie sind ein vollständiges Ordnungswerkzeug.

## Ein kleines Beispiel: UND-Verknüpfung

<pre><code>A  B | Ausgang
0  0 |   0
0  1 |   0
1  0 |   0
1  1 |   1</code></pre>

Bei einer UND-Regel wird der Ausgang nur dann 1, wenn **beide** Eingänge 1 sind.

## Eine Regel erst in Worten verstehen

Gerade am Anfang hilft es, die Logik nicht nur tabellarisch, sondern auch sprachlich zu fassen:

- Ausgang nur bei zwei aktiven Eingängen?
- Ausgang bei mindestens einem aktiven Eingang?
- Ausgang genau als Gegenteil eines Eingangs?

Erst wenn diese Regel klar ist, wird die Tabelle wirklich verständlich.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Unvollständig gedacht</p>
    <h3>Nur einzelne Fälle merken</h3>
    <p>Das wirkt schnell, reicht aber nicht aus, um eine Schaltung sicher zu verstehen oder zu prüfen.</p>
  </section>
  <section>
    <p class="card-kicker">Systematisch gedacht</p>
    <h3>Alle Kombinationen erfassen</h3>
    <p>So wird die Logik wirklich lesbar, überprüfbar und später auch vergleichbar.</p>
  </section>
</div>

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Regel und Tabelle passen zusammen</h3>
    <p>Du kannst in Worten erklären, was passieren soll, und siehst dieselbe Regel dann vollständig in der Tabelle wieder.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Tabelle nur auswendig lesen</h3>
    <p>Dann bleiben die Werte isoliert und die eigentliche Logik der Schaltung wird nicht wirklich verstanden.</p>
  </section>
</div>

## Wie man ruhig vorgeht

Ein guter Ablauf ist:

1. Anzahl der Eingänge bestimmen.
2. Alle Kombinationen geordnet aufschreiben.
3. Für jede Kombination den Ausgang nach der Regel bestimmen.
4. Am Ende prüfen, ob kein Fall fehlt.

## Woran man gute Erklärungen erkennt

Gute Erklärungen nennen nicht nur das Ergebnis, sondern auch die zugrunde liegende Regel:

- Wann ist der Ausgang 1?
- Wann ist er 0?
- Welche Bedingung beschreibt das Verhalten?

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Wahrheitstabelle ersetzt die Regel nicht. Sie macht die Regel sichtbar, vollständig und überprüfbar.</p>
</div>

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So kannst du das Thema weiterdenken</h3>
  <ul>
    <li>Vergleiche eine Schaltskizze mit ihrer Wahrheitstabelle.</li>
    <li>Schreibe die Regel einmal in Worten und einmal tabellarisch auf.</li>
    <li>Prüfe bei jeder Tabelle bewusst, ob wirklich alle Kombinationen vorkommen.</li>
  </ul>
</div>
