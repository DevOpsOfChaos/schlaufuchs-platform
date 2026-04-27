---
title: "Strategy Pattern"
description: "Überblick über das Strategy Pattern zur austauschbaren Kapselung von Algorithmen oder Verhaltensvarianten."
subject: informatik
section: "Entwurfsmuster"
topicPath:
  - "strategy-pattern"
  - "ueberblick"
learningGoals:
  - "Du kannst Strategy Pattern als allgemeinen Begriff einordnen."
  - "Du kennst Zweck, typische Teilaspekte und Grenzen des Themas."
  - "Du kannst häufige Missverständnisse erkennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Ein häufiger Fehler ist, Strategien nur als künstliche Klassen aufzubauen, ohne echte Austauschbarkeit zu gewinnen."
keyTakeaways:
  - "Das Strategy Pattern kapselt verschiedene Verfahren hinter einer gemeinsamen Schnittstelle."
  - "Es erlaubt, Verhalten auszutauschen, ohne die nutzende Komponente mit vielen Fallunterscheidungen zu überfrachten."
  - "Nicht jede if-Abfrage braucht sofort ein Strategy Pattern. Das Muster lohnt sich, wenn Varianten wachsen oder unabhängig testbar sein sollen."
recognizeSignals:
  - "Es geht um Strategy Pattern, wenn strategien implementieren dieselbe Aufgabe auf unterschiedliche Weise."
  - "Das Thema wird relevant, wenn Beispiele wie ein Export kann Strategien für JSON, CSV und HTML besitzen, während der Exportablauf gleich bleibt."
selfCheckPoints:
  - "Kann ich Strategy Pattern in eigenen Worten erklären?"
  - "Kann ich Zweck, Grenze und ein typisches Beispiel unterscheiden?"
  - "Kann ich ein häufiges Missverständnis zum Thema benennen?"
level: einfach
tags:
  - "informatik"
  - "entwurfsmuster"
  - "strategy"
  - "softwaredesign"
draft: false
---
# Strategy Pattern

## Begriff

Das Strategy Pattern kapselt verschiedene Verfahren hinter einer gemeinsamen Schnittstelle.

Der Begriff ist vor allem als Orientierungspunkt wichtig. Er hilft, einzelne Spezialfälle nicht isoliert zu betrachten, sondern in einen größeren Zusammenhang einzuordnen.

## Bedeutung und Zweck

Es erlaubt, Verhalten auszutauschen, ohne die nutzende Komponente mit vielen Fallunterscheidungen zu überfrachten.

In der Praxis ist das Thema deshalb nicht nur eine einzelne Technik oder ein einzelner Rechenschritt. Es beschreibt, welche Annahmen gelten, welche Entscheidungen vorbereitet werden und welche Grenzen vor einer genaueren Behandlung sichtbar sein sollten.

## Typische Teilaspekte

- Strategien implementieren dieselbe Aufgabe auf unterschiedliche Weise.
- Die Auswahl kann per Konfiguration, Benutzerwahl oder Kontext erfolgen.
- Das Muster verbessert Erweiterbarkeit, wenn Varianten fachlich stabil unterscheidbar sind.

Diese Teilaspekte sollten getrennt betrachtet werden. Viele Fehler entstehen, wenn ein sichtbares Ergebnis richtig aussieht, aber die zugrunde liegenden Bedingungen nicht geprüft wurden.

## Abgrenzung

Nicht jede if-Abfrage braucht sofort ein Strategy Pattern. Das Muster lohnt sich, wenn Varianten wachsen oder unabhängig testbar sein sollen.

Die Abgrenzung ist wichtig, weil ähnliche Begriffe oft nebeneinander auftauchen. Ein Überblick klärt zuerst die Grundidee, bevor konkrete Verfahren, Spezialfälle oder Rechenwege sinnvoll bewertet werden können.

## Beispielhafte Einordnung

Ein Export kann Strategien für JSON, CSV und HTML besitzen, während der Exportablauf gleich bleibt.

Das Beispiel zeigt nicht alle Details, macht aber die Rolle des Begriffs sichtbar: Er ordnet eine Situation, bevor entschieden wird, welche konkrete Methode oder welches Werkzeug passt.

## Häufiges Missverständnis

Ein häufiger Fehler ist, Strategien nur als künstliche Klassen aufzubauen, ohne echte Austauschbarkeit zu gewinnen.

Ein gutes Verständnis beginnt deshalb nicht mit möglichst vielen Einzelfällen, sondern mit der Frage, was der Begriff leisten soll und wo seine Grenzen liegen.

## Zusammenhang mit weiteren Themen

Strategy Pattern steht selten allein. Es berührt benachbarte Themen wie Modellbildung, Messung, Struktur, Fehlerbehandlung oder Darstellung. Wer diese Verbindungen erkennt, kann Spezialseiten später leichter einordnen und vermeidet, aus einem Einzelfall eine falsche allgemeine Regel abzuleiten.
