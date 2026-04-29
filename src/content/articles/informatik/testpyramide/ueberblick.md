---
title: "Testpyramide"
description: "Allgemeiner Überblick über die Testpyramide und verschiedene Ebenen automatisierter Tests."
subject: "informatik"
section: "Tests"
topicPath: ["testpyramide", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Tests"]
draft: false
---
# Testpyramide

Die Testpyramide ist ein Modell, das viele schnelle, kleine Tests als Basis und weniger große, teure End-to-End-Tests an der Spitze empfiehlt.

Nicht alle Tests prüfen dasselbe. Gute Teststrategien kombinieren verschiedene Ebenen, damit Fehler früh, verständlich und kostengünstig auffallen.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Unit-Tests prüfen kleine Logikbausteine.
- Integrationstests prüfen Zusammenspiel zwischen Komponenten.
- End-to-End-Tests prüfen ganze Nutzer- oder Systemabläufe.

## Abgrenzung

Die Testpyramide ist ein Denkmodell, kein starres Gesetz. Je nach System können andere Formen wie Vertrags- oder Komponententests wichtig sein.

## Beispiele

- Eine Preisberechnung eignet sich für Unit-Tests.
- Ein Login-Fluss kann als End-to-End-Test geprüft werden.

## Häufiges Missverständnis

Häufig werden zu viele langsame Oberflächentests geschrieben. Sie finden Fehler spät und sagen oft wenig über die eigentliche Ursache.

## Kurz zusammengefasst

Die Testpyramide hilft, Tests sinnvoll zu verteilen. Viele schnelle Tests schaffen Vertrauen, wenige große Tests prüfen kritische Gesamtabläufe.
