---
title: "Resiliente Architektur"
description: "Überblick über Architekturprinzipien, die Systeme trotz Fehlern nutzbar halten."
subject: "informatik"
section: "Architektur"
topicPath: ["resiliente-architektur", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Architektur"]
draft: false
---
# Resiliente Architektur

Resiliente Architektur sorgt dafür, dass ein System bei Störungen begrenzt ausfällt, sich erholt oder kontrolliert degradiert.

## Einordnung

Netzwerke, Dienste und Datenbanken können ausfallen. Resilienz betrachtet Fehler als normalen Betriebszustand und plant Begrenzung, Wiederholung, Isolation und Beobachtbarkeit ein.

## Zentrale Aspekte

- Timeouts verhindern endloses Warten.
- Retries brauchen Begrenzung und Abstand.
- Circuit Breaker vermeiden Überlastung.
- Fallbacks erhalten Teilfunktionen.

## Beispiele und Zusammenhang

Wenn ein Empfehlungsdienst nicht erreichbar ist, kann ein Shop weiterhin Produkte anzeigen und nur den Empfehlungsbereich ausblenden.

## Abgrenzung

Resilienz ist nicht dasselbe wie Verfügbarkeit um jeden Preis. Manche Operationen müssen lieber sicher abbrechen als falsch weiterlaufen.

## Häufige Missverständnisse

Bei jedem Fehler sofort aggressiv zu wiederholen und dadurch ein überlastetes System weiter zu belasten.

## Kurz zusammengefasst

- Resilienz begrenzt Fehlerauswirkungen.
- Timeouts, Fallbacks und Isolation gehören zusammen.
- Beobachtbarkeit zeigt, ob Schutzmechanismen wirken.
