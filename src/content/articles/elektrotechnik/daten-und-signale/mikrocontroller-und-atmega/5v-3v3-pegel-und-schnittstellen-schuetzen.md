---
title: "Mikrocontroller – 5 V, 3,3 V und Pegel sauber verbinden"
description: "Verstehe, warum unterschiedliche Logikpegel bei Mikrocontroller-Schnittstellen bewusst geprüft und nicht einfach zusammengesteckt werden sollten."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - 5v-3v3-pegel-und-schnittstellen-schuetzen
learningGoals:
  - "Du erklärst, warum 5-V- und 3,3-V-Logik nicht automatisch kompatibel sind."
  - "Du unterscheidest Eingangstoleranz, High-Schwelle und Versorgungsspannung."
  - "Du beschreibst typische sichere Wege wie Spannungsteiler, Pegelwandler oder passende Pull-ups."
practiceIdeas:
  - "Prüfe für eine UART-Verbindung jede Richtung getrennt."
  - "Vergleiche Push-Pull-Ausgänge mit Open-Drain-Bussen wie I²C."
  - "Markiere in einer Skizze, welcher Pin senden und welcher empfangen muss."
commonMistakes:
  - "Nur zu prüfen, ob Stecker mechanisch passen."
  - "Zu denken, 3,3 V sei immer sicher für jeden 5-V-Eingang oder umgekehrt."
  - "Bei UART nur eine Richtung zu betrachten."
keyTakeaways:
  - "Pegelkompatibilität ist eine Datenblattfrage, keine Gefühlssache."
  - "Ein 5-V-Ausgang kann einen 3,3-V-Eingang beschädigen, wenn dieser nicht tolerant ist."
  - "Jede Signalleitung braucht eine getrennte Betrachtung von Sender, Empfänger und Pegel."
recognizeSignals:
  - "Es geht um Module mit 3,3 V und Controller mit 5 V."
  - "UART, SPI oder einzelne GPIO-Leitungen werden zwischen Boards verbunden."
  - "Eine Aufgabe fragt nach Level Shifter, Spannungsteiler oder 5-V-Toleranz."
selfCheckPoints:
  - "Kann ich Sende- und Empfangsrichtung getrennt prüfen?"
  - "Kann ich erklären, warum Versorgungsspannung und Signalpegel zusammenhängen?"
  - "Kann ich mindestens eine sichere Anpassungsmethode nennen?"
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - pegel
  - 3v3
  - 5v
  - schnittstellen
  - schutz
level: mittel
draft: false
---

## Grundidee

Viele Mikrocontroller-Schaltungen verbinden Module mit unterschiedlichen Versorgungsspannungen. Mechanisch passen Jumperkabel schnell zusammen. Elektrisch ist aber entscheidend, ob der Ausgangspegel des einen Bausteins zum Eingang des anderen passt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein 5-V-ATmega spricht mit einem 3,3-V-Funkmodul</h3>
  <p>Die UART-Leitung vom ATmega zum Funkmodul kann problematisch sein, weil ein 5-V-High am Eingang des 3,3-V-Moduls zu hoch sein kann. Die Gegenrichtung kann dagegen funktionieren oder auch knapp sein – das hängt von den Eingangsschwellen ab.</p>
</div>

<div class="figure-card">
  <p class="card-kicker">Visuelle Orientierung</p>
  <h3>Jede Richtung einzeln prüfen</h3>
  <img src="/schlaufuchs-platform/illustrations/pegel-und-schnittstellen.svg" alt="Diagramm zu 5-Volt- und 3,3-Volt-Schnittstellen mit Richtungspfeilen und Pegelprüfung" style="width:100%; max-width:48rem; border-radius:18px; border:1px solid var(--border); background:#f8fafc;" />
  <p>Die Grafik zeigt die wichtigste UX-Idee für Lernende: Nicht „UART passt“, sondern TX→RX und RX←TX getrennt bewerten.</p>
</div>

## Drei Dinge, die du zuerst trennen solltest

<div class="visual-grid">
  <div class="visual-item">
    <strong>Sender</strong>
    <span>Welche Spannung liefert der Ausgang im High-Zustand?</span>
  </div>
  <div class="visual-item">
    <strong>Empfänger</strong>
    <span>Welche maximale Eingangsspannung und welche High-Schwelle gelten?</span>
  </div>
  <div class="visual-item">
    <strong>Anpassung</strong>
    <span>Braucht die Leitung einen Spannungsteiler, Pegelwandler oder passende Pull-ups?</span>
  </div>
</div>

## Mini-Demo: UART in zwei Richtungen lesen

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Eine Schnittstelle besteht aus mehreren elektrischen Aussagen</h3>
  <pre><code>ATmega TX 5 V  → Modul RX 3,3 V  → kritisch ohne Anpassung
Modul TX 3,3 V → ATmega RX 5 V   → Datenblatt prüfen
GND gemeinsam  → Bezugspunkt nötig</code></pre>
  <p>Die gemeinsame Masse ist wichtig, löst aber keine Pegelübersetzung. Sie sorgt nur dafür, dass beide Seiten denselben Bezugspunkt für Signale haben.</p>
</div>

## Typischer Denkfehler

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Schnittstelle ist nicht gleich Sicherheit</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unruhige Lesart</strong>
      <span>„UART ist UART, also kann ich TX und RX einfach verbinden.“</span>
    </div>
    <div class="compare-item">
      <strong>Ruhige Lesart</strong>
      <span>„Pro Leitung prüfe ich Pegel, Richtung, Eingangstoleranz und Bezug zur Masse.“</span>
    </div>
  </div>
</div>

## Praxisraster

Bei Pegelfragen hilft eine kleine Tabelle. Jede Zeile ist eine Signalleitung; jede Spalte beschreibt Sender, Empfänger, Pegel und Schutzmaßnahme.

<div class="step-grid">
  <div class="step-item">
    <strong>1. Beobachtung sichern</strong>
    <span>Welche Leitung verursacht das Risiko und in welche Richtung fließt das Signal?</span>
  </div>
  <div class="step-item">
    <strong>2. Ursache eingrenzen</strong>
    <span>Lies High-Pegel, maximale Eingangsspannung und 5-V-Toleranz getrennt.</span>
  </div>
  <div class="step-item">
    <strong>3. Lösung begründen</strong>
    <span>Wähle eine Anpassung, die zur Schnittstelle passt.</span>
  </div>
  <div class="step-item">
    <strong>4. Nebenwirkungen prüfen</strong>
    <span>Prüfe, ob Pull-ups auf die richtige Spannung gehen und kein Pin überlastet wird.</span>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite behandelt Pegelkompatibilität. Sie ersetzt keine komplette UART-, SPI- oder I²C-Seite. Dort geht es zusätzlich um Protokoll, Timing und Busregeln.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Signal ist erst dann „kompatibel“, wenn Pegel, Richtung, Eingangstoleranz und Massebezug zusammenpassen.</p>
</div>
