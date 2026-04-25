---
title: "Mikrocontroller – SPI, Chip Select und Busdisziplin verstehen"
description: "Lerne, warum SPI nicht nur aus schnellen Datenleitungen besteht, sondern klare Chip-Select-Regeln und passende Modi braucht."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - spi-chip-select-und-busdisziplin
learningGoals:
  - "Du erklärst die Rollen von SCK, MOSI, MISO und Chip Select."
  - "Du beschreibst, warum nur der ausgewählte SPI-Teilnehmer auf MISO treiben darf."
  - "Du unterscheidest Verdrahtungsfehler, Modusfehler und Chip-Select-Fehler."
practiceIdeas:
  - "Skizziere einen SPI-Bus mit zwei Teilnehmern und getrennten CS-Leitungen."
  - "Prüfe, was passiert, wenn zwei CS-Leitungen gleichzeitig aktiv sind."
  - "Vergleiche falschen SPI-Modus mit falscher Verdrahtung."
commonMistakes:
  - "MISO mehrerer Geräte ohne sauberen Chip Select gleichzeitig treiben zu lassen."
  - "CPOL/CPHA-Modus zu ignorieren, weil „SPI immer gleich“ wirke."
  - "Chip Select als optionale Komfortleitung zu behandeln."
keyTakeaways:
  - "SPI braucht klare Rollen: Takt, Datenrichtung und Auswahlleitung."
  - "Chip Select entscheidet, welcher Teilnehmer gerade auf die gemeinsame Kommunikation reagiert."
  - "Falscher Modus oder schlechte CS-Disziplin erzeugt Datenmüll, obwohl die Kabel scheinbar stimmen."
recognizeSignals:
  - "Es geht um MOSI, MISO, SCK, CS, SS, SPI-Modus oder mehrere Geräte am Bus."
  - "Ein Sensor liefert nur 0xFF, 0x00 oder wechselnde Fantasiewerte."
  - "Eine Aufgabe fragt, warum zwei Teilnehmer nicht gleichzeitig aktiv sein dürfen."
selfCheckPoints:
  - "Kann ich MOSI und MISO aus Sicht des Masters erklären?"
  - "Kann ich sagen, warum CS meistens aktiv Low ist?"
  - "Kann ich Modusfehler und Buskonflikt unterscheiden?"
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - spi
  - chip-select
  - bus
  - miso
  - mosi
level: mittel
draft: false
---

## Grundidee

SPI ist schnell und direkt, aber nicht automatisch narrensicher. Der Master liefert den Takt, sendet über MOSI, empfängt über MISO und wählt über Chip Select genau den Teilnehmer aus, der gerade gemeint ist.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Zwei SPI-Module liefern plötzlich Datenmüll</h3>
  <p>Beide Module hängen an denselben SCK-, MOSI- und MISO-Leitungen. Wenn Chip Select nicht sauber getrennt ist oder zwei Geräte gleichzeitig aktiv sind, können mehrere Teilnehmer die MISO-Leitung treiben. Dann entstehen Konflikte statt gültiger Daten.</p>
</div>

## Drei Dinge, die du zuerst trennen solltest

<div class="visual-grid">
  <div class="visual-item">
    <strong>SCK</strong>
    <span>Der Master gibt den Takt vor.</span>
  </div>
  <div class="visual-item">
    <strong>MOSI/MISO</strong>
    <span>Datenrichtung aus Sicht des Masters: Master Out, Master In.</span>
  </div>
  <div class="visual-item">
    <strong>Chip Select</strong>
    <span>Wählt den Teilnehmer aus und hält die anderen ruhig.</span>
  </div>
</div>

## Mini-Demo: Mehrere Geräte, eine gemeinsame Datenleitung

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Chip Select ist Busdisziplin</h3>
  <pre><code>Gerät A CS = Low  → Gerät A darf antworten
Gerät B CS = High → Gerät B bleibt still
A und B CS = Low  → MISO-Konflikt möglich</code></pre>
  <p>SPI funktioniert mit mehreren Geräten nur dann sauber, wenn ungewählte Teilnehmer ihre Ausgänge wirklich freigeben oder stillhalten.</p>
</div>

## Typischer Denkfehler

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Kabel richtig, Modus trotzdem falsch</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unruhige Lesart</strong>
      <span>„Wenn MOSI, MISO und SCK verbunden sind, muss SPI funktionieren.“</span>
    </div>
    <div class="compare-item">
      <strong>Ruhige Lesart</strong>
      <span>„Ich prüfe zusätzlich Chip Select, aktiven Pegel, SPI-Modus und wer die MISO-Leitung treibt.“</span>
    </div>
  </div>
</div>

## Praxisraster

Für SPI hilft eine kleine Buszeichnung. Sie zeigt gemeinsame Leitungen und pro Gerät eine eigene Auswahlleitung.

<div class="step-grid">
  <div class="step-item">
    <strong>1. Beobachtung sichern</strong>
    <span>Welche Leitungen sind gemeinsam, welche sind pro Gerät getrennt?</span>
  </div>
  <div class="step-item">
    <strong>2. Ursache eingrenzen</strong>
    <span>Ist immer nur ein Chip Select aktiv?</span>
  </div>
  <div class="step-item">
    <strong>3. Lösung begründen</strong>
    <span>Passen CPOL/CPHA und Datenreihenfolge zum Baustein?</span>
  </div>
  <div class="step-item">
    <strong>4. Nebenwirkungen prüfen</strong>
    <span>Prüfe, ob ungewählte Geräte MISO wirklich nicht treiben.</span>
  </div>
</div>

## Abgrenzung zu Nachbarseiten

Diese Seite vertieft SPI-Busdisziplin. Die allgemeine Unterscheidung zu I²C und UART steht auf der Schnittstellenseite; Pegelthemen gehören zur 5-V/3,3-V-Seite.

<div class="note-panel">
  <p><strong>Merke:</strong> Bei SPI ist Chip Select keine Nebensache, sondern die Regel, die den gemeinsamen Bus geordnet hält.</p>
</div>
