---
title: "Kommandozeilen-Datenpipelines"
description: "Überblick über die Kombination von sort, uniq und cut zur einfachen Auswertung von Textdaten."
subject: "linux"
section: "Textwerkzeuge"
topicPath: ["kommandozeilen-datenpipelines", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Textwerkzeuge"]
draft: false
---
# Kommandozeilen-Datenpipelines

## Begriff

sort, uniq und cut sind klassische Textwerkzeuge, um Spalten auszuwählen, Werte zu sortieren und Wiederholungen zusammenzufassen.

Der Begriff ist vor allem als Orientierungspunkt wichtig. Er hilft, einzelne Spezialfälle nicht isoliert zu betrachten, sondern in einen größeren Zusammenhang einzuordnen.

## Bedeutung und Zweck

Sie ermöglichen schnelle Auswertungen ohne Tabellenkalkulation oder eigenes Programm.

In der Praxis ist das Thema deshalb nicht nur eine einzelne Technik oder ein einzelner Rechenschritt. Es beschreibt, welche Annahmen gelten, welche Entscheidungen vorbereitet werden und welche Grenzen vor einer genaueren Behandlung sichtbar sein sollten.

## Typische Teilaspekte

- cut trennt einfache Spalten oder Zeichenbereiche heraus.
- sort ordnet Zeilen und bereitet sie für uniq vor.
- uniq erkennt gleiche benachbarte Zeilen und kann Häufigkeiten zählen.

Diese Teilaspekte sollten getrennt betrachtet werden. Viele Fehler entstehen, wenn ein sichtbares Ergebnis richtig aussieht, aber die zugrunde liegenden Bedingungen nicht geprüft wurden.

## Abgrenzung

Diese Werkzeuge arbeiten zeilenorientiert und sind für komplexe CSV- oder JSON-Strukturen nur begrenzt geeignet.

Die Abgrenzung ist wichtig, weil ähnliche Begriffe oft nebeneinander auftauchen. Ein Überblick klärt zuerst die Grundidee, bevor konkrete Verfahren, Spezialfälle oder Rechenwege sinnvoll bewertet werden können.

## Beispielhafte Einordnung

Aus einem Log lassen sich IP-Adressen extrahieren, sortieren und nach Häufigkeit zählen.

Das Beispiel zeigt nicht alle Details, macht aber die Rolle des Begriffs sichtbar: Er ordnet eine Situation, bevor entschieden wird, welche konkrete Methode oder welches Werkzeug passt.

## Häufiges Missverständnis

Ein häufiger Fehler ist, uniq ohne vorheriges sort zu verwenden und dadurch nur direkt benachbarte Duplikate zu zählen.

Ein gutes Verständnis beginnt deshalb nicht mit möglichst vielen Einzelfällen, sondern mit der Frage, was der Begriff leisten soll und wo seine Grenzen liegen.

## Zusammenhang mit weiteren Themen

Kommandozeilen-Datenpipelines steht selten allein. Es berührt benachbarte Themen wie Modellbildung, Messung, Struktur, Fehlerbehandlung oder Darstellung. Wer diese Verbindungen erkennt, kann Spezialseiten später leichter einordnen und vermeidet, aus einem Einzelfall eine falsche allgemeine Regel abzuleiten.
