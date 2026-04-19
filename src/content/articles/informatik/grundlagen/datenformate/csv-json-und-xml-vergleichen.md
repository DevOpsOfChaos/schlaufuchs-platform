---
title: CSV, JSON und XML vergleichen
description: Verstehe, wann einfache Tabellenformate ausreichen und wann hierarchische Datenformate sinnvoller sind.
subject: informatik
section: Grundlagen
topicPath:
  - grundlagen
  - datenformate
  - csv-json-und-xml-vergleichen
learningGoals:
  - Du vergleichst CSV, JSON und XML nach Struktur und Einsatzbereich.
  - Du erkennst, wann flache Tabellen ausreichen und wann Hierarchie gebraucht wird.
  - Du begründest eine Formatwahl fachlich statt nur nach Gewohnheit.
practiceIdeas:
  - Ordne typische Anwendungsfälle wie Exporttabelle, API-Antwort oder Konfigurationsdatei einem Format zu.
  - Vergleiche denselben Datensatz als CSV, JSON und XML.
  - Begründe, warum Listen mit Unterobjekten in CSV schnell unruhig werden.
commonMistakes:
  - JSON oder XML für jede einfache Tabelle zu wählen.
  - CSV für stark verschachtelte Daten zu erzwingen.
  - Lesbarkeit nur nach Länge der Datei zu beurteilen.
keyTakeaways:
  - CSV ist gut für flache tabellarische Daten.
  - JSON und XML können Hierarchien ausdrücken.
  - Die Formatwahl hängt von Struktur, Datentypen und Verarbeitung ab.
recognizeSignals:
  - Ein System exportiert Tabellen oder tauscht strukturierte Daten aus.
  - Du sollst Vor- und Nachteile von Formaten vergleichen.
  - Es geht um Lesbarkeit, Hierarchie oder Datenaustausch.
selfCheckPoints:
  - Kann ich erklären, warum CSV flach ist?
  - Kann ich JSON und XML als hierarchische Formate einordnen?
  - Kann ich für einen Anwendungsfall ein passendes Format begründen?
level: einfach
tags:
  - informatik
  - csv
  - json
  - xml
  - datenformate
draft: false
---

## Grundidee

CSV, JSON und XML sind alle textbasierte Datenformate – aber sie lösen nicht exakt dieselbe Aufgabe. CSV ist stark auf tabellarische Daten ausgerichtet, JSON und XML können dagegen Hierarchien sauber ausdrücken.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine Personenliste mit Namen, Alter und Stadt</h3>
  <p>Wenn jede Person nur einige gleichartige Spaltenwerte besitzt, ist CSV oft ausreichend. Sobald pro Person zusätzliche Listen, Unterobjekte oder optionale Felder hinzukommen, werden JSON oder XML meist deutlich ruhiger.</p>
</div>

## Drei Formate, drei Stärken

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Wofür die Formate besonders geeignet sind</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>CSV</strong>
      <span>Gut für flache Tabellen mit Zeilen und Spalten.</span>
    </div>
    <div class="compare-item">
      <strong>JSON</strong>
      <span>Gut für APIs, Konfigurationen und verschachtelte Web-Daten.</span>
    </div>
    <div class="compare-item">
      <strong>XML</strong>
      <span>Gut für strukturierte Dokumente und stark formal beschriebene Austauschformate.</span>
    </div>
  </div>
</div>

## Flach oder hierarchisch?

CSV kennt im Kern nur Zeilen und Spalten. Das ist sehr praktisch für Exporte, Listen oder Tabellenimporte. JSON und XML können dagegen Unterstrukturen ausdrücken, etwa Adressen innerhalb einer Person oder mehrere Hobbys pro Datensatz.

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Die Struktur entscheidet über das passende Format</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Flache Zeilen</strong><span>gleiche Spalten für alle Datensätze</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>CSV</strong><span>einfach, kompakt, breit unterstützt</span></div>
    <div class="flow-arrow">↔</div>
    <div class="flow-node"><strong>Hierarchische Daten</strong><span>Unterobjekte, Listen, optionale Strukturen</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>JSON oder XML</strong><span>mehr Struktur, dafür mehr Text</span></div>
  </div>
</div>

## Eine ruhige Entscheidungsfrage

Wenn du ein Format auswählen sollst, frage zuerst:

- Sind die Daten nur tabellarisch?
- Brauche ich verschachtelte Strukturen?
- Sollen Datentypen sichtbarer sein?
- Wird das Format eher von Menschen, eher von Maschinen oder von beiden gelesen?

<div class="note-panel">
  <p><strong>Merke:</strong> Das beste Format ist nicht das modernste, sondern das Format, das zur Datenstruktur und zum Verwendungszweck passt.</p>
</div>
