---
title: "ATmega – externe Interrupts, Flanken und Prellen verstehen"
description: "Verstehe, warum ein externer Interrupt nicht einfach „ein Tastendruck“ ist, sondern von Pegel, Flanke und Entprellstrategie abhängt."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "externe-interrupts-flanken-und-prellen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Mikrocontroller und ATmega"]
draft: false
---
## Grundidee

Ein externer Interrupt reagiert nicht auf „ich habe einmal gedrückt“, sondern auf elektrische Bedingungen am Pin. Bei Tastern ist das wichtig, weil ein mechanischer Kontakt beim Schließen und Öffnen prellen kann.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Tastendruck erhöht den Zähler plötzlich um drei</h3>
  <p>Der Mensch drückt nur einmal. Elektrisch entstehen aber mehrere schnelle Pegelwechsel. Wenn der Interrupt auf eine Flanke reagiert, können mehrere Flanken auch mehrere ISR-Aufrufe bedeuten.</p>
</div>

## Drei Dinge, die du zuerst trennen solltest

<div class="visual-grid">
  <div class="visual-item">
    <strong>Pegel</strong>
    <span>Der Eingang ist gerade High oder Low.</span>
  </div>
  <div class="visual-item">
    <strong>Flanke</strong>
    <span>Das Signal wechselt von Low nach High oder von High nach Low.</span>
  </div>
  <div class="visual-item">
    <strong>Prellen</strong>
    <span>Ein mechanischer Kontakt erzeugt kurz mehrere schnelle Wechsel statt einer idealen Kante.</span>
  </div>
</div>

## Mini-Demo: Menschliches Ereignis gegen elektrisches Signal

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Ein Tastendruck kann viele Flanken enthalten</h3>
  <pre><code>ideal:     ____|‾‾‾‾‾
real:      __|_|‾|_|‾‾
Interrupt:    ^ ^ ^</code></pre>
  <p>Für die ISR zählen die Flanken, nicht die Absicht der Person. Deshalb muss die Entprellung eine elektrische Signalspur beruhigen.</p>
</div>

## Typischer Denkfehler

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>ISR ist nicht der Ort für lange Pausen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unruhige Lesart</strong>
      <span>„Ich warte in der ISR einfach 50 ms, dann ist der Taster entprellt.“</span>
    </div>
    <div class="compare-item">
      <strong>Ruhige Lesart</strong>
      <span>„Die ISR markiert das Ereignis kurz; die Entprellentscheidung passiert zeitlich kontrolliert außerhalb.“</span>
    </div>
  </div>
</div>

## Praxisraster

Bei Tasterinterrupts ist die beste Lösung oft eine Kombination: Interrupt setzt eine Markierung, Hauptprogramm prüft nach einer Sperrzeit oder Zustandslogik.

<div class="step-grid">
  <div class="step-item">
    <strong>1. Beobachtung sichern</strong>
    <span>Welche Flanke oder welcher Pegel löst aus?</span>
  </div>
  <div class="step-item">
    <strong>2. Ursache eingrenzen</strong>
    <span>Ist das Eingangssignal mechanisch oder elektrisch sauber?</span>
  </div>
  <div class="step-item">
    <strong>3. Lösung begründen</strong>
    <span>Halte die ISR kurz und speichere nur Ereignis oder Zeitmarke.</span>
  </div>
  <div class="step-item">
    <strong>4. Nebenwirkungen prüfen</strong>
    <span>Prüfe im Hauptablauf, ob das Ereignis nach Entprellzeit noch gültig ist.</span>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite vertieft externe Interrupts und Prellen. Die allgemeine Regel „ISR kurz halten“ steht auf der ISR-Seite; blockierende Delays werden auf der Softtimer-Seite vermieden.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Interrupt ist ein elektrischer Auslöser. Ein Tastendruck wird erst durch Entprellung und Zustandslogik zu einem sauberen Ereignis.</p>
</div>
