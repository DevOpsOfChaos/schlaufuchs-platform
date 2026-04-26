---
title: "Lösung – Breadcrumb und Seitentitel zur Orientierung nutzen"
description: "Musterlösung mit fachlicher Begründung zur passenden Web-Development-Aufgabe."
subject: "web-development"
section: "HTML"
topicPath:
  - "html"
  - "navigation-und-menues"
  - "breadcrumb-und-seitentitel-zur-orientierung-nutzen"
tags:
  - "web development"
  - "html"
  - "navigation"
  - "breadcrumb"
  - "orientierung"
  - "lösung"
taskId: "web-v104-breadcrumb-und-seitentitel-zur-orientierung-nutzen"
relatedExercise: "web-development/html/navigation-und-menues/breadcrumb-und-seitentitel-zur-orientierung-nutzen"
draft: false
---

## Lösung

Eine gute Lösung beginnt mit der Nutzer-Situation. Das Problem ist nicht nur technisch, sondern zeigt sich daran, dass eine Person nicht sicher erkennt, was gerade passiert oder wie sie weitermachen kann.

## Mögliche Analyse

Beim Thema **Breadcrumb und Seitentitel zur Orientierung nutzen** sollte die Lösung besonders auf diese Punkte achten:

- Seitentitel beschreibt die aktuelle Seite
- Breadcrumb zeigt Hierarchie
- aria-current markiert den aktuellen Punkt

Die schwächere Variante wäre:

- Breadcrumb als Hauptnavigation missbrauchen
- Titel und H1 widersprechen lassen
- nur kryptische Slugs anzeigen

## Konkrete Verbesserung

Eine passende Verbesserung besteht darin, die Entscheidung klein und prüfbar zu machen. Statt eine große allgemeine Regel zu formulieren, wird ein klarer Zustand beschrieben und mit einer sichtbaren Reaktion verbunden.

Beispielhafte Review-Frage:

> Kann eine Nutzerin in diesem Zustand erkennen, was passiert ist, was sie als Nächstes tun kann und ob ihre Eingabe oder Aktion erhalten bleibt?

## Warum das fachlich passt

Die Lösung ist gut, weil sie Technik und Nutzerführung verbindet. Sie verlässt sich nicht darauf, dass der Idealfall immer eintritt, sondern prüft ausdrücklich Randfälle wie Fehler, kleine Bildschirme, Tastaturbedienung, asynchrone Antworten oder spätere Wartung.

## Transfer

Dieselbe Denkweise lässt sich auf andere Web-Development-Themen übertragen: Erst Zustand und Risiko benennen, dann eine kleine robuste Regel ableiten und anschließend mit einer konkreten Gegenprobe prüfen.
