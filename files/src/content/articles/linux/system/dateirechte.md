---
title: Dateirechte – Grundlagen
description: Lerne, wie Linux Lesen, Schreiben und Ausführen für Besitzer, Gruppen und andere Benutzer trennt.
subject: linux
section: system
level: einfach
tags: [linux, rechte, chmod, dateien, system]
draft: false
---

Dateirechte sind eine der wichtigsten Grundlagen in Linux. Sie entscheiden, **wer** etwas lesen, verändern oder ausführen darf. Ohne dieses Prinzip gäbe es in Mehrbenutzersystemen schnell Chaos.

## Überblick

In Linux werden Rechte nicht für „alle gleichzeitig“ vergeben, sondern getrennt für drei Ebenen betrachtet:

- Besitzer
- Gruppe
- andere

Für jede dieser Ebenen wird geprüft, welche Aktionen erlaubt sind.

## Die drei Grundrechte

Linux arbeitet bei Dateien und Ordnern vor allem mit drei Zeichen:

- `r` = lesen
- `w` = schreiben
- `x` = ausführen

Diese Kürzel tauchen sehr häufig auf. Wer sie sicher versteht, kann Rechte deutlich besser lesen.

## Für wen gelten diese Rechte?

Rechte werden in Linux immer im Zusammenhang mit drei Rollen gelesen:

- **Besitzer**: der Benutzer, dem die Datei gehört
- **Gruppe**: die zugeordnete Gruppe
- **Andere**: alle übrigen Benutzer

Das ist wichtig, weil dieselbe Datei für verschiedene Rollen unterschiedliche Rechte haben kann.

## Beispiel lesen

Die Rechte

```text
rw-r--r--
```

bedeuten:

- Besitzer: lesen und schreiben
- Gruppe: nur lesen
- Andere: nur lesen

An diesem Beispiel sieht man gut, dass Linux Rechte nicht pauschal verteilt, sondern fein unterscheidet.

## Was bedeutet `x`?

Das Ausführungsrecht wird oft zuerst nur mit Programmen verbunden. Grundsätzlich heißt `x`, dass etwas ausgeführt werden darf.

Bei Dateien bedeutet das oft:

- ein Programm oder Skript darf gestartet werden

Bei Ordnern ist die Bedeutung etwas spezieller, aber für den Einstieg reicht:

- Zugänge und Aktionen hängen stark von den gesetzten Rechten ab

## Warum Rechte so wichtig sind

Rechte schützen Dateien davor, dass:

- jeder alles verändert,
- wichtige Inhalte versehentlich überschrieben werden,
- oder Programme und Konfigurationen unkontrolliert benutzt werden.

Besonders in Mehrbenutzersystemen sind Rechte deshalb ein Grundbaustein für Sicherheit und Ordnung.

## `chmod` als wichtiges Werkzeug

Mit `chmod` lassen sich Rechte verändern.

Für den Einstieg ist nicht wichtig, jede Schreibweise sofort auswendig zu beherrschen. Wichtiger ist das Prinzip:

- Rechte können bewusst gesetzt werden
- und sollten nicht „irgendwie offen“ bleiben

Typische Zielidee:

- Besitzer darf arbeiten
- Gruppe bekommt nur nötige Rechte
- andere werden möglichst passend eingeschränkt

## Typische Anfängerfehler

Besonders häufig sind diese Probleme:

- Besitzer, Gruppe und andere durcheinanderbringen
- `r`, `w`, `x` nur mechanisch lesen, aber nicht in Handlung übersetzen
- Rechte zu offen setzen, ohne den Zweck zu prüfen
- nicht zu erkennen, dass Rechte immer vom konkreten Kontext abhängen

## Gute Denkweise

Wenn du Rechte siehst, stelle dir drei Fragen:

1. Wer ist betroffen?
2. Was ist erlaubt?
3. Passt das zur Situation?

Diese drei Fragen helfen mehr als bloßes Auswendiglernen.

## Merksätze

- Linux trennt Rechte für Besitzer, Gruppe und andere.
- Die drei Grundrechte sind lesen, schreiben und ausführen.
- Rechte schützen Inhalte und Arbeitsumgebungen.
- Gute Rechte sind bewusst gesetzt, nicht zufällig.
- Wer Rechte lesen kann, arbeitet im System deutlich sicherer.
