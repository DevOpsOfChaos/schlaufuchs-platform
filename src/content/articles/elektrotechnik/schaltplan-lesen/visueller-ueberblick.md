---
title: "Schaltplan lesen"
description: "Allgemeiner Überblick darüber, wie Schaltpläne als Funktions-, Verbindungs- und Prüfdokument gelesen werden."
subject: elektrotechnik
section: "Schaltungstechnik"
topicPath:
  - "schaltplan-lesen"
learningGoals:
  - "Du kannst Schaltpläne als abstrakte Darstellung elektrischer Zusammenhänge einordnen."
  - "Du erkennst Netze, Bezugspunkte und Funktionsgruppen."
  - "Du verstehst, warum räumliche Nähe im Schaltplan nicht automatisch physische Nähe bedeutet."
practiceIdeas: []
commonMistakes:
  - "Den Schaltplan wie eine mechanische Lagezeichnung zu lesen."
  - "Massezeichen, Versorgungssymbole oder Netznamen zu übersehen."
keyTakeaways:
  - "Ein Schaltplan zeigt elektrische Verbindungen, nicht die physische Anordnung."
  - "Netznamen und Bezugspunkte sind zentrale Orientierungshilfen."
recognizeSignals:
  - "Es geht um Bauteile, Netze, Masse, Versorgung, Pins oder Fehlersuche."
selfCheckPoints:
  - "Kann ich in einem Schaltplan Versorgung, Eingang, Verarbeitung und Ausgang unterscheiden?"
level: einfach
tags:
  - "elektrotechnik"
  - "schaltplan"
  - "fehlersuche"
  - "netze"
draft: false
---
# Schaltplan lesen

Ein Schaltplan ist eine technische Sprache. Er zeigt, welche Bauteile elektrisch verbunden sind und welche Funktionsteile eine Schaltung enthält. Er ist jedoch keine maßstäbliche Zeichnung der Leiterplatte und keine Darstellung, wie Bauteile auf dem Tisch liegen.

![Schaltplan als Verbindung von Versorgung, Signalnetz und Funktionsgruppen.](/schlaufuchs-platform/images/overviews/v146/schaltplan-lesen.svg)

*Schaltplan als Verbindung von Versorgung, Signalnetz und Funktionsgruppen.*

## Grundidee

Beim Lesen helfen mehrere Ebenen. Zuerst sucht man Versorgung und Masse, weil sie den Bezug für viele Spannungen bilden. Danach lassen sich Funktionsgruppen erkennen: Eingänge, Schutzbeschaltungen, Signalaufbereitung, Mikrocontroller, Treiber und Ausgänge. Bauteilbezeichnungen, Netznamen und Pins verbinden diese Gruppen miteinander.

## Bedeutung im Zusammenhang

Wichtig ist die Trennung von Leitung und Netz. Zwei Punkte können elektrisch verbunden sein, obwohl im Plan keine lange sichtbare Linie zwischen ihnen gezeichnet ist. Netznamen wie VCC, GND, SDA oder RESET stehen für gemeinsame elektrische Knoten. Wer diese Namen überliest, verliert den Zusammenhang.

## Typische Anwendung

Schaltpläne werden oft für Fehlersuche benutzt. Man verfolgt dann nicht nur Linien, sondern prüft Annahmen: Wo sollte eine Spannung anliegen? Welcher Strompfad ist möglich? Welcher Eingang hängt offen? Welche Schutz- oder Pull-Widerstände beeinflussen das Verhalten?

## Abgrenzung

Ein verbreiteter Fehler ist, im Schaltplan links und rechts als reale Lage zu deuten. Tatsächlich kann ein Bauteil im Plan weit entfernt erscheinen, auf der Leiterplatte aber direkt daneben liegen.

## Woran man das Thema erkennt

Typische Hinweise sind Begriffe, bei denen nicht nur ein einzelner Wert gesucht wird, sondern ein Zusammenhang: Quelle und Ziel, Eingang und Ausgang, Ursache und Wirkung, Darstellung und Bedeutung oder Messung und Interpretation. Genau dann hilft eine Überblicksseite, bevor Spezialfälle behandelt werden.

## Merksatz

Eine gute Übersicht reduziert Details nicht, um ungenau zu werden, sondern um die tragende Struktur sichtbar zu machen.
