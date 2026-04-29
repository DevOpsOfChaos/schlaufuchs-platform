---
title: "Prozessersetzung in Bash"
description: "Überblick über Process Substitution als Technik, Befehlsausgaben wie Dateien zu verwenden."
subject: "linux"
section: "Shell"
topicPath: ["prozessersetzung-in-bash", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Shell"]
draft: false
---
# Prozessersetzung in Bash

## Begriff

Process Substitution stellt die Ausgabe oder Eingabe eines Befehls über einen temporären Dateipfad oder Dateideskriptor bereit.

Der Begriff ist vor allem als Orientierungspunkt wichtig. Er hilft, einzelne Spezialfälle nicht isoliert zu betrachten, sondern in einen größeren Zusammenhang einzuordnen.

## Bedeutung und Zweck

Sie erlaubt Vergleiche und Werkzeuge, die Dateinamen erwarten, ohne echte Zwischendateien anzulegen.

In der Praxis ist das Thema deshalb nicht nur eine einzelne Technik oder ein einzelner Rechenschritt. Es beschreibt, welche Annahmen gelten, welche Entscheidungen vorbereitet werden und welche Grenzen vor einer genaueren Behandlung sichtbar sein sollten.

## Typische Teilaspekte

- Syntax wie <(befehl) liefert einen lesbaren Datenstrom.
- Das Verfahren ist besonders nützlich für diff, comm oder while-Konstrukte.
- Es ist shell- und systemabhängig und nicht in reinem POSIX-sh verfügbar.

Diese Teilaspekte sollten getrennt betrachtet werden. Viele Fehler entstehen, wenn ein sichtbares Ergebnis richtig aussieht, aber die zugrunde liegenden Bedingungen nicht geprüft wurden.

## Abgrenzung

Process Substitution ist keine normale Datei mit dauerhaftem Inhalt. Manche Programme erwarten echte seekbare Dateien und funktionieren damit nicht.

Die Abgrenzung ist wichtig, weil ähnliche Begriffe oft nebeneinander auftauchen. Ein Überblick klärt zuerst die Grundidee, bevor konkrete Verfahren, Spezialfälle oder Rechenwege sinnvoll bewertet werden können.

## Beispielhafte Einordnung

diff <(sort a.txt) <(sort b.txt) vergleicht sortierte Ausgaben, ohne separate Dateien zu erzeugen.

Das Beispiel zeigt nicht alle Details, macht aber die Rolle des Begriffs sichtbar: Er ordnet eine Situation, bevor entschieden wird, welche konkrete Methode oder welches Werkzeug passt.

## Häufiges Missverständnis

Oft wird angenommen, der Ausdruck erzeuge eine normale Datei. Tatsächlich ist es meist ein spezieller Zugriff auf einen laufenden Prozess.

Ein gutes Verständnis beginnt deshalb nicht mit möglichst vielen Einzelfällen, sondern mit der Frage, was der Begriff leisten soll und wo seine Grenzen liegen.

## Zusammenhang mit weiteren Themen

Prozessersetzung in Bash steht selten allein. Es berührt benachbarte Themen wie Modellbildung, Messung, Struktur, Fehlerbehandlung oder Darstellung. Wer diese Verbindungen erkennt, kann Spezialseiten später leichter einordnen und vermeidet, aus einem Einzelfall eine falsche allgemeine Regel abzuleiten.
