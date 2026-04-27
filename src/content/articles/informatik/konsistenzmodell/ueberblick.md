---
title: "Konsistenzmodell"
description: "Überblick über Regeln, wann verschiedene Beteiligte denselben Datenstand sehen können oder müssen."
subject: informatik
section: "Informatik"
topicPath:
  - "konsistenzmodell"
  - "ueberblick"
learningGoals:
  - "Du kannst den Begriff einordnen und von ähnlichen Begriffen abgrenzen."
  - "Du kennst wichtige Teilaspekte, typische Signale und häufige Missverständnisse."
  - "Du kannst erklären, warum das Thema in praktischen Situationen relevant ist."
practiceIdeas: []
commonMistakes:
  - "Zu erwarten, dass jedes verteilte System überall sofort denselben Zustand zeigt."
keyTakeaways:
  - "Konsistenzmodelle legen fest, welche Datenstände ein System verspricht und welche Verzögerungen erlaubt sind."
  - "Ein guter Überblick trennt Begriff, Zweck, Voraussetzungen und Grenzen."
recognizeSignals:
  - "Das Thema ist relevant, wenn Replikation, Caches, verteilte Datenbanken oder Offline-Synchronisation vorkommen."
selfCheckPoints:
  - "Kann ich den Begriff ohne Spezialfall erklären?"
  - "Kann ich typische Grenzen und Missverständnisse nennen?"
level: einfach
tags:
  - "informatik"
  - "datenbanken"
  - "verteilte systeme"
draft: false
---

# Konsistenzmodell

Ein Konsistenzmodell beschreibt, welche Garantien ein System über die Sichtbarkeit von Datenänderungen gibt. Es beantwortet, wann eine Änderung für andere Leser sichtbar wird und welche Zwischenzustände erlaubt sind.

## Bedeutung im Zusammenhang

Der Begriff hilft, verteilte Systeme und Datenbanken realistisch zu verstehen. Nicht jedes System garantiert, dass alle Beteiligten sofort denselben Stand sehen.

## Zentrale Teilaspekte

- **starke Konsistenz:** Leser sehen nach einer bestätigten Änderung sofort den neuen Stand.
- **eventuelle Konsistenz:** Unterschiede sind vorübergehend erlaubt und gleichen sich später an.
- **Konflikte:** Gleichzeitige Änderungen benötigen Regeln zur Auflösung.

Diese Teilaspekte hängen zusammen, sollten aber nicht zu einem einzigen Schlagwort verkürzt werden. Gerade Überblicksseiten sind dafür da, zuerst die Rolle des Themas zu klären. Erst danach sind Formeln, Befehle, Schaltungen, Codebeispiele oder konkrete Rechenwege sinnvoll einzuordnen.

## Abgrenzung

Konsistenz ist nicht dasselbe wie Verfügbarkeit oder Dauerhaftigkeit. Systeme balancieren mehrere Eigenschaften gegeneinander aus.

## Typische Beispiele und Signale

- Ein Bankkonto benötigt andere Garantien als ein Like-Zähler.
- Replikate können kurz unterschiedliche Datenstände zeigen.
- Offline-Clients müssen Änderungen später zusammenführen.

Das Thema ist relevant, wenn Replikation, Caches, verteilte Datenbanken oder Offline-Synchronisation vorkommen. Solche Signale bedeuten nicht automatisch, dass nur eine Lösung möglich ist. Sie zeigen aber, dass der Begriff als Orientierung hilft und dass vorschnelles Abarbeiten einzelner Schritte leicht zu Fehlentscheidungen führen kann.

## Häufige Missverständnisse

Zu erwarten, dass jedes verteilte System überall sofort denselben Zustand zeigt. Dieses Missverständnis ist verbreitet, weil das Thema in Einführungen oft an einem sehr einfachen Beispiel gezeigt wird. In realen Situationen kommen jedoch Randbedingungen, Messgrenzen, Vorwissen, Werkzeuge oder Modellannahmen hinzu. Ein guter Überblick macht diese zusätzlichen Bedingungen sichtbar, ohne sofort in Spezialfälle zu springen.

## Kurz zusammengefasst

Konsistenzmodelle legen fest, welche Datenstände ein System verspricht und welche Verzögerungen erlaubt sind. Wer diesen Zusammenhang versteht, kann spätere Detailseiten ruhiger lesen: Einzelne Regeln, Befehle, Formeln oder Bauteile erscheinen dann nicht mehr als isolierte Merksätze, sondern als Teile eines größeren Zusammenhangs.
