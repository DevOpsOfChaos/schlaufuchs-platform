---
title: "Interrupts und ISR"
description: "Allgemeiner Überblick über Interrupts und Interrupt-Service-Routinen in Mikrocontroller-Systemen."
subject: elektrotechnik
section: "Mikrocontroller"
topicPath:
  - "interrupts-und-isr"
  - "ueberblick"
learningGoals:
  - "Du kennst Interrupts als Reaktion auf Ereignisse."
  - "Du kannst eine ISR als kurze Behandlungsroutine einordnen."
  - "Du verstehst typische Risiken durch Nebenläufigkeit."
practiceIdeas: []
commonMistakes:
  - "Eine ISR wie eine normale lange Funktion zu verwenden."
  - "Gemeinsame Variablen ohne Schutz oder klare Regeln zu verändern."
keyTakeaways:
  - "Interrupts ermöglichen schnelle Reaktionen auf wichtige Ereignisse."
  - "ISRs sollten kurz, vorhersehbar und gut abgegrenzt bleiben."
recognizeSignals:
  - "Es geht um externe Flanken, Timerereignisse, Empfangsdaten oder schnelle Reaktionen."
selfCheckPoints:
  - "Kann ich erklären, warum eine ISR möglichst wenig Arbeit erledigen sollte?"
level: einfach
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "interrupt"
  - "isr"
draft: false
---

# Interrupts und ISR

![Schaubild zu Interrupt, ISR und Hauptprogramm.](/schlaufuchs-platform/images/overviews/v148/interrupts-und-isr.svg)

*Das Schaubild zeigt das Zusammenspiel von Ereignis, Interrupt-Service-Routine und Hauptprogramm.*


Ein Interrupt ist eine Unterbrechung des normalen Programmablaufs durch ein Ereignis. Ein Mikrocontroller kann dadurch schnell auf einen Tastendruck, einen Timervergleich, ein empfangenes Byte oder eine Signalflanke reagieren. Die zugehörige Behandlungsroutine heißt Interrupt-Service-Routine, kurz ISR.

Der normale Programmcode läuft weiter, bis ein aktivierter Interrupt ausgelöst wird. Dann merkt sich der Prozessor den aktuellen Zustand, springt zur ISR und kehrt danach an die unterbrochene Stelle zurück. Für das Programm wirkt das wie ein kurzer Einschub, der zu einem schwer vorhersehbaren Zeitpunkt auftreten kann.

## Zweck

Interrupts sind nützlich, wenn ein Ereignis nicht verpasst werden darf oder wenn regelmäßige Abläufe unabhängig vom Hauptprogramm stattfinden sollen. Sie vermeiden ständiges Abfragen in engen Schleifen und ermöglichen reaktionsfähige Programme.

## Typische Quellen

Timer können Interrupts auslösen, wenn ein Vergleichswert erreicht oder ein Überlauf passiert. Externe Pins können auf steigende oder fallende Flanken reagieren. Kommunikationsschnittstellen können melden, dass Daten empfangen wurden. Analog-Digital-Wandler können signalisieren, dass eine Messung fertig ist.

## Rolle der ISR

Eine ISR sollte kurz bleiben. Sie setzt oft nur ein Flag, speichert einen Messwert oder zählt ein Ereignis. Umfangreiche Berechnungen, lange Wartezeiten oder Ausgaben gehören meist ins Hauptprogramm. Je länger eine ISR läuft, desto eher blockiert sie andere zeitkritische Ereignisse.

## Nebenläufigkeit

Interrupts erzeugen eine einfache Form von Nebenläufigkeit. Das Hauptprogramm und die ISR können auf dieselben Variablen zugreifen. Wenn diese Zugriffe nicht bedacht werden, entstehen schwer reproduzierbare Fehler. Besonders mehrbyteige Werte, Zähler und Statusflags müssen sorgfältig behandelt werden.

## Häufige Missverständnisse

Ein Interrupt ist nicht automatisch schneller, wenn die ISR zu viel Arbeit enthält. Außerdem löst ein Interrupt kein Strukturproblem im Programm. Er verschiebt nur die Reaktion auf ein Ereignis in einen besonderen Kontext mit eigenen Regeln.

## Kurz zusammengefasst

Interrupts machen Mikrocontroller reaktionsfähig. Ihre Stärke liegt in kurzen, klaren Behandlungen wichtiger Ereignisse. Zuverlässig werden sie erst, wenn ISR, Hauptprogramm und gemeinsame Daten sauber voneinander abgegrenzt sind.
