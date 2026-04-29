---
title: "CI und CD"
description: "Allgemeiner Überblick über Continuous Integration, Continuous Delivery und automatisierte Qualitätssicherung."
subject: "informatik"
section: "Softwareentwicklung"
topicPath: ["ci-und-cd", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Softwareentwicklung"]
draft: false
---
# CI und CD

![Schaubild zu CI und CD.](/schlaufuchs-platform/images/overviews/v149/ci-und-cd.svg)

*Das Schaubild zeigt Build, Test und Auslieferung als Pipeline.*



Continuous Integration prüft Änderungen regelmäßig automatisch. Continuous Delivery oder Deployment erweitert dies um die kontrollierte Auslieferung von Artefakten.

Automatisierte Pipelines helfen, Fehler früh zu finden und wiederkehrende Arbeit zuverlässig auszuführen.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- CI führt typischerweise Tests, Builds und statische Prüfungen aus.
- CD bereitet Releases oder Deployments vor.
- Klare Statussignale machen sichtbar, ob ein Stand auslieferbar ist.

## Abgrenzung

CI/CD ersetzt keine guten Tests und keine fachliche Prüfung. Eine Pipeline ist nur so hilfreich wie die Prüfungen, die sie wirklich ausführt.

## Beispiele

- Ein Pull Request startet automatisch Tests.
- Ein Push auf den Hauptbranch baut und veröffentlicht eine statische Seite.

## Häufiges Missverständnis

Häufig wird eine grüne Pipeline mit vollständiger Qualität gleichgesetzt. Sie zeigt nur, dass die definierten Checks bestanden wurden.

## Kurz zusammengefasst

CI/CD automatisiert Prüfung und Auslieferung. Gute Pipelines sind schnell, verständlich und aussagekräftig.
