---
title: "Lösung – Pure Functions für UI-Logik nutzen"
description: "Musterlösung mit fachlicher Begründung zur passenden Web-Development-Aufgabe."
subject: "web-development"
section: "JavaScript"
topicPath:
  - "javascript"
  - "module-und-struktur"
  - "pure-functions-fuer-ui-logik-nutzen"
tags:
  - "web development"
  - "javascript"
  - "tests"
  - "wartbarkeit"
  - "ui-logik"
  - "lösung"
taskId: "web-v104-pure-functions-fuer-ui-logik-nutzen"
relatedExercise: "web-development/javascript/module-und-struktur/pure-functions-fuer-ui-logik-nutzen"
draft: false
---

## Lösung

Eine gute Lösung beginnt mit der Nutzer-Situation. Das Problem ist nicht nur technisch, sondern zeigt sich daran, dass eine Person nicht sicher erkennt, was gerade passiert oder wie sie weitermachen kann.

## Mögliche Analyse

Beim Thema **Pure Functions für UI-Logik nutzen** sollte die Lösung besonders auf diese Punkte achten:

- Regeln ohne DOM testen
- Seiteneffekte begrenzen
- Rendern von Entscheiden trennen

Die schwächere Variante wäre:

- alles im Event-Handler mischen
- Logik nur durch Klicken testbar machen
- globale Zustände überall verändern

## Konkrete Verbesserung

Eine passende Verbesserung besteht darin, die Entscheidung klein und prüfbar zu machen. Statt eine große allgemeine Regel zu formulieren, wird ein klarer Zustand beschrieben und mit einer sichtbaren Reaktion verbunden.

Beispielhafte Review-Frage:

> Kann eine Nutzerin in diesem Zustand erkennen, was passiert ist, was sie als Nächstes tun kann und ob ihre Eingabe oder Aktion erhalten bleibt?

## Warum das fachlich passt

Die Lösung ist gut, weil sie Technik und Nutzerführung verbindet. Sie verlässt sich nicht darauf, dass der Idealfall immer eintritt, sondern prüft ausdrücklich Randfälle wie Fehler, kleine Bildschirme, Tastaturbedienung, asynchrone Antworten oder spätere Wartung.

## Transfer

Dieselbe Denkweise lässt sich auf andere Web-Development-Themen übertragen: Erst Zustand und Risiko benennen, dann eine kleine robuste Regel ableiten und anschließend mit einer konkreten Gegenprobe prüfen.
