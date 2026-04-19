---
title: Konstruktoren weiterleiten und ueberladen verstehen
description: Verstehe, wie mehrere Konstruktoren zusammenarbeiten und wie Delegation doppelte Initialisierungslogik vermeidet.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - konstruktoren-weiterleiten-und-ueberladen-verstehen
learningGoals:
  - Du erklaerst, was ueberladene Konstruktoren sind.
  - Du beschreibst Konstruktor-Delegation als Weiterleitung an einen anderen Konstruktor derselben Klasse.
  - Du liest die Aufrufreihenfolge ruhiger, wenn mehrere Konstruktoren beteiligt sind.
practiceIdeas:
  - Verfolge bei drei Konstruktoren, welcher den eigentlichen Initialisierungsteil ausfuehrt.
  - Markiere, wo nur weitergeleitet und wo wirklich initialisiert wird.
  - Vergleiche doppelte Zuweisungen mit einem delegierten Aufbau.
commonMistakes:
  - Zu denken, dass jeder Konstruktor immer denselben Code komplett wiederholen muss.
  - Delegation mit Vererbung oder Oberklassenaufruf zu verwechseln.
  - Zu uebersehen, dass ein Konstruktor hoechstens an einen anderen delegieren darf.
keyTakeaways:
  - Ueberladene Konstruktoren bieten verschiedene Startwege fuer dieselbe Klasse.
  - Delegation leitet von einem Konstruktor an einen anderen derselben Klasse weiter.
  - Dadurch bleibt Initialisierungslogik ruhiger und weniger doppelt.
recognizeSignals:
  - Eine Klasse hat mehrere Konstruktoren mit verschiedenen Parametern.
  - In einem Initializer-Teil wird auf denselben Klassennamen verwiesen.
  - Die Aufgabe fragt nach Aufrufreihenfolge oder doppelter Initialisierung.
selfCheckPoints:
  - Kann ich Ueberladung und Delegation trennen?
  - Kann ich sagen, welcher Konstruktor am Ende die eigentliche Initialisierung macht?
  - Kann ich erklaeren, warum Delegation Wiederholungen spart?
level: mittel
tags:
  - informatik
  - programmierung
  - oop
  - konstruktor
  - delegation
draft: false
---

## Grundidee

Nicht jede Klasse braucht nur einen Startweg. Manchmal soll ein Objekt ohne Werte, mit einem Wert oder mit mehreren Werten erzeugt werden koennen. Dann entstehen mehrere Konstruktoren mit unterschiedlicher Signatur.

Wenn diese Konstruktoren dieselbe Initialisierungslogik wiederholen, wird der Code schnell unruhig. Delegation hilft dabei, einen gemeinsamen Kernkonstruktor zu nutzen.

<div class="compare-card">
  <p class="card-kicker">Kerntrennung</p>
  <h3>Mehrere Startwege sind nicht automatisch mehrere Initialisierungen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ueberladen</strong>
      <span>Es gibt mehrere Konstruktoren mit unterschiedlichen Parameterlisten.</span>
    </div>
    <div class="compare-item">
      <strong>Delegation</strong>
      <span>Ein Konstruktor leitet an einen anderen Konstruktor derselben Klasse weiter.</span>
    </div>
  </div>
</div>

## Leitbeispiel

```cpp
class Demo {
public:
  Demo() : Demo(0) {}
  Demo(int x) : Demo(x, 0) {}
  Demo(int x, int y) {
    // eigentliche Initialisierung
  }
};
```

Hier sieht man drei Startwege. Der parameterlose Konstruktor leitet an den Ein-Parameter-Konstruktor weiter. Dieser leitet an den Zwei-Parameter-Konstruktor weiter. Die eigentliche Arbeit liegt am Ende nur noch an einer Stelle.

## Was beim Lesen die wichtigste Frage ist

**Welcher Konstruktor ist nur ein bequemer Einstieg und welcher setzt am Ende wirklich die Daten?**

Diese Frage ist didaktisch hilfreicher als nur zu zaehlen, wie viele Konstruktoren es gibt.

## Delegation ist kein Vererbungsfall

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Gut</p>
    <h3>Innerhalb derselben Klasse denken</h3>
    <p>Delegation bleibt in der Klasse selbst. Ein Konstruktor ruft einen anderen Konstruktor derselben Klasse auf.</p>
  </section>
  <section>
    <p class="card-kicker">Schwach</p>
    <h3>Mit Basisklassen vermischen</h3>
    <p>Dann wird aus einer ruhigen Startlogik schnell ein begriffliches Durcheinander mit Vererbung.</p>
  </section>
</div>

## Diese Seite behandelt bewusst nur Startwege innerhalb einer Klasse

Sobald beim Erzeugen eines Objekts auch eine Basisklasse beteiligt ist, geht es nicht mehr um Delegation innerhalb derselben Klasse, sondern um Konstruktoraufrufe in der Vererbung. Das ist ein eigenes Thema.

## Ruhige Lesestrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Signaturen zaehlen</strong>
    <span>Wie viele Konstruktoren gibt es und wodurch unterscheiden sie sich?</span>
  </div>
  <div class="step-item">
    <strong>2. Weiterleitung suchen</strong>
    <span>Wird im Konstruktor auf denselben Klassennamen verwiesen?</span>
  </div>
  <div class="step-item">
    <strong>3. Kernkonstruktor finden</strong>
    <span>Wo werden die Attribute wirklich gesetzt?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Ueberladung schafft mehrere Startwege. Delegation sorgt dafuer, dass diese Wege trotzdem auf eine ruhige gemeinsame Initialisierung hinauslaufen.</p>
</div>
