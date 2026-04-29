---
title: "Funktionsdeklaration und Definition vergleichen"
description: "Verstehe den Unterschied zwischen einer Ankündigung einer Funktion und ihrer eigentlichen Umsetzung."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "funktionsdeklaration-und-definition-vergleichen"]
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
