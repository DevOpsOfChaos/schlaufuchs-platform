---
title: "Schichtenmodell in Software"
description: "Überblick über Schichtenmodelle als Mittel zur Trennung von Darstellung, Fachlogik, Infrastruktur und Datenzugriff."
subject: "informatik"
section: "Softwarearchitektur"
topicPath: ["schichtenmodell-in-software", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Softwarearchitektur"]
draft: false
---
# Schichtenmodell in Software

Ein Schichtenmodell ordnet Software nach Verantwortlichkeiten. Statt alle Aufgaben in einem unübersichtlichen Block zu vermischen, trennt es Darstellung, Anwendungslogik, Fachregeln, Infrastruktur und Datenzugriff.

![Schichtenmodell mit Darstellung, Anwendung, Domäne und Infrastruktur.](/schlaufuchs-platform/images/overviews/v146/schichtenmodell-in-software.svg)

*Schichtenmodell mit Darstellung, Anwendung, Domäne und Infrastruktur.*

## Grundidee

Eine typische Anwendung besitzt eine Darstellungsschicht, eine Anwendungsschicht, eine Fach- oder Domänenschicht und eine Infrastrukturschicht. Die Darstellung nimmt Eingaben entgegen und zeigt Ergebnisse. Die Anwendungsschicht koordiniert Abläufe. Die Domäne enthält fachliche Regeln. Infrastruktur bindet Datenbanken, Dateien, APIs oder externe Dienste an.

## Bedeutung im Zusammenhang

Der Wert liegt in klaren Abhängigkeiten. Fachlogik sollte nicht direkt von einem bestimmten Webframework oder einer Datenbank abhängen müssen. Dadurch lassen sich Tests, Austauschbarkeit und Wartung verbessern. Gleichzeitig darf ein Schichtenmodell nicht mechanisch übertrieben werden. Kleine Programme brauchen nicht automatisch dieselbe Tiefe wie große Systeme.

## Typische Anwendung

Entscheidend ist die Frage, welche Entscheidung an welcher Stelle getroffen wird. Validierung, Berechtigungen, Datenformate und Persistenz dürfen nicht zufällig in der erstbesten Datei landen.

## Abgrenzung

Eine Ordnerstruktur allein erzeugt keine Architektur. Wenn jede Schicht beliebig auf jede andere zugreift, bleibt nur eine optische Sortierung ohne klare Verantwortung.

## Woran man das Thema erkennt

Typische Hinweise sind Begriffe, bei denen nicht nur ein einzelner Wert gesucht wird, sondern ein Zusammenhang: Quelle und Ziel, Eingang und Ausgang, Ursache und Wirkung, Darstellung und Bedeutung oder Messung und Interpretation. Genau dann hilft eine Überblicksseite, bevor Spezialfälle behandelt werden.

## Merksatz

Eine gute Übersicht reduziert Details nicht, um ungenau zu werden, sondern um die tragende Struktur sichtbar zu machen.
