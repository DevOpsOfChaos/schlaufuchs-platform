---
title: Debugging mit LED, UART und Messgerät stufenweise verstehen
description: Verstehe, warum Fehlersuche bei Mikrocontrollern am ruhigsten wird, wenn Sichtbarkeit in Stufen aufgebaut wird – von der LED über UART bis zur Messung an echten Signalen.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - debugging-mit-led-uart-und-messgeraet-stufenweise-verstehen
learningGoals:
  - Du beschreibst Fehlersuche bei Mikrocontrollern als Sichtbarkeitsproblem statt als bloßes Rätselraten.
  - Du ordnest LED, UART und Messgerät als unterschiedliche Diagnoseebenen ein.
  - Du planst Debugging eher stufenweise als alles gleichzeitig.
practiceIdeas:
  - Überlege bei einem Fehlerfall zuerst, welche Beobachtung überhaupt fehlt.
  - Vergleiche eine reine LED-Diagnose mit einer UART-Ausgabe und einer Messung am Signal.
  - Formuliere einen Debug-Schritt immer so, dass danach eine neue sichtbare Information entsteht.
commonMistakes:
  - Alles gleichzeitig zu ändern und dadurch Ursache und Wirkung zu vermischen.
  - Direkt sehr komplex zu messen, obwohl eine einfache LED-Frage noch ungeklärt ist.
  - Fehlersuche nur im Code zu suchen, ohne Beobachtbarkeit der Hardware zu verbessern.
keyTakeaways:
  - Gutes Debugging baut Sichtbarkeit in Stufen auf.
  - LED, UART und Messgerät beantworten unterschiedliche Arten von Fragen.
  - "Die ruhigste Fehlersuche fragt immer: Welche zusätzliche Beobachtung brauche ich als Nächstes?"
recognizeSignals:
  - Es geht um Inbetriebnahme, Fehlersuche, unerwartete Zustände oder schwer sichtbare Abläufe.
  - Du sollst erklären, wie man Unsichtbares Schritt für Schritt beobachtbar macht.
  - In Aufgaben ist die Reihenfolge der Diagnose wichtiger als ein einzelnes Werkzeug.
selfCheckPoints:
  - Kann ich LED, UART und Messgerät als verschiedene Diagnoseebenen erklären?
  - Kann ich begründen, welches Werkzeug für welche Frage ruhiger ist?
  - Kann ich einen Debug-Ablauf in sinnvolle Stufen gliedern?
tags:
  - elektrotechnik
  - mikrocontroller
  - debugging
  - uart
  - oszilloskop
level: mittel
draft: false
---

## Grundidee

Mikrocontroller-Fehlersuche ist oft kein reines "Codeproblem", sondern ein **Sichtbarkeitsproblem**. Das System tut etwas – aber du siehst noch nicht ruhig genug, **was**, **wann** und **wo** es passiert. Darum wird Debugging am besten in Stufen aufgebaut.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Der Controller scheint einfach "nichts zu tun"</h3>
  <p>Eine LED bleibt dunkel, die serielle Ausgabe zeigt nichts und am Sensorwert ändert sich ebenfalls nichts Sichtbares. Die ruhige Frage lautet jetzt nicht "Was ist kaputt?", sondern: Welche Beobachtung kann ich als Nächstes so einfach herstellen, dass der innere Zustand des Systems sichtbar wird?</p>
</div>

## Drei Diagnoseebenen

<div class="visual-grid">
  <div class="visual-item">
    <strong>LED</strong>
    <span>Sehr einfache Sichtbarkeit für "Lebt das System?" oder "Passiert dieser Codepfad überhaupt?"</span>
  </div>
  <div class="visual-item">
    <strong>UART</strong>
    <span>Gut für Zustände, Zahlenwerte und textliche Ablaufmarken.</span>
  </div>
  <div class="visual-item">
    <strong>Messgerät</strong>
    <span>Gut für Pegel, Zeitverhalten, Takt, PWM oder echte Signale an Pins und Leitungen.</span>
  </div>
</div>

## Die Leitfrage pro Stufe

<div class="compare-card">
  <p class="card-kicker">Diagnose-Raster</p>
  <h3>Welches Werkzeug beantwortet welche Frage?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>LED</strong>
      <span>Erreicht das Programm diesen Zustand überhaupt?</span>
    </div>
    <div class="compare-item">
      <strong>UART</strong>
      <span>Welcher Wert oder welcher Ablaufzustand liegt intern vor?</span>
    </div>
    <div class="compare-item">
      <strong>Messgerät</strong>
      <span>Wie sieht das reale elektrische Signal zeitlich und pegelmäßig tatsächlich aus?</span>
    </div>
  </div>
</div>

## Warum die Reihenfolge wichtig ist

Wer sofort mit der komplexesten Messung startet, ohne die einfachen Fragen geklärt zu haben, macht sich das Debugging oft unnötig schwer. Ruhiger ist meist:

1. Lebt das System?
2. Erreicht es den erwarteten Codepfad?
3. Welche internen Werte liegen vor?
4. Wie sieht das reale Signal außen aus?

## Mini-Demo: Sichtbarkeit schrittweise erhöhen

<div class="signal-flow">
  <div class="flow-node"><strong>LED blinkt kurz</strong><span>Codepfad oder ISR erreicht?</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>UART meldet Wert</strong><span>interner Zustand wird lesbar</span></div>
  <div class="flow-arrow">→</div>
  <div class="flow-node"><strong>Messgerät prüft Signal</strong><span>elektrische Realität sichtbar</span></div>
</div>

## Typische Fehlersuche, aber ruhiger gelesen

<div class="comparison-grid">
  <section>
    <p class="card-kicker">Unruhig</p>
    <h3>Alles gleichzeitig ändern</h3>
    <p>Code umbauen, Verkabelung ändern, Register drehen und parallel messen – danach ist kaum noch klar, welche Änderung was bewirkt hat.</p>
  </section>
  <section>
    <p class="card-kicker">Ruhig</p>
    <h3>Beobachtbarkeit stufenweise erhöhen</h3>
    <p>Jeder Debug-Schritt erzeugt genau eine neue Beobachtung. Dadurch wird die Ursache systematischer eingekreist.</p>
  </section>
</div>

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Beobachtungslücke benennen</strong>
    <span>Was weißt du aktuell noch nicht?</span>
  </div>
  <div class="step-item">
    <strong>2. Einfachstes Werkzeug wählen</strong>
    <span>LED vor UART, UART vor komplexer Messung – wenn die Frage damit schon beantwortet wird.</span>
  </div>
  <div class="step-item">
    <strong>3. Nur eine neue Sichtbarkeit erzeugen</strong>
    <span>Ändere pro Schritt möglichst nur so viel, dass eine zusätzliche Beobachtung entsteht.</span>
  </div>
  <div class="step-item">
    <strong>4. Dann nachschärfen</strong>
    <span>Wenn die grobe Stufe geklärt ist, wird das nächste Werkzeug ruhiger und zielgerichteter.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Debugging ist bei Mikrocontrollern oft die Kunst, Unsichtbares in sinnvoller Reihenfolge sichtbar zu machen. Nicht das stärkste Werkzeug zuerst ist am ruhigsten, sondern das passendste.</p>
</div>
