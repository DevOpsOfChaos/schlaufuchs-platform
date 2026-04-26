---
title: "Grundlagen: Timer und Zeitbasis"
description: "Allgemeine Einordnung zu Mikrocontroller-Timern, Prescaler, Überlauf und periodischen Abläufen."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - "mikrocontroller-und-atmega"
  - "timer-und-zeitbasis"
  - "ueberblick"
learningGoals:
  - "Du kennst die Grundidee des Themas und kannst sie in eigenen Worten erklären."
  - "Du kannst typische Begriffe einordnen, ohne sofort in Spezialfälle zu springen."
  - "Du erkennst, welche Detailseiten zu welchem Teilaspekt gehören."
practiceIdeas:
  - "Lies zuerst diese Überblicksseite und danach eine passende Detailseite."
  - "Notiere drei zentrale Begriffe und formuliere zu jedem eine kurze Erklärung."
  - "Ordne eine konkrete Aufgabe dem passenden Teilaspekt des Themas zu."
commonMistakes:
  - "Direkt mit Spezialfällen zu beginnen, bevor die Grundidee klar ist."
  - "Ähnliche Begriffe zu vermischen, obwohl sie verschiedene Rollen haben."
  - "Ein einzelnes Beispiel für das gesamte Thema zu halten."
keyTakeaways:
  - "Die Überblicksseite erklärt den allgemeinen Zusammenhang des Themas."
  - "Detailseiten behandeln danach konkrete Situationen, Methoden oder Fehlerbilder."
  - "Gute Orientierung entsteht durch Definition, Zweck, Aufbau und Abgrenzung."
recognizeSignals:
  - "Du suchst zuerst eine allgemeine Einordnung statt einer einzelnen Übungssituation."
  - "Mehrere Detailseiten wirken ähnlich und sollen fachlich sortiert werden."
  - "Ein Thema braucht eine ruhige Erklärung, bevor Beispiele sinnvoll werden."
selfCheckPoints:
  - "Kann ich das Thema in zwei bis drei Sätzen allgemein erklären?"
  - "Kann ich die wichtigsten Unterbegriffe voneinander unterscheiden?"
  - "Weiß ich, welche Detailseite ich als Nächstes lesen würde?"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "timer"
  - "zeitbasis"
level: einfach
draft: false
---

Ein Timer ist ein Zählwerk im Mikrocontroller, das aus einem Takt eine messbare oder nutzbare Zeitbasis erzeugt. Er zählt nicht Zeit im Alltagssinn, sondern Taktimpulse.

## Einordnung

Timer werden für Blinken, Messen, PWM, Abtastraten und regelmäßige Programmteile genutzt. Sie verbinden digitale Zähllogik mit realer Zeit.

## Warum das Thema wichtig ist

Ohne Überblick wirken Detailseiten schnell wie voneinander getrennte Einzelfälle. Diese Seite erklärt deshalb zuerst den allgemeinen Zusammenhang, bevor konkrete Situationen, Aufgaben oder Fehlerbilder behandelt werden.

## Zentrale Bestandteile

- **Systemtakt:** Die Grundgeschwindigkeit des Controllers.
- **Prescaler:** Ein Teiler, der den Timer-Takt verlangsamt.
- **Zählbereich:** Die Anzahl möglicher Zählerstände.
- **Compare Match:** Ein Ereignis bei einem festgelegten Zählerwert.

## Grundprinzip

Das Thema wird zuerst über Begriffe, Zweck und typische Entscheidungen verstanden. Erst danach lohnt sich der Blick auf Spezialfälle, Codebeispiele, Messwerte oder Rechenschritte.

## Abgrenzung zu Detailseiten

Detailseiten erklären konkrete Methoden, Situationen oder Fehlerbilder. Diese Überblicksseite ist allgemeiner: Sie beschreibt, worum es im Themenfeld geht, warum es gebraucht wird und wie die folgenden Lernseiten eingeordnet werden können.

## Beispielhafte Anwendung

Eine blinkende LED kann über einen Timer gesteuert werden, ohne dass das Hauptprogramm mit blockierenden Wartezeiten angehalten wird.

## Zusammenfassung

Eine gute Überblicksseite ersetzt keine Detailseite. Sie ordnet ein Thema so ein, dass einzelne Spezialfälle später verständlich werden. Wer zuerst Begriffe, Zweck und Grenzen kennt, kann Aufgaben und Beispiele deutlich ruhiger lesen.
