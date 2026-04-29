---
title: "Sicherheit und Authentifizierung"
description: "Überblick über Authentifizierung, Autorisierung und grundlegende Sicherheitsziele in Softwaresystemen."
subject: "informatik"
section: "Sicherheit"
topicPath: ["sicherheit-und-authentifizierung", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Sicherheit"]
draft: false
---
# Sicherheit und Authentifizierung

![Schaubild zu Sicherheit und Authentifizierung.](/schlaufuchs-platform/images/overviews/v148/sicherheit-und-authentifizierung.svg)

*Das Schaubild verbindet Identität, Prüfung, Rechte und Zugriff.*



## Grundbegriffe
Sicherheit in Softwaresystemen betrifft Schutz vor ungewolltem Zugriff, Veränderung, Ausfall und Missbrauch. Authentifizierung prüft, wer eine Person oder ein System ist. Autorisierung entscheidet, welche Aktionen danach erlaubt sind.

## Sicherheitsziele
Drei klassische Ziele sind Vertraulichkeit, Integrität und Verfügbarkeit. Vertraulichkeit schützt Daten vor unbefugtem Lesen. Integrität schützt vor unbemerkter Veränderung. Verfügbarkeit stellt sicher, dass Systeme und Daten nutzbar bleiben.

## Authentifizierung
Passwörter, Schlüssel, Tokens oder Mehrfaktorverfahren sind Mittel zur Authentifizierung. Ihre Sicherheit hängt nicht nur vom Verfahren ab, sondern auch von Speicherung, Übertragung, Lebensdauer und Wiederherstellungswegen. Ein schwaches Zurücksetzen kann ein starkes Passwort entwerten.

## Autorisierung
Nach erfolgreicher Anmeldung müssen Berechtigungen geprüft werden. Rollen, Besitzverhältnisse und konkrete Regeln bestimmen, ob eine Aktion erlaubt ist. Diese Prüfung muss serverseitig erfolgen; eine ausgeblendete Schaltfläche in der Oberfläche genügt nicht.

## Einordnung
Sicherheit ist kein einzelnes Modul, sondern eine Eigenschaft des Gesamtsystems. Eingabeprüfung, Fehlerbehandlung, Protokollierung, Updates, Geheimnisverwaltung und klare Rechte gehören zusammen. Gute Systeme gehen davon aus, dass Fehler passieren können, und begrenzen deren Auswirkungen.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
