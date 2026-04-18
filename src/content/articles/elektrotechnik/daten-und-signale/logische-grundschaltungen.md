---
title: Logische Grundschaltungen
description: Verstehe UND, ODER und NICHT als einfache Modelle zur Verarbeitung digitaler Signale.
subject: elektrotechnik
section: Daten und Signale
topicPath:
  - daten-und-signale
  - logische-grundschaltungen
tags:
  - logik
  - digitaltechnik
  - und
  - oder
  - nicht
learningGoals:
  - "Du ordnest UND, ODER und NICHT einfachen digitalen Situationen zu."
  - "Du verstehst Logikgatter als Verarbeitung klarer Signalzustände."
  - "Du liest einfache Eingabe-Ausgabe-Beziehungen in logischen Schaltungen."
practiceIdeas:
  - "Formuliere Alltagssituationen als einfache logische Bedingungen."
  - "Vergleiche, wann ein Ausgang nur bei beiden, bei mindestens einem oder genau beim Gegenzustand aktiv wird."
  - "Lies Tabellen und Skizzen bewusst über Eingänge und resultierenden Ausgang."
commonMistakes:
  - "UND und ODER nur sprachlich, aber nicht als Schaltregel zu verstehen."
  - "Zu übersehen, dass digitale Logik auf klaren Zuständen basiert."
  - "Nicht zwischen Bedingung und Ergebnis zu trennen."
keyTakeaways:
  - "Logikgatter verarbeiten digitale Zustände nach festen Regeln."
  - "UND, ODER und NICHT sind Grundbausteine digitaler Schaltungen."
  - "Eingänge und Ausgang stehen in klar beschreibbaren Beziehungen."
recognizeSignals:
  - "Es geht um logische Bedingungen, Signalzustände oder einfache Schaltungen mit Ein- und Ausgängen."
  - "Du sollst erklären, wann ein Ausgang aktiv oder inaktiv wird."
  - "Ein Beispiel fragt nach UND, ODER, NICHT oder einer passenden Wahrheitstabelle."
selfCheckPoints:
  - "Kann ich UND, ODER und NICHT an Beispielen unterscheiden?"
  - "Kann ich Eingänge und Ausgang sauber in Beziehung setzen?"
  - "Kann ich eine einfache digitale Regel in Worten erklären?"
level: einfach
draft: false
---

## Warum logische Grundschaltungen wichtig sind

Digitale Systeme arbeiten mit klaren Zuständen. Um aus solchen Zuständen Entscheidungen und Steuerungen zu machen, braucht man feste Regeln. Logische Grundschaltungen sind genau solche Regeln in technischer Form.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>UND als gemeinsame Bedingung</h3>
  <p>Eine Anlage soll nur dann starten, wenn ein Hauptschalter aktiv ist <strong>und</strong> eine Freigabe vorliegt. Erst wenn beide Eingänge den passenden Zustand haben, wird auch der Ausgang aktiv. Das ist die Grundidee eines UND-Zusammenhangs.</p>
</div>

## Klare Eingänge, klare Ausgänge

Logische Grundschaltungen arbeiten typischerweise mit digitalen Zuständen wie 0 und 1 oder aus und an. Aus diesen Eingängen entsteht nach einer festen Regel ein Ausgang.

<div class="figure-card">
  <p class="card-kicker">Logikbild</p>
  <h3>Von Eingängen zur Entscheidung</h3>
  <div class="signal-flow compact">
    <div><strong>Eingänge</strong><span>zum Beispiel A und B</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Regel anwenden</strong><span>UND, ODER oder NICHT</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>Ausgang</strong><span>aktiv oder nicht aktiv</span></div>
  </div>
</div>

## UND

Beim UND-Zusammenhang wird der Ausgang nur dann aktiv, wenn beide relevanten Eingänge aktiv sind.

## ODER

Beim ODER-Zusammenhang reicht es aus, wenn mindestens ein passender Eingang aktiv ist.

## NICHT

NICHT kehrt einen Zustand um: Aus aktiv wird inaktiv, aus 1 wird 0.

<div class="comparison-grid">
  <section>
    <p class="card-kicker">UND</p>
    <h3>Beide Bedingungen müssen gelten</h3>
    <p>Gut, wenn wirklich alles gleichzeitig erfüllt sein muss.</p>
  </section>
  <section>
    <p class="card-kicker">ODER</p>
    <h3>Eine Bedingung reicht</h3>
    <p>Gut, wenn mehrere Wege zum selben Ergebnis führen dürfen.</p>
  </section>
  <section>
    <p class="card-kicker">NICHT</p>
    <h3>Zustand umkehren</h3>
    <p>Gut, wenn ein Signal genau entgegengesetzt weiterverwendet werden soll.</p>
  </section>
</div>

<pre><code>UND:
A  B | Y
0  0 | 0
0  1 | 0
1  0 | 0
1  1 | 1</code></pre>

## Gute und schwache Logik-Erklärung

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Bedingung und Ausgang sauber trennen</h3>
    <p>Du formulierst zuerst die Regel in Worten und prüfst danach, wann der Ausgang aktiv wird.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur Werte merken</h3>
    <p>Wenn die 0/1-Kombinationen nur auswendig gelernt werden, bleibt unklar, welche Bedingung das Gatter eigentlich beschreibt.</p>
  </section>
</div>

## Warum diese Modelle so nützlich sind

Sie helfen, digitale Technik nicht als Blackbox zu sehen, sondern als klar regelgeleitete Verarbeitung von Signalen. Genau damit werden auch komplexere Schaltungen später besser verständlich.

## Eine ruhige Lesestrategie

Frage bei jedem Beispiel:

- Welche Eingänge gibt es?
- Welche Bedingung beschreibt die Regel?
- Wann ist der Ausgang aktiv?
- Wie würde dieselbe Regel in Worten klingen?

<div class="note-panel">
  <p><strong>Merke:</strong> Logikgatter sind keine bloßen Symbole. Sie beschreiben präzise Regeln dafür, wie aus Eingängen ein Ausgang entsteht.</p>
</div>

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So kannst du Logik klarer lesen</h3>
  <ul>
    <li>Benenne zuerst die Eingänge und ihre Zustände.</li>
    <li>Formuliere danach die Regel in einem Satz.</li>
    <li>Prüfe erst dann, wann der Ausgang aktiv wird.</li>
  </ul>
</div>
