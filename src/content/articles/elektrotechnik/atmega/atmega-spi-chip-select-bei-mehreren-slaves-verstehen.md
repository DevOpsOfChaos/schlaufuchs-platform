---
title: ATmega – SPI-Chip-Select bei mehreren Slaves verstehen
description: Verstehe am AVR-SPI, warum bei mehreren Slaves nicht nur MOSI, MISO und SCK wichtig sind, sondern jede Gegenstelle über eine eigene Chip-Select-Logik sauber ausgewählt werden muss.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-spi-chip-select-bei-mehreren-slaves-verstehen
learningGoals:
  - Du erklärst die Rolle von Chip Select bei mehreren SPI-Slaves.
  - Du beschreibst, warum gemeinsame Leitungen und getrennte Aktivierung zusammengehören.
  - Du liest Mehrteilnehmer-SPI eher als Auswahlproblem statt nur als Verdrahtungsbild.
practiceIdeas:
  - Verfolge, welche Leitungen zwischen mehreren Slaves geteilt und welche getrennt geführt werden.
  - Prüfe, warum immer nur ein Slave aktiv sein sollte.
  - Erkläre das Bussystem zuerst über Auswahl und erst dann über Datenrichtung.
commonMistakes:
  - Zu denken, MOSI, MISO und SCK allein reichten schon für mehrere Slaves aus.
  - Mehrere Slaves gleichzeitig aktiv zu sehen und trotzdem einen sauberen Datenfluss zu erwarten.
  - Chip Select nur als Nebensignal statt als eigentliche Auswahlmechanik zu lesen.
keyTakeaways:
  - Bei SPI mit mehreren Slaves werden Datenleitungen geteilt, die Aktivierung aber getrennt geführt.
  - Chip Select entscheidet, wer gerade zuhört und antworten darf.
  - Ohne saubere Auswahl wird aus SPI schnell ein Konflikt statt ein geordneter Austausch.
recognizeSignals:
  - Es geht um mehrere SPI-Bausteine am selben AVR.
  - Du sollst erklären, warum nur einer gleichzeitig aktiv sein darf.
  - In Aufgaben ist die Auswahl eines Slaves wichtiger als nur die Datenleitung.
selfCheckPoints:
  - Kann ich gemeinsame und getrennte Leitungen bei SPI unterscheiden?
  - Kann ich erklären, warum Chip Select bei mehreren Slaves zentral ist?
  - Kann ich einen Konflikt durch gleichzeitige Aktivierung beschreiben?
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - spi
  - chip-select
level: mittel
draft: false
---

## Grundidee

SPI wirkt zunächst simpel: Takt, Daten rein, Daten raus. Sobald aber **mehrere Slaves** an demselben Master hängen, reicht diese Sicht nicht mehr. Dann wird die entscheidende Frage: **Wer ist gerade ausgewählt und darf überhaupt mitreden?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein Sensor und ein Display am selben SPI-Master</h3>
  <p>Der AVR soll sowohl mit einem Sensor als auch mit einem Display sprechen. Beide teilen sich Takt- und Datenleitungen. Trotzdem darf nicht beides gleichzeitig aktiv sein. Genau hier übernimmt Chip Select die eigentliche Ordnungsarbeit.</p>
</div>

## Was gemeinsam läuft – und was nicht

<div class="visual-grid">
  <div class="visual-item">
    <strong>Gemeinsam</strong>
    <span>MOSI, MISO und SCK können zwischen mehreren Slaves gemeinsam genutzt werden.</span>
  </div>
  <div class="visual-item">
    <strong>Getrennt</strong>
    <span>Jeder Slave braucht eine eigene Auswahlleitung, damit nur einer aktiv antwortet.</span>
  </div>
</div>

## Mini-Demo: gemeinsamer Bus, getrennte Auswahl

<div class="figure-card">
  <p class="card-kicker">Busbild</p>
  <h3>Die Datenleitungen sind geteilt, die Aktivierung nicht</h3>
  <pre><code>AVR Master
 ├─ MOSI ─────────┬─ Sensor
 ├─ MISO ─────────┼─ Sensor
 ├─ SCK  ─────────┼─ Sensor
 ├─ CS_SENSOR ────┘

 ├─ MOSI ─────────┬─ Display
 ├─ MISO ─────────┼─ Display
 ├─ SCK  ─────────┼─ Display
 └─ CS_DISPLAY ───┘</code></pre>
</div>

## Warum immer nur einer aktiv sein sollte

<div class="compare-card">
  <p class="card-kicker">Konfliktblick</p>
  <h3>Bus teilen ist nicht dasselbe wie gleichzeitig senden dürfen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Sauberer Fall</strong>
      <span>Genau ein Slave ist ausgewählt. Der Datenfluss bleibt eindeutig und ruhig interpretierbar.</span>
    </div>
    <div class="compare-item">
      <strong>Unruhiger Fall</strong>
      <span>Mehrere Slaves sind gleichzeitig aktiv. Dann kann es zu Konflikten oder unklaren Antworten kommen.</span>
    </div>
  </div>
</div>

## Chip Select ist mehr als „noch eine Leitung“

Chip Select ist nicht bloß ein Zusatzdraht. Fachlich ist es die **Auswahlmechanik**, mit der der Master festlegt, wer gerade teilnehmen darf. Erst dadurch wird aus gemeinsam genutzten Datenleitungen ein geordneter Bus.

## Eine ruhige Prüfstrategie

1. Welche Leitungen sind gemeinsam?
2. Welche Auswahlleitungen gibt es pro Slave?
3. Ist zu jedem Zeitpunkt klar, welcher Slave aktiv ist?
4. Könnten zwei Slaves gleichzeitig antworten?

<div class="note-panel">
  <p><strong>Merke:</strong> Bei mehreren SPI-Slaves wird nicht die Datenleitung verdoppelt, sondern die Auswahl sauber getrennt.</p>
</div>
