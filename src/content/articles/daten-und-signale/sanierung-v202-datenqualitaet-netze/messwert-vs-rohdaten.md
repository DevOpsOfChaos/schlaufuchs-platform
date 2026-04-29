---
title: "Messwert und Rohdaten trennen"
description: "Verstehe, wie messwert und rohdaten trennen Daten, Signale und Systeme belastbarer macht."
subject: "daten-und-signale"
section: "datenqualitaet"
topicPath: ["datenqualitaet-und-netze", "datenqualitaet", "messwert-vs-rohdaten"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["daten-und-signale", "datenqualitaet", "datenqualitaet-und-netze", "messwert-vs-rohdaten"]
draft: false
---
![Messwert und Rohdaten trennen](/schlaufuchs-platform/images/daten-und-signale/v202-datenqualitaet-netze/messwert-vs-rohdaten.svg)

Messwert und Rohdaten trennen ist ein wichtiger Baustein, wenn Daten und Signale nicht nur gesammelt, sondern **verständlich und prüfbar** genutzt werden sollen. Der Blick richtet sich nicht auf eine einzelne Zahl, sondern auf die Kette aus Quelle, Übertragung, Verarbeitung und Entscheidung.

## Grundidee

Rohdaten sind nicht automatisch belastbare Messwerte; sie brauchen Einheit, Kontext und Prüfung.

In der Praxis entsteht ein belastbarer Wert erst dann, wenn klar ist, woher er kommt, in welcher Einheit er gilt, wann er entstanden ist und welche Grenzen bei der Interpretation gelten. Deshalb lohnt es sich, Daten immer als Ergebnis eines Weges zu lesen.

## Drei Prüffragen

1. **Quelle:** Welches Gerät, welcher Dienst oder welcher Prozess erzeugt den Wert?
2. **Form:** In welchem Format, mit welcher Einheit und mit welchem Zeitbezug liegt der Wert vor?
3. **Folge:** Welche Entscheidung oder welche weitere Verarbeitung hängt von diesem Wert ab?

Diese Fragen verhindern, dass Rohdaten vorschnell wie fertige Aussagen behandelt werden.

## Typische Stolperstellen

Häufig werden Werte direkt verglichen, obwohl Einheit, Messintervall oder Gültigkeitsbereich nicht identisch sind. Ebenso kann eine technische Störung wie ein fachlicher Effekt aussehen, wenn Logs, Zeitstempel und Grenzwerte nicht zusammen betrachtet werden.

## Sauberer Arbeitsweg

Beginne mit einer kleinen Skizze: Quelle → Übertragung → Speicherung → Auswertung → Reaktion. Ergänze an jedem Schritt, welche Information verloren gehen, verzögert eintreffen oder falsch interpretiert werden kann. So wird aus einer unübersichtlichen Datenstrecke ein prüfbarer Ablauf.

## Merksatz

Messwert und Rohdaten trennen bedeutet: Daten nicht isoliert lesen, sondern mit Quelle, Kontext, Grenze und Folgeentscheidung verbinden.
