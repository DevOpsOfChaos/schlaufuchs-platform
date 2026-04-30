---
title: "Web-Performance"
description: "Überblick über Web-Performance als Zusammenspiel aus Ladezeit, Reaktionsfähigkeit und wahrgenommener Geschwindigkeit."
subject: "web-development"
section: "Qualität und Betrieb"
topicPath: ["web-performance", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "Qualität und Betrieb"]
draft: false
---
# Web-Performance

![Schaubild zu Web-Performance.](/schlaufuchs-platform/images/overviews/v148/web-performance.svg)

*Das Schaubild zeigt zentrale Einflussfaktoren auf Ladezeit und Reaktionsgeschwindigkeit.*


## Begriff
Web-Performance beschreibt, wie schnell und flüssig eine Webseite für Nutzende wirkt. Dazu gehören erste sichtbare Inhalte, vollständiges Laden, stabile Darstellung und schnelle Reaktion auf Eingaben. Performance ist damit ein Teil der Benutzerfreundlichkeit.

## Laden
Beim Laden zählen HTML, CSS, JavaScript, Bilder, Schriftarten und externe Anfragen. Große Bilder, blockierende Skripte oder viele unnötige Ressourcen verzögern den ersten nutzbaren Eindruck. Caching, Komprimierung und passende Bildgrößen helfen, aber nur, wenn die eigentlichen Inhalte sinnvoll priorisiert sind.

## Rendering
Der Browser muss DOM, CSS und Layout berechnen. Häufige Layoutänderungen, komplexe Selektoren oder große DOM-Bäume können Darstellung verlangsamen. Besonders problematisch sind nachträgliche Verschiebungen, weil sie die Orientierung stören.

## Interaktion
Eine Seite kann schnell sichtbar sein und trotzdem träge wirken, wenn JavaScript lange den Hauptthread blockiert. Eingaben, Klicks und Animationen brauchen freie Rechenzeit. Deshalb ist es wichtig, große Aufgaben aufzuteilen und unnötige Skripte zu vermeiden.

## Messung
Optimierung ohne Messung führt leicht an der Ursache vorbei. Entwicklerwerkzeuge, Lighthouse, Netzwerkansicht und reale Nutzungsdaten zeigen unterschiedliche Perspektiven. Gute Performance-Arbeit beginnt mit der Frage, welches Problem für Nutzende tatsächlich spürbar ist.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
