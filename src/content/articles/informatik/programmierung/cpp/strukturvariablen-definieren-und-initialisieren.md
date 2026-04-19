---
title: Strukturvariablen definieren und initialisieren
description: Verstehe, wie nach einer struct-Deklaration konkrete Variablen angelegt und mit Werten gefüllt werden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - strukturen
  - strukturvariablen-definieren-und-initialisieren
learningGoals:
  - Du erklärst den Unterschied zwischen Strukturtyp und Strukturvariable.
  - Du liest einfache Initialisierungen mit Werten ruhig und geordnet.
  - Du ordnest Punkt-Zuweisung und Initialisierung bei der Definition sinnvoll ein.
practiceIdeas:
  - Vergleiche eine leere Strukturvariable mit einer direkt initialisierten.
  - Lies Beispiele mit Punkt-Zuweisung und Initialisierung in Worten.
  - Erkläre, welche Werte zu welcher Komponente gehören.
commonMistakes:
  - Typ und Variable miteinander zu verwechseln.
  - Werte bei der Initialisierung nicht der richtigen Komponente zuzuordnen.
  - Zu glauben, eine Struktur sei schon mit der Typdeklaration eine konkrete Variable.
keyTakeaways:
  - Erst der Strukturtyp, dann die konkrete Strukturvariable.
  - Werte können später per Punktoperator oder direkt bei der Definition gesetzt werden.
  - Eine klare Reihenfolge hilft beim Lesen der Komponenten.
recognizeSignals:
  - Es geht um struct-Deklaration, konkrete Variablen oder Initialisierungen.
  - Du sollst erklären, was nur Typbeschreibung und was schon echte Variable ist.
  - In Beispielen werden mehrere Werte in einer Struktur zusammengefasst.
selfCheckPoints:
  - Kann ich Strukturtyp und Strukturvariable unterscheiden?
  - Kann ich eine einfache Initialisierung in Worten erklären?
  - Kann ich sagen, welche Komponente welchen Wert bekommt?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - struct
  - initialisierung
draft: false
---

## Grundidee

Eine <code>struct</code>-Deklaration beschreibt zunächst nur den Typ. Erst danach legst du konkrete Variablen dieses Typs an und gibst ihnen Werte.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Vom Typ Punkt zur Variablen P1</h3>
  <p>Der Typ <code>Punkt</code> beschreibt die Struktur mit x, y und name. Erst <code>Punkt P1;</code> oder eine direkte Definition mit Werten macht daraus eine echte Variable im Programm.</p>
</div>

## Typ und Variable trennen

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Strukturtyp</p>
    <h3>Beschreibung</h3>
    <p>Hier wird festgelegt, welche Komponenten ein Objekt dieses Typs besitzen soll.</p>
  </section>
  <section>
    <p class="card-kicker">Strukturvariable</p>
    <h3>Konkreter Datensatz</h3>
    <p>Erst diese Variable trägt später reale Werte in den beschriebenen Komponenten.</p>
  </section>
</div>

## Zwei typische Wege

```cpp
struct Punkt {
  int x;
  int y;
  string name;
};

Punkt P1;
P1.x = 2;
P1.y = 1;
P1.name = "A";

Punkt P2 = {3, 4, "E"};
```

Ruhige Lesart:

- Zuerst wird der Typ beschrieben.
- Dann wird mit <code>P1</code> eine Variable angelegt und später per Punktoperator befüllt.
- Mit <code>P2</code> wird eine zweite Variable direkt bei der Definition mit Werten initialisiert.

## Reihenfolge bewusst lesen

<div class="note-panel">
  <p><strong>Merke:</strong> Bei einer einfachen Initialisierung mit geschweiften Klammern hilft es, die Reihenfolge der Werte an der Reihenfolge der Komponenten zu prüfen.</p>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Was ist nur Typbeschreibung?</strong>
    <span>Trenne die struct-Deklaration von echten Variablen.</span>
  </div>
  <div class="step-item">
    <strong>2. Welche Variable wird angelegt?</strong>
    <span>Suche danach nach Namen wie P1 oder P2.</span>
  </div>
  <div class="step-item">
    <strong>3. Wie kommen Werte hinein?</strong>
    <span>Prüfe Punkt-Zuweisung oder Initialisierung bei der Definition.</span>
  </div>
  <div class="step-item">
    <strong>4. Passt die Reihenfolge?</strong>
    <span>Ordne Werte den Komponenten ruhig und bewusst zu.</span>
  </div>
</div>
