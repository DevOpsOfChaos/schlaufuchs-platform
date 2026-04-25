---
title: "Mikrocontroller – Stromaufnahme messen und Schlafmodus bewerten"
description: "Verstehe, warum ein Schlafmodus nur dann hilft, wenn Messaufbau, Peripherie und Wachzeiten zusammen betrachtet werden."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "stromaufnahme-messen-und-schlafmodus-bewerten"
learningGoals:
  - "Du unterscheidest aktiven Strom, Schlafstrom und durchschnittliche Stromaufnahme."
  - "Du erklärst, warum angeschlossene Module den Spareffekt überdecken können."
  - "Du bewertest Schlafmodus über Messung und Tastverhältnis der Aktivzeit."
practiceIdeas:
  - "Vergleiche dauerhaft aktiven Betrieb mit kurzen Wachphasen."
  - "Prüfe, welche Verbraucher auch im Schlaf weiter Strom ziehen."
  - "Formuliere einen Messplan mit Multimeter oder Messgerät."
commonMistakes:
  - "Nur den Mikrocontroller-Schlafmodus zu betrachten und externe Module zu vergessen."
  - "Stromaufnahme ohne Messbereich und Messstelle zu vergleichen."
  - "Kurze hohe Wachströme und lange Schlafzeiten nicht als Mittelwert zu denken."
keyTakeaways:
  - "Energiesparen ist eine Systemfrage, nicht nur ein einzelner Befehl."
  - "Der Durchschnitt hängt von Wachzeit, Schlafzeit und allen Verbrauchern ab."
  - "Eine Messung muss an der richtigen Stelle im Strompfad erfolgen."
recognizeSignals:
  - "Batteriebetrieb, Sleep-Mode, Sensorversorgung oder lange Laufzeit sind Thema."
  - "Ein Gerät schläft, verbraucht aber trotzdem zu viel."
  - "Eine Aufgabe fragt nach Messung statt nur Codeänderung."
selfCheckPoints:
  - "Kann ich aktive und schlafende Phasen getrennt beschreiben?"
  - "Kann ich externe Verbraucher in die Bilanz aufnehmen?"
  - "Kann ich sagen, wo ich den Strom messen würde?"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "stromaufnahme"
  - "sleep-mode"
  - "energie"
  - "messung"
level: "mittel"
draft: false
---
## Grundidee

Ein Sleep-Befehl macht noch kein sparsames Gerät. Entscheidend ist, wie lange das System wach ist, welche Peripherie weiterläuft und wo die Stromaufnahme tatsächlich gemessen wird.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Der Controller schläft, das Funkmodul aber nicht</h3>
  <p>Wenn der ATmega im Schlaf nur wenig Strom braucht, ein Sensor- oder Funkmodul aber weiter aktiv bleibt, sieht die Gesamtbilanz trotzdem schlecht aus.</p>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Die Aussage hinter dem Signal lesen</h3>
  <pre><code>Durchschnitt ≈ aktiver Strom × Wachanteil + Schlafstrom × Schlafanteil
Systemstrom = Controller + Sensoren + Wandler + LEDs + Module</code></pre>
  <p>Die wichtige Frage ist nicht nur, ob ein Codebeispiel kompiliert oder ein Kabel steckt. Entscheidend ist, welche elektrische oder zeitliche Aussage damit verbunden ist.</p>
</div>

## Zwei Ebenen sauber trennen

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Ähnliche Begriffe, andere Bedeutung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Ebene 1</strong>
      <span>Schlafmodus beschreibt den Zustand des Controllers.</span>
    </div>
    <div class="compare-item">
      <strong>Ebene 2</strong>
      <span>Batterielaufzeit hängt vom gesamten Aufbau ab.</span>
    </div>
  </div>
</div>

## Prüfraster

<div class="step-grid">
  <div class="step-item">
    <strong>1. Messstelle festlegen</strong>
    <span>Beginne mit einer beobachtbaren Tatsache statt mit einer schnellen Vermutung.</span>
  </div>
  <div class="step-item">
    <strong>2. Verbraucher auflisten</strong>
    <span>Trenne Namen, Signale, Strompfade und Zustände voneinander.</span>
  </div>
  <div class="step-item">
    <strong>3. Wach-/Schlafzeit messen</strong>
    <span>Nutze Datenblatt, Messung oder Skizze als Gegenprüfung.</span>
  </div>
  <div class="step-item">
    <strong>4. Durchschnitt bewerten</strong>
    <span>Ändere immer nur einen Punkt, damit die Ursache sichtbar bleibt.</span>
  </div>
</div>

## Abgrenzung im Mikrocontroller-Cluster

Diese Seite soll ein konkretes Praxisproblem klären. Sie ersetzt nicht die Nachbarseiten zu ADC-Auflösung, Timerlogik, Schnittstellen oder Fehlersuche. Die Abgrenzung ist bewusst eng, damit ähnliche Themen nicht ineinanderlaufen.

<div class="note-panel">
  <p><strong>Merke:</strong> Gute Mikrocontroller-Fehlersuche beginnt fast immer mit einer sauberen Trennung von Code, Signal, Strompfad, Zeitbasis und realem Bauteilverhalten.</p>
</div>
