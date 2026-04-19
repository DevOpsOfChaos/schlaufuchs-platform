---
title: Statische Member in Klassen verstehen
description: Verstehe, warum manche Daten und Funktionen zur Klasse als Ganzes gehoeren und nicht zu einem einzelnen Objekt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - statische-member-in-klassen-verstehen
learningGoals:
  - Du erklaerst statische Daten und statische Methoden in Klassen.
  - Du unterscheidest Klassenebene und Objektebene sauber.
  - Du liest static in Klassendefinitionen ruhiger.
practiceIdeas:
  - Markiere in einer Klasse, welche Teile pro Objekt und welche nur einmal fuer alle Objekte existieren.
  - Formuliere, wann der Zugriff ueber `Klasse::name` sinnvoll ist.
  - Uebertrage das Prinzip auf einen Objektzaehler.
commonMistakes:
  - Zu denken, dass jede static-Variable zu jedem Objekt neu gehoert.
  - Statische Daten mit globalen Variablen gleichzusetzen.
  - Zu uebersehen, dass statische Methoden keinen Objektzustand brauchen.
keyTakeaways:
  - Statische Member gehoeren zur Klasse, nicht zu einem einzelnen Objekt.
  - Sie existieren nur einmal fuer alle Objekte gemeinsam.
  - Der Zugriff ueber den Klassennamen macht diese Denkweise sichtbar.
recognizeSignals:
  - Im Code steht `static` vor Attributen oder Methoden.
  - Die Aufgabe spricht ueber gemeinsame Daten aller Objekte.
  - Es geht um Zugriff ueber `Klasse::member`.
selfCheckPoints:
  - Kann ich Klassenebene und Objektebene unterscheiden?
  - Kann ich erklaeren, warum static nicht einfach global bedeutet?
  - Kann ich ein Beispiel fuer gemeinsame Klassendaten nennen?
level: einfach
tags:
  - informatik
  - programmierung
  - oop
  - static
  - klasse
draft: false
---

## Grundidee

In einer Klasse gibt es nicht nur Daten, die jedes Objekt fuer sich besitzt. Es kann auch Daten geben, die **alle Objekte gemeinsam** benutzen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Gemeinsamer Zaehler statt viele Kopien</h3>
  <p>Wenn du wissen willst, wie viele Objekte einer Klasse gerade existieren, dann waere es unruhig, wenn jedes Objekt seinen ganz eigenen Zaehler dafuer haette. Ruhiger ist ein gemeinsamer Klassenwert, auf den alle Instanzen zugreifen.</p>
</div>

## Klassenebene und Objektebene trennen

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Einmal fuer alle vs. einmal pro Objekt</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Statischer Member</strong>
      <span>Existiert nur einmal fuer die Klasse insgesamt.</span>
    </div>
    <div class="compare-item">
      <strong>Instanzmember</strong>
      <span>Gehört zu jedem Objekt einzeln und kann verschiedene Werte haben.</span>
    </div>
  </div>
</div>

## Statische Methoden

Statische Methoden arbeiten typischerweise auf Klassenwissen, nicht auf dem inneren Zustand eines bestimmten Objekts. Darum passen sie oft gut zu statischen Daten.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. static suchen</strong>
    <span>Steht das Schluesselwort direkt beim Member?</span>
  </div>
  <div class="step-item">
    <strong>2. Ebene bestimmen</strong>
    <span>Geht es um ein einzelnes Objekt oder um die ganze Klasse?</span>
  </div>
  <div class="step-item">
    <strong>3. Zugriff lesen</strong>
    <span>Wird sinnvollerweise ueber den Klassennamen zugegriffen?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> static in einer Klasse bedeutet nicht "ueberall frei", sondern "einmal fuer die Klasse gemeinsam".</p>
</div>


## Ergaenzung: Klassenbezug sichtbar schreiben

Auch wenn der Zugriff ueber ein Objekt moeglich ist, ist die Schreibweise mit <code>Klassenname::member</code> oft lesbarer. Sie zeigt den Klassenbezug direkter und vermeidet das Missverstaendnis, es gehe um einen individuellen Objektwert.
