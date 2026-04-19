---
title: Funktionsdeklaration und Definition vergleichen
description: Verstehe den Unterschied zwischen einer Ankündigung einer Funktion und ihrer eigentlichen Umsetzung.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-ablauf
  - funktionsdeklaration-und-definition-vergleichen
learningGoals:
  - Du unterscheidest Deklaration und Definition sauber.
  - Du erklärst, warum beide nicht dieselbe Rolle haben.
  - Du liest einen Funktionskopf als Schnittstelle und den Rumpf als Umsetzung.
practiceIdeas:
  - Vergleiche einen Prototypen mit einer vollständigen Funktion.
  - Suche in einem Beispiel, welche Information schon vorher bekannt gemacht wird.
  - Beschreibe, warum eine Deklaration noch keine Berechnung enthält.
commonMistakes:
  - Deklaration und Definition als bloße Dopplung zu sehen.
  - Zu glauben, die Deklaration sei schon die ganze Funktion.
  - Parameterliste und Funktionsrumpf nicht als getrennte Ebenen zu lesen.
keyTakeaways:
  - Die Deklaration kündigt eine Funktion an.
  - Die Definition enthält den eigentlichen Code.
  - Schnittstelle und Umsetzung sollten im Kopf getrennt bleiben.
recognizeSignals:
  - Es geht um Funktionsprototypen, Funktionsköpfe oder Vorankündigungen.
  - Du sollst erklären, was schon bekannt ist, bevor eine Funktion implementiert wird.
  - In Beispielen musst du Kopf und Rumpf unterscheiden.
selfCheckPoints:
  - Kann ich erklären, was eine Deklaration leistet?
  - Kann ich sagen, wo die eigentliche Umsetzung steht?
  - Kann ich Kopf und Funktionskörper fachlich trennen?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - funktionen
  - deklaration
draft: false
---

## Grundidee

In C++ kann eine Funktion zuerst angekündigt und später vollständig implementiert werden. Diese Ankündigung nennt man Deklaration oder auch Funktionsprototyp.

```cpp
int addiere(int a, int b);   // Deklaration

int addiere(int a, int b) {  // Definition
  return a + b;
}
```

## Zwei Ebenen, zwei Rollen

<div class="compare-card">
  <p class="card-kicker">Rollenvergleich</p>
  <h3>Schnittstelle und Umsetzung nicht vermischen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Deklaration</strong>
      <span>Zeigt Name, Rückgabetyp und Parameterliste. Sie sagt: Diese Funktion gibt es.</span>
    </div>
    <div class="compare-item">
      <strong>Definition</strong>
      <span>Enthält den Code, also das tatsächliche Verhalten der Funktion.</span>
    </div>
  </div>
</div>

## Warum das Denken in Schnittstellen hilfreich ist

So wird früher klar, welche Eingaben und Ausgaben eine Funktion hat, auch wenn ihre innere Umsetzung noch separat liegt.

<div class="note-panel">
  <p><strong>Merke:</strong> Die Deklaration beschreibt die Oberfläche einer Funktion. Die Definition zeigt, wie diese Oberfläche intern erfüllt wird.</p>
</div>
