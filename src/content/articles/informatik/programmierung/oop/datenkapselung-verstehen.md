---
title: "Datenkapselung verstehen"
description: "Verstehe, warum Daten in Klassen geschuetzt und nur ueber geeignete Methoden zugaenglich gemacht werden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "datenkapselung-verstehen"]
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

Datenkapselung bedeutet, dass die Daten eines Objekts nicht beliebig offen zugaenglich sind, sondern durch die Klasse geschuetzt werden.

## Warum Kapselung mehr ist als Verstecken

Kapselung soll nicht einfach nur "etwas unsichtbar machen". Sie hilft dabei,

- ungueltige Aenderungen zu verhindern,
- einen sauberen Objektzustand zu bewahren,
- Aenderungen und Tests besser zu kontrollieren.

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Offene Daten vs. gekapselte Daten</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Offen</strong>
      <span>Viele Programmteile koennen direkt schreiben. Das wirkt bequem, macht aber Regeln schwerer durchsetzbar.</span>
    </div>
    <div class="compare-item">
      <strong>Gekapselt</strong>
      <span>Die Klasse entscheidet selbst, ueber welche Methoden gelesen oder geaendert werden darf.</span>
    </div>
  </div>
</div>

## Sichtbarkeit mitdenken

private, protected und public verteilen die Rollen innerhalb der Klasse. Interne Daten bleiben privat, Hilfsmethoden koennen geschuetzt sein, und die nutzbare Schnittstelle liegt oeffentlich.

## Leitbeispiel: Klasse Zeit

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Minute nicht beliebig direkt aendern</h3>
  <p>Wenn <code>minute</code> intern gespeichert wird, kann die Klasse selbst festlegen, wie gelesen oder geaendert wird. Ein Getter macht den Wert sichtbar, ein Setter kann Regeln durchsetzen. Dadurch bleibt die Uhrzeit-Klasse geordneter als bei freiem Direktzugriff.</p>
</div>

## Getter und Setter als Folge von Kapselung

Getter und Setter sind keine voellig eigene Insel. Sie sind oft einfach die praktische Form, in der Kapselung im Code sichtbar wird.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Interne Daten suchen</strong>
    <span>Welche Attribute sollen nicht direkt von aussen veraendert werden?</span>
  </div>
  <div class="step-item">
    <strong>2. Schnittstelle suchen</strong>
    <span>Welche Methoden liest oder aendert die Daten kontrolliert?</span>
  </div>
  <div class="step-item">
    <strong>3. Schutz begruenden</strong>
    <span>Welche fachlich unsauberen Zustaende werden so vermieden?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Datenkapselung schuetzt nicht nur Daten, sondern auch die fachliche Verlaesslichkeit eines Objekts.</p>
</div>
## Ergaenzung: Kapselung heisst auch, Objektzustaende pruefbar zu halten

Kapselung wird besonders wertvoll, wenn Setter nicht nur "einfach schreiben", sondern gueltige Grenzen oder Regeln durchsetzen. Dann schuetzt die Klasse nicht nur Daten, sondern auch die fachliche Sinnhaftigkeit ihres Zustands.
