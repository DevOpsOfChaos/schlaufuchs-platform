---
title: "Ports und Sockets"
description: "Überblick über Ports, Sockets und die Zuordnung von Netzwerkdiensten auf Linux-Systemen."
subject: linux
section: "Netzwerk"
topicPath:
  - "ports-und-sockets"
  - "ueberblick"
learningGoals:
  - "Du kannst Ports und Sockets als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Ein Dienst gilt oft als erreichbar, nur weil er installiert ist."
keyTakeaways:
  - "Ports ordnen Netzwerkverkehr Diensten zu."
  - "Sockets verbinden Adresse, Port und Protokoll."
  - "Erreichbarkeit hängt von Dienst, Firewall und Routing ab."
recognizeSignals:
  - "Ein Dienst ist gestartet, aber Verbindungen schlagen fehl."
  - "Ausgaben zeigen LISTEN, TCP, UDP oder Portnummern."
selfCheckPoints:
  - "Kann ich Ports und Sockets in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "netzwerk"
  - "ports"
  - "sockets"
draft: false
---

# Ports und Sockets

Ports ordnen Netzwerkverbindungen einem Dienst zu. Ein Socket beschreibt eine Kommunikationsendstelle aus Adresse, Port und Protokoll.

## Einordnung

Wer Linux-Dienste betreibt, muss Ports verstehen. Webserver, SSH und Datenbanken lauschen auf bestimmten Ports und sind nur erreichbar, wenn Dienst, Route und Firewall passen.

## Zentrale Aspekte

- **Listening Port:** Ein Dienst wartet auf eingehende Verbindungen.
- **Client-Port:** Clients nutzen meist temporäre lokale Ports.
- **TCP und UDP:** Beide nutzen Ports mit unterschiedlichem Verhalten.
- **Firewall:** Ein lauschender Dienst ist nicht automatisch erreichbar.

## Beispiele und Zusammenhang

Wenn ein Webserver gestartet wurde, aber nicht erreichbar ist, kann `ss -tulpn` zeigen, ob er auf dem erwarteten Port lauscht.

## Abgrenzung

Ein Port ist kein Programm, sondern eine Nummer, über die Verkehr einem Prozess zugeordnet wird.

## Häufige Missverständnisse

Ein Dienst gilt oft als erreichbar, nur weil er installiert ist.

## Kurz zusammengefasst

- Ports ordnen Netzwerkverkehr Diensten zu.
- Sockets verbinden Adresse, Port und Protokoll.
- Erreichbarkeit hängt von Dienst, Firewall und Routing ab.
