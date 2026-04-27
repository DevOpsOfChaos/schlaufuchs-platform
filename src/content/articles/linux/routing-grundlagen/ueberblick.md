---
title: "Routing-Grundlagen"
description: "Allgemeiner Überblick über routing-grundlagen und die wichtigsten Zusammenhänge."
subject: "linux"
section: "Netzwerk"
topicPath:
  - "routing-grundlagen"
learningGoals:
  - "Du kannst den Begriff allgemein erklären und in einen größeren Zusammenhang einordnen."
  - "Du kennst wichtige Teilaspekte, typische Anwendungen und sinnvolle Abgrenzungen."
  - "Du erkennst häufige Missverständnisse und kannst sie vermeiden."
practiceIdeas: []
commonMistakes:
  - "Häufig wird ein Namensproblem vermutet, obwohl Gateway oder Route fehlen."
keyTakeaways:
  - "Routing erklärt, warum Erreichbarkeit mehr ist als eine gültige IP-Adresse."
  - "Routing ist nicht dasselbe wie DNS; DNS findet Namen, Routing findet Wege."
recognizeSignals:
  - "Es geht um Begriffe, Grundlagen, Einordnung oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ohne Spezialfall und ohne Rechenaufgabe erklären?"
  - "Kann ich ein passendes Beispiel nennen und eine klare Abgrenzung formulieren?"
level: "mittel"
tags:
  - "linux"
  - "netzwerk"
  - "routing"
  - "gateway"
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
