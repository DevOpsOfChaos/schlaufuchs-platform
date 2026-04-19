---
title: Zugriff auf statische Member ueber Klasse und Objekt vergleichen
description: Verstehe, warum verschiedene Schreibweisen trotzdem auf dieselbe Klassenvariable zeigen koennen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - zugriff-auf-statische-member-ueber-klasse-und-objekt-vergleichen
learningGoals:
  - Du erklaerst, warum statische Member nur einmal pro Klasse existieren.
  - Du vergleichst den Zugriff ueber Klassenname und ueber Objekt.
  - Du deutest mehrere Objekte im Hinblick auf gemeinsame Klassendaten richtig.
practiceIdeas:
  - Verfolge einen statischen Zaehler ueber mehrere Objektanlagen.
  - Vergleiche zwei Objekte mit unterschiedlichen Instanzdaten und gleicher Klassenvariable.
  - Formuliere, warum beide Schreibweisen dieselbe gemeinsame Variable betreffen.
commonMistakes:
  - Zu denken, dass jedes Objekt seine eigene statische Variable hat.
  - Objektzugriff automatisch als Instanzzugriff zu lesen.
  - Den Klassenbezug hinter der Objekt-Schreibweise zu uebersehen.
keyTakeaways:
  - Statische Member existieren nur einmal pro Klasse.
  - Mehrere Objekte teilen sich denselben statischen Wert.
  - Der Zugriff ueber Objekt ist moeglich, aendert aber den Klassenbezug nicht.
recognizeSignals:
  - Mehrere Objekte derselben Klasse tauchen gleichzeitig auf.
  - Im Code stehen sowohl <code>Demo::klassVar</code> als auch <code>objekt.klassVar</code>.
  - Es geht um gemeinsame Zaehler, globale Zustandswerte oder Klassenkonstanten.
selfCheckPoints:
  - Kann ich Instanzdaten und Klassendaten im Beispiel trennen?
  - Kann ich erklaeren, warum zwei Objekte denselben statischen Wert sehen?
  - Kann ich beide Zugriffsschreibweisen fachlich gleich einordnen?
level: einfach
tags:
  - informatik
  - programmierung
  - oop
  - static
  - klassendaten
draft: false
---

## Grundidee

Bei statischen Membern ist die wichtigste Denkfrage: **Gehoert dieser Wert zu jedem Objekt einzeln oder zur Klasse insgesamt?**

Wenn etwas als statisch markiert ist, gibt es davon nur **eine gemeinsame Version pro Klasse**.

## Zwei Schreibweisen, ein gemeinsamer Bezug

```cpp
Demo::klassVar2;
d1.klassVar2;
d2.klassVar2;
```

Diese drei Schreibweisen sehen unterschiedlich aus. Fachlich koennen sie aber denselben statischen Member meinen.

## Was sich wirklich unterscheidet

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Direkter Klassenzugriff vs. Zugriff ueber ein Objekt</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Demo::klassVar2</strong>
      <span>Macht den Klassenbezug sofort sichtbar und ist beim Lesen oft die klarste Form.</span>
    </div>
    <div class="compare-item">
      <strong>d1.klassVar2</strong>
      <span>Sieht nach Objektzugriff aus, greift aber bei statischen Membern trotzdem auf dieselbe Klassenvariable zu.</span>
    </div>
  </div>
</div>

## Leitbeispiel

<div class="example-card">
  <p class="card-kicker">Leitbild</p>
  <h3>Zwei Objekte, ein Zaehler</h3>
  <p>Wenn <code>d1</code> und <code>d2</code> unterschiedliche Instanzwerte besitzen, aber ein gemeinsamer Objektzaehler existiert, dann gehoert dieser Zaehler nicht einem der beiden Objekte allein. Er gehoert zur Klasse.</p>
</div>

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. static pruefen</strong>
    <span>Dann geht es um gemeinsame Klassendaten.</span>
  </div>
  <div class="step-item">
    <strong>2. Mehrere Objekte vergleichen</strong>
    <span>Frage, ob sich der Wert eigentlich geteilt verhaelt.</span>
  </div>
  <div class="step-item">
    <strong>3. Schreibweise nicht ueberbewerten</strong>
    <span>Auch Objektzugriff kann hier Klassenbezug meinen.</span>
  </div>
</div>
