---
title: for, while und do while vergleichen
description: Verstehe, wie sich typische Schleifen in C++ nach Prüfzeitpunkt, Zählidee und Ablaufgefühl unterscheiden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - kontrollstrukturen
  - for-while-und-do-while-vergleichen
learningGoals:
  - Du vergleichst <code>for</code>, <code>while</code> und <code>do while</code> nach ihrer Wiederholungsidee.
  - Du erkennst, wann eine Schleife vor dem ersten Durchlauf prüft und wann danach.
  - Du begründest die Schleifenwahl über Ablauf und Stoppregel.
practiceIdeas:
  - Vergleiche das Durchlaufen fester Indizes mit einer offenen Wiederholung bis zu einer Bedingung.
  - Erkläre, warum ein Menü mindestens einmal angezeigt werden soll.
  - Lies Schleifen immer zuerst über Stoppregel und Wiederholungsobjekt.
commonMistakes:
  - Alle Schleifen als austauschbar zu sehen.
  - Den Unterschied zwischen kopfgesteuert und fußgesteuert zu übergehen.
  - Die Zählidee einer for-Schleife nicht von der offenen Bedingung einer while-Schleife zu trennen.
keyTakeaways:
  - for passt oft zu klaren Zählschritten.
  - while passt gut zu offener Wiederholung mit Bedingung am Anfang.
  - do while garantiert mindestens einen Durchlauf.
recognizeSignals:
  - Es geht um Schleifenarten, Prüfzeitpunkt, Zähler oder Stoppregel.
  - Du sollst eine passende Schleife auswählen oder erklären.
  - In Beispielen musst du Wiederholungsidee und Abbruchbedingung sauber benennen.
selfCheckPoints:
  - Kann ich kopfgesteuerte und fußgesteuerte Schleifen unterscheiden?
  - Kann ich erklären, wann eine Schleife mindestens einmal laufen soll?
  - Kann ich for, while und do while nach ihrem Ablaufgefühl vergleichen?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - schleifen
  - kontrollstrukturen
draft: false
---

## Grundidee

Schleifen sind nicht nur „Wiederholung“. Sie unterscheiden sich auch darin, wann geprüft wird, ob ein weiterer Durchlauf erlaubt ist, und wie stark die Wiederholung über einen Zähler oder über eine offene Bedingung gedacht wird.

<div class="visual-grid">
  <div class="visual-item">
    <strong><code>for</code></strong>
    <span>Gut für zählende Abläufe mit Start, Bedingung und Änderung.</span>
  </div>
  <div class="visual-item">
    <strong><code>while</code></strong>
    <span>Gut für offene Wiederholung, solange eine Bedingung am Anfang gilt.</span>
  </div>
  <div class="visual-item">
    <strong><code>do while</code></strong>
    <span>Gut, wenn der Schleifenblock mindestens einmal laufen soll, bevor geprüft wird.</span>
  </div>
</div>

## Prüfzeitpunkt ist der Schlüssel

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Vorher prüfen oder nachher?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Kopfgesteuert</strong>
      <span><code>for</code> und <code>while</code> prüfen vor dem nächsten Durchlauf.</span>
    </div>
    <div class="compare-item">
      <strong>Fußgesteuert</strong>
      <span><code>do while</code> prüft erst nach dem ersten Durchlauf.</span>
    </div>
  </div>
</div>

## Typische Denkbilder

- **for**: „Ich laufe 10 Elemente durch.“
- **while**: „Ich mache weiter, solange etwas gilt.“
- **do while**: „Ich zeige das Menü mindestens einmal und prüfe danach erneut.“

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Schleife wird nicht nach Geschmack gewählt, sondern nach Stoppregel, Prüfzeitpunkt und Wiederholungsform.</p>
</div>
