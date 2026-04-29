---
title: "Member-Operatoren und freie Operatorfunktionen vergleichen"
description: "Verstehe, wann eine Operatorfunktion als Member und wann eher als freie Hilfsfunktion gedacht werden kann."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "member-operatoren-und-freie-operatorfunktionen-vergleichen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Bei Operatorueberladung in C++ gibt es zwei grosse Denkweisen: Die Operatorfunktion kann **in der Klasse** stehen oder **ausserhalb der Klasse** als freie Hilfsfunktion formuliert sein. Beide Formen beschreiben denselben Operator, aber nicht dieselbe Leselogik.

## Member-Funktion

Bei einer Member-Variante gehoert der Operator zur Klasse selbst. Das linke Argument ist dabei implizit das aktuelle Objekt - also das, auf das <code>this</code> zeigt.

## Freie Hilfsfunktion

Bei einer freien Funktion werden beide Operanden explizit uebergeben. Dadurch sieht man alle Beteiligten direkt in der Signatur.

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Implizites linkes Objekt vs. zwei sichtbare Operanden</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Member-Operator</strong>
      <span>Das linke Objekt steckt implizit in <code>this</code>. Das rechte Objekt erscheint als Parameter.</span>
    </div>
    <div class="compare-item">
      <strong>Freie Funktion</strong>
      <span>Beide Operanden erscheinen offen in der Parameterliste.</span>
    </div>
  </div>
</div>

## Leitbeispiel: A + B lesen

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Lesarten desselben Ausdrucks</h3>
  <p>Ein Ausdruck wie <code>A + B</code> kann entweder als <code>A.operator+(B)</code> oder als <code>operator+(A, B)</code> gedacht werden. Genau dieser Perspektivwechsel macht die Implementierungsarten verstaendlicher als blosses Auswendiglernen.</p>
</div>

## Wann freie Funktionen oft natuerlich sind

Gerade bei Operatoren wie <code>&lt;&lt;</code> fuer Streams ist eine freie Funktion oft naheliegend, weil der linke Operand haeufig ein Streamobjekt ist und nicht das eigene Fachobjekt.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Ort der Funktion pruefen</strong>
    <span>Steht sie innerhalb oder ausserhalb der Klasse?</span>
  </div>
  <div class="step-item">
    <strong>2. Linkes Argument pruefen</strong>
    <span>Ist es implizit in <code>this</code> oder sichtbar in der Parameterliste?</span>
  </div>
  <div class="step-item">
    <strong>3. Operatorart pruefen</strong>
    <span>Ist er frei waehlbar oder laut Sprachregel nur als Member erlaubt?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Member- und freie Operatorfunktionen machen oft dasselbe - aber sie verteilen die Rollen der Operanden unterschiedlich sichtbar.</p>
</div>
