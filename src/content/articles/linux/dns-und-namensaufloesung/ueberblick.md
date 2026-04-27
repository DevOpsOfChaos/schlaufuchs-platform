---
title: "DNS und Namensauflösung"
description: "Allgemeiner Überblick über DNS, Hostnamen und Namensauflösung auf Linux-Systemen."
subject: linux
section: "Netzwerk"
topicPath:
  - "dns-und-namensaufloesung"
  - "ueberblick"
learningGoals:
  - "Du kannst DNS und Namensauflösung als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Bei Domainfehlern wird oft sofort die Firewall verdächtigt, ohne DNS getrennt zu prüfen."
keyTakeaways:
  - "DNS übersetzt Namen in IP-Adressen."
  - "Namensauflösung ist ein eigener Teil der Netzwerkdiagnose."
  - "Lokale Konfiguration und DNS-Server wirken zusammen."
recognizeSignals:
  - "IP-Adressen funktionieren, Namen aber nicht."
  - "Fehler erwähnen Resolver, NXDOMAIN oder Name or service not known."
selfCheckPoints:
  - "Kann ich DNS und Namensauflösung in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "linux"
  - "dns"
  - "netzwerk"
  - "namensaufloesung"
draft: false
---

# DNS und Namensauflösung

DNS übersetzt menschenlesbare Namen in IP-Adressen. Auf Linux-Systemen wirken Resolver-Konfiguration, lokale Hosts-Datei und Netzwerkdienste zusammen.

## Einordnung

DNS-Probleme sehen oft wie allgemeine Netzwerkprobleme aus. Ein System kann IP-Adressen erreichen, aber keine Namen auflösen.

## Zentrale Aspekte

- **Resolver:** Er fragt konfigurierte DNS-Server nach Adressen.
- **Hosts-Datei:** Lokale Einträge können Namen direkt abbilden.
- **Caching:** Zwischenspeicher beschleunigen oder halten alte Antworten.
- **Suchdomains:** Kurznamen können ergänzt werden.

## Beispiele und Zusammenhang

Wenn `ping 8.8.8.8` funktioniert, `ping example.org` aber nicht, liegt der Verdacht auf DNS nahe. Tools wie `dig`, `host` oder `resolvectl` helfen.

## Abgrenzung

DNS ist nicht dasselbe wie Internetzugang. Es kann kaputt sein, obwohl Routing funktioniert.

## Häufige Missverständnisse

Bei Domainfehlern wird oft sofort die Firewall verdächtigt, ohne DNS getrennt zu prüfen.

## Kurz zusammengefasst

- DNS übersetzt Namen in IP-Adressen.
- Namensauflösung ist ein eigener Teil der Netzwerkdiagnose.
- Lokale Konfiguration und DNS-Server wirken zusammen.
