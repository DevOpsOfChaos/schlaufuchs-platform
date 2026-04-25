---
title: "ATmega – UART-Baudrate und Zeichenrahmen verstehen"
description: "Verstehe, warum UART nicht nur aus Datenbits besteht und warum Sender und Empfänger dieselbe Baudrate brauchen."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - uart-baudrate-und-zeichenrahmen
learningGoals:
  - "Du erklärst die Baudrate als zeitliche Vereinbarung zwischen Sender und Empfänger."
  - "Du beschreibst Startbit, Datenbits und Stoppbit als einfachen Zeichenrahmen."
  - "Du erkennst typische UART-Fehlerbilder wie falsche Zeichen."
practiceIdeas:
  - "Lies zuerst den praktischen Fehlerfall und danach die technische Regel."
  - "Skizziere den Ablauf als kleines Zeit-, Signal- oder Entscheidungsbild."
  - "Erkläre den Unterschied einmal ohne Code und danach mit den passenden Fachbegriffen."
commonMistakes:
  - "Baudrate mit Dateninhalt zu verwechseln."
  - "TX und RX zu betrachten, aber GND als Bezugsebene zu vergessen."
  - "Falsche Zeichen sofort als Programmfehler zu deuten, ohne die Übertragungseinstellungen zu prüfen."
keyTakeaways:
  - "UART braucht gemeinsame Zeit, aber keinen gemeinsamen Taktpin."
  - "Ein Zeichen wird durch Startbit und Stoppbit eingerahmt."
  - "Bei Baudratenfehlern liest der Empfänger an den falschen Zeitpunkten."
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
  - uart
  - serielle-schnittstelle
  - baudrate
  - debugging
level: einfach
draft: false
---


## Grundidee

UART ist eine serielle Verbindung: Bits werden nacheinander übertragen. Damit der Empfänger weiß, wann er welches Bit lesen soll, müssen Sender und Empfänger dieselbe zeitliche Vereinbarung verwenden. Diese Vereinbarung steckt vor allem in der Baudrate.

<div class="example-card"><p class="card-kicker">Leitbeispiel</p><h3>Im Terminal erscheinen nur Sonderzeichen</h3><p>Der Mikrocontroller sendet Text, aber das Terminal zeigt wirre Zeichen. Häufig ist dann nicht der Text falsch, sondern Baudrate oder Zeichenrahmen passen nicht.</p></div>

<div class="visual-grid">
  <div class="visual-item"><strong>TX</strong><span>Sendet die seriellen Bits.</span></div>
  <div class="visual-item"><strong>RX</strong><span>Empfängt die seriellen Bits.</span></div>
  <div class="visual-item"><strong>GND</strong><span>Gibt beiden Geräten dieselbe elektrische Bezugsebene.</span></div>
  <div class="visual-item"><strong>Baudrate</strong><span>Legt fest, wie schnell die Bits nacheinander kommen.</span></div>
</div>

<div class="figure-card"><p class="card-kicker">Rahmen statt nackte Daten</p><h3>Ein UART-Zeichen wird eingerahmt</h3><pre><code>Ruhepegel  Start  Datenbits              Stopp
    1        0    b0 b1 b2 b3 b4 b5 b6 b7   1</code></pre></div>

## Typische Verbindung

<pre><code>ATmega TX  -&gt;  USB-UART RX
ATmega RX  &lt;-  USB-UART TX
ATmega GND --  USB-UART GND</code></pre>

<div class="note-panel"><p><strong>Merke:</strong> UART ist einfach, aber nicht formlos. Ohne passende Zeitvereinbarung und gemeinsamen Bezug liest der Empfänger nicht das, was der Sender meint.</p></div>
