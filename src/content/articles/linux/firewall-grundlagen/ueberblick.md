---
title: "Firewall-Grundlagen"
description: "Allgemeiner Überblick über Firewalls, Paketfilter und grundlegende Netzwerksicherheit unter Linux."
subject: "linux"
section: "Netzwerk"
topicPath: ["firewall-grundlagen", "ueberblick"]
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
# Firewall-Grundlagen

Eine Firewall kontrolliert Netzwerkverkehr anhand von Regeln. Sie kann Verbindungen erlauben, blockieren oder weiterleiten und ist ein wichtiger Baustein der Netzwerksicherheit.

## Bedeutung

Unter Linux existieren verschiedene Werkzeuge und Abstraktionen, etwa nftables, iptables oder einfachere Frontends. Grundidee bleibt: Regeln beschreiben, welcher Verkehr in welchem Kontext erlaubt ist.

## Typische Teilaspekte

- **Richtung:** Regeln unterscheiden eingehenden, ausgehenden und weitergeleiteten Verkehr.
- **Port:** Viele Dienste sind über typische Ports erreichbar.
- **Zustand:** Stateful Firewalls berücksichtigen bestehende Verbindungen.
- **Standardregel:** Eine klare Grundhaltung ist wichtig: standardmäßig erlauben oder blockieren.

## Beispiel

Ein Server kann SSH auf Port 22 erlauben, aber nicht benötigte eingehende Dienste blockieren.

## Abgrenzung

Eine Firewall ersetzt keine sicheren Dienste. Ein schlecht konfigurierter Dienst bleibt riskant, auch wenn nur wenige Ports offen sind.

## Häufige Missverständnisse

Häufig werden Regeln geändert, ohne die aktuelle Verbindung abzusichern. Bei Remote-Systemen kann man sich dadurch aussperren.

## Einordnung im Gesamtzusammenhang

Firewall-Grundlagen verbinden Netzwerkdiagnose, Dienste, Sicherheit und Systembetrieb.
