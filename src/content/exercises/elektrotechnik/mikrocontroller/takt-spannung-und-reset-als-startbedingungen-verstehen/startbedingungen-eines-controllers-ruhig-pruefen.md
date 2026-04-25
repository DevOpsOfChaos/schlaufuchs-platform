---
title: Startbedingungen eines Controllers ruhig prüfen
description: Prüfe Versorgung, Takt und Reset als Systemvoraussetzungen und begründe, warum Startprobleme nicht sofort Softwarefehler sein müssen.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - takt-spannung-und-reset-als-startbedingungen-verstehen
  - startbedingungen-eines-controllers-ruhig-pruefen
taskId: ELE-MCU-GEN-105
level: einfach
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - takt
  - reset
hintPoints:
  - Denke zuerst an Systembedingungen, nicht sofort an den Algorithmus.
  - Trenne Versorgung, Takt und Reset als drei verschiedene Rollen.
selfCheckPoints:
  - Kannst du Startprobleme systemisch einordnen?
  - Kannst du erklären, warum gleiche Software bei anderer Rahmenbedingung anders wirkt?
transferIdeas:
  - Übertrage die Logik auf UART, Timer oder Blinkversuche auf eigener Hardware.
reflectionPrompt: "Welche Startbedingung würdest du vor dem Code am schnellsten prüfen und warum?"
---

## Aufgabe 1: Drei Rollen benennen

Erkläre kurz die Rolle von

- Versorgung,
- Takt,
- und Reset

für den Start eines Mikrocontrollers.

## Aufgabe 2: Gleiche Software, anderer Effekt

Ein Blinkprogramm läuft auf einem Board sichtbar anders als auf einer eigenen Schaltung.

Nenne zwei Systemgründe, die dafür plausibler sein können als ein reiner Algorithmusfehler.

## Aufgabe 3: Leitfrage formulieren

Schreibe eine kurze Prüffrage auf, mit der du vor dem Debuggen des Programms zuerst die Startbedingungen des Controllers prüfst.

## Aufgabe 4: Fehlersatz korrigieren

Bewerte die Aussage:

> "Wenn der Code richtig ist, muss der Controller automatisch richtig starten."

Erkläre kurz, warum das fachlich zu grob ist.
