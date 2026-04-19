---
title: Default-Parameter verstehen
description: Verstehe, wie Vorgabewerte in Funktionssignaturen Aufrufe verkürzen und wo ihre Grenzen liegen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-parameter
  - default-parameter-verstehen
learningGoals:
  - Du erklärst, was ein Default-Parameter leistet.
  - Du erkennst, warum Vorgabewerte am Ende der Parameterliste stehen müssen.
  - Du liest Funktionsaufrufe ruhiger, wenn nicht alle Argumente explizit angegeben sind.
practiceIdeas:
  - Vergleiche zwei Funktionsaufrufe derselben Funktion mit und ohne letzten Parameter.
  - Formuliere in Worten, welchen Wert der Compiler einsetzt, wenn ein Argument fehlt.
  - Prüfe bei einer Signatur, ob die Reihenfolge der Default-Parameter fachlich sinnvoll ist.
commonMistakes:
  - Zu denken, Default-Parameter seien eigene überladene Funktionen.
  - Vorgabewerte mitten in der Parameterliste zu erwarten.
  - Nicht zu prüfen, welche Argumente beim Aufruf wirklich noch angegeben werden müssen.
keyTakeaways:
  - Default-Parameter liefern einen Vorgabewert, wenn beim Aufruf ein Argument fehlt.
  - Sie gehören an das Ende der Parameterliste.
  - Sie machen Aufrufe kürzer, ersetzen aber keine saubere Signatur.
recognizeSignals:
  - Eine Funktion kann mit unterschiedlich vielen Argumenten aufgerufen werden.
  - In einer Signatur taucht ein Gleichheitszeichen mit Vorgabewert auf.
  - Du sollst erklären, welcher Wert eingesetzt wird, wenn ein Argument fehlt.
selfCheckPoints:
  - Kann ich den Unterschied zwischen Pflichtargument und Vorgabewert erklären?
  - Kann ich sagen, welcher Wert bei einem verkürzten Aufruf verwendet wird?
  - Kann ich begründen, warum Default-Parameter am Ende stehen?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - funktionen
  - parameter
draft: false
---

## Grundidee

Manche Funktionen brauchen fast immer dieselben Werte für bestimmte Parameter. Ein Default-Parameter erlaubt deshalb, in der Signatur einen Vorgabewert festzulegen. Wenn dieser Wert beim Aufruf nicht mitgegeben wird, setzt der Compiler genau diesen Standardwert ein.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ausgabe mit optionaler Anzahl von Nachkommastellen</h3>
  <p>Eine Funktion könnte eine Zahl ausgeben und standardmäßig zwei Nachkommastellen nutzen. Nur wenn ausdrücklich etwas anderes gewünscht ist, wird ein weiterer Wert übergeben. So bleibt der normale Aufruf kurz, ohne dass die Funktion unklar wird.</p>
</div>

## Was ein Default-Parameter ist

Ein Default-Parameter ist ein normaler Parameter mit Vorgabewert.

```cpp
void gibPreisAus(double preis, int nachkommastellen = 2);
```

Wird die Funktion so aufgerufen:

```cpp
gibPreisAus(19.95);
```

verwendet der Aufruf intern den Wert <code>2</code> für <code>nachkommastellen</code>.

## Warum der Vorgabewert am Ende stehen muss

<div class="compare-card">
  <p class="card-kicker">Ruhige Leselogik</p>
  <h3>Pflichtwerte zuerst, optionale Werte zuletzt</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sinnvoll</strong>
      <span>Erst kommen die Argumente, die immer gebraucht werden. Danach folgen optionale Werte mit Standardwert.</span>
    </div>
    <div class="compare-item">
      <strong>Problematisch</strong>
      <span>Liegt ein Default-Parameter mitten in der Liste, wird unklar, wie spätere Werte beim Aufruf noch eindeutig zugeordnet werden sollen.</span>
    </div>
  </div>
</div>

Darum stehen Vorgabewerte in C++ am Ende der Parameterliste.

## Default-Parameter sind kein Zaubertrick

Ein Default-Parameter bedeutet nicht, dass die Funktion „manchmal einen Parameter hat und manchmal nicht“. Die Signatur bleibt dieselbe. Es gibt weiterhin denselben Funktionsnamen mit derselben Parameterliste – nur ein Teil dieser Liste hat einen Standardwert.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Default-Parameter erzeugt keinen neuen Operator und auch keine neue Funktion. Er sagt nur, welcher Wert genutzt wird, wenn ein Argument fehlt.</p>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Welche Werte sind Pflicht?</strong>
    <span>Suche zuerst die Parameter ohne Vorgabewert.</span>
  </div>
  <div class="step-item">
    <strong>2. Welche Werte sind optional?</strong>
    <span>Markiere danach die Parameter mit Standardwert.</span>
  </div>
  <div class="step-item">
    <strong>3. Was wurde im Aufruf wirklich übergeben?</strong>
    <span>Vergleiche die tatsächlichen Argumente mit der Signatur.</span>
  </div>
  <div class="step-item">
    <strong>4. Welcher Wert wird ergänzt?</strong>
    <span>Setze den Vorgabewert nur dort ein, wo im Aufruf wirklich etwas fehlt.</span>
  </div>
</div>
