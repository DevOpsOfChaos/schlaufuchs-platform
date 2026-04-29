---
title: "Lösung – textContent und innerHTML nach XSS-Risiko wählen"
description: "Musterlösung zu textContent und innerHTML mit Einordnung, Abgrenzung und Gegenprobe."
subject: "web-development"
section: "Sicherheit"
topicPath: ["projektpraxis", "sicherheit-und-datenschutz", "xss-ausgabe", "textcontent-und-innerhtml-nach-xss-risiko-waehlen"]
taskId: "v109-web-development-textcontent-und-innerhtml-nach-xss-risiko-waehlen"
relatedExercise: "web-development/projektpraxis/sicherheit-und-datenschutz/xss-ausgabe/textcontent-und-innerhtml-nach-xss-risiko-waehlen"
tags: ["web-development", "Sicherheit", "loesung"]
draft: false
---
## Musterlösung

Das Szenario gehört zum Unterthema **textContent und innerHTML**.

## Einordnung

Nutzereingaben sollen in einer Seite angezeigt werden. Entscheidend ist dabei die kleine Trennkante, nicht der breite Fachbereich.

## Abgrenzung

Die typische Verwechslung lautet: HTML-Ausgabe wird ohne Kontextprüfung genutzt. Genau deshalb wird zuerst sauber eingeordnet.

## Prüfschritt

Nutze textContent, wenn kein HTML nötig ist.

Dieser Prüfschritt ist konkret genug, um die Entscheidung nachvollziehbar zu machen.

## Gegenprobe

Ändert man den zentralen Wert, Zustand oder Kontext, muss sich auch die Begründung ändern. Bleibt die Begründung unverändert, war sie wahrscheinlich zu allgemein formuliert.

## Lernwert

Die Lösung passt zur Wissensseite, weil sie dieselbe Trennkante nutzt. Dadurch entstehen weniger Doppelungen mit Nachbarseiten und die Aufgabe bleibt zielgenau.
