---
title: Multi-Master-Arbitrierung am TWI-Bus ruhig erklären
description: Erkläre, wie der Bus bei zwei gleichzeitigen Mastern eine Entscheidung trifft und warum das kein chaotischer Fehler sein muss.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-arbitrierung-bei-multi-master-verstehen
  - multi-master-arbitrierung-am-twi-bus-ruhig-erklaeren
taskId: ET-ATM-TWI-302
level: fortgeschritten
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - twi
hintPoints:
  - Achte auf die erste Stelle, an der gesendeter Pegel und Buszustand nicht mehr zusammenpassen.
  - Beschreibe Arbitrierung als Busregel statt als Zufall.
selfCheckPoints:
  - Kannst du erklären, warum ein Master zurücktritt?
  - Kannst du den Unterschied zwischen Kollision und geregelter Arbitrierung benennen?
transferIdeas:
  - Übertrage die Idee auf mehrere Controller oder redundante Busmaster.
reflectionPrompt: "Warum ist die Beobachtung des echten Buspegels wichtiger als nur die Absicht des Senders?"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum ein Multi-Master-TWI-Bus eine Arbitrierung braucht.

## Aufgabe 2

Beschreibe, woran ein Master erkennt, dass er die Arbitrierung verloren hat.

## Aufgabe 3

Warum wäre es fachlich zu unruhig, eine verlorene Arbitrierung sofort als Hardwaredefekt zu deuten?
