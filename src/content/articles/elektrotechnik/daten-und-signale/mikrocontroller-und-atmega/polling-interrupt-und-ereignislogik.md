---
title: "Mikrocontroller – Polling, Interrupt und Ereignislogik unterscheiden"
description: "Verstehe, wann regelmäßiges Abfragen genügt und wann ein Interrupt sinnvoll ist, ohne jede Reaktion sofort zur ISR zu machen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "polling-interrupt-und-ereignislogik"
learningGoals:
  - "Du erklärst die Grundidee des Themas fachlich sauber."
  - "Du trennst elektrische Ebene, Codeebene und Diagnoseebene."
  - "Du begründest eine passende Gegenprobe."
practiceIdeas:
  - "Skizziere den relevanten Strom-, Signal- oder Ablaufpfad."
  - "Formuliere zuerst das beobachtbare Fehlerbild."
  - "Prüfe jeweils nur eine Vermutung auf einmal."
commonMistakes:
  - "Mehrere Ursachen gleichzeitig zu ändern."
  - "Nur den Code zu prüfen und die elektrische Ebene zu vergessen."
  - "Fachbegriffe zu verwenden, ohne den Zustand zu erklären."
keyTakeaways:
  - "Der sichtbare Effekt ist nicht automatisch die Ursache."
  - "Saubere Diagnose trennt Zustand, Ursache und Gegenprobe."
  - "Gute Schaltungen werden mit sicheren Standardzuständen geplant."
recognizeSignals:
  - "Ein Aufbau funktioniert nur manchmal."
  - "Eine Aufgabe verlangt Begründung statt nur Begriff."
  - "Signal, Strompfad oder Startzustand sind unklar."
selfCheckPoints:
  - "Kann ich den Ausgangszustand benennen?"
  - "Kann ich eine konkrete Gegenprobe formulieren?"
  - "Kann ich die Abgrenzung zu Nachbarthemen erklären?"
level: "mittel"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "atmega"
  - "polling"
  - "interrupt"
  - "isr"
  - "ereignis"
  - "softwarelogik"
draft: false
---
Verstehe, wann regelmäßiges Abfragen genügt und wann ein Interrupt sinnvoll ist, ohne jede Reaktion sofort zur ISR zu machen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Taster pollen, Timer melden lassen</h3>
  <p>Ein langsam gedrückter Taster kann oft in der Hauptschleife abgefragt werden. Ein regelmäßiger Timer-Tick eignet sich dagegen gut als Interrupt, der nur ein Flag setzt.</p>
</div>

## Die drei Fragen der Seite

<div class="visual-grid">
  <div class="visual-item"><strong>Polling</strong><span>die Software fragt regelmäßig nach.</span></div>
  <div class="visual-item"><strong>Interrupt</strong><span>die Hardware meldet ein Ereignis sofort.</span></div>
  <div class="visual-item"><strong>Ereignislogik</strong><span>entscheidet, was danach passieren soll.</span></div>
</div>

## Mini-Demo: ruhig statt hektisch lesen

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Einmal als Ablauf lesen</h3>

```text
ISR:      Flag setzen, Zeit merken, Puffer füllen
Loop:     Flag auswerten, Anzeige ändern, Protokoll schreiben
Verboten: lange Wartezeiten in der ISR
```

  <p>Die kleine Darstellung zwingt dazu, Ursache und Wirkung getrennt zu halten.</p>
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Einfachheit gegen Reaktionssicherheit abwägen</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Polling</strong><span>gut für langsame oder regelmäßig prüfbare Zustände.</span></div>
    <div class="compare-item"><strong>Interrupt</strong><span>gut für kurze, zeitkritische oder asynchrone Ereignisse.</span></div>
  </div>
</div>

## Prüfraster

<div class="step-grid">
  <div class="step-item"><strong>1. Ereignis beschreiben</strong><span>Was passiert genau und wie lange ist es sichtbar?</span></div>
  <div class="step-item"><strong>2. Zeitkritik prüfen</strong><span>Darf das Ereignis einige Millisekunden warten?</span></div>
  <div class="step-item"><strong>3. Hauptschleife bewerten</strong><span>Blockiert die Hauptschleife oder läuft sie schnell genug?</span></div>
  <div class="step-item"><strong>4. ISR klein halten</strong><span>Im Interrupt nur das Nötige tun.</span></div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite ist bewusst als eigener Baustein formuliert, damit sie Nachbarseiten ergänzt und nicht wiederholt.

<div class="note-panel">
  <p><strong>Merke:</strong> Erst der sauber benannte Zustand macht die technische Lösung begründbar.</p>
</div>
