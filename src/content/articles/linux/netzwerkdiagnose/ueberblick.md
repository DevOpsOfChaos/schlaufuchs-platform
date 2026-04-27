---
title: "Netzwerkdiagnose"
description: "Einordnung grundlegender Netzwerkdiagnose unter Linux."
subject: linux
section: "Netzwerk"
topicPath:
  - netzwerkdiagnose
  - ueberblick
learningGoals:
  - "Du kannst das Thema allgemein einordnen und von verwandten Begriffen abgrenzen."
  - "Du kennst wichtige Teilaspekte und typische Anwendungsfälle."
  - "Du erkennst häufige Missverständnisse und prüfst Aussagen auf Plausibilität."
practiceIdeas: []
commonMistakes:
  - "Häufig werden DNS, Routing und Dienstfehler vermischt."
keyTakeaways:
  - "Netzwerkdiagnose bedeutet, Verbindungsprobleme systematisch einzugrenzen."
  - "Die genaue Bedeutung hängt vom Zusammenhang, den Einheiten und den Randbedingungen ab."
recognizeSignals:
  - "Das Thema taucht auf, wenn Begriffe, Beispiele oder Fehlerbilder aus diesem Bereich erklärt und eingeordnet werden sollen."
selfCheckPoints:
  - "Kann ich das Thema in eigenen Worten erklären, ohne sofort eine Spezialaufgabe zu rechnen?"
level: einfach
tags:
  - "linux"
  - "netzwerk"
  - "diagnose"
draft: false
---

# Netzwerkdiagnose

## Begriff und Zweck

Netzwerkdiagnose bedeutet, Verbindungsprobleme systematisch einzugrenzen. Dabei wird geprüft, ob die lokale Schnittstelle funktioniert, ob IP-Konfiguration und Routing stimmen, ob Namensauflösung klappt und ob der Zielhost oder Dienst erreichbar ist. Gute Diagnose trennt Schichten statt wahllos Befehle auszuprobieren.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- IP-Adresse und Schnittstelle
- Routing und Gateway
- DNS-Auflösung
- Port- und Dienst-Erreichbarkeit

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

`ip addr` zeigt Adressen, `ip route` die Routen. `ping` prüft grundlegende Erreichbarkeit, sagt aber nicht alles über Dienste aus. `curl` kann HTTP-Endpunkte testen, `ss` lokale offene Ports anzeigen. DNS-Probleme erkennt man, wenn Namen nicht aufgelöst werden, IP-Adressen aber funktionieren.

## Abgrenzung

Ein erfolgreicher Ping beweist nicht, dass ein Webdienst funktioniert. Ein fehlgeschlagener Ping beweist auch nicht immer, dass ein Host aus ist, weil ICMP blockiert sein kann. Diagnose braucht deshalb mehrere passende Beobachtungen.

## Häufige Missverständnisse

Häufig werden DNS, Routing und Dienstfehler vermischt. Eine klare Reihenfolge spart Zeit: lokale Verbindung, Adresse, Route, Namensauflösung, Zielport, Anwendung.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
