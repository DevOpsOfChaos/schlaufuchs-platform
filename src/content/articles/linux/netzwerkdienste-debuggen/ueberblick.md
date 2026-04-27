---
title: "Netzwerkdienste debuggen"
description: "Überblick über die Fehlersuche bei Diensten, Ports, Firewalls und Namensauflösung."
subject: linux
section: "Netzwerk"
topicPath:
  - "netzwerkdienste-debuggen"
  - "ueberblick"
learningGoals:
  - "Du kannst Netzwerkdienste debuggen als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Direkt die Anwendung zu ändern, ohne zuerst Prozess, Port, Adresse und Firewall zu prüfen."
keyTakeaways:
  - "Netzwerkfehler werden in Schichten geprüft."
  - "Lauschender Port, Erreichbarkeit und Antwort sind verschiedene Fragen."
  - "DNS-Probleme sind von Dienstproblemen zu trennen."
recognizeSignals:
  - "Ein Dienst ist lokal erreichbar, aber nicht aus dem Netzwerk."
  - "Verbindungen enden mit Timeout oder Connection refused."
selfCheckPoints:
  - "Kann ich Netzwerkdienste debuggen in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "netzwerk"
  - "debugging"
  - "dienste"
draft: false
---

# Netzwerkdienste debuggen

Netzwerkdienst-Debugging untersucht, ob ein Dienst läuft, auf der richtigen Adresse lauscht, erreichbar ist und korrekt antwortet.

## Einordnung

Viele Fehler sehen ähnlich aus: Timeout, Verbindung verweigert oder falsche Antwort. Eine systematische Prüfung trennt Dienstprozess, Port, Firewall, Routing und DNS.

## Zentrale Aspekte

- `ss` oder `netstat` zeigen lauschende Ports.
- `curl` prüft HTTP-Antworten sichtbar.
- Firewallregeln können lokale Dienste blockieren.
- DNS und Routing müssen getrennt vom Dienst geprüft werden.

## Beispiele und Zusammenhang

Ein Webdienst läuft lokal auf Port 8080, ist aber von außen nicht erreichbar, weil er nur an `127.0.0.1` gebunden ist.

## Abgrenzung

Ein offener Port bedeutet nicht, dass die Anwendung fachlich korrekt arbeitet. Er zeigt nur, dass eine Verbindung möglich ist.

## Häufige Missverständnisse

Direkt die Anwendung zu ändern, ohne zuerst Prozess, Port, Adresse und Firewall zu prüfen.

## Kurz zusammengefasst

- Netzwerkfehler werden in Schichten geprüft.
- Lauschender Port, Erreichbarkeit und Antwort sind verschiedene Fragen.
- DNS-Probleme sind von Dienstproblemen zu trennen.
