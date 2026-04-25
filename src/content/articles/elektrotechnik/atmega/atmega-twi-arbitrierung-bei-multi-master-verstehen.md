---
title: ATmega – TWI Arbitrierung bei Multi-Master verstehen
description: Verstehe die Grundidee der Arbitrierung auf einem I²C beziehungsweise TWI-Bus, wenn mehr als ein Master gleichzeitig senden möchte.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-arbitrierung-bei-multi-master-verstehen
learningGoals:
  - Du erklärst die Grundidee von Multi-Master-Arbitrierung am TWI-Bus.
  - Du beschreibst, warum offene Leitungen eine konfliktarme Entscheidung erlauben.
  - Du liest Buskollisionen eher als geregelte Prioritätsfrage statt als reinen Kurzschlussfehler.
practiceIdeas:
  - Vergleiche einen Single-Master-Bus mit einem Multi-Master-Fall.
  - Lies ein Beispiel mit zwei Adressen danach, an welcher Stelle die Arbitrierung kippt.
  - Prüfe, warum das Verlieren der Arbitrierung nicht automatisch einen Hardwaredefekt bedeutet.
commonMistakes:
  - Zu denken, zwei Master dürften niemals gleichzeitig starten.
  - Eine verlorene Arbitrierung sofort als kaputte Kommunikation zu deuten.
  - Nicht zu sehen, dass die Buslogik selbst die Entscheidung trägt.
keyTakeaways:
  - Multi-Master erfordert eine geregelte Entscheidung auf dem Bus.
  - Die Arbitrierung endet dort, wo ein Master etwas anderes senden will als der Bus tatsächlich zeigt.
  - Arbitrierung ist eine Busregel und nicht bloß ein Zufallsfehler.
recognizeSignals:
  - Es geht um Multi-Master, Arbitrierung, I²C-Kollisionen oder gleiche Startzeitpunkte.
  - Du sollst erklären, warum ein Master plötzlich zurücktritt.
  - In Aufgaben ist der Unterschied zwischen gesendetem und beobachtetem Pegel entscheidend.
selfCheckPoints:
  - Kann ich erklären, warum Arbitrierung auf offenen Busleitungen funktioniert?
  - Kann ich beschreiben, wann ein Master erkennt, dass er verloren hat?
  - Kann ich Multi-Master von einem einfachen Verdrahtungsfehler trennen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - twi
  - i2c
level: fortgeschritten
draft: false
---

## Grundidee

Im einfachsten Fall gibt es an einem TWI beziehungsweise I²C-Bus genau einen Master. Dann startet immer nur eine Stelle aktiv eine Kommunikation. In einem **Multi-Master-System** können dagegen mehrere Master grundsätzlich busfähig sein. Genau dann braucht der Bus eine geregelte Entscheidung, falls zwei Teilnehmer gleichzeitig senden wollen. Diese Entscheidung heißt **Arbitrierung**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei Master wollen fast gleichzeitig starten</h3>
  <p>Beide Master beginnen mit einer Startbedingung und senden dann ihre Adresse. Solange sie dieselben Pegel ausgeben, bleibt noch alles unauffällig. Erst an der ersten Stelle, an der einer High senden möchte, der Bus aber Low zeigt, erkennt dieser Master: Ich habe die Arbitrierung verloren.</p>
</div>

## Warum die Buslogik das tragen kann

<div class="visual-grid">
  <div class="visual-item">
    <strong>Leitungen sind gemeinsam</strong>
    <span>Alle Teilnehmer sehen denselben tatsächlichen Buszustand.</span>
  </div>
  <div class="visual-item">
    <strong>Low setzt sich durch</strong>
    <span>Das ist die zentrale Beobachtung für die Entscheidung.</span>
  </div>
  <div class="visual-item">
    <strong>Sender vergleicht mit Bus</strong>
    <span>Ein Master merkt, ob das, was er senden wollte, wirklich auf dem Bus steht.</span>
  </div>
</div>

## Mini-Demo: der Konflikt wird sichtbar

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Arbitrierung kippt erst an der ersten echten Abweichung</h3>
  <pre><code>Master A will senden: 1
Master B will senden: 0
Bus zeigt tatsächlich: 0
→ Master A erkennt: Mein gesendeter Pegel passt nicht zum Bus</code></pre>
  <p>Bis zu dieser Stelle kann beides noch parallel laufen. Erst die erste echte Abweichung entscheidet den Konflikt.</p>
</div>

## Eine ruhige Prüfstrategie

1. Gibt es überhaupt mehr als einen möglichen Master?
2. Starten zwei Zugriffe gleichzeitig oder sehr dicht nacheinander?
3. An welcher Bitstelle weicht das gesendete Signal vom beobachteten Buszustand ab?
4. Tritt der Master danach geordnet zurück?

<div class="note-panel">
  <p><strong>Merke:</strong> Verlorene Arbitrierung heißt nicht automatisch „kaputt“. Oft zeigt sie nur, dass der Bus seine eigene Prioritätsregel gerade korrekt angewendet hat.</p>
</div>
