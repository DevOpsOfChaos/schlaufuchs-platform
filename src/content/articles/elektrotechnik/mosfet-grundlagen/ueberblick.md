---
title: "MOSFET-Grundlagen"
description: "Überblick über MOSFETs als spannungsgesteuerte Schalter in elektronischen Schaltungen."
subject: "elektrotechnik"
section: "Bauteile"
topicPath: ["mosfet-grundlagen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Bauteile"]
draft: false
---
# MOSFET-Grundlagen

![Schaubild zu MOSFET-Grundlagen.](/schlaufuchs-platform/images/overviews/v149/mosfet-grundlagen.svg)

*Das Schaubild ordnet Gate, Lastpfad und Steuerwirkung ein.*



## Begriff und Zweck

Ein MOSFET ist ein Transistor, der über eine Gate-Spannung gesteuert wird. Er wird häufig eingesetzt, um Lasten effizient zu schalten, weil er im eingeschalteten Zustand sehr kleinen Widerstand haben kann. Besonders bei LEDs, Motoren, Heizungen oder größeren Strömen ist der MOSFET ein wichtiges Bauteil.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- Gate-Spannung und Schwellspannung
- Drain-Source-Widerstand
- Verlustleistung und Kühlung
- High-Side- und Low-Side-Schaltung

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

Ein Logiklevel-MOSFET kann direkt mit einem Mikrocontroller-Pegel schaltbar sein, wenn seine Datenblattwerte dazu passen. In einer Low-Side-Schaltung liegt die Last an Plus, der MOSFET schaltet die Verbindung nach Masse. Bei schnellen Schaltvorgängen können Gate-Widerstände und saubere Masseführung wichtig werden.

## Abgrenzung

Die Gate-Schwellspannung ist nicht die Spannung, bei der der MOSFET bereits gut als Leistungsschalter arbeitet. Entscheidend sind Datenblattangaben zum Durchlasswiderstand bei der tatsächlich verfügbaren Gate-Spannung. Ein MOSFET kann außerdem durch elektrostatische Entladung oder Überspannung beschädigt werden.

## Häufige Missverständnisse

Ein häufiger Irrtum ist, jeden MOSFET mit jedem Mikrocontroller-Pin vollständig einschalten zu können. Ebenso wird Verlustleistung oft unterschätzt: Auch ein kleiner Widerstand erzeugt bei hohem Strom Wärme.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
