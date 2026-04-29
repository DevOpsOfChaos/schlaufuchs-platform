---
title: "fopen-Dateimodi r, a, w und Plus-Varianten vergleichen"
description: "Verstehe, wie sich Lesemodus, Schreibmodus, Anhängen und Plus-Varianten beim Öffnen einer Datei unterscheiden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "php", "fopen-dateimodi-r-a-w-und-plus-varianten-vergleichen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Beim Öffnen einer Datei entscheidet nicht nur der Dateiname, sondern auch der Modus darüber, wie das Skript mit der Datei arbeiten darf. Genau deshalb sind die Buchstaben bei <code>fopen</code> fachlich wichtig.

<div class="compare-card">
  <p class="card-kicker">Modi grob gelesen</p>
  <h3>Was soll mit der Datei passieren?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>r</strong>
      <span>Datei lesen, nicht überschreiben.</span>
    </div>
    <div class="compare-item">
      <strong>w</strong>
      <span>Datei zum Schreiben öffnen und vorhandenen Inhalt neu beginnen.</span>
    </div>
    <div class="compare-item">
      <strong>a</strong>
      <span>Neue Inhalte hinten anhängen, ohne den bisherigen Anfang neu zu schreiben.</span>
    </div>
  </div>
</div>

## Plus-Varianten ruhig lesen

Die Plus-Varianten wie <code>r+</code>, <code>w+</code> oder <code>a+</code> erlauben zusätzlich die jeweils andere Richtung. Fachlich heißt das oft: lesen und schreiben statt nur einer Richtung.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Logdatei vs. Konfigurationsdatei</h3>
  <p>Eine Logdatei möchte man oft nur ergänzen. Eine Datei, die komplett neu erzeugt werden soll, darf überschrieben werden. Genau an solchen Fällen zeigt sich, dass der Modus keine Formalität ist.</p>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Der Dateimodus ist die kurze Antwort auf die Frage: lesen, überschreiben oder nur ergänzen?</p>
</div>
