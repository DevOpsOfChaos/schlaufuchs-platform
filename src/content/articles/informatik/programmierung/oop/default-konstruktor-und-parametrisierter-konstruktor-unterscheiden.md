---
title: Default-Konstruktor und parametrisierter Konstruktor unterscheiden
description: Verstehe, wie sich Objektstart ohne Werte und Objektstart mit Werten unterscheiden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - default-konstruktor-und-parametrisierter-konstruktor-unterscheiden
learningGoals:
  - Du unterscheidest parameterlosen und parametrisierten Konstruktor sicher.
  - Du beschreibst, wann ein Objekt mit Standardwerten und wann mit uebergebenen Werten startet.
  - Du liest verschiedene Schreibweisen der Objekterzeugung ruhiger.
practiceIdeas:
  - Vergleiche zwei Konstruktoren derselben Klasse.
  - Ordne Objektaufrufe passenden Konstruktoren zu.
  - Formuliere fuer einen Konstruktor den Startzustand in Worten.
commonMistakes:
  - Zu denken, dass jeder Konstruktor automatisch dieselbe Startlogik ausfuehrt.
  - Parameterlose und leere Klammern mit einer Funktionsdeklaration zu verwechseln.
  - Zu vergessen, dass Parameter den Startzustand gezielt steuern sollen.
keyTakeaways:
  - Ein Default-Konstruktor startet ohne zusaetzliche Werte.
  - Ein parametrisierter Konstruktor startet mit uebergebenen Informationen.
  - Die Objektanlage verrät oft schon, welcher Konstruktor gemeint ist.
recognizeSignals:
  - Objekterzeugung ohne oder mit Argumenten wird verglichen.
  - In einer Klasse stehen mehrere Konstruktoren mit unterschiedlicher Parameterzahl.
  - Es geht um Startwerte und Initialisierung.
selfCheckPoints:
  - Kann ich Objektanlage mit und ohne Argumente unterscheiden?
  - Kann ich sagen, welcher Konstruktor zu welchem Aufruf passt?
  - Kann ich Startzustand und uebergebene Werte sprachlich sauber trennen?
level: einfach
tags:
  - informatik
  - programmierung
  - oop
  - konstruktor
  - initialisierung
draft: false
---

## Grundidee

Objekte koennen unterschiedlich starten. Manchmal reicht ein sinnvoller Standardzustand. Manchmal muessen beim Start direkt Werte mitgegeben werden. Deshalb gibt es oft mehrere Konstruktoren mit verschiedenen Rollen.

```cpp
class Punkt {
public:
  Punkt() { /* Standardwerte */ }
  Punkt(int x, int y) { /* gezielte Werte */ }
};
```

## Zwei typische Startfaelle

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Ohne Werte starten vs. mit Werten starten</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Default-Konstruktor</strong>
      <span>Startet das Objekt ohne weitere Argumente. Er eignet sich fuer Standardzustaende.</span>
    </div>
    <div class="compare-item">
      <strong>Parametrisierter Konstruktor</strong>
      <span>Startet das Objekt mit uebergebenen Werten. So kann der Anfangszustand gezielt festgelegt werden.</span>
    </div>
  </div>
</div>

## Objektaufrufe ruhig lesen

```cpp
Punkt a;
Punkt b(3, 4);
```

Bei <code>a</code> wird ohne Werte gestartet. Bei <code>b</code> geben die Zahlen direkt vor, wie der Start aussehen soll.

## Warum beide Formen sinnvoll sind

Ein Default-Konstruktor ist praktisch, wenn Objekte spaeter noch weiter konfiguriert werden oder ein sicherer Standardzustand existiert. Ein parametrisierter Konstruktor ist hilfreich, wenn ein Objekt nur mit bestimmten Startwerten sinnvoll ist.

## Denkbild

<div class="signal-flow">
  <div class="flow-node"><strong>Klasse</strong><span>liefert mehrere moegliche Startwege</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Aufruf</strong><span>ohne oder mit Argumenten</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Passender Konstruktor</strong><span>setzt den Startzustand</span></div>
</div>

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Argumente zaehlen</strong>
    <span>Keine Argumente sprechen fuer den Default-Konstruktor.</span>
  </div>
  <div class="step-item">
    <strong>2. Startzweck lesen</strong>
    <span>Geht es um Standardwerte oder um gezielte Anfangsdaten?</span>
  </div>
  <div class="step-item">
    <strong>3. Konstruktorrolle benennen</strong>
    <span>Der Konstruktor ist nicht nur Syntax, sondern legt den Start des Objekts fest.</span>
  </div>
</div>
