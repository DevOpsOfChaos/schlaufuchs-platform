---
title: "ATmega – ISR kurz halten und volatile verstehen"
description: "Verstehe, warum Interrupt-Service-Routinen knapp bleiben sollten und warum gemeinsam genutzte Variablen volatile brauchen können."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "isr-kurz-halten-und-volatile-verstehen"]
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

Ein Interrupt unterbricht den normalen Ablauf. Die Interrupt-Service-Routine, kurz ISR, läuft also nicht „irgendwann gemütlich“, sondern mitten in einem anderen Programmzustand. Darum sollte sie kurz, eindeutig und vorhersehbar bleiben.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Die ISR setzt nur eine Notiz</h3>
  <p>Statt in der ISR sofort eine lange Ausgabe, Berechnung oder Wartezeit auszuführen, setzt sie häufig nur ein Flag. Die Hauptschleife liest dieses Flag später und erledigt die eigentliche Arbeit.</p>
</div>

## Warum kurze ISR so wichtig sind

<div class="visual-grid">
  <div class="visual-item">
    <strong>Unterbrechung</strong>
    <span>Die ISR stoppt kurz den normalen Programmfluss.</span>
  </div>
  <div class="visual-item">
    <strong>Reaktionsfähigkeit</strong>
    <span>Je kürzer die ISR ist, desto schneller kann das Hauptprogramm weiterlaufen.</span>
  </div>
  <div class="visual-item">
    <strong>Übersicht</strong>
    <span>Kurze ISR sind leichter zu prüfen und verursachen weniger Seiteneffekte.</span>
  </div>
</div>

## Mini-Demo: Flag statt Großprogramm in der ISR

<div class="figure-card">
  <p class="card-kicker">Codebild</p>
  <h3>Die ISR meldet nur das Ereignis</h3>
  <pre><code>volatile uint8_t button_event = 0;

ISR(PCINT0_vect) {
    button_event = 1;
}

int main(void) {
    while (1) {
        if (button_event) {
            button_event = 0;
            // eigentliche Verarbeitung hier
        }
    }
}</code></pre>
</div>

## Was volatile hier leistet

Der Compiler optimiert Code. Wenn eine Variable im sichtbaren Ablauf scheinbar nie verändert wird, könnte er ihren Wert zwischenspeichern. Bei einer Variable, die in einer ISR geändert wird, wäre das gefährlich: Das Hauptprogramm muss wirklich neu lesen können.

`volatile` bedeutet hier sinngemäß: **Diese Variable kann sich auch außerhalb des normalen sichtbaren Ablaufs ändern. Lies sie deshalb nicht zu optimistisch aus einem alten Zwischenstand.**

<div class="compare-card">
  <p class="card-kicker">Begriff sauber lesen</p>
  <h3>volatile ist kein Zauberwort für Nebenläufigkeit</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Was volatile hilft</strong>
      <span>Der Compiler darf den Zugriff nicht so behandeln, als ändere sich der Wert nie von außen.</span>
    </div>
    <div class="compare-item">
      <strong>Was volatile nicht automatisch löst</strong>
      <span>Mehrbyte-Zugriffe, Race Conditions oder komplette Synchronisationsprobleme verschwinden dadurch nicht.</span>
    </div>
  </div>
</div>

## Typische Faustregel

Eine gute ISR beantwortet nur diese Frage: **Welches Ereignis ist passiert, das ich mir merken muss?**

Die größere Arbeit gehört meistens in die Hauptschleife:

- Anzeige aktualisieren,
- UART-Text ausgeben,
- längere Berechnungen durchführen,
- Zustandsmaschine weiterführen.

## Eine ruhige Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Ereignis benennen</strong>
    <span>Was meldet der Interrupt wirklich?</span>
  </div>
  <div class="step-item">
    <strong>2. ISR klein halten</strong>
    <span>Kann die ISR nur ein Flag setzen oder einen kurzen Zähler erhöhen?</span>
  </div>
  <div class="step-item">
    <strong>3. Gemeinsame Daten prüfen</strong>
    <span>Welche Variablen werden in ISR und Hauptprogramm benutzt?</span>
  </div>
  <div class="step-item">
    <strong>4. Verarbeitung verschieben</strong>
    <span>Was kann sicher in die Hauptschleife ausgelagert werden?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Eine ISR ist kein zweites Hauptprogramm. Sie sollte ein Ereignis schnell festhalten und dann den normalen Ablauf wieder freigeben.</p>
</div>
