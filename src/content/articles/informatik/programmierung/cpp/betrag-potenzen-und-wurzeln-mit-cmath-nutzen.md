---
title: Betrag, Potenzen und Wurzeln mit <cmath> nutzen
description: Verstehe an kleinen Beispielen, wann fabs, pow, sqrt und hypot fachlich sinnvoll sind.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - cmath
  - betrag-potenzen-und-wurzeln-mit-cmath-nutzen
learningGoals:
  - Du ordnest fabs, pow, sqrt und hypot passenden Rechenzielen zu.
  - Du erklärst, was an kleinen Zahlenbeispielen berechnet wird.
  - Du liest Funktionsnamen nicht nur formal, sondern fachlich passend.
practiceIdeas:
  - Vergleiche, wann Betrag und wann Quadratwurzel gebraucht werden.
  - Suche ein passendes Beispiel für Potenz und Pythagoras.
  - Übersetze Funktionsaufrufe in Alltagssprache.
commonMistakes:
  - sqrt und pow gegeneinander zu verwechseln.
  - hypot nur als neues Symbol statt als Pythagoras-Abkürzung zu sehen.
  - Betrag und Vorzeichenblindheit durcheinanderzubringen.
keyTakeaways:
  - fabs entfernt das Vorzeichen und liefert den Betrag.
  - pow beschreibt Potenzen, sqrt die Quadratwurzel.
  - hypot bündelt die Pythagoras-Idee in einer Funktion.
recognizeSignals:
  - Es geht um Abstände, Potenzen, Wurzeln oder rechtwinklige Dreiecke.
  - Du sollst sagen, welche Funktion zu einem Rechenziel passt.
  - In Codebeispielen musst du mathematische Funktionsnamen in Worte übersetzen.
selfCheckPoints:
  - Kann ich fabs, pow, sqrt und hypot unterscheiden?
  - Kann ich zu kleinen Beispielen die richtige Funktion wählen?
  - Kann ich erklären, was der Funktionsaufruf fachlich tut?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - cmath
  - sqrt
  - pow
  - hypot
draft: false
---

## Grundidee

Einige mathematische Funktionen tauchen besonders oft auf, weil sie typische Rechenziele abdecken: Betrag, Potenz, Wurzel und geometrische Länge.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Vier Fragen, vier Funktionen</h3>
  <p>Willst du nur das Vorzeichen entfernen, brauchst du etwas anderes als für eine Potenz oder eine Dreiecksseite. Genau deshalb ist es sinnvoll, diese Standardfunktionen klar voneinander zu trennen.</p>
</div>

## Vier häufige Funktionen

<div class="comparison-grid">
  <section>
    <p class="card-kicker">fabs(x)</p>
    <h3>Betrag</h3>
    <p>Aus <code>-7.5</code> wird <code>7.5</code>. Es geht um die Größe ohne Vorzeichen.</p>
  </section>
  <section>
    <p class="card-kicker">pow(x, y)</p>
    <h3>Potenzen</h3>
    <p>Berechnet x hoch y, zum Beispiel <code>pow(2, 3)</code> = 8.</p>
  </section>
  <section>
    <p class="card-kicker">sqrt(x)</p>
    <h3>Quadratwurzel</h3>
    <p>Fragt nach der Zahl, deren Quadrat wieder x ergibt, etwa <code>sqrt(25)</code> = 5.</p>
  </section>
  <section>
    <p class="card-kicker">hypot(x, y)</p>
    <h3>Pythagoras</h3>
    <p>Berechnet direkt <code>√(x² + y²)</code> und ist deshalb für rechtwinklige Dreiecke praktisch.</p>
  </section>
</div>

## Beispielhafte Lesart

```cpp
double a = fabs(-3.2);
double b = pow(3, 2);
double c = sqrt(49);
double d = hypot(3, 4);
```

Ruhige Deutung:

- <code>a</code> ist der Betrag von -3.2,
- <code>b</code> ist 3 hoch 2,
- <code>c</code> ist die Quadratwurzel aus 49,
- <code>d</code> ist die Länge der Hypotenuse zu 3 und 4.

## Gute und schwache Zuordnung

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Vom Rechenziel zur Funktion</h3>
    <p>Du fragst zuerst: Geht es um Betrag, Potenz, Wurzel oder eine geometrische Länge?</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Nur Namen auswendig lernen</h3>
    <p>Dann sehen die Funktionen ähnlich technisch aus, ohne dass ihr mathemischer Zweck klar wird.</p>
  </section>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Welches Rechenziel liegt vor?</strong>
    <span>Geht es um Vorzeichen, Wachstum, Wurzel oder Länge?</span>
  </div>
  <div class="step-item">
    <strong>2. Welche Funktion passt dazu?</strong>
    <span>Ordne erst danach den Funktionsnamen zu.</span>
  </div>
  <div class="step-item">
    <strong>3. Was bedeuten die Argumente?</strong>
    <span>Prüfe die Werte in den Klammern inhaltlich.</span>
  </div>
  <div class="step-item">
    <strong>4. Ist das Ergebnis plausibel?</strong>
    <span>Schätze grob, ob die Größenordnung zum Problem passt.</span>
  </div>
</div>
