---
title: "ATmega – Timer Compare Match statt Warteschleife"
description: "Verstehe, wie ein Timerereignis durch Compare Match entsteht und warum das oft sauberer ist als Zählen in einer Warteschleife."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - timer-compare-match-statt-warteschleife
learningGoals:
  - "Du erklärst Compare Match als Ereignis, wenn Timerstand und Vergleichswert übereinstimmen."
  - "Du unterscheidest Timer-Hardware, Flag, Interrupt und Programmaktion."
  - "Du begründest, warum zeitkritische Aufgaben nicht nur über Warteschleifen gelöst werden sollten."
practiceIdeas:
  - "Lies zuerst den praktischen Fehlerfall und danach die technische Regel."
  - "Skizziere den Ablauf als kleines Zeit-, Signal- oder Entscheidungsbild."
  - "Erkläre den Unterschied einmal ohne Code und danach mit den passenden Fachbegriffen."
commonMistakes:
  - "Compare Match mit Timerüberlauf zu verwechseln."
  - "Das Flag selbst schon für die eigentliche Aktion zu halten."
  - "Warteschleifen als genaue Zeitbasis zu verwenden, obwohl anderer Code die Laufzeit verändert."
keyTakeaways:
  - "Compare Match entsteht, wenn der Timer einen vorgegebenen Vergleichswert erreicht."
  - "Das Timerereignis kann per Flag abgefragt oder per Interrupt behandelt werden."
  - "Hardware-Timer machen Zeitaufgaben stabiler als handgeschriebene Zählschleifen."
recognizeSignals:
  - "Die Aufgabe enthält Mikrocontroller-Code, Register, Sensorwerte, Zeitverhalten oder Schnittstellen."
  - "Es wird nach Ursache, Wirkung, Diagnose oder einer besseren Struktur gefragt."
  - "Eine reine Codeantwort reicht nicht; die elektrische oder zeitliche Bedeutung muss mitgelesen werden."
selfCheckPoints:
  - "Kann ich den Hauptbegriff in einem Satz fachlich sauber erklären?"
  - "Kann ich ein typisches Fehlerbild zuordnen?"
  - "Kann ich begründen, warum die vorgeschlagene Lösung zur Anwendung passt?"
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - timer
  - compare-match
  - zeitbasis
  - interrupts
level: mittel
draft: false
---


## Grundidee

Ein Timer zählt mit einer festgelegten Zeitbasis. Bei Compare Match wird dieser Zählerstand mit einem Vergleichswert verglichen. Sobald beide übereinstimmen, entsteht ein Timerereignis. Das Programm muss dann nicht selbst in einer ungenauen Warteschleife zählen.

<div class="example-card"><p class="card-kicker">Leitbeispiel</p><h3>Eine LED soll regelmäßig blinken, während das Programm weiterarbeitet</h3><p>Eine Warteschleife kann blinken, blockiert aber den restlichen Ablauf. Ein Timer mit Compare Match kann ein regelmäßiges Ereignis liefern, während die Hauptlogik weiterlaufen kann.</p></div>

<div class="visual-grid"><div class="visual-item"><strong>Timer zählt</strong><span>Die Hardware erhöht den Zähler.</span></div><div class="visual-item"><strong>Vergleichswert steht fest</strong><span>Ein OCR-Register enthält den Zielwert.</span></div><div class="visual-item"><strong>Compare Match entsteht</strong><span>Zählerstand und Vergleichswert stimmen überein.</span></div><div class="visual-item"><strong>Programm reagiert</strong><span>Per Flag-Abfrage oder Interrupt wird eine Aktion ausgelöst.</span></div></div>

<div class="figure-card"><p class="card-kicker">Zeitspur</p><h3>Das Ereignis entsteht durch Übereinstimmung</h3><pre><code>Timerstand:  0  1  2  3  4  5  6  ...
OCR-Wert:                  5
Ereignis:                  Compare Match</code></pre></div>

<div class="compare-card"><p class="card-kicker">Abgrenzung</p><h3>Überlauf und Compare Match sind verschiedene Ereignisse</h3><div class="compare-grid"><div class="compare-item"><strong>Überlauf</strong><span>Der Timer erreicht das Ende seines Zählbereichs.</span></div><div class="compare-item"><strong>Compare Match</strong><span>Der Timer erreicht einen eingestellten Vergleichswert.</span></div></div></div>

<div class="note-panel"><p><strong>Merke:</strong> Compare Match trennt Zeitmessung und Programmaktion. Genau diese Trennung macht Timerlösungen oft sauberer als Warteschleifen.</p></div>
