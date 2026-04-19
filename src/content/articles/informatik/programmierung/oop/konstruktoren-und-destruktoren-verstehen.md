---
title: Konstruktoren und Destruktoren verstehen
description: Verstehe, wie Objekte angelegt, vorbereitet und wieder sauber beendet werden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - konstruktoren-und-destruktoren-verstehen
learningGoals:
  - Du erklaerst die Rolle von Konstruktor und Destruktor beim Objektlebenszyklus.
  - Du unterscheidest Anlegen, Initialisieren und Aufraeumen sauber.
  - Du liest Klassendefinitionen ruhiger, wenn mehrere spezielle Methoden vorkommen.
practiceIdeas:
  - Markiere in einer Klassendefinition Konstruktor, Destruktor und normale Methode.
  - Beschreibe, was beim Erzeugen und Beenden eines Objekts fachlich passiert.
  - Vergleiche automatische und dynamische Objekterzeugung.
commonMistakes:
  - Konstruktoren fuer normale Methoden zu halten.
  - Zu denken, dass ein Destruktor beliebige Parameter haben darf.
  - Objektanlage und Initialisierung sprachlich zu vermischen.
keyTakeaways:
  - Ein Konstruktor bereitet ein neues Objekt vor.
  - Ein Destruktor gehoert zum sauberen Ende eines Objekts.
  - Beide helfen, Zustaende und Ressourcen geordnet zu halten.
recognizeSignals:
  - Eine Klasse enthaelt einen Methodennamen wie den Klassennamen selbst.
  - Vor einem Methodennamen steht eine Tilde.
  - In Aufgaben geht es um new, delete oder den Lebenszyklus von Objekten.
selfCheckPoints:
  - Kann ich Konstruktor und Destruktor im Code erkennen?
  - Kann ich sagen, wann sie typischerweise wirken?
  - Kann ich den Lebenszyklus eines Objekts in drei Schritten beschreiben?
level: einfach
tags:
  - informatik
  - programmierung
  - oop
  - konstruktor
  - destruktor
draft: false
---

## Grundidee

Objekte tauchen in einem Programm nicht einfach "fertig" auf. Sie werden angelegt, in einen sinnvollen Anfangszustand gebracht und spaeter wieder beendet. Genau dafuer sind Konstruktoren und Destruktoren da.

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

Ein Konstruktor traegt denselben Namen wie die Klasse. Er wird benutzt, um beim Erzeugen eines Objekts einen sinnvollen Anfangszustand herzustellen.

```cpp
class Konto {
public:
  Konto() { /* Startzustand setzen */ }
};
```

Der wichtige Gedanke ist: Ein Objekt soll nicht erst spaeter "irgendwann" brauchbar werden, sondern moeglichst schon beim Entstehen.

## Destruktor

Ein Destruktor ist an der Tilde vor dem Klassennamen erkennbar.

```cpp
class Konto {
public:
  ~Konto() { /* aufraeumen */ }
};
```

Er gehoert zum Ende des Objektlebenszyklus. Besonders wichtig wird er, wenn ein Objekt Ressourcen verwaltet, zum Beispiel Dateien, Speicher oder Verbindungen.

## Konstruktor und Destruktor nicht verwechseln

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Start vorbereiten vs. Ende sauber machen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Konstruktor</strong>
      <span>Hilft beim Start des Objekts. Er setzt Startwerte oder richtet Abhaengigkeiten ein.</span>
    </div>
    <div class="compare-item">
      <strong>Destruktor</strong>
      <span>Hilft beim Ende des Objekts. Er raeumt auf, wenn das Objekt verschwindet.</span>
    </div>
  </div>
</div>

## Automatisch und dynamisch erzeugte Objekte

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Wege, dasselbe Prinzip</h3>
  <p>Ein automatisch erzeugtes Objekt wird beim Betreten eines Bereichs angelegt und am Ende dieses Bereichs wieder beendet. Ein dynamisch erzeugtes Objekt entsteht mit <code>new</code> und muss spaeter mit <code>delete</code> sauber freigegeben werden. Der Lebenszyklus ist also aehnlich, aber die Verantwortung beim Beenden ist nicht immer gleich verteilt.</p>
</div>

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
  <p><strong>Merke:</strong> Konstruktoren und Destruktoren sind keine "irgendwelchen Sonderfaelle", sondern die ruhigste Art, den Anfang und das Ende eines Objekts sauber zu denken.</p>
</div>
## Ergaenzung: Nicht jeder Konstruktor startet isoliert

Bei Klassen mit mehreren Konstruktoren lohnt sich noch eine Zusatzfrage:  
**Startet hier wirklich jeder Konstruktor komplett fuer sich oder leitet einer an einen anderen weiter?**

Gerade bei moderneren C++-Beispielen wird die eigentliche Initialisierung oft in einen Kernkonstruktor gebuendelt. So bleibt der Objektstart ruhiger und besser lesbar.
