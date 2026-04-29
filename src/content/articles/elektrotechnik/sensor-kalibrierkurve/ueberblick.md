---
title: "Sensor-Kalibrierkurve"
description: "Überblick über Kalibrierkurven als Verbindung zwischen Rohsignal und physikalischer Messgröße."
subject: "elektrotechnik"
section: "Elektrotechnik"
topicPath: ["sensor-kalibrierkurve", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Elektrotechnik"]
draft: false
---
# Sensor-Kalibrierkurve

Eine Sensor-Kalibrierkurve beschreibt, wie ein Rohsignal in eine gesuchte Messgröße übersetzt wird. Sie verbindet beispielsweise Spannung, Widerstand oder Zählwert mit Temperatur, Druck, Abstand oder Helligkeit.

## Bedeutung im Zusammenhang

Ohne Kalibrierung ist ein Sensorwert oft nur eine Zahl. Die Kalibrierkurve macht sichtbar, welche Bedeutung diese Zahl hat und unter welchen Bedingungen sie gilt.

## Zentrale Teilaspekte

- **Rohwert:** Der direkte Messwert entsteht aus ADC, Spannung, Frequenz oder digitaler Kommunikation.
- **Zuordnung:** Die Kurve ordnet Rohwerten reale Größen zu.
- **Gültigkeitsbereich:** Kalibrierungen gelten nur für bestimmte Sensoren, Temperaturen, Versorgungsspannungen und Messbereiche.

Diese Teilaspekte hängen zusammen, sollten aber nicht zu einem einzigen Schlagwort verkürzt werden. Gerade Überblicksseiten sind dafür da, zuerst die Rolle des Themas zu klären. Erst danach sind Formeln, Befehle, Schaltungen, Codebeispiele oder konkrete Rechenwege sinnvoll einzuordnen.

## Abgrenzung

Kalibrierung ersetzt keine Fehlerbetrachtung. Auch eine gute Kurve hat Toleranzen, Drift und Messunsicherheit.

## Typische Beispiele und Signale

- Ein NTC-Widerstand wird über eine Kennlinie in Temperatur umgerechnet.
- Ein Abstandssensor liefert eine Spannung, die nicht linear zum Abstand sein muss.
- Eine Waage benötigt Nullpunkt und Steigung, bevor Messwerte sinnvoll sind.

Das Thema ist relevant, wenn Rohwerte angezeigt werden, aber noch nicht klar ist, welcher realen Größe sie entsprechen. Solche Signale bedeuten nicht automatisch, dass nur eine Lösung möglich ist. Sie zeigen aber, dass der Begriff als Orientierung hilft und dass vorschnelles Abarbeiten einzelner Schritte leicht zu Fehlentscheidungen führen kann.

## Häufige Missverständnisse

ADC-Zählwerte direkt als physikalische Größe zu behandeln. Dieses Missverständnis ist verbreitet, weil das Thema in Einführungen oft an einem sehr einfachen Beispiel gezeigt wird. In realen Situationen kommen jedoch Randbedingungen, Messgrenzen, Vorwissen, Werkzeuge oder Modellannahmen hinzu. Ein guter Überblick macht diese zusätzlichen Bedingungen sichtbar, ohne sofort in Spezialfälle zu springen.

## Kurz zusammengefasst

Eine Kalibrierkurve übersetzt Rohsignale in Bedeutung und macht Grenzen der Messung sichtbar. Wer diesen Zusammenhang versteht, kann spätere Detailseiten ruhiger lesen: Einzelne Regeln, Befehle, Formeln oder Bauteile erscheinen dann nicht mehr als isolierte Merksätze, sondern als Teile eines größeren Zusammenhangs.
