---
title: "Testfallmatrix"
description: "Überblick über Testfallmatrizen als strukturierte Sicht auf Eingaben, Erwartungen, Randfälle und Risiken."
subject: "informatik"
section: "Tests"
topicPath: ["testfallmatrix", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Tests"]
draft: false
---
# Testfallmatrix

Eine Testfallmatrix ordnet Tests in Tabellenform. Sie macht sichtbar, welche Eingaben, Bedingungen, erwarteten Ergebnisse und Risiken bereits geprüft werden und welche Bereiche noch fehlen.

![Testfallmatrix mit Eingabe, Bedingung, Erwartung und Risiko.](/schlaufuchs-platform/images/overviews/v146/testfallmatrix.svg)

*Testfallmatrix mit Eingabe, Bedingung, Erwartung und Risiko.*

## Grundidee

Statt Tests nur als Liste von Namen zu sammeln, trennt die Matrix relevante Dimensionen. Dazu gehören Eingabewerte, Vorbedingungen, Benutzerrolle, Systemzustand, erwartete Ausgabe, Fehlerverhalten und Priorität. Besonders bei Formularen, Berechnungen oder APIs verhindert diese Sicht, dass wichtige Kombinationen vergessen werden.

## Bedeutung im Zusammenhang

Eine gute Matrix enthält Normalfälle, Grenzfälle und Fehlerfälle. Normalfälle zeigen, dass der übliche Ablauf funktioniert. Grenzfälle prüfen minimale, maximale oder gerade noch erlaubte Werte. Fehlerfälle prüfen ungültige Eingaben, fehlende Rechte oder unerwartete Zustände.

## Typische Anwendung

Die Matrix ersetzt keine Automatisierung, sondern hilft, sie sinnvoll zu planen. Sie kann auch zeigen, welche Tests redundant sind und wo ein einziger zusätzlicher Fall mehr Sicherheit bringt als viele ähnliche Tests.

## Abgrenzung

Mehr Testfälle bedeuten nicht automatisch bessere Qualität. Entscheidend ist, ob die Fälle unterschiedliche Risiken und relevante Kombinationen abdecken.

## Woran man das Thema erkennt

Typische Hinweise sind Begriffe, bei denen nicht nur ein einzelner Wert gesucht wird, sondern ein Zusammenhang: Quelle und Ziel, Eingang und Ausgang, Ursache und Wirkung, Darstellung und Bedeutung oder Messung und Interpretation. Genau dann hilft eine Überblicksseite, bevor Spezialfälle behandelt werden.

## Merksatz

Eine gute Übersicht reduziert Details nicht, um ungenau zu werden, sondern um die tragende Struktur sichtbar zu machen.
