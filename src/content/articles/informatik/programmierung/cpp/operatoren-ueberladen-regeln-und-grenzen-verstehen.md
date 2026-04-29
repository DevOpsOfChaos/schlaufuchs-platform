---
title: "Operatoren ueberladen - Regeln und Grenzen verstehen"
description: "Verstehe, wann Operatorueberladung in C++ moeglich ist und welche fachlichen Grenzen dabei gelten."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "operatoren-ueberladen-regeln-und-grenzen-verstehen"]
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

In C++ koennen Operatoren fuer benutzerdefinierte Typen als spezielle Funktionen formuliert werden. Dadurch kann ein Ausdruck wie <code>A + B</code> fuer eigene Klassen eine passende, fachlich sinnvolle Bedeutung bekommen.

## Was Operatorueberladung nicht ist

Operatorueberladung bedeutet nicht, dass die Sprache neu erfunden wird. Wichtige Grenzen bleiben erhalten:

- keine neuen Operatorsymbole,
- gleiche Anzahl von Operanden,
- gleiche Prioritaetsregeln,
- kein Ueberladen nur fuer Basisdatentypen.

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Neue Bedeutung fuer eigene Typen, aber keine neue Sprachlogik</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Erlaubt</strong>
      <span><code>operator+</code> fuer einen eigenen Datentyp sinnvoll definieren.</span>
    </div>
    <div class="compare-item">
      <strong>Nicht erlaubt</strong>
      <span>Neue Operatorzeichen erfinden oder Punkt-vor-Strich-Regeln umschreiben.</span>
    </div>
  </div>
</div>

## Mindestbedingung

Mindestens ein Operand muss ein nutzerdefinierter Typ sein. Genau deshalb kann man nicht einfach das Verhalten von reinem <code>int + int</code> neu festlegen.

## Nur eingeschraenkt oder gar nicht

Einige Operatoren duerfen nur als Member-Funktion ueberladen werden, etwa <code>=</code>, <code>[]</code> oder <code>()</code>. Andere duerfen gar nicht ueberladen werden, zum Beispiel <code>::</code>, <code>.</code>, <code>?:</code> oder <code>sizeof</code>.

## Ausdruck als Funktionsidee lesen

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>A + B ist fachlich auch nur ein Aufruf</h3>
  <p>Didaktisch hilft der Satz: <code>C = A + B</code> kann als Idee auch wie <code>C = operator+(A, B)</code> gelesen werden. Dann verliert das Thema viel von seinem "Magieeffekt" und wird wieder normale Funktionslogik mit besonderer Schreibweise.</p>
</div>

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Typen pruefen</strong>
    <span>Ist ueberhaupt ein eigener Typ beteiligt?</span>
  </div>
  <div class="step-item">
    <strong>2. Operator pruefen</strong>
    <span>Ist er frei ueberladbar, nur als Member moeglich oder ganz verboten?</span>
  </div>
  <div class="step-item">
    <strong>3. Sprachlogik pruefen</strong>
    <span>Bleiben Operandenanzahl und Prioritaet erhalten?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Operatorueberladung soll eigene Typen lesbarer machen - nicht die Grundregeln der Sprache aushebeln.</p>
</div>
