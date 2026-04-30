---
title: "Compiler und Interpreter"
description: "Allgemeiner Überblick über Übersetzung, Ausführung und Laufzeitmodelle von Programmiersprachen."
subject: "informatik"
section: "Programmierung"
topicPath: ["compiler-und-interpreter", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
# Compiler und Interpreter

![Schaubild zu Compiler und Interpreter.](/schlaufuchs-platform/images/overviews/v149/compiler-und-interpreter.svg)

*Das Schaubild vergleicht Übersetzen vorab und Ausführen zur Laufzeit.*


Compiler und Interpreter sind Werkzeuge oder Laufzeitmodelle, mit denen Programmcode ausführbar wird. Ein Compiler übersetzt Code typischerweise vor der Ausführung in eine andere Form. Ein Interpreter führt Code näher am Quelltext oder an einer Zwischenform aus.

## Bedeutung

In der Praxis sind die Grenzen oft fließend. Viele moderne Sprachen nutzen Zwischenrepräsentationen, Just-in-Time-Compiler oder Kombinationen verschiedener Schritte.

## Typische Teilaspekte

- **Quellcode:** Menschen schreiben Programmtext in einer Programmiersprache.
- **Übersetzung:** Compiler prüfen und übersetzen Code in Zielcode oder Zwischenformen.
- **Ausführung:** Interpreter oder Laufzeitumgebungen führen Anweisungen aus.
- **Fehlerzeitpunkt:** Manche Fehler erscheinen beim Übersetzen, andere erst zur Laufzeit.

## Beispiel

TypeScript wird in JavaScript übersetzt, bevor der Browser es ausführt. Python-Code wird dagegen typischerweise von einer Laufzeitumgebung interpretiert oder in Bytecode verarbeitet.

## Abgrenzung

Compiler bedeutet nicht automatisch schneller und Interpreter nicht automatisch einfacher. Entscheidend sind Sprache, Laufzeit, Optimierung und Anwendung.

## Häufige Missverständnisse

Häufig werden Fehlermeldungen ohne Blick auf die Phase gelesen. Ein Syntaxfehler, Typfehler oder Laufzeitfehler hat unterschiedliche Ursachen.

## Einordnung im Gesamtzusammenhang

Compiler und Interpreter verbinden Programmiersprachen, Laufzeitumgebungen, Fehlersuche und Softwareverteilung.
