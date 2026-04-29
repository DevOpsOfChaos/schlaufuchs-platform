---
title: "SSH Public-Key-Authentifizierung"
description: "SSH Public-Key-Authentifizierung nutzt ein Schlüsselpaar, damit ein Server einen Client erkennen kann, ohne ein Passwort über die Verbindung zu senden."
subject: "linux"
section: "SSH"
topicPath: ["ssh-public-key-authentifizierung", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "SSH"]
draft: false
---
# SSH Public-Key-Authentifizierung

SSH Public-Key-Authentifizierung nutzt ein Schlüsselpaar, damit ein Server einen Client erkennen
kann, ohne ein Passwort über die Verbindung zu senden. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich SSH zu den Begriffen, die viele spätere Spezialfälle verständlicher
machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang: Was wird
beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und wo liegen
typische Grenzen?

## Zentrale Teilaspekte

- Der private Schlüssel bleibt lokal und muss geschützt werden.
- Der öffentliche Schlüssel liegt auf dem Server in authorized_keys.
- Passphrasen und Agenten erhöhen Sicherheit und Bedienbarkeit.
- Dateirechte entscheiden, ob SSH Schlüsseldateien akzeptiert.

## Beispiel im Zusammenhang

Ein Nutzer meldet sich per SSH an, weil sein öffentlicher Schlüssel auf dem Server hinterlegt
ist und der private Schlüssel lokal entsperrt werden kann.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

Ein öffentlicher Schlüssel ist nicht geheim. Der private Schlüssel ist das schützenswerte
Element.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Häufig werden Rechte auf .ssh oder authorized_keys zu offen gesetzt, wodurch die Anmeldung
scheitert.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

SSH Public-Key-Authentifizierung ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
