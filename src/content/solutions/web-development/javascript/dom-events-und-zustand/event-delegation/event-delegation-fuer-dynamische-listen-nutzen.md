---
title: "Lösung – Event Delegation für dynamische Listen nutzen"
description: "Musterlösung zu Event Delegation mit Einordnung, Abgrenzung und Gegenprobe."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "dom-events-und-zustand", "event-delegation", "event-delegation-fuer-dynamische-listen-nutzen"]
taskId: "v109-web-development-event-delegation-fuer-dynamische-listen-nutzen"
relatedExercise: "web-development/javascript/dom-events-und-zustand/event-delegation/event-delegation-fuer-dynamische-listen-nutzen"
tags: ["web-development", "JavaScript", "loesung"]
draft: false
---
## Musterlösung

Das Szenario gehört zum Unterthema **Event Delegation**.

## Einordnung

Listeneinträge werden später dynamisch ergänzt. Entscheidend ist dabei die kleine Trennkante, nicht der breite Fachbereich.

## Abgrenzung

Die typische Verwechslung lautet: Für jedes neue Element wird einzeln ein Listener gesetzt. Genau deshalb wird zuerst sauber eingeordnet.

## Prüfschritt

Hänge den Listener an ein stabiles Elternelement.

Dieser Prüfschritt ist konkret genug, um die Entscheidung nachvollziehbar zu machen.

## Gegenprobe

Ändert man den zentralen Wert, Zustand oder Kontext, muss sich auch die Begründung ändern. Bleibt die Begründung unverändert, war sie wahrscheinlich zu allgemein formuliert.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Aufgabe bleibt zielgenau.
