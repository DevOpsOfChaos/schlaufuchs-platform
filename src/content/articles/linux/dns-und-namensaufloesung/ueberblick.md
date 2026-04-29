---
title: "DNS und Namensauflösung"
description: "Allgemeiner Überblick über DNS, Hostnamen und Namensauflösung auf Linux-Systemen."
subject: "linux"
section: "Netzwerk"
topicPath: ["dns-und-namensaufloesung", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Netzwerk"]
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
