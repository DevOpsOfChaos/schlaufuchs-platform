---
title: Mikrocontroller – Taster entprellen ohne blockierende Delays
description: Verstehe, warum Tasterprellen entsteht und wie eine Entprellung mit Zustandslogik statt Warteblock sauberer wird.
subject: elektrotechnik
section: Mikrocontroller und ATmega
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - taster-entprellen-ohne-blockierende-delays
learningGoals:
  - "Du erklärst, warum ein mechanischer Taster beim Schalten mehrere schnelle Pegelwechsel erzeugen kann."
  - "Du unterscheidest einfache Warte-Entprellung von nicht blockierender Entprelllogik."
  - "Du erkennst, warum Entprellung und Programmlaufzeit zusammen gedacht werden müssen."
practiceIdeas:
  - "Skizziere den Unterschied zwischen echtem Tastendruck und mehreren Prellimpulsen."
  - "Beschreibe eine Entprellung zuerst als Zustandsfolge, bevor du Code formulierst."
  - "Vergleiche eine Delay-Lösung mit einer Lösung über Zeitmarken."
commonMistakes:
  - "Jeden Pegelwechsel sofort als neuen Tastendruck zu zählen."
  - "Ein langes Delay einzubauen und damit den restlichen Programmablauf zu blockieren."
  - "Nur den aktuellen Pegel zu lesen, aber keinen stabilen Zustand zu prüfen."
keyTakeaways:
  - "Tasterprellen ist ein mechanischer Effekt, der im digitalen Eingang als mehrere schnelle Wechsel sichtbar wird."
  - "Entprellung fragt nicht nur nach dem Pegel, sondern nach Stabilität über eine kurze Zeit."
  - "Nicht blockierende Entprellung hält das Programm reaktionsfähig."
recognizeSignals:
  - "Es geht um Taster, Mehrfachauslösung, Prellen, Delay oder Softtimer."
  - "Ein Code zählt einen Tastendruck mehrfach, obwohl nur einmal gedrückt wurde."
  - "Eine Aufgabe fragt, warum ein Mikrocontroller während eines Delays schlecht reagiert."
selfCheckPoints:
  - "Kann ich erklären, warum ein Taster mehr als einen Pegelwechsel erzeugen kann?"
  - "Kann ich eine stabile Taste von einem kurzen Prellimpuls unterscheiden?"
  - "Kann ich begründen, warum ein blockierendes Delay didaktisch einfach, aber praktisch begrenzt ist?"
tags:
  - elektrotechnik
  - mikrocontroller
  - taster
  - entprellen
  - softtimer
level: mittel
draft: false
---

## Grundidee

Ein mechanischer Taster schaltet nicht immer ideal von 0 auf 1 oder von 1 auf 0. Beim Drücken oder Loslassen können die Kontakte kurz prellen. Der Mikrocontroller sieht dann mehrere schnelle Pegelwechsel, obwohl der Mensch nur einen einzigen Tastendruck meint.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Tastendruck zählt plötzlich dreimal</h3>
  <p>Wenn der Code jeden Pegelwechsel sofort als Ereignis zählt, kann ein einzelner Tastendruck mehrfach erscheinen. Das Problem liegt dann nicht in der Zählvariable, sondern in der fehlenden Entprellung.</p>
</div>

## Was Entprellung fachlich leistet

Entprellung bedeutet: Der Eingang wird nicht beim ersten Wechsel sofort als gültig behandelt. Stattdessen wartet die Logik kurz ab, ob der neue Zustand stabil bleibt.

<div class="visual-grid">
  <div class="visual-item">
    <strong>Rohsignal</strong>
    <span>Der Eingang kann beim Drücken kurz mehrfach wechseln.</span>
  </div>
  <div class="visual-item">
    <strong>Stabilitätsfenster</strong>
    <span>Ein Zustand wird erst akzeptiert, wenn er kurz stabil bleibt.</span>
  </div>
  <div class="visual-item">
    <strong>Ereignis</strong>
    <span>Der Code zählt nur den bestätigten Wechsel, nicht jedes Prellen.</span>
  </div>
</div>

## Blockierendes Delay ist einfach, aber grob

Eine einfache Entprellung wartet nach einem erkannten Wechsel kurz mit `delay`. Das ist zum Verstehen nützlich, blockiert aber den restlichen Ablauf. Während dieser Wartezeit kann der Mikrocontroller andere Aufgaben nicht sauber erledigen.

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Warten ist nicht dasselbe wie sauber beobachten</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Blockierend</strong>
      <span>Nach einem Wechsel wird das Programm angehalten und wartet.</span>
    </div>
    <div class="compare-item">
      <strong>Nicht blockierend</strong>
      <span>Der Code merkt sich eine Zeitmarke und läuft weiter.</span>
    </div>
  </div>
</div>

## Mini-Demo: Entprellung als Zustandslogik

<div class="figure-card">
  <p class="card-kicker">Ablauf statt Warteblock</p>
  <h3>Die Taste wird erst gültig, wenn der neue Zustand stabil bleibt</h3>
  <pre><code>alter stabiler Zustand: losgelassen
neuer Rohwert: gedrückt
Zeitmarke setzen

wenn Rohwert lange genug gleich bleibt:
    stabiler Zustand wird gedrückt
    Tastendruck-Ereignis auslösen</code></pre>
</div>

## Warum das gut zu Softtimern passt

Nicht blockierende Entprellung arbeitet gut mit Softtimern zusammen. Das Programm prüft regelmäßig, ob genug Zeit vergangen ist. Es hält aber nicht an. Dadurch können LEDs, UART-Ausgaben, Sensoren oder weitere Taster parallel weiterlaufen.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Rohwert lesen</strong>
    <span>Was liegt gerade am Eingang an?</span>
  </div>
  <div class="step-item">
    <strong>2. Änderung erkennen</strong>
    <span>Unterscheidet sich der Rohwert vom zuletzt gesehenen Rohwert?</span>
  </div>
  <div class="step-item">
    <strong>3. Zeitfenster prüfen</strong>
    <span>Bleibt der neue Wert lange genug stabil?</span>
  </div>
  <div class="step-item">
    <strong>4. Ereignis auslösen</strong>
    <span>Erst der bestätigte Wechsel zählt als Tastendruck.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Entprellung ist nicht nur ein kleines Delay. Gute Entprellung trennt Rohsignal, stabilen Zustand und gültiges Ereignis.</p>
</div>
