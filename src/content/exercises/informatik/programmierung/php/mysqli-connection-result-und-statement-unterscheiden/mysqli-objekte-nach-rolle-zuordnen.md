---
title: MySQLi-Objekte nach Rolle zuordnen
description: Ordne Connection, Result und Statement ihrer Aufgabe im Datenbankzugriff zu.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - mysqli-connection-result-und-statement-unterscheiden
  - mysqli-objekte-nach-rolle-zuordnen
taskId: INF-PHP-MYSQL-008
level: mittel
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - mysqli
hintPoints:
  - "Trenne Verbinden, Vorbereiten und Ergebnislesen."
  - "Achte darauf, dass SELECT typischerweise noch gelesen werden muss."
selfCheckPoints:
  - "Habe ich Connection, Result und Statement sauber getrennt?"
  - "Habe ich deren Aufgaben beschrieben statt nur Namen aufzuzählen?"
transferIdeas:
  - "Übertrage die Rollen auf Prepared Statements mit Platzhaltern oder auf SELECT-Abfragen mit mehreren Zeilen."
reflectionPrompt: "Warum wird Datenbankcode lesbarer, wenn man Rollen statt nur Methoden lernt?"
---

## Aufgabe 1

Ordne die Rolle zu:

- Verbindung halten
- Ergebnismenge repräsentieren
- vorbereitete Anfrage mit Parametern darstellen

## Aufgabe 2

Warum ist ein Prepared Statement nicht dasselbe wie die bereits gelesene Ergebniszeile?
