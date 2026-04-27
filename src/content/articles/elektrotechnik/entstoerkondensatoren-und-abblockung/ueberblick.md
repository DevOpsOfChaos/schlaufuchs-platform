---
title: "Entstörkondensatoren und Abblockung"
description: "Überblick über Abblockkondensatoren, Entstörung und lokale Versorgungspufferung in elektronischen Schaltungen."
subject: elektrotechnik
section: "Signale"
topicPath:
  - "entstoerkondensatoren-und-abblockung"
  - "ueberblick"
learningGoals:
  - "Du kannst Entstörkondensatoren und Abblockung als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Kondensatoren werden oft im Schaltplan vorgesehen, aber im Layout zu weit entfernt platziert."
keyTakeaways:
  - "Abblockung stabilisiert lokale Versorgungspunkte."
  - "Platzierung und Frequenzverhalten sind entscheidend."
  - "Kleine Kondensatoren vermeiden viele Zuverlässigkeitsprobleme."
recognizeSignals:
  - "Eine Schaltung resetet, misst instabil oder stört andere Signale."
  - "Datenblätter empfehlen Kondensatoren nahe an Versorgungspins."
selfCheckPoints:
  - "Kann ich Entstörkondensatoren und Abblockung in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "elektrotechnik"
  - "kondensator"
  - "entstoerung"
  - "versorgung"
draft: false
---

# Entstörkondensatoren und Abblockung

Entstör- und Abblockkondensatoren stabilisieren Versorgungsspannungen und reduzieren Störungen. Sie sitzen häufig nahe an integrierten Schaltungen.

## Einordnung

Digitale Bausteine benötigen beim Umschalten kurzzeitig Strom. Ein nahe platzierter Kondensator kann Spannungseinbrüche und Störspitzen mindern.

## Zentrale Aspekte

- **Lokale Pufferung:** Der Kondensator stellt kurzfristig Ladung bereit.
- **Frequenzverhalten:** Unterschiedliche Werte wirken in unterschiedlichen Bereichen.
- **Platzierung:** Kurze Wege sind oft wichtiger als große Kapazität.
- **Versorgungsqualität:** Abblockung ergänzt Regler und gutes Layout.

## Beispiele und Zusammenhang

Ein Mikrocontroller kann ohne nahe 100-nF-Kondensatoren zufällig resetten. Ein Sensor kann stabiler messen, wenn Versorgung und Referenz sauber abgeblockt sind.

## Abgrenzung

Ein Abblockkondensator ist nicht dasselbe wie ein großer Pufferelko am Eingang. Beide haben unterschiedliche Aufgaben.

## Häufige Missverständnisse

Kondensatoren werden oft im Schaltplan vorgesehen, aber im Layout zu weit entfernt platziert.

## Kurz zusammengefasst

- Abblockung stabilisiert lokale Versorgungspunkte.
- Platzierung und Frequenzverhalten sind entscheidend.
- Kleine Kondensatoren vermeiden viele Zuverlässigkeitsprobleme.
