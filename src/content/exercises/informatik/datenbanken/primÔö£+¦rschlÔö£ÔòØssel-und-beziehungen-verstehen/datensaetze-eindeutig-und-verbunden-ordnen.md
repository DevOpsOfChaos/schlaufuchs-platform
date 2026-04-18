---
title: Datensätze eindeutig und verbunden ordnen
description: Prüfe in kleinen Tabellenbeispielen, welcher Eintrag eindeutig sein muss und wie Beziehungen zwischen Tabellen sinnvoll helfen.
subject: informatik
section: Datenbanken
topicPath:
  - datenbanken
  - primaerschluessel-und-beziehungen-verstehen
  - datensaetze-eindeutig-und-verbunden-ordnen
level: einfach
draft: false
tags:
  - datenbanken
  - primaerschluessel
  - tabellen
hintPoints:
  - "Frage zuerst: Was ist in deinem Beispiel überhaupt ein einzelner Datensatz?"
  - "Prüfe dann, welches Feld wirklich eindeutig sein kann."
  - "Überlege zuletzt, welche Information besser in eine zweite Tabelle gehört."
selfCheckPoints:
  - "Hast du Eindeutigkeit und Beziehung getrennt betrachtet?"
  - "Ist klar, warum dein vorgeschlagener Schlüssel geeignet oder ungeeignet ist?"
transferIdeas:
  - "Übertrage die Aufgabe auf Bibliotheken, Schulverwaltung oder Online-Shops."
  - "Vergleiche eine einzige große Tabelle mit zwei verbundenen Tabellen."
reflectionPrompt: "Warum wird eine Datenbank nicht automatisch besser, wenn einfach alle Informationen in eine einzige Tabelle geschrieben werden?"
---

## Aufgabe 1: Schlüssel suchen

In einer Tabelle mit Kundendaten stehen Name, Ort, E-Mail-Adresse und Kundennummer.

- Welches Feld eignet sich am ehesten als Primärschlüssel?
- Begründe kurz, warum andere Felder unsicherer sein können.

## Aufgabe 2: Beziehung erklären

Ein Shop speichert Bestellungen in einer eigenen Tabelle.

- Warum ist es sinnvoll, Kundendaten und Bestellungen nicht komplett in dieselbe Tabelle zu schreiben?
- Erkläre, wie eine Beziehung zwischen beiden Tabellen helfen kann.

## Aufgabe 3: Denkfehler prüfen

Jemand sagt: „Wenn ein Name meistens eindeutig ist, reicht das als Schlüssel schon aus.“

Erkläre, warum das für strukturierte Daten zu riskant sein kann.
