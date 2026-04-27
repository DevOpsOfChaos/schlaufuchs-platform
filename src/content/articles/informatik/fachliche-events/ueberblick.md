---
title: "Fachliche Events"
description: "Überblick über fachliche Ereignisse als Ausdruck bedeutsamer Änderungen in einem System."
subject: informatik
section: "Domäne"
topicPath:
  - "fachliche-events"
  - "ueberblick"
learningGoals:
  - "Du kannst Fachliche Events als Grundbegriff einordnen."
  - "Du kennst zentrale Zusammenhänge, typische Teilaspekte und Abgrenzungen."
  - "Du kannst häufige Missverständnisse benennen und vermeiden."
practiceIdeas: []
commonMistakes:
  - "Events als Befehle zu formulieren, etwa `SendEmail`, und dadurch fachliche Bedeutung zu verlieren."
keyTakeaways:
  - "Domänenereignisse benennen fachlich relevante Tatsachen."
  - "Sie entkoppeln Reaktionen von der auslösenden Logik."
  - "Gute Namen beschreiben, was passiert ist."
recognizeSignals:
  - "Eine fachliche Änderung soll mehrere Reaktionen auslösen."
  - "Systemteile sollen lose gekoppelt werden."
selfCheckPoints:
  - "Kann ich Fachliche Events in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "informatik"
  - "domäne"
  - "events"
  - "architektur"
draft: false
---

# Fachliche Events

Ein Domänenereignis beschreibt, dass in der Fachdomäne etwas Relevantes passiert ist.

## Einordnung

Domänenereignisse helfen, Systeme fachlich zu entkoppeln. Statt nur technische Änderungen zu melden, benennen sie Bedeutungen wie Bestellung aufgegeben, Zahlung bestätigt oder Konto gesperrt.

## Zentrale Aspekte

- Der Name sollte fachliche Vergangenheit ausdrücken.
- Ein Event ist eine Tatsache, kein Befehl.
- Konsumenten reagieren unabhängig auf das Ereignis.
- Nicht jede Datenänderung ist ein Domänenereignis.

## Beispiele und Zusammenhang

`InvoicePaid` ist ein Domänenereignis. Es kann E-Mail-Versand, Buchhaltung und Berichtswesen auslösen, ohne diese direkt zu kennen.

## Abgrenzung

Ein Domänenereignis ist nicht dasselbe wie ein technischer Logeintrag. Es beschreibt fachliche Bedeutung.

## Häufige Missverständnisse

Events als Befehle zu formulieren, etwa `SendEmail`, und dadurch fachliche Bedeutung zu verlieren.

## Kurz zusammengefasst

- Domänenereignisse benennen fachlich relevante Tatsachen.
- Sie entkoppeln Reaktionen von der auslösenden Logik.
- Gute Namen beschreiben, was passiert ist.
