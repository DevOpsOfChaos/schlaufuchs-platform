---
title: "ATmega – I²C und SPI richtig unterscheiden"
description: "Vergleiche I²C und SPI als Buskonzepte und entscheide ruhiger, welche Schnittstelle zu welchem Sensor- oder Modulproblem passt."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "i2c-und-spi-richtig-unterscheiden"]
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

I²C und SPI sind beides serielle Schnittstellen, aber sie lösen das Verbindungsproblem unterschiedlich. I²C spart Leitungen und arbeitet mit Adressen. SPI nutzt meist mehr Leitungen, trennt Datenrichtungen klarer und wählt Bausteine über Chip Select aus.

<div class="compare-card"><p class="card-kicker">Schnittstellenkompass</p><h3>I²C denkt in Adressen, SPI stärker in Auswahlleitungen</h3><div class="compare-grid"><div class="compare-item"><strong>I²C</strong><span>Zwei Busleitungen: SDA für Daten, SCL für Takt. Geräte werden über Adressen angesprochen.</span></div><div class="compare-item"><strong>SPI</strong><span>Takt, Daten vom Master, Daten zum Master und meist eine Chip-Select-Leitung pro Gerät.</span></div></div></div>

<div class="figure-card"><p class="card-kicker">Busbild</p><h3>Beide sind seriell, aber nicht gleich organisiert</h3><pre><code>I²C:
Controller -- SDA -- Sensor A -- Sensor B
Controller -- SCL -- Sensor A -- Sensor B
Adresse entscheidet, wer gemeint ist.

SPI:
Controller -- SCK  -- Sensor A -- Sensor B
Controller -- MOSI -- Sensor A -- Sensor B
Controller -- MISO -- Sensor A -- Sensor B
Controller -- CS_A -- Sensor A
Controller -- CS_B -- Sensor B</code></pre></div>

<div class="visual-grid"><div class="visual-item"><strong>I²C spart Pins</strong><span>Viele Geräte können über zwei Busleitungen erreichbar sein.</span></div><div class="visual-item"><strong>I²C braucht Adressklarheit</strong><span>Zwei gleiche feste Adressen können zum Problem werden.</span></div><div class="visual-item"><strong>SPI ist oft direkt</strong><span>Chip Select macht eindeutig, welcher Baustein spricht.</span></div><div class="visual-item"><strong>SPI braucht mehr Leitungen</strong><span>Bei vielen Geräten wächst die Zahl der Auswahlleitungen.</span></div></div>

<div class="note-panel"><p><strong>Merke:</strong> I²C und SPI sind nicht nur andere Pin-Namen. Sie sind unterschiedliche Organisationsideen für Kommunikation zwischen Mikrocontroller und Bausteinen.</p></div>
