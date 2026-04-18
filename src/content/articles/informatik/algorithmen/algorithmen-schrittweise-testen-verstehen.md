---
title: Algorithmen schrittweise testen verstehen
description: Verstehe, wie man einen Ablauf mit Beispielwerten ruhig durchgeht, um Logikfehler und Entscheidungsstellen sichtbar zu machen.
subject: informatik
section: Algorithmen
topicPath:
  - algorithmen
  - probleme-in-teilprobleme-zerlegen
  - algorithmen-schrittweise-testen-verstehen
learningGoals:
  - Du erklärst, warum Testläufe mit Beispielwerten beim Prüfen von Algorithmen helfen.
  - Du beschreibst einen Ablauf Schritt für Schritt statt nur als grobe Idee.
  - Du erkennst eher, an welcher Stelle ein Entscheidungs- oder Reihenfolgefehler entsteht.
practiceIdeas:
  - Gehe einen kleinen Such- oder Prüfablauf mit festen Beispielwerten durch.
  - Notiere Zwischenzustände statt nur Start und Ende.
  - Prüfe besonders Verzweigungen und Wiederholungen mit ruhigen Testfällen.
commonMistakes:
  - nur Start und Ergebnis anzuschauen.
  - Zwischenwerte nicht mitzuschreiben.
  - einen Ablauf „im Gefühl“ statt nachvollziehbar zu testen.
keyTakeaways:
  - Ein Testlauf macht versteckte Ablaufentscheidungen sichtbar.
  - Zwischenzustände helfen, Fehlerstellen genauer zu finden.
  - Gutes Testen beginnt oft schon vor dem eigentlichen Programmcode.
recognizeSignals:
  - Es geht um Algorithmen, Ablaufpläne, Verzweigungen oder Schleifen.
  - Du sollst erklären, was ein Programm oder Ablauf mit konkreten Eingaben tut.
  - In Beispielen ist die Reihenfolge der Zustände wichtiger als die reine Idee des Verfahrens.
selfCheckPoints:
  - Kann ich einen Ablauf mit Testwerten sauber durchgehen?
  - Kann ich Zwischenzustände notieren?
  - Kann ich erklären, an welcher Stelle ein Fehler sichtbar wird?
tags:
  - informatik
  - algorithmus
  - testlauf
  - dry-run
level: einfach
draft: false
---

## Grundidee

Ein Algorithmus kann auf dem Papier logisch klingen und trotzdem an einer kleinen Stelle falsch abbiegen. Darum hilft es, einen Ablauf mit **konkreten Beispielwerten** durchzugehen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Zahl soll geprüft werden</h3>
  <p>Ein kleiner Ablauf sagt: „Wenn die Zahl größer als 10 ist, gib groß aus, sonst klein.“ Auf den ersten Blick ist das einfach. Erst beim Schritt-für-Schritt-Test mit 8, 10 und 12 sieht man ruhig, wie die Entscheidung tatsächlich greift.</p>
</div>

## Warum Testläufe helfen

Ein Testlauf zwingt dazu,

- Eingabewerte festzulegen,
- jeden Schritt sichtbar zu machen,
- Zwischenzustände mitzuschreiben,
- und Entscheidungen nicht nur gefühlt, sondern nachvollziehbar zu prüfen.

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Vom groben Ablauf zur prüfbaren Logik</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Eingabe wählen</strong><span>zum Beispiel 8 oder 12</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Schritt durchgehen</strong><span>jede Entscheidung sichtbar notieren</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Ergebnis prüfen</strong><span>passt die Ausgabe zur Logik?</span></div>
  </div>
</div>

## Besonders wichtig bei Verzweigungen und Schleifen

Gerade dort entstehen typische Denkfehler:

- eine Bedingung wird falsch gelesen,
- ein Zwischenschritt wird übersprungen,
- eine Wiederholung läuft zu oft oder zu wenig.

<div class="compare-card">
  <p class="card-kicker">Ruhige Prüfhaltung</p>
  <h3>Nicht nur „scheint zu stimmen“, sondern sichtbar testen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Nur grob gedacht</strong>
      <span>Der Ablauf klingt plausibel, aber kritische Zwischenzustände bleiben unsichtbar.</span>
    </div>
    <div class="compare-item">
      <strong>Mit Testwerten geprüft</strong>
      <span>Entscheidungen, Zustände und Reihenfolge werden nachvollziehbar.</span>
    </div>
  </div>
</div>

## Eine kleine Testtabelle

<pre><code>Eingabe: 12
Schritt 1: Zahl lesen
Schritt 2: Prüfen, ob > 10
Schritt 3: Ja → Ausgabe "groß"</code></pre>

Diese einfache Notation ist oft schon genug, um einen Denkfehler sichtbar zu machen.

## Eine ruhige Prüfstrategie

1. Wähle konkrete Testwerte.
2. Notiere jeden wichtigen Schritt.
3. Achte besonders auf Entscheidungen und Wiederholungen.
4. Vergleiche am Ende Erwartung und tatsächlichen Ablauf.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein guter Testlauf zeigt nicht nur das Ergebnis, sondern den Weg dorthin.</p>
</div>
