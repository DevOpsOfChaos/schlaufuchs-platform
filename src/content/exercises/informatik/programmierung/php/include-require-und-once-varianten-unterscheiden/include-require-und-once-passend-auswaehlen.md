---
title: include, require und once passend auswählen
description: Wähle für typische PHP-Bausteine eine sinnvolle Einbindelogik und begründe optional, zwingend oder nur einmal.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - php
  - include-require-und-once-varianten-unterscheiden
  - include-require-und-once-passend-auswaehlen
taskId: INF-PHP-MODULAR-001
level: einfach
draft: false
tags:
  - informatik
  - aufgabe
  - php
  - modularisierung
hintPoints:
  - "Frage zuerst: optional oder zwingend?"
  - "Danach prüfen: einmalig oder mehrfach möglich?"
selfCheckPoints:
  - "Habe ich meine Wahl fachlich begründet?"
  - "Habe ich den Sinn der once-Varianten verstanden?"
transferIdeas:
  - "Übertrage die Logik auf Konfigurationsdateien, Navigation oder Hilfsfunktionen."
reflectionPrompt: "Welcher Fall war schwieriger: optional vs. zwingend oder einmal vs. mehrfach?"
---

## Aufgabe 1

Begründe grob, was eher passt:

- Eine Konfigurationsdatei, ohne die die Seite nicht sinnvoll arbeiten kann
- Eine optionale kleine Infobox
- Eine Hilfsdatei mit gemeinsamen Funktionen, die nicht doppelt eingebunden werden soll

## Aufgabe 2

Warum kann eine doppelte Einbindung derselben Hilfsdatei problematisch werden?

## Aufgabe 3

Warum ist Modularisierung auch fachlich hilfreich und nicht nur „schön sortierter Code“?
