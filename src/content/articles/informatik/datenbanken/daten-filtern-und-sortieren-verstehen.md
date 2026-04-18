---
title: Daten filtern und sortieren verstehen
description: Verstehe, wie Tabellen nicht nur gespeichert, sondern gezielt nach Bedingungen durchsucht und sinnvoll geordnet werden.
subject: informatik
section: Datenbanken
topicPath:
  - datenbanken
  - daten-filtern-und-sortieren-verstehen
learningGoals:
  - Du erklärst den Unterschied zwischen Filtern und Sortieren.
  - Du beschreibst, wie Bedingungen eine Datensicht verändern.
  - Du liest Tabellenabfragen ruhiger als Auswahl und Ordnung statt als „andere Daten“.
practiceIdeas:
  - Wähle aus einer Tabelle nur die Zeilen aus, die zu einer Bedingung passen.
  - Ordne dieselben Daten einmal nach Name und einmal nach Datum.
  - Beschreibe, wie sich die Sicht auf dieselbe Tabelle durch Filtern und Sortieren ändert.
commonMistakes:
  - Filtern und Sortieren gleichzusetzen.
  - Zu glauben, beim Filtern entstünden neue Daten.
  - Die Reihenfolge zu ändern und das schon als Auswahl zu missverstehen.
keyTakeaways:
  - Filtern wählt passende Datensätze aus.
  - Sortieren ordnet Datensätze nach einer Regel.
  - Beides verändert die Sicht auf Daten, nicht unbedingt die Datenbasis selbst.
recognizeSignals:
  - Es geht um Tabellen, Datensätze, Bedingungen oder Reihenfolgen.
  - Du sollst erklären, warum nur ein Teil der Tabelle sichtbar ist oder warum die Reihenfolge anders aussieht.
  - In Beispielen muss Auswahl von Ordnung getrennt werden.
selfCheckPoints:
  - Kann ich Filtern und Sortieren sicher unterscheiden?
  - Kann ich eine Bedingung für eine Datenauswahl formulieren?
  - Kann ich erklären, warum dieselben Daten verschieden dargestellt werden können?
tags:
  - datenbanken
  - tabellen
  - filtern
  - sortieren
level: einfach
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
