---
title: Aggregation und Komposition unterscheiden
description: Verstehe, wann Teile eher locker zu einem Ganzen gehoeren und wann sie stark davon abhaengig sind.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - aggregation-und-komposition-unterscheiden
learningGoals:
  - Du unterscheidest Aggregation und Komposition grob, aber fachlich sauber.
  - Du erklaerst Existenzabhaengigkeit als wichtigen Unterschied.
  - Du ordnest Teil-Ganzes-Beziehungen ruhiger ein.
practiceIdeas:
  - Uebertrage die Idee auf Klasse-Schueler, Haus-Raum oder Auto-Motor.
  - Pruefe, ob ein Teil auch ohne das Ganze sinnvoll weiterexistieren kann.
  - Begruende, warum manche Beziehungen nur lockere Assoziationen sind.
commonMistakes:
  - Jede Teil-Ganzes-Idee sofort als Komposition zu deuten.
  - Aggregation und Assoziation komplett gleichzusetzen.
  - Existenzabhaengigkeit nicht mitzudenken.
keyTakeaways:
  - Beide sind Spezialfaelle von Beziehungen zwischen Klassen.
  - Aggregation ist eher locker.
  - Komposition ist staerker, weil die Teile vom Ganzen abhaengen.
recognizeSignals:
  - Es geht um Teil-von-Beziehungen.
  - Ein UML-Diagramm zeigt leere oder gefuellte Raute.
  - In Aufgaben soll erklaert werden, ob Teile eigenstaendig weiterbestehen koennen.
selfCheckPoints:
  - Kann ich sagen, was Existenzabhaengigkeit bedeutet?
  - Kann ich Aggregation und Komposition sprachlich unterscheiden?
  - Kann ich ein passendes Alltagsbeispiel nennen?
level: mittel
tags:
  - informatik
  - programmierung
  - oop
  - uml
  - komposition
draft: false
---

## Grundidee

Aggregation und Komposition sind beides Teil-Ganzes-Beziehungen. Der wichtige Unterschied liegt darin, **wie stark** die Teile vom Ganzen abhaengen.

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Locker verbunden oder stark gebunden?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Aggregation</strong>
      <span>Teile gehoeren zu einem Ganzen, koennen aber oft auch unabhaengig gedacht werden.</span>
    </div>
    <div class="compare-item">
      <strong>Komposition</strong>
      <span>Teile haengen stark vom Ganzen ab. Ohne das Ganze ergibt das Teil oft keinen sinnvollen eigenstaendigen Bestand.</span>
    </div>
  </div>
</div>

## Existenzabhaengigkeit ist der Kern

<div class="example-card">
  <p class="card-kicker">Leitfrage</p>
  <h3>Kann das Teil ohne das Ganze sinnvoll weiterexistieren?</h3>
  <p>Wenn ja, spricht das eher fuer Aggregation. Wenn nein, spricht das eher fuer Komposition. Diese Leitfrage ist didaktisch oft hilfreicher als das blosse Merken einer Raute.</p>
</div>

## Beispiele

- Klasse und Schueler: eher Aggregation - Schueler existieren auch unabhaengig von einer bestimmten Klasse.
- Haus und Raum: oft eher Komposition - Raeume sind stark an das Haus als Ganzes gebunden.

## Nicht zu schnell entscheiden

Die UML selbst gibt keine ueberall messerscharfe Grenze vor. Deshalb ist sauberes Begruenden wichtiger als auswendig gelernte Symbolreaktion.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Teil-Ganzes pruefen</strong>
    <span>Liegt wirklich eine Teil-von-Idee vor?</span>
  </div>
  <div class="step-item">
    <strong>2. Abhaengigkeit pruefen</strong>
    <span>Kann das Teil ohne das Ganze bestehen?</span>
  </div>
  <div class="step-item">
    <strong>3. Staerke benennen</strong>
    <span>Eher locker = Aggregation, eher stark = Komposition.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Der ruhigste Unterschied lautet nicht "leere vs. volle Raute", sondern "unabhaengig weiterdenkbar oder stark vom Ganzen abhaengig".</p>
</div>
