---
title: "LED-Matrix und Multiplexing"
description: "Überblick über LED-Matrizen, Multiplexing und die Trennung von Spitzenstrom, Durchschnittshelligkeit und Ansteuerlogik."
subject: "elektrotechnik"
section: "Digitale Eingänge und Ausgänge"
topicPath: ["led-matrix-und-multiplexing", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Digitale Eingänge und Ausgänge"]
draft: false
---
# LED-Matrix und Multiplexing

## Begriff

Eine LED-Matrix fasst viele LEDs in Zeilen und Spalten zusammen und schaltet sie zeitlich nacheinander.

Der Begriff ist vor allem als Orientierungspunkt wichtig. Er hilft, einzelne Spezialfälle nicht isoliert zu betrachten, sondern in einen größeren Zusammenhang einzuordnen.

## Bedeutung und Zweck

Multiplexing spart Pins und Treiberkanäle, nutzt aber die Trägheit der menschlichen Wahrnehmung, um eine scheinbar gleichzeitige Anzeige zu erzeugen.

In der Praxis ist das Thema deshalb nicht nur eine einzelne Technik oder ein einzelner Rechenschritt. Es beschreibt, welche Annahmen gelten, welche Entscheidungen vorbereitet werden und welche Grenzen vor einer genaueren Behandlung sichtbar sein sollten.

## Typische Teilaspekte

- Nur ein Teil der LEDs ist zu einem Zeitpunkt aktiv.
- Spitzenstrom und durchschnittlicher Strom müssen getrennt berechnet werden.
- Treiber, Vorwiderstände und Scanfrequenz bestimmen Helligkeit und Flimmern.

Diese Teilaspekte sollten getrennt betrachtet werden. Viele Fehler entstehen, wenn ein sichtbares Ergebnis richtig aussieht, aber die zugrunde liegenden Bedingungen nicht geprüft wurden.

## Abgrenzung

Eine LED-Matrix ist keine einfache Parallelschaltung vieler LEDs. Ohne Strombegrenzung und geeignete Treiber werden Pins oder LEDs überlastet.

Die Abgrenzung ist wichtig, weil ähnliche Begriffe oft nebeneinander auftauchen. Ein Überblick klärt zuerst die Grundidee, bevor konkrete Verfahren, Spezialfälle oder Rechenwege sinnvoll bewertet werden können.

## Beispielhafte Einordnung

Bei einer 8x8-Matrix wird zeilenweise gescannt; jede Zeile leuchtet nur einen Bruchteil der Zeit.

Das Beispiel zeigt nicht alle Details, macht aber die Rolle des Begriffs sichtbar: Er ordnet eine Situation, bevor entschieden wird, welche konkrete Methode oder welches Werkzeug passt.

## Häufiges Missverständnis

Häufig wird die Helligkeit nur über den Vorwiderstand betrachtet. Beim Multiplexing zählt zusätzlich das Tastverhältnis.

Ein gutes Verständnis beginnt deshalb nicht mit möglichst vielen Einzelfällen, sondern mit der Frage, was der Begriff leisten soll und wo seine Grenzen liegen.

## Zusammenhang mit weiteren Themen

LED-Matrix und Multiplexing steht selten allein. Es berührt benachbarte Themen wie Modellbildung, Messung, Struktur, Fehlerbehandlung oder Darstellung. Wer diese Verbindungen erkennt, kann Spezialseiten später leichter einordnen und vermeidet, aus einem Einzelfall eine falsche allgemeine Regel abzuleiten.
