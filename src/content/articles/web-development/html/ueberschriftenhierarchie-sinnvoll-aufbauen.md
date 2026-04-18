---
title: Überschriftenhierarchie sinnvoll aufbauen
description: Verstehe, warum Überschriften nicht nur groß aussehen sollen, sondern die inhaltliche Struktur einer Seite klar gliedern.
subject: web-development
section: HTML
topicPath:
  - html
  - ueberschriftenhierarchie-sinnvoll-aufbauen
learningGoals:
  - Du erklärst die Grundidee einer Überschriftenhierarchie.
  - Du ordnest Überschriften nach Inhaltsebene statt nach Wunschgröße.
  - Du erkennst unruhige oder widersprüchliche Überschriftenstrukturen.
practiceIdeas:
  - Gliedere einen kurzen Seitentext in Hauptüberschrift, Abschnittsüberschriften und Unterpunkte.
  - Prüfe bei einem Beispiel, ob Ebenen übersprungen werden.
  - Erkläre, warum die Überschriftenreihenfolge etwas über den Inhalt und nicht über das Design sagt.
commonMistakes:
  - Überschriften nach Optik statt nach Struktur auszuwählen.
  - Ebenen ohne Grund zu überspringen.
  - Mehrere Hauptüberschriften für denselben Inhaltsbereich zu setzen.
keyTakeaways:
  - Überschriften bilden eine Inhaltsstruktur.
  - h1 bis h6 beschreiben Ebenen, nicht Größenwünsche.
  - Eine ruhige Hierarchie macht Seiten verständlicher.
recognizeSignals:
  - Es geht um Seitengliederung, Abschnitte oder die Reihenfolge von Überschriftsebenen.
  - Du sollst bewerten, ob eine Struktur logisch aufgebaut ist.
  - In Aufgaben ist die Frage wichtig, welche Überschrift Hauptpunkt und welche Unterpunkt ist.
selfCheckPoints:
  - Kann ich eine Haupt- von einer Unterüberschrift unterscheiden?
  - Kann ich eine unruhige Hierarchie erkennen?
  - Kann ich erklären, warum die Ebene wichtiger ist als die Optik?
tags:
  - html
  - ueberschriften
  - struktur
  - semantik
level: einfach
draft: false
---

## Grundidee

Überschriften machen eine Seite nicht nur optisch lesbarer. Sie zeigen vor allem, **wie Inhalte zusammengehören**. Deshalb brauchen Webseiten eine sinnvolle Überschriftenhierarchie.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Artikel mit Unterthemen</h3>
  <p>Ein Artikel hat einen Haupttitel, danach mehrere Abschnitte und in einem Abschnitt noch Unterpunkte. Wenn alle Überschriften dieselbe Ebene hätten, wäre die Struktur unklar. Erst die Hierarchie macht sichtbar, was Hauptpunkt und was Unterpunkt ist.</p>
</div>

## Was Hierarchie bedeutet

Eine Hierarchie ordnet Inhalte in Ebenen:

- Hauptüberschrift,
- Abschnitt,
- Unterabschnitt,
- weitere Unterpunkte.

HTML bildet diese Ebenen mit <code>h1</code> bis <code>h6</code> ab.

## Optik und Ebene trennen

<div class="compare-card">
  <p class="card-kicker">Wichtige Unterscheidung</p>
  <h3>Ebene ist nicht gleich Design</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Hierarchie</strong>
      <span>Sie beschreibt die inhaltliche Stellung einer Überschrift.</span>
    </div>
    <div class="compare-item">
      <strong>Optik</strong>
      <span>Sie wird mit CSS gestaltet und ist nicht der Grund für die Wahl von h1, h2 oder h3.</span>
    </div>
  </div>
</div>

## Typische Strukturidee

<div class="figure-card">
  <p class="card-kicker">Strukturbild</p>
  <h3>Vom Hauptthema zu Unterpunkten</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>h1</strong><span>Gesamtes Hauptthema der Seite</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>h2</strong><span>Abschnitte innerhalb des Hauptthemas</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>h3</strong><span>Unterpunkte innerhalb eines Abschnitts</span></div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Was ist das Hauptthema der ganzen Seite?
2. Welche Inhalte gehören direkt darunter?
3. Gibt es Unterpunkte innerhalb eines Abschnitts?
4. Werden Ebenen logisch aufgebaut oder ohne Grund übersprungen?

<div class="note-panel">
  <p><strong>Merke:</strong> Überschriftenstufen beschreiben die Inhaltsordnung einer Seite. Wie groß sie aussehen, entscheidet später das CSS.</p>
</div>
