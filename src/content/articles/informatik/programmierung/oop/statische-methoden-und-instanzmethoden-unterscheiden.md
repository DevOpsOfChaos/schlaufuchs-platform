---
title: Statische Methoden und Instanzmethoden unterscheiden
description: Verstehe, welche Funktionen an die Klasse und welche an einzelne Objekte gebunden sind.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - statische-methoden-und-instanzmethoden-unterscheiden
learningGoals:
  - Du unterscheidest Methoden mit Objektbezug von Methoden mit Klassenbezug.
  - Du erklaerst, warum statische Methoden nicht den Zustand eines konkreten Objekts brauchen.
  - Du liest Klassencodes mit static ruhiger.
practiceIdeas:
  - Ordne Methoden danach, ob sie ein Objekt voraussetzen.
  - Suche in einem Beispiel, welche Methoden auf Instanzdaten zugreifen.
  - Vergleiche Aufrufe ueber Objekt und ueber Klassenname.
commonMistakes:
  - Jede Methode automatisch an ein Objekt zu binden.
  - Zu denken, dass statische Methoden direkten Zugriff auf beliebige Instanzdaten haben.
  - static nur als Zufallswort im Code zu lesen.
keyTakeaways:
  - Instanzmethoden arbeiten fuer ein bestimmtes Objekt.
  - Statische Methoden arbeiten fuer die Klasse als Ganzes.
  - Welche Daten verfuegbar sind, haengt vom Methoden-Typ ab.
recognizeSignals:
  - In einer Klasse steht das Schluesselwort <code>static</code> vor einer Methode.
  - Eine Methode wird ueber <code>Klassenname::...</code> aufgerufen.
  - Es geht um gemeinsamen Zustand oder allgemeinen Klassennutzen.
selfCheckPoints:
  - Kann ich sagen, ob eine Methode ein Objekt braucht?
  - Kann ich Klassenbezug und Objektbezug sprachlich trennen?
  - Kann ich erklaeren, warum statische Methoden anders auf Daten zugreifen?
level: einfach
tags:
  - informatik
  - programmierung
  - oop
  - static
  - methoden
draft: false
---

## Grundidee

Nicht jede Methode arbeitet fuer ein einzelnes Objekt. Manche Methoden gehoeren fachlich zur ganzen Klasse. Dann werden sie als statische Methoden formuliert.

## Instanzmethoden

Instanzmethoden gehoeren zum Verhalten eines konkreten Objekts. Sie koennen mit dessen Daten arbeiten.

```cpp
objekt.getWert();
```

## Statische Methoden

Statische Methoden gehoeren zur Klasse als Ganzes. Sie brauchen nicht erst ein bestimmtes Objekt, um aufgerufen zu werden.

```cpp
Demo::getKlassVar1();
```

## Vergleich

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Objektbezug vs. Klassenbezug</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Instanzmethode</strong>
      <span>Arbeitet mit dem Zustand eines konkreten Objekts und wird meist ueber den Punktoperator aufgerufen.</span>
    </div>
    <div class="compare-item">
      <strong>Statische Methode</strong>
      <span>Arbeitet auf Klassenebene und passt besonders zu gemeinsam genutzten Klassendaten oder Hilfsfunktionen.</span>
    </div>
  </div>
</div>

## Denkbild

<div class="signal-flow">
  <div class="flow-node"><strong>Objekt</strong><span>hat eigene Instanzdaten</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Instanzmethode</strong><span>arbeitet an genau diesem Objekt</span></div>
</div>

<div class="signal-flow" style="margin-top:1rem">
  <div class="flow-node"><strong>Klasse</strong><span>haelt gemeinsamen Rahmen</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Statische Methode</strong><span>arbeitet ohne konkretes Einzelobjekt</span></div>
</div>

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. static suchen</strong>
    <span>Damit erkennst du den Klassenbezug direkt.</span>
  </div>
  <div class="step-item">
    <strong>2. Datenart pruefen</strong>
    <span>Greift die Methode auf gemeinsame Klassendaten oder auf einen konkreten Objektzustand zu?</span>
  </div>
  <div class="step-item">
    <strong>3. Aufrufform lesen</strong>
    <span><code>Klassenname::...</code> signalisiert meist Klassenlogik.</span>
  </div>
</div>
