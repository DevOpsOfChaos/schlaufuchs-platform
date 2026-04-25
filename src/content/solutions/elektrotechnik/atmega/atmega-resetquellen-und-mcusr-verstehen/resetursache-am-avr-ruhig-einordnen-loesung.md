---
title: Musterlösung – Resetursache am AVR ruhig einordnen
description: Musterlösung zur Aufgabe ET-ATMEGA-SYS-302.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - systemstart-und-robustheit
  - atmega-resetquellen-und-mcusr-verstehen
  - resetursache-am-avr-ruhig-einordnen-loesung
taskId: ET-ATMEGA-SYS-302
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-resetquellen-und-mcusr-verstehen/resetursache-am-avr-ruhig-einordnen.md
tags:
  - elektrotechnik
  - atmega
  - loesung
  - task-id
draft: false
---

## Musterlösung

### Aufgabe 1

Typische Resetquellen sind zum Beispiel:

- **Power-on-Reset** → Versorgung wird eingeschaltet oder neu angelegt.
- **Externer Reset** → ein Signal am Reset-Pin löst den Neustart aus.
- **Watchdog-Reset** → der Watchdog greift ein, weil das Programm nicht rechtzeitig reagiert hat.
- **Brown-out-Reset** → die Versorgungsspannung ist zu niedrig für einen sicheren Betrieb.

### Aufgabe 2

Die Aussage ist zu grob, weil sie nur das sichtbare Ergebnis beschreibt. Ein Neustart kann zwar immer ähnlich aussehen, technisch aber durch ganz unterschiedliche Ursachen entstanden sein. Für die Diagnose ist deshalb nicht nur wichtig, dass ein Reset passiert ist, sondern welcher.

### Aufgabe 3

`MCUSR` ist nützlich, weil das Register Hinweise auf die letzte Resetursache liefern kann. Es ersetzt keine vollständige Fehlersuche, hilft aber dabei, die wahrscheinlichste Ursache enger einzugrenzen. Genau deshalb ist es eine wichtige Diagnosespur direkt nach dem Start.

### Aufgabe 4

Ein ruhiger Diagnoseweg wäre: zuerst festhalten, dass ein Neustart sichtbar ist, dann typische Resetquellen durchgehen, danach `MCUSR` als Hinweisspur einordnen und schließlich prüfen, welche Ursache am besten zum beobachteten Verhalten passt. So wird der Reset nicht nur als Symptom, sondern als Ausgangspunkt der Fehlersuche gelesen.
