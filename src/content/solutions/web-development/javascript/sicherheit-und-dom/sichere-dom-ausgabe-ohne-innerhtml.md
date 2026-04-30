---
title: "Lösung – Sichere DOM-Ausgabe ohne innerHTML"
description: "Musterlösung mit fachlicher Begründung zur passenden Web-Development-Aufgabe."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "sicherheit-und-dom", "sichere-dom-ausgabe-ohne-innerhtml"]
taskId: "web-v104-sichere-dom-ausgabe-ohne-innerhtml"
relatedExercise: "src/content/exercises/web-development/javascript/sicherheit-und-dom/sichere-dom-ausgabe-ohne-innerhtml"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Lösung

Eine gute Lösung beginnt mit der Nutzer-Situation. Das Problem ist nicht nur technisch, sondern zeigt sich daran, dass eine Person nicht sicher erkennt, was gerade passiert oder wie sie weitermachen kann.

## Mögliche Analyse

Beim Thema **Sichere DOM-Ausgabe ohne innerHTML** sollte die Lösung besonders auf diese Punkte achten:

- textContent für reine Texte nutzen
- HTML nur aus vertrauenswürdigen Templates erzeugen
- Eingaben und Ausgaben getrennt prüfen

Die schwächere Variante wäre:

- Suchbegriffe mit innerHTML ausgeben
- Fehlertexte aus URL-Parametern ungefiltert einsetzen
- Sicherheit erst am Ende betrachten

## Konkrete Verbesserung

Eine passende Verbesserung besteht darin, die Entscheidung klein und prüfbar zu machen. Statt eine große allgemeine Regel zu formulieren, wird ein klarer Zustand beschrieben und mit einer sichtbaren Reaktion verbunden.

Beispielhafte Review-Frage:

> Kann eine Nutzerin in diesem Zustand erkennen, was passiert ist, was sie als Nächstes tun kann und ob ihre Eingabe oder Aktion erhalten bleibt?

## Warum das fachlich passt

Die Lösung ist gut, weil sie Technik und Nutzerführung verbindet. Sie verlässt sich nicht darauf, dass der Idealfall immer eintritt, sondern prüft ausdrücklich Randfälle wie Fehler, kleine Bildschirme, Tastaturbedienung, asynchrone Antworten oder spätere Wartung.

## Transfer

Dieselbe Denkweise lässt sich auf andere Web-Development-Themen übertragen: Erst Zustand und Risiko benennen, dann eine kleine robuste Regel ableiten und anschließend mit einer konkreten Gegenprobe prüfen.
