---
title: Musterlösung – 3,3-V- und 5-V-Signale sauber einordnen
description: Musterlösung zur Aufgabe ELE-MCU-GEN-109.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - logikpegel-zwischen-3v3-und-5v-systemen-pruefen
  - 3v3-und-5v-signale-sauber-einordnen-loesung
taskId: ELE-MCU-GEN-109
relatedExercise: src/content/exercises/elektrotechnik/mikrocontroller/logikpegel-zwischen-3v3-und-5v-systemen-pruefen/3v3-und-5v-signale-sauber-einordnen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - loesung
  - task-id
draft: false
---

## Aufgabe 1

Die Hauptfrage ist hier, ob zwei digitale Systeme mit unterschiedlicher Versorgung **logisch kompatibel** und **elektrisch zulässig** verbunden sind. HIGH und LOW sind keine abstrakten Wahrheiten, sondern hängen an Schwellen und Grenzwerten. Deshalb müssen Erkennung und Verträglichkeit getrennt geprüft werden.

## Aufgabe 2

- **Ursache / Ausgangslage:** Zwei digitale Bausteine arbeiten mit 3,3 Volt und 5 Volt.
- **Kritischer Punkt:** Ein Signal kann zwar erkannt werden, aber die Gegenseite trotzdem elektrisch überlasten oder an ihre Grenze bringen.
- **Passende Maßnahme:** Schwellen und absolute Maximalwerte prüfen, bei Bedarf Pegelwandlung einsetzen.

## Aufgabe 3

Ein typischer Fehlersatz wäre: „Es funktioniert im Versuch, also passt der Pegel schon.“ Das ist zu unsauber, weil ein funktionierender Versuch noch nichts über Grenzwertsicherheit oder Langzeitverträglichkeit aussagt.

## Aufgabe 4

Dieselbe Denkweise hilft auch bei I²C, UART oder externen Modulen. Gerade dort muss oft getrennt werden, was logisch lesbar ist und was elektrisch sauber verbunden werden darf.
