---
title: "Freilaufdiode bei Relais und induktiven Lasten verstehen"
description: "Verstehe, warum Spulen beim Abschalten Spannungsspitzen erzeugen und wie die Freilaufdiode den Schalttransistor schützt."
subject: "elektrotechnik"
section: "mikrocontroller"
topicPath: ["mikrocontroller", "freilaufdiode-bei-relais-und-induktiven-lasten-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "mikrocontroller"]
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

