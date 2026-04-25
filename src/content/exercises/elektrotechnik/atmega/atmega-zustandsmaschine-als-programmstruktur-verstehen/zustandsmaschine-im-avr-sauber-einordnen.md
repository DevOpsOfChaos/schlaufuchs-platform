---
title: Zustandsmaschine im AVR sauber einordnen
description: Ordne ein reaktives Mikrocontroller-Programm als Zustände und Übergänge und erkläre, warum diese Struktur ruhiger ist als viele Sonderfallketten.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - programmstruktur-und-reaktivitaet
  - atmega-zustandsmaschine-als-programmstruktur-verstehen
  - zustandsmaschine-im-avr-sauber-einordnen
taskId: ET-ATMEGA-STRUKTUR-309
level: mittel
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - zustandsmaschine
hintPoints:
  - Frage zuerst nach Betriebsarten und erst dann nach einzelnen Codezeilen.
  - Trenne Zustand, Übergang und Aktion bewusst.
selfCheckPoints:
  - Kannst du ein kleines Verhalten als Zustandsmodell beschreiben?
  - Kannst du erklären, warum diese Struktur lesbarer wird?
transferIdeas:
  - Übertrage die Logik auf Menüs, Blinkmuster, Tastermodi oder kleine Ablaufsteuerungen.
reflectionPrompt: "Warum hilft die Frage „In welchem Zustand bin ich gerade?“ oft mehr als noch ein zusätzlicher Sonderfall?"
---

## Aufgabe 1: Drei Zustände benennen

Ein Taster soll zwischen diesen drei Betriebsarten umschalten:

- LED aus
- LED blinkt
- LED dauerhaft an

Beschreibe diese Betriebsarten als drei Zustände.

## Aufgabe 2: Übergänge formulieren

Formuliere kurz, welches Ereignis den Wechsel von einem Zustand in den nächsten auslöst.

## Aufgabe 3: Sonderfälle bewerten

Warum kann eine lange Kette aus Sonderfällen und Delays bei so einer Aufgabe unruhiger werden als ein klares Zustandsmodell?

## Aufgabe 4: Merksatz formulieren

Schreibe einen kurzen Merksatz auf, in dem die Wörter **Zustand**, **Übergang** und **Betriebsart** alle sinnvoll vorkommen.
