---
title: "Schaltplan lesen"
description: "Allgemeiner Überblick darüber, wie Schaltpläne als Funktions-, Verbindungs- und Prüfdokument gelesen werden."
subject: "elektrotechnik"
section: "Schaltungstechnik"
topicPath: ["schaltplan-lesen", "visueller-ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Schaltungstechnik"]
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
