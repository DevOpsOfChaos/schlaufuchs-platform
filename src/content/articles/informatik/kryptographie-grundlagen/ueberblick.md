---
title: "Kryptographie-Grundlagen"
description: "Einordnung grundlegender kryptographischer Ziele wie Vertraulichkeit, Integrität und Authentizität."
subject: "informatik"
section: "Sicherheit"
topicPath: ["kryptographie-grundlagen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Sicherheit"]
draft: false
---
# Kryptographie-Grundlagen

Kryptographie stellt Verfahren bereit, um Informationen zu schützen. Je nach Verfahren geht es um Vertraulichkeit, Integrität, Authentizität oder Nichtabstreitbarkeit. Moderne Systeme nutzen Kryptographie in Transportverschlüsselung, Passworthashes, Signaturen und Schlüsselaustausch.

## Einordnung

Kryptographie ist ein präzises Feld. Kleine Fehler in Auswahl, Parametern oder Implementierung können den Schutz stark schwächen. Deshalb werden bewährte Protokolle und Bibliotheken verwendet statt eigener Verfahren.

## Zentrale Aspekte

- **symmetrische Verschlüsselung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **asymmetrische Schlüsselpaare:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Hashfunktionen und Passworthashing:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **digitale Signaturen und Zertifikate:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

HTTPS nutzt kryptographische Verfahren, um Verbindungen zu schützen. Passwörter werden nicht entschlüsselt gespeichert, sondern mit speziellen Passwort-Hashverfahren geprüft. Digitale Signaturen können nachweisen, dass Daten nicht unbemerkt verändert wurden.

## Abgrenzung

Verschlüsselung ist nicht dasselbe wie Hashing. Ein Hash soll normalerweise nicht zurückgerechnet werden. Eine Signatur ist ebenfalls keine Geheimhaltung, sondern ein Nachweis. Die Ziele müssen vor der Wahl des Verfahrens klar sein.

## Häufige Missverständnisse

Häufig werden Passwörter mit normalen Hashfunktionen ohne Salt gespeichert. Ein weiterer Fehler ist, eigene Verschlüsselungslogik zu entwickeln. Kryptographie sollte auf geprüften Standards und Bibliotheken beruhen.

## Kurz zusammengefasst

- Kryptographie schützt unterschiedliche Sicherheitsziele.
- Hashing, Verschlüsselung und Signatur sind verschieden.
- Eigene Kryptoverfahren sind fast immer riskant.
