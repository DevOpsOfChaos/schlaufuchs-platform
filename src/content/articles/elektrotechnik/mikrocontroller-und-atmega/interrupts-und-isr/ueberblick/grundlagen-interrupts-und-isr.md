---
title: "Grundlagen: Interrupts und ISR"
description: "Allgemeiner Überblick über Ereignisse, Interrupt-Service-Routinen und kurze Reaktionswege in Mikrocontrollerprogrammen."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - mikrocontroller-und-atmega
  - interrupts-und-isr
  - ueberblick
learningGoals:
  - "Du erklärst die Grundidee von Interrupts und ISR in eigenen Worten."
  - "Du ordnest typische Begriffe und Fehlerquellen ruhig ein."
  - "Du erkennst, welche Detailfragen zu diesem Themenbereich gehören."
practiceIdeas:
  - "Skizziere den Zusammenhang als kleines Signal-, Strom- oder Ablaufbild."
  - "Notiere typische Fehlerquellen und prüfe, ob sie elektrisch, logisch oder organisatorisch sind."
commonMistakes:
  - "In einer ISR lange Wartezeiten einzubauen."
  - "Flags und eigentliche Verarbeitung zu vermischen."
  - "Gemeinsame Variablen ohne Schutz zu verändern."
keyTakeaways:
  - "Interrupts reagieren auf Ereignisse."
  - "Eine ISR sollte kurz bleiben."
  - "Hauptprogramm und ISR brauchen klare Zuständigkeiten."
recognizeSignals:
  - "Du brauchst zuerst Orientierung, bevor du eine konkrete Schaltung oder Aufgabe bewertest."
  - "Mehrere Einzelfälle wirken ähnlich, aber der gemeinsame fachliche Rahmen fehlt."
selfCheckPoints:
  - "Kann ich den Zweck des Themas ohne Formel auswendig zu lernen erklären?"
  - "Kann ich typische Fehlerquellen in der richtigen Reihenfolge prüfen?"
level: einfach
tags:
  - elektrotechnik
  - interrupts-und-isr
  - mikrocontroller-und-atmega
draft: false
---

![Interrupt als Ereignispfad](/schlaufuchs-platform/images/overviews/v181/interrupts-und-isr.svg)

## Überblick

**Interrupts und ISR** ist ein Querschnittsthema der Elektrotechnik. Es hilft, Schaltungen nicht nur als Sammlung einzelner Bauteile zu sehen, sondern als geordneten Zusammenhang aus Ursache, Wirkung, Grenze und Prüfung.

Die Seite ist bewusst allgemein angelegt. Sie soll Orientierung geben, bevor einzelne Aufgaben, Messsituationen oder Spezialfälle bearbeitet werden.

## Grundidee

Ein Timerereignis oder externer Pinwechsel kann ein Programm unterbrechen. Die Reaktion sollte kurz und klar bleiben.

Wichtig ist dabei, nicht nur den sichtbaren Einzelzustand zu betrachten. In der Elektrotechnik entstehen viele Fehler dadurch, dass Strompfade, Bezugspunkte, Grenzwerte oder zeitliche Abläufe nicht gemeinsam gelesen werden.

## Wichtige Begriffe

- **Interrupt**: wichtiger Begriff im Zusammenhang mit Interrupts und ISR.
- **ISR**: wichtiger Begriff im Zusammenhang mit Interrupts und ISR.
- **Flag**: wichtiger Begriff im Zusammenhang mit Interrupts und ISR.
- **Hauptprogramm**: wichtiger Begriff im Zusammenhang mit Interrupts und ISR.

Diese Begriffe sind keine isolierten Vokabeln. Sie beschreiben Rollen innerhalb einer Schaltung oder eines Messablaufs.

## Typische Denkweise

Eine gute Prüfung beginnt meist mit drei Fragen:

1. Welcher Zustand ist im Normalfall erwartet?
2. Welcher Fehlerfall soll erkannt oder verhindert werden?
3. Welche Grenze darf im Betrieb nicht überschritten werden?

Erst danach lohnt sich der Blick auf konkrete Zahlen, Bauteile oder Codeausschnitte.

## Typische Missverständnisse

- In einer ISR lange Wartezeiten einzubauen.
- Flags und eigentliche Verarbeitung zu vermischen.
- Gemeinsame Variablen ohne Schutz zu verändern.

## Beispiel

Ein Timerereignis oder externer Pinwechsel kann ein Programm unterbrechen. Die Reaktion sollte kurz und klar bleiben.

Das Beispiel zeigt: Die fachliche Frage ist selten nur „welches Bauteil wird benutzt?“. Entscheidend ist, welche Aufgabe das Bauteil im System erfüllt.

## Abgrenzung

Diese Überblicksseite ersetzt keine Detailseite. Einzelne Seiten können konkrete Rechnungen, Schaltbilder, Messungen oder Programmbeispiele behandeln. Hier geht es um den gemeinsamen Rahmen: Begriff, Zweck, Zusammenhang und typische Fehlerquellen.

## Merksätze

- Interrupts reagieren auf Ereignisse.
- Eine ISR sollte kurz bleiben.
- Hauptprogramm und ISR brauchen klare Zuständigkeiten.
