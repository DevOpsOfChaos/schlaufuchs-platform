---
title: Freilaufdiode bei Relais und induktiven Lasten verstehen
description: Verstehe, warum Spulen beim Abschalten Spannungsspitzen erzeugen und wie die Freilaufdiode den Schalttransistor schützt.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - freilaufdiode-bei-relais-und-induktiven-lasten-verstehen
learningGoals:
  - Du erklärst, warum eine Spule beim Abschalten eine Spannungsspitze erzeugt.
  - Du beschreibst die Aufgabe der Freilaufdiode als Strompfad nach dem Abschalten.
  - Du liest Schutzbeschaltung eher als Pflichtteil der Lastansteuerung als als Zusatzoption.
practiceIdeas:
  - Vergleiche eine Relais-Ansteuerung mit und ohne Freilaufdiode.
  - Skizziere den Stromweg direkt nach dem Abschalten einer Spule.
  - Begründe, warum Mikrocontroller-Pins induktive Lasten nicht direkt treiben sollen.
commonMistakes:
  - Zu denken, die Diode sei nur zum Schutz der Spule da.
  - Die Diode in Durchlassrichtung zur Versorgung falsch herum zu zeichnen.
  - Relais und LED als gleichartige Lasten zu behandeln.
keyTakeaways:
  - Induktive Lasten brauchen beim Abschalten einen kontrollierten Strompfad.
  - Die Freilaufdiode begrenzt gefährliche Spannungsspitzen.
  - Schutzbeschaltung gehört zum fachlich vollständigen Schaltbild.
recognizeSignals:
  - Es geht um Relais, Motoren, Spulen oder Magnetventile.
  - Ein Transistor schaltet eine induktive Last.
  - Beim Abschalten drohen Spannungsspitzen oder Störungen.
selfCheckPoints:
  - Kann ich die technische Hauptfrage dieser Schaltung ruhig benennen?
  - Kann ich Ursache, Wirkung und Schutz- oder Hilfsmaßnahme sauber trennen?
  - Kann ich das Thema auf einen ähnlichen Mikrocontroller-Fall übertragen?
tags:
  - elektrotechnik
  - mikrocontroller
  - embedded
level: mittel
draft: false
---

## Grundidee

Spulen in Relais, Ventilen oder kleinen Motoren speichern Energie im Magnetfeld. Beim Abschalten will der Strom nicht schlagartig auf null gehen. Genau daraus entstehen Spannungsspitzen, die einen Transistor oder Mikrocontroller-Ausgang gefährden können.

<div class="example-card"><p class="card-kicker">Leitbeispiel</p><h3>Relais schaltet, Controller stürzt ab</h3><p>Eine Relais-Spule wird über einen Transistor angesteuert. Beim Einschalten läuft alles, aber beim Abschalten treten Störungen oder sogar Resets auf. Die fehlende Freilaufdiode ist hier keine Kleinigkeit, sondern der entscheidende Schutzpfad.</p></div>

## Was beim Abschalten passiert

<div class="signal-flow">
  <div class="flow-node"><strong>Spule bestromt</strong><span>Energie ist magnetisch gespeichert</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Transistor sperrt</strong><span>der bisherige Stromweg wird abrupt unterbrochen</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Spannungsspitze droht</strong><span>die Spule „erzwingt“ weiter Stromfluss</span></div>
</div>

## Aufgabe der Freilaufdiode

Die Diode gibt der Spule direkt nach dem Abschalten einen geschlossenen Strompfad. Dadurch steigt die Spannung nicht unkontrolliert an, sondern der Strom klingt kontrolliert ab.

## Zwei Lastarten bewusst trennen

<div class="compare-card"><p class="card-kicker">Vergleich</p><h3>LED und Relais sind nicht dieselbe Welt</h3><div class="compare-grid"><div class="compare-item"><strong>LED</strong><span>braucht Strombegrenzung, speichert aber keine nennenswerte magnetische Energie.</span></div><div class="compare-item"><strong>Relais / Spule</strong><span>braucht beim Abschalten einen Schutzpfad gegen Spannungsspitzen.</span></div></div></div>

## Mini-Demo: Strompfad nach dem Abschalten

```text
ohne Freilaufdiode   → Stromweg unterbrochen, Spannungsspitze droht
mit Freilaufdiode    → Strom zirkuliert kurz durch Spule und Diode
```

<div class="note-panel"><p><strong>Merke:</strong> Die Freilaufdiode schützt nicht nur „irgendwie die Schaltung“, sondern schafft nach dem Abschalten den nötigen Strompfad für die Spule.</p></div>

