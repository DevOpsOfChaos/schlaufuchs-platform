---
title: "Least Privilege"
description: "Überblick über das Prinzip der minimal nötigen Rechte in Software, Betrieb und Organisation."
subject: informatik
section: "Sicherheit"
topicPath:
  - "least-privilege"
  - "ueberblick"
learningGoals:
  - "Du kannst Least Privilege als allgemeinen Begriff einordnen."
  - "Du kennst Zweck, typische Teilaspekte und Grenzen des Themas."
  - "Du kannst häufige Missverständnisse erkennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Ein häufiger Fehler ist, Problemen durch immer mehr Rechte zu begegnen, statt die benötigte Berechtigung präzise zu klären."
keyTakeaways:
  - "Least Privilege bedeutet, dass Benutzer, Dienste und Programme nur die Rechte erhalten, die sie für ihre Aufgabe benötigen."
  - "Das Prinzip begrenzt Schäden bei Fehlern, Missbrauch oder kompromittierten Komponenten."
  - "Least Privilege darf Arbeitsfähigkeit nicht durch unverständliche Berechtigungsmodelle blockieren. Es braucht klare Rollen und Prozesse."
recognizeSignals:
  - "Es geht um Least Privilege, wenn dienstkonten erhalten eng definierte Berechtigungen."
  - "Das Thema wird relevant, wenn Beispiele wie ein Webdienst, der nur Daten lesen muss, sollte keinen Datenbanknutzer mit Schema-Änderungsrechten verwenden."
selfCheckPoints:
  - "Kann ich Least Privilege in eigenen Worten erklären?"
  - "Kann ich Zweck, Grenze und ein typisches Beispiel unterscheiden?"
  - "Kann ich ein häufiges Missverständnis zum Thema benennen?"
level: einfach
tags:
  - "informatik"
  - "sicherheit"
  - "rechte"
  - "zugriffskontrolle"
draft: false
---
# Least Privilege

## Begriff

Least Privilege bedeutet, dass Benutzer, Dienste und Programme nur die Rechte erhalten, die sie für ihre Aufgabe benötigen.

Der Begriff ist vor allem als Orientierungspunkt wichtig. Er hilft, einzelne Spezialfälle nicht isoliert zu betrachten, sondern in einen größeren Zusammenhang einzuordnen.

## Bedeutung und Zweck

Das Prinzip begrenzt Schäden bei Fehlern, Missbrauch oder kompromittierten Komponenten.

In der Praxis ist das Thema deshalb nicht nur eine einzelne Technik oder ein einzelner Rechenschritt. Es beschreibt, welche Annahmen gelten, welche Entscheidungen vorbereitet werden und welche Grenzen vor einer genaueren Behandlung sichtbar sein sollten.

## Typische Teilaspekte

- Dienstkonten erhalten eng definierte Berechtigungen.
- Schreibrechte werden getrennt von Leserechten vergeben.
- Rechte sollten regelmäßig überprüft und entfernt werden, wenn sie nicht mehr nötig sind.

Diese Teilaspekte sollten getrennt betrachtet werden. Viele Fehler entstehen, wenn ein sichtbares Ergebnis richtig aussieht, aber die zugrunde liegenden Bedingungen nicht geprüft wurden.

## Abgrenzung

Least Privilege darf Arbeitsfähigkeit nicht durch unverständliche Berechtigungsmodelle blockieren. Es braucht klare Rollen und Prozesse.

Die Abgrenzung ist wichtig, weil ähnliche Begriffe oft nebeneinander auftauchen. Ein Überblick klärt zuerst die Grundidee, bevor konkrete Verfahren, Spezialfälle oder Rechenwege sinnvoll bewertet werden können.

## Beispielhafte Einordnung

Ein Webdienst, der nur Daten lesen muss, sollte keinen Datenbanknutzer mit Schema-Änderungsrechten verwenden.

Das Beispiel zeigt nicht alle Details, macht aber die Rolle des Begriffs sichtbar: Er ordnet eine Situation, bevor entschieden wird, welche konkrete Methode oder welches Werkzeug passt.

## Häufiges Missverständnis

Ein häufiger Fehler ist, Problemen durch immer mehr Rechte zu begegnen, statt die benötigte Berechtigung präzise zu klären.

Ein gutes Verständnis beginnt deshalb nicht mit möglichst vielen Einzelfällen, sondern mit der Frage, was der Begriff leisten soll und wo seine Grenzen liegen.

## Zusammenhang mit weiteren Themen

Least Privilege steht selten allein. Es berührt benachbarte Themen wie Modellbildung, Messung, Struktur, Fehlerbehandlung oder Darstellung. Wer diese Verbindungen erkennt, kann Spezialseiten später leichter einordnen und vermeidet, aus einem Einzelfall eine falsche allgemeine Regel abzuleiten.
