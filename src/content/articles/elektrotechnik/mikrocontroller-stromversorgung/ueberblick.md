---
title: "Mikrocontroller-Stromversorgung"
description: "Überblick über Versorgungsspannung, Masse, Entkopplung und typische Stabilitätsfragen bei Mikrocontrollern."
subject: elektrotechnik
section: "Mikrocontroller"
topicPath:
  - "mikrocontroller-stromversorgung"
  - "ueberblick"
learningGoals:
  - "Du kannst Versorgungsspannung und Masse als Bezugssystem einordnen."
  - "Du kennst typische Ursachen instabiler Mikrocontroller-Schaltungen."
  - "Du verstehst die Rolle von Entkopplung und Spannungsreglern."
practiceIdeas: []
commonMistakes:
  - "Nur die Nennspannung zu betrachten und Strombedarf, Einbrüche oder Masseführung zu ignorieren."
  - "Entkopplungskondensatoren als optionales Detail zu behandeln."
keyTakeaways:
  - "Eine stabile Versorgung ist Grundlage für zuverlässige digitale und analoge Signale."
  - "Masse ist ein gemeinsames Bezugspotential, nicht nur ein beliebiger Rückleiter."
recognizeSignals:
  - "Es geht um Reset, Brown-out, Störungen, Spannungseinbrüche, Regler, Masse oder unzuverlässiges Startverhalten."
selfCheckPoints:
  - "Kann ich erklären, warum ein Mikrocontroller trotz richtiger Nennspannung instabil laufen kann?"
level: einfach
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "stromversorgung"
draft: false
---

# Mikrocontroller-Stromversorgung

![Schaubild zur Stromversorgung eines Mikrocontrollers.](/schlaufuchs-platform/images/overviews/v148/mikrocontroller-stromversorgung.svg)

*Das Schaubild zeigt den Weg von der Quelle über die Regelung bis zum versorgten Mikrocontroller.*



## Grundidee
Ein Mikrocontroller benötigt eine Versorgungsspannung innerhalb eines zulässigen Bereichs und ein gemeinsames Bezugspotential. Viele Fehler entstehen nicht durch falsch programmierten Code, sondern durch instabile Versorgung, schlechte Masseverbindungen, fehlende Entkopplung oder Lasten, die zu viel Strom ziehen.

## Spannung und Strom
Die Datenblattangabe zur Spannung beschreibt nur einen Teil der Versorgung. Zusätzlich muss die Quelle genügend Strom liefern können. Relais, Motoren, LEDs, Funkmodule oder Sensoren können beim Einschalten kurze Stromspitzen erzeugen. Solche Spitzen können die Versorgung kurz absenken und dadurch Reset, Fehlmessungen oder undefiniertes Verhalten auslösen.

## Entkopplung
Entkopplungskondensatoren liegen nahe an Versorgungspins und puffern schnelle Stromänderungen. Sie verhindern nicht jede Störung, reduzieren aber lokale Spannungseinbrüche. Größere Kondensatoren können langsamere Lastwechsel ausgleichen. Gute Versorgung ist daher eine Kombination aus passender Quelle, Regler, Leitungsführung und Kondensatoren.

## Bezug zur Signalqualität
Digitale Pegel und analoge Messwerte beziehen sich auf die Versorgung und Masse. Wenn Masse wackelt oder die Versorgung rauscht, können Eingänge falsch gelesen oder ADC-Werte unruhig werden. Stromversorgung ist deshalb kein Nebenthema, sondern Teil der Signalqualität.

## Abgrenzung
Eine Stromversorgung ist nicht automatisch gut, nur weil ein Multimeter im Leerlauf die richtige Spannung zeigt. Entscheidend ist das Verhalten unter Last und bei schnellen Änderungen. Für robuste Schaltungen müssen Versorgung, Masseführung und Störungen gemeinsam betrachtet werden.

## Kurz zusammengefasst
Diese Überblicksseite ordnet das Thema allgemein ein. Sie soll den Einstieg erleichtern, bevor einzelne Spezialfälle, Aufgaben oder konkrete Situationen betrachtet werden.
