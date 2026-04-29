---
title: "Textwerkzeuge mit grep, cut und wc"
description: "Nutze einfache Shell-Werkzeuge, um Texte zu durchsuchen, Felder auszulesen und Ausgaben zusammenzufassen."
subject: "linux"
section: "Shell"
topicPath: ["shell", "textwerkzeuge-mit-grep-cut-und-wc"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Shell"]
draft: false
---
## Warum diese Werkzeuge zusammenpassen

Viele Shell-Aufgaben bestehen nicht darin, große Programme zu schreiben, sondern Ausgaben gezielt zu lesen und weiterzuverarbeiten. Genau dafür sind kleine Textwerkzeuge nützlich.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Aus einer Liste nur das Relevante holen</h3>
  <p>Mit <code>grep</code> findest du nur die Zeilen, die ein Muster enthalten. Mit <code>cut</code> liest du daraus gezielt Felder aus. Mit <code>wc</code> kannst du anschließend zusammenfassen, wie viele Zeilen oder Wörter übrig geblieben sind.</p>
</div>

## Drei Rollen statt ein Werkzeugbrei

<div class="comparison-grid">
  <section>
    <p class="card-kicker">grep</p>
    <h3>Zeilen filtern</h3>
    <p>Hilft, wenn du aus einer Ausgabe nur die Zeilen mit einem bestimmten Muster brauchst.</p>
    <div class="command-strip"><code>grep fox daten.txt</code></div>
  </section>
  <section>
    <p class="card-kicker">cut</p>
    <h3>Felder auswählen</h3>
    <p>Nützlich, wenn aus geordneten Zeilen nur bestimmte Teile herausgelesen werden sollen.</p>
    <div class="command-strip"><code>cut -d: -f1 daten.txt</code></div>
  </section>
  <section>
    <p class="card-kicker">wc</p>
    <h3>Zählen und zusammenfassen</h3>
    <p>Gut, wenn am Ende nicht der Text, sondern seine Größe oder Anzahl wichtig ist.</p>
    <div class="command-strip"><code>wc daten.txt</code></div>
  </section>
</div>

## grep

<code>grep</code> durchsucht Text nach einem Muster. Praktisch betrachtet filtert es meist Zeilen.

Das ist hilfreich, wenn du aus einer längeren Ausgabe nur die Zeilen brauchst, die ein bestimmtes Wort oder Zeichenmuster enthalten.

## cut

<code>cut</code> schneidet aus Zeilen bestimmte Teile heraus. Besonders nützlich ist das bei klar getrennten Feldern, zum Beispiel bei Doppelpunkten oder Kommas.

## wc

<code>wc</code> zählt Zeilen, Wörter oder Zeichen. Damit wird aus einer großen Ausgabe eine kleine Zusammenfassung.

<div class="figure-card">
  <p class="card-kicker">Arbeitsfolge</p>
  <h3>So können die Werkzeuge zusammenspielen</h3>
  <div class="signal-flow compact">
    <div><strong>grep</strong><span>relevante Zeilen finden</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>cut</strong><span>wichtige Felder herausholen</span></div>
    <div class="flow-arrow">→</div>
    <div><strong>wc</strong><span>Ergebnis zählen</span></div>
  </div>
</div>

## Warum diese Werkzeuge nicht austauschbar sind

- <code>grep</code> sucht und filtert,
- <code>cut</code> extrahiert,
- <code>wc</code> zählt.

Wer diese Rollen sauber trennt, liest Shell-Zeilen viel ruhiger.

<div class="practice-card wide-bleed">
  <p class="card-kicker">Zum Anwenden</p>
  <h3>So wählst du das passende Werkzeug</h3>
  <ul>
    <li>Frage zuerst: Suche ich Zeilen, Felder oder Zählwerte?</li>
    <li>Prüfe danach, welches Werkzeug genau diese Aufgabe erfüllt.</li>
    <li>Kombiniere die Werkzeuge erst, wenn die Einzelrollen klar sind.</li>
  </ul>
</div>
