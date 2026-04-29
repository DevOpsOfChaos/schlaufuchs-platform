---
title: "Message Broker"
description: "Allgemeiner Überblick über message broker und die wichtigsten Zusammenhänge."
subject: "informatik"
section: "Architektur"
topicPath: ["message-broker", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Architektur"]
draft: false
---
# Message Broker

Ein Message Broker vermittelt Nachrichten zwischen Sendern und Empfängern.

Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist als Einstieg gedacht, bevor einzelne Spezialfälle, Aufgaben oder konkrete Werkzeuge betrachtet werden.

## Bedeutung und Zusammenhang

In der Praxis wird dieses Thema wichtig, wenn Einzelbeobachtungen nicht isoliert bleiben sollen. Es hilft, Begriffe sauber zu verwenden, Entscheidungen zu begründen und typische Fehlerquellen früh zu erkennen.

## Wichtige Teilaspekte

- Er kann Systeme entkoppeln und Lastspitzen puffern.
- Queues, Topics und Zustellgarantien bestimmen das Verhalten.
- Fehlerfälle wie Wiederholung und tote Nachrichten müssen geplant werden.

## Abgrenzung

Ein Broker löst nicht automatisch Konsistenzprobleme.

## Beispiele

- Ein Dienst legt eine Aufgabe in eine Queue.
- Mehrere Dienste abonnieren Statusereignisse.

## Häufiges Missverständnis

Häufig wird ein Broker eingeführt, ohne Nachrichtenformate und Monitoring zu klären.

## Kurz zusammengefasst

Message Broker helfen bei asynchroner und robuster Kommunikation.
