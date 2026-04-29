---
title: "Konstruktoren und Destruktoren verstehen"
description: "Verstehe, wie Objekte angelegt, sinnvoll gestartet und wieder sauber beendet werden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "konstruktoren-und-destruktoren-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Objekte tauchen in einem Programm nicht einfach fertig auf. Sie werden angelegt, in einen sinnvollen Anfangszustand gebracht und spaeter wieder beendet. Genau dafuer sind Konstruktoren und Destruktoren da.

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Objektlebenszyklus in drei Schritten</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Anlegen</strong><span>Speicher und Identitaet des Objekts entstehen.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Initialisieren</strong><span>Der Konstruktor setzt Startwerte und bereitet das Objekt vor.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Beenden</strong><span>Der Destruktor raeumt am Ende auf.</span></div>
  </div>
</div>

## Konstruktor

Ein Konstruktor traegt denselben Namen wie die Klasse. Er soll dafuer sorgen, dass ein Objekt schon beim Entstehen in einem brauchbaren Zustand startet.

```cpp
class Konto {
public:
  Konto() { /* Startzustand setzen */ }
};
```

## Destruktor

Ein Destruktor ist an der Tilde vor dem Klassennamen erkennbar.

```cpp
class Konto {
public:
  ~Konto() { /* aufraeumen */ }
};
```

Er gehoert zum Ende des Objektlebenszyklus. Besonders wichtig wird er, wenn ein Objekt Ressourcen verwaltet, zum Beispiel Dateien, Speicher oder Verbindungen.

## Nicht nur Start und Ende, sondern auch Verantwortung

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennung</p>
  <h3>Was passiert automatisch und was braucht bewusste Steuerung?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Automatisches Objekt</strong>
      <span>Entsteht beim Betreten eines Bereichs und endet wieder beim Verlassen dieses Bereichs.</span>
    </div>
    <div class="compare-item">
      <strong>Dynamisches Objekt</strong>
      <span>Entsteht mit <code>new</code> und braucht spaeter ein bewusstes <code>delete</code>.</span>
    </div>
  </div>
</div>

## Leitbeispiel

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Konto startet nicht neutral</h3>
  <p>Ein <code>Konto</code>-Objekt soll zum Beispiel sofort eine Kontonummer oder einen Anfangssaldo sinnvoll gesetzt haben. Genau dafuer ist der Konstruktor da. Wenn das Objekt spaeter verschwindet, sorgt der Destruktor dafuer, dass offene Ressourcen sauber beendet werden.</p>
</div>

## Diese Seite behandelt bewusst nur den Objektlebenszyklus

Hier geht es um Anfang und Ende eines Objekts. Mehrere Startwege in derselben Klasse, Delegation zwischen Konstruktoren oder Basisklassenaufrufe in der Vererbung sind eigene, feinere Themen.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Klassenname suchen</strong>
    <span>Gibt es eine Methode mit genau diesem Namen?</span>
  </div>
  <div class="step-item">
    <strong>2. Tilde suchen</strong>
    <span>Eine Tilde vor dem Klassennamen zeigt den Destruktor.</span>
  </div>
  <div class="step-item">
    <strong>3. Rolle benennen</strong>
    <span>Geht es um Startzustand oder um Aufraeumen?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Konstruktoren und Destruktoren sind die ruhigste Art, Anfang und Ende eines Objekts sauber zu denken.</p>
</div>
