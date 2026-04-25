---
title: TWI-Busablauf mit ACK ruhig erklären
description: Erkläre beim AVR-TWI die Reihenfolge aus Start, Adresse und Bestätigung und deute fehlendes ACK fachlich sauber.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - serielle-schnittstellen-und-busse
  - atmega-twi-start-adresse-und-ack-verstehen
  - twi-busablauf-mit-ack-ruhig-erklaeren
taskId: ET-ATMEGA-TWI-303
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - twi
hintPoints:
  - Lies den Zugriff zuerst als Reihenfolge von Busereignissen.
  - Behandle ACK nicht als Nebensache, sondern als Bestätigung der Gegenstelle.
selfCheckPoints:
  - Kannst du Start, Adresse und ACK getrennt erklären?
  - Kannst du fehlendes ACK als wichtiges Fehlerbild einordnen?
transferIdeas:
  - Übertrage die Logik auf Sensoren, EEPROMs oder andere I²C-Buspartner.
reflectionPrompt: "Warum hilft bei I²C oft der Blick auf den Ablauf mehr als der Blick auf das spätere Datenbyte?"
---

## Aufgabe 1: Reihenfolge erklären

Beschreibe in 3 bis 5 Sätzen, warum beim TWI-Zugriff die Reihenfolge aus **Start**, **Adresse** und **ACK** fachlich sinnvoll ist.

## Aufgabe 2: Fehlerbild deuten

Ein Zugriff läuft als

```text
Start → Adresse → kein ACK
```

Erkläre, warum das nicht einfach nur „ein falscher Datenwert“ ist, sondern ein grundlegenderes Busproblem zeigt.

## Aufgabe 3: ACK einordnen

Schreibe einen kurzen Merksatz auf, in dem die Wörter **Adresse**, **Bestätigung** und **Gegenstelle** alle sinnvoll vorkommen.

## Aufgabe 4: Erst danach Daten

Begründe kurz, warum der eigentliche Dateninhalt erst nach einem geordneten und bestätigten Buszugriff wirklich sinnvoll bewertet werden kann.
