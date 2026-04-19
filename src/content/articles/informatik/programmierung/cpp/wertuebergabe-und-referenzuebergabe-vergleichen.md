---
title: Wertübergabe und Referenzübergabe vergleichen
description: Verstehe, wann eine Funktion mit einer Kopie arbeitet und wann sie direkt auf die Originalvariable wirkt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-parameter
  - wertuebergabe-und-referenzuebergabe-vergleichen
learningGoals:
  - Du erklärst den Unterschied zwischen call by value und Referenzübergabe.
  - Du erkennst, wann Änderungen nur lokal bleiben und wann sie nach außen wirken.
  - Du liest Referenzparameter als Alias auf eine bestehende Variable.
practiceIdeas:
  - Vergleiche eine Funktion mit normalem Parameter und eine mit Referenzparameter.
  - Verfolge bei einem Beispiel, ob sich der Wert außerhalb der Funktion ändert.
  - Formuliere in Worten, warum ein Referenzparameter keine neue Kopie braucht.
commonMistakes:
  - Referenzübergabe mit Zeigern gleichzusetzen.
  - Zu denken, jede Parameterübergabe ändere automatisch das Original.
  - Nicht zwischen lokalem Parameter und ursprünglicher Variable zu unterscheiden.
keyTakeaways:
  - Wertübergabe arbeitet mit einer Kopie.
  - Referenzübergabe arbeitet mit einem Alias auf das Original.
  - Änderungen an Referenzparametern wirken nach außen.
recognizeSignals:
  - In der Signatur taucht ein <code>&</code> beim Parametertyp auf.
  - Du sollst vorhersagen, ob ein Wert nach dem Funktionsaufruf verändert ist.
  - Ein Beispiel vergleicht lokale Änderungen mit sichtbaren Änderungen im Hauptablauf.
selfCheckPoints:
  - Kann ich Kopie und Original sauber trennen?
  - Kann ich erklären, warum eine Referenz kein Zeiger ist?
  - Kann ich die Wirkung eines Funktionsaufrufs auf eine Variable vorhersagen?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - funktionen
  - referenz
draft: false
---

## Grundidee

Bei einer normalen Wertübergabe bekommt die Funktion eine Kopie des Wertes. Bei einer Referenzübergabe arbeitet die Funktion dagegen mit einem Alias auf die ursprüngliche Variable.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei ähnliche Aufrufe mit unterschiedlicher Wirkung</h3>
  <p>Eine Funktion halbiert einen übergebenen Wert. Wird der Wert nur als Kopie übergeben, bleibt die Ursprungsvariable unverändert. Wird er per Referenz übergeben, ändert sich die Variable im Hauptablauf direkt.</p>
</div>

## Wertübergabe: Die Funktion arbeitet mit einer Kopie

```cpp
void halbieren(int zahl) {
  zahl = zahl / 2;
}
```

Hier wird nur der lokale Parameter <code>zahl</code> verändert. Die ursprüngliche Variable außerhalb der Funktion bleibt gleich.

## Referenzübergabe: Die Funktion wirkt auf das Original

```cpp
void halbieren(int &zahl) {
  zahl = zahl / 2;
}
```

Hier ist <code>zahl</code> ein Referenzparameter. Die Funktion arbeitet also nicht mit einer neuen Kopie, sondern mit einem Alias auf dieselbe Variable.

<div class="compare-card">
  <p class="card-kicker">Ruhiger Vergleich</p>
  <h3>Kopie oder Alias?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>call by value</strong>
      <span>Die Funktion bekommt einen eigenen lokalen Wert. Änderungen enden mit dem Funktionsaufruf.</span>
    </div>
    <div class="compare-item">
      <strong>Referenzübergabe</strong>
      <span>Die Funktion arbeitet über einen zweiten Namen mit derselben ursprünglichen Variable.</span>
    </div>
  </div>
</div>

## Referenz ist kein Zeiger

Eine Referenz verhält sich fachlich eher wie ein zweiter Name für dieselbe Variable. Man arbeitet damit direkter als mit einem Zeiger. Genau deshalb ist es sinnvoll, Referenzen zuerst als Alias zu verstehen.

<div class="note-panel">
  <p><strong>Merke:</strong> Das <code>&</code> in einem Referenzparameter bedeutet hier nicht „Adresse auslesen“, sondern „mit dem Original verknüpfen“.</p>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Signatur lesen</strong>
    <span>Suche zuerst nach einem <code>&</code> beim Parametertyp.</span>
  </div>
  <div class="step-item">
    <strong>2. Innen und außen trennen</strong>
    <span>Frage danach, ob die Funktion mit Kopie oder Original arbeitet.</span>
  </div>
  <div class="step-item">
    <strong>3. Änderung verfolgen</strong>
    <span>Prüfe, ob eine Zuweisung nur lokal bleibt oder nach außen wirkt.</span>
  </div>
  <div class="step-item">
    <strong>4. Rückgabe nicht erzwingen</strong>
    <span>Bei Referenzübergabe kann eine sichtbare Änderung auch ohne Rückgabewert entstehen.</span>
  </div>
</div>
