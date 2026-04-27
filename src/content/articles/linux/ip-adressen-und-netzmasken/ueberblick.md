---
title: "IP-Adressen und Netzmasken"
description: "Überblick über IP-Adressen, Netzmasken und die Einordnung von Geräten in Netzwerken."
subject: linux
section: "Netzwerk"
topicPath:
  - "ip-adressen-und-netzmasken"
  - "ueberblick"
learningGoals:
  - "Du kannst IP-Adressen und Netzmasken als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Oft wird nur die IP-Adresse betrachtet, obwohl die Netzmaske entscheidet, welche Ziele direkt erreichbar sind."
keyTakeaways:
  - "IP-Adresse und Netzmaske gehören zusammen."
  - "Das Gateway verbindet unterschiedliche Netze."
  - "Linux-Netzwerkdiagnose beginnt oft mit Adresse und Route."
recognizeSignals:
  - "Ein Gerät erreicht lokale Ziele, aber nicht das Internet."
  - "Ausgaben zeigen `/24` oder `255.255.255.0`."
selfCheckPoints:
  - "Kann ich IP-Adressen und Netzmasken in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "netzwerk"
  - "ip"
  - "netzmaske"
draft: false
---

# IP-Adressen und Netzmasken

IP-Adressen identifizieren Geräte oder Schnittstellen in einem Netzwerk. Netzmasken beschreiben, welcher Teil einer Adresse zum Netzwerk und welcher Teil zum Gerät gehört.

## Einordnung

Für Linux-Systeme sind IP-Adressen und Netzmasken Grundlage vieler Diagnoseaufgaben. Befehle wie `ip addr`, `ip route` oder `ping` werden dadurch verständlicher.

## Zentrale Aspekte

- **Adresse:** Sie benennt eine Netzwerkschnittstelle im IP-Netz.
- **Netzmaske:** Sie trennt Netzwerkanteil und Hostanteil.
- **Gateway:** Es vermittelt Verkehr in andere Netze.
- **Private Netze:** Bereiche wie 192.168.x.x oder 10.x.x.x werden intern genutzt.

## Beispiele und Zusammenhang

Ein Rechner mit `192.168.1.20/24` liegt typischerweise im Netz `192.168.1.0`. Ein Ziel im Internet braucht eine Route über das Gateway.

## Abgrenzung

Eine IP-Adresse ist nicht dasselbe wie ein DNS-Name. DNS übersetzt Namen, IP-Adressen werden für Zustellung genutzt.

## Häufige Missverständnisse

Oft wird nur die IP-Adresse betrachtet, obwohl die Netzmaske entscheidet, welche Ziele direkt erreichbar sind.

## Kurz zusammengefasst

- IP-Adresse und Netzmaske gehören zusammen.
- Das Gateway verbindet unterschiedliche Netze.
- Linux-Netzwerkdiagnose beginnt oft mit Adresse und Route.
