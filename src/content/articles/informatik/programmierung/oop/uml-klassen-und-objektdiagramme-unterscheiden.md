---
title: "UML-Klassen- und Objektdiagramme unterscheiden"
description: "Verstehe, wann UML eher einen Bauplan zeigt und wann konkrete Instanzen mit ihren aktuellen Werten sichtbar werden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "uml-klassen-und-objektdiagramme-unterscheiden"]
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
