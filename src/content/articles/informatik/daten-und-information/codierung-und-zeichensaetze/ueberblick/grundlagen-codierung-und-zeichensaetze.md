---
title: "Codierung und Zeichensätze – Überblick"
description: "Ein allgemeiner Überblick darüber, wie Zeichen technisch als Daten gespeichert werden und warum Zeichensätze wichtig sind."
subject: informatik
section: "Daten und Information"
topicPath:
  - daten-und-information
  - codierung-und-zeichensaetze
  - ueberblick
learningGoals:
  - Du kennst die Grundidee von Codierung.
  - Du verstehst, warum Zeichensätze für Texte wichtig sind.
  - Du kannst typische Darstellungsfehler einordnen.
practiceIdeas:
  - Vergleiche sichtbare Zeichen mit ihrer technischen Speicherung.
  - Prüfe, warum Umlaute bei falscher Codierung kaputt aussehen können.
commonMistakes:
  - Zeichen und gespeicherte Bytes gleichzusetzen.
  - UTF-8 nur als Detail statt als wichtige Textgrundlage zu behandeln.
keyTakeaways:
  - Computer speichern Zeichen als Zahlen oder Bytefolgen.
  - Eine falsche Codierung kann sichtbare Texte beschädigen.
recognizeSignals:
  - Es geht um Text, Umlaute, Unicode, ASCII oder UTF-8.
selfCheckPoints:
  - Kann ich erklären, warum ein Zeichen technisch codiert werden muss?
  - Kann ich sagen, warum UTF-8 wichtig ist?
tags:
  - informatik
  - codierung
  - zeichensaetze
  - utf-8
level: einfach
draft: false
---

# Codierung und Zeichensätze

Computer speichern Texte nicht direkt als Buchstaben, sondern als Zahlen. Eine **Codierung** legt fest, welche Zahl oder Bytefolge für welches Zeichen steht. Ein **Zeichensatz** beschreibt die Menge der Zeichen, die dargestellt werden können.

## Grundprinzip

Damit ein Computer den Buchstaben „A“ speichern kann, braucht er eine eindeutige technische Darstellung. Beim Anzeigen wird diese Darstellung wieder in ein sichtbares Zeichen übersetzt. Codierung ist also eine Vereinbarung zwischen Speicherung und Darstellung.

## Warum Zeichensätze wichtig sind

Wenn zwei Programme unterschiedliche Codierungen erwarten, können Zeichen falsch erscheinen. Besonders sichtbar wird das bei Umlauten und Sonderzeichen. Aus „ä“ kann dann eine fehlerhafte Zeichenfolge werden. Das Problem liegt nicht am Buchstaben selbst, sondern an der falschen Interpretation der gespeicherten Bytes.

## ASCII, Unicode und UTF-8

ASCII ist ein älterer Zeichensatz für grundlegende englische Zeichen. Für moderne Texte reicht ASCII allein nicht aus. Unicode beschreibt eine sehr große Menge an Zeichen aus vielen Sprachen. UTF-8 ist eine verbreitete Art, Unicode-Zeichen in Bytes zu speichern.

## Merksatz

Ein Zeichen ist für den Computer eine vereinbarte technische Darstellung. Wird diese Darstellung falsch gelesen, erscheint der Text fehlerhaft.
