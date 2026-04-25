---
title: ATmega – Watchdog als Grundidee verstehen
description: Verstehe, wie der Watchdog am AVR das System überwacht und warum er eher Sicherheitsnetz als normales Zeitwerkzeug ist.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - robustheit-und-fehlersicherheit
  - atmega-watchdog-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee des Watchdog-Timers am AVR.
  - Du unterscheidest Überwachung und normales Zeitmessen sauber.
  - Du liest Watchdog-Code ruhiger als Sicherheitslogik statt als Komfortfunktion.
practiceIdeas:
  - Vergleiche einen normalen Timerfall mit einem Watchdog-Fall.
  - Prüfe, warum ein blockiertes Programm ohne Watchdog dauerhaft hängen bleiben kann.
  - Lies einen Watchdog-Reset als Schutzreaktion und nicht als normales Programmerkennen.
commonMistakes:
  - Den Watchdog als gewöhnlichen Verzögerungstimer zu behandeln.
  - Zu denken, ein Reset bedeute automatisch einen Hardwaredefekt.
  - Nicht zu unterscheiden, ob ein Timer misst oder ob er das System überwacht.
keyTakeaways:
  - Der Watchdog überwacht, ob das Programm noch geordnet weiterläuft.
  - Wird der Watchdog nicht rechtzeitig zurückgesetzt, löst er eine Schutzreaktion aus.
  - Watchdog-Logik dient Robustheit und Fehlersicherheit, nicht normaler Zeitplanung.
recognizeSignals:
  - Es geht um Watchdog, Resetursache, Hänger oder Fehlersicherheit.
  - Du sollst erklären, warum ein AVR sich bei einem Programmfehler selbst neu startet.
  - In Beispielen ist die Überwachungsfunktion wichtiger als ein Zeitwert allein.
selfCheckPoints:
  - Kann ich Timer und Watchdog fachlich trennen?
  - Kann ich erklären, warum ein Watchdog-Reset sinnvoll sein kann?
  - Kann ich einen Hänger als Überwachungsfall lesen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - watchdog
  - avr
level: mittel
draft: false
---

Der Watchdog ist am AVR keine Komfortfunktion, sondern ein **Sicherheitsnetz**. Ruhig gelesen lautet die Grundfrage:

**Läuft das Programm noch geordnet weiter oder hängt es fest?**

Genau auf diese Frage reagiert der Watchdog.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Hauptprogramm bleibt in einer Endschleife hängen</h3>
  <p>Das eigentliche Programm sollte regelmäßig weiterlaufen und bestimmte Aufgaben abarbeiten. Bleibt es aber in einem Fehlerfall hängen und setzt den Watchdog nicht mehr zurück, löst der AVR eine Schutzreaktion aus. Genau daran zeigt sich: Der Watchdog misst nicht einfach Zeit, sondern überwacht lebendiges Weiterlaufen.</p>
</div>

## Watchdog und Timer nicht verwechseln

<div class="compare-card">
  <p class="card-kicker">Wichtige Trennkante</p>
  <h3>Zeitplanung ist etwas anderes als Überwachung</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Normaler Timer</strong>
      <span>Hilft bei Zeitbasis, Verzögerung oder periodischen Ereignissen.</span>
    </div>
    <div class="compare-item">
      <strong>Watchdog</strong>
      <span>Prüft, ob das Programm weiterläuft und rechtzeitig Rückmeldung gibt.</span>
    </div>
  </div>
</div>

## Mini-Demo: derselbe Ablauf mit und ohne Watchdog-Idee

<div class="figure-card">
  <p class="card-kicker">Sicherheitsbild</p>
  <h3>Der Watchdog fragt nicht „Wie spät?“, sondern „Lebt der Ablauf noch?“</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Programm läuft</strong><span>Regelmäßig wird der Watchdog bedient.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Fehlerfall</strong><span>Das Programm hängt und bedient den Watchdog nicht mehr.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Überwachungsfrist endet</strong><span>Der Watchdog erkennt das Ausbleiben der Rückmeldung.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Reset</strong><span>Das System bekommt die Chance auf einen sauberen Neustart.</span></div>
  </div>
</div>

## Warum das didaktisch so wichtig ist

Viele Einsteiger lesen den Watchdog zuerst wie einen weiteren Timer. Genau das ist zu flach. Die ruhige Lesart ist:

- Der Zeitwert ist nur die Überwachungsfrist.
- Die eigentliche Funktion ist die Kontrolle des Programmablaufs.
- Ein Reset ist hier kein Zufallsereignis, sondern eine Schutzreaktion.

## Eine ruhige Prüfstrategie

1. Geht es um normales Zeitverhalten oder um Überwachung?
2. Muss das Programm regelmäßig ein Lebenszeichen geben?
3. Was passiert, wenn dieses Lebenszeichen ausbleibt?
4. Ist der Reset hier Fehler oder Schutzreaktion?

<div class="note-panel">
  <p><strong>Merke:</strong> Ein Watchdog ist am AVR vor allem Überwachungstechnik für Robustheit – nicht einfach nur ein weiterer Timer.</p>
</div>
