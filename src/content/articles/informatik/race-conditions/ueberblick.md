---
title: "Race Conditions"
description: "Allgemeiner Überblick über Race Conditions und zeitabhängige Fehler in Programmen."
subject: "informatik"
section: "Nebenläufigkeit"
topicPath: ["race-conditions", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "fortgeschritten"
tags: ["informatik", "Nebenläufigkeit"]
draft: false
---
# Race Conditions

Eine Race Condition entsteht, wenn das Ergebnis eines Programms ungewollt davon abhängt, in welcher zeitlichen Reihenfolge mehrere Abläufe auf gemeinsame Daten oder Ressourcen zugreifen.

Solche Fehler sind besonders schwer zu finden, weil sie nicht bei jedem Lauf auftreten und stark von Timing, Last oder Systemumgebung abhängen.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Gemeinsamer veränderlicher Zustand ist eine häufige Ursache.
- Sperren, atomare Operationen oder unveränderliche Daten können Risiken reduzieren.
- Tests müssen Timing- und Parallelitätsannahmen bewusst prüfen.

## Abgrenzung

Nicht jede zeitliche Abhängigkeit ist falsch. Problematisch ist die unbeabsichtigte Abhängigkeit, die Korrektheit oder Sicherheit gefährdet.

## Beispiele

- Zwei Threads erhöhen denselben Zähler und überschreiben gegenseitig Zwischenergebnisse.
- Ein Programm prüft eine Datei und nutzt sie später, während ein anderer Prozess sie dazwischen ändert.

## Häufiges Missverständnis

Häufig werden Race Conditions als seltene Zufälle abgetan. In produktiven Systemen können sie unter Last zuverlässig auftreten.

## Kurz zusammengefasst

Race Conditions sind Fehler durch unkontrollierte Reihenfolge. Robustes Design reduziert geteilten Zustand und macht Synchronisation explizit.
