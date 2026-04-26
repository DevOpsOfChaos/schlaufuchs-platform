---
title: "Lösung – autocomplete und inputmode sinnvoll nutzen"
description: "Musterlösung mit fachlicher Begründung zur passenden Web-Development-Aufgabe."
subject: "web-development"
section: "HTML"
topicPath:
  - "html"
  - "formulare-und-eingaben"
  - "autocomplete-und-inputmode-sinnvoll-nutzen"
tags:
  - "web development"
  - "html"
  - "formulare"
  - "autocomplete"
  - "inputmode"
  - "ux"
  - "lösung"
taskId: "web-v103-autocomplete-und-inputmode-sinnvoll-nutzen"
relatedExercise: "web-development/html/formulare-und-eingaben/autocomplete-und-inputmode-sinnvoll-nutzen"
draft: false
---

## Lösung

Name, E-Mail und Telefonnummer erhalten passende `autocomplete`-Werte; die Telefonnummer nutzt `inputmode="tel"`, ohne unnötig streng zu validieren.

## Kontrollgedanke

Die Lösung ist gut, wenn sie nicht nur Syntax nennt, sondern die Verantwortung sauber trennt: Struktur lesen, Zustand entscheiden, verständlich rückmelden und den Fehlerfall nicht unsichtbar lassen.

## Beispielhafte Begründung

Eine robuste Umsetzung beginnt mit verständlichem Markup, ergänzt Gestaltung nur dort, wo sie Verhalten nicht verdeckt, und nutzt JavaScript für klare Zustände statt für versteckte Magie. So bleibt die Seite auch dann nachvollziehbar, wenn Daten fehlen, ein Gerät klein ist oder eine Aktion nicht sofort gelingt.
