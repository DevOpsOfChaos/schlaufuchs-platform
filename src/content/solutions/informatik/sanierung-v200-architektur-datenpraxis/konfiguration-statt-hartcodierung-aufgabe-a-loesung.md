---
title: "Lösung: Konfiguration statt Hartcodierung – Aufgabe A"
description: "Musterlösung zu Konfiguration statt Hartcodierung, Aufgabe A."
subject: "informatik"
section: "softwarearchitektur"
topicPath: ["softwarearchitektur", "konfiguration"]
taskId: "INF-V200-KONFIGURATION_STATT_HARTCODIERUNG-A"
relatedExercise: "informatik/sanierung-v200-architektur-datenpraxis/konfiguration-statt-hartcodierung-aufgabe-a"
tags: ["informatik", "softwarearchitektur", "loesung", "sanierung-v200"]
draft: false
---
## Musterlösung

Eine gute Lösung trennt zuerst die Ebenen.

### Begriff

Beschreibe, was fachlich gemeint ist. Vermeide, die spätere technische Lösung schon in die Definition hineinzuschreiben.

### Verantwortung

Benenne, welcher Baustein welche Aufgabe übernimmt. Eine Verantwortung sollte nicht gleichzeitig Darstellung, Fachentscheidung, Speicherung und Fehlerbehandlung enthalten.

### Datenfluss

Nenne Eingaben, Ausgaben und wichtige Zwischenzustände. Dadurch wird sichtbar, welche Daten geprüft, verändert oder gespeichert werden.

### Fehlerfall und Kontrolle

Beschreibe mindestens einen Fehlerfall und einen Kontrollpunkt. Ein Kontrollpunkt kann ein Test, ein Logeintrag, eine Validierung oder eine klare Rückmeldung sein.

## Kurzfazit

Bei **Konfiguration statt Hartcodierung** ist die wichtigste Leistung nicht eine schnelle Implementierung, sondern eine Struktur, die verständlich, prüfbar und änderbar bleibt.
