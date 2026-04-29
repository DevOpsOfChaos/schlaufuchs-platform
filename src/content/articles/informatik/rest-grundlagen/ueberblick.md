---
title: "REST-Grundlagen"
description: "Überblick über REST als Stil für ressourcenorientierte HTTP-Schnittstellen."
subject: "informatik"
section: "Schnittstellen"
topicPath: ["rest-grundlagen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Schnittstellen"]
draft: false
---
# REST-Grundlagen

REST ist ein Architekturstil für Schnittstellen, der Ressourcen in den Mittelpunkt stellt. Ressourcen werden über URLs adressiert und mit HTTP-Methoden bearbeitet.

## Einordnung

REST-Grundlagen helfen, Web-APIs verständlich und konsistent zu gestalten. Es wird gefragt, welche Ressourcen es gibt und welche Operationen fachlich sinnvoll sind.

## Zentrale Aspekte

- **Ressourcen:** Dinge wie Nutzer, Artikel oder Aufgaben werden adressierbar.
- **HTTP-Methoden:** Methoden drücken Lesen, Anlegen, Ändern oder Löschen aus.
- **Statuscodes:** Antworten nutzen standardisierte Bedeutungen.
- **Zustandslosigkeit:** Anfragen enthalten nötige Informationen.

## Beispiele und Zusammenhang

Eine API kann `GET /articles` zum Lesen und `POST /articles` zum Erstellen nutzen. Ein einzelner Artikel liegt unter `GET /articles/123`.

## Abgrenzung

REST ist nicht einfach JSON über HTTP. JSON ist ein Format, REST ein Stil.

## Häufige Missverständnisse

HTTP-Methoden werden oft ignoriert und alle Aktionen als POST-Endpunkte modelliert.

## Kurz zusammengefasst

- REST denkt in Ressourcen.
- HTTP-Methoden und Statuscodes tragen Bedeutung.
- Klare API-Struktur erleichtert Nutzung.
