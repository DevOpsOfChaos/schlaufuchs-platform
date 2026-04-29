---
title: "ATmega – Initialisierung und Endlosschleife verstehen"
description: "Verstehe, warum AVR-Programme meist aus einem einmaligen Startteil und einer dauerhaften Hauptschleife bestehen."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-initialisierung-und-endlosschleife-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "mikrocontroller-und-atmega"]
draft: false
---
AVR-Programme bestehen oft aus zwei gut unterscheidbaren Phasen: **einmalig einrichten** und **dauerhaft reagieren**. Die Initialisierung bereitet Ports, Timer oder Schnittstellen vor. Die Endlosschleife beschreibt danach, was der Controller ständig tun oder prüfen soll.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>LED-Ausgang setzen, Taster dauerhaft prüfen</h3>
  <p>Ein LED-Pin wird einmal als Ausgang eingerichtet. Ein Taster-Pin wird als Eingang mit Pull-up vorbereitet. Danach soll das Programm fortlaufend prüfen, ob der Taster gedrückt ist, und die LED entsprechend schalten. Genau hier sieht man: Das Einrichten passiert einmal, das Reagieren dauerhaft.</p>
</div>

## Zwei Phasen statt ein unstrukturierter Codeblock

<div class="visual-grid">
  <div class="visual-item">
    <strong>Initialisierung</strong>
    <span>Hier werden Richtung, Startzustände und Peripherie einmalig eingerichtet.</span>
  </div>
  <div class="visual-item">
    <strong>Endlosschleife</strong>
    <span>Hier läuft die eigentliche Daueraufgabe des Programms immer wieder ab.</span>
  </div>
</div>

## Mini-Demo: ruhig als Ablauf lesen

```c
int main(void) {
  DDRB |= (1 << PB0);      // LED als Ausgang
  DDRB &= ~(1 << PB1);     // Taster als Eingang
  PORTB |= (1 << PB1);     // Pull-up einschalten

  while (1) {
    if (!(PINB & (1 << PB1))) {
      PORTB |= (1 << PB0);
    } else {
      PORTB &= ~(1 << PB0);
    }
  }
}
```

Die ruhige Lesart ist:

- vor `while (1)` wird das System vorbereitet,
- in `while (1)` wird das eigentliche Laufverhalten beschrieben,
- die Hauptschleife ist keine „Wiederholung aus Versehen“, sondern die normale Arbeitsform eines Controllers.

## Warum Initialisierung nicht dauernd wiederholt werden sollte

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Einmal sinnvoll setzen oder jede Runde unnötig wiederholen?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Vor der Schleife</strong>
      <span>Richtung, Startzustände und Basiskonfiguration werden meist nur einmal gebraucht.</span>
    </div>
    <div class="compare-item">
      <strong>In der Schleife</strong>
      <span>Hier stehen typischerweise Prüfungen, Reaktionen und wiederkehrende Ausgaben.</span>
    </div>
  </div>
</div>

## Mini-Konsole im Kopf

<pre><code>Start des Programms
→ Ports und Peripherie einrichten
→ in die Hauptschleife gehen
→ prüfen, reagieren, wieder prüfen, wieder reagieren
→ das Programm bleibt in diesem Laufbetrieb</code></pre>

## Diese Seite behandelt bewusst Grundstruktur, nicht schon Interrupts oder Scheduler

Hier geht es nur um die ruhige AVR-Grundform aus **Initialisierung** und **Endlosschleife**. Interrupts, Timer-Ereignisse oder komplexere Nebenläufigkeit bauen darauf auf, erzählen aber eine eigene Geschichte.

## Eine ruhige Prüfstrategie

1. Welche Zeilen richten etwas nur einmal ein?
2. Welche Zeilen beschreiben das dauerhafte Verhalten?
3. Würde es fachlich etwas ändern, wenn Setup-Zeilen in jede Runde wandern?
4. Erst danach die Details einzelner Register bewerten.

<div class="note-panel">
  <p><strong>Merke:</strong> Die Initialisierung bereitet den Controller vor. Die Endlosschleife beschreibt, wie er danach dauerhaft auf seine Umgebung reagiert.</p>
</div>
