---
title: "Routing-Grundlagen"
description: "Allgemeiner Überblick über routing-grundlagen und die wichtigsten Zusammenhänge."
subject: "linux"
section: "Netzwerk"
topicPath: ["routing-grundlagen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "Netzwerk"]
draft: false
---
# Routing-Grundlagen

Routing entscheidet, über welchen Weg Netzwerkpakete ein Ziel erreichen.

Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist als Einstieg gedacht, bevor einzelne Spezialfälle, Aufgaben oder konkrete Werkzeuge betrachtet werden.

## Bedeutung und Zusammenhang

In der Praxis wird dieses Thema wichtig, wenn Einzelbeobachtungen nicht isoliert bleiben sollen. Es hilft, Begriffe sauber zu verwenden, Entscheidungen zu begründen und typische Fehlerquellen früh zu erkennen.

## Wichtige Teilaspekte

- Lokale Netze werden direkt erreicht, entfernte Ziele über Gateways.
- Die Routing-Tabelle enthält Regeln für Zielnetze.
- Standardrouten greifen, wenn keine spezifischere Route passt.

## Abgrenzung

Routing ist nicht dasselbe wie DNS; DNS findet Namen, Routing findet Wege.

## Beispiele

- Ein Heimrechner sendet Internetverkehr an den Router.
- Ein Server mit mehreren Netzwerkkarten benötigt klare Routen.

## Häufiges Missverständnis

Häufig wird ein Namensproblem vermutet, obwohl Gateway oder Route fehlen.

## Kurz zusammengefasst

Routing erklärt, warum Erreichbarkeit mehr ist als eine gültige IP-Adresse.
