---
title: "Cookies, Sessions und Token – Überblick"
description: "Ein allgemeiner Überblick über Cookies, Sitzungen und Token als Bausteine für Zustand und Anmeldung im Web."
subject: "web-development"
section: "Websicherheit"
topicPath: ["websicherheit", "cookies-sessions-und-token", "ueberblick", "grundlagen-cookies-sessions-und-token"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "Websicherheit"]
draft: false
---
# Cookies, Sessions und Token

Webseiten verwenden **Cookies**, **Sessions** und **Token**, um Informationen über mehrere Anfragen hinweg zu erhalten. Das ist nötig, weil HTTP grundsätzlich zustandslos ist: Jede Anfrage steht zunächst für sich.

## Cookies

Ein Cookie ist ein kleiner Datensatz, den der Browser speichert und bei passenden Anfragen wieder mitsendet. Cookies können zum Beispiel eine Sitzungskennung enthalten. Sie sollten nicht unkritisch mit sensiblen Daten gefüllt werden.

## Sessions

Eine Session beschreibt einen Zustand auf Serverseite. Der Server speichert zum Beispiel, welcher Benutzer angemeldet ist. Der Browser erhält meist nur eine Kennung, mit der der Server die passende Session wiederfindet.

## Token

Ein Token ist ein Nachweis oder Schlüssel, der bestimmte Rechte ausdrücken kann. Token werden häufig bei APIs und modernen Webanwendungen genutzt. Token müssen geschützt werden, weil ein gestohlenes Token oft wie eine gültige Anmeldung wirken kann.

## Merksatz

Cookies, Sessions und Token lösen das Zustandsproblem im Web, müssen aber immer mit Sicherheit und Datenschutz zusammengedacht werden.
