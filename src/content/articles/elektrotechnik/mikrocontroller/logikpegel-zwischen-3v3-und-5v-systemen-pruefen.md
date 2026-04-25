---
title: Logikpegel zwischen 3,3-V- und 5-V-Systemen prüfen
description: Verstehe, warum digitale Signale zwischen 3,3 Volt und 5 Volt nicht automatisch gefahrlos zusammenpassen.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - logikpegel-zwischen-3v3-und-5v-systemen-pruefen
learningGoals:
  - Du erklärst, warum ein HIGH-Signal nicht nur „an oder aus“ bedeutet, sondern an Spannungsgrenzen hängt.
  - Du unterscheidest Eingangserkennung von maximal zulässiger Eingangsspannung.
  - Du liest Verbindungen zwischen 3,3-V- und 5-V-Bausteinen ruhiger über Pegel und Grenzwerte.
practiceIdeas:
  - Vergleiche einen 3,3-V-Sensor mit einem 5-V-Mikrocontroller und umgekehrt.
  - Trenne Eingangs-Schwelle, Ausgangspegel und absolute Maximalwerte.
  - Begründe, wann ein Pegelwandler nötig wird und wann nicht.
commonMistakes:
  - HIGH immer als universell gleichwertig zu behandeln.
  - Zu denken, „erkennt noch“ bedeute automatisch auch „darf dauerhaft so angeschlossen werden“.
  - Nur auf die Versorgungsspannung zu schauen, aber nicht auf die Eingangsgrenzen.
keyTakeaways:
  - Kompatibilität digitaler Signale hängt an Schwellen und Grenzwerten.
  - Erkennen und vertragen sind zwei verschiedene Fragen.
  - Besonders bei 3,3-V-zu-5-V-Richtungen muss sauber geprüft werden.
recognizeSignals:
  - Es geht um 3,3 Volt, 5 Volt, HIGH, LOW oder Pegelwandler.
  - Zwei digitale Bausteine mit unterschiedlicher Versorgung sollen verbunden werden.
  - Eine Verbindung funktioniert im Versuch „irgendwie“, wirkt aber elektrisch unsicher.
selfCheckPoints:
  - Kann ich die technische Hauptfrage dieser Schaltung ruhig benennen?
  - Kann ich Ursache, Wirkung und Schutz- oder Hilfsmaßnahme sauber trennen?
  - Kann ich das Thema auf einen ähnlichen Mikrocontroller-Fall übertragen?
tags:
  - elektrotechnik
  - mikrocontroller
  - embedded
level: mittel
draft: false
---

## Grundidee

Digitale Signale wirken oft binär: HIGH oder LOW. Elektrisch steckt dahinter aber eine Spannungswelt mit Schwellen und Grenzwerten. Gerade zwischen 3,3-Volt- und 5-Volt-Systemen ist deshalb sauberes Prüfen wichtiger als bloßes Ausprobieren.

<div class="example-card"><p class="card-kicker">Leitbeispiel</p><h3>Es funktioniert am Tisch – aber ist es auch sauber?</h3><p>Ein 5-V-Controller liest ein 3,3-V-Signal eines Sensors ein. Im Versuch scheint alles zu gehen. Die entscheidende Frage ist aber doppelt: Wird HIGH sicher erkannt? Und ist die Verbindung in beide Richtungen elektrisch zulässig?</p></div>

## Zwei Hauptfragen statt Bauchgefühl

<div class="compare-card"><p class="card-kicker">Prüfraster</p><h3>Erkennen und vertragen sind nicht dasselbe</h3><div class="compare-grid"><div class="compare-item"><strong>Eingang erkennt HIGH?</strong><span>Das betrifft die Schaltschwellen des Eingangs.</span></div><div class="compare-item"><strong>Eingang verträgt die Spannung?</strong><span>Das betrifft absolute Grenzwerte und Schutzstrukturen.</span></div></div></div>

## Typischer Richtungsunterschied

- **3,3 V → 5 V**: Wird das Signal sicher als HIGH erkannt?
- **5 V → 3,3 V**: Ist die Eingangsspannung überhaupt dauerhaft zulässig?

## Mini-Demo: gleiche Logik, andere elektrische Frage

```text
3,3-V-Ausgang an 5-V-Eingang → Schwellen prüfen
5-V-Ausgang an 3,3-V-Eingang → Grenzwerte prüfen
```

## Warum ein Pegelwandler mehr ist als Formalität

Ein Pegelwandler oder passende Beschaltung schafft nicht nur „Lehrbuchschönheit“, sondern verhindert echte Grenzwertverletzungen und unklare Erkennungslagen.

<div class="note-panel"><p><strong>Merke:</strong> Bei Logikpegeln muss immer doppelt gedacht werden: Wird das Signal logisch erkannt und ist es elektrisch erlaubt?</p></div>

