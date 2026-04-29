---
title: "Grundlagen: Kalibrierung und Sensorlinearität"
description: "Allgemeiner Überblick über Messwertzuordnung, Offset, Steigung und Grenzen einfacher Sensormodelle."
subject: elektrotechnik
section: "Daten und Signale"
topicPath:
  - daten-und-signale
  - kalibrierung-und-sensorlinearitaet
  - ueberblick
learningGoals:
  - "Du erklärst die Grundidee des Themas in eigenen Worten."
  - "Du ordnest typische Begriffe, Grenzen und Fehlerquellen ruhig ein."
  - "Du erkennst, welche Detailfragen zu diesem Themenbereich gehören."
practiceIdeas:
  - "Skizziere den Zusammenhang als Prüf-, Signal- oder Strompfad."
  - "Notiere eine typische Fehlannahme und formuliere eine Gegenprobe."
commonMistakes:
  - "ADC-Werte direkt als physikalische Größe zu lesen."
  - "Offset und Steigung zu verwechseln."
  - "Ein lineares Modell außerhalb seines Bereichs zu verwenden."
keyTakeaways:
  - "Kalibrierung ordnet Messwerten Bedeutung zu."
  - "Offset und Steigung beschreiben unterschiedliche Fehlerarten."
  - "Sensorwerte sind nur im gültigen Bereich verlässlich."
recognizeSignals:
  - "Du brauchst zuerst Orientierung, bevor du eine konkrete Schaltung oder Aufgabe bewertest."
  - "Ein Einzelfall wirkt plausibel, aber der allgemeine fachliche Rahmen fehlt."
selfCheckPoints:
  - "Kann ich das Thema ohne reines Auswendiglernen erklären?"
  - "Kann ich typische Fehlerquellen in einer sinnvollen Prüfreihenfolge nennen?"
level: einfach
tags:
  - elektrotechnik
  - sensoren
  - kalibrierung
  - messwerte
draft: false
---

![Kalibrierung und Sensorlinearität](/schlaufuchs-platform/images/overviews/v182/kalibrierung-und-sensorlinearitaet.svg)

## Überblick

**Kalibrierung und Sensorlinearität** ist ein wichtiges Orientierungsthema in der Elektrotechnik. Es hilft, eine Schaltung, einen Messwert oder einen Fehlerfall nicht isoliert zu betrachten, sondern als Zusammenhang aus Ursache, Wirkung, Grenze und Prüfung.

Die Seite ist bewusst allgemein angelegt. Sie soll zuerst klären, worum es fachlich geht, bevor einzelne Aufgaben, Messsituationen oder Spezialfälle bearbeitet werden.

## Grundidee

Ein Sensor liefert zunächst ein Signal. Erst durch Kalibrierung, Modell und Bereichsprüfung wird daraus eine belastbare Aussage über eine physikalische Größe.

Entscheidend ist dabei, den Zusammenhang nicht nur aus einem einzelnen Bauteilnamen oder einem einzelnen Messwert abzuleiten. In der Praxis entstehen viele Fehler dadurch, dass Normalzustand, Fehlerfall und Gegenprobe nicht sauber getrennt werden.

## Wichtige Begriffe

- **Kalibrierung**: wichtiger Begriff im Zusammenhang mit Kalibrierung und Sensorlinearität.
- **Offset**: wichtiger Begriff im Zusammenhang mit Kalibrierung und Sensorlinearität.
- **Steigung**: wichtiger Begriff im Zusammenhang mit Kalibrierung und Sensorlinearität.
- **Linearität**: wichtiger Begriff im Zusammenhang mit Kalibrierung und Sensorlinearität.

Diese Begriffe sind keine isolierten Vokabeln. Sie beschreiben Rollen innerhalb einer Schaltung, eines Messablaufs oder einer technischen Entscheidung.

## Typische Denkweise

Eine gute Prüfung beginnt meist mit drei Fragen:

1. Welcher Zustand ist im Normalfall erwartet?
2. Welcher Fehlerfall soll erkannt, verhindert oder eingegrenzt werden?
3. Welche Messung oder Gegenprobe kann die Vermutung bestätigen oder widerlegen?

Erst danach lohnt sich der Blick auf konkrete Zahlen, Bauteile, Codeausschnitte oder Detailseiten.

## Typische Missverständnisse

- ADC-Werte direkt als physikalische Größe zu lesen.
- Offset und Steigung zu verwechseln.
- Ein lineares Modell außerhalb seines Bereichs zu verwenden.

## Beispiel

Ein typischer Praxisfall ist eine Schaltung, die scheinbar „manchmal“ funktioniert. Ohne ruhige Einordnung wird schnell ein Bauteil getauscht oder Code geändert. Sinnvoller ist, zuerst die fachliche Rolle der Signale, Strompfade, Grenzwerte und Messpunkte zu klären.

Das Beispiel zeigt: Die entscheidende Frage ist selten nur „welches Bauteil ist beteiligt?“. Wichtiger ist, welche Aufgabe dieses Bauteil im System erfüllt und welche Aussage eine Messung wirklich erlaubt.

## Abgrenzung

Diese Überblicksseite ersetzt keine Detailseite. Einzelne Seiten können konkrete Rechnungen, Schaltbilder, Messungen oder Programmbeispiele behandeln. Hier geht es um den gemeinsamen Rahmen: Begriff, Zweck, Zusammenhang und typische Fehlerquellen.

## Merksätze

- Kalibrierung ordnet Messwerten Bedeutung zu.
- Offset und Steigung beschreiben unterschiedliche Fehlerarten.
- Sensorwerte sind nur im gültigen Bereich verlässlich.
