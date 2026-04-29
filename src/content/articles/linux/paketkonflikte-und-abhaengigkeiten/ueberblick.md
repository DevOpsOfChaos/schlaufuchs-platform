---
title: "Paketkonflikte und Abhängigkeiten"
description: "Überblick über Paketabhängigkeiten, Konflikte und typische Ursachen blockierter Installationen."
subject: "linux"
section: "Paketverwaltung"
topicPath: ["paketkonflikte-und-abhaengigkeiten", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Paketverwaltung"]
draft: false
---
# Paketkonflikte und Abhängigkeiten

Paketabhängigkeiten beschreiben, welche anderen Pakete ein Paket benötigt. Konflikte entstehen, wenn Versionen oder Paketgruppen nicht gleichzeitig installiert werden können.

## Einordnung

Linux-Paketmanager lösen viele Abhängigkeiten automatisch. Probleme entstehen bei gemischten Quellen, Pinning, veralteten Paketlisten oder manuell installierten Fremdpaketen.

## Zentrale Aspekte

- Abhängigkeiten können Mindestversionen verlangen.
- Konflikte schließen bestimmte Pakete gegenseitig aus.
- Repository-Mischung erhöht Risiko.
- Paketlisten und Cache beeinflussen Lösungsvorschläge.

## Beispiele und Zusammenhang

Ein Paket aus einem Fremdrepository verlangt eine neuere Bibliothek als die Distribution offiziell bereitstellt.

## Abgrenzung

Ein Paketkonflikt ist nicht immer ein Defekt. Manchmal schützt der Paketmanager vor einer inkonsistenten Installation.

## Häufige Missverständnisse

Konflikte mit erzwungenen Optionen zu übergehen, ohne die Quelle und Versionen zu verstehen.

## Kurz zusammengefasst

- Paketmanager schützen die Systemkonsistenz.
- Gemischte Quellen sind eine häufige Konfliktursache.
- Versionen, Repositories und Pinning gehören zusammen.
