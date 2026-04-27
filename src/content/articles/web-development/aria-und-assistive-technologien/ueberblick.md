---
title: "ARIA und assistive Technologien"
description: "Allgemeiner Überblick über ARIA, Rollen und assistive Technologien."
subject: web-development
section: "Barrierefreiheit"
topicPath:
  - "aria-und-assistive-technologien"
  - "ueberblick"
learningGoals:
  - "Du kannst ARIA und assistive Technologien als Grundbegriff einordnen."
  - "Du kennst zentrale Eigenschaften und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse zu diesem Thema erkennen."
practiceIdeas: []
commonMistakes:
  - "Falsche ARIA-Angaben können schlechter sein als gar keine, weil sie Nutzenden falsche Informationen liefern."
keyTakeaways:
  - "ARIA ergänzt HTML dort, wo komplexe Interaktion zusätzliche Semantik braucht."
  - "ARIA und assistive Technologien sollte immer im fachlichen Zusammenhang betrachtet werden."
recognizeSignals:
  - "Es geht um Grundlagen, typische Begriffe oder Abgrenzungen rund um ARIA und assistive Technologien."
selfCheckPoints:
  - "Kann ich erklären, woran man ARIA und assistive Technologien erkennt und wovon es abzugrenzen ist?"
level: einfach
tags:
  - "web development"
  - "aria"
  - "barrierefreiheit"
  - "screenreader"
draft: false
---

# ARIA und assistive Technologien

![Schaubild zu ARIA und assistiven Technologien.](/schlaufuchs-platform/images/overviews/v150/aria-und-assistive-technologien.svg)

*Das Schaubild zeigt, wie Rollen und Zustände zusätzliche Bedeutung transportieren.*



ARIA ist eine Sammlung von Attributen, mit denen Rollen, Zustände und Beziehungen für assistive Technologien beschrieben werden können.

ARIA wird wichtig, wenn native HTML-Semantik nicht ausreicht, etwa bei komplexen interaktiven Komponenten.

## Einordnung

Der Begriff ist besonders hilfreich, wenn einzelne Beobachtungen nicht isoliert, sondern als Teil eines größeren Zusammenhangs verstanden werden sollen. In Lern- und Praxiszusammenhängen dient er als Orientierung, bevor Spezialfälle oder Rechenverfahren betrachtet werden.

## Zentrale Aspekte

Rollen beschreiben, welche Aufgabe ein Element erfüllt.

Zustände wie geöffnet, ausgewählt oder deaktiviert können maschinenlesbar gemacht werden.

Beziehungen verbinden Beschriftungen, Hinweise und Bedienelemente.

## Abgrenzung

ARIA repariert keine falsche Grundstruktur. Native HTML-Elemente sind meistens robuster.

## Beispiele und typische Situationen

Ein Dialog kann mit Rolle, Beschriftung und Fokusführung zugänglich gemacht werden.

Ein Akkordeon muss seinen geöffneten Zustand verständlich mitteilen.

## Häufige Missverständnisse

Falsche ARIA-Angaben können schlechter sein als gar keine, weil sie Nutzenden falsche Informationen liefern.

## Kurz zusammengefasst

ARIA ergänzt HTML dort, wo komplexe Interaktion zusätzliche Semantik braucht.
