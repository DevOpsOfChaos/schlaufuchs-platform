---
title: ATmega TWI Start, Stop und ACK verstehen
description: Verstehe, wie ein I²C-Austausch durch Startbedingung, Stopbedingung und Bestätigung logisch gerahmt wird.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-start-stop-und-ack-verstehen
learningGoals:
  - Du erklärst die Rolle von Start- und Stopbedingung auf dem I²C-Bus.
  - Du beschreibst ACK und NACK als Bestätigung der Buskommunikation.
  - Du liest einen I²C-Rahmen eher als Folge von Buszuständen als als bloßen Bytestrom.
practiceIdeas:
  - Ordne Start, Adresse, Datenbyte, ACK und Stop in einem einfachen Busrahmen.
  - Vergleiche einen bestätigten und einen nicht bestätigten Transfer.
  - Beschreibe, wie aus einzelnen Bits ein sinnvoll gerahmter Austausch wird.
commonMistakes:
  - Start und Stop nur als Softwareaufruf statt als Buszustand zu lesen.
  - ACK mit einer vollständigen neuen Nachricht zu verwechseln.
  - Nur auf die Datenbytes zu schauen und den Rahmen zu übersehen.
keyTakeaways:
  - I²C-Kommunikation braucht einen klaren Beginn und ein klares Ende auf dem Bus.
  - ACK und NACK zeigen, ob ein Schritt bestätigt wurde.
  - Ohne den Rahmen aus Start, Takt und Stop ist ein Datenbyte fachlich unvollständig beschrieben.
recognizeSignals:
  - Es geht um Startbedingung, Stopbedingung, ACK/NACK oder Adress-/Datenrahmen.
  - Du sollst erklären, warum ein Transfer bestätigt oder abgebrochen wirkt.
  - In Beispielen ist die Reihenfolge der Busereignisse wichtiger als die nackten Datenwerte.
selfCheckPoints:
  - Kann ich Start, Stop und ACK fachlich sauber unterscheiden?
  - Kann ich erklären, warum ACK nicht bloß „noch ein Bit“ ist?
  - Kann ich einen I²C-Rahmen in logischer Reihenfolge beschreiben?
tags:
  - elektrotechnik
  - atmega
  - i2c
  - twi
  - ack
level: mittel
draft: false
---

## Grundidee

Ein I²C-Transfer besteht nicht nur aus Adresse und Daten. Fachlich ruhiger wird er erst, wenn du auch den **Rahmen** mitliest: Wann beginnt der Austausch, wann wird bestätigt und wann endet er?

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Sensor wird angesprochen</h3>
  <p>Der Master startet die Übertragung, sendet eine Adresse, bekommt eine Bestätigung und überträgt anschließend Daten. Erst durch Start, ACK und Stop wird daraus ein verständlicher Busablauf statt nur eine Reihe von Bits.</p>
</div>

## Die Grundrollen im Ablauf

<div class="visual-grid">
  <div class="visual-item">
    <strong>Start</strong>
    <span>Markiert den Beginn eines Busrahmens.</span>
  </div>
  <div class="visual-item">
    <strong>Adresse/Daten</strong>
    <span>Tragen die eigentliche Nutzinformation.</span>
  </div>
  <div class="visual-item">
    <strong>ACK/NACK</strong>
    <span>Zeigen, ob ein Schritt bestätigt wird oder nicht.</span>
  </div>
  <div class="visual-item">
    <strong>Stop</strong>
    <span>Beendet den aktuellen Austausch sauber.</span>
  </div>
</div>

## Mini-Denkbild: Rahmen statt bloß Bytes

<pre><code>START → Adresse → ACK → Datenbyte → ACK → STOP</code></pre>

Diese Lesart ist oft viel hilfreicher als nur:

<pre><code>Adresse, Daten, fertig</code></pre>

## Warum ACK didaktisch wichtig ist

ACK zeigt, dass der Buspartner den letzten Schritt bestätigt hat. NACK zeigt dagegen: Hier wird nicht bestätigt oder der Austausch endet. Genau daran lässt sich oft ruhiger lesen, warum eine Kommunikation weiterläuft oder abbricht.

## Eine ruhige Prüfstrategie

1. Wo beginnt der Austausch?
2. Welche Adresse oder welches Byte kommt als Nächstes?
3. Wird dieser Schritt bestätigt?
4. Wo endet der Rahmen?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein I²C-Byte ist fachlich erst dann sauber beschrieben, wenn auch Start, ACK/NACK und Stop mitgedacht werden.</p>
</div>
