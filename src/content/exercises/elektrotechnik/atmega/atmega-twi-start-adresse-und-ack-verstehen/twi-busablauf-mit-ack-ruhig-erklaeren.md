---
title: "TWI-Busablauf mit ACK ruhig erklären"
description: "Erkläre beim AVR-TWI die Reihenfolge aus Start, Adresse und Bestätigung und deute fehlendes ACK fachlich sauber."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-twi-start-adresse-und-ack-verstehen", "twi-busablauf-mit-ack-ruhig-erklaeren"]
taskId: "ET-ATMEGA-TWI-303"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
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
