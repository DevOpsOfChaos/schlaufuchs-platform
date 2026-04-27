---
title: "Zeichenkodierung und Unicode"
description: "Allgemeiner Überblick über Zeichen, Codes, Unicode und typische Encoding-Probleme."
subject: informatik
section: "Daten und Formate"
topicPath:
  - "zeichenkodierung-und-unicode"
  - "ueberblick"
learningGoals:
  - "Du kannst Zeichenkodierung und Unicode grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Zeichenkodierung und Unicode nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Zeichenkodierung und Unicode beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Zeichenkodierung und Unicode, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Zeichenkodierung und Unicode in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "informatik"
  - "unicode"
  - "encoding"
  - "daten"
draft: false
---
# Zeichenkodierung und Unicode

Zeichenkodierung beschreibt, wie Schriftzeichen als Zahlen und schließlich als Bytes gespeichert werden. Unicode ist ein Zeichensystem, das sehr viele Schriftsysteme und Symbole einheitlich adressiert.

## Bedeutung

Zwischen Zeichen, Codepunkt und Bytefolge muss unterschieden werden. UTF-8 ist eine weit verbreitete Kodierung für Unicode und kann deutsche Umlaute, viele andere Sprachen und technische Symbole darstellen.

## Typische Teilaspekte

- **Zeichen:** Ein sichtbares Zeichen ist die semantische Ebene.
- **Codepunkt:** Unicode ordnet Zeichen abstrakte Nummern zu.
- **Kodierung:** UTF-8 legt fest, wie Codepunkte als Bytes gespeichert werden.
- **Mojibake:** Falsch interpretierte Bytes erzeugen sichtbaren Zeichenmüll.

## Beispiel

Das Zeichen `ä` kann korrekt in UTF-8 gespeichert sein. Wird dieselbe Bytefolge fälschlich als anderes Encoding gelesen, erscheint sie beschädigt oder als Zeichenmüll.

## Abgrenzung

Unicode ist nicht dasselbe wie UTF-8. Unicode beschreibt den Zeichenvorrat, UTF-8 eine konkrete Speicherung.

## Häufige Missverständnisse

Häufig wird Encoding erst bemerkt, wenn Umlaute kaputt angezeigt werden. Dann ist wichtig zu prüfen, an welcher Stelle Lesen, Schreiben oder Ausliefern falsch konfiguriert ist.

## Einordnung im Gesamtzusammenhang

Zeichenkodierung verbindet Textdateien, Webentwicklung, Datenbanken, Schnittstellen und internationale Software.
