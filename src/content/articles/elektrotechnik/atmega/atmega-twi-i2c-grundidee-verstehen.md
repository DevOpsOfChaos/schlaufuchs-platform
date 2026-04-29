---
title: "ATmega – TWI/I²C als Grundidee verstehen"
description: "Verstehe, wie TWI beziehungsweise I²C am AVR mehrere Teilnehmer über zwei gemeinsame Leitungen verbindet und warum Adressen dabei so wichtig sind."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-twi-i2c-grundidee-verstehen"]
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
TWI beziehungsweise I²C wirkt am Anfang oft erstaunlich: **Mehrere Geräte an denselben zwei Leitungen?** Genau deshalb hilft ein ruhiges Denkmodell. Nicht Punkt-zu-Punkt-Verbindung, sondern **gemeinsamer Bus mit Adressierung**.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Ein AVR spricht mit Sensor und EEPROM über denselben Bus</h3>
  <p>Der Controller soll einmal einen Sensor abfragen und später Daten in ein EEPROM schreiben. Beide Bausteine hängen an denselben Leitungen. Erst über die Adresse wird klar, welches Gerät gerade gemeint ist.</p>
</div>

## Zwei Leitungen, aber klare Rollen

<div class="visual-grid">
  <div class="visual-item">
    <strong>SCL</strong>
    <span>Die Taktleitung. Sie strukturiert den Übertragungsrhythmus auf dem Bus.</span>
  </div>
  <div class="visual-item">
    <strong>SDA</strong>
    <span>Die Datenleitung. Über sie laufen Adresse und Nutzdaten.</span>
  </div>
</div>

## Mini-Demo: derselbe Bus, aber unterschiedliche Zielgeräte

<div class="figure-card">
  <p class="card-kicker">Busbild</p>
  <h3>Nicht die Leitung ändert sich, sondern die angesprochene Adresse</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Start</strong><span>Der Busvorgang beginnt sichtbar.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Adresse</strong><span>Sie markiert das gewünschte Zielgerät.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Daten</strong><span>Erst danach folgen Messwert oder Speicherinhalt.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Stop</strong><span>Der Busvorgang endet geordnet.</span></div>
  </div>
</div>

## Warum I²C nicht einfach „SPI mit weniger Leitungen“ ist

Beide Schnittstellen übertragen seriell Daten. Didaktisch ist aber wichtig:

- **SPI** trennt Leitungen und Geräteauswahl stärker physisch.
- **TWI/I²C** arbeitet als **gemeinsamer Bus** mit **Adressierung**.

Die ruhige Leitfrage lautet hier also nicht zuerst „Welche einzelne Auswahlleitung?“, sondern:

**Welche Adresse macht klar, welches Gerät gerade gemeint ist?**

## Kleiner Codeblick

```c
TWCR = (1 << TWINT) | (1 << TWSTA) | (1 << TWEN);
```

Das kann man ruhig lesen als:

- TWI aktiv,
- Startbedingung anstoßen,
- Busvorgang geordnet beginnen.

## Eine ruhige Prüfstrategie

1. Sind mehrere Geräte am selben Bus?
2. Welche zwei Leitungen tragen Takt und Daten?
3. Wie wird das Zielgerät adressiert?
4. Welche Bytes sind Adresse, welche sind eigentliche Nutzdaten?

<div class="note-panel">
  <p><strong>Merke:</strong> TWI/I²C wird am AVR am ruhigsten verstanden, wenn du zuerst Busstruktur und Adressierung klärst und erst danach die Register.</p>
</div>
