---
title: Pointer in C++ verstehen
description: Verstehe, warum Zeiger Adressen speichern und wie dadurch indirekter Zugriff auf Speicherinhalte möglich wird.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - pointer-und-adressen
  - pointer-in-cpp-verstehen
learningGoals:
  - Du erklärst Pointer als Variablen für Adressen.
  - Du unterscheidest Zeigervariable, referenziertes Objekt und gespeicherte Adresse.
  - Du liest indirekten Zugriff über einen Pointer ruhiger.
practiceIdeas:
  - Zeichne bei einem Beispiel Variable, Adresse und Zeiger getrennt auf.
  - Formuliere in Worten, worauf ein Pointer gerade zeigt.
  - Vergleiche direkten und indirekten Zugriff auf denselben Wert.
commonMistakes:
  - Pointer mit dem eigentlichen Zielwert zu verwechseln.
  - Zu denken, ein Pointer speichere direkt den Dateninhalt.
  - Nicht zwischen Adresse und Wert zu unterscheiden.
keyTakeaways:
  - Ein Pointer speichert eine Adresse.
  - Über einen Pointer kann indirekt auf einen Wert zugegriffen werden.
  - Pointer helfen, Speicherbeziehungen sichtbar zu machen.
recognizeSignals:
  - In Deklarationen steht ein <code>*</code> beim Typ.
  - Eine Adresse wird mit <code>&amp;</code> übernommen.
  - Eine Aufgabe fragt nach direktem und indirektem Zugriff.
selfCheckPoints:
  - Kann ich Adresse und Wert sauber trennen?
  - Kann ich erklären, worauf ein Pointer zeigt?
  - Kann ich direkten und indirekten Zugriff vergleichen?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - pointer
  - adresse
draft: false
---

## Grundidee

Ein Pointer ist eine Variable, deren Inhalt nicht direkt ein normaler Nutzwert ist, sondern die Adresse einer anderen Variable im Speicher.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Wege zu demselben Wert</h3>
  <p>Eine Variable <code>VAR_A</code> enthält den Wert <code>70</code>. Ein Pointer <code>POIN_A</code> speichert die Adresse von <code>VAR_A</code>. Man kann dann entweder direkt mit <code>VAR_A</code> arbeiten oder indirekt über <code>*POIN_A</code>.</p>
</div>

## Was genau im Pointer steckt

<div class="compare-card">
  <p class="card-kicker">Saubere Rollenklärung</p>
  <h3>Adresse, Name und Wert sind nicht dasselbe</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Variable</strong>
      <span>Sie besitzt einen Namen, eine Adresse und einen aktuellen Wert.</span>
    </div>
    <div class="compare-item">
      <strong>Pointer</strong>
      <span>Er speichert die Adresse einer anderen Variable und ermöglicht dadurch indirekten Zugriff.</span>
    </div>
  </div>
</div>

## Ein einfaches Beispiel

```cpp
short varA = 70;
short *poinA;
poinA = &varA;
```

- <code>varA</code> ist die eigentliche Variable mit Nutzwert,
- <code>poinA</code> ist die Zeigervariable,
- <code>&amp;varA</code> liefert die Adresse von <code>varA</code>.

## Warum Pointer nützlich sind

Pointer machen sichtbar, dass Programme nicht nur mit Werten, sondern auch mit Speicherbeziehungen arbeiten. Das ist besonders wichtig bei

- indirektem Zugriff,
- Übergabe an Funktionen,
- Datenstrukturen,
- und Zeigerarithmetik.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Pointer enthält nicht „den Wert der Zielvariable“, sondern ihre Adresse. Erst über Dereferenzierung gelangt man wieder an den Zielwert.</p>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Welche Variable ist der Pointer?</strong>
    <span>Suche die Deklaration mit <code>*</code>.</span>
  </div>
  <div class="step-item">
    <strong>2. Was wurde gespeichert?</strong>
    <span>Prüfe, welche Adresse dem Pointer zugewiesen wurde.</span>
  </div>
  <div class="step-item">
    <strong>3. Was ist Zielobjekt?</strong>
    <span>Bestimme die Variable, auf die der Pointer zeigt.</span>
  </div>
  <div class="step-item">
    <strong>4. Direkter oder indirekter Zugriff?</strong>
    <span>Trenne zwischen dem Pointer selbst und dem Wert hinter ihm.</span>
  </div>
</div>
