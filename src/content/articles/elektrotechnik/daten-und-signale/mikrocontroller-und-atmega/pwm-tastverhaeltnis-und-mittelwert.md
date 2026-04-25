---
title: "ATmega – PWM-Tastverhältnis und Mittelwert verstehen"
description: "Verstehe, warum PWM kein halbes Signal ausgibt, sondern schnell zwischen ein und aus wechselt und dadurch eine mittlere Wirkung erzeugt."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - pwm-tastverhaeltnis-und-mittelwert
learningGoals:
  - "Du erklärst PWM als schnelles Umschalten zwischen Low und High."
  - "Du beschreibst das Tastverhältnis als Anteil der Einschaltzeit innerhalb einer Periode."
  - "Du unterscheidest digitalen Pegel, mittlere Wirkung und gefilterte Spannung."
practiceIdeas:
  - "Lies zuerst den praktischen Fehlerfall und danach die technische Regel."
  - "Skizziere den Ablauf als kleines Zeit-, Signal- oder Entscheidungsbild."
  - "Erkläre den Unterschied einmal ohne Code und danach mit den passenden Fachbegriffen."
commonMistakes:
  - "Zu denken, PWM erzeuge direkt eine echte analoge Spannung am Pin."
  - "Tastverhältnis und Frequenz miteinander zu verwechseln."
  - "Eine gedimmte LED als Beweis für eine „halbe digitale Spannung“ zu lesen."
keyTakeaways:
  - "PWM schaltet digital, wirkt aber im zeitlichen Mittel analog."
  - "Das Tastverhältnis beschreibt den High-Anteil einer Periode."
  - "Ob aus PWM eine glatte Spannung wird, hängt von Last, Trägheit oder Filterung ab."
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
  - pwm
  - timer
  - duty-cycle
  - led
level: mittel
draft: false
---


## Grundidee

PWM bedeutet Pulsweitenmodulation. Der Mikrocontroller gibt dabei nicht „ein bisschen Spannung“ aus. Er schaltet einen digitalen Ausgang schnell zwischen Low und High um. Die Wirkung entsteht dadurch, wie lange der Ausgang innerhalb einer Periode eingeschaltet bleibt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine LED wirkt halb hell, obwohl der Pin nie halb an ist</h3>
  <p>Bei 50 % Tastverhältnis ist der Ausgang in jeder Periode ungefähr zur Hälfte high und zur Hälfte low. Die LED und unser Auge mitteln diese schnellen Wechsel.</p>
</div>

<div class="visual-grid">
  <div class="visual-item"><strong>Pegel</strong><span>Der Pin ist zu jedem Zeitpunkt digital: Low oder High.</span></div>
  <div class="visual-item"><strong>Tastverhältnis</strong><span>Es beschreibt, welcher Anteil der Periode high ist.</span></div>
  <div class="visual-item"><strong>Frequenz</strong><span>Sie beschreibt, wie oft sich die Periode pro Sekunde wiederholt.</span></div>
</div>

<div class="figure-card">
  <p class="card-kicker">Zeitbild</p>
  <h3>Die Breite des High-Anteils verändert die Wirkung</h3>
  <pre><code>25 %:  HIGH ____ LOW ____________
50 %:  HIGH ________ LOW ________
75 %:  HIGH ____________ LOW ____</code></pre>
</div>

## Nicht automatisch analog

Ein Multimeter kann bei PWM einen mittleren Wert anzeigen. Trotzdem ist der Pin ohne Filter weiterhin ein Rechtecksignal. Die Last oder ein Filter entscheidet, ob daraus eine geglättete Wirkung wird.

<div class="compare-card">
  <p class="card-kicker">Trennkante</p>
  <h3>Digitale Ausgabe und analoge Wirkung</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Am Pin</strong><span>Low oder High, kein dauerhafter Zwischenpegel.</span></div>
    <div class="compare-item"><strong>An der LED</strong><span>Die Helligkeit folgt eher der mittleren Energie.</span></div>
    <div class="compare-item"><strong>Nach Filter</strong><span>Das Rechteck kann zu einer glatteren Spannung werden.</span></div>
  </div>
</div>

<div class="note-panel"><p><strong>Merke:</strong> PWM ist digitales schnelles Schalten mit analog wirkender Zeitmittelung. Das Tastverhältnis verändert die Wirkung, nicht den digitalen Grundcharakter des Pins.</p></div>
