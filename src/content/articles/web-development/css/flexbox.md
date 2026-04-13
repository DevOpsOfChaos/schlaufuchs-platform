---
title: Flexbox
description: Verstehe Flexbox als Werkzeug für geordnete Ausrichtung und Verteilung von Elementen.
subject: web-development
section: CSS
topicPath:
- css
- flexbox
learningGoals:
- Du verstehst Flexbox als Layout-Werkzeug.
- Du beschreibst Hauptachse, Querachse und Ausrichtung einfacher.
- Du erkennst, wann Flexbox für Gruppen von Elementen sinnvoll ist.
practiceIdeas:
- Ordne kleine Elemente einmal mit und einmal ohne Flexbox an.
- Beschreibe eine Zeile von Karten bewusst über Haupt- und Querachse.
- Prüfe, was sich ändert, wenn Elemente verteilt statt nur untereinander gesetzt werden.
commonMistakes:
- Flexbox nur als einzelne Eigenschaft statt als Layout-Modell zu sehen.
- Ausrichtung zu beschreiben, ohne Haupt- und Querachse zu unterscheiden.
- Flexbox für völlig andere Strukturprobleme einzusetzen.
keyTakeaways:
- Flexbox ordnet Elemente entlang von Achsen.
- Ausrichtung und Verteilung werden bewusster steuerbar.
- Für kleine bis mittlere Gruppen von Elementen ist Flexbox oft sehr passend.
tags:
- css
- flexbox
- layout
- web-development
level: einfach
draft: false
recognizeSignals:
- Die Aufgabe oder Erklärung nennt Flexbox direkt oder greift eng benachbarte Begriffe aus CSS auf.
- Du sollst nicht nur einen Begriff nennen, sondern einen Zusammenhang, Ablauf oder eine Struktur sauber erklären.
- In Beispielen musst du Werte, Schritte oder Bauteile geordnet lesen und richtig einordnen.
selfCheckPoints:
- Kann ich verstehst Flexbox als Layout-Werkzeug?
- Kann ich beschreibst Hauptachse, Querachse und Ausrichtung einfacher?
- Kann ich erkennst, wann Flexbox für Gruppen von Elementen sinnvoll ist?
---


## Grundidee

Flexbox hilft dabei, mehrere Elemente geordnet auszurichten und zu verteilen. Es geht also nicht nur darum, <em>dass</em> etwas nebeneinander steht, sondern <em>wie</em> die Anordnung gesteuert wird.

## Achsen statt Bauchgefühl

Statt nur nach „links“, „rechts“ oder „mittig“ zu denken, hilft bei Flexbox die Arbeit mit Achsen:

- Hauptachse
- Querachse

So wird Layout verständlicher und weniger zufällig.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Drei Karten in einer Zeile</h3>
  <p>Stell dir drei Karten vor, die in einer gemeinsamen Reihe stehen sollen. Mit Flexbox lässt sich nicht nur festlegen, dass sie nebeneinander erscheinen, sondern auch, wie viel Abstand dazwischen liegt und wie sie auf der zweiten Achse ausgerichtet sind.</p>
</div>

## Wann Flexbox gut passt

Flexbox ist besonders nützlich für kleinere bis mittlere Gruppen von Elementen, zum Beispiel:

- Navigationsleisten,
- Button-Reihen,
- Kartenzeilen,
- Medienobjekte oder einfache Toolbar-Strukturen.
