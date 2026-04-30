---
title: "Oszilloskop und Logikanalysator"
description: "Allgemeiner Überblick über Oszilloskop, Logikanalysator und ihre Rolle bei der Untersuchung elektrischer Signale."
subject: "elektrotechnik"
section: "Mess- und Sensortechnik"
topicPath: ["oszilloskop-und-logikanalysator", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Mess- und Sensortechnik"]
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
