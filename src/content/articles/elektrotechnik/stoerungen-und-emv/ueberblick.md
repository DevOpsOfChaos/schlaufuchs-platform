---
title: "Störungen und EMV"
description: "Allgemeiner Überblick über elektrische Störungen, elektromagnetische Verträglichkeit und robuste Schaltungen."
subject: elektrotechnik
section: "Praxis und Fehlersuche"
topicPath:
  - "stoerungen-und-emv"
  - "ueberblick"
learningGoals:
  - "Du kannst Störungen und EMV grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Störungen und EMV nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Störungen und EMV beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Störungen und EMV, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Störungen und EMV in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "elektrotechnik"
  - "emv"
  - "stoerungen"
  - "robustheit"
draft: false
---
# Störungen und EMV

Elektrische Störungen entstehen, wenn unerwünschte Signale eine Schaltung beeinflussen. Elektromagnetische Verträglichkeit, kurz EMV, beschreibt, dass Geräte ihre Umgebung möglichst wenig stören und selbst ausreichend störfest bleiben.

## Bedeutung

Störungen können über Leitungen, gemeinsame Massepfade, Versorgung, elektromagnetische Felder oder schnelle Schaltvorgänge eingekoppelt werden. In der Praxis zeigen sie sich als falsche Messwerte, Resets, Kommunikationsfehler oder sporadische Ausfälle.

## Typische Teilaspekte

- **Kopplungswege:** Störungen können leitungsgebunden oder abgestrahlt auftreten.
- **Schaltflanken:** Schnelle Strom- und Spannungsänderungen erzeugen besonders leicht Störanteile.
- **Masseführung:** Gemeinsame Rückleiter können unerwünschte Spannungsabfälle erzeugen.
- **Entkopplung:** Kondensatoren, Filter und saubere Leitungsführung helfen gegen viele typische Probleme.

## Beispiel

Ein Relais oder Motor kann beim Schalten eine Spannungsspitze erzeugen, die einen Mikrocontroller zurücksetzt. Eine Freilaufdiode, getrennte Versorgung oder bessere Masseführung kann das Problem entschärfen.

## Abgrenzung

EMV ist nicht nur ein Thema großer Industrieanlagen. Auch kleine Mikrocontroller-Aufbauten können empfindlich auf Störungen reagieren.

## Häufige Missverständnisse

Ein häufiger Irrtum ist die Suche nach einem reinen Softwarefehler, obwohl die Ursache in Versorgung, Leitungen oder Schaltflanken liegt.

## Einordnung im Gesamtzusammenhang

Störungen und EMV verbinden Schaltungsentwurf, Layout, Messpraxis, Stromversorgung und robuste Softwarefehlerbehandlung.
