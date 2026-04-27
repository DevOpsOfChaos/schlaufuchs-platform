---
title: "HTTP-Methoden"
description: "HTTP-Methoden beschreiben die Absicht einer Anfrage, etwa Lesen, Erstellen, Ändern oder Löschen einer Ressource."
subject: web-development
section: "HTTP"
topicPath:
  - "http-methoden"
  - "ueberblick"
learningGoals:
  - "Du kannst HTTP-Methoden als allgemeinen Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte, typische Beispiele und wichtige Abgrenzungen."
  - "Du erkennst häufige Missverständnisse, bevor Spezialfälle oder Aufgaben folgen."
practiceIdeas: []
commonMistakes:
  - "Ein häufiger Fehler ist, zustandsändernde Aktionen über GET-Links auszulösen."
keyTakeaways:
  - "HTTP-Methoden beschreiben die Absicht einer Anfrage, etwa Lesen, Erstellen, Ändern oder Löschen einer Ressource."
  - "Ein guter Überblick trennt Begriff, Zweck, Einsatzgrenzen und typische Fehlerbilder."
  - "Spezialfälle werden verständlicher, wenn das allgemeine Konzept vorher klar ist."
recognizeSignals:
  - "Es geht um HTTP-Methoden, wenn Begriffe, Entscheidungen oder Fehlerbilder dieses Themas die Erklärung bestimmen."
  - "Viele Einzelfälle wirken unübersichtlich, solange der Grundbegriff fehlt."
selfCheckPoints:
  - "Kann ich HTTP-Methoden in eigenen Worten erklären?"
  - "Kann ich ein Beispiel, eine Grenze und ein typisches Missverständnis nennen?"
level: einfach
tags:
  - "web"
  - "http"
  - "apis"
draft: false
---

# HTTP-Methoden

HTTP-Methoden beschreiben die Absicht einer Anfrage, etwa Lesen, Erstellen, Ändern oder Löschen
einer Ressource. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich HTTP zu den Begriffen, die viele spätere Spezialfälle verständlicher
machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang: Was wird
beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und wo liegen
typische Grenzen?

## Zentrale Teilaspekte

- GET dient typischerweise dem Lesen und sollte keine zustandsändernde Aktion auslösen.
- POST wird oft für Erstellen oder komplexe Aktionen genutzt.
- PUT und PATCH unterscheiden vollständige und teilweise Änderungskonzepte.
- DELETE signalisiert das Entfernen einer Ressource.

## Beispiel im Zusammenhang

Eine API kann Artikel per GET abrufen, per POST erstellen und per PATCH einzelne Felder ändern.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

Die Methode allein garantiert kein gutes API-Design. Statuscodes, Ressourcenmodell und
Idempotenz gehören dazu.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Ein häufiger Fehler ist, zustandsändernde Aktionen über GET-Links auszulösen.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

HTTP-Methoden ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
