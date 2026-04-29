---
title: "Daten filtern und sortieren verstehen"
description: "Verstehe, wie Tabellen nicht nur gespeichert, sondern gezielt nach Bedingungen durchsucht und sinnvoll geordnet werden."
subject: "informatik"
section: "Datenbanken"
topicPath: ["datenbanken", "daten-filtern-und-sortieren-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Datenbanken"]
draft: false
---
## Grundidee

In einer Tabelle stehen oft viele Datensätze. Damit diese Daten nutzbar werden, reicht Speichern allein nicht aus. Man muss sie auch **gezielt auswählen** und **sinnvoll ordnen** können.

Genau hier kommen Filtern und Sortieren ins Spiel.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Bestellungen gezielt ansehen</h3>
  <p>Eine Tabelle enthält viele Bestellungen. Du möchtest aber nur offene Bestellungen sehen und diese zusätzlich nach Datum ordnen. An diesem Beispiel wird klar: Erst wird ausgewählt, was relevant ist, danach wird die Reihenfolge sinnvoll gemacht.</p>
</div>

## Filtern heißt auswählen

Beim Filtern werden nur die Datensätze angezeigt, die eine bestimmte Bedingung erfüllen.

Beispiele:

- nur offene Bestellungen,
- nur Produkte unter 20 Euro,
- nur Einträge aus einem bestimmten Monat.

## Sortieren heißt ordnen

Beim Sortieren bleiben die Datensätze grundsätzlich dieselben, aber ihre **Reihenfolge** ändert sich.

Beispiele:

- alphabetisch nach Name,
- aufsteigend nach Preis,
- absteigend nach Datum.

<div class="compare-card">
  <p class="card-kicker">Wichtiger Unterschied</p>
  <h3>Auswahl ist nicht dasselbe wie Reihenfolge</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Filtern</strong>
      <span>Nur passende Zeilen bleiben sichtbar.</span>
    </div>
    <div class="compare-item">
      <strong>Sortieren</strong>
      <span>Die vorhandenen Zeilen werden anders angeordnet.</span>
    </div>
    <div class="compare-item">
      <strong>Kombination</strong>
      <span>Oft wird zuerst gefiltert und danach sortiert.</span>
    </div>
  </div>
</div>

## Denkbild zur Datensicht

<div class="figure-card">
  <p class="card-kicker">Datenbild</p>
  <h3>Dieselbe Tabelle, andere Sicht</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Gesamte Tabelle</strong><span>Alle Datensätze liegen vor.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Filter anwenden</strong><span>Nur passende Einträge bleiben sichtbar.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Sortierung wählen</strong><span>Die Auswahl wird sinnvoll geordnet.</span></div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Soll etwas ausgewählt oder nur neu geordnet werden?
2. Welche Bedingung entscheidet über die Auswahl?
3. Nach welchem Feld wird geordnet?
4. Wird dieselbe Datenbasis betrachtet oder entsteht wirklich ein neuer Datensatz?

<div class="note-panel">
  <p><strong>Merke:</strong> Filtern verändert vor allem die sichtbare Auswahl, Sortieren vor allem die Reihenfolge. Beides hilft, dieselben Daten besser zu lesen.</p>
</div>
