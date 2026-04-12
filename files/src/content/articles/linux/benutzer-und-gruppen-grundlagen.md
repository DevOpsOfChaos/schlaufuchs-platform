---
title: Benutzer und Gruppen – Grundlagen
description: Verstehe, wie Linux Zugriffe über Benutzer und Gruppen organisiert.
subject: linux
section: benutzer-und-gruppen
topicPath:
  - system
  - benutzer-und-gruppen
learningGoals:
  - Du kannst erklären, was ein Benutzerkonto in Linux fachlich bedeutet.
  - Du kannst beschreiben, wozu Gruppen im System dienen.
  - Du verstehst den Zusammenhang zwischen Benutzer, Gruppe und Dateirechten.
level: einfach
tags: [benutzer, gruppen, linux, rechte, zugriff]
draft: false
---

Linux organisiert Zugriffe nicht zufällig, sondern über klare Zuständigkeiten. Genau dafür sind **Benutzer** und **Gruppen** wichtig. Wer dieses Grundprinzip versteht, kann Rechte, Besitz und typische Mehrbenutzer-Situationen später viel leichter lesen.

## Was du hier lernst

Auf dieser Seite lernst du,

- was ein Benutzerkonto in Linux eigentlich bedeutet,
- wozu Gruppen verwendet werden,
- und warum beide Themen direkt mit Dateirechten und Sicherheit zusammenhängen.

## Was ein Benutzer im Linux-System ist

Ein Benutzer ist mehr als nur ein Name auf dem Anmeldebildschirm. Im System steht ein Benutzer für eine **konkrete Identität**, der Dateien, Rechte und Prozesse zugeordnet werden können.

Dadurch kann Linux unterscheiden,

- wem etwas gehört,
- wer etwas verändern darf,
- und unter welcher Identität ein Prozess läuft.

## Was eine Gruppe ist

Eine Gruppe fasst mehrere Benutzer in einem gemeinsamen Rechtekontext zusammen. Das ist praktisch, wenn mehrere Personen ähnliche Zugriffe brauchen.

Statt Rechte für jeden Benutzer einzeln zu setzen, kann Linux sagen:

- Alle Benutzer dieser Gruppe dürfen lesen.
- Nur der Besitzer darf schreiben.
- Andere haben keinen Zugriff.

## Warum Benutzer und Gruppen zusammen gedacht werden müssen

In Linux greifen diese drei Ebenen typischerweise ineinander:

- **Benutzer**: einzelne Identität,
- **Gruppe**: gemeinsamer Rechtekontext,
- **Rechte**: konkrete Erlaubnisse wie lesen, schreiben oder ausführen.

Darum ist es didaktisch falsch, Benutzer und Gruppen isoliert zu betrachten. In der Praxis hängen sie fast immer mit Zugriffsrechten zusammen.

## Beispiel aus dem Alltag

Stell dir eine Datei in einem Projektordner vor.

- Der Besitzer ist `fox`.
- Die Gruppe ist `team-web`.
- Der Besitzer darf lesen und schreiben.
- Die Gruppe darf lesen.
- Andere dürfen nichts.

Dann wird schnell sichtbar, warum Benutzer und Gruppen so nützlich sind: Linux kann Zugriffe gezielt verteilen, ohne alles für alle zu öffnen.

## Warum das für Sicherheit wichtig ist

Ein Mehrbenutzersystem braucht klare Regeln. Ohne Benutzer- und Gruppenmodell wäre kaum nachvollziehbar,

- wer auf welche Daten zugreifen darf,
- wer Konfigurationen verändern kann,
- oder welche Bereiche privat bleiben sollen.

## Typische Fehler

- Benutzer nur als Anmeldenamen zu verstehen.
- Gruppen mit Dateitypen oder Ordnern zu verwechseln.
- Zu glauben, alle Rechte müssten pro Benutzer einzeln gesetzt werden.
- Den Zusammenhang zwischen Benutzer, Gruppe und Rechten zu trennen.

## Merksätze

- Ein Benutzer ist eine Identität im System.
- Eine Gruppe bündelt Benutzer in einem gemeinsamen Rechtekontext.
- Rechte werden in Linux typischerweise für Besitzer, Gruppe und andere betrachtet.
- Benutzer und Gruppen sind eine Grundlage für Ordnung und Sicherheit im System.
