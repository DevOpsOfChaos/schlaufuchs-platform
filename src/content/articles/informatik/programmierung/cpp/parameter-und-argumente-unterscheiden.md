---
title: Parameter und Argumente unterscheiden
description: Verstehe den Unterschied zwischen den Platzhaltern in einer Funktion und den konkreten Werten beim Aufruf.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-ablauf
  - parameter-und-argumente-unterscheiden
learningGoals:
  - Du unterscheidest Parameter und Argumente sauber.
  - Du erklärst, was beim Funktionsaufruf eingesetzt wird.
  - Du liest Funktionsköpfe und Aufrufe nicht mehr als dieselbe Ebene.
practiceIdeas:
  - Vergleiche Funktionsdefinition und Aufruf in einem kurzen Beispiel.
  - Markiere in einem Codeausschnitt, was Platzhalter und was konkrete Werte sind.
  - Erkläre einen Funktionsaufruf einmal in Alltagssprache.
commonMistakes:
  - Parameter und Argumente als identische Wörter zu benutzen.
  - Den Funktionskopf mit dem Aufruf zu verwechseln.
  - Zu glauben, dass in der Definition schon feste Werte stehen.
keyTakeaways:
  - Parameter stehen in der Definition als Platzhalter.
  - Argumente stehen im Aufruf als konkrete Werte oder Variablen.
  - Der Unterschied macht Funktionsaufrufe deutlich lesbarer.
recognizeSignals:
  - Es geht um Klammern hinter Funktionsnamen, übergebene Werte oder Funktionsköpfe.
  - Du sollst erklären, was eine Funktion bekommt.
  - In Beispielen musst du Definition und Aufruf voneinander trennen.
selfCheckPoints:
  - Kann ich Parameter und Argumente sauber unterscheiden?
  - Kann ich erklären, welche Werte beim Aufruf tatsächlich eingesetzt werden?
  - Kann ich Funktionskopf und Aufruf auseinanderhalten?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - parameter
  - argumente
draft: false
---

## Grundidee

In einer Funktionsdefinition stehen meistens Namen wie `zahl` oder `text`. Diese Namen sind noch keine echten Eingaben, sondern Platzhalter. Erst beim Aufruf kommen konkrete Werte oder Variablen dazu.

```cpp
int verdoppeln(int zahl) {
  return zahl * 2;
}

int ergebnis = verdoppeln(7);
```

In diesem Beispiel ist `zahl` ein Parameter. Die `7` ist ein Argument.

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Platzhalter und echter Einsatz</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Parameter</strong>
      <span>Stehen in der Definition und beschreiben, welche Art von Eingabe eine Funktion erwartet.</span>
    </div>
    <div class="compare-item">
      <strong>Argument</strong>
      <span>Steht im Aufruf und liefert der Funktion den konkreten Wert.</span>
    </div>
  </div>
</div>

## Warum die Unterscheidung hilft

Wer Parameter und Argumente sauber trennt, liest Funktionen ruhiger. Dann ist klar:

- was die Funktion grundsätzlich erwartet,
- und was in einem konkreten Aufruf tatsächlich übergeben wird.

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Vom Platzhalter zum konkreten Wert</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Definition</strong><span><code>int zahl</code> ist nur ein Platzhalter</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Aufruf</strong><span><code>verdoppeln(7)</code> liefert den echten Wert</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Ausführung</strong><span>die Funktion rechnet mit 7</span></div>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Parameter gehören zur Bauanleitung einer Funktion. Argumente gehören zu ihrem konkreten Einsatz.</p>
</div>
