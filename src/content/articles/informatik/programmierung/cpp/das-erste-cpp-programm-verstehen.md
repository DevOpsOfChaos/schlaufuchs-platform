---
title: Das erste C++-Programm verstehen
description: Verstehe, welche Rolle include, main, Ein- und Ausgabe und return in einem sehr kleinen C++-Programm spielen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - einstieg-und-werkzeugkette
  - das-erste-cpp-programm-verstehen
learningGoals:
  - Du erklärst die wichtigsten Bausteine eines sehr kleinen C++-Programms.
  - Du unterscheidest ruhig zwischen Einbinden, Hauptfunktion, Ein- und Ausgabe und Rückgabe.
  - Du liest ein kurzes C++-Programm nicht nur Zeile für Zeile, sondern nach seiner Gesamtrolle.
practiceIdeas:
  - Lies ein kleines Programm erst grob über seine Abschnitte und erst danach über einzelne Tokens.
  - Erkläre, welche Zeilen für Aufbau und welche für Verhalten zuständig sind.
  - Vergleiche ein minimales Programm mit einer Variante, die zusätzlich Eingabe verarbeitet.
commonMistakes:
  - Jede Zeile isoliert zu lernen, ohne die Gesamtlogik zu sehen.
  - main nur als Pflichtwort statt als Einstiegspunkt des Programms zu verstehen.
  - Ein- und Ausgabe mit dem eigentlichen Programmstart zu verwechseln.
keyTakeaways:
  - Ein kleines C++-Programm besteht aus wenigen, klaren Rollen.
  - main ist der Einstiegspunkt des Programms.
  - Ruhiges Lesen über Rollen ist hilfreicher als bloßes Auswendiglernen einzelner Zeichen.
recognizeSignals:
  - Es geht um erste Programme, main, include, cout, cin oder return.
  - Du sollst einen kleinen Quelltext erklären oder ordnen.
  - In Beispielen musst du Zeilen ihrer Funktion zuordnen statt nur Namen wiederzugeben.
selfCheckPoints:
  - Kann ich erklären, wozu include, main und return dienen?
  - Kann ich Ein- und Ausgabe im Programm sauber benennen?
  - Kann ich einen kleinen Quelltext nach Rollen gliedern?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - einstieg
  - main
draft: false
---

## Grundidee

Ein erstes C++-Programm wirkt oft komplizierter, als es ist. In Wahrheit bestehen die kleinsten Programme nur aus wenigen Bausteinen: etwas wird eingebunden, eine Hauptfunktion startet, dann passiert eine Ausgabe oder Eingabe, und am Ende liefert das Programm einen Rückgabewert.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Programm fragt eine Zahl ab und gibt sie wieder aus</h3>
  <p>Schon ein sehr kleines Konsolenprogramm kann eine Zahl einlesen und wieder anzeigen. Daran lässt sich gut erkennen, welche Zeilen nur den Rahmen bilden und welche das eigentliche Verhalten beschreiben.</p>
</div>

## Ein sehr kleines Beispiel

```cpp
#include <iostream>

int main() {
  int zahl;
  std::cout << "Bitte Zahl eingeben:
";
  std::cin >> zahl;
  std::cout << "Zahl = " << zahl << "
";
  return 0;
}
```

## Die Rollen der wichtigsten Zeilen

<div class="visual-grid">
  <div class="visual-item">
    <strong><code>#include &lt;iostream&gt;</code></strong>
    <span>Diese Zeile bindet die Ein- und Ausgabe-Bibliothek ein, damit <code>cout</code> und <code>cin</code> nutzbar sind.</span>
  </div>
  <div class="visual-item">
    <strong><code>int main()</code></strong>
    <span>Hier beginnt das Hauptprogramm. main ist der Einstiegspunkt, an dem die Ausführung startet.</span>
  </div>
  <div class="visual-item">
    <strong><code>int zahl;</code></strong>
    <span>Es wird eine Variable vorbereitet, in die später ein Wert geschrieben werden kann.</span>
  </div>
  <div class="visual-item">
    <strong><code>cout</code> und <code>cin</code></strong>
    <span>Mit <code>cout</code> wird ausgegeben, mit <code>cin</code> wird Eingabe gelesen.</span>
  </div>
</div>

## Rahmen und Verhalten trennen

<div class="compare-card">
  <p class="card-kicker">Ruhige Leselogik</p>
  <h3>Nicht jede Zeile hat dieselbe Aufgabe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Rahmen</strong>
      <span><code>include</code>, <code>main</code> und <code>return</code> sorgen für die Grundstruktur des Programms.</span>
    </div>
    <div class="compare-item">
      <strong>Verhalten</strong>
      <span>Variable, Ausgabe und Eingabe beschreiben, was das Programm konkret mit Daten tut.</span>
    </div>
  </div>
</div>

## Was <code>return 0;</code> bedeutet

<div class="note-panel">
  <p><strong>Merke:</strong> <code>return 0;</code> beendet die Funktion <code>main</code> und signalisiert typischerweise, dass das Programm regulär beendet wurde.</p>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Wo startet das Programm?</strong>
    <span>Suche zuerst <code>main</code>.</span>
  </div>
  <div class="step-item">
    <strong>2. Was ist nur Rahmen?</strong>
    <span>Ordne include, main und return dem Grundgerüst zu.</span>
  </div>
  <div class="step-item">
    <strong>3. Was passiert mit Daten?</strong>
    <span>Suche Variablen, Eingabe und Ausgabe.</span>
  </div>
  <div class="step-item">
    <strong>4. Was ist die Gesamtidee?</strong>
    <span>Beschreibe das Programm in einem Satz statt nur Zeilen aufzuzählen.</span>
  </div>
</div>

## Typische Fehler

- Das Programm nur als Liste aus Schlüsselwörtern zu lesen.
- <code>main</code> und die eigentliche Programmlogik nicht zu unterscheiden.
- Zu glauben, dass <code>cout</code> das Programm „startet“.
- <code>return 0;</code> als bedeutungslosen Pflichttext zu behandeln.
