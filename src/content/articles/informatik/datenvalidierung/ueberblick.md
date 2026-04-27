---
title: "Datenvalidierung"
description: "Einordnung von Datenvalidierung als Prüfung von Eingaben, Formaten und fachlichen Regeln."
subject: informatik
section: "Softwarequalität"
topicPath:
  - "datenvalidierung"
  - "ueberblick"
learningGoals:
  - "Du kannst Datenvalidierung als Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse von der Grundidee trennen."
practiceIdeas: []
commonMistakes:
  - "Häufig werden nur offensichtliche Eingaben geprüft."
keyTakeaways:
  - "Validierung schützt Systemgrenzen."
  - "Frontend-Prüfung ersetzt keine serverseitige Prüfung."
  - "Gute Validierung erklärt Fehler verständlich."
recognizeSignals:
  - "Es geht um Datenvalidierung als allgemeines Thema, nicht nur um einen Einzelfall."
  - "Begriffe, Zusammenhänge und Grenzen sollen zuerst geklärt werden."
selfCheckPoints:
  - "Kann ich Datenvalidierung in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "informatik"
  - "validierung"
  - "daten"
draft: false
---

# Datenvalidierung

Datenvalidierung prüft, ob Daten die erwartete Form und Bedeutung haben. Sie schützt Programme vor falschen Eingaben, unvollständigen Strukturen und widersprüchlichen Zuständen. Validierung findet an Grenzen statt: bei Benutzereingaben, APIs, Dateien, Datenbanken und externen Systemen.

## Einordnung

Software darf nicht davon ausgehen, dass eingehende Daten korrekt sind. Selbst interne Daten können durch alte Versionen, Fehler oder manuelle Änderungen ungültig werden. Validierung macht Annahmen explizit und verhindert, dass Fehler später schwerer zu finden sind.

## Zentrale Aspekte

- **Pflichtfelder und Datentypen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Wertebereiche und Längen:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Formatprüfung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **fachliche Regeln und Abhängigkeiten:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Ein Registrierungsformular prüft, ob eine E-Mail-Adresse angegeben wurde, ob ein Passwort lang genug ist und ob beide Passwortfelder übereinstimmen. Eine API prüft, ob JSON-Felder vorhanden sind und ob ein Statuswert erlaubt ist.

## Abgrenzung

Validierung ist nicht nur Frontend-Aufgabe. Prüfungen im Browser verbessern Bedienung, aber verbindliche Validierung muss dort stattfinden, wo Daten gespeichert oder Aktionen ausgeführt werden.

## Häufige Missverständnisse

Häufig werden nur offensichtliche Eingaben geprüft. Randfälle wie leere Strings, sehr lange Werte, falsche Zeichencodierung oder unerwartete Kombinationen bleiben offen. Ein weiterer Fehler ist, Validierung und Fehlermeldung nicht zusammen zu denken.

## Kurz zusammengefasst

- Validierung schützt Systemgrenzen.
- Frontend-Prüfung ersetzt keine serverseitige Prüfung.
- Gute Validierung erklärt Fehler verständlich.
