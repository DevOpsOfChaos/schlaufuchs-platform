---
title: Board und Minimalhardware ruhig vergleichen
description: Vergleiche Entwicklungsboard und nackten Mikrocontroller als Systemumgebungen und begründe typische Inbetriebnahmeunterschiede.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - entwicklungsboard-und-nackten-mikrocontroller-unterscheiden
  - board-und-minimalhardware-ruhig-vergleichen
taskId: ELE-MCU-GEN-102
level: einfach
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - board
hintPoints:
  - Trenne Chip, Board und zusätzliche Hilfsschaltung bewusst.
  - Frage zuerst nach Versorgung, Reset, Takt und Programmierzugang.
selfCheckPoints:
  - Kannst du erklären, warum ein Test auf dem Board oft schneller gelingt?
  - Kannst du benennen, was auf einer Minimalhardware zusätzlich bedacht werden muss?
transferIdeas:
  - Übertrage die Logik auf STM32-Nucleo, ESP-Devboards oder eigene AVR-Platinen.
reflectionPrompt: "Welche Board-Hilfe vergisst man beim ersten Umstieg auf eigene Hardware besonders leicht?"
---

## Aufgabe 1: Chip und Board trennen

Erkläre in 3 bis 5 Sätzen den Unterschied zwischen einem Entwicklungsboard und einem nackten Mikrocontrollerchip.

## Aufgabe 2: Vier Hilfen benennen

Nenne vier typische Zusatzfunktionen, die ein Entwicklungsboard oft mitbringt und die bei eigener Minimalhardware bewusst ergänzt werden müssen.

## Aufgabe 3: Fehlersuche einordnen

Ein Blinkprogramm läuft auf dem Board, aber auf der eigenen Steckplatine nicht.

Begründe, warum das noch kein Beweis für einen Softwarefehler ist.

## Aufgabe 4: Ruhige Leitfrage formulieren

Schreibe eine kurze Prüffrage auf, mit der du vor dem Debuggen des Codes zuerst die Hardwareumgebung klärst.
