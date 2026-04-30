---
title: "Lösung – Feature Detection statt Browser raten"
description: "Musterlösung mit fachlicher Begründung zur passenden Web-Development-Aufgabe."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "browser-apis", "feature-detection-statt-browser-raten"]
taskId: "web-v104-feature-detection-statt-browser-raten"
relatedExercise: "src/content/exercises/web-development/javascript/browser-apis/feature-detection-statt-browser-raten"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Lösung

Eine gute Lösung beginnt mit der Nutzer-Situation. Das Problem ist nicht nur technisch, sondern zeigt sich daran, dass eine Person nicht sicher erkennt, was gerade passiert oder wie sie weitermachen kann.

## Mögliche Analyse

Beim Thema **Feature Detection statt Browser raten** sollte die Lösung besonders auf diese Punkte achten:

- API-Verfügbarkeit prüfen
- Fallbacks bewusst planen
- Fehlerwege sichtbar machen

Die schwächere Variante wäre:

- Browsernamen hart verdrahten
- Mobile automatisch mit schwach gleichsetzen
- Fallbacks nie testen

## Konkrete Verbesserung

Eine passende Verbesserung besteht darin, die Entscheidung klein und prüfbar zu machen. Statt eine große allgemeine Regel zu formulieren, wird ein klarer Zustand beschrieben und mit einer sichtbaren Reaktion verbunden.

Beispielhafte Review-Frage:

> Kann eine Nutzerin in diesem Zustand erkennen, was passiert ist, was sie als Nächstes tun kann und ob ihre Eingabe oder Aktion erhalten bleibt?

## Warum das fachlich passt

Die Lösung ist gut, weil sie Technik und Nutzerführung verbindet. Sie verlässt sich nicht darauf, dass der Idealfall immer eintritt, sondern prüft ausdrücklich Randfälle wie Fehler, kleine Bildschirme, Tastaturbedienung, asynchrone Antworten oder spätere Wartung.

## Transfer

Dieselbe Denkweise lässt sich auf andere Web-Development-Themen übertragen: Erst Zustand und Risiko benennen, dann eine kleine robuste Regel ableiten und anschließend mit einer konkreten Gegenprobe prüfen.
