---
title: "Datenformate"
description: "Allgemeiner Überblick über Datenformate, Struktur, Austausch und typische Beispiele."
subject: informatik
section: "Daten und Formate"
topicPath:
  - "datenformate"
  - "ueberblick"
learningGoals:
  - "Du kannst Datenformate grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Datenformate nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Datenformate beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Datenformate, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Datenformate in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "informatik"
  - "datenformate"
  - "json"
  - "csv"
draft: false
---
# Datenformate

![Schaubild zu Datenformaten.](/schlaufuchs-platform/images/overviews/v149/datenformate.svg)

*Das Schaubild vergleicht Strukturierung und Austausch in typischen Formaten.*



Ein Datenformat legt fest, wie Informationen gespeichert oder übertragen werden. Es beschreibt Struktur, Syntax und oft auch Erwartungen an Datentypen oder Bedeutung.

## Bedeutung

Datenformate ermöglichen Austausch zwischen Programmen. Je nach Zweck sind Lesbarkeit, Kompaktheit, Genauigkeit, Streamingfähigkeit oder Schema wichtig.

## Typische Teilaspekte

- **Textformate:** JSON, CSV, XML oder YAML sind mit Textwerkzeugen lesbar.
- **Binärformate:** Binäre Formate können kompakt und effizient sein, sind aber weniger direkt lesbar.
- **Schema:** Ein Schema beschreibt erlaubte Felder, Typen und Strukturen.
- **Kompatibilität:** Änderungen am Format können bestehende Programme beeinflussen.

## Beispiel

Eine Web-API liefert häufig JSON, weil Objekte, Listen, Zahlen und Zeichenketten gut abbildbar sind.

## Abgrenzung

Ein Format ist nicht automatisch ein Datenmodell. Es beschreibt die äußere Darstellung, nicht unbedingt alle fachlichen Regeln.

## Häufige Missverständnisse

Häufig werden CSV-Dateien unterschätzt. Trennzeichen, Anführungszeichen, Zeilenumbrüche und Encoding können echte Probleme erzeugen.

## Einordnung im Gesamtzusammenhang

Datenformate verbinden Schnittstellen, Datenbanken, Webentwicklung, Import/Export und langfristige Wartbarkeit.
