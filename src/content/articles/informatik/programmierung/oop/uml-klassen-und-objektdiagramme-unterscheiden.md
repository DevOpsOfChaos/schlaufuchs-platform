---
title: UML-Klassen- und Objektdiagramme unterscheiden
description: Verstehe, wann UML eher einen Bauplan zeigt und wann konkrete Instanzen mit ihren aktuellen Werten sichtbar werden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - uml-klassen-und-objektdiagramme-unterscheiden
learningGoals:
  - Du unterscheidest Klassendiagramm und Objektdiagramm.
  - Du erklaerst, warum das eine eher Struktur und das andere eher Zustand zeigt.
  - Du liest Klasse und konkrete Instanz auch in UML ruhiger.
practiceIdeas:
  - Ordne einem Diagramm zu, ob es Klassen oder konkrete Objekte zeigt.
  - Pruefe, ob Attributwerte oder nur Attributnamen dargestellt werden.
  - Uebertrage ein Klassendiagramm auf zwei moegliche Objektdiagramme.
commonMistakes:
  - Objektnamen fuer Klassennamen zu halten.
  - Attributwerte und Attributtypen zu vermischen.
  - Zu uebersehen, dass ein Objektdiagramm nur einen Momentzustand zeigt.
keyTakeaways:
  - Klassendiagramme zeigen den Bauplan.
  - Objektdiagramme zeigen konkrete Instanzen und Werte.
  - Beide gehoeren zusammen, beantworten aber unterschiedliche Fragen.
recognizeSignals:
  - Ein Diagramm zeigt Typen, Methoden oder Sichtbarkeiten.
  - Ein anderes Diagramm zeigt konkrete Namen und aktuelle Werte.
  - Die Aufgabe fragt nach Bauplan oder Momentaufnahme.
selfCheckPoints:
  - Kann ich Bauplan und Instanz auch grafisch unterscheiden?
  - Kann ich sagen, welches Diagramm konkrete Werte zeigt?
  - Kann ich beide Diagrammarten als zusammengehoerig beschreiben?
level: einfach
tags:
  - informatik
  - programmierung
  - oop
  - uml
  - klasse
  - objekt
draft: false
---

## Grundidee

Auch in UML taucht dieselbe Trennung wieder auf wie in OOP selbst:

- **Klasse** als Bauplan
- **Objekt** als konkrete Instanz

## Zwei Diagrammarten, zwei Blickrichtungen

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Bauplan vs. Momentaufnahme</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Klassendiagramm</strong>
      <span>Zeigt, wie eine Klasse allgemein aufgebaut ist.</span>
    </div>
    <div class="compare-item">
      <strong>Objektdiagramm</strong>
      <span>Zeigt konkrete Objekte mit ihren aktuellen Werten.</span>
    </div>
  </div>
</div>

## Leitbeispiel

Ein Klassendiagramm kann sagen: `Ampel` besitzt `rot` und `gruen` sowie Methoden zum Umschalten.  
Ein Objektdiagramm kann dazu zwei konkrete Instanzen zeigen, etwa `linkeKreuzung` und `rechteKreuzung`, mit unterschiedlichen aktuellen Attributwerten.

## Ruhige Lesestrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Typ oder Instanz?</strong>
    <span>Geht es um die allgemeine Struktur oder um ein konkretes Objekt?</span>
  </div>
  <div class="step-item">
    <strong>2. Werte suchen</strong>
    <span>Werden konkrete Attributwerte angezeigt?</span>
  </div>
  <div class="step-item">
    <strong>3. Zweck benennen</strong>
    <span>Bauplan = Klassendiagramm, Momentaufnahme = Objektdiagramm.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Klassendiagramme helfen beim Modellieren. Objektdiagramme helfen beim Verstehen eines konkreten Zustands.</p>
</div>
