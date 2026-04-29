---
title: "Grundlagen: Open-Drain und Open-Collector"
description: "Allgemeiner Überblick über offene Ausgänge, Pull-up-Widerstände und gemeinsames Busverhalten."
subject: elektrotechnik
section: "Digitale Eingänge und Ausgänge"
topicPath:
  - digitale-eingaenge-und-ausgaenge
  - open-drain-und-open-collector
  - ueberblick
learningGoals:
  - "Du erklärst die Grundidee des Themas in eigenen Worten."
  - "Du ordnest typische Begriffe, Grenzen und Fehlerquellen ruhig ein."
  - "Du erkennst, welche Detailfragen zu diesem Themenbereich gehören."
practiceIdeas:
  - "Skizziere den Zusammenhang als Prüf-, Signal- oder Strompfad."
  - "Notiere eine typische Fehlannahme und formuliere eine Gegenprobe."
commonMistakes:
  - "Open-Drain wie einen normalen High-Treiber zu lesen."
  - "Den Pull-up als optionales Detail zu behandeln."
  - "Mehrere Ausgänge gegeneinander treiben zu lassen."
keyTakeaways:
  - "Open-Drain-Ausgänge ziehen typischerweise nur aktiv nach Low."
  - "Der High-Zustand entsteht über Pull-up und Leitung."
  - "Dieses Prinzip erlaubt gemeinsames Bus- oder Alarmverhalten."
recognizeSignals:
  - "Du brauchst zuerst Orientierung, bevor du eine konkrete Schaltung oder Aufgabe bewertest."
  - "Ein Einzelfall wirkt plausibel, aber der allgemeine fachliche Rahmen fehlt."
selfCheckPoints:
  - "Kann ich das Thema ohne reines Auswendiglernen erklären?"
  - "Kann ich typische Fehlerquellen in einer sinnvollen Prüfreihenfolge nennen?"
level: einfach
tags:
  - elektrotechnik
  - open-drain
  - open-collector
  - pullup
draft: false
---

![Open-Drain und Open-Collector](/schlaufuchs-platform/images/overviews/v182/open-drain-und-open-collector.svg)

## Überblick

**Open-Drain und Open-Collector** ist ein wichtiges Orientierungsthema in der Elektrotechnik. Es hilft, eine Schaltung, einen Messwert oder einen Fehlerfall nicht isoliert zu betrachten, sondern als Zusammenhang aus Ursache, Wirkung, Grenze und Prüfung.

Die Seite ist bewusst allgemein angelegt. Sie soll zuerst klären, worum es fachlich geht, bevor einzelne Aufgaben, Messsituationen oder Spezialfälle bearbeitet werden.

## Grundidee

Ein Open-Drain-Ausgang stellt High nicht selbst aktiv her. Dadurch müssen Ausgang, Pull-up und gemeinsamer Leitungszustand zusammen gelesen werden.

Entscheidend ist dabei, den Zusammenhang nicht nur aus einem einzelnen Bauteilnamen oder einem einzelnen Messwert abzuleiten. In der Praxis entstehen viele Fehler dadurch, dass Normalzustand, Fehlerfall und Gegenprobe nicht sauber getrennt werden.

## Wichtige Begriffe

- **Open-Drain**: wichtiger Begriff im Zusammenhang mit Open-Drain und Open-Collector.
- **Open-Collector**: wichtiger Begriff im Zusammenhang mit Open-Drain und Open-Collector.
- **Pull-up**: wichtiger Begriff im Zusammenhang mit Open-Drain und Open-Collector.
- **Low-aktiv**: wichtiger Begriff im Zusammenhang mit Open-Drain und Open-Collector.

Diese Begriffe sind keine isolierten Vokabeln. Sie beschreiben Rollen innerhalb einer Schaltung, eines Messablaufs oder einer technischen Entscheidung.

## Typische Denkweise

Eine gute Prüfung beginnt meist mit drei Fragen:

1. Welcher Zustand ist im Normalfall erwartet?
2. Welcher Fehlerfall soll erkannt, verhindert oder eingegrenzt werden?
3. Welche Messung oder Gegenprobe kann die Vermutung bestätigen oder widerlegen?

Erst danach lohnt sich der Blick auf konkrete Zahlen, Bauteile, Codeausschnitte oder Detailseiten.

## Typische Missverständnisse

- Open-Drain wie einen normalen High-Treiber zu lesen.
- Den Pull-up als optionales Detail zu behandeln.
- Mehrere Ausgänge gegeneinander treiben zu lassen.

## Beispiel

Ein typischer Praxisfall ist eine Schaltung, die scheinbar „manchmal“ funktioniert. Ohne ruhige Einordnung wird schnell ein Bauteil getauscht oder Code geändert. Sinnvoller ist, zuerst die fachliche Rolle der Signale, Strompfade, Grenzwerte und Messpunkte zu klären.

Das Beispiel zeigt: Die entscheidende Frage ist selten nur „welches Bauteil ist beteiligt?“. Wichtiger ist, welche Aufgabe dieses Bauteil im System erfüllt und welche Aussage eine Messung wirklich erlaubt.

## Abgrenzung

Diese Überblicksseite ersetzt keine Detailseite. Einzelne Seiten können konkrete Rechnungen, Schaltbilder, Messungen oder Programmbeispiele behandeln. Hier geht es um den gemeinsamen Rahmen: Begriff, Zweck, Zusammenhang und typische Fehlerquellen.

## Merksätze

- Open-Drain-Ausgänge ziehen typischerweise nur aktiv nach Low.
- Der High-Zustand entsteht über Pull-up und Leitung.
- Dieses Prinzip erlaubt gemeinsames Bus- oder Alarmverhalten.
