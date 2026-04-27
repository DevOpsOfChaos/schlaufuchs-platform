---
title: "Logikpegel und Kompatibilität"
description: "Überblick über digitale Logikpegel und die Frage, wann Baugruppen elektrisch zusammenpassen."
subject: elektrotechnik
section: "Digitale Signale"
topicPath:
  - logikpegel-und-kompatibilitaet
  - ueberblick
learningGoals:
  - "Du kannst das Thema allgemein einordnen und von verwandten Begriffen abgrenzen."
  - "Du kennst wichtige Teilaspekte und typische Anwendungsfälle."
  - "Du erkennst häufige Missverständnisse und prüfst Aussagen auf Plausibilität."
practiceIdeas: []
commonMistakes:
  - "Ein häufiger Irrtum ist, dass ein funktionierender Test auf dem Steckbrett automatisch sichere Kompatibilität beweist."
keyTakeaways:
  - "Digitale Signale werden oft als 0 und 1 beschrieben."
  - "Die genaue Bedeutung hängt vom Zusammenhang, den Einheiten und den Randbedingungen ab."
recognizeSignals:
  - "Das Thema taucht auf, wenn Begriffe, Beispiele oder Fehlerbilder aus diesem Bereich erklärt und eingeordnet werden sollen."
selfCheckPoints:
  - "Kann ich das Thema in eigenen Worten erklären, ohne sofort eine Spezialaufgabe zu rechnen?"
level: einfach
tags:
  - "elektrotechnik"
  - "logikpegel"
  - "kompatibilität"
draft: false
---

# Logikpegel und Kompatibilität

## Begriff und Zweck

Digitale Signale werden oft als 0 und 1 beschrieben. In der Schaltungstechnik stehen dahinter Spannungsbereiche. Ob ein Signal als High oder Low erkannt wird, hängt von Eingangsschwellen, Versorgungsspannung und Bauteilfamilie ab. Deshalb sind 3,3-Volt- und 5-Volt-Systeme nicht automatisch kompatibel.

## Wichtige Zusammenhänge

Wichtige Teilaspekte sind:

- High- und Low-Schwellen
- zulässige Eingangsspannung
- Ausgangspegel unter Last
- Pegelwandler und Pull-ups

Diese Punkte gehören zusammen. Ein einzelner Begriff erklärt meist noch nicht, ob eine Lösung zuverlässig, verständlich oder fachlich passend ist. Deshalb lohnt sich die Einordnung: Was wird betrachtet, welche Annahmen gelten und welche Grenzen hat das Modell oder Werkzeug?

## Beispiele und typische Verwendung

Ein 3,3-Volt-Ausgang kann von manchen 5-Volt-Eingängen als High erkannt werden, von anderen nicht. Ein 5-Volt-Ausgang kann einen 3,3-Volt-Eingang beschädigen, wenn dieser nicht tolerant ist. Bei I2C spielen Pull-up-Widerstände eine besondere Rolle, weil sie den Bus auf die jeweilige Spannung ziehen.

## Abgrenzung

Logikkompatibilität bedeutet mehr als gleiche Stecker oder gleiche Signalnamen. Sie umfasst Spannung, Strom, Zeitverhalten und Schutzgrenzen. Auch Massebezug und Leitungslänge können darüber entscheiden, ob eine Verbindung zuverlässig funktioniert.

## Häufige Missverständnisse

Ein häufiger Irrtum ist, dass ein funktionierender Test auf dem Steckbrett automatisch sichere Kompatibilität beweist. Bauteile können außerhalb ihrer Spezifikation kurzfristig funktionieren und trotzdem langfristig beschädigt werden oder bei Temperatur und Toleranzen ausfallen.

## Einordnung für Schlaufuchs

Diese Überblicksseite ist als ruhiger Einstieg gedacht. Sie sammelt Grundbegriffe, typische Zusammenhänge und Grenzen, bevor einzelne Spezialfälle, Aufgaben oder Fehlersituationen betrachtet werden.
