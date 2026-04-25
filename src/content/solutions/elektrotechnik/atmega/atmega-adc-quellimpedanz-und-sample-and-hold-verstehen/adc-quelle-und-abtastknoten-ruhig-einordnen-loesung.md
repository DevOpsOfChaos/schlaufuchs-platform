---
title: Musterlösung – ADC-Quelle und Abtastknoten ruhig einordnen
description: Musterlösung zur Aufgabe ET-ATMEGA-ADC-307.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - adc-und-messung
  - atmega-adc-quellimpedanz-und-sample-and-hold-verstehen
  - adc-quelle-und-abtastknoten-ruhig-einordnen-loesung
taskId: ET-ATMEGA-ADC-307
relatedExercise: src/content/exercises/elektrotechnik/atmega/atmega-adc-quellimpedanz-und-sample-and-hold-verstehen/adc-quelle-und-abtastknoten-ruhig-einordnen.md
tags:
  - elektrotechnik
  - mikrocontroller
  - atmega
  - adc
  - loesung
draft: false
---

## Aufgabe 1

Sample-and-Hold bedeutet vereinfacht, dass der ADC einen Eingangszustand zunächst übernimmt und dann während der Wandlung festhält. Der Eingangswert muss dafür den internen Abtastknoten sinnvoll aufladen können. Genau deshalb ist der ADC nicht nur eine abstrakte Zahlenmaschine, sondern auch zeitlich an den Eingang gekoppelt.

## Aufgabe 2

Bei einer hochohmigen Quelle wird der interne Knoten langsamer auf den gewünschten Spannungswert gezogen. Dadurch kann der ADC bei kurzer Zeitbasis oder direkt nach einem Umschalten noch keinen ruhigen Zustand sehen. Eine niederohmige Quelle lädt diesen Knoten schneller nach.

## Aufgabe 3

Nach einem Kanalwechsel trägt der interne Knoten noch Anteile des vorherigen Kanals. Die neue Quelle muss diesen Zustand erst auf ihren eigenen Wert ziehen. Liest man zu früh, kann der erste Wert deshalb noch Übergangsanteile enthalten und unruhig wirken.

## Aufgabe 4

Ein möglicher Merksatz lautet:

> Der ADC liest nicht nur eine Spannung, sondern braucht auch Zeit, damit sein Eingangsknoten diese Spannung sauber übernehmen kann.
