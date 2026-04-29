---
title: "Konstruktoraufrufe in Vererbung ruhig lesen"
description: "Verstehe, wie Basisklasse und abgeleitete Klasse beim Erzeugen eines Objekts nacheinander beteiligt sind."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "konstruktoraufrufe-in-vererbung-ruhig-lesen"]
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

Bei Vererbung entsteht ein Objekt der Unterklasse nicht auf leerem Raum. Es enthaelt auch den Teil der Basisklasse. Darum muss dieser Basisklassenteil zuerst vorbereitet werden.

<div class="figure-card">
  <p class="card-kicker">Ablaufbild</p>
  <h3>Von oben nach unten aufbauen</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Basisklasse</strong><span>Der geerbte Teil wird zuerst vorbereitet.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Abgeleitete Klasse</strong><span>Danach kommt die Spezialisierung der Unterklasse.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Fertiges Objekt</strong><span>Beide Teile ergeben zusammen die Instanz.</span></div>
  </div>
</div>

## Wichtige Regel

**Konstruktoren werden nicht vererbt.**  
Die Unterklasse besitzt ihren eigenen Konstruktor. Dieser sorgt aber dafuer, dass der Basisklassenteil korrekt vorbereitet wird.

## Leitbeispiel

Wenn eine Klasse `Fahrzeug` und eine Klasse `Auto` existieren, dann ist ein `Auto` auch ein `Fahrzeug`. Beim Erzeugen eines `Auto` muss also zuerst der `Fahrzeug`-Teil stimmen, bevor die Spezialisierung des `Auto` fertig werden kann.

## Nicht mit Delegation verwechseln

<div class="compare-card">
  <p class="card-kicker">Saubere Trennung</p>
  <h3>Gleiche Syntaxfamilie, andere Denkfrage</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Delegation</strong>
      <span>Ein Konstruktor ruft einen anderen Konstruktor derselben Klasse auf.</span>
    </div>
    <div class="compare-item">
      <strong>Basisklassenaufruf</strong>
      <span>Ein Konstruktor der Unterklasse sorgt fuer die Initialisierung der Basisklasse.</span>
    </div>
  </div>
</div>

## Was die Reihenfolge didaktisch bedeutet

Die Basisklasse ist kein Nebenschritt. Sie bildet das Fundament des geerbten Objekts. Deshalb gilt ruhig gelesen immer:

1. Basisklassenteil vorbereiten
2. Unterklassenteil ergaenzen
3. Gesamtes Objekt fertig denken

## Diese Seite behandelt bewusst nur Vererbungsreihenfolge

Mehrere Startwege innerhalb derselben Klasse gehoeren nicht hierher. Sobald nur Konstruktoren derselben Klasse miteinander zusammenarbeiten, geht es um Ueberladung und Delegation.

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
