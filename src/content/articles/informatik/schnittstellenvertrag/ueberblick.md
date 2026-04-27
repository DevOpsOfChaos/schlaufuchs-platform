---
title: "Schnittstellenvertrag"
description: "Überblick über Erwartungen, Zusagen und Grenzen zwischen zwei Softwareteilen oder Systemen."
subject: informatik
section: "Informatik"
topicPath:
  - "schnittstellenvertrag"
  - "ueberblick"
learningGoals:
  - "Du kannst den Begriff einordnen und von ähnlichen Begriffen abgrenzen."
  - "Du kennst wichtige Teilaspekte, typische Signale und häufige Missverständnisse."
  - "Du kannst erklären, warum das Thema in praktischen Situationen relevant ist."
practiceIdeas: []
commonMistakes:
  - "Nur den erfolgreichen Standardfall zu beschreiben und Fehlerfälle offen zu lassen."
keyTakeaways:
  - "Ein guter Schnittstellenvertrag reduziert Missverständnisse zwischen Systemteilen und macht Änderungen kontrollierbar."
  - "Ein guter Überblick trennt Begriff, Zweck, Voraussetzungen und Grenzen."
recognizeSignals:
  - "Das Thema ist relevant, wenn mehrere Module, Teams oder Systeme über definierte Grenzen zusammenarbeiten."
selfCheckPoints:
  - "Kann ich den Begriff ohne Spezialfall erklären?"
  - "Kann ich typische Grenzen und Missverständnisse nennen?"
level: einfach
tags:
  - "informatik"
  - "schnittstellen"
  - "architektur"
draft: false
---

# Schnittstellenvertrag

Ein Schnittstellenvertrag beschreibt, was eine Schnittstelle erwartet und was sie liefert. Dazu gehören Datenformate, Fehlerfälle, Seiteneffekte, Sicherheitsannahmen und Stabilitätszusagen.

## Bedeutung im Zusammenhang

Der Begriff macht klar, dass eine Schnittstelle mehr ist als eine Funktionssignatur oder URL. Sie ist eine Vereinbarung zwischen aufrufender und anbietender Seite.

## Zentrale Teilaspekte

- **Eingaben:** Erlaubte Werte, Pflichtfelder und Vorbedingungen müssen klar sein.
- **Ausgaben:** Rückgabewerte, Statuscodes und Fehlerformate brauchen verlässliche Struktur.
- **Stabilität:** Änderungen am Vertrag können abhängige Systeme brechen.

Diese Teilaspekte hängen zusammen, sollten aber nicht zu einem einzigen Schlagwort verkürzt werden. Gerade Überblicksseiten sind dafür da, zuerst die Rolle des Themas zu klären. Erst danach sind Formeln, Befehle, Schaltungen, Codebeispiele oder konkrete Rechenwege sinnvoll einzuordnen.

## Abgrenzung

Ein Schnittstellenvertrag ist nicht nur Dokumentation. Er sollte durch Tests, Validierung und Versionierung gestützt werden.

## Typische Beispiele und Signale

- Eine API garantiert, welche Felder in einer Antwort vorkommen.
- Eine Funktion wirft definierte Fehler für ungültige Eingaben.
- Ein Event enthält stabile Pflichtattribute für Konsumenten.

Das Thema ist relevant, wenn mehrere Module, Teams oder Systeme über definierte Grenzen zusammenarbeiten. Solche Signale bedeuten nicht automatisch, dass nur eine Lösung möglich ist. Sie zeigen aber, dass der Begriff als Orientierung hilft und dass vorschnelles Abarbeiten einzelner Schritte leicht zu Fehlentscheidungen führen kann.

## Häufige Missverständnisse

Nur den erfolgreichen Standardfall zu beschreiben und Fehlerfälle offen zu lassen. Dieses Missverständnis ist verbreitet, weil das Thema in Einführungen oft an einem sehr einfachen Beispiel gezeigt wird. In realen Situationen kommen jedoch Randbedingungen, Messgrenzen, Vorwissen, Werkzeuge oder Modellannahmen hinzu. Ein guter Überblick macht diese zusätzlichen Bedingungen sichtbar, ohne sofort in Spezialfälle zu springen.

## Kurz zusammengefasst

Ein guter Schnittstellenvertrag reduziert Missverständnisse zwischen Systemteilen und macht Änderungen kontrollierbar. Wer diesen Zusammenhang versteht, kann spätere Detailseiten ruhiger lesen: Einzelne Regeln, Befehle, Formeln oder Bauteile erscheinen dann nicht mehr als isolierte Merksätze, sondern als Teile eines größeren Zusammenhangs.
