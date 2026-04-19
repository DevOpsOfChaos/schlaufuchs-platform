---
title: Konstruktoraufrufe in Vererbung ruhig lesen
description: Verstehe, wie Basisklasse und abgeleitete Klasse beim Erzeugen eines Objekts nacheinander beteiligt sind.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - konstruktoraufrufe-in-vererbung-ruhig-lesen
learningGoals:
  - Du beschreibst die Aufrufreihenfolge von Konstruktoren in einer Vererbungshierarchie.
  - Du erklaerst, dass Konstruktoren nicht geerbt, sondern aufgerufen werden.
  - Du liest Basis- und Unterklassenkonstruktoren geordneter.
practiceIdeas:
  - Ordne Basisklassen- und Unterklassenkonstruktoren in die richtige Reihenfolge.
  - Markiere, wo explizit weitergeleitet wird und wo die Standardsyntax greift.
  - Beschreibe, wann von jeder Klasse ein Teilobjekt entsteht.
commonMistakes:
  - Zu denken, dass Konstruktoren einfach mitvererbt werden.
  - Den Aufruf der Basisklasse erst nach der Unterklasse zu erwarten.
  - Basisklasseninitialisierung mit Delegation innerhalb derselben Klasse zu verwechseln.
keyTakeaways:
  - Konstruktoren werden nicht vererbt.
  - Beim Erzeugen eines Objekts wird die Basisklasse vor der abgeleiteten Klasse vorbereitet.
  - Explizite Weiterleitung macht diese Reihenfolge nur sichtbar, nicht grundsaetzlich neu.
recognizeSignals:
  - Es geht um Oberklasse, Unterklasse und Konstruktoraufrufe.
  - Eine abgeleitete Klasse nennt im Konstruktor eine Basisklasse.
  - Die Aufgabe fragt nach Reihenfolge oder Startzustand in der Vererbung.
selfCheckPoints:
  - Kann ich sagen, wer zuerst konstruiert wird?
  - Kann ich erklaeren, warum Konstruktoren nicht vererbt werden?
  - Kann ich Delegation und Basisklassenaufruf unterscheiden?
level: mittel
tags:
  - informatik
  - programmierung
  - oop
  - vererbung
  - konstruktor
draft: false
---

## Grundidee

Bei Vererbung entsteht ein Objekt der Unterklasse nicht auf leerem Raum. Es enthaelt auch den Teil der Basisklasse. Darum muss dieser Basisklassenteil zuerst vorbereitet werden.

<div class="figure-card">
  <p class="card-kicker">Ablaufbild</p>
  <h3>Von oben nach unten aufbauen</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Basisklasse</strong><span>Der geerbte Teil wird zuerst bereitgestellt.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Abgeleitete Klasse</strong><span>Danach kommt die Spezialisierung der Unterklasse.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Fertiges Objekt</strong><span>Beide Teile ergeben zusammen die Instanz.</span></div>
  </div>
</div>

## Wichtige Regel

**Konstruktoren werden nicht vererbt.**  
Die Unterklasse besitzt ihren eigenen Konstruktor. Dieser sorgt aber dafuer, dass der Basisklassenteil korrekt vorbereitet wird.

## Beispielidee

Wenn eine Klasse `Fahrzeug` und eine Klasse `Auto` existieren, dann ist ein `Auto` auch ein `Fahrzeug`. Beim Erzeugen eines `Auto` muss also zuerst der `Fahrzeug`-Teil stimmen, bevor die Spezialisierung des `Auto` fertig werden kann.

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Delegation vs. Basisklassenaufruf</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Delegation</strong>
      <span>Ein Konstruktor ruft einen anderen Konstruktor derselben Klasse auf.</span>
    </div>
    <div class="compare-item">
      <strong>Vererbungsaufruf</strong>
      <span>Ein Konstruktor der Unterklasse sorgt fuer die Initialisierung der Basisklasse.</span>
    </div>
  </div>
</div>

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Hierarchie erkennen</strong>
    <span>Welche Klasse ist Basis, welche ist abgeleitet?</span>
  </div>
  <div class="step-item">
    <strong>2. Basisklassenteil mitdenken</strong>
    <span>Auch dieser Teil gehoert zum neuen Objekt.</span>
  </div>
  <div class="step-item">
    <strong>3. Reihenfolge benennen</strong>
    <span>Zuerst Basis, dann Ableitung.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Beim Erzeugen eines Objekts in einer Vererbungshierarchie wird erst das Fundament der Basisklasse vorbereitet und danach die Spezialisierung der Unterklasse.</p>
</div>


## Ergaenzung: Konstruktoren werden nicht vererbt

Wichtig ist hier die Denkgrenze: Eine Unterklasse bekommt nicht einfach die Konstruktoren der Oberklasse geschenkt. Sie kann sie nur in ihrer eigenen Konstruktorlogik gezielt ansprechen oder weiterleiten lassen.
