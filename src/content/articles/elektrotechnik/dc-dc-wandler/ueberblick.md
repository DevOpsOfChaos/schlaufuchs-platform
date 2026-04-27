---
title: "DC-DC-Wandler"
description: "Einordnung von DC-DC-Wandlern zur effizienten Umwandlung von Gleichspannungen."
subject: elektrotechnik
section: "Versorgung"
topicPath:
  - "dc-dc-wandler"
  - "ueberblick"
learningGoals:
  - "Du kannst DC-DC-Wandler als Grundbegriff einordnen."
  - "Du kennst zentrale Teilaspekte und typische Einsatzbereiche."
  - "Du kannst häufige Missverständnisse von der Grundidee trennen."
practiceIdeas: []
commonMistakes:
  - "Häufig wird der Wandler nur nach Ausgangsspannung ausgewählt."
keyTakeaways:
  - "Schaltregler sind effizient, aber layout- und störungssensibel."
  - "Wandler müssen zur Last und zum Spannungsbereich passen."
  - "Ripple und EMV sind bei DC-DC-Wandlern normale Planungsthemen."
recognizeSignals:
  - "Es geht um DC-DC-Wandler als allgemeines Thema, nicht nur um einen Einzelfall."
  - "Begriffe, Zusammenhänge und Grenzen sollen zuerst geklärt werden."
selfCheckPoints:
  - "Kann ich DC-DC-Wandler in eigenen Worten erklären?"
  - "Kann ich ein typisches Beispiel nennen und eine Grenze beschreiben?"
level: einfach
tags:
  - "elektrotechnik"
  - "versorgung"
  - "dc-dc"
draft: false
---

# DC-DC-Wandler

![Schaubild zu DC-DC-Wandlern.](/schlaufuchs-platform/images/overviews/v150/dc-dc-wandler.svg)

*Das Schaubild zeigt den Weg von einer Eingangsspannung zur geregelten Ausgangsspannung.*



Ein DC-DC-Wandler wandelt eine Gleichspannung in eine andere Gleichspannung um. Anders als ein einfacher linearer Regler arbeitet er meist schaltend: Energie wird in schnellen Takten in Spulen, Kondensatoren und Schaltern zwischengespeichert. Dadurch können hohe Wirkungsgrade erreicht werden.

## Einordnung

DC-DC-Wandler sind überall dort wichtig, wo Batterielaufzeit, Wärme oder große Spannungsunterschiede eine Rolle spielen. Sie können Spannungen absenken, erhöhen oder je nach Bauart beides. Gleichzeitig bringen sie neue Themen wie Schaltfrequenz, Ripple und elektromagnetische Störungen mit.

## Zentrale Aspekte

- **Step-down-Wandler zur Absenkung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Step-up-Wandler zur Erhöhung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Wirkungsgrad und Wärme:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.
- **Ripple, Layout und Störabstrahlung:** Dieser Aspekt hilft, das Thema nicht nur als Einzelbegriff, sondern als Teil eines größeren Zusammenhangs zu verstehen.

## Beispiele und Zusammenhang

Ein batteriebetriebenes Gerät kann mit einem Step-up-Wandler aus einer einzelnen Zelle eine höhere Betriebsspannung erzeugen. Ein 12-V-System kann mit einem Step-down-Wandler eine 5-V- oder 3,3-V-Schiene speisen. In beiden Fällen ist die Beschaltung nach Datenblatt entscheidend.

## Abgrenzung

Ein DC-DC-Wandler ist nicht automatisch besser als ein linearer Regler. Er ist effizienter, aber komplexer und kann Störungen erzeugen. Für sehr rauscharme Analogschaltungen kann ein linearer Regler trotz geringerer Effizienz sinnvoll sein.

## Häufige Missverständnisse

Häufig wird der Wandler nur nach Ausgangsspannung ausgewählt. Entscheidend sind aber auch Strombedarf, Eingangsspannungsbereich, Effizienz, Ripple, Schutzfunktionen und Layoutvorgaben. Besonders ungünstig sind lange Leitungen in schnellen Strompfaden.

## Kurz zusammengefasst

- Schaltregler sind effizient, aber layout- und störungssensibel.
- Wandler müssen zur Last und zum Spannungsbereich passen.
- Ripple und EMV sind bei DC-DC-Wandlern normale Planungsthemen.
