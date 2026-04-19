---
title: Datei-Handle und Dateiinhalt fachlich trennen
description: Erkläre die Rolle des Handles im Dateizugriff und trenne Öffnen, Bearbeiten und Schließen sauber.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - datei-handle-und-ressource-beim-php-dateizugriff-verstehen
  - datei-handle-und-dateiinhalt-fachlich-trennen
taskId: INF-PHP-FILES-004
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
hintPoints:
  - "Trenne Öffnen, Bearbeiten und Schließen sauber."
  - "Lies das Handle als Zugriffskanal, nicht als Inhalt."
selfCheckPoints:
  - "Habe ich die zentrale Unterscheidung der Aufgabe sauber benannt?"
  - "Habe ich meinen Ablauf oder Vergleich nachvollziehbar begründet?"
transferIdeas:
  - "Übertrage die Denkweise auf einen ähnlichen kleinen PHP-Ausschnitt."
  - "Formuliere die Logik zusätzlich in einem eigenen Mini-Beispiel."
reflectionPrompt: "Welche fachliche Trennung war hier am wichtigsten?"
---

## Aufgabe 1: Begriffe trennen

Erkläre kurz den Unterschied zwischen:

- Dateiname,
- Datei-Handle,
- Dateiinhalt.

## Aufgabe 2: Ablauf beschreiben

Warum taucht dieselbe Handle-Variable oft in <code>fgets</code>, <code>feof</code> und <code>fclose</code> wieder auf?

## Aufgabe 3: Denkfehler prüfen

Warum liest <code>fopen</code> nicht automatisch schon alle Zeilen der Datei?
