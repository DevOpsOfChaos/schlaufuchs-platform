---
title: "Dateiattribute und ACL"
description: "Allgemeiner Überblick über Dateiattribute und Access Control Lists als Erweiterung klassischer Linux-Rechte."
subject: "linux"
section: "Rechte"
topicPath:
  - "datei-attribute-und-acl"
learningGoals:
  - "Du kannst den Begriff einordnen und von ähnlichen Begriffen abgrenzen."
  - "Du kennst typische Teilaspekte und praktische Zusammenhänge."
  - "Du erkennst häufige Missverständnisse zu diesem Thema."
practiceIdeas: []
commonMistakes:
  - "Häufig wird nur `ls -l` betrachtet. Erweiterte Rechte können dann übersehen werden und scheinbar unerklärliche Zugriffe verursachen."
keyTakeaways:
  - "Dateiattribute und ACLs erweitern das Rechtemodell. Sie sind nützlich, wenn klassische Rechte zu grob sind, verlangen aber klare Dokumentation."
  - "ACLs erhöhen Ausdruckskraft, aber auch Komplexität. Sie sollten nicht eingesetzt werden, wenn einfache Gruppenrechte ausreichen."
recognizeSignals:
  - "Es geht um Grundlagen, Einordnung, Begriffe oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ruhig und allgemein erklären?"
  - "Kann ich ein Beispiel nennen, ohne direkt in eine Spezialaufgabe zu springen?"
level: "mittel"
tags:
  - "linux"
  - "rechte"
  - "acl"
  - "dateien"
draft: false
---

# Dateiattribute und ACL

Dateiattribute und ACLs ergänzen klassische Besitzer-, Gruppen- und Andere-Rechte um zusätzliche Steuerungsmöglichkeiten.

Klassische Unix-Rechte sind einfach und robust. In komplexeren Umgebungen reichen sie manchmal nicht aus, etwa wenn mehrere Gruppen differenzierten Zugriff brauchen.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- ACLs erlauben zusätzliche Regeln für bestimmte Nutzer oder Gruppen.
- Dateiattribute können besondere Eigenschaften wie Unveränderbarkeit setzen.
- Werkzeuge und Backups müssen solche erweiterten Informationen erhalten können.

## Abgrenzung

ACLs erhöhen Ausdruckskraft, aber auch Komplexität. Sie sollten nicht eingesetzt werden, wenn einfache Gruppenrechte ausreichen.

## Beispiele

- Ein Projektverzeichnis kann mehreren Nutzern unterschiedliche Rechte geben.
- Eine wichtige Datei kann mit einem Attribut gegen versehentliches Löschen geschützt werden.

## Häufiges Missverständnis

Häufig wird nur `ls -l` betrachtet. Erweiterte Rechte können dann übersehen werden und scheinbar unerklärliche Zugriffe verursachen.

## Kurz zusammengefasst

Dateiattribute und ACLs erweitern das Rechtemodell. Sie sind nützlich, wenn klassische Rechte zu grob sind, verlangen aber klare Dokumentation.
