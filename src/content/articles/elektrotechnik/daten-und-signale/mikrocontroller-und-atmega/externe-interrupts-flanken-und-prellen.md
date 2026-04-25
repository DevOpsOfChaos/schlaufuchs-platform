---
title: "ATmega – externe Interrupts, Flanken und Prellen verstehen"
description: "Verstehe, warum ein externer Interrupt nicht einfach „ein Tastendruck“ ist, sondern von Pegel, Flanke und Entprellstrategie abhängt."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - externe-interrupts-flanken-und-prellen
learningGoals:
  - "Du erklärst den Unterschied zwischen Pegel, steigender Flanke und fallender Flanke."
  - "Du beschreibst, warum ein prellender Taster mehrere Interrupts auslösen kann."
  - "Du begründest, warum Entprellung meist nicht als lange Warteschleife in die ISR gehört."
practiceIdeas:
  - "Skizziere ein prellendes Tastensignal als mehrere schnelle Flanken."
  - "Vergleiche Interruptauslösung auf Pegel und auf Flanke."
  - "Plane eine Entprellung außerhalb der ISR."
commonMistakes:
  - "Einen Interrupt direkt mit einem einzelnen Ereignis gleichzusetzen."
  - "Tasterprellen zu ignorieren, weil „der Mensch nur einmal gedrückt hat“."
  - "In der ISR lange zu warten, um Prellen zu überdecken."
keyTakeaways:
  - "Externe Interrupts reagieren auf elektrische Signalbedingungen, nicht auf menschliche Absichten."
  - "Prellen kann aus einem Tastendruck mehrere Flanken machen."
  - "Die ISR sollte kurz bleiben und Entprellung eher im Hauptprogramm oder über Zeitmarken steuern."
recognizeSignals:
  - "Es geht um INT0, INT1, Pin Change Interrupt, Flanke oder Tasterprellen."
  - "Ein Tastendruck zählt mehrfach."
  - "Eine Aufgabe fragt, warum die ISR mehrfach ausgelöst wird."
selfCheckPoints:
  - "Kann ich eine fallende von einer steigenden Flanke unterscheiden?"
  - "Kann ich erklären, warum Prellen mehrere Interrupts erzeugt?"
  - "Kann ich eine kurze ISR von einer Entprelllogik trennen?"
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - interrupt
  - taster
  - prellen
  - flanke
  - entprellen
level: mittel
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
