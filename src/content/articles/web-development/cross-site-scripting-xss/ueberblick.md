---
title: "Cross-Site Scripting (XSS)"
description: "Cross-Site Scripting bezeichnet Angriffe, bei denen fremder Code im Kontext einer Webseite ausgeführt wird."
subject: "web-development"
section: "Sicherheit"
topicPath: ["cross-site-scripting-xss", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Sicherheit"]
draft: false
---
# Cross-Site Scripting (XSS)

Cross-Site Scripting bezeichnet Angriffe, bei denen fremder Code im Kontext einer Webseite
ausgeführt wird. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Sicherheit zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- Gefährlich sind ungeprüfte Daten, die als HTML oder Skript interpretiert werden.
- Escaping, Sanitizing und sichere Templates begrenzen das Risiko.
- Content Security Policy kann zusätzliche Schutzschichten bieten.
- Eingaben, gespeicherte Inhalte und URL-Parameter müssen betrachtet werden.

## Beispiel im Zusammenhang

Ein Kommentar wird ungefiltert als HTML angezeigt. Ein Angreifer kann dadurch JavaScript in den
Browser anderer Nutzer bringen.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

XSS ist nicht dasselbe wie SQL Injection. Der Angriff passiert im Browserkontext der
Webanwendung.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Häufig wird angenommen, XSS betreffe nur Formulare. Auch Markdown, URLs, Dateinamen oder
Fehlermeldungen können Einfallstore sein.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

Cross-Site Scripting (XSS) ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
