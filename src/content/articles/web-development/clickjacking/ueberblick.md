---
title: "Clickjacking"
description: "Clickjacking beschreibt Angriffe, bei denen Nutzer auf sichtbare Elemente klicken, tatsächlich aber eine andere eingebettete Seite bedienen."
subject: "web-development"
section: "Sicherheit"
topicPath: ["clickjacking", "ueberblick"]
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
# Clickjacking

Clickjacking beschreibt Angriffe, bei denen Nutzer auf sichtbare Elemente klicken, tatsächlich
aber eine andere eingebettete Seite bedienen. Diese Überblicksseite ordnet das Thema ruhig und allgemein ein. Sie ist nicht als Aufgabe oder Einzelfall gedacht, sondern als Einstieg, bevor konkrete Situationen, Werkzeuge, Formeln oder Fehlersuchen betrachtet werden.

## Einordnung

Das Thema gehört im Bereich Sicherheit zu den Begriffen, die viele spätere Spezialfälle
verständlicher machen. Es beschreibt nicht nur ein einzelnes Detail, sondern einen Zusammenhang:
Was wird beobachtet, warum ist es wichtig, welche Größen oder Entscheidungen spielen hinein und
wo liegen typische Grenzen?

## Zentrale Teilaspekte

- Unsichtbare oder überlagerte iframes sind ein typisches Mittel.
- Header wie X-Frame-Options oder CSP frame-ancestors können Einbettung begrenzen.
- Besonders kritisch sind Aktionen mit Konto-, Zahlungs- oder Admin-Funktion.
- Visuelle Sicherheit allein reicht nicht aus.

## Beispiel im Zusammenhang

Ein Button wirkt harmlos, liegt aber über einer eingebetteten fremden Seite, auf der der Klick
eine unerwünschte Aktion auslöst.

Das Beispiel zeigt, dass der Begriff nicht isoliert betrachtet werden sollte. In der Praxis hängt er mit Rahmenbedingungen, Messung, Darstellung, Bedienung oder Modellannahmen zusammen. Wer nur einen einzelnen Wert, Befehl oder sichtbaren Effekt betrachtet, übersieht leicht die eigentliche Ursache.

## Abgrenzung

Clickjacking ist kein Datenleck durch falsche API-Antworten, sondern ein Angriff auf die
Benutzerinteraktion.

Diese Abgrenzung ist wichtig, weil viele Lernseiten später einzelne Werkzeuge oder Sonderfälle behandeln. Der Überblick hilft, solche Spezialfälle nicht mit dem ganzen Thema zu verwechseln.

## Häufige Missverständnisse

Oft wird nur auf Login-Sicherheit geachtet, während schützenswerte Aktionen weiterhin
eingebettet werden können.

Ein zweites Missverständnis besteht darin, das Thema nur als Rezept zu behandeln. Gerade bei Grundbegriffen ist aber entscheidend, die Voraussetzungen und Grenzen zu kennen. Dadurch wird klarer, wann ein Verfahren, eine Einstellung oder eine Erklärung wirklich passt.

## Merksatz

Clickjacking ist ein Orientierungsbegriff: Er hilft, Beobachtungen zu sortieren, typische Entscheidungen zu begründen und Spezialfälle in einen größeren Zusammenhang einzuordnen.
