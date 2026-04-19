---
title: fopen-Dateimodi r, a, w und Plus-Varianten vergleichen
description: Verstehe, wie sich Lesemodus, Schreibmodus, Anhängen und Plus-Varianten beim Öffnen einer Datei unterscheiden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - fopen-dateimodi-r-a-w-und-plus-varianten-vergleichen
learningGoals:
  - Du unterscheidest Lesen, Schreiben und Anhängen fachlich voneinander.
  - Du erklärst grob, was die Plus-Varianten zusätzlich erlauben.
  - Du wählst für einfache Fälle einen passenden Dateimodus begründet aus.
practiceIdeas:
  - Ordne einen Modus einer typischen Aufgabe wie "nur lesen" oder "hinten anhängen" zu.
  - Vergleiche, ob ein Modus bestehenden Inhalt löscht oder bewahrt.
  - Begründe, warum ein Logfile oft anders geöffnet wird als eine Datei zum Überschreiben.
commonMistakes:
  - r, w und a nur als Buchstaben auswendig zu lernen.
  - Zu übersehen, dass manche Modi Inhalt löschen können.
  - Plus-Varianten nicht als "lesen und zusätzlich schreiben" zu verstehen.
keyTakeaways:
  - r steht grob für Lesen, w für neu schreiben, a für Anhängen.
  - Plus-Varianten erweitern den Modus um die jeweils andere Richtung.
  - Die Moduswahl ist eine Fachentscheidung über den gewünschten Dateiumgang.
recognizeSignals:
  - Es geht um <code>fopen(..., "r")</code>, <code>"w"</code>, <code>"a"</code> oder Varianten mit Plus.
  - Du sollst entscheiden, ob bestehender Inhalt erhalten, ergänzt oder überschrieben werden soll.
  - In Beispielen tauchen Logdateien, Konfigurationen oder Textspeicherung auf.
selfCheckPoints:
  - Kann ich sagen, wann r passt?
  - Kann ich sagen, wann w gefährlich sein kann?
  - Kann ich erklären, warum a gut zu Anhängen passt?
level: einfach
tags:
  - informatik
  - programmierung
  - php
  - fopen
  - dateimodus
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
