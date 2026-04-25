---
title: "Mikrocontroller – UART-Debugging mit klarem Log-Format"
description: "Lerne, warum gute UART-Ausgaben nicht möglichst viele Texte senden, sondern Zustände, Ereignisse und Messwerte lesbar strukturieren."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - uart-debug-protokoll-und-log-format
learningGoals:
  - "Du erklärst, warum UART-Debugging ein klares Ausgabeformat braucht."
  - "Du unterscheidest Zustandsmeldung, Ereignismeldung und Messwert."
  - "Du beschreibst, warum zu viele Ausgaben das Zeitverhalten stören können."
practiceIdeas:
  - "Entwirf ein kurzes Log-Format für einen Sensorzyklus."
  - "Vergleiche freie Textausgaben mit strukturierten Schlüssel-Wert-Zeilen."
  - "Markiere, welche Ausgabe für Fehlersuche wirklich nötig ist."
commonMistakes:
  - "Jede Stelle im Code mit langen Texten auszugeben."
  - "Debugausgaben ohne Zeit, Zustand oder eindeutigen Schlüssel zu senden."
  - "Zu vergessen, dass UART-Ausgaben selbst Zeit brauchen."
keyTakeaways:
  - "Gute Logs sind kurz, eindeutig und wiederholbar."
  - "Ein fester Aufbau macht Fehlersuche leichter als spontane Textsätze."
  - "UART-Debugging darf das eigentliche System nicht unnötig ausbremsen."
recognizeSignals:
  - "Es geht um serielle Ausgabe, Debugging, Messwertprotokoll oder Terminalausgabe."
  - "Ein Fehler tritt nur manchmal auf und soll sichtbar gemacht werden."
  - "Im Code stehen viele printf- oder send-Funktionen."
selfCheckPoints:
  - "Kann ich ein Logformat lesen und verbessern?"
  - "Kann ich wichtige von störenden Ausgaben unterscheiden?"
  - "Kann ich erklären, warum Debugging selbst Einfluss auf Timing haben kann?"
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - uart
  - debugging
  - log
  - fehlersuche
level: einfach
draft: false
---

## Grundidee

UART ist ein sehr praktischer Debugkanal. Aber „viel ausgeben“ ist nicht automatisch gute Fehlersuche. Gute Logs zeigen knapp, was passiert ist, in welchem Zustand das System war und welcher Wert relevant ist.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Das Terminal ist voll, aber der Fehler bleibt unklar</h3>
  <p>Ein Programm sendet bei jeder Kleinigkeit lange Meldungen. Nach kurzer Zeit ist das Terminal unübersichtlich. Besser ist ein wiederholbares Format mit Zustand, Ereignis und Wert.</p>
</div>

## Drei Dinge, die du zuerst trennen solltest

<div class="visual-grid">
  <div class="visual-item">
    <strong>Zustand</strong>
    <span>In welchem Ablaufzustand befindet sich das System?</span>
  </div>
  <div class="visual-item">
    <strong>Ereignis</strong>
    <span>Was ist gerade passiert oder erkannt worden?</span>
  </div>
  <div class="visual-item">
    <strong>Wert</strong>
    <span>Welche Zahl oder welcher Pegel hilft wirklich bei der Diagnose?</span>
  </div>
</div>

## Mini-Demo: Logzeilen lesbar machen

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Kurz und gleichförmig schlägt schön formuliert</h3>
  <pre><code>schwach: Sensor wurde jetzt irgendwie gelesen und sieht komisch aus
gut:    state=MEASURE event=adc value=517
gut:    state=SEND event=uart_tx bytes=12</code></pre>
  <p>Ein gleichförmiges Format lässt sich im Terminal schneller vergleichen und später sogar filtern oder auswerten.</p>
</div>

## Typischer Denkfehler

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Debugtext gegen Diagnoseformat</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unruhige Lesart</strong>
      <span>„Ich schreibe einfach überall lange Meldungen hin.“</span>
    </div>
    <div class="compare-item">
      <strong>Ruhige Lesart</strong>
      <span>„Ich entscheide, welche Zustände, Ereignisse und Werte für den Fehler wirklich wichtig sind.“</span>
    </div>
  </div>
</div>

## Praxisraster

Ein gutes Logformat ist wie ein Messprotokoll. Es soll wiederholbar, kurz und eindeutig sein.

<div class="step-grid">
  <div class="step-item">
    <strong>1. Beobachtung sichern</strong>
    <span>Welcher Fehler soll sichtbar werden?</span>
  </div>
  <div class="step-item">
    <strong>2. Ursache eingrenzen</strong>
    <span>Welche drei Werte helfen wirklich bei der Eingrenzung?</span>
  </div>
  <div class="step-item">
    <strong>3. Lösung begründen</strong>
    <span>Nutze ein festes Format und kurze Schlüssel.</span>
  </div>
  <div class="step-item">
    <strong>4. Nebenwirkungen prüfen</strong>
    <span>Entferne oder reduziere Debugausgaben wieder, wenn sie Timing stören.</span>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite behandelt UART als Diagnosekanal. Baudrate, Zeichenrahmen und Schnittstellenpegel werden auf eigenen Seiten erklärt.

<div class="note-panel">
  <p><strong>Merke:</strong> Eine gute UART-Ausgabe ist nicht laut, sondern lesbar.</p>
</div>
