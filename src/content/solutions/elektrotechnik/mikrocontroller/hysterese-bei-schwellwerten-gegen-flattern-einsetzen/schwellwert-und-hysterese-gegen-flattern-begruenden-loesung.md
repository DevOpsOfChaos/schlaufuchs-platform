---
title: Musterlösung – Schwellwert und Hysterese gegen Flattern begründen
description: Musterlösung zur Aufgabe ELE-MCU-GEN-112.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - hysterese-bei-schwellwerten-gegen-flattern-einsetzen
  - schwellwert-und-hysterese-gegen-flattern-begruenden-loesung
taskId: ELE-MCU-GEN-112
relatedExercise: src/content/exercises/elektrotechnik/mikrocontroller/hysterese-bei-schwellwerten-gegen-flattern-einsetzen/schwellwert-und-hysterese-gegen-flattern-begruenden.md
tags:
  - elektrotechnik
  - mikrocontroller
  - loesung
  - task-id
draft: false
---

## Aufgabe 1

Die Hauptfrage ist hier, wie Zustandswechsel nahe an einem Grenzwert stabil gehalten werden. Ein einzelner Schwellwert reicht bei schwankenden Signalen oft nicht aus. Hysterese nutzt deshalb getrennte Ein- und Ausschaltschwellen.

## Aufgabe 2

- **Ursache / Ausgangslage:** Ein Messsignal schwankt in der Nähe eines Grenzwerts.
- **Kritischer Punkt:** Die Schaltung schaltet schnell hin und her und wirkt dadurch unruhig.
- **Passende Maßnahme:** Zwei getrennte Schwellen für die beiden Richtungen definieren.

## Aufgabe 3

Ein typischer Denkfehler lautet: „Dann mache ich den einzelnen Grenzwert einfach genauer.“ Das löst das Flattern oft nicht, weil die Schwankungen um genau diesen einen Punkt herum weiter bestehen.

## Aufgabe 4

Dieselbe Logik hilft bei Lüftersteuerungen, Relais, Akkuschwellen oder Lichtschranken. Überall dort, wo ein Signal um einen Grenzwert pendelt, sorgt Hysterese für ruhigere Zustandswechsel.
