---
title: "Oszilloskop und Logikanalysator"
description: "Allgemeiner Überblick über Oszilloskop, Logikanalysator und ihre Rolle bei der Untersuchung elektrischer Signale."
subject: elektrotechnik
section: "Mess- und Sensortechnik"
topicPath:
  - "oszilloskop-und-logikanalysator"
  - "ueberblick"
learningGoals:
  - "Du kannst Oszilloskop und Logikanalysator grundlegend einordnen."
  - "Du kennst typische Begriffe und Zusammenhänge."
  - "Du erkennst häufige Abgrenzungen und Missverständnisse."
practiceIdeas: []
commonMistakes:
  - "Oszilloskop und Logikanalysator nur als isolierten Einzelbegriff zu betrachten."
keyTakeaways:
  - "Oszilloskop und Logikanalysator beschreibt ein Grundkonzept mit mehreren praktischen Folgen."
  - "Der Zusammenhang wird klarer, wenn Zweck, Grenzen und typische Beispiele getrennt betrachtet werden."
recognizeSignals:
  - "Es geht um Oszilloskop und Logikanalysator, wenn typische Begriffe, Beispiele oder Abgrenzungen dieses Themas auftauchen."
selfCheckPoints:
  - "Kann ich Oszilloskop und Logikanalysator in eigenen Worten erklären und ein Beispiel nennen?"
level: einfach
tags:
  - "elektrotechnik"
  - "oszilloskop"
  - "logikanalysator"
  - "messen"
draft: false
---
# Oszilloskop und Logikanalysator

![Schaubild zu Oszilloskop und Logikanalysator.](/schlaufuchs-platform/images/overviews/v149/oszilloskop-und-logikanalysator.svg)

*Das Schaubild vergleicht analoge und digitale Beobachtung von Signalen.*



Oszilloskop und Logikanalysator sind Messgeräte für zeitliche Signalverläufe. Sie zeigen nicht nur, ob ein Signal vorhanden ist, sondern wann es wechselt, wie schnell es wechselt und ob unerwartete Zwischenzustände auftreten.

## Bedeutung

Ein Oszilloskop misst Spannungsverläufe analog und ist besonders für Flanken, Rauschen, Überschwingen und Signalform geeignet. Ein Logikanalysator betrachtet digitale Pegel und kann Protokolle oder Timingbeziehungen vieler Leitungen sichtbar machen.

## Typische Teilaspekte

- **Signalform:** Das Oszilloskop zeigt Spannungen über der Zeit.
- **Digitales Timing:** Der Logikanalysator zeigt High-Low-Verläufe und Protokollereignisse.
- **Trigger:** Ein Trigger legt fest, bei welchem Ereignis die Aufzeichnung startet.
- **Massebezug:** Jede Messung braucht einen passenden Bezugspunkt und sichere Messpraxis.

## Beispiel

Bei einem I²C-Problem kann ein Logikanalysator zeigen, ob Startbedingung, Adresse und Acknowledge auftreten. Ein Oszilloskop kann zusätzlich sichtbar machen, ob die Flanken zu langsam oder die Pegel unsauber sind.

## Abgrenzung

Ein Multimeter ersetzt diese Geräte nicht, weil es meist Mittelwerte oder langsam wechselnde Größen zeigt. Schnelle Ereignisse bleiben dadurch verborgen.

## Häufige Missverständnisse

Häufig wird nur auf den angezeigten digitalen Zustand geschaut. Für echte Fehlersuche sind Pegel, Timing, Massebezug und Messaufbau gemeinsam wichtig.

## Einordnung im Gesamtzusammenhang

Oszilloskop und Logikanalysator machen die Verbindung zwischen Theorie, Schaltplan und realem Signal sichtbar.
