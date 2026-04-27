---
title: "Sleep-Modes und Energiesparen"
description: "Allgemeiner Überblick über Schlafmodi, Stromsparzustände und Energieplanung bei Mikrocontrollern."
subject: "elektrotechnik"
section: "Mikrocontroller"
topicPath:
  - "sleep-modes-und-energiesparen"
learningGoals:
  - "Du kannst den Begriff einordnen und von ähnlichen Begriffen abgrenzen."
  - "Du kennst typische Teilaspekte und praktische Zusammenhänge."
  - "Du erkennst häufige Missverständnisse zu diesem Thema."
practiceIdeas: []
commonMistakes:
  - "Oft wird der Schlafmodus aktiviert, ohne die übrige Schaltung zu prüfen. Dann bleibt die erwartete Laufzeit aus, weil andere Verbraucher dominieren."
keyTakeaways:
  - "Sleep-Modes sind ein wichtiges Werkzeug für energiearme Mikrocontroller-Systeme. Gute Energieplanung betrachtet den gesamten Zyklus und alle Verbraucher."
  - "Energiesparen ist nicht nur eine Softwareeinstellung. Hardwareauswahl, Versorgung, Messmethode und Leckströme bestimmen die reale Wirkung."
recognizeSignals:
  - "Es geht um Grundlagen, Einordnung, Begriffe oder typische Fehlerbilder zu diesem Thema."
selfCheckPoints:
  - "Kann ich den Begriff ruhig und allgemein erklären?"
  - "Kann ich ein Beispiel nennen, ohne direkt in eine Spezialaufgabe zu springen?"
level: "mittel"
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "energiesparen"
  - "sleep"
draft: false
---

# Sleep-Modes und Energiesparen

Sleep-Modes sind Betriebszustände, in denen ein Mikrocontroller Teile seiner Hardware abschaltet oder verlangsamt, um Energie zu sparen.

Bei batteriebetriebenen Geräten entscheidet nicht nur der aktive Rechenstrom, sondern vor allem das Verhältnis von Wachzeit, Schlafzeit und Peripherieverbrauch über die Laufzeit.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Unterschiedliche Schlafmodi schalten unterschiedliche Takte und Peripherieblöcke ab.
- Interrupts, Timer oder externe Signale können den Controller wieder aufwecken.
- Sensoren, Spannungsregler und Pull-ups können im Schlafzustand weiterhin Strom verbrauchen.

## Abgrenzung

Energiesparen ist nicht nur eine Softwareeinstellung. Hardwareauswahl, Versorgung, Messmethode und Leckströme bestimmen die reale Wirkung.

## Beispiele

- Ein Datenlogger kann die meiste Zeit schlafen und nur kurz messen.
- Ein dauerhaft aktiver LED-Indikator kann mehr Energie verbrauchen als der Controller selbst.

## Häufiges Missverständnis

Oft wird der Schlafmodus aktiviert, ohne die übrige Schaltung zu prüfen. Dann bleibt die erwartete Laufzeit aus, weil andere Verbraucher dominieren.

## Kurz zusammengefasst

Sleep-Modes sind ein wichtiges Werkzeug für energiearme Mikrocontroller-Systeme. Gute Energieplanung betrachtet den gesamten Zyklus und alle Verbraucher.
