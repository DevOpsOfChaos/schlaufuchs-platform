---
title: ATmega – SPI als Grundidee verstehen
description: Verstehe, wie SPI am AVR mehrere Leitungen nutzt, damit Daten schnell und klar gerichtet zwischen Master und Gegenstelle laufen.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-grundidee-verstehen
learningGoals:
  - Du erklärst die Grundidee von SPI am AVR.
  - Du unterscheidest Takt, Datenrichtung und Geräteauswahl sauber.
  - Du liest SPI eher als geordneten Leitungsverbund statt nur als Abkürzung.
practiceIdeas:
  - Verfolge ein Byte vom AVR zu einem Peripheriebaustein über die einzelnen SPI-Leitungen.
  - Vergleiche SPI zuerst über Leitungen und Rollen und erst dann über Registerkürzel.
  - Prüfe bei einem Beispiel, welche Leitung den Takt liefert und welche das ausgewählte Gerät markiert.
commonMistakes:
  - SPI als bloße Zweidrahtverbindung zu behandeln.
  - MOSI und MISO zu verwechseln.
  - Zu denken, jedes angeschlossene Gerät reagiere gleichzeitig auf jedes Datenwort.
keyTakeaways:
  - SPI trennt Takt, Sendedaten, Empfangsdaten und Geräteauswahl auf mehrere Leitungen.
  - Die Auswahlleitung entscheidet, welches Gerät gerade angesprochen wird.
  - Wer Leitungen und Rollen sauber trennt, liest SPI deutlich ruhiger.
recognizeSignals:
  - Es geht um SPI, MOSI, MISO, SCK oder SS.
  - Du sollst erklären, wie ein AVR Daten zu einem Baustein schickt und gleichzeitig zurücklesen kann.
  - In Beispielen ist die Leitungsrolle wichtiger als der bloße Registername.
selfCheckPoints:
  - Kann ich die vier typischen SPI-Leitungen benennen und fachlich einordnen?
  - Kann ich erklären, warum ein ausgewähltes Gerät nötig ist?
  - Kann ich Sende- und Empfangsrichtung sauber trennen?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - spi
  - avr
level: einfach
draft: false
---

SPI ist am AVR eine serielle Schnittstelle, die bewusst **mehrere Leitungen mit klaren Rollen** nutzt. Gerade dadurch lässt sich das Thema oft ruhiger lesen als andere Schnittstellen: Nicht „irgendwie Daten übertragen“, sondern **Takt**, **Richtung** und **Geräteauswahl** werden sauber voneinander getrennt.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein AVR spricht mit einem Display-Baustein</h3>
  <p>Der AVR soll ein Byte an einen Display-Treiber senden. Dazu liefert er den Takt, schiebt die Daten auf der passenden Leitung heraus und wählt genau dieses Gerät aktiv aus. Genau so wird sichtbar: SPI ist nicht nur eine Datenleitung, sondern ein kleines geordnetes Leitungssystem.</p>
</div>

## Die Leitungen ruhig nach Funktion lesen

<div class="visual-grid">
  <div class="visual-item">
    <strong>SCK</strong>
    <span>Der Takt. Er gibt vor, wann Bits übernommen oder weitergeschoben werden.</span>
  </div>
  <div class="visual-item">
    <strong>MOSI</strong>
    <span>Daten vom Master nach außen, also typischerweise vom AVR zum Baustein.</span>
  </div>
  <div class="visual-item">
    <strong>MISO</strong>
    <span>Daten vom Baustein zurück zum Master.</span>
  </div>
  <div class="visual-item">
    <strong>SS</strong>
    <span>Die Auswahlleitung. Sie macht klar, welches Gerät gerade gemeint ist.</span>
  </div>
</div>

## Mini-Demo: dieselbe Übertragung als Leitungsbild

<div class="figure-card">
  <p class="card-kicker">Mini-Seite in der Seite</p>
  <h3>Ein Byte läuft nicht „irgendwie“, sondern geordnet über Leitungen</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>SS aktiv</strong><span>Das gewünschte Gerät wird ausgewählt.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>SCK taktet</strong><span>Der AVR gibt die Schritte der Übertragung vor.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>MOSI sendet</strong><span>Das Byte läuft vom AVR zum Baustein.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>MISO antwortet</strong><span>Falls nötig, kommt gleichzeitig ein Byte zurück.</span></div>
  </div>
</div>

## Warum SS didaktisch so wichtig ist

Ein häufiger Denkfehler ist: „Wenn die Leitungen verbunden sind, hören eben alle Geräte mit.“ Gerade deshalb ist die Auswahlleitung wichtig. Sie beantwortet die ruhige Leitfrage:

**Welches Gerät ist jetzt überhaupt gemeint?**

Ohne diese Geräteauswahl wäre nicht sauber klar, welcher Baustein auf das gerade gesendete Bitmuster reagieren soll.

## Mini-Codeblick

```c
PORTB &= ~(1 << PB2);   // SS aktiv
SPDR = 0x55;            // Byte senden
while (!(SPSR & (1 << SPIF))) {
}
PORTB |= (1 << PB2);    // SS wieder inaktiv
```

Die ruhige Lesart ist:

- Gerät auswählen,
- Byte in das Datenregister schreiben,
- auf das Ende der Übertragung warten,
- Gerät wieder freigeben.

## SPI ist hier bewusst ein Leitungs- und Rollen-Thema

Diese Seite klärt die **Grundidee von Leitungen und Rollen**.  
Sie erklärt bewusst nicht schon im Detail,

- wie Master und Slave konfiguriert werden,
- oder wie Taktphase und Taktpolarität im Register gesetzt werden.

Dafür können spätere Seiten die Details gezielter übernehmen, ohne dass diese Grundidee doppelt erzählt wird.

## Eine ruhige Prüfstrategie

1. Wer liefert den Takt?
2. Wo laufen die Sendedaten hinaus?
3. Wo würden Rückdaten hereinkommen?
4. Welches Gerät ist gerade ausgewählt?

<div class="note-panel">
  <p><strong>Merke:</strong> SPI wird am ruhigsten verstanden, wenn du zuerst die Leitungen und ihre Rollen liest und erst danach die Register.</p>
</div>
