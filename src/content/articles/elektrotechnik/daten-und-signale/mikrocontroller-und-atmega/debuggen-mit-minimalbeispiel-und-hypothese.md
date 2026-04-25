---
title: "Mikrocontroller – Debuggen mit Minimalbeispiel und Hypothese"
description: "Verstehe, wie du einen unübersichtlichen Mikrocontroller-Fehler auf ein kleines prüfbares Beispiel zurückführst."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath:
  - "daten-und-signale"
  - "mikrocontroller-und-atmega"
  - "debuggen-mit-minimalbeispiel-und-hypothese"
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
  - "debugging"
  - "minimalbeispiel"
  - "fehlersuche"
  - "hypothese"
  - "test"
draft: false
---
Verstehe, wie du einen unübersichtlichen Mikrocontroller-Fehler auf ein kleines prüfbares Beispiel zurückführst.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Nicht „Display kaputt“, sondern „I²C-Adresse wird nicht bestätigt“</h3>
  <p>Eine gute Hypothese ist kleiner als das Problem. Sie sagt nicht nur, dass etwas nicht funktioniert, sondern welcher Teil warum geprüft wird.</p>
</div>

## Die drei Fragen der Seite

<div class="visual-grid">
  <div class="visual-item"><strong>Fehlerbild</strong><span>was ist wirklich beobachtbar?</span></div>
  <div class="visual-item"><strong>Hypothese</strong><span>welche Ursache wird geprüft?</span></div>
  <div class="visual-item"><strong>Minimaltest</strong><span>welcher kleine Test entscheidet darüber?</span></div>
</div>

## Mini-Demo: ruhig statt hektisch lesen

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Einmal als Ablauf lesen</h3>

```text
Beobachtung: Display bleibt dunkel
Hypothese: I²C-Adresse falsch
Minimaltest: I²C-Scanner
Ergebnis: Adresse gefunden oder nicht gefunden
```

  <p>Die kleine Darstellung zwingt dazu, Ursache und Wirkung getrennt zu halten.</p>
</div>

## Typische Verwechslung

<div class="compare-card">
  <p class="card-kicker">Abgrenzung</p>
  <h3>Raten und Debuggen sehen ähnlich aus, sind aber verschieden</h3>
  <div class="compare-grid">
    <div class="compare-item"><strong>Raten</strong><span>ändert vieles und hofft auf Wirkung.</span></div>
    <div class="compare-item"><strong>Debuggen</strong><span>ändert gezielt eine Sache und lernt aus dem Ergebnis.</span></div>
  </div>
</div>

## Prüfraster

<div class="step-grid">
  <div class="step-item"><strong>1. Beobachtung notieren</strong><span>Was passiert tatsächlich und wann?</span></div>
  <div class="step-item"><strong>2. Hypothese formulieren</strong><span>Welche konkrete Ursache ist plausibel?</span></div>
  <div class="step-item"><strong>3. Minimaltest bauen</strong><span>Was ist der kleinste Test dafür?</span></div>
  <div class="step-item"><strong>4. Ergebnis auswerten</strong><span>Was ist danach sicherer bekannt als vorher?</span></div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite ist bewusst als eigener Baustein formuliert, damit sie Nachbarseiten ergänzt und nicht wiederholt.

<div class="note-panel">
  <p><strong>Merke:</strong> Erst der sauber benannte Zustand macht die technische Lösung begründbar.</p>
</div>
