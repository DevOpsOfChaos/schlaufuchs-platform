---
title: "UART-Baudrate und Framing"
description: "UART-Kommunikation verwendet eine vereinbarte Baudrate und ein Framing aus Startbit, Datenbits, optionaler Parität und Stopbit."
subject: elektrotechnik
section: "Schnittstellen"
topicPath:
  - "uart-baudrate-und-framing"
  - "ueberblick"
learningGoals:
  - "Du kannst UART-Baudrate und Framing als allgemeinen Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte, typische Beispiele und wichtige Abgrenzungen."
  - "Du erkennst häufige Missverständnisse, bevor Spezialfälle oder Aufgaben folgen."
practiceIdeas: []
commonMistakes:
  - "Oft wird eine serielle Verbindung als reine Kabelverbindung betrachtet. Ohne passende Framing-Parameter ist sie nicht interpretierbar."
keyTakeaways:
  - "UART-Kommunikation verwendet eine vereinbarte Baudrate und ein Framing aus Startbit, Datenbits, optionaler Parität und Stopbit."
  - "Ein guter Überblick trennt Begriff, Zweck, Einsatzgrenzen und typische Fehlerbilder."
  - "Spezialfälle werden verständlicher, wenn das allgemeine Konzept vorher klar ist."
recognizeSignals:
  - "Es geht um UART-Baudrate und Framing, wenn Begriffe, Entscheidungen oder Fehlerbilder dieses Themas die Erklärung bestimmen."
  - "Viele Einzelfälle wirken unübersichtlich, solange der Grundbegriff fehlt."
selfCheckPoints:
  - "Kann ich UART-Baudrate und Framing in eigenen Worten erklären?"
  - "Kann ich ein Beispiel, eine Grenze und ein typisches Missverständnis nennen?"
level: einfach
tags:
  - "elektrotechnik"
  - "uart"
  - "serielle kommunikation"
draft: false
---

# UART-Baudrate und Framing

UART-Kommunikation verwendet eine vereinbarte Baudrate und ein Framing aus Startbit, Datenbits,
optionaler Parität und Stopbit. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Schnittstellen zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- Sender und Empfänger müssen dieselbe Baudrate erwarten.
- Kleine Taktabweichungen können bei längeren Frames zu Fehlern führen.
- Framing legt fest, wie einzelne Bytes auf der Leitung erkannt werden.
- Pegelstandard und Steckverbinder sind getrennte Fragen.

## Beispiel im Zusammenhang

Ein Terminal zeigt unlesbare Zeichen, obwohl TX und RX verbunden sind. Häufig passen Baudrate,
Datenbits oder Pegel nicht zusammen.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

UART beschreibt nicht automatisch RS-232, USB oder TTL-Pegel. Das sind unterschiedliche
physische Umsetzungen.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Oft wird eine serielle Verbindung als reine Kabelverbindung betrachtet. Ohne passende Framing-
Parameter ist sie nicht interpretierbar.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

UART-Baudrate und Framing ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
