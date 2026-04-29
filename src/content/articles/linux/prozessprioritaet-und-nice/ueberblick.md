---
title: "Prozesspriorität und nice"
description: "Allgemeiner Überblick über Prozessprioritäten, nice-Werte und Ressourcennutzung unter Linux."
subject: "linux"
section: "Prozesse"
topicPath: ["prozessprioritaet-und-nice", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Prozesse"]
draft: false
---
# Prozesspriorität und nice

Prozesspriorität beeinflusst, wie der Scheduler CPU-Zeit zwischen laufenden Prozessen verteilt. Der nice-Wert ist ein gebräuchliches Mittel, um Prozesse freundlicher oder dringlicher einzuordnen.

## Bedeutung

Ein höherer nice-Wert bedeutet, dass ein Prozess eher zurücktritt. Ein niedrigerer nice-Wert gibt ihm relativ mehr Gewicht. Die tatsächliche Ausführung hängt aber von Scheduler, Last und Rechten ab.

## Typische Teilaspekte

- **Scheduler:** Der Scheduler entscheidet, welcher Prozess wann CPU-Zeit erhält.
- **nice:** Nice-Werte drücken eine relative Priorität aus.
- **renice:** Mit `renice` kann ein laufender Prozess angepasst werden.
- **Grenzen:** Priorität löst keine Speicher-, I/O- oder Programmfehler.

## Beispiel

Ein lang laufender Komprimierungsjob kann mit höherem nice-Wert gestartet werden, damit interaktive Arbeit flüssiger bleibt.

## Abgrenzung

Nice ist keine harte Zeitgarantie. Es beeinflusst die Verteilung, macht einen Prozess aber nicht automatisch schnell oder langsam.

## Häufige Missverständnisse

Häufig wird CPU-Priorität mit Gesamtleistung verwechselt. Ein Prozess kann durch Festplatte, Netzwerk oder Sperren begrenzt sein.

## Einordnung im Gesamtzusammenhang

Prozesspriorität verbindet Prozessverwaltung, Systemlast, Dienste und praktische Administration.
