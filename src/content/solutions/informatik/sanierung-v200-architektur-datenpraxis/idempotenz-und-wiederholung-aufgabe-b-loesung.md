---
title: "Lösung: Idempotenz und Wiederholung – Aufgabe B"
description: "Musterlösung zu Idempotenz und Wiederholung, Aufgabe B."
subject: "informatik"
section: "api-design"
topicPath: ["api-design", "idempotenz"]
taskId: "INF-V200-IDEMPOTENZ_UND_WIEDERHOLUNG-B"
relatedExercise: "informatik/sanierung-v200-architektur-datenpraxis/idempotenz-und-wiederholung-aufgabe-b"
tags: ["informatik", "api-design", "loesung", "sanierung-v200"]
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

Bei **Idempotenz und Wiederholung** ist die wichtigste Leistung nicht eine schnelle Implementierung, sondern eine Struktur, die verständlich, prüfbar und änderbar bleibt.
