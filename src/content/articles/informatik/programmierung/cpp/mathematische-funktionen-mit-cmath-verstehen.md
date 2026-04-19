---
title: Mathematische Funktionen mit <cmath> verstehen
description: Verstehe, warum <cmath> eingebunden wird und welche typischen mathematischen Funktionen in C++ bereitstehen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - cmath
  - mathematische-funktionen-mit-cmath-verstehen
learningGoals:
  - Du erklärst, warum <code>&lt;cmath&gt;</code> eingebunden wird.
  - Du ordnest typische mathematische Funktionen wie sqrt, pow, floor und ceil grob ein.
  - Du liest Funktionsaufrufe eher nach Zweck als nach reiner Symbolform.
practiceIdeas:
  - Ordne Funktionen nach ihrem Zweck: runden, Wurzel, Potenz, Vergleich.
  - Erkläre in Worten, was ein kleiner Funktionsaufruf bewirkt.
  - Suche passende Funktionen für typische Mini-Probleme.
commonMistakes:
  - Funktionsnamen nur auswendig zu lernen.
  - Funktionen ohne Eingabe und Ergebnis inhaltlich zu lesen.
  - Zu glauben, alle mathematischen Operationen seien automatische Sprachgrundlage.
keyTakeaways:
  - <cmath> stellt viele mathematische Funktionen bereit.
  - Funktionsnamen zeigen meist schon ihren Zweck.
  - Ein Funktionsaufruf ist leichter verständlich, wenn du ihn als Frage an die Funktion liest.
recognizeSignals:
  - Es geht um sqrt, pow, ceil, floor, fabs oder ähnliche Namen.
  - Du sollst erklären, welche Funktion für welches Rechenziel passt.
  - In Codebeispielen werden mathematische Hilfsfunktionen eingebunden.
selfCheckPoints:
  - Kann ich erklären, warum <code>&lt;cmath&gt;</code> eingebunden wird?
  - Kann ich typische Funktionen grob nach Zweck ordnen?
  - Kann ich einen Funktionsaufruf in Worte übersetzen?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - cmath
  - funktionen
draft: false
---

## Grundidee

Viele mathematische Aufgaben lassen sich in C++ nicht nur mit den Grundrechenarten lösen. Für Wurzeln, Potenzen, Rundungen oder bestimmte Vergleichsfunktionen wird oft die Header-Datei <code>&lt;cmath&gt;</code> eingebunden.

```cpp
#include <cmath>
```

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Wurzel und Potenz statt Handarbeit</h3>
  <p>Wenn du die Quadratwurzel oder eine Potenz berechnen willst, musst du diese Logik nicht selbst aufbauen. Funktionen wie <code>sqrt(...)</code> oder <code>pow(...)</code> geben dir dafür einen klaren Funktionsaufruf.</p>
</div>

## Typische Funktionen grob ordnen

<div class="visual-grid">
  <div class="visual-item">
    <strong>sqrt(x)</strong>
    <span>berechnet die Quadratwurzel von x</span>
  </div>
  <div class="visual-item">
    <strong>pow(x, y)</strong>
    <span>berechnet x hoch y</span>
  </div>
  <div class="visual-item">
    <strong>ceil(x) / floor(x)</strong>
    <span>rundet nach oben oder unten</span>
  </div>
  <div class="visual-item">
    <strong>fabs(x)</strong>
    <span>liefert den Betrag von x</span>
  </div>
</div>

## Nicht jede Funktion hat denselben Zweck

<div class="compare-card">
  <p class="card-kicker">Funktionsgruppen</p>
  <h3>Frage zuerst nach dem Rechenziel</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Runden</strong>
      <span><code>ceil</code> und <code>floor</code> helfen, wenn du ganze Grenzwerte brauchst.</span>
    </div>
    <div class="compare-item">
      <strong>Abstand und Größe</strong>
      <span><code>fabs</code>, <code>sqrt</code> oder <code>hypot</code> helfen bei Betrag, Wurzel und Länge.</span>
    </div>
    <div class="compare-item">
      <strong>Wachstum</strong>
      <span><code>pow</code>, <code>exp</code> oder Logarithmen beschreiben Potenzen und Umkehrungen.</span>
    </div>
  </div>
</div>

## Funktionsaufrufe ruhig lesen

```cpp
double a = sqrt(25);
double b = pow(2, 3);
double c = ceil(4.2);
```

Eine gute Einsteiger-Lesart ist:

- <code>sqrt(25)</code> fragt nach der Quadratwurzel von 25,
- <code>pow(2, 3)</code> fragt nach 2 hoch 3,
- <code>ceil(4.2)</code> fragt nach dem kleinsten ganzen Wert oberhalb von 4.2.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Welche Funktion steht da?</strong>
    <span>Lies zuerst den Namen wie einen Hinweis auf den Zweck.</span>
  </div>
  <div class="step-item">
    <strong>2. Welche Werte gehen hinein?</strong>
    <span>Prüfe die Argumente in den Klammern.</span>
  </div>
  <div class="step-item">
    <strong>3. Welche Art Ergebnis kommt heraus?</strong>
    <span>Frage nach Wurzel, Potenz, Rundung oder Vergleich.</span>
  </div>
  <div class="step-item">
    <strong>4. Passt die Funktion zur Aufgabe?</strong>
    <span>Ordne zuletzt erst die fachliche Absicht ein.</span>
  </div>
</div>
