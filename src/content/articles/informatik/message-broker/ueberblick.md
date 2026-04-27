---
title: "Message Broker"
description: "Allgemeiner Überblick über message broker und die wichtigsten Zusammenhänge."
subject: "informatik"
section: "Architektur"
topicPath:
  - "message-broker"
learningGoals:
  - "Du kannst den Begriff allgemein erklären und in einen größeren Zusammenhang einordnen."
  - "Du kennst wichtige Teilaspekte, typische Anwendungen und sinnvolle Abgrenzungen."
  - "Du erkennst häufige Missverständnisse und kannst sie vermeiden."
practiceIdeas: []
commonMistakes:
  - "Häufig wird ein Broker eingeführt, ohne Nachrichtenformate und Monitoring zu klären."
keyTakeaways:
  - "Message Broker helfen bei asynchroner und robuster Kommunikation."
  - "Ein Broker löst nicht automatisch Konsistenzprobleme."
recognizeSignals:
  - "Es geht um Begriffe, Grundlagen, Einordnung oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ohne Spezialfall und ohne Rechenaufgabe erklären?"
  - "Kann ich ein passendes Beispiel nennen und eine klare Abgrenzung formulieren?"
level: "mittel"
tags:
  - "informatik"
  - "message broker"
  - "queues"
  - "architektur"
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
