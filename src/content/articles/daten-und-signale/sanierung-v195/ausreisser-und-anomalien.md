---
title: "Ausreißer und Anomalien"
description: "Verstehe auffällige werte prüfen statt löschen als ruhigen Baustein für Daten, Signale, Messung und Übertragung."
subject: "daten-und-signale"
section: "signalverarbeitung-und-uebertragung"
topicPath:
  - "signalverarbeitung-und-uebertragung"
  - "auswertung-und-kommunikation"
  - "ausreisser-und-anomalien"

learningGoals:
  - "Auffällige Werte prüfen statt löschen"
  - "Rohdaten, Darstellung und Interpretation sauber trennen"
  - "einen kleinen prüfbaren nächsten Schritt formulieren"
practiceIdeas:
  - "Entscheide für drei auffällige Messpunkte, wie du sie prüfen würdest."
  - "Prüfe denselben Gedanken an einem zweiten Signalbeispiel."
commonMistakes:
  - "Rohwerte werden vorschnell als fertige Information gelesen."
  - "Ein einzelnes Diagramm wird ohne Messkontext bewertet."
  - "Einheiten, Zeitbezug oder Codierung bleiben unausgesprochen."
keyTakeaways:
  - "Ausreißer können Messfehler oder echte Ereignisse sein."
  - "Kontext entscheidet über den Umgang."
  - "Dokumentation verhindert stille Datenmanipulation."

recognizeSignals:
  - "Das Thema taucht auf, wenn Messwerte, Übertragung oder Darstellung nicht mehr eindeutig lesbar sind."
selfCheckPoints:
  - "Kann ich beschreiben, welche Größe tatsächlich gemessen oder übertragen wird?"
  - "Sind Einheit, Zeitbezug und Codierung benannt?"
  - "Gibt es einen Kontrollpunkt gegen Fehlinterpretation?"
level: "mittel"
tags:
  - "ausreisser"
  - "anomalien"
  - "daten-und-signale"
  - "v195"

draft: false
---

![Didaktische Skizze zu Ausreißer und Anomalien](/schlaufuchs-platform/images/daten-und-signale/sanierung-v195/ausreisser-und-anomalien.svg)

Ausreißer und Anomalien gehört zur Daten-und-Signale-Sanierung v195. Die Seite behandelt das Thema als ruhigen Arbeitsbaustein: Erst wird geklärt, welches Signal oder welche Daten vorliegen, dann wird entschieden, wie sie dargestellt, übertragen oder ausgewertet werden.

## Worum es geht

Auffällige Werte prüfen statt löschen. Wichtig ist dabei, nicht nur auf einzelne Zahlen zu schauen. Daten und Signale brauchen Kontext: Quelle, Einheit, Zeitpunkt, Codierung und Zweck bestimmen, was aus einem Wert wirklich abgeleitet werden darf.

## Warum das im Alltag wichtig ist

Technische Systeme wirken oft eindeutig, weil sie Zahlen liefern. Genau dort entstehen Fehler: Ein Messwert kann verzögert sein, ein Signal kann gestört werden, eine Codierung kann falsch gelesen werden oder eine Übertragung kann nur teilweise angekommen sein.

Darum wird der Umgang mit Daten und Signalen in kleine Prüfschritte zerlegt. So bleibt nachvollziehbar, ob ein Problem bei der Erfassung, Darstellung, Übertragung, Speicherung oder Auswertung liegt.

## Merkpunkte

- Ausreißer können Messfehler oder echte Ereignisse sein.\n- Kontext entscheidet über den Umgang.\n- Dokumentation verhindert stille Datenmanipulation.\n
## Ruhiger Prüfweg

1. **Quelle klären:** Woher stammt der Wert oder das Signal?
2. **Darstellung lesen:** Welche Einheit, Codierung oder Auflösung wird benutzt?
3. **Übertragung prüfen:** Kann auf dem Weg etwas verloren, verzögert oder verändert worden sein?
4. **Auswertung begrenzen:** Welche Aussage ist mit diesen Daten wirklich erlaubt?

## Mini-Beispiel

Wenn ein Sensor plötzlich einen extremen Wert liefert, ist das noch keine fertige Diagnose. Zuerst wird geprüft, ob Zeitstempel, Einheit, Messbereich und Störung plausibel sind. Erst danach wird entschieden, ob es sich um ein echtes Ereignis, einen Messfehler oder ein Darstellungsproblem handelt.
