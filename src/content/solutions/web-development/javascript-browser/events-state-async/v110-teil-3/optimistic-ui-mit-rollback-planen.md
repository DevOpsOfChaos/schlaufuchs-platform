---
title: "Lösung – Optimistic UI mit Rollback planen"
description: "Musterlösung zu Optimistic UI mit Rollback planen mit Einordnung, Abgrenzung und Gegenprobe."
subject: "web-development"
section: "JavaScript"
topicPath:
  - "javascript-browser"
  - "events-state-async"
  - "v110-teil-3"
  - "optimistic-ui-mit-rollback-planen"
taskId: "v110-web-development-optimistic-ui-mit-rollback-planen"
relatedExercise: "web-development/javascript-browser/events-state-async/v110-teil-3/optimistic-ui-mit-rollback-planen"
tags:
  - "web development"
  - "frontend"
  - "ux"
  - "javascript-browser"
  - "events-state-async"
  - "optimistic-ui-mit-rollback-planen"
draft: false
---

## Musterlösung

Das Szenario gehört zum Unterthema **Optimistic UI mit Rollback planen**.

## Einordnung

Ein Like wird sofort angezeigt, bevor der Server bestätigt. Entscheidend ist nicht das breite Kapitel, sondern die konkrete Frage, welche Trennkante geprüft werden muss.

## Abgrenzung

Die typische Verwechslung lautet: Optimistische Anzeige wird ohne Fehlerweg gebaut. Diese Verwechslung wird vermieden, indem zuerst das genaue Unterthema benannt wird.

## Prüfschritt

Plane, wie die UI bei Serverfehler zurückgesetzt wird.

Dieser Schritt ist besser als eine allgemeine Erklärung, weil er am konkreten Fall überprüfbar ist.

## Gegenprobe

Eine sinnvolle Gegenprobe ändert genau den Wert, Zustand oder Kontext, an dem die Entscheidung hängt. Wenn sich die Begründung dadurch nicht verändert, war sie zu allgemein.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe enge Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Struktur bleibt übersichtlich.
