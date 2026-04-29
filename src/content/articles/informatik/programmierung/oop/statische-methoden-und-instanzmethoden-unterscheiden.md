---
title: "Statische Methoden und Instanzmethoden unterscheiden"
description: "Verstehe, welche Methoden an die Klasse und welche an einzelne Objekte gebunden sind."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "statische-methoden-und-instanzmethoden-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Nicht jede Methode arbeitet fuer ein einzelnes Objekt. Manche Methoden gehoeren fachlich zur ganzen Klasse. Dann werden sie als statische Methoden formuliert.

## Die ruhigste Leitfrage

Bevor du eine Methode einordnest, hilft zuerst diese Frage:

**Braucht diese Methode den Zustand eines konkreten Objekts oder nicht?**

Genau daran trennt sich meist schon ruhig,

- ob eine Instanzmethode vorliegt,
- oder ob eine statische Methode besser passt.

<div class="compare-card">
  <p class="card-kicker">Kernvergleich</p>
  <h3>Objektbezug oder Klassenbezug?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Instanzmethode</strong>
      <span>Arbeitet fuer ein bestimmtes Objekt und darf auf dessen Instanzdaten zugreifen.</span>
    </div>
    <div class="compare-item">
      <strong>Statische Methode</strong>
      <span>Arbeitet auf Klassenebene und braucht kein einzelnes Objekt als Ausgangspunkt.</span>
    </div>
  </div>
</div>

## Leitbeispiel

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Fragen an dieselbe Klasse</h3>
  <p>Eine Klasse <code>Konto</code> kann eine Methode wie <code>einzahlen()</code> haben. Diese braucht ein konkretes Konto und ist deshalb instanzbezogen. Eine Methode wie <code>zaehleKonten()</code> betrifft dagegen eher die Klasse insgesamt und passt damit eher in die statische Richtung.</p>
</div>

## Sichtbare Aufrufe

```cpp
objekt.getWert();
Demo::getKlassVar1();
```

Die erste Form zeigt meist Objektbezug. Die zweite Form zeigt meist Klassenbezug.

## Mini-Demo: dieselbe Klasse, zwei Rollen

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Nicht jede Methode braucht ein einzelnes Objekt</h3>
  <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(15rem,1fr)); gap:0.9rem;">
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Instanzmethode</strong></p>
      <code>konto.einzahlen(50);</code>
      <p style="margin:0.6rem 0 0;">Hier geht es um genau dieses eine Konto und seinen Zustand.</p>
    </div>
    <div style="padding:1rem; border-radius:16px; border:1px dashed #94a3b8; background:#f8fafc;">
      <p style="margin:0 0 0.45rem;"><strong>Statische Methode</strong></p>
      <code>Konto::zaehleKonten();</code>
      <p style="margin:0.6rem 0 0;">Hier geht es um eine Klassenfrage und nicht um ein bestimmtes Einzelobjekt.</p>
    </div>
  </div>
</div>

## Diese Seite behandelt bewusst Methoden und nicht den Zugriff auf statische Daten

Ob eine Methode statisch ist, ist eine andere Frage als die, wie auf einen statischen Member ueber Klasse oder Objekt zugegriffen wird. Dort geht es mehr um **gemeinsame Daten und Schreibweisen**. Hier geht es zuerst um **Methodenrolle und Objektbezug**.

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
    <strong>3. Objektfrage stellen</strong>
    <span>Braucht die Methode ueberhaupt ein bestimmtes Objekt?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Instanzmethoden denken vom Objekt aus. Statische Methoden denken von der Klasse aus.</p>
</div>
