---
title: "Mikrocontroller – Watchdog sinnvoll einsetzen"
description: "Verstehe, wie ein Watchdog hängende Programme erkennen kann und warum falsch gesetztes Zurücksetzen den Schutz wieder entwertet."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - watchdog-sinnvoll-einsetzen
learningGoals:
  - "Du erklärst den Watchdog als Überwachungsmechanismus gegen hängen gebliebene Programme."
  - "Du begründest, warum der Watchdog nicht beliebig oft an jeder Codestelle zurückgesetzt werden sollte."
  - "Du unterscheidest Neustart, Fehlerursache und robuste Wiederaufnahme."
practiceIdeas:
  - "Überlege, an welcher Stelle eine Hauptschleife sinnvoll „Lebenszeichen“ gibt."
  - "Vergleiche Watchdog-Reset mit sauberer Fehlerbehandlung."
  - "Plane, wie ein Gerät nach einem Watchdog-Reset sicher wieder startet."
commonMistakes:
  - "Den Watchdog in jeder Funktion blind zurückzusetzen."
  - "Watchdog als Ersatz für sauberen Code zu verwenden."
  - "Nach einem Watchdog-Reset sofort wieder dieselbe gefährliche Aktion zu starten."
keyTakeaways:
  - "Ein Watchdog hilft gegen Hänger, löst aber nicht automatisch die Ursache."
  - "Das Zurücksetzen des Watchdogs muss an einer sinnvollen Stelle im Ablauf passieren."
  - "Nach einem Watchdog-Reset braucht das System einen sicheren Wiederanlauf."
recognizeSignals:
  - "Es geht um eingefrorene Programme, Reset nach Zeitüberschreitung oder robuste Geräte."
  - "Eine Schleife kann hängen bleiben oder eine Kommunikation endlos warten."
  - "Im Code tauchen Watchdog-Enable, Timeout oder regelmäßiges Zurücksetzen auf."
selfCheckPoints:
  - "Kann ich erklären, wann ein Watchdog helfen kann?"
  - "Kann ich sagen, warum zu häufiges Zurücksetzen gefährlich ist?"
  - "Kann ich einen sicheren Neustart nach Watchdog-Reset beschreiben?"
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - watchdog
  - robustheit
  - reset
  - fehlersuche
level: mittel
draft: false
---

## Grundidee

Ein Watchdog ist ein Timer, der fragt: Meldet sich das Programm noch rechtzeitig? Wenn nicht, kann er einen Reset auslösen. Damit ist er ein Sicherheitsnetz gegen Hänger, aber kein Freibrief für unstrukturierte Programmlogik.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Das Gerät hängt im Kommunikationscode fest</h3>
  <p>Eine Sensorabfrage wartet endlos auf eine Antwort. Ohne Watchdog bleibt das Gerät stehen. Mit Watchdog kann es neu starten. Aber wenn der Watchdog direkt in der blockierenden Wartefunktion ständig zurückgesetzt wird, merkt er den Fehler nie.</p>
</div>

## Drei Dinge, die du zuerst trennen solltest

<div class="visual-grid">
  <div class="visual-item">
    <strong>Timeout</strong>
    <span>Der Watchdog erwartet regelmäßig ein glaubwürdiges Lebenszeichen.</span>
  </div>
  <div class="visual-item">
    <strong>Reset</strong>
    <span>Bleibt dieses Lebenszeichen aus, kann der Controller neu starten.</span>
  </div>
  <div class="visual-item">
    <strong>Wiederanlauf</strong>
    <span>Nach dem Reset muss das Gerät in einen sicheren Zustand zurückkehren.</span>
  </div>
</div>

## Mini-Demo: Lebenszeichen an der richtigen Stelle

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Nicht jede Codezeile sollte den Watchdog füttern</h3>
  <pre><code>gut:  Hauptschleife vollständig durchlaufen → Watchdog zurücksetzen
schlecht: in jeder Wartefunktion wdt_reset() aufrufen
Folge: echte Hänger bleiben unsichtbar</code></pre>
  <p>Der Watchdog soll erkennen, ob der Gesamtzyklus noch lebt. Wird er in einem kaputten Teilzyklus ständig zurückgesetzt, verliert er seine Schutzwirkung.</p>
</div>

## Typischer Denkfehler

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Watchdog gegen Fehlerverdeckung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unruhige Lesart</strong>
      <span>„Wenn ich überall den Watchdog zurücksetze, ist das System besonders sicher.“</span>
    </div>
    <div class="compare-item">
      <strong>Ruhige Lesart</strong>
      <span>„Der Watchdog wird nur dort zurückgesetzt, wo ein sinnvoller Programmfortschritt bewiesen ist.“</span>
    </div>
  </div>
</div>

## Praxisraster

Ein Watchdog-Konzept braucht nicht nur einen Timeout, sondern auch eine Antwort auf die Frage: Was gilt als gesunder Ablauf?

<div class="step-grid">
  <div class="step-item">
    <strong>1. Beobachtung sichern</strong>
    <span>Wo kann das Programm hängen bleiben und woran erkenne ich Fortschritt?</span>
  </div>
  <div class="step-item">
    <strong>2. Ursache eingrenzen</strong>
    <span>Setze das Watchdog-Lebenszeichen nur nach einem plausiblen Gesamtzustand.</span>
  </div>
  <div class="step-item">
    <strong>3. Lösung begründen</strong>
    <span>Initialisiere Ausgänge nach Reset sicher und prüfe mögliche Resetursachen.</span>
  </div>
  <div class="step-item">
    <strong>4. Nebenwirkungen prüfen</strong>
    <span>Vermeide Reset-Schleifen, die denselben Fehler sofort wieder auslösen.</span>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite behandelt den Watchdog als Robustheitsbaustein. Details zu Reset und Brown-out gehören auf die Startverhalten-Seite; blockierende Delays und Zustandsmaschinen werden separat erklärt.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Watchdog ist dann stark, wenn sein Zurücksetzen echten Programmfortschritt bedeutet.</p>
</div>
